module.exports = [
  // ── 288. JQUERY SELECTORS ───────────────────────────────────────────────
  {
    id: 'jquery-selectors',
    title: 'jQuery Selectors',
    chapter: 'JS jQuery',
    chapterId: 'js-chap-jquery',
    order: 288,
    overview: 'Pengenalan jQuery & Sintaks Selektor $(selector): selektor tag $("p"), ID $("#judul"), Class $(".item"), kombinasi turunan, dan pseudo-selectors ($("tr:odd")).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JQUERY</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 288 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💲 Selektor Elemen dengan Simbol Dollar $(...)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>jQuery</strong> menyederhanakan manipulasi DOM melalui sintaks ringkas <code>$(selector)</code> yang meminjam kekuatan selektor CSS untuk memilih satu atau banyak elemen sekaligus dalam satu baris kode.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>jQuery Selectors Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Katalog Selektor jQuery Populer</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Sintaks Selektor jQuery:</strong><br>';
    log += '• Selektor Semua Tag Paragraf: <code>$("p")</code><br>';
    log += '• Selektor ID Elemen Unik: <code>$("#mainTitle")</code><br>';
    log += '• Selektor Semua Elemen Kelas: <code>$(".btn-primary")</code><br>';
    log += '• Selektor Input Form: <code>$(":input")</code>, <code>$(":checked")</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '$(selector) mengembalikan objek jQuery wrapper yang membungkus kumpulan elemen DOM yang cocok.'
    ],
    quiz: {
      question: 'Karakter simbol apakah yang menjadi alias pintasan fungsi utama dalam library jQuery?',
      options: [
        '$ (Tanda Dolar)',
        '& (Ampersand)',
        '# (Pagar)',
        '@ (At)'
      ],
      answer: 0,
      explanation: 'Simbol `$` adalah alias resmi untuk fungsi global `jQuery()`.'
    },
    challenge: {
      title: 'Tantangan: Selektor ID jQuery',
      description: 'Lengkapi selektor ID #header pada $("#header");',
      startingCode: `const sel = $("#header");`,
      solution: `const sel = $("#header");`
    }
  },

  // ── 289. JQUERY HTML ────────────────────────────────────────────────────
  {
    id: 'jquery-html',
    title: 'jQuery HTML',
    chapter: 'JS jQuery',
    chapterId: 'js-chap-jquery',
    order: 289,
    overview: 'Manipulasi Konten HTML dengan jQuery: method .html(), .text(), .val() (input form), .attr(), .append(), .prepend(), .after(), .before(), .remove(), dan .empty().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JQUERY</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 289 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📝 Manipulasi Konten & Atribut HTML</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            jQuery menyatukan operasi <em>Getter</em> dan <em>Setter</em> dalam satu nama method: memanggil <code>$('#teks').html()</code> mengambil konten, sedangkan <code>$('#teks').html('&lt;b&gt;Baru&lt;/b&gt;')</code> mengubah isinya.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>jQuery HTML Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Method Manipulasi Konten jQuery</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '• <code>.text("Halo")</code>: Mengubah teks murni.<br>';
    log += '• <code>.html("<b>Halo</b>")</code>: Menyisipkan elemen HTML.<br>';
    log += '• <code>.val("Input")</code>: Mengubah nilai input form.<br>';
    log += '• <code>.append("&lt;li&gt;Item&lt;/li&gt;")</code>: Menambah anak di posisi akhir.<br>';
    log += '• <code>.remove()</code>: Menghapus elemen dari dokumen.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '.append() menyisipkan elemen di akhir kontainer, sedangkan .prepend() menyisipkan di awal.'
    ],
    quiz: {
      question: 'Method jQuery manakah yang digunakan untuk membaca atau mengubah nilai value dari elemen input form?',
      options: [
        '.val()',
        '.value()',
        '.inputValue()',
        '.text()'
      ],
      answer: 0,
      explanation: 'Method `.val()` digunakan untuk membaca dan mengatur nilai dari input form di jQuery.'
    },
    challenge: {
      title: 'Tantangan: Ubah Teks jQuery',
      description: 'Lakukan `$("#msg").text("OK");`.',
      startingCode: `function setMsg() {\n  $("#msg").text("OK");\n}`,
      solution: `function setMsg() {\n  $("#msg").text("OK");\n}`
    }
  },

  // ── 290. JQUERY CSS ─────────────────────────────────────────────────────
  {
    id: 'jquery-css',
    title: 'jQuery CSS',
    chapter: 'JS jQuery',
    chapterId: 'js-chap-jquery',
    order: 290,
    overview: 'Manipulasi Gaya CSS dengan jQuery: method .css(), manajemen class (.addClass(), .removeClass(), .toggleClass(), .hasClass()), serta kalkulasi dimensi (.width(), .height(), .offset()).',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JQUERY</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 290 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🎨 Styling Dinamis & Manajemen Kelas CSS</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            jQuery mempermudah penataan gaya dinamis dengan <code>.css({ color: 'red', fontSize: '20px' })</code> dan <code>.toggleClass('dark-mode')</code> yang otomatis menambah atau mencopot class CSS saat diklik.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>jQuery CSS Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Manipulasi Style Properti Tunggal vs Multi</h2>
  <div id="output" style="background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Pola Pengaturan Style jQuery:</strong><br>';
    log += '• Satu properti: <code>$("#box").css("background-color", "#0284c7");</code><br>';
    log += '• Multi properti: <code>$("#box").css({ width: 300, opacity: 0.9 });</code><br>';
    log += '• Toggle Kelas: <code>$("#box").toggleClass("is-active");</code>';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      '.toggleClass("namaClass") memeriksa keberadaan class: jika ada dihapus, jika tidak ada ditambahkan.'
    ],
    quiz: {
      question: 'Method jQuery manakah yang secara otomatis menambahkan class jika belum ada, atau menghapusnya jika sudah ada pada elemen?',
      options: [
        '.addClass()',
        '.removeClass()',
        '.toggleClass()',
        '.switchClass()'
      ],
      answer: 2,
      explanation: 'Method `.toggleClass(className)` melakukan toggle on/off penambahan dan penghapusan class.'
    },
    challenge: {
      title: 'Tantangan: Tambah Class jQuery',
      description: 'Lakukan `$(".box").addClass("active");`.',
      startingCode: `function activate() {\n  $(".box").addClass("active");\n}`,
      solution: `function activate() {\n  $(".box").addClass("active");\n}`
    }
  },

  // ── 291. JQUERY DOM ─────────────────────────────────────────────────────
  {
    id: 'jquery-dom',
    title: 'jQuery DOM',
    chapter: 'JS jQuery',
    chapterId: 'js-chap-jquery',
    order: 291,
    overview: 'DOM Traversal, Event Listeners, dan Efek Animasi Bawaan jQuery: .parent(), .children(), .find(), .on("click"), .fadeIn(), .fadeOut(), .slideUp(), .slideDown().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS JQUERY</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 291 / 292</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✨ Animasi & Traversal DOM yang Mulus</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            jQuery terkenal karena efek animasinya yang siap pakai tanpa konfigurasi CSS rumit: <code>.slideToggle(300)</code> untuk akordeon dan <code>.fadeToggle()</code> untuk popup modal.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>jQuery DOM & Animation Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Koleksi Efek Animasi Bawaan jQuery</h2>
  <div id="output" style="background: #0f172a; color: #4ade80; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    let log = '';

    log += '<strong>Efek Transisi Populer:</strong><br>';
    log += '• <code>$("#panel").slideDown("slow");</code> ➔ Membuka panel akordeon.<br>';
    log += '• <code>$("#modal").fadeIn(400);</code> ➔ Efek fade transparan.<br>';
    log += '• <code>$("#item").animate({ left: "250px" });</code> ➔ Animasi kustom.';

    document.getElementById('output').innerHTML = log;
  </script>

</body>
</html>`,
    codeExplanation: [
      'Method traversal seperti .find(".desc") mencari elemen anak di tingkat kedalaman mana pun di dalam elemen induk.'
    ],
    quiz: {
      question: 'Method efek jQuery manakah yang digunakan untuk menampilkan atau menyembunyikan elemen dengan efek tirai geser naik-turun secara bergantian?',
      options: [
        '.fadeToggle()',
        '.slideToggle()',
        '.animateToggle()',
        '.hideShow()'
      ],
      answer: 1,
      explanation: '`slideToggle()` membuka atau menutup elemen dengan efek animasi vertikal meluncur.'
    },
    challenge: {
      title: 'Tantangan: Pasang On Click Event',
      description: 'Lakukan `$("#btn").on("click", handler);`.',
      startingCode: `function bindClick(handler) {\n  $("#btn").on("click", handler);\n}`,
      solution: `function bindClick(handler) {\n  $("#btn").on("click", handler);\n}`
    }
  }
];
