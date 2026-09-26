// =========================================================================
// DATA MATERI PYTHON: BAB 1 - PYTHON TUTORIAL (BAGIAN 4: LESSONS 37 - 47)
// Standar Granularitas Mandiri per Sub-Topik Sesuai Aturan Pasal #27 AGENTS.md
// =========================================================================

module.exports = [
  // ── 37. PYTHON OPERATORS ─────────────────────────────────────────────────
  {
    id: 'python-operators',
    title: 'Python Operators - Python Operators',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 36,
    overview: 'Pengantar 7 kategori operator di Python: Aritmatika, Penugasan, Perbandingan, Logika, Identitas, Keanggotaan, dan Bitwise.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">⚡ Pengantar Python Operators</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Operator adalah simbol khusus untuk memanipulasi operan, mengevaluasi logika, dan mengolah bit data di Python.
          </p>
        </div>
      </div>
    `,
    code: `a = 10\nb = 3\nprint("Penjumlahan:", a + b)\nprint("Perkalian  :", a * b)`,
    codeExplanation: ['Operator "+" dan "*" melakukan kalkulasi aritmatika dasar.'],
    challenge: {
      instruction: 'Kalikan 12 dengan 8 menggunakan operator perkalian *.',
      starterCode: 'print(12 * 8)',
      hint: 'Gunakan 12 * 8.'
    },
    quiz: {
      question: 'Berapa kelompok utama operator yang tersedia di bahasa Python?',
      options: ['7 kelompok utama', '1 kelompok saja', '20 kelompok', '100 kelompok'],
      correctIndex: 0,
      explanation: 'Python memiliki 7 kategori operator utama: Arithmetic, Assignment, Comparison, Logical, Identity, Membership, dan Bitwise.'
    }
  },

  // ── 38. PYTHON ARITHMETIC OPERATORS ──────────────────────────────────────
  {
    id: 'python-arithmetic-operators',
    title: 'Python Operators - Arithmetic Operators',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 37,
    overview: 'Operator matematika di Python: + (tambah), - (kurang), * (kali), / (bagi float), // (floor division), % (modulo), dan ** (pangkat).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">➕ Operator Aritmatika</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Kuasai floor division <code>//</code> (pembulatan ke bawah) dan perpangkatan <code>**</code>.
          </p>
        </div>
      </div>
    `,
    code: `print("Floor Division (17 // 5):", 17 // 5)\nprint("Sisa Bagi / Modulo (17 % 5):", 17 % 5)\nprint("Perpangkatan (2 ** 8):", 2 ** 8)`,
    codeExplanation: ['17 // 5 menghasilkan 3 (dibulatkan ke bawah) dan 17 % 5 menghasilkan 2 (sisa bagi).'],
    challenge: {
      instruction: 'Hitung 2 pangkat 10 menggunakan operator **.',
      starterCode: 'print(2 ** 10)',
      hint: 'Gunakan 2 ** 10.'
    },
    quiz: {
      question: 'Operator apakah yang digunakan di Python untuk melakukan operasi pemangkatan bilangan (power of)?',
      options: ['Tanda bintang ganda ( ** )', 'Tanda sisipan ( ^ )', 'Fungsi pow_only()', 'Tanda persen ( % )'],
      correctIndex: 0,
      explanation: 'Operator ** digunakan untuk perpangkatan di Python (contoh: 2 ** 3 = 8).'
    }
  },

  // ── 39. PYTHON ASSIGNMENT OPERATORS ──────────────────────────────────────
  {
    id: 'python-assignment-operators',
    title: 'Python Operators - Assignment Operators',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 38,
    overview: 'Operator penugasan ringkas (=, +=, -=, *=, /=, //=, %=, **=) dan Walrus Operator (:=) di Python 3.8+.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📝 Operator Penugasan (Assignment)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Shorthand penugasan memperbarui nilai variabel secara langsung: <code>x += 5</code> sama dengan <code>x = x + 5</code>.
          </p>
        </div>
      </div>
    `,
    code: `skor = 100\nskor += 25  # skor = skor + 25\nskor *= 2   # skor = skor * 2\nprint(f"Skor Akhir: {skor}")`,
    codeExplanation: ['"skor += 25" menambahkan 25 ke nilai variabel skor saat ini.'],
    challenge: {
      instruction: 'Gunakan operator += untuk menambahkan 50 ke variabel saldo = 100.',
      starterCode: `saldo = 100\nsaldo += 50\nprint("Saldo:", saldo)`,
      hint: 'Gunakan saldo += 50.'
    },
    quiz: {
      question: 'Ekspresi manakah yang setara dengan perintah: x += 10 ?',
      options: ['x = x + 10', 'x = 10', 'x + 10 = x', 'x == 10'],
      correctIndex: 0,
      explanation: 'Ekspresi x += 10 adalah penulisan singkat dari x = x + 10.'
    }
  },

  // ── 40. PYTHON TERNARY OPERATOR ──────────────────────────────────────────
  {
    id: 'python-ternary-operator',
    title: 'Python Operators - Ternary Operator',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 39,
    overview: 'Penulisan ekspresi kondisional satu baris (Conditional Expression / Ternary Operator: [on_true] if [condition] else [on_false]).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔀 Ternary Operator (Kondisional 1 Baris)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Sintaks: <code>hasil = "Lulus" if nilai >= 75 else "Remedial"</code>.
          </p>
        </div>
      </div>
    `,
    code: `nilai = 85\nstatus = "LULUS" if nilai >= 75 else "REMEDIAL"\nprint(f"Hasil Evaluasi: {status}")`,
    codeExplanation: ['Kondisi dievaluasi dalam satu baris ekspresi ringkas.'],
    challenge: {
      instruction: 'Gunakan ternary operator untuk menentukan status = "Dewasa" if usia >= 17 else "Anak".',
      starterCode: `usia = 20\nstatus = "Dewasa" if usia >= 17 else "Anak"\nprint("Status:", status)`,
      hint: 'Gunakan format: "Dewasa" if usia >= 17 else "Anak".'
    },
    quiz: {
      question: 'Sintaks manakah yang merupakan format baku Ternary Operator di Python?',
      options: ['[A] if [kondisi] else [B]', '[kondisi] ? [A] : [B]', 'if [kondisi] then [A] else [B]', 'select([kondisi], [A], [B])'],
      correctIndex: 0,
      explanation: 'Python menggunakan sintaks "x if kondisi else y".'
    }
  },

  // ── 41. PYTHON COMPARISON OPERATORS ──────────────────────────────────────
  {
    id: 'python-comparison-operators',
    title: 'Python Operators - Comparison Operators',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 40,
    overview: 'Operator perbandingan relasional (==, !=, >, <, >=, <=) dan teknik Chained Comparison (contoh: 18 <= usia < 60).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">⚖️ Operator Perbandingan & Chaining</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Python mendukung perbandingan berantai: <code>10 <= x <= 20</code> (ekivalen dengan <code>x >= 10 and x <= 20</code>).
          </p>
        </div>
      </div>
    `,
    code: `usia = 25\nis_usia_kerja = 18 <= usia <= 55\nprint(f"Masuk Kategori Usia Kerja: {is_usia_kerja}")`,
    codeExplanation: ['"18 <= usia <= 55" mengevaluasi rentang nilai secara elegan.'],
    challenge: {
      instruction: 'Uji apakah nilai x = 15 berada dalam rentang 10 <= x <= 20.',
      starterCode: `x = 15\nprint(10 <= x <= 20)`,
      hint: 'Gunakan 10 <= x <= 20.'
    },
    quiz: {
      question: 'Apakah hasil dari evaluasi perbandingan berantai: 5 < 10 < 20 di Python?',
      options: ['True', 'False', 'Error Syntax', 'None'],
      correctIndex: 0,
      explanation: 'Kedua perbandingan (5 < 10 dan 10 < 20) bernilai True.'
    }
  },

  // ── 42. PYTHON LOGICAL OPERATORS ─────────────────────────────────────────
  {
    id: 'python-logical-operators',
    title: 'Python Operators - Logical Operators',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 41,
    overview: 'Operator logika and, or, not dan sifat Short-Circuit Evaluation pada percabangan kode Python.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🧠 Operator Logika (and, or, not)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan kata kunci bahasa Inggris: <code>and</code>, <code>or</code>, <code>not</code> (bukan simbol <code>&&</code> atau <code>||</code>).
          </p>
        </div>
      </div>
    `,
    code: `punya_ktp = True\nsudah_vaksin = False\nprint("Boleh Berpergian:", punya_ktp and sudah_vaksin)\nprint("Negasi vaksin   :", not sudah_vaksin)`,
    codeExplanation: ['"not sudah_vaksin" membalik nilai False menjadi True.'],
    challenge: {
      instruction: 'Gunakan operator not untuk membalik nilai is_logged_in = False.',
      starterCode: `is_logged_in = False\nprint(not is_logged_in)`,
      hint: 'Gunakan not is_logged_in.'
    },
    quiz: {
      question: 'Simbol manakah yang TIDAK DIGUNAKAN di Python untuk operator logika AND?',
      options: ['Simbol && (Python menggunakan kata kunci and)', 'Kata and', 'Kombinasi and dengan not', 'Ekspresi bertingkat and'],
      correctIndex: 0,
      explanation: 'Python menggunakan kata "and" dan bukan simbol "&&".'
    }
  },

  // ── 43. PYTHON IDENTITY OPERATORS ────────────────────────────────────────
  {
    id: 'python-identity-operators',
    title: 'Python Operators - Identity Operators',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 42,
    overview: 'Operator identitas is dan is not: membandingkan kesamaan alamat memori (Memory Address id()) vs kesamaan nilai (==).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🆔 Operator Identitas (is vs ==)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            <code>==</code> membandingkan <strong>nilai data</strong>. <code>is</code> membandingkan apakah kedua variabel menunjuk ke <strong>objek memori yang sama</strong>.
          </p>
        </div>
      </div>
    `,
    code: `list_a = [1, 2, 3]\nlist_b = [1, 2, 3]\nprint("Nilai Sama (==):", list_a == list_b)\nprint("Objek Sama (is):", list_a is list_b)`,
    codeExplanation: ['list_a dan list_b memiliki nilai sama (== True), tetapi merupakan 2 objek memori terpisah (is False).'],
    challenge: {
      instruction: 'Bandingkan variabel data dengan None menggunakan operator "is None".',
      starterCode: `data = None\nprint(data is None)`,
      hint: 'Gunakan data is None.'
    },
    quiz: {
      question: 'Manakah cara paling Pythonic dan direkomendasikan PEP 8 untuk memeriksa apakah variabel x bernilai None?',
      options: ['if x is None:', 'if x == None:', 'if x.equals(None):', 'if typeof(x) == None:'],
      correctIndex: 0,
      explanation: 'PEP 8 merekomendasikan operator "is None" untuk memeriksa nilai singleton None.'
    }
  },

  // ── 44. PYTHON MEMBERSHIP OPERATORS ──────────────────────────────────────
  {
    id: 'python-membership-operators',
    title: 'Python Operators - Membership Operators',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 43,
    overview: 'Operator keanggotaan in dan not in untuk menguji keberadaan elemen di dalam string, list, tuple, set, dan dictionary keys.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔍 Operator Keanggotaan (in / not in)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan <code>in</code> untuk memeriksa keberadaan elemen di dalam koleksi: <code>"apel" in daftar_buah</code>.
          </p>
        </div>
      </div>
    `,
    code: `skills = ["HTML", "CSS", "Python", "SQL"]\nprint("Paham Python:", "Python" in skills)\nprint("Belum Rust   :", "Rust" not in skills)`,
    codeExplanation: ['"in" mengembalikan True jika elemen ada dalam list.'],
    challenge: {
      instruction: 'Uji apakah huruf "a" terdapat di dalam string "Jakarta" menggunakan operator in.',
      starterCode: `print("a" in "Jakarta")`,
      hint: 'Gunakan "a" in "Jakarta".'
    },
    quiz: {
      question: 'Operator apakah yang digunakan untuk menguji apakah suatu elemen berada di dalam koleksi data?',
      options: ['in', 'contains', 'has', 'exists'],
      correctIndex: 0,
      explanation: 'Operator keanggotaan Python adalah "in" dan "not in".'
    }
  },

  // ── 45. PYTHON BITWISE OPERATORS ─────────────────────────────────────────
  {
    id: 'python-bitwise-operators',
    title: 'Python Operators - Bitwise Operators',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 44,
    overview: 'Manipulasi biner bitwise tingkat rendah: & (AND), | (OR), ^ (XOR), ~ (NOT), << (Zero fill left shift), >> (Signed right shift).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">⚙️ Bitwise Operators (Manipulasi Bit)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Bitwise memproses integer pada level representasi biner 0 dan 1.
          </p>
        </div>
      </div>
    `,
    code: `a = 6  # biner: 110\nb = 3  # biner: 011\nprint("Bitwise AND (6 & 3):", a & b)  # 010 -> 2\nprint("Bitwise OR  (6 | 3):", a | b)  # 111 -> 7`,
    codeExplanation: ['6 & 3 menghasilkan 2 karena hanya bit tengah yang sama-sama bernilai 1.'],
    challenge: {
      instruction: 'Hitung hasil bitwise AND antara 5 dan 1 menggunakan 5 & 1.',
      starterCode: `print(5 & 1)`,
      hint: 'Gunakan 5 & 1.'
    },
    quiz: {
      question: 'Operator bitwise manakah yang menghasilkan nilai 1 hanya jika salah satu bit bernilai 1 (Exclusive OR)?',
      options: ['Simbol caret ( ^ )', 'Simbol ampersand ( & )', 'Simbol pipe ( | )', 'Simbol tilde ( ~ )'],
      correctIndex: 0,
      explanation: 'Operator XOR (^) bernilai 1 jika bit berbeda dan 0 jika bit sama.'
    }
  },

  // ── 46. PYTHON OPERATOR PRECEDENCE ───────────────────────────────────────
  {
    id: 'python-operator-precedence',
    title: 'Python Operators - Operator Precedence',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 45,
    overview: 'Urutan prioritas eksekusi operator (Operator Precedence / PEMDAS) dan penggunaan kurung () untuk kontrol alur kalkulasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📐 Prioritas Operator (Precedence)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Kurung <code>()</code> &rarr; Pangkat <code>**</code> &rarr; Kali/Bagi <code>* / // %</code> &rarr; Tambah/Kurang <code>+ -</code> &rarr; Perbandingan &rarr; Logika.
          </p>
        </div>
      </div>
    `,
    code: `hasil_1 = 5 + 3 * 2\nhasil_2 = (5 + 3) * 2\nprint("Tanpa Kurung:", hasil_1)  # 11\nprint("Dengan Kurung:", hasil_2)  # 16`,
    codeExplanation: ['Perkalian diproses sebelum penambahan kecuali jika kurung () digunakan.'],
    challenge: {
      instruction: 'Gunakan tanda kurung () agar operasi (10 + 20) * 2 menghasilkan 60.',
      starterCode: `print((10 + 20) * 2)`,
      hint: 'Gunakan kurung (10 + 20).'
    },
    quiz: {
      question: 'Manakah operator yang memiliki tingkat prioritas (precedence) paling tinggi di Python?',
      options: ['Tanda kurung ()', 'Operator tambah (+)', 'Operator and', 'Operator sama dengan (==)'],
      correctIndex: 0,
      explanation: 'Ekspresi di dalam tanda kurung () selalu dievaluasi paling awal.'
    }
  },

  // ── 47. PYTHON OPERATORS CHALLENGE ───────────────────────────────────────
  {
    id: 'python-operators-challenge',
    title: 'Python Operators - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 46,
    overview: 'Tantangan evaluasi kelayakan diskon promo belanja berdasarkan total belanja, status membership, dan voucher kupon.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Kalkulasi Diskon Promo</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Integrasikan operator perbandingan, keanggotaan <code>in</code>, dan logika di live editor.
          </p>
        </div>
      </div>
    `,
    code: `total_belanja = 250000\nkupon = "PROMO50"\nvalid_kupon = ["DISKON10", "PROMO50", "SUPERDEAL"]\ndapat_diskon = total_belanja >= 200000 and (kupon in valid_kupon)\nprint(f"Status Promo Aktif: {dapat_diskon}")`,
    codeExplanation: ['Kombinasi membership "in", logika "and", dan perbandingan.'],
    challenge: {
      instruction: 'Gunakan ternary untuk menetapkan "VIP" jika skor >= 90 else "Reguler".',
      starterCode: `skor = 95\ntipe = "VIP" if skor >= 90 else "Reguler"\nprint("Tipe Akun:", tipe)`,
      hint: 'Gunakan ternary expression.'
    },
    quiz: {
      question: 'Apakah hasil ekspresi: (10 > 2) and ("a" in "apel") ?',
      options: ['True', 'False', 'None', 'Error'],
      correctIndex: 0,
      explanation: 'Kedua kondisi bernilai True (10>2 bernilai True dan "a" ada di "apel").'
    }
  }
];
