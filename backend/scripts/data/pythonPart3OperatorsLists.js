// =========================================================================
// DATA MATERI PYTHON: BAB 1 - PYTHON TUTORIAL (BATCH 3: LESSONS 13 - 14)
// Standar Kurikulum Enterprise Python 3.x, W3Schools, Python.org & DevGrow LMS
// Sesuai Aturan Baku Pasal #27 AGENTS.md
// =========================================================================

module.exports = [
  // ── 13. PYTHON OPERATORS ─────────────────────────────────────────────────
  {
    id: 'python-operators',
    title: 'Python Operators (Python Operators, Arithmetic Operators, Assignment Operators, Ternary Operator, Comparison Operators, Logical Operators, Identity Operators, Membership Operators, Bitwise Operators, Operator Precedence, Code Challenge)',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 13,
    overview: 'Eksplorasi mendalam seluruh jenis operator di Python: Arithmetic, Assignment, Ternary (Conditional Expression), Comparison, Logical, Identity (is/is not), Membership (in/not in), Bitwise, Operator Precedence (Hierarki Evaluasi), serta Code Challenge interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">SUB-GRUP MATERI LENGKAP</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 13 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚡ Master Panduan Python Operators</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Operator adalah simbol-simbol khusus yang digunakan untuk melakukan manipulasi nilai operan, evaluasi logika, pengecekan identitas memori, dan operasi bit biner.
          </p>
        </div>

        <!-- 1. PYTHON OPERATORS INTRO -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-blue-950 text-blue-300 text-xs font-bold border border-blue-800">Bagian 1</span>
            <h3 class="text-base font-bold text-sky-400">1. Python Operators (Pengenalan Operator)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Python membagi operator menjadi 7 kelompok utama: <em>Aritmatika</em>, <em>Penugasan (Assignment)</em>, <em>Perbandingan (Comparison)</em>, <em>Logika</em>, <em>Identitas (Identity)</em>, <em>Keanggotaan (Membership)</em>, dan <em>Bitwise</em>.
          </p>
        </div>

        <!-- 2. ARITHMETIC OPERATORS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800">Bagian 2</span>
            <h3 class="text-base font-bold text-emerald-400">2. Arithmetic Operators (Operator Aritmatika)</h3>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
            <div class="p-2.5 bg-slate-950 rounded-xl"><code>+</code> : Penjumlahan (5+2=7)</div>
            <div class="p-2.5 bg-slate-950 rounded-xl"><code>-</code> : Pengurangan (5-2=3)</div>
            <div class="p-2.5 bg-slate-950 rounded-xl"><code>*</code> : Perkalian (5*2=10)</div>
            <div class="p-2.5 bg-slate-950 rounded-xl"><code>/</code> : Pembagian Float (5/2=2.5)</div>
            <div class="p-2.5 bg-slate-950 rounded-xl"><code>//</code> : Floor Division (5//2=2)</div>
            <div class="p-2.5 bg-slate-950 rounded-xl"><code>%</code> : Modulo Sisa Bagi (5%2=1)</div>
            <div class="p-2.5 bg-slate-950 rounded-xl"><code>**</code> : Perpangkatan (5**2=25)</div>
          </div>
        </div>

        <!-- 3. ASSIGNMENT OPERATORS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-xs font-bold border border-amber-800">Bagian 3</span>
            <h3 class="text-base font-bold text-amber-400">3. Assignment Operators (Operator Penugasan)</h3>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed">
            Menetapkan nilai ke variabel secara ringkas: <code>=</code>, <code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>//=</code>, <code>%=</code>, <code>**=</code>, serta <strong>Walrus Operator (<code>:=</code>)</strong> di Python 3.8+ untuk menetapkan nilai di dalam ekspresi.
          </p>
        </div>

        <!-- 4. TERNARY OPERATOR -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-xs font-bold border border-purple-800">Bagian 4</span>
            <h3 class="text-base font-bold text-purple-400">4. Ternary Operator (Conditional Expression)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono bg-slate-950 p-3 rounded-xl text-purple-300">
            status = "Lulus" if nilai >= 75 else "Remedial"
          </p>
          <p class="text-xs text-slate-400">Bentuk shorthand satu baris pengganti struktur <code>if...else</code> sederhana.</p>
        </div>

        <!-- 5. COMPARISON OPERATORS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-rose-950 text-rose-300 text-xs font-bold border border-rose-800">Bagian 5</span>
            <h3 class="text-base font-bold text-rose-400">5. Comparison Operators (Operator Perbandingan)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>==</code> (Sama dengan), <code>!=</code> (Tidak sama dengan), <code>&gt;</code> (Lebih besar), <code>&lt;</code> (Lebih kecil), <code>&gt;=</code>, <code>&lt;=</code>
          </p>
        </div>

        <!-- 6. LOGICAL OPERATORS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-xs font-bold border border-cyan-800">Bagian 6</span>
            <h3 class="text-base font-bold text-cyan-400">6. Logical Operators (and, or, not)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            <code>and</code> (True jika kedua kondisi benar), <code>or</code> (True jika salah satu kondisi benar), <code>not</code> (Membalikkan nilai logika).
          </p>
        </div>

        <!-- 7. IDENTITY OPERATORS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-xs font-bold border border-indigo-800">Bagian 7</span>
            <h3 class="text-base font-bold text-indigo-400">7. Identity Operators (is, is not)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Memeriksa apakah dua variabel merujuk pada <strong>lokasi memori objek yang sama persis (id memori)</strong>, bukan hanya nilainya. (Perbedaan: <code>x == y</code> cek nilai, sedangkan <code>x is y</code> cek alamat memori).
          </p>
        </div>

        <!-- 8. MEMBERSHIP OPERATORS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 text-xs font-bold border border-teal-800">Bagian 8</span>
            <h3 class="text-base font-bold text-teal-400">8. Membership Operators (in, not in)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Memeriksa apakah suatu elemen atau substring ada di dalam String, List, Tuple, Set, atau Dictionary: <code>"apel" in buah_list</code>.
          </p>
        </div>

        <!-- 9. BITWISE OPERATORS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 text-xs font-bold border border-yellow-800">Bagian 9</span>
            <h3 class="text-base font-bold text-yellow-400">9. Bitwise Operators (Operasi Biner)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>&amp;</code> (AND), <code>|</code> (OR), <code>^</code> (XOR), <code>~</code> (NOT), <code>&lt;&lt;</code> (Zero fill left shift), <code>&gt;&gt;</code> (Signed right shift).
          </p>
        </div>

        <!-- 10. OPERATOR PRECEDENCE -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-orange-950 text-orange-300 text-xs font-bold border border-orange-800">Bagian 10</span>
            <h3 class="text-base font-bold text-orange-400">10. Operator Precedence (Hierarki / Urutan Evaluasi)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Urutan prioritas dari tertinggi ke terendah: <code>()</code> Kurung &rarr; <code>**</code> Pangkat &rarr; <code>* / // %</code> Perkalian/Pembagian &rarr; <code>+ -</code> Tambah/Kurang &rarr; <code>== != &gt; &lt;</code> Perbandingan &rarr; <code>not and or</code> Logika.
          </p>
        </div>

        <!-- 11. CODE CHALLENGE -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-emerald-500/40 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800">Bagian 11</span>
            <h3 class="text-base font-bold text-emerald-400">11. Code Challenge (Tantangan Operator)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Gunakan operator ternary dan membership <code>in</code> untuk menentukan kelayakan diskon member VIP pada program toko online.
          </p>
        </div>
      </div>
    `,
    code: `# 1. Arithmetic & Precedence
hasil = (10 + 5) * 2 ** 3 // 4
print(f"Hasil kalkulasi: {hasil}")

# 2. Ternary Operator
skor = 85
status = "LULUS" if skor >= 75 else "GAGAL"
print(f"Hasil Ujian: {status}")

# 3. Identity vs Comparison
list_a = [1, 2, 3]
list_b = [1, 2, 3]
list_c = list_a

print("list_a == list_b (Nilai sama)        :", list_a == list_b) # True
print("list_a is list_b (Alamat memori beda) :", list_a is list_b) # False
print("list_a is list_c (Objek yang sama)    :", list_a is list_c) # True

# 4. Membership Operator
daftar_role = ["Admin", "Editor", "Instructor"]
print("Apakah 'Admin' terdaftar?", "Admin" in daftar_role)`,
    codeExplanation: [
      '"(10 + 5) * 2 ** 3 // 4" dievaluasi sesuai precedence: tanda kurung (15) dikalikan hasil pangkat (8) lalu difloor-division oleh 4.',
      'Ternary operator "LULUS" if skor >= 75 else "GAGAL" menyederhanakan kondisional dalam satu baris ekspresi.',
      'Operator "is" mengecek kesamaan identitas memori fisik objek, sedangkan "==" hanya mengecek kesamaan nilai.'
    ],
    challenge: {
      instruction: 'Gunakan operator ternary untuk menetapkan variabel "diskon" bernilai 0.2 jika variabel "is_member" bernilai True, atau 0.05 jika False.',
      starterCode: `is_member = True
diskon = 0.2 if is_member else 0.05
print(f"Persentase diskon: {diskon * 100}%")`,
      hint: 'Gunakan sintaks ternary: nilai_true if kondisi else nilai_false.'
    },
    quiz: {
      question: 'Manakah operator yang digunakan untuk menguji apakah dua variabel mereferensikan objek yang sama persis di alamat memori?',
      options: [
        'is (Identity Operator)',
        '== (Comparison Operator)',
        'in (Membership Operator)',
        'equal()'
      ],
      correctIndex: 0,
      explanation: 'Operator "is" membandingkan identitas memori objek (apakah id(a) == id(b)), sedangkan "==" hanya membandingkan kesamaan nilai kontennya.'
    }
  },

  // ── 14. PYTHON LISTS ─────────────────────────────────────────────────────
  {
    id: 'python-lists',
    title: 'Python Lists (Python Lists, Access List Items, Change List Items, Add List Items, Remove List Items, Loop Lists, List Comprehension, Sort Lists, Copy Lists, Join Lists, List Methods, List Exercises, Code Challenge)',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 14,
    overview: 'Kupas tuntas seluruh 13 sub-topik struktur data Python Lists: Python Lists, Access, Change, Add, Remove, Loop, List Comprehension, Sort, Copy, Join, List Methods, List Exercises, dan Code Challenge interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">STRUKTUR DATA MUTABLE</span>
            <span class="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">Materi 14 / 14</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📋 Master Panduan Python Lists</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            List adalah struktur data koleksi terurut (<em>ordered</em>), dapat diubah isinya (<em>mutable</em>), dan mengizinkan elemen duplikat.
          </p>
        </div>

        <!-- 1. PYTHON LISTS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-blue-950 text-blue-300 text-xs font-bold border border-blue-800">Bagian 1</span>
            <h3 class="text-base font-bold text-sky-400">1. Python Lists (Konsep Dasar List)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Dibuat menggunakan tanda kurung siku (<code>[item1, item2, ...]</code>). List dapat menyimpan bermacam-macam tipe data sekaligus (string, integer, boolean, objek).
          </p>
        </div>

        <!-- 2. ACCESS LIST ITEMS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800">Bagian 2</span>
            <h3 class="text-base font-bold text-emerald-400">2. Access List Items (Pengaksesan & Slicing)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>list[0]</code> (elemen pertama), <code>list[-1]</code> (elemen terakhir), <code>list[2:5]</code> (rentang indeks 2 s/d 4).
          </p>
        </div>

        <!-- 3. CHANGE LIST ITEMS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-amber-950 text-amber-300 text-xs font-bold border border-amber-800">Bagian 3</span>
            <h3 class="text-base font-bold text-amber-400">3. Change List Items (Mengubah Nilai Elemen)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>buah[1] = "Mangga"</code> atau ubah rentang: <code>buah[1:3] = ["Semangka", "Melon"]</code>.
          </p>
        </div>

        <!-- 4. ADD LIST ITEMS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-purple-950 text-purple-300 text-xs font-bold border border-purple-800">Bagian 4</span>
            <h3 class="text-base font-bold text-purple-400">4. Add List Items (Menambah Elemen)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>.append(x)</code> (tambah di akhir), <code>.insert(idx, x)</code> (sisipkan di posisi spesifik), <code>.extend(other_list)</code> (gabung koleksi).
          </p>
        </div>

        <!-- 5. REMOVE LIST ITEMS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-rose-950 text-rose-300 text-xs font-bold border border-rose-800">Bagian 5</span>
            <h3 class="text-base font-bold text-rose-400">5. Remove List Items (Menghapus Elemen)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>.remove("Apel")</code> (hapus berdasarkan nilai), <code>.pop(idx)</code> (hapus dan ambil berdasarkan indeks), <code>del list[0]</code>, <code>.clear()</code> (kosongkan semua).
          </p>
        </div>

        <!-- 6. LOOP LISTS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-xs font-bold border border-cyan-800">Bagian 6</span>
            <h3 class="text-base font-bold text-cyan-400">6. Loop Lists (Perulangan Elemen List)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>for item in list:</code> atau dengan indeks: <code>for i, val in enumerate(list):</code>.
          </p>
        </div>

        <!-- 7. LIST COMPREHENSION -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 text-xs font-bold border border-indigo-800">Bagian 7</span>
            <h3 class="text-base font-bold text-indigo-400">7. List Comprehension (Sintaks Super Ringkas & Cepat)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono bg-slate-950 p-3 rounded-xl text-indigo-300">
            kuadrat = [x**2 for x in range(10) if x % 2 == 0]
          </p>
        </div>

        <!-- 8. SORT LISTS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-teal-950 text-teal-300 text-xs font-bold border border-teal-800">Bagian 8</span>
            <h3 class="text-base font-bold text-teal-400">8. Sort Lists (Pengurutan Elemen)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>list.sort()</code> (Ascending), <code>list.sort(reverse=True)</code> (Descending), <code>list.sort(key=str.lower)</code> (Case-insensitive).
          </p>
        </div>

        <!-- 9. COPY LISTS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 text-xs font-bold border border-yellow-800">Bagian 9</span>
            <h3 class="text-base font-bold text-yellow-400">9. Copy Lists (Menyalin List Tanpa Reference Bug)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Jangan gunakan <code>list2 = list1</code> (karena hanya menduplikasi pointer memori). Gunakan <code>list2 = list1.copy()</code> atau <code>list2 = list1[:]</code>.
          </p>
        </div>

        <!-- 10. JOIN LISTS -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-orange-950 text-orange-300 text-xs font-bold border border-orange-800">Bagian 10</span>
            <h3 class="text-base font-bold text-orange-400">10. Join Lists (Menggabungkan Banyak List)</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed font-mono">
            <code>list_total = list1 + list2</code> atau <code>list1.extend(list2)</code>.
          </p>
        </div>

        <!-- 11. LIST METHODS TABLE -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs font-bold border border-slate-700">Bagian 11</span>
            <h3 class="text-base font-bold text-sky-400">11. List Methods (Tabel Method Bawaan Lengkap)</h3>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
            <div class="p-2 bg-slate-950 rounded">.append()</div>
            <div class="p-2 bg-slate-950 rounded">.clear()</div>
            <div class="p-2 bg-slate-950 rounded">.copy()</div>
            <div class="p-2 bg-slate-950 rounded">.count()</div>
            <div class="p-2 bg-slate-950 rounded">.extend()</div>
            <div class="p-2 bg-slate-950 rounded">.index()</div>
            <div class="p-2 bg-slate-950 rounded">.insert()</div>
            <div class="p-2 bg-slate-950 rounded">.pop()</div>
            <div class="p-2 bg-slate-950 rounded">.remove()</div>
            <div class="p-2 bg-slate-950 rounded">.reverse()</div>
            <div class="p-2 bg-slate-950 rounded">.sort()</div>
            <div class="p-2 bg-slate-950 rounded">len(list)</div>
          </div>
        </div>

        <!-- 12 & 13. LIST EXERCISES & CODE CHALLENGE -->
        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-emerald-500/40 space-y-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-xs font-bold border border-emerald-800">Bagian 12 & 13</span>
            <h3 class="text-base font-bold text-emerald-400">12. List Exercises & 13. Code Challenge</h3>
          </div>
          <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
            Praktikkan List Comprehension untuk menyaring bilangan genap dan mengurutkan array skor secara descending.
          </p>
        </div>
      </div>
    `,
    code: `# 1. Pembuatan & Manipulasi List
buah = ["Apel", "Jeruk", "Pisang", "Mangga"]
buah.append("Durian")
buah.insert(1, "Alpukat")
buah.remove("Pisang")
print("Daftar Buah :", buah)

# 2. List Comprehension (Filter & Transform)
angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
genap_kuadrat = [x ** 2 for x in angka if x % 2 == 0]
print("Genap Kuadrat:", genap_kuadrat)

# 3. Sorting & Copying
skor = [88, 95, 70, 100, 82]
skor_terurut = skor.copy()
skor_terurut.sort(reverse=True)
print("Skor Tertinggi ke Terendah:", skor_terurut)`,
    codeExplanation: [
      '".append()" menambah item di akhir, ".insert(1, ...)" menyisipkan di indeks 1, dan ".remove()" menghapus item berdasarkan nilai.',
      'List Comprehension "[x**2 for x in angka if x % 2 == 0]" memfilter bilangan genap dan mengkuadratkannya dalam satu baris ringkas.',
      '".sort(reverse=True)" mengurutkan angka dari yang terbesar ke terkecil.'
    ],
    challenge: {
      instruction: 'Gunakan List Comprehension untuk menghasilkan list baru berisi angka kuadrat dari [1, 2, 3, 4, 5].',
      starterCode: `angka = [1, 2, 3, 4, 5]
kuadrat = [x ** 2 for x in angka]
print("Hasil kuadrat:", kuadrat)`,
      hint: 'Gunakan sintaks: [x ** 2 for x in angka].'
    },
    quiz: {
      question: 'Manakah cara yang BENAR dan aman untuk membuat salinan (copy) independen dari sebuah list tanpa menyebabkan bug referensi memori?',
      options: [
        'list_baru = list_lama.copy() atau list_lama[:]',
        'list_baru = list_lama',
        'list_baru = copy(list_lama)',
        'list_baru = &list_lama'
      ],
      correctIndex: 0,
      explanation: 'Sintaks "list.copy()" atau slicing "list[:]" membuat salinan dangkal (shallow copy) independen baru di memori, sedangkan "list_baru = list_lama" hanya menyalin pointer referensi memori yang sama.'
    }
  }
];
