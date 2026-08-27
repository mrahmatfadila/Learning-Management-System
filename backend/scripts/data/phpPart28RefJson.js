// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (JSON: 297-299)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart28RefJson = [
  // 297. JSON_DECODE()
  {
    id: 'php-ref-json-decode',
    title: 'PHP json_decode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 297,
    overview: 'Kuasai json_decode(): mengubah (parsing/deserialisasi) string berformat JSON menjadi Array Asosiatif PHP ($associative = true) atau Objek stdClass bawaan dengan penanganan error modern JSON_THROW_ON_ERROR.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP JSON</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 297 / 299</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📥 Mengurai String JSON ke PHP (json_decode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>json_decode($json, $associative, $depth, $flags)</code> adalah fungsi utama pemrosesan payload REST API di backend PHP. Parameter kedua bernilai <code>true</code> mengonversi JSON object menjadi Array asosiatif PHP (<code>$data['nama']</code>), sedangkan nilai <code>false</code> (default) menghasilkan Objek <code>stdClass</code> (<code>$data->nama</code>).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$jsonString = '{"id": 101, "nama": "Rahmat Fadila", "role": "Fullstack Developer", "skills": ["PHP", "PostgreSQL", "React"]}';

// 1. Parsing ke Array Asosiatif ($associative = true)
$arrayData = json_decode($jsonString, true);

// 2. Parsing ke Objek stdClass ($associative = false)
$objectData = json_decode($jsonString, false);

echo "<h3>Hasil Penggunaan json_decode():</h3>";
echo "<p>Akses via Array: <strong>{$arrayData['nama']}</strong> ({$arrayData['role']})</p>";
echo "<p>Akses via Objek: <strong>{$objectData->nama}</strong> ({$objectData->role})</p>";
echo "<p>Skill Pertama: <strong style='color: #059669;'>{$arrayData['skills'][0]}</strong></p>";
?>`,
    codeExplanation: [
      'json_decode($json, true) menghasilkan Array asosiatif yang sangat mudah dimanipulasi dengan fungsi array PHP.',
      'json_decode($json, false) menghasilkan objek stdClass (diakses dengan tanda panah ->).'
    ],
    challenge: {
      instruction: 'Parse string JSON \'{"course":"PHP 8"}\' ke array asosiatif dan cetak nilai course.',
      starterCode: `<?php
$json = '{"course":"PHP 8"}';
$data = json_decode($json, true);
echo "Kursus: " . $data['course'];
?>`,
      hint: 'Panggil json_decode($json, true).'
    },
    quiz: {
      question: 'Apa fungsi parameter kedua bernilai TRUE pada pemanggilan json_decode($json, true)?',
      options: [
        'Mengonversi objek JSON menjadi Array Asosiatif PHP murni alih-alih objek stdClass',
        'Menghapus error JSON',
        'Mengubah teks menjadi huruf kapital',
        'Menyimpan JSON ke database'
      ],
      correctIndex: 0,
      explanation: 'Nilai true pada parameter kedua ($associative) mengembalikan array asosiatif.'
    }
  },

  // 298. JSON_ENCODE()
  {
    id: 'php-ref-json-encode',
    title: 'PHP json_encode()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 298,
    overview: 'Kuasai json_encode(): mengubah data Array atau Objek PHP menjadi string JSON standar dengan dukungan flag komprehensif (JSON_PRETTY_PRINT, JSON_UNESCAPED_UNICODE, JSON_UNESCAPED_SLASHES).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">JSON SERIALIZER</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 298 / 299</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📤 Serialisasi Data PHP ke JSON (json_encode)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>json_encode($value, $flags, $depth)</code> mengubah struktur data PHP menjadi teks JSON yang siap dikirimkan sebagai response API. Gabungkan flag <code>JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE</code> untuk menghasilkan JSON yang rapi dan bebas karakter escape garis miring.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$dataProduk = [
    "status" => "success",
    "kode"   => 200,
    "item"   => [
        "id"       => 88,
        "nama"     => "Kursus Laravel & Next.js",
        "url"      => "https://devgrow.id/courses/laravel-nextjs",
        "tags"     => ["Fullstack", "Pemrograman Web"]
    ]
];

// Serialisasi JSON dengan Flag Modern
$jsonOutput = json_encode(
    $dataProduk, 
    JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE
);

echo "<h3>Hasil Serialisasi json_encode():</h3>";
echo "<pre style='background: #0f172a; color: #38bdf8; padding: 12px; border-radius: 8px;'>";
echo htmlspecialchars($jsonOutput);
echo "</pre>";
?>`,
    codeExplanation: [
      'JSON_PRETTY_PRINT: Menata format JSON dengan spasi indentasi yang rapi.',
      'JSON_UNESCAPED_SLASHES: Menghindari penambahan garis miring terbalik pada URL (misal: https:// bukan https:\\/\\/).',
      'JSON_UNESCAPED_UNICODE: Menjaga karakter aksen/Unicode tanpa diubah ke kode hex \\uXXXX.'
    ],
    challenge: {
      instruction: 'Encode array ["status" => true] ke string JSON.',
      starterCode: `<?php
$arr = ["status" => true];
echo json_encode($arr);
?>`,
      hint: 'Panggil json_encode($arr).'
    },
    quiz: {
      question: 'Flag konstanta apakah pada json_encode() yang mencegah URL seperti "https://site.com" di-escape menjadi "https:\\/\\/site.com"?',
      options: [
        'JSON_UNESCAPED_SLASHES',
        'JSON_PRETTY_PRINT',
        'JSON_FORCE_OBJECT',
        'JSON_NUMERIC_CHECK'
      ],
      correctIndex: 0,
      explanation: 'JSON_UNESCAPED_SLASHES membiarkan karakter garis miring murni tanpa escape backslash.'
    }
  },

  // 299. JSON_LAST_ERROR()
  {
    id: 'php-ref-json-last-error',
    title: 'PHP json_last_error() & json_last_error_msg()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 299,
    overview: 'Kuasai json_last_error() dan json_last_error_msg(): mendiagnosis penyebab kegagalan parsing/deserialisasi JSON (JSON_ERROR_SYNTAX, JSON_ERROR_UTF8, JSON_ERROR_DEPTH).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">ERROR DIAGNOSTICS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 299 / 299</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🩺 Diagnosis Kesalahan JSON (json_last_error)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Jika <code>json_decode()</code> mengembalikan <code>null</code>, panggil <code>json_last_error()</code> untuk mendapatkan kode integer kesalahan (<code>JSON_ERROR_NONE</code> = 0) dan <code>json_last_error_msg()</code> untuk membaca pesan human-readable penyebab kegagalan syntax.
          </p>
        </div>
      </div>
    `,
    code: `<?php
// Contoh String JSON Rusak (Syntax Error: kutip tunggal bukan standar JSON)
$jsonRusak = "{ 'nama': 'Budi' }";

$hasil = json_decode($jsonRusak);

echo "<h3>Diagnosis Kesalahan JSON:</h3>";
if ($hasil === null && json_last_error() !== JSON_ERROR_NONE) {
    echo "<p style='color: #dc2626;'><strong>✗ Parsing Gagal!</strong></p>";
    echo "<p>Kode Error: <code>" . json_last_error() . "</code></p>";
    echo "<p>Pesan Error: <strong style='color: #dc2626;'>" . json_last_error_msg() . "</strong></p>";
} else {
    echo "<p style='color: green;'>JSON valid.</p>";
}
?>`,
    codeExplanation: [
      'JSON standar wajib menggunakan tanda kutip ganda ("), tanda kutip tunggal (\') akan memicu JSON_ERROR_SYNTAX.',
      'json_last_error_msg() memberikan pesan penjelasan yang jelas (misal: "Syntax error").'
    ],
    challenge: {
      instruction: 'Periksa error JSON dengan json_last_error_msg().',
      starterCode: `<?php
$res = json_decode("{invalid}");
if (json_last_error() !== JSON_ERROR_NONE) {
    echo "Error: " . json_last_error_msg();
}
?>`,
      hint: 'Panggil json_last_error_msg().'
    },
    quiz: {
      question: 'Konstanta integer apakah yang dikembalikan oleh json_last_error() ketika operasi json_encode/decode berhasil sempurna tanpa error?',
      options: [
        'JSON_ERROR_NONE (angka 0)',
        'JSON_ERROR_SYNTAX',
        'JSON_ERROR_UTF8',
        'JSON_ERROR_DEPTH'
      ],
      correctIndex: 0,
      explanation: 'JSON_ERROR_NONE bernilai integer 0 menandakan tidak ada error.'
    }
  }
];

module.exports = phpPart28RefJson;
