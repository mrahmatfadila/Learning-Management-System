// =========================================================================
// DATA MATERI PYTHON: BAB 1 - PYTHON TUTORIAL (BAGIAN 3: LESSONS 26 - 36)
// Standar Granularitas Mandiri per Sub-Topik Sesuai Aturan Pasal #27 AGENTS.md
// =========================================================================

module.exports = [
  // ── 26. PYTHON STRINGS ───────────────────────────────────────────────────
  {
    id: 'python-strings',
    title: 'Python Strings - Python Strings',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 25,
    overview: 'Konsep dasar string di Python: larik karakter immutable, string literal kutip tunggal/ganda, dan fungsi len().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📜 Dasar Python Strings</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            String di Python diperlakukan sebagai larik karakter yang tidak dapat diubah (<strong>Immutable Sequence</strong>).
          </p>
        </div>
      </div>
    `,
    code: `teks = "Python"\nprint(f"Kata: {teks} | Panjang: {len(teks)} karakter")\nprint(f"Huruf Pertama: {teks[0]}")`,
    codeExplanation: ['len(teks) menghitung total karakter dalam string dan teks[0] mengakses huruf indeks ke-0.'],
    challenge: {
      instruction: 'Cetak panjang karakter dari string "Belajar Python" menggunakan fungsi len().',
      starterCode: `teks = "Belajar Python"\nprint("Panjang teks:", len(teks))`,
      hint: 'Gunakan len(teks).'
    },
    quiz: {
      question: 'Fungsi bawaan Python apakah yang digunakan untuk menghitung jumlah panjang karakter dari sebuah string?',
      options: ['len()', 'length()', 'size()', 'count()'],
      correctIndex: 0,
      explanation: 'Fungsi bawaan len() mengembalikan panjang karakter string atau ukuran koleksi.'
    }
  },

  // ── 27. PYTHON SLICING STRINGS ───────────────────────────────────────────
  {
    id: 'python-slicing-strings',
    title: 'Python Strings - Slicing Strings',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 26,
    overview: 'Pemotongan indeks string (Slicing) [start:stop:step], indeks negatif, dan trik membalik string [::-1].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">✂️ String Slicing [start:stop:step]</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Potong bagian string: <code>teks[0:5]</code>, indeks akhir <code>teks[-1]</code>, dan balik string <code>teks[::-1]</code>.
          </p>
        </div>
      </div>
    `,
    code: `s = "PYTHONIC"\nprint("Slicing 0 s/d 6 :", s[:6])\nprint("String Terbalik :", s[::-1])`,
    codeExplanation: ['"s[:6]" mengambil 6 karakter pertama dan "s[::-1]" membalik urutan string dengan step -1.'],
    challenge: {
      instruction: 'Ambil 3 karakter pertama dari string "KODING".',
      starterCode: `kata = "KODING"\nprint("3 Huruf Awal:", kata[:3])`,
      hint: 'Gunakan kata[:3].'
    },
    quiz: {
      question: 'Sintaks slicing manakah yang membalikkan urutan string di Python secara instan?',
      options: ['string[::-1]', 'string.reverse()', 'reverse(string)', 'string[-1:0]'],
      correctIndex: 0,
      explanation: 'Sintaks string[::-1] adalah idiom Pythonic untuk membalik string.'
    }
  },

  // ── 28. PYTHON MODIFY STRINGS ────────────────────────────────────────────
  {
    id: 'python-modify-strings',
    title: 'Python Strings - Modify Strings',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 27,
    overview: 'Transformasi string: mengubah huruf kapital (.upper()), huruf kecil (.lower()), menghapus spasi liar (.strip()), dan mengganti teks (.replace()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🛠️ Transformasi Teks (Modify Strings)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan method bawaan: <code>.upper()</code>, <code>.lower()</code>, <code>.strip()</code>, <code>.replace("lama", "baru")</code>.
          </p>
        </div>
      </div>
    `,
    code: `kalimat = "   Halo Python Modern   "\nprint("Kapital :", kalimat.strip().upper())\nprint("Replace :", kalimat.replace("Modern", "Pro"))`,
    codeExplanation: ['.strip() membersihkan spasi awal/akhir dan .upper() mengubah ke huruf kapital.'],
    challenge: {
      instruction: 'Ubah string "belajar python" menjadi huruf besar semua menggunakan .upper().',
      starterCode: `teks = "belajar python"\nprint(teks.upper())`,
      hint: 'Gunakan teks.upper().'
    },
    quiz: {
      question: 'Method string manakah yang menghapus spasi kosong (whitespace) di awal dan akhir string?',
      options: ['strip()', 'trim()', 'clean()', 'removeSpaces()'],
      correctIndex: 0,
      explanation: 'Di Python, method untuk menghapus whitespace di awal dan akhir adalah strip().'
    }
  },

  // ── 29. PYTHON CONCATENATE STRINGS ───────────────────────────────────────
  {
    id: 'python-concatenate-strings',
    title: 'Python Strings - Concatenate Strings',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 28,
    overview: 'Penggabungan teks (String Concatenation) menggunakan operator tambah (+) dan join method.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔗 Penggabungan String (Concatenate)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gabungkan string dengan operator <code>+</code>. Contoh: <code>"Halo" + " " + "Dunia"</code>.
          </p>
        </div>
      </div>
    `,
    code: `a = "Selamat"\nb = "Pagi"\nsapaan = a + " " + b + "!"\nprint(sapaan)`,
    codeExplanation: ['Operator "+" di antara dua string melakukan penggabungan teks.'],
    challenge: {
      instruction: 'Gabungkan string "Python" dan "3" dipisahkan spasi menggunakan operator +.',
      starterCode: `a = "Python"\nb = "3"\nhasil = a + " " + b\nprint(hasil)`,
      hint: 'Gunakan a + " " + b.'
    },
    quiz: {
      question: 'Operator apakah yang digunakan untuk menggabungkan dua buah string di Python?',
      options: ['Operator plus ( + )', 'Operator titik ( . )', 'Operator ampersand ( & )', 'Operator koma ( , )'],
      correctIndex: 0,
      explanation: 'Operator penambahan (+) digunakan untuk konkatenasi string di Python.'
    }
  },

  // ── 30. PYTHON FORMAT STRINGS ────────────────────────────────────────────
  {
    id: 'python-format-strings',
    title: 'Python Strings - Format Strings',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 29,
    overview: 'Format string modern dengan F-Strings (f"...{var}..."), format desimal (:.2f), dan pemisah ribuan (:,).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">✨ F-Strings (Formatted String Literals)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Awali string dengan <code>f</code> di depan kutip untuk menyisipkan variabel langsung di dalam <code>{ }</code>.
          </p>
        </div>
      </div>
    `,
    code: `harga = 1250000\ndiskon = 0.15\nbayar = harga * (1 - diskon)\nprint(f"Harga Awal: Rp {harga:,}")\nprint(f"Bayar Bersih (Diskon {diskon*100:.0f}%): Rp {int(bayar):,}")`,
    codeExplanation: ['"{harga:,}" menambahkan pemisah koma ribuan dan "{diskon*100:.0f}" memformat desimal.'],
    challenge: {
      instruction: 'Cetak nilai pi = 3.14159 dengan format tepat 2 angka di belakang koma menggunakan :.2f.',
      starterCode: `pi = 3.14159\nprint(f"Nilai Pi: {pi:.2f}")`,
      hint: 'Gunakan {pi:.2f}.'
    },
    quiz: {
      question: 'Format penentu apakah yang digunakan di dalam f-string untuk menampilkan angka float dengan tepat 2 digit desimal?',
      options: [':.2f', ':2d', ':2s', ':f2'],
      correctIndex: 0,
      explanation: 'Format ":.2f" membatasi desimal angka float menjadi tepat 2 digit.'
    }
  },

  // ── 31. PYTHON ESCAPE CHARACTERS ─────────────────────────────────────────
  {
    id: 'python-escape-characters',
    title: 'Python Strings - Escape Characters',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 30,
    overview: 'Karakter khusus backslash escape di Python: \\n (newline), \\t (tab), \\" (quote), dan raw string r"...".',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">⚡ Escape Characters (Karakter Khusus Backslash)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Karakter escape diawali dengan backslash <code>\\</code>: <code>\\n</code> (baris baru), <code>\\t</code> (tab), <code>\\\"</code> (kutip ganda).
          </p>
        </div>
      </div>
    `,
    code: `print("Baris Satu\\nBaris Dua\\n\\tBaris Tiga Menjorok Tab")\nprint("Dia berkata: \\"Python sangat seru!\\"")`,
    codeExplanation: ['"\\n" membuat baris baru dan "\\t" menambahkan tab indentasi horizontal.'],
    challenge: {
      instruction: 'Cetak teks dua baris ("Baris A" dan "Baris B") menggunakan satu fungsi print dengan \\n.',
      starterCode: `print("Baris A\\nBaris B")`,
      hint: 'Gunakan \\n di antara teks.'
    },
    quiz: {
      question: 'Escape character manakah yang digunakan untuk membuat baris baru (newline) di dalam string?',
      options: ['\\n', '\\t', '\\r', '\\b'],
      correctIndex: 0,
      explanation: 'Karakter "\\n" menghasilkan pergantian baris baru (newline).'
    }
  },

  // ── 32. PYTHON STRING METHODS ────────────────────────────────────────────
  {
    id: 'python-string-methods',
    title: 'Python Strings - String Methods',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 31,
    overview: 'Pustaka method bawaan string lengkap: .split(), .join(), .find(), .count(), .startswith(), .endswith(), dan .isdigit().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🛠️ Pustaka Method String Lengkap</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Method bawaan string: <code>.split(",")</code> memecah teks jadi list, <code>.count("a")</code> menghitung frekuensi, dan <code>.isdigit()</code> cek angka.
          </p>
        </div>
      </div>
    `,
    code: `data = "apel,jeruk,mangga,pisang"\nbuah = data.split(",")\nprint("List Buah:", buah)\nprint("Jumlah kata 'apel':", data.count("apel"))`,
    codeExplanation: ['.split(",") memecah string menjadi list berdasarkan karakter pemisah koma.'],
    challenge: {
      instruction: 'Pecah string "HTML CSS JavaScript Python" menjadi list menggunakan .split(" ").',
      starterCode: `s = "HTML CSS JavaScript Python"\nlist_lang = s.split(" ")\nprint(list_lang)`,
      hint: 'Gunakan s.split(" ").'
    },
    quiz: {
      question: 'Method string manakah yang memecah string tunggal menjadi list kata terpisah berdasarkan karakter delimiter?',
      options: ['split()', 'explode()', 'slice()', 'break()'],
      correctIndex: 0,
      explanation: 'Method split() memecah string menjadi list elemen terpisah.'
    }
  },

  // ── 33. PYTHON STRING EXERCISES ──────────────────────────────────────────
  {
    id: 'python-string-exercises',
    title: 'Python Strings - String Exercises',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 32,
    overview: 'Latihan studi kasus pembersihan data teks kotor (Data Cleaning) sebelum diproses ke database.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🏋️ Latihan Pembersihan String</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Bersihkan input email pengguna dari spasi liar dan samakan format huruf kecil di editor.
          </p>
        </div>
      </div>
    `,
    code: `email_input = "   User.Baru@DevGrow.Id   "\nemail_bersih = email_input.strip().lower()\nprint(f"Email Validasi: {email_bersih}")`,
    codeExplanation: ['Kombinasi chaining method .strip().lower() menghasilkan format email baku.'],
    challenge: {
      instruction: 'Bersihkan string "  ADMIN@LMS.COM  " menjadi huruf kecil dan tanpa spasi liar.',
      starterCode: `s = "  ADMIN@LMS.COM  "\nprint(s.strip().lower())`,
      hint: 'Gunakan s.strip().lower().'
    },
    quiz: {
      question: 'Manakah teknik chaining method yang tepat untuk menghapus spasi liar sekaligus mengubah teks ke huruf kecil?',
      options: ['teks.strip().lower()', 'teks.trim().toLower()', 'teks.clean().small()', 'lower(strip(teks))'],
      correctIndex: 0,
      explanation: 'Chaining method teks.strip().lower() dieksekusi berurutan dari kiri ke kanan.'
    }
  },

  // ── 34. PYTHON STRINGS CHALLENGE ─────────────────────────────────────────
  {
    id: 'python-strings-challenge',
    title: 'Python Strings - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 33,
    overview: 'Tantangan koding memeriksa apakah sebuah kata adalah Palindrom (dibaca sama dari depan dan belakang) menggunakan slicing [::-1].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Deteksi Palindrom</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan slicing terbalik <code>kata[::-1]</code> untuk menguji apakah kata "KATAK" adalah palindrom.
          </p>
        </div>
      </div>
    `,
    code: `kata = "KATAK"\nis_palindrom = kata == kata[::-1]\nprint(f"Apakah '{kata}' Palindrom? {is_palindrom}")`,
    codeExplanation: ['"kata == kata[::-1]" membandingkan kata asli dengan kata yang telah dibalik.'],
    challenge: {
      instruction: 'Uji apakah kata "RADAR" adalah palindrom menggunakan kata == kata[::-1].',
      starterCode: `kata = "RADAR"\nprint(kata == kata[::-1])`,
      hint: 'Gunakan kata == kata[::-1].'
    },
    quiz: {
      question: 'Apakah hasil dari evaluasi "MALAM" == "MALAM"[::-1] di Python?',
      options: ['True (karena MALAM adalah palindrom)', 'False', 'None', 'Error Slicing'],
      correctIndex: 0,
      explanation: '"MALAM" dibalik tetap "MALAM", sehingga perbandingannya menghasilkan True.'
    }
  },

  // ── 35. PYTHON BOOLEANS ──────────────────────────────────────────────────
  {
    id: 'python-booleans',
    title: 'Python Booleans - Booleans',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 34,
    overview: 'Tipe data Boolean (True / False), perbandingan relasional (==, !=, >, <), dan evaluasi Truthy/Falsy dengan bool().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">⚖️ Nilai Boolean Python</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Nilai Boolean hanya bernilai <strong><code>True</code></strong> atau <strong><code>False</code></strong>. Evaluasi kebenaran diperiksa dengan <code>bool(x)</code>.
          </p>
        </div>
      </div>
    `,
    code: `print("10 > 5 :", 10 > 5)\nprint("bool('Halo'):", bool("Halo"))\nprint("bool(''):", bool(""))\nprint("bool(0):", bool(0))`,
    codeExplanation: ['Angka 0 dan string kosong "" menghasilkan False (Falsy values).'],
    challenge: {
      instruction: 'Cetak nilai boolean dari perbandingan 100 == 100 dan 100 > 200.',
      starterCode: `print(100 == 100)\nprint(100 > 200)`,
      hint: 'Gunakan perbandingan 100 == 100 dan 100 > 200.'
    },
    quiz: {
      question: 'Manakah nilai di bawah ini yang mengembalikan nilai False saat diuji dengan fungsi bool()?',
      options: ['Angka 0', 'Angka 1', 'String "False"', 'List [0]'],
      correctIndex: 0,
      explanation: 'Angka 0 adalah Falsy value di Python.'
    }
  },

  // ── 36. PYTHON BOOLEANS CHALLENGE ────────────────────────────────────────
  {
    id: 'python-booleans-challenge',
    title: 'Python Booleans - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 35,
    overview: 'Tantangan evaluasi kelayakan akses fitur premium berdasarkan status langganan dan usia menggunakan operator logika and/or.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Gerbang Logika Boolean</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Kombinasikan operator <code>and</code>, <code>or</code>, dan kondisi relasional di editor.
          </p>
        </div>
      </div>
    `,
    code: `punya_tiket = True\nsudah_verifikasi = True\nboleh_masuk = punya_tiket and sudah_verifikasi\nprint(f"Status Izin Masuk: {boleh_masuk}")`,
    codeExplanation: ['Operator "and" memerlukan kedua kondisi bernilai True.'],
    challenge: {
      instruction: 'Tetapkan variabel "akses" bernilai True jika is_admin True atau is_editor True.',
      starterCode: `is_admin = False\nis_editor = True\nakses = is_admin or is_editor\nprint("Izin akses:", akses)`,
      hint: 'Gunakan is_admin or is_editor.'
    },
    quiz: {
      question: 'Apakah hasil ekspresi: (5 > 2) and (10 < 3) ?',
      options: ['False (karena kondisi kedua salah)', 'True', 'None', 'Error'],
      correctIndex: 0,
      explanation: 'Operator "and" menghasilkan False jika salah satu kondisi bernilai False.'
    }
  }
];
