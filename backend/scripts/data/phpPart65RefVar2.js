// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (VARIABLE HANDLING PART 2: 706-715)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart65RefVar2 = [
  // 706. IS_BOOL
  {
    id: 'php-ref-var-is-bool',
    title: 'PHP is_bool()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 706,
    overview: 'Kuasai fungsi is_bool(): memeriksa apakah sebuah variabel bertipe data boolean murni (true atau false).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">TYPE GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 706 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">⚖️ Cek Tipe Boolean (is_bool)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_bool(mixed $value): bool</code> mengembalikan <code>true</code> hanya jika nilai variabel adalah literal <code>true</code> atau <code>false</code>. Angka <code>1</code> atau string <code>"true"</code> akan menghasilkan <code>false</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$val1 = true;
$val2 = 1;
$val3 = "true";

echo "<h3>Hasil Pengujian is_bool():</h3>";
echo "<p>is_bool(true)    : <strong style='color:#059669;'>" . (is_bool($val1) ? 'True' : 'False') . "</strong></p>";
echo "<p>is_bool(1)       : <strong>" . (is_bool($val2) ? 'True' : 'False') . "</strong> (Bukan bool murni)</p>";
echo "<p>is_bool('true') : <strong>" . (is_bool($val3) ? 'True' : 'False') . "</strong> (Bukan bool murni)</p>";
?>`,
    codeExplanation: [
      'is_bool() memverifikasi tipe data primitif boolean murni.'
    ],
    challenge: {
      instruction: 'Cek apakah false adalah boolean dengan is_bool(false).',
      starterCode: `<?php
echo is_bool(false) ? "Boolean" : "Bukan";
?>`,
      hint: 'Panggil is_bool(false).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `is_bool(0)`?',
      options: [
        'Boolean `false` (karena 0 bertipe integer, bukan boolean)',
        'Boolean `true`',
        '`null`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'is_bool memeriksa tipe data variabel, bukan kebenaran truthy/falsy.'
    }
  },

  // 707. IS_CALLABLE
  {
    id: 'php-ref-var-is-callable',
    title: 'PHP is_callable()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 707,
    overview: 'Kuasai fungsi is_callable(): memverifikasi apakah sebuah variabel, string nama fungsi, closure Anonymous Function, atau array method [$obj, "method"] dapat dipanggil sebagai fungsi (Callable Verification).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CALLBACK VALIDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 707 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📞 Verifikasi Fungsi Callback (is_callable)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_callable(mixed $value, bool $syntax_only = false, ?string &$callable_name = null): bool</code> memeriksa apakah sebuah variabel aman dieksekusi via <code>$value()</code> atau <code>call_user_func($value)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$closure = fn($x) => $x * 2;
$namaFungsi = "strtoupper";
$bukanFungsi = "teks_acak_tidak_ada";

echo "<h3>Hasil Pengujian is_callable():</h3>";
echo "<p>Closure fn(\$x)         : <strong style='color:#059669;'>" . (is_callable($closure) ? 'Callable (Bisa Dipanggil)' : 'Tidak') . "</strong></p>";
echo "<p>'strtoupper'           : <strong style='color:#059669;'>" . (is_callable($namaFungsi) ? 'Callable' : 'Tidak') . "</strong></p>";
echo "<p>'teks_acak_tidak_ada'   : <strong style='color:#dc2626;'>" . (is_callable($bukanFungsi) ? 'Callable' : 'Bukan Fungsi Valid') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_callable($callback) memastikan hook/event listener aman dijalankan tanpa memicu fatal error.'
    ],
    challenge: {
      instruction: 'Cek apakah "strlen" adalah callable dengan is_callable("strlen").',
      starterCode: `<?php
echo is_callable("strlen") ? "Callable" : "Not callable";
?>`,
      hint: 'Panggil is_callable("strlen").'
    },
    quiz: {
      question: 'Bentuk struktur array manakah yang valid dianggap sebagai `callable` untuk method instance kelas `$controller->index()`?',
      options: [
        '`[$controller, "index"]`',
        '`["index", $controller]`',
        '`"$controller->index()"`',
        '`[$controller, $index]`'
      ],
      correctIndex: 0,
      explanation: 'Sintaks array [$instance, "methodName"] adalah standar pemanggilan callback di PHP.'
    }
  },

  // 708. IS_DOUBLE
  {
    id: 'php-ref-var-is-double',
    title: 'PHP is_double()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 708,
    overview: 'Kuasai fungsi is_double(): alias resmi dari is_float() untuk memeriksa apakah variabel bertipe bilangan pecahan mengambang (floating-point).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">FLOAT CHECK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 708 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Pengecekan Tipe Double (is_double)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_double(mixed $value): bool</code> adalah alias identik dari <code>is_float()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$pi = 3.14159;

echo "<h3>Hasil Penggunaan is_double():</h3>";
echo "<p>Nilai: $pi -> is_double: <strong style='color:#059669;'>" . (is_double($pi) ? 'True' : 'False') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_double() mengembalikan true jika nilai adalah float pecahan.'
    ],
    challenge: {
      instruction: 'Uji apakah 2.5 adalah double dengan is_double(2.5).',
      starterCode: `<?php
echo is_double(2.5) ? "Double" : "Bukan";
?>`,
      hint: 'Panggil is_double(2.5).'
    },
    quiz: {
      question: 'Fungsi utama apakah yang di-alias oleh `is_double()` di PHP?',
      options: [
        '`is_float()`',
        '`is_int()`',
        '`is_numeric()`',
        '`is_real()`'
      ],
      correctIndex: 0,
      explanation: 'is_double() adalah alias bawaan dari is_float().'
    }
  },

  // 709. IS_FLOAT
  {
    id: 'php-ref-var-is-float',
    title: 'PHP is_float()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 709,
    overview: 'Kuasai fungsi is_float(): memeriksa apakah tipe data variabel adalah bilangan desimal/pecahan floating-point murni.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">TYPE GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 709 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Type Guard Float (is_float)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_float(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value</code> bertipe float murni.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$desimal = 99.9;
$integer = 100;
$stringFloat = "99.9";

echo "<h3>Hasil Pengujian is_float():</h3>";
echo "<p>is_float(99.9)   : <strong style='color:#059669;'>" . (is_float($desimal) ? 'True' : 'False') . "</strong></p>";
echo "<p>is_float(100)    : <strong>" . (is_float($integer) ? 'True' : 'False') . "</strong></p>";
echo "<p>is_float('99.9') : <strong>" . (is_float($stringFloat) ? 'True' : 'False') . "</strong> (String! Gunakan is_numeric)</p>";
?>`,
    codeExplanation: [
      'is_float("99.9") bernilai false karena tipenya string, bukan float literal.'
    ],
    challenge: {
      instruction: 'Cek apakah 0.0 adalah float dengan is_float(0.0).',
      starterCode: `<?php
echo is_float(0.0) ? "Float" : "Bukan";
?>`,
      hint: 'Panggil is_float(0.0).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `is_float("3.14")`?',
      options: [
        'Boolean `false` (karena tipenya string, bukan float primitif)',
        'Boolean `true`',
        '`null`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'is_float memeriksa tipe data murni, untuk string numerik gunakan is_numeric().'
    }
  },

  // 710. IS_INT
  {
    id: 'php-ref-var-is-int',
    title: 'PHP is_int()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 710,
    overview: 'Kuasai fungsi is_int(): memeriksa apakah sebuah variabel bertipe integer bilangan bulat murni.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">TYPE GUARD</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 710 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Type Guard Integer (is_int)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_int(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value</code> adalah integer bilangan bulat (positif, negatif, atau nol).
          </p>
        </div>
      </div>
    `,
    code: `<?php
$umur = 25;

echo "<h3>Hasil Penggunaan is_int():</h3>";
echo "<p>Nilai: $umur -> is_int: <strong style='color:#059669; font-size:18px;'>" . (is_int($umur) ? 'True (Integer Murni)' : 'False') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_int(25) mengembalikan true.'
    ],
    challenge: {
      instruction: 'Cek apakah 42 adalah integer dengan is_int(42).',
      starterCode: `<?php
echo is_int(42) ? "Integer" : "Bukan";
?>`,
      hint: 'Panggil is_int(42).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `is_int("42")`?',
      options: [
        'Boolean `false` (karena `"42"` adalah string)',
        'Boolean `true`',
        '`null`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'is_int hanya mengembalikan true untuk nilai bertipe data integer murni.'
    }
  },

  // 711. IS_INTEGER
  {
    id: 'php-ref-var-is-integer',
    title: 'PHP is_integer()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 711,
    overview: 'Kuasai fungsi is_integer(): alias resmi dari is_int() untuk memeriksa apakah variabel bertipe integer.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTEGER ALIAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 711 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Alias Pengecekan Integer (is_integer)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_integer(mixed $value): bool</code> adalah alias identik 100% dari <code>is_int()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$id = 1001;

echo "<h3>Hasil Penggunaan is_integer():</h3>";
echo "<p>is_integer($id): <strong style='color:#059669;'>" . (is_integer($id) ? 'True' : 'False') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_integer() bekerja identik dengan is_int().'
    ],
    challenge: {
      instruction: 'Uji is_integer(50).',
      starterCode: `<?php
echo is_integer(50) ? "Valid" : "Invalid";
?>`,
      hint: 'Panggil is_integer(50).'
    },
    quiz: {
      question: 'Fungsi utama apakah yang di-alias oleh `is_integer()`?',
      options: [
        '`is_int()`',
        '`is_numeric()`',
        '`intval()`',
        '`is_long()`'
      ],
      correctIndex: 0,
      explanation: 'is_integer() adalah alias resmi bawaan dari is_int().'
    }
  },

  // 712. IS_ITERABLE
  {
    id: 'php-ref-var-is-iterable',
    title: 'PHP is_iterable()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 712,
    overview: 'Kuasai fungsi is_iterable(): memverifikasi apakah variabel dapat diiterasi dengan foreach (berupa array PHP atau instance objek Traversable / Iterator / Generator).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">LOOP SAFETY</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 712 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔄 Verifikasi Traversal (is_iterable)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_iterable(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value</code> aman digunakan pada loop <code>foreach ($value as $item)</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$arrayData = ["A", "B", "C"];
$generator = (function() { yield 1; yield 2; })();
$stringData = "DevGrow";

echo "<h3>Hasil Pengujian is_iterable():</h3>";
echo "<p>Array [A, B, C]     : <strong style='color:#059669;'>" . (is_iterable($arrayData) ? 'Iterable (Bisa di-loop foreach)' : 'Tidak') . "</strong></p>";
echo "<p>Generator Generator : <strong style='color:#059669;'>" . (is_iterable($generator) ? 'Iterable (Traversable)' : 'Tidak') . "</strong></p>";
echo "<p>String 'DevGrow'    : <strong style='color:#dc2626;'>" . (is_iterable($stringData) ? 'Iterable' : 'Bukan Iterable') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_iterable() mencakup array maupun objek Traversable/Generator.'
    ],
    challenge: {
      instruction: 'Cek apakah array [] iterable dengan is_iterable([]).',
      starterCode: `<?php
echo is_iterable([]) ? "Iterable" : "Bukan";
?>`,
      hint: 'Panggil is_iterable([]).'
    },
    quiz: {
      question: 'Manakah di antara tipe berikut yang bernilai `true` pada pemanggilan `is_iterable()`?',
      options: [
        'Array primitif DAN Objek yang mengimplementasikan `Traversable` (seperti Generator atau Iterator)',
        'Hanya array biasa saja',
        'Hanya string saja',
        'Integer'
      ],
      correctIndex: 0,
      explanation: 'is_iterable memeriksa tipe pseudo-type iterable di PHP.'
    }
  },

  // 713. IS_LONG
  {
    id: 'php-ref-var-is-long',
    title: 'PHP is_long()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 713,
    overview: 'Kuasai fungsi is_long(): alias resmi dari is_int() untuk memeriksa apakah variabel bertipe integer.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">INTEGER ALIAS</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 713 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Alias Integer Long (is_long)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_long(mixed $value): bool</code> adalah alias identik 100% dari <code>is_int()</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$nomorUrut = 99999;

echo "<h3>Hasil Penggunaan is_long():</h3>";
echo "<p>is_long($nomorUrut): <strong style='color:#059669;'>" . (is_long($nomorUrut) ? 'True' : 'False') . "</strong></p>";
?>`,
    codeExplanation: [
      'is_long() bekerja sama persis dengan is_int().'
    ],
    challenge: {
      instruction: 'Uji is_long(100).',
      starterCode: `<?php
echo is_long(100) ? "Long" : "Bukan";
?>`,
      hint: 'Panggil is_long(100).'
    },
    quiz: {
      question: 'Fungsi manakah yang memiliki fungsi yang sama persis dengan `is_long()`?',
      options: [
        '`is_int()` dan `is_integer()`',
        '`is_float()`',
        '`is_numeric()`',
        '`is_string()`'
      ],
      correctIndex: 0,
      explanation: 'is_long, is_integer, dan is_int adalah fungsi yang sama.'
    }
  },

  // 714. IS_NULL
  {
    id: 'php-ref-var-is-null',
    title: 'PHP is_null()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 714,
    overview: 'Kuasai fungsi is_null(): memeriksa apakah sebuah variabel bernilai NULL murni (atau perbandingan $var === null).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">NULL CHECK</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 714 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🈳 Pengecekan Nilai NULL (is_null)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_null(mixed $value): bool</code> mengembalikan <code>true</code> jika <code>$value === null</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$data = null;
$kosong = "";

echo "<h3>Hasil Pengujian is_null():</h3>";
echo "<p>is_null(null) : <strong style='color:#059669;'>" . (is_null($data) ? 'True (NULL Murni)' : 'False') . "</strong></p>";
echo "<p>is_null('')   : <strong>" . (is_null($kosong) ? 'True' : 'False') . "</strong> (Bukan NULL, ini string kosong)</p>";
?>`,
    codeExplanation: [
      'is_null() hanya mengembalikan true jika variabel secara eksplisit bernilai null.'
    ],
    challenge: {
      instruction: 'Cek apakah null adalah is_null(null).',
      starterCode: `<?php
echo is_null(null) ? "Null" : "Bukan";
?>`,
      hint: 'Panggil is_null(null).'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `is_null("")` (string kosong)?',
      options: [
        'Boolean `false`',
        'Boolean `true`',
        '`null`',
        'Error'
      ],
      correctIndex: 0,
      explanation: 'String kosong "" bukan bertipe NULL, melainkan string.'
    }
  },

  // 715. IS_NUMERIC
  {
    id: 'php-ref-var-is-numeric-guard',
    title: 'PHP is_numeric()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 715,
    overview: 'Kuasai fungsi is_numeric(): memeriksa apakah sebuah variabel berisi angka (integer, float, scientific notation 1e5, atau string numerik seperti "42" dan "3.14").',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-green-600 text-white">INPUT VALIDATION</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 715 / 723</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🔢 Validasi Input Angka (is_numeric)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>is_numeric(mixed $value): bool</code> adalah fungsi validasi input formulir paling esensial untuk memeriksa data <code>$_GET</code> dan <code>$_POST</code> yang selalu bertipe string sebelum dimasukkan ke query database numerik.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$inputs = [
    "42" => is_numeric("42"),
    "3.14" => is_numeric("3.14"),
    "-15" => is_numeric("-15"),
    "1e5" => is_numeric("1e5"),
    "42abc" => is_numeric("42abc"),
    "abc" => is_numeric("abc")
];

