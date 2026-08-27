// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (KEYWORDS PART 2: 314-326)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart30RefKeywords2 = [
  // 314. ECHO
  {
    id: 'php-kw-echo',
    title: 'PHP Keyword: echo',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 314,
    overview: 'Kuasai konstruksi bahasa echo: mencetak satu atau lebih string ke output buffer browser dengan kecepatan eksekusi tertinggi dan sintaks short tag <?= ?>.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP KEYWORDS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 314 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📢 Mencetak Output (echo)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>echo</code> adalah konstruksi bahasa (bukan fungsi biasa) sehingga tidak memerlukan tanda kurung. Dapat menerima beberapa parameter yang dipisahkan koma (<code>echo "A", "B", "C";</code>) dan memiliki padanan template HTML <code>&lt;?= $variabel ?&gt;</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nama = "Rahmat Fadila";
$kursus = "PHP 8 Reference";

// 1. Mengirim beberapa parameter dipisahkan koma
echo "<h3>Halo, ", $nama, "! Selamat Belajar ", $kursus, "</h3>";

// 2. Interpolasi string ganda
echo "<p>Versi PHP Anda: <strong style='color: #059669;'>" . PHP_VERSION . "</strong></p>";
?>`,
    codeExplanation: [
      'echo adalah language construct tercepat di PHP untuk menghasilkan output teks/HTML.'
    ],
    challenge: {
      instruction: 'Cetak "Belajar PHP" menggunakan echo.',
      starterCode: `<?php
echo "Belajar PHP";
?>`,
      hint: 'Panggil echo "Belajar PHP";.'
    },
    quiz: {
      question: 'Apakah perbedaan antara `echo` dan `print` di PHP?',
      options: [
        '`echo` dapat menerima beberapa argumen dipisahkan koma dan tidak mengembalikan nilai, sedangkan `print` hanya menerima 1 argumen dan selalu mengembalikan nilai integer 1',
        '`print` lebih cepat dari `echo`',
        '`echo` hanya untuk angka',
        'Keduanya identik'
      ],
      correctIndex: 0,
      explanation: 'echo sedikit lebih cepat dan tidak memiliki return value, berbeda dengan print yang mengembalikan 1.'
    }
  },

  // 315. ELSE
  {
    id: 'php-kw-else',
    title: 'PHP Keyword: else',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 315,
    overview: 'Kuasai keyword else: mendefinisikan blok cabang alternatif yang dieksekusi saat kondisi if sebelumnya bernilai false.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CONDITIONAL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 315 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Cabang Alternatif (else)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>else</code> menyediakan jalur eksekusi cadangan ketika pernyataan <code>if</code> menghasilkan <code>false</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$isLoggedIn = false;

echo "<h3>Hasil Percabangan else:</h3>";
if ($isLoggedIn) {
    echo "<p style='color: green;'>Selamat Datang di Dashboard Member!</p>";
} else {
    echo "<p style='color: #dc2626;'><strong>Silakan login terlebih dahulu untuk mengakses konten ini.</strong></p>";
}
?>`,
    codeExplanation: [
      'Blok else dieksekusi karena variabel $isLoggedIn bernilai false.'
    ],
    challenge: {
      instruction: 'Buat percabangan if-else untuk memeriksa nilai kelulusan ($nilai >= 75).',
      starterCode: `<?php
$nilai = 80;
if ($nilai >= 75) {
    echo "Lulus";
} else {
    echo "Remedial";
}
?>`,
      hint: 'Jalankan if-else.'
    },
    quiz: {
      question: 'Kapan blok kode di dalam `else { ... }` akan dijalankan?',
      options: [
        'Ketika semua kondisi `if` dan `elseif` sebelumnya bernilai false',
        'Ketika kondisi bernilai true',
        'Selalu dieksekusi',
        'Hanya saat error'
      ],
      correctIndex: 0,
      explanation: 'else menangkap seluruh skenario ketika kondisi evaluasi sebelumnya bernilai false.'
    }
  },

  // 316. ELSEIF
  {
    id: 'php-kw-elseif',
    title: 'PHP Keyword: elseif',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 316,
    overview: 'Kuasai keyword elseif: menguji kondisi tambahan jika kondisi if pertama tidak terpenuhi (Multi-Condition Branching).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">MULTI-BRANCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 316 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔀 Pengujian Kondisi Bertingkat (elseif)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>elseif (kondisi)</code> menambahkan pemeriksaan logika baru jika kondisi sebelumnya <code>false</code>. <em>Catatan penting:</em> Pada penulisan sintaks alternatif colon template (<code>if (): ... endif;</code>), kata <code>elseif</code> wajib digabung menjadi satu kata (bukan <code>else if</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$skor = 88;

echo "<h3>Grade Nilai Mahasiswa:</h3>";
if ($skor >= 90) {
    echo "<p>Grade: <strong style='color: #059669;'>A (Sangat Memuaskan)</strong></p>";
} elseif ($skor >= 80) {
    echo "<p>Grade: <strong style='color: #4f46e5;'>B (Memuaskan)</strong></p>";
} elseif ($skor >= 70) {
    echo "<p>Grade: C (Cukup)</p>";
} else {
    echo "<p>Grade: D (Kurang)</p>";
}
?>`,
    codeExplanation: [
      'elseif ($skor >= 80) dieksekusi karena skor 88 memenuhi kriteria cabang kedua.'
    ],
    challenge: {
      instruction: 'Uji percabangan bertingkat dengan elseif.',
      starterCode: `<?php
$jam = 14;
if ($jam < 12) {
    echo "Pagi";
} elseif ($jam < 18) {
    echo "Siang/Sore";
} else {
    echo "Malam";
}
?>`,
      hint: 'Jalankan percabangan elseif.'
    },
    quiz: {
      question: 'Manakah penulisan yang WAJIB digunakan pada sintaks alternatif template PHP `if ($x): ... endif;`?',
      options: [
        '`elseif` (ditulis bersambung satu kata)',
        '`else if` (dua kata terpisah)',
        '`elif`',
        '`case if`'
      ],
      correctIndex: 0,
      explanation: 'Sintaks alternatif colon (:) pada template engine PHP hanya menerima `elseif` satu kata.'
    }
  },

  // 317. EMPTY
  {
    id: 'php-kw-empty',
    title: 'PHP Keyword: empty',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 317,
    overview: 'Kuasai konstruksi bahasa empty: memeriksa apakah variabel tidak ada atau bernilai kosong (""", 0, 0.0, "0", null, false, array kosong []) tanpa memicu peringatan Undefined Variable Notice.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">EMPTY CHECK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 317 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔍 Memeriksa Nilai Kosong Aman (empty)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>empty($var)</code> mengembalikan <code>true</code> jika variabel belum dideklarasikan atau bernilai kosong: <code>""</code>, <code>0</code>, <code>0.0</code>, <code>"0"</code>, <code>NULL</code>, <code>FALSE</code>, atau <code>[]</code>. Sangat aman karena tidak memicu error jika variabel belum diinisialisasi.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$listUser = [];
$nama = "";
$angkaNol = 0;

echo "<h3>Hasil Pengujian empty():</h3>";
echo "<ul>";
echo "<li>Array Kosong []: " . (empty($listUser) ? "<strong style='color: green;'>Kosong (true)</strong>" : "Ada") . "</li>";
echo "<li>String Kosong '': " . (empty($nama) ? "<strong style='color: green;'>Kosong (true)</strong>" : "Ada") . "</li>";
echo "<li>Angka Nol (0): " . (empty($angkaNol) ? "<strong style='color: green;'>Kosong (true)</strong>" : "Ada") . "</li>";
echo "<li>Variabel Belum Ada (\$tidakAda): " . (empty($tidakAda) ? "<strong style='color: green;'>Aman (true tanpa notice)</strong>" : "Ada") . "</li>";
echo "</ul>";
?>`,
    codeExplanation: [
      'empty() adalah cara paling aman memvalidasi form field dan array sebelum pemrosesan data.'
    ],
    challenge: {
      instruction: 'Periksa apakah array $items kosong dengan empty($items).',
      starterCode: `<?php
$items = [];
echo empty($items) ? "Keranjang Kosong" : "Ada Barang";
?>`,
      hint: 'Panggil empty($items).'
    },
    quiz: {
      question: 'Manakah nilai di bawah ini yang dianggap `empty()` (menghasilkan true) oleh PHP?',
      options: [
        'Semua benar: "" (string kosong), 0, "0", null, false, dan array kosong []',
        'Hanya null',
        'Hanya array kosong',
        'Hanya angka minus'
      ],
      correctIndex: 0,
      explanation: 'PHP menganggap string kosong, 0, "0", null, false, dan [] sebagai nilai kosong.'
    }
  },

  // 318. ENDDECLARE
  {
    id: 'php-kw-enddeclare',
    title: 'PHP Keyword: enddeclare',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 318,
    overview: 'Fungsi keyword enddeclare: menutup blok direktif declare berbasis sintaks alternatif colon (declare(...): ... enddeclare;).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ALTERNATIVE SYNTAX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 318 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Penutup Blok Declare (enddeclare)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>enddeclare</code> adalah keyword penutup saat pernyataan <code>declare</code> ditulis menggunakan sintaks titik dua (colon).
          </p>
        </div>
      </div>
    `,
    code: `<?php
declare(ticks=1):
    $a = 1;
    $b = 2;
    $c = $a + $b;
enddeclare;

echo "<h3>Hasil Penggunaan enddeclare:</h3>";
echo "<p>Blok declare bertitik dua berhasil ditutup dengan <code>enddeclare;</code>. Nilai c: <strong>$c</strong></p>";
?>`,
    codeExplanation: [
      'enddeclare menutup blok declare(...): ... enddeclare;.'
    ],
    challenge: {
      instruction: 'Pahami penutupan blok declare dengan enddeclare.',
      starterCode: `<?php
declare(ticks=1):
    $x = 10;
enddeclare;
echo "Nilai x: " . $x;
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Pasangan sintaks apakah yang ditutup oleh keyword `enddeclare;`?',
      options: [
        '`declare(...):`',
        '`for (...):`',
        '`if (...):`',
        '`switch (...):`'
      ],
      correctIndex: 0,
      explanation: 'enddeclare menutup struktur declare(...) yang diawali titik dua (:).'
    }
  },

  // 319. ENDFOR
  {
    id: 'php-kw-endfor',
    title: 'PHP Keyword: endfor',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 319,
    overview: 'Kuasai keyword endfor: menutup perulangan for pada sintaks alternatif colon template (for (...): ... endfor;), standar emas templating HTML tanpa kurung kurawal.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TEMPLATE SYNTAX</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 319 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔁 Penutup Loop For Template (endfor)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>endfor</code> menutup blok perulangan <code>for (...):</code>. Sangat populer di file view template PHP murni (seperti template WordPress atau view native) karena jauh lebih mudah dibaca di tengah-tengah markup HTML dibandingkan kurung kurawal tutup <code>}</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Contoh Penulisan Template HTML Bersih dengan for (...): ... endfor;
?>
<h3>Daftar Bintang Rating:</h3>
<div style="display: flex; gap: 4px;">
    <?php for ($i = 1; $i <= 5; $i++): ?>
        <span style="color: #f59e0b; font-size: 20px;">★</span>
    <?php endfor; ?>
</div>`,
    codeExplanation: [
      'for ($i=1; $i<=5; $i++): dan <?php endfor; ?> mempermudah rendering HTML tanpa risiko salah pasang tanda kurung kurawal.'
    ],
    challenge: {
      instruction: 'Gunakan for (...): ... endfor; untuk mencetak angka 1 sampai 3.',
      starterCode: `<?php for ($i = 1; $i <= 3; $i++): ?>
    [<?= $i ?>]
<?php endfor; ?>`,
      hint: 'Jalankan template for-endfor.'
    },
    quiz: {
      question: 'Mengapa sintaks `for (...): ... endfor;` lebih disukai di file template HTML?',
      options: [
        'Meningkatkan keterbacaan kode saat bercampur dengan tag HTML dan mencegah kebingungan kurung kurawal bersarang',
        'Mempercepat render GPU browser',
        'Mengubah PHP menjadi JavaScript',
        'Tidak ada alasan khusus'
      ],
      correctIndex: 0,
      explanation: 'Sintaks alternatif colon lebih rapi dan jelas batas pembuka/penutupnya di tengah dokumen HTML.'
    }
  },

  // 320. ENDFOREACH
  {
    id: 'php-kw-endforeach',
    title: 'PHP Keyword: endforeach',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 320,
    overview: 'Kuasai keyword endforeach: menutup perulangan foreach pada template HTML berbasis sintaks alternatif colon (foreach ($items as $item): ... endforeach;).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TEMPLATE FOREACH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 320 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📦 Penutup Loop Foreach Template (endforeach)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>endforeach</code> adalah penutup resmi untuk perulangan <code>foreach ($data as $row):</code> pada file template view PHP.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$produkList = [
    ["nama" => "MacBook Pro M3", "harga" => 25000000],
    ["nama" => "iPhone 15 Pro", "harga" => 19000000],
    ["nama" => "iPad Air M2", "harga" => 12000000]
];
?>
<h3>Daftar Gadget Unggulan (endforeach):</h3>
<table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
    <tr style="background: #f1f5f9;">
        <th>Nama Produk</th>
        <th>Harga</th>
    </tr>
    <?php foreach ($produkList as $p): ?>
    <tr>
        <td><strong><?= $p['nama'] ?></strong></td>
        <td style="color: #059669;">Rp <?= number_format($p['harga'], 0, ',', '.') ?></td>
    </tr>
    <?php endforeach; ?>
</table>`,
    codeExplanation: [
      'foreach (...): dan endforeach; adalah standar emas penulisan tabel dinamis di PHP view.'
    ],
    challenge: {
      instruction: 'Gunakan foreach (...): ... endforeach; untuk mencetak list array.',
      starterCode: `<?php
$tech = ["PHP", "Postgres", "Redis"];
?>
<ul>
<?php foreach ($tech as $t): ?>
    <li><?= $t ?></li>
<?php endforeach; ?>
</ul>`,
      hint: 'Jalankan kode template foreach-endforeach.'
    },
    quiz: {
      question: 'Keyword penutup apakah yang wajib dipasangkan dengan `foreach ($arr as $v):`?',
      options: [
        'endforeach;',
        'endif;',
        'endfor;',
        'closeforeach;'
      ],
      correctIndex: 0,
      explanation: 'endforeach; adalah penutup resmi pasangan foreach (:).'
    }
  },

  // 321. ENDIF
  {
    id: 'php-kw-endif',
    title: 'PHP Keyword: endif',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 321,
    overview: 'Kuasai keyword endif: menutup struktur pengkondisian if/elseif/else pada template HTML berbasis sintaks colon (if (...): ... endif;).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TEMPLATE IF</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 321 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🛡️ Penutup Kondisi If Template (endif)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>endif</code> menutup blok kondisional <code>if (...): ... else: ... endif;</code> dalam dokumen HTML.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$role = "admin";
?>
<div style="padding: 16px; border: 1px solid #cbd5e1; border-radius: 8px;">
    <?php if ($role === "admin"): ?>
        <h4 style="color: #059669; margin: 0;">Panel Kontrol Administrator</h4>
        <p>Anda memiliki hak akses penuh ke menu sistem.</p>
    <?php else: ?>
        <h4 style="color: #64748b; margin: 0;">Dashboard Pengguna</h4>
        <p>Selamat datang di member area.</p>
    <?php endif; ?>
</div>`,
    codeExplanation: [
      'if (): ... else: ... endif; mengisolasi blok tampilan HTML dengan sangat rapi dan bebas syntax error.'
    ],
    challenge: {
      instruction: 'Gunakan if-else-endif untuk menampilkan status login.',
      starterCode: `<?php $auth = true; ?>
<?php if ($auth): ?>
    <p>User Aktif</p>
<?php else: ?>
    <p>Guest</p>
<?php endif; ?>`,
      hint: 'Jalankan template if-endif.'
    },
    quiz: {
      question: 'Struktur penulisan apakah yang diakhiri dengan keyword `endif;`?',
      options: [
        '`if (...): ... endif;`',
        '`switch (...): ... endif;`',
        '`try { ... } endif;`',
        '`function (): ... endif;`'
      ],
      correctIndex: 0,
      explanation: 'endif menutup struktur percabangan if bertitik dua.'
    }
  },

  // 322. ENDSWITCH
  {
    id: 'php-kw-endswitch',
    title: 'PHP Keyword: endswitch',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 322,
    overview: 'Kuasai keyword endswitch: menutup struktur percabangan switch pada sintaks alternatif colon template (switch (...): ... endswitch;).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TEMPLATE SWITCH</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 322 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎯 Penutup Switch Template (endswitch)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>endswitch</code> menutup blok <code>switch ($var): case ...: ... endswitch;</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$statusBadge = "success";
?>
<h3>Badge Status:</h3>
<?php switch ($statusBadge):
    case "success": ?>
        <span style="background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 4px;">✓ Berhasil</span>
        <?php break;
    case "warning": ?>
        <span style="background: #fef9c3; color: #a16207; padding: 4px 8px; border-radius: 4px;">⚠ Peringatan</span>
        <?php break;
    default: ?>
        <span style="background: #f1f5f9; color: #475569; padding: 4px 8px; border-radius: 4px;">Info</span>
<?php endswitch; ?>`,
    codeExplanation: [
      'switch (...): case ...: endswitch; memadukan logika pemilihan dengan markup HTML secara bersih.'
    ],
    challenge: {
      instruction: 'Pahami penutupan switch template dengan endswitch.',
      starterCode: `<?php
$val = 1;
switch ($val):
    case 1: echo "Satu"; break;
    default: echo "Lain";
endswitch;
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Keyword penutup apakah yang digunakan untuk `switch ($var):`?',
      options: [
        'endswitch;',
        'endif;',
        'endcase;',
        'closeswitch;'
      ],
      correctIndex: 0,
      explanation: 'endswitch; menutup struktur switch colon.'
    }
  },

  // 323. ENDWHILE
  {
    id: 'php-kw-endwhile',
    title: 'PHP Keyword: endwhile',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 323,
    overview: 'Kuasai keyword endwhile: menutup perulangan while pada sintaks alternatif colon template (while (...): ... endwhile;), sangat populer pada The Loop WordPress.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TEMPLATE WHILE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 323 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔁 Penutup Loop While Template (endwhile)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>endwhile</code> menutup perulangan <code>while (...):</code>. Format ini digunakan oleh jutaan situs di seluruh dunia pada perulangan artikel <em>"The Loop"</em> (<code>while (have_posts()) : the_post(); ... endwhile;</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$counter = 1;
?>
<h3>Hitung Mundur (while-endwhile):</h3>
<ul>
    <?php while ($counter <= 3): ?>
        <li>Langkah ke-<?= $counter ?> Selesai</li>
        <?php $counter++; ?>
    <?php endwhile; ?>
</ul>`,
    codeExplanation: [
      'while (...): ... endwhile; menjaga template tetap terstruktur tanpa kurung kurawal.'
    ],
    challenge: {
      instruction: 'Jalankan while ($i <= 2): ... endwhile;.',
      starterCode: `<?php $i = 1; ?>
<?php while ($i <= 2): ?>
    [Step <?= $i ?>]
    <?php $i++; ?>
<?php endwhile; ?>`,
      hint: 'Jalankan loop while-endwhile.'
    },
    quiz: {
      question: 'Fitur terkenal apakah pada CMS WordPress yang memanfaatkan sintaks `while (...): ... endwhile;`?',
      options: [
        'The Loop (mekanisme perulangan artikel postingan blog WordPress)',
        'Database installer',
        'Plugin updater',
        'WP-CLI'
      ],
      correctIndex: 0,
      explanation: 'WordPress The Loop menggunakan sintaks while-endwhile pada file index.php dan single.php.'
    }
  },

  // 324. EXTENDS
  {
    id: 'php-kw-extends',
    title: 'PHP Keyword: extends',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 324,
    overview: 'Kuasai keyword extends: mengimplementasikan pewarisan kelas (Class Inheritance) di mana kelas anak mewarisi properti dan method dari kelas induk (Parent Class) dan antar Interface.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INHERITANCE</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 324 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧬 Pewarisan Kelas OOP (extends)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>class Child extends Parent</code> mewarisi seluruh fungsionalitas kelas induk (Single Inheritance). Kelas anak dapat menggunakan <code>parent::__construct()</code> untuk memanggil konstruktor induk dan melakukan method overriding.
          </p>
        </div>
      </div>
    `,
    code: `<?php
class Pegawai {
    public function __construct(
        public string $nama,
        public float $gajiPokok
    ) {}

    public function hitungGaji(): float {
        return $this->gajiPokok;
    }
}

class Manager extends Pegawai {
    public function __construct(
        string $nama,
        float $gajiPokok,
        public float $tunjangan
    ) {
        parent::__construct($nama, $gajiPokok);
    }

    // Override method hitungGaji
    public function hitungGaji(): float {
        return parent::hitungGaji() + $this->tunjangan;
    }
}

$mgr = new Manager("Rahmat Fadila", 15000000, 5000000);

echo "<h3>Hasil Pewarisan OOP (extends):</h3>";
echo "<p>Manager: <strong>{$mgr->nama}</strong></p>";
echo "<p>Total Gaji (Pokok + Tunjangan): <strong style='color: #059669;'>Rp " . number_format($mgr->hitungGaji(), 0, ',', '.') . "</strong></p>";
?>`,
    codeExplanation: [
      'class Manager extends Pegawai mewarisi properti $nama dan $gajiPokok.',
      'parent::hitungGaji() memanggil logika dasar kelas induk.'
    ],
    challenge: {
      instruction: 'Buat kelas Kucing yang meng-extend kelas Hewan.',
      starterCode: `<?php
class Hewan { public string $jenis = "Mamalia"; }
class Kucing extends Hewan {}
$k = new Kucing();
echo "Jenis: " . $k->jenis;
?>`,
      hint: 'Gunakan class Kucing extends Hewan.'
    },
    quiz: {
      question: 'Berapa banyak kelas induk (parent class) yang dapat di-`extends` oleh SATU kelas anak di PHP (Single Inheritance)?',
      options: [
        'Hanya Tepat 1 Kelas Induk (Single Inheritance)',
        'Tak terbatas',
        'Maksimal 5 kelas',
        '2 kelas'
      ],
      correctIndex: 0,
      explanation: 'PHP mengadopsi model Single Inheritance, sehingga 1 kelas hanya bisa meng-extend 1 parent class (namun dapat mengimplementasikan banyak interface).'
    }
  },

  // 325. FINAL
  {
    id: 'php-kw-final',
    title: 'PHP Keyword: final',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 325,
    overview: 'Kuasai keyword final: mencegah kelas diwariskan (Final Class) atau mencegah method di-override (Final Method) demi menjaga keamanan dan immutability arsitektur sistem.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">IMMUTABLE OOP</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 325 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔒 Mengunci Kelas & Method (final)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>final class</code> tidak dapat diturunkan oleh kelas manapun (mencegah inheritance). <code>final public function</code> mencegah kelas turunan mengubah implementasi method tersebut.
          </p>
        </div>
      </div>
    `,
    code: `<?php
final class KeamananSistem {
    public static function generateHash(string $password): string {
        return password_hash($password, PASSWORD_BCRYPT);
    }
}

// Mencoba meng-extend KeamananSistem akan menghasilkan:
// Fatal error: Class HackerClass cannot extend final class KeamananSistem

echo "<h3>Hasil Penggunaan Keyword final:</h3>";
echo "<p>Hash Aman: <code>" . KeamananSistem::generateHash("AdminPass2026") . "</code></p>";
echo "<p style='color: green;'>Kelas KeamananSistem terkunci dari modifikasi inheritance tidak sah.</p>";
?>`,
    codeExplanation: [
      'final class melindungi komponen kritis arsitektur dari subclassing yang tidak diinginkan.'
    ],
    challenge: {
      instruction: 'Deklarasikan final class Matematika dengan method statis tambah().',
      starterCode: `<?php
final class Matematika {
    public static function tambah(int $a, int $b): int { return $a + $b; }
}
echo "Hasil: " . Matematika::tambah(10, 20);
?>`,
      hint: 'Gunakan final class Matematika.'
    },
    quiz: {
      question: 'Apa yang terjadi jika programmer mencoba membuat kelas turunan dari sebuah `final class`?',
      options: [
        'Memicu Fatal Error: Class ... cannot extend final class ...',
        'Diizinkan dengan warning',
        'Otomatis membuat duplikat',
        'Menghapus kelas induk'
      ],
      correctIndex: 0,
      explanation: 'final class secara mutlak melarang pewarisan (inheritance) oleh kelas lain.'
    }
  },

  // 326. FINALLY
  {
    id: 'php-kw-finally',
    title: 'PHP Keyword: finally',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 326,
    overview: 'Kuasai blok finally: blok kode yang DIJAMIN PASTI DIEKSEKUSI (Guaranteed Execution) baik saat terjadi Exception maupun saat operasi try sukses berjalan normal (ideal untuk membersihkan resource koneksi DB/file).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CLEANUP BLOCK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 326 / 326</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🧹 Pembersihan Mutlak (finally)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Blok <code>finally</code> diletakkan setelah <code>try-catch</code>. Kode di dalam <code>finally</code> <strong>pasti dieksekusi 100%</strong> bahkan jika di dalam blok try terdapat pernyataan <code>return</code> atau saat terjadi unhandled exception. Standar terbaik untuk menutup koneksi database dan stream file.
          </p>
        </div>
      </div>
    `,
    code: `<?php
function prosesTransaksi() {
    echo "<p>1. Membuka koneksi transaksi database...</p>";
    try {
        echo "<p>2. Menjalankan query transfer saldo...</p>";
        // Simulasi error saldo kurang
        throw new Exception("Saldo tidak mencukupi!");
    } catch (Exception $e) {
        echo "<p style='color: #dc2626;'>3. [CATCH] Error Terjadi: " . $e->getMessage() . "</p>";
    } finally {
        // Blok ini PASTI DIEKSEKUSI apapun yang terjadi!
        echo "<p style='color: #059669; font-weight: bold;'>4. [FINALLY] Koneksi Database & Lock Berhasil Dilepaskan / Ditutup.</p>";
    }
}

echo "<h3>Alur Eksekusi try-catch-finally:</h3>";
prosesTransaksi();
?>`,
    codeExplanation: [
      'Blok finally menjamin pembersihan resource (cleanup) selalu dilakukan tanpa risiko kebocoran koneksi.'
    ],
    challenge: {
      instruction: 'Lengkapi struktur try-catch-finally dengan pesan pembersihan di finally.',
      starterCode: `<?php
try {
    echo "Operasi coba. ";
} finally {
    echo "Pembersihan selesai.";
}
?>`,
      hint: 'Jalankan blok try-finally.'
    },
    quiz: {
      question: 'Apakah blok `finally` tetap dieksekusi jika di dalam blok `try` terdapat perintah `return` nilai?',
      options: [
        'Ya, blok `finally` tetap PASTI dieksekusi sebelum nilai return dikembalikan ke pemanggil',
        'Tidak, langsung diabaikan',
        'Hanya dieksekusi jika ada error',
        'Menghasilkan fatal error'
      ],
      correctIndex: 0,
      explanation: 'Blok finally dijamin dieksekusi sebelum fungsi mengembalikan nilai return.'
    }
  }
];

module.exports = phpPart30RefKeywords2;
