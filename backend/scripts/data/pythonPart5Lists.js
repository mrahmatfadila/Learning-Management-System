// =========================================================================
// DATA MATERI PYTHON: BAB 1 - PYTHON TUTORIAL (BAGIAN 5: LESSONS 48 - 60)
// Standar Granularitas Mandiri per Sub-Topik Sesuai Aturan Pasal #27 AGENTS.md
// =========================================================================

module.exports = [
  // ── 48. PYTHON LISTS ─────────────────────────────────────────────────────
  {
    id: 'python-lists',
    title: 'Python Lists - Python Lists',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 47,
    overview: 'Konsep dasar Python Lists: struktur data koleksi terurut (ordered), dapat diubah (mutable), mengizinkan duplikasi, dan indeks berbasis 0.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📋 Dasar Python Lists</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            List dibuat dengan kurung siku <code>[item1, item2, ...]</code>. List bersifat <strong>mutable</strong> (isinya dapat ditambah, dihapus, atau diubah).
          </p>
        </div>
      </div>
    `,
    code: `buah = ["Apel", "Jeruk", "Pisang", "Mangga"]\nprint(f"List Buah: {buah}")\nprint(f"Jumlah Elemen: {len(buah)}")`,
    codeExplanation: ['List dibuat menggunakan kurung siku [] dan len(buah) menghitung total elemen.'],
    challenge: {
      instruction: 'Buat list bernama "angka" berisi [10, 20, 30, 40] dan cetak panjangnya dengan len().',
      starterCode: `angka = [10, 20, 30, 40]\nprint(len(angka))`,
      hint: 'Gunakan angka = [10, 20, 30, 40].'
    },
    quiz: {
      question: 'Karakter kurung apakah yang digunakan untuk mendefinisikan sebuah List di Python?',
      options: ['Kurung siku ( [ ] )', 'Kurung kurawal ( { } )', 'Kurung bulat ( ( ) )', 'Tanda petik ( " " )'],
      correctIndex: 0,
      explanation: 'List di Python didefinisikan menggunakan kurung siku [].'
    }
  },

  // ── 49. PYTHON ACCESS LIST ITEMS ─────────────────────────────────────────
  {
    id: 'python-access-list-items',
    title: 'Python Lists - Access List Items',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 48,
    overview: 'Mengakses elemen list: Indeks positif [0], Indeks negatif [-1], dan Rentang pemotongan slicing [start:stop].',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔍 Mengakses Elemen List (Indexing & Slicing)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Akses elemen pertama <code>list[0]</code>, elemen terakhir <code>list[-1]</code>, atau rentang <code>list[1:3]</code>.
          </p>
        </div>
      </div>
    `,
    code: `bahasa = ["HTML", "CSS", "JS", "PHP", "Python"]\nprint("Elemen Pertama :", bahasa[0])\nprint("Elemen Terakhir:", bahasa[-1])\nprint("Rentang Slicing:", bahasa[1:4])`,
    codeExplanation: ['"bahasa[-1]" mengambil elemen terakhir tanpa perlu mengetahui total panjang list.'],
    challenge: {
      instruction: 'Ambil elemen kedua (indeks 1) dari list ["A", "B", "C"].',
      starterCode: `huruf = ["A", "B", "C"]\nprint(huruf[1])`,
      hint: 'Gunakan huruf[1].'
    },
    quiz: {
      question: 'Indeks berapakah yang digunakan untuk mengakses elemen pertama dalam list Python?',
      options: ['Indeks 0', 'Indeks 1', 'Indeks -1', 'Indeks first'],
      correctIndex: 0,
      explanation: 'Python menggunakan sistem 0-based indexing.'
    }
  },

  // ── 50. PYTHON CHANGE LIST ITEMS ─────────────────────────────────────────
  {
    id: 'python-change-list-items',
    title: 'Python Lists - Change List Items',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 49,
    overview: 'Mengubah nilai elemen list spesifik berdasarkan indeks dan mengubah rentang beberapa elemen sekaligus.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">✏️ Mengubah Isi Elemen List</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Ubah nilai elemen tunggal <code>buah[1] = "Melon"</code> atau rentang <code>buah[1:3] = ["A", "B"]</code>.
          </p>
        </div>
      </div>
    `,
    code: `buah = ["Apel", "Pisang", "Ceri"]\nbuah[1] = "Blackcurrant"\nprint(f"Hasil Modifikasi: {buah}")`,
    codeExplanation: ['"buah[1] = ..." menggantikan item indeks ke-1 ("Pisang") dengan "Blackcurrant".'],
    challenge: {
      instruction: 'Ubah elemen pertama list warna = ["merah", "kuning"] menjadi "hijau".',
      starterCode: `warna = ["merah", "kuning"]\nwarna[0] = "hijau"\nprint(warna)`,
      hint: 'Gunakan warna[0] = "hijau".'
    },
    quiz: {
      question: 'Apakah sifat List di Python yang memungkinkan kita mengubah atau mengganti nilai elemen di dalamnya?',
      options: ['Mutable', 'Immutable', 'Static', 'Constant'],
      correctIndex: 0,
      explanation: 'List bersifat Mutable (dapat dimodifikasi setelah dibuat).'
    }
  },

  // ── 51. PYTHON ADD LIST ITEMS ────────────────────────────────────────────
  {
    id: 'python-add-list-items',
    title: 'Python Lists - Add List Items',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 50,
    overview: 'Menambah item ke dalam list menggunakan method .append(), menyisipkan di posisi tertentu dengan .insert(), dan menggabungkan dengan .extend().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">➕ Menambah Elemen ke List</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            <code>.append(item)</code> menambah di posisi paling akhir, <code>.insert(index, item)</code> menyisipkan di indeks tertentu.
          </p>
        </div>
      </div>
    `,
    code: `tools = ["Git", "Docker"]\ntools.append("Kubernetes")\ntools.insert(1, "Linux")\nprint(f"Daftar Tools: {tools}")`,
    codeExplanation: ['.append() menambahkan di akhir dan .insert(1, "Linux") menyisipkan di posisi indeks 1.'],
    challenge: {
      instruction: 'Tambahkan "Python" ke akhir list tech = ["HTML", "CSS"] menggunakan .append().',
      starterCode: `tech = ["HTML", "CSS"]\ntech.append("Python")\nprint(tech)`,
      hint: 'Gunakan tech.append("Python").'
    },
    quiz: {
      question: 'Method list manakah yang digunakan untuk menambahkan elemen baru ke posisi paling akhir dari list?',
      options: ['append()', 'push()', 'add()', 'insertLast()'],
      correctIndex: 0,
      explanation: 'Method append() menambahkan satu item ke akhir list.'
    }
  },

  // ── 52. PYTHON REMOVE LIST ITEMS ─────────────────────────────────────────
  {
    id: 'python-remove-list-items',
    title: 'Python Lists - Remove List Items',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 51,
    overview: 'Menghapus elemen list: .remove() berdasarkan nilai, .pop() berdasarkan indeks, keyword del, dan .clear() mengosongkan list.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🗑️ Menghapus Elemen dari List</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            <code>.remove("item")</code> hapus by value, <code>.pop(idx)</code> hapus by index dan return nilainya, <code>.clear()</code> kosongkan list.
          </p>
        </div>
      </div>
    `,
    code: `buah = ["Apel", "Jeruk", "Pisang", "Mangga"]\nbuah.remove("Pisang")\nitem_dihapus = buah.pop(0)\nprint("Sisa List:", buah)\nprint("Item yang di-pop:", item_dihapus)`,
    codeExplanation: ['.remove() mencari dan menghapus item pertama yang cocok dan .pop(0) menghapus elemen indeks ke-0.'],
    challenge: {
      instruction: 'Hapus elemen terakhir list menggunakan .pop().',
      starterCode: `data = [1, 2, 3, 4]\ndata.pop()\nprint(data)`,
      hint: 'Gunakan data.pop().'
    },
    quiz: {
      question: 'Method list manakah yang menghapus elemen berdasarkan nilai nilainya (value) bukan indeksnya?',
      options: ['remove()', 'pop()', 'delete()', 'drop()'],
      correctIndex: 0,
      explanation: 'Method remove() menghapus kemunculan pertama nilai yang dicari.'
    }
  },

  // ── 53. PYTHON LOOP LISTS ────────────────────────────────────────────────
  {
    id: 'python-loop-lists',
    title: 'Python Lists - Loop Lists',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 52,
    overview: 'Perulangan list dengan for in loop, loop dengan range(len()), dan enumerate() untuk mengakses indeks sekaligus nilai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔁 Perulangan pada List</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan <code>for item in list:</code> untuk iterasi nilai atau <code>enumerate(list)</code> untuk nomor urut dan nilai.
          </p>
        </div>
      </div>
    `,
    code: `frameworks = ["FastAPI", "Django", "Flask"]\nfor idx, fw in enumerate(frameworks, start=1):\n    print(f"{idx}. Framework: {fw}")`,
    codeExplanation: ['"enumerate(frameworks, start=1)" menghasilkan pasangan nomor urut dan item.'],
    challenge: {
      instruction: 'Iterasi list hewan = ["Kucing", "Anjing"] menggunakan for loop dan cetak tiap item.',
      starterCode: `hewan = ["Kucing", "Anjing"]\nfor h in hewan:\n    print(h)`,
      hint: 'Gunakan for h in hewan:.'
    },
    quiz: {
      question: 'Fungsi bawaan apakah yang memudahkan kita mendapatkan nomor indeks sekaligus nilai elemen saat looping di Python?',
      options: ['enumerate()', 'indexer()', 'zip()', 'counter()'],
      correctIndex: 0,
      explanation: 'Fungsi enumerate() mengembalikan tuple pasangan indeks dan nilai elemen.'
    }
  },

  // ── 54. PYTHON LIST COMPREHENSION ────────────────────────────────────────
  {
    id: 'python-list-comprehension',
    title: 'Python Lists - List Comprehension',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 53,
    overview: 'Sintaks elegan dan cepat List Comprehension: [expression for item in iterable if condition] untuk filter dan transformasi.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">⚡ List Comprehension (Sintaks Ringkas)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Format: <code>[ekspresi for item in list if kondisi]</code> menggantikan for loop panjang menjadi 1 baris efisien.
          </p>
        </div>
      </div>
    `,
    code: `angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\ngenap_kuadrat = [x ** 2 for x in angka if x % 2 == 0]\nprint("Genap Kuadrat:", genap_kuadrat)`,
    codeExplanation: ['List Comprehension memfilter bilangan genap (x % 2 == 0) lalu mengkuadratkannya (x ** 2).'],
    challenge: {
      instruction: 'Gunakan List Comprehension untuk mengalikan 10 seluruh angka di [1, 2, 3].',
      starterCode: `data = [1, 2, 3]\nhasil = [x * 10 for x in data]\nprint(hasil)`,
      hint: 'Gunakan [x * 10 for x in data].'
    },
    quiz: {
      question: 'Apakah struktur dasar penulisan List Comprehension di Python?',
      options: ['[ekspresi for item in iterable if kondisi]', 'for item in iterable: [ekspresi]', 'comprehend(iterable, filter)', '{item => ekspresi}'],
      correctIndex: 0,
      explanation: 'Sintaks standar List Comprehension adalah [ekspresi for item in iterable if kondisi].'
    }
  },

  // ── 55. PYTHON SORT LISTS ────────────────────────────────────────────────
  {
    id: 'python-sort-lists',
    title: 'Python Lists - Sort Lists',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 54,
    overview: 'Mengurutkan elemen list secara ascending (.sort()), descending (.sort(reverse=True)), case-insensitive (key=str.lower), dan fungsi sorted().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📶 Mengurutkan List (Sorting)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            <code>list.sort()</code> mengurutkan list asli secara permanen, sedangkan <code>sorted(list)</code> mengembalikan list baru yang terurut.
          </p>
        </div>
      </div>
    `,
    code: `skor = [85, 92, 78, 99, 88]\nskor.sort(reverse=True)\nprint("Skor Tertinggi:", skor)`,
    codeExplanation: ['"reverse=True" mengurutkan nilai dari yang terbesar ke terkecil (descending).'],
    challenge: {
      instruction: 'Urutkan list angka = [5, 2, 9, 1] dari kecil ke besar menggunakan .sort().',
      starterCode: `angka = [5, 2, 9, 1]\nangka.sort()\nprint(angka)`,
      hint: 'Gunakan angka.sort().'
    },
    quiz: {
      question: 'Parameter apakah yang ditambahkan ke method .sort() untuk mengurutkan data dari terbesar ke terkecil (Descending)?',
      options: ['reverse=True', 'desc=True', 'order="desc"', 'sortDirection="down"'],
      correctIndex: 0,
      explanation: 'Parameter reverse=True mengurutkan list secara descending.'
    }
  },

  // ── 56. PYTHON COPY LISTS ────────────────────────────────────────────────
  {
    id: 'python-copy-lists',
    title: 'Python Lists - Copy Lists',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 55,
    overview: 'Menyalin list secara aman dengan .copy() atau slicing [:] untuk menghindari bug referensi pointer memori (Reference Mutation).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">📋 Menyalin List (Copy Lists)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Jangan gunakan <code>list2 = list1</code> karena keduanya akan menunjuk alamat memori yang sama. Gunakan <code>list2 = list1.copy()</code>.
          </p>
        </div>
      </div>
    `,
    code: `original = ["A", "B", "C"]\nsalinan = original.copy()\nsalinan.append("D")\nprint("Original:", original)\nprint("Salinan :", salinan)`,
    codeExplanation: ['.copy() membuat salinan independen baru sehingga perubahan di salinan tidak merusak list original.'],
    challenge: {
      instruction: 'Buat salinan independen dari list data = [1, 2, 3] menggunakan .copy().',
      starterCode: `data = [1, 2, 3]\nsalinan = data.copy()\nprint("Salinan:", salinan)`,
      hint: 'Gunakan data.copy().'
    },
    quiz: {
      question: 'Apa akibat jika kita menyalin list dengan cara: list_b = list_a tanpa menggunakan method .copy()?',
      options: ['Mengubah list_b juga akan otomatis mengubah list_a karena keduanya menunjuk objek memori yang sama', 'list_a otomatis terhapus', 'Program melempar SyntaxError', 'list_b menjadi bernilai None'],
      correctIndex: 0,
      explanation: 'Penugasan langsung hanya menyalin referensi memori, bukan membuat salinan objek baru.'
    }
  },

  // ── 57. PYTHON JOIN LISTS ────────────────────────────────────────────────
  {
    id: 'python-join-lists',
    title: 'Python Lists - Join Lists',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 56,
    overview: 'Menggabungkan beberapa list menjadi satu: operator tambah (+), method .extend(), atau loop append.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🔗 Menggabungkan List (Join Lists)</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gabungkan dua list dengan operator <code>+</code> (contoh: <code>list3 = list1 + list2</code>) atau <code>list1.extend(list2)</code>.
          </p>
        </div>
      </div>
    `,
    code: `list1 = ["A", "B"]\nlist2 = ["C", "D"]\ntotal = list1 + list2\nprint("Hasil Penggabungan (+):", total)`,
    codeExplanation: ['Operator "+" menggabungkan kedua list menjadi satu list baru.'],
    challenge: {
      instruction: 'Gabungkan list [1, 2] dan [3, 4] menggunakan operator +.',
      starterCode: `a = [1, 2]\nb = [3, 4]\ngabung = a + b\nprint(gabung)`,
      hint: 'Gunakan a + b.'
    },
    quiz: {
      question: 'Operator apakah yang digunakan untuk menggabungkan dua buah list menjadi satu list baru di Python?',
      options: ['Operator tambah ( + )', 'Operator perkalian ( * )', 'Operator ampersand ( & )', 'Operator titik ( . )'],
      correctIndex: 0,
      explanation: 'Operator + menggabungkan elemen dari kedua list.'
    }
  },

  // ── 58. PYTHON LIST METHODS ──────────────────────────────────────────────
  {
    id: 'python-list-methods',
    title: 'Python Lists - List Methods',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 57,
    overview: 'Ringkasan tabel seluruh method bawaan List Python: append, clear, copy, count, extend, index, insert, pop, remove, reverse, sort.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🛠️ Pustaka Method Bawaan List Lengkap</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Tabel referensi method list: <code>.count()</code> menghitung kemunculan, <code>.reverse()</code> membalik urutan, <code>.index()</code> cari posisi indeks.
          </p>
        </div>
      </div>
    `,
    code: `angka = [10, 20, 30, 20, 40, 20]\nprint("Jumlah angka 20:", angka.count(20))\nprint("Posisi angka 30:", angka.index(30))\nangka.reverse()\nprint("Setelah reverse:", angka)`,
    codeExplanation: ['.count(20) menghitung berapa kali angka 20 muncul dalam list dan .reverse() membalik urutan list asli.'],
    challenge: {
      instruction: 'Gunakan .count("A") untuk menghitung berapa kali huruf "A" muncul di list ["A", "B", "A", "C"].',
      starterCode: `huruf = ["A", "B", "A", "C"]\nprint("Jumlah A:", huruf.count("A"))`,
      hint: 'Gunakan huruf.count("A").'
    },
    quiz: {
      question: 'Method list manakah yang digunakan untuk mencari nomor indeks dari elemen pertama yang cocok?',
      options: ['index()', 'find()', 'search()', 'locate()'],
      correctIndex: 0,
      explanation: 'Method index() mengembalikan nomor indeks dari elemen yang dicari pada list.'
    }
  },

  // ── 59. PYTHON LIST EXERCISES ────────────────────────────────────────────
  {
    id: 'python-list-exercises',
    title: 'Python Lists - List Exercises',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 58,
    overview: 'Latihan studi kasus manipulasi koleksi data nilai ujian siswa: filtering nilai kelulusan dan kalkulasi rata-rata nilai.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🏋️ Latihan Pengolahan Data List Siswa</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Selesaikan studi kasus kalkulasi statistik nilai rata-rata dan penyaringan siswa berprestasi.
          </p>
        </div>
      </div>
    `,
    code: `nilai_siswa = [78, 85, 92, 65, 88, 95]\nrata_rata = sum(nilai_siswa) / len(nilai_siswa)\nsiswa_lulus = [n for n in nilai_siswa if n >= 75]\nprint(f"Rata-rata Nilai: {rata_rata:.1f}")\nprint(f"Nilai Siswa Lulus: {siswa_lulus}")`,
    codeExplanation: ['"sum(nilai_siswa) / len(nilai_siswa)" menghitung rata-rata nilai dan List Comprehension memfilter nilai kelulusan.'],
    challenge: {
      instruction: 'Hitung nilai rata-rata dari list nilai = [80, 90, 100] menggunakan sum(nilai) / len(nilai).',
      starterCode: `nilai = [80, 90, 100]\nrata2 = sum(nilai) / len(nilai)\nprint("Rata-rata:", rata2)`,
      hint: 'Gunakan sum(nilai) / len(nilai).'
    },
    quiz: {
      question: 'Fungsi bawaan Python apakah yang digunakan untuk menjumlahkan seluruh elemen angka numerik di dalam sebuah List?',
      options: ['sum()', 'total()', 'add_all()', 'summation()'],
      correctIndex: 0,
      explanation: 'Fungsi bawaan sum() menjumlahkan seluruh item numerik dalam iterable.'
    }
  },

  // ── 60. PYTHON LISTS CHALLENGE ───────────────────────────────────────────
  {
    id: 'python-lists-challenge',
    title: 'Python Lists - Code Challenge',
    chapter: 'Python Tutorial',
    chapterId: 'python-chap-tutorial',
    order: 59,
    overview: 'Tantangan koding terpadu: menghapus nilai duplikat dari list dan mengurutkannya secara descending.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-blue-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-blue-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎯 Tantangan Menghapus Duplikasi List</h2>
          <p class="text-slate-600 dark:text-slate-300 text-sm">
            Gunakan konversi ke <code>set()</code> untuk membuang duplikasi lalu urutkan kembali menjadi list terurut.
          </p>
        </div>
      </div>
    `,
    code: `data_kotor = [5, 2, 8, 2, 5, 1, 8, 9]\ndata_unik = list(set(data_kotor))\ndata_unik.sort(reverse=True)\nprint(f"Data Unik Terurut: {data_unik}")`,
    codeExplanation: ['"set(data_kotor)" otomatis membuang elemen duplikat dan .sort(reverse=True) mengurutkannya secara descending.'],
    challenge: {
      instruction: 'Buang duplikasi dari [1, 2, 2, 3, 3, 4] menggunakan list(set(data)).',
      starterCode: `data = [1, 2, 2, 3, 3, 4]\nunik = list(set(data))\nprint("Data Unik:", unik)`,
      hint: 'Gunakan list(set(data)).'
    },
    quiz: {
      question: 'Trik Pythonic manakah yang paling cepat untuk membuang seluruh elemen duplikat dari sebuah list?',
      options: ['list(set(nama_list))', 'nama_list.deduplicate()', 'nama_list.unique()', 'remove_duplicate(nama_list)'],
      correctIndex: 0,
      explanation: 'Mengonversi list ke set (koleksi elemen unik) lalu mengembalikannya ke list adalah cara tercepat menghapus duplikat.'
    }
  }
];