echo "<h3>Hasil Pengujian is_numeric() pada Berbagai Input:</h3>";
echo "<ul>";
foreach ($inputs as $input => $valid) {
    $warna = $valid ? "#059669" : "#dc2626";
    $status = $valid ? "✓ NUMERIK VALID" : "✗ BUKAN ANGKA";
    echo "<li>Input <code>'$input'</code> -> <strong style='color:$warna;'>$status</strong></li>";
}
echo "</ul>";
?>`,
    codeExplanation: [
      'is_numeric("42") dan is_numeric("3.14") bernilai true karena berupa string angka yang sah.'
    ],
    challenge: {
      instruction: 'Validasi apakah string "5000" adalah angka dengan is_numeric("5000").',
      starterCode: `<?php
echo is_numeric("5000") ? "Valid Angka" : "Bukan Angka";
?>`,
      hint: 'Panggil is_numeric("5000").'
    },
    quiz: {
      question: 'Berapakah nilai yang dikembalikan oleh `is_numeric("100px")`?',
      options: [
        'Boolean `false` (karena mengandung karakter huruf "px")',
        'Boolean `true`',
        'Integer `100`',
        '`null`'
      ],
      correctIndex: 0,
      explanation: 'is_numeric mensyaratkan seluruh isi string dapat diparsing sebagai angka valid.'
    }
  }
];

module.exports = phpPart65RefVar2;
