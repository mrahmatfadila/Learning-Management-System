import { HtmlLessonItem } from './htmlPart2';

export const htmlLessonsPart10References: HtmlLessonItem[] = [
  // ── 1. HTML Tag List ──────────────────────────────────────────────────────
  {
    title: 'HTML Tag List - Referensi Lengkap Seluruh Tag HTML Berdasarkan Abjad',
    chapter: 'HTML Tag List',
    type: 'code',
    order: 126,
    overview: 'Katalog referensi lengkap seluruh elemen tag HTML standar W3C dikelompokkan berdasarkan fungsi dan urutan abjad.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📖 Katalog Tag HTML Lengkap</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>Struktur & Metadata:</strong><br>
            <code>&lt;!DOCTYPE&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;title&gt;</code>, <code>&lt;base&gt;</code>, <code>&lt;link&gt;</code>, <code>&lt;meta&gt;</code>, <code>&lt;style&gt;</code>, <code>&lt;body&gt;</code>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>Semantik & Tata Letak:</strong><br>
            <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;div&gt;</code>, <code>&lt;span&gt;</code>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>Teks & Format:</strong><br>
            <code>&lt;h1&gt;-&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;em&gt;</code>, <code>&lt;blockquote&gt;</code>, <code>&lt;pre&gt;</code>, <code>&lt;code&gt;</code>, <code>&lt;mark&gt;</code>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono">
            <strong>Form & Interaktivitas:</strong><br>
            <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;textarea&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;option&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;datalist&gt;</code>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Katalog Tag HTML</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Referensi Tag Resmi W3C</h2>
  <p>Gunakan tag yang tepat sesuai makna semantiknya untuk performa SEO terbaik.</p>
</body>
</html>`,
    codeExplanation: [
      'Gunakan referensi tag ini untuk memilih elemen yang paling tepat bagi kebutuhan dokumen web.'
    ],
    quiz: {
      question: 'Apakah organisasi standar resmi dunia yang menetapkan spesifikasi tag HTML?',
      options: ['W3C (World Wide Web Consortium)', 'IEEE', 'ISO', 'Google'],
      answer: 0,
      explanation: 'W3C bersama WHATWG adalah organisasi standar internasional yang mengelola spesifikasi HTML.'
    }
  },

  // ── 2. HTML Attributes ────────────────────────────────────────────────────
  {
    title: 'HTML Attributes - Referensi Atribut Spesifik Elemen',
    chapter: 'HTML Attributes',
    type: 'code',
    order: 127,
    overview: 'Daftar referensi atribut spesifik yang hanya berlaku untuk elemen-elemen tertentu (seperti href pada tag a, src pada tag img).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🏷️ Atribut Spesifik Elemen</h2>
        <div class="space-y-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&lt;a&gt;</strong>: <code>href</code>, <code>target</code>, <code>download</code>, <code>rel</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&lt;img&gt;</strong>: <code>src</code>, <code>alt</code>, <code>width</code>, <code>height</code>, <code>loading="lazy"</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&lt;form&gt;</strong>: <code>action</code>, <code>method</code>, <code>enctype</code>, <code>autocomplete</code>, <code>novalidate</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>&lt;input&gt;</strong>: <code>type</code>, <code>value</code>, <code>placeholder</code>, <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Atribut Spesifik</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <!-- Atribut Spesifik Download & Lazy Loading -->
  <a href="dokumen.pdf" download="Panduan-LMS.pdf">Download Panduan</a><br><br>
  <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Laptop" loading="lazy" width="200">
</body>
</html>`,
    codeExplanation: [
      'download memaksa browser mengunduh file alih-alih membukanya langsung.',
      'loading="lazy" menunda pemuatan gambar hingga pengguna menggulir layar mendekatinya (hemat kuota & cepat).'
    ],
    quiz: {
      question: 'Atribut apakah pada tag <img> yang mengaktifkan penundaan pemuatan gambar hingga masuk ke viewport layar?',
      options: ['loading="lazy"', 'defer="true"', 'async="true"', 'wait="true"'],
      answer: 0,
      explanation: 'loading="lazy" adalah atribut standar HTML5 untuk mengaktifkan native image lazy-loading.'
    }
  },

  // ── 3. HTML Global Attributes ─────────────────────────────────────────────
  {
    title: 'HTML Global Attributes - Atribut Universal untuk Semua Elemen',
    chapter: 'HTML Global Attributes',
    type: 'code',
    order: 128,
    overview: 'Global Attributes adalah atribut yang sah dan dapat dipasang pada SEMUA elemen HTML tanpa terkecuali.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🌍 Daftar Global Attributes Populer</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>id</strong>: Identitas unik.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>class</strong>: Nama kelas CSS.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>style</strong>: Inline styling CSS.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>title</strong>: Teks tooltip hover.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>hidden</strong>: Menyembunyikan elemen.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>tabindex</strong>: Urutan fokus tombol Tab.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>contenteditable</strong>: Teks bisa diedit langsung.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>spellcheck</strong>: Cek ejaan kata otomatis.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>data-*</strong>: Simpan custom data JS.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Global Attributes</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <!-- Paragraf yang bisa diedit langsung oleh pengguna di browser -->
  <p contenteditable="true" style="padding: 10px; border: 1px dashed #4f46e5; border-radius: 6px;">
    Klik di sini dan coba ketik untuk mengedit teks ini langsung di browser! (contenteditable)
  </p>
  
  <button data-product-id="101" data-price="50000" onclick="alert('ID: ' + this.dataset.productId)">
    Info Produk (data-*)
  </button>
</body>
</html>`,
    codeExplanation: [
      'contenteditable="true" mengubah elemen apa pun menjadi area teks yang bisa diedit langsung oleh pengguna.',
      'data-* menyimpan variabel kustom yang dapat dibaca JavaScript via element.dataset.'
    ],
    quiz: {
      question: 'Atribut global apakah yang digunakan untuk menyimpan data kustom pribadi pada elemen HTML yang nantinya dapat dibaca oleh JavaScript?',
      options: ['custom-*', 'data-*', 'js-*', 'var-*'],
      answer: 1,
      explanation: 'Atribut data-* (misal: data-user-id="123") adalah standar resmi HTML5 untuk menyimpan data kustom di DOM.'
    }
  },

  // ── 4. HTML Browser Support ───────────────────────────────────────────────
  {
    title: 'HTML Browser Support - Kompatibilitas Peramban & CanIUse',
    chapter: 'HTML Browser Support',
    type: 'code',
    order: 129,
    overview: 'Memahami tingkat dukungan fitur HTML5 di berbagai peramban web (Chrome, Edge, Firefox, Safari, Opera).',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🌐 Cek Kompatibilitas Fitur</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Sebelum menggunakan fitur HTML5 terbaru di aplikasi produksi, selalu periksa status dukungannya di portal <strong>CanIUse.com</strong>. Seluruh elemen standar HTML5 pokok kini telah didukung 99%+ di semua browser modern.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Browser Support Check</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Deteksi Fitur Browser dengan JS</h2>
  <script>
    if ('serviceWorker' in navigator) {
      document.write('<p style="color: green;">✅ Browser mendukung Service Worker (PWA Ready)</p>');
    }
    if ('geolocation' in navigator) {
      document.write('<p style="color: green;">✅ Browser mendukung Geolocation</p>');
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'Pemeriksaan fitur (Feature Detection) di JavaScript mencegah error jika peramban pengguna adalah versi lama.'
    ],
    quiz: {
      question: 'Website populer apakah yang menjadi standar referensi dunia untuk mengecek persentase dukungan fitur HTML5/CSS di seluruh peramban?',
      options: ['CanIUse.com', 'Google.com', 'W3C.org', 'GitHub.com'],
      answer: 0,
      explanation: 'CanIUse.com adalah basis data resmi komunitas pengembang web dunia untuk memeriksa kompatibilitas fitur.'
    }
  },

  // ── 5. HTML Events ────────────────────────────────────────────────────────
  {
    title: 'HTML Events - Referensi Event Listener Interaksi Pengguna',
    chapter: 'HTML Events',
    type: 'code',
    order: 130,
    overview: 'Daftar peristiwa (events) yang dipicu oleh tindakan pengguna (klik, ketik, scroll, load, drag) yang dapat ditangkap oleh JavaScript.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">⚡ Kategori Event HTML</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Mouse:</strong> <code>onclick</code>, <code>ondblclick</code>, <code>onmouseenter</code>, <code>onmouseleave</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Keyboard:</strong> <code>onkeydown</code>, <code>onkeyup</code>, <code>onkeypress</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Form:</strong> <code>onsubmit</code>, <code>onchange</code>, <code>oninput</code>, <code>onfocus</code>, <code>onblur</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Window:</strong> <code>onload</code>, <code>onresize</code>, <code>onscroll</code>, <code>onunload</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Clipboard:</strong> <code>oncopy</code>, <code>oncut</code>, <code>onpaste</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Media:</strong> <code>onplay</code>, <code>onpause</code>, <code>onended</code>, <code>onvolumechange</code>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Events</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Live Input Counter (oninput Event)</h2>
  <input type="text" id="live-input" oninput="hitungKarakter(this.value)" placeholder="Ketik sesuatu...">
  <p>Jumlah karakter: <strong id="counter" style="color: #4f46e5;">0</strong></p>

  <script>
    function hitungKarakter(val) {
      document.getElementById('counter').textContent = val.length;
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'oninput langsung merespon setiap ketikan tombol tanpa menunggu input kehilangan fokus.'
    ],
    quiz: {
      question: 'Event apakah yang dipicu secara real-time tepat saat pengguna mengetik setiap karakter baru ke dalam kotak input?',
      options: ['onclick', 'oninput', 'onload', 'onsubmit'],
      answer: 1,
      explanation: 'oninput dipicu secara instan setiap kali isi nilai elemen input berubah.'
    }
  },

  // ── 6. HTML Colors ────────────────────────────────────────────────────────
  {
    title: 'HTML Colors - Referensi 140 Warna Standar, RGB, HEX & HSL',
    chapter: 'HTML Colors',
    type: 'code',
    order: 131,
    overview: 'Tabel referensi lengkap nama-nama warna resmi standar W3C beserta kode representasi heksadesimal, RGB, dan HSL.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎨 Model Pewarnaan Web</h2>
        <div class="space-y-2.5 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>HEX (#RRGGBB)</strong>: Contoh <code>#4F46E5</code> (Indigo), <code>#EF4444</code> (Red), <code>#10B981</code> (Emerald).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>RGB & RGBA</strong>: <code>rgb(79, 70, 229)</code> & <code>rgba(79, 70, 229, 0.5)</code> (dengan transparansi Alpha 50%).
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>HSL (Hue, Saturation, Lightness)</strong>: <code>hsl(243, 75%, 59%)</code>.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Warna Lengkap</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <div style="background: #4f46e5; color: white; padding: 10px; margin-bottom: 5px;">HEX: #4f46e5</div>
  <div style="background: rgb(16, 185, 129); color: white; padding: 10px; margin-bottom: 5px;">RGB: rgb(16, 185, 129)</div>
  <div style="background: hsl(14, 96%, 53%); color: white; padding: 10px;">HSL: hsl(14, 96%, 53%)</div>
</body>
</html>`,
    codeExplanation: [
      'Ketiga model warna menghasilkan visual yang sama persis namun dengan cara pendefinisian yang berbeda.'
    ],
    quiz: {
      question: 'Berapakah nilai maksimal untuk intensitas channel Red, Green, atau Blue dalam format rgb(R, G, B)?',
      options: ['100', '255', '1000', '500'],
      answer: 1,
      explanation: 'Rentang nilai intensitas RGB adalah 0 hingga 255 (berbasis 8-bit per channel).'
    }
  },

  // ── 7. HTML Canvas Reference ──────────────────────────────────────────────
  {
    title: 'HTML Canvas - Referensi Method & Properti 2D Context',
    chapter: 'HTML Canvas',
    type: 'code',
    order: 132,
    overview: 'Lembar contekan referensi method dan properti konteks gambar Canvas 2D.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🖌️ Canvas 2D API Cheatsheet</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Bentuk Kotak:</strong><br>
            <code>fillRect(x,y,w,h)</code><br>
            <code>strokeRect(x,y,w,h)</code><br>
            <code>clearRect(x,y,w,h)</code>
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Jalur Garis (Paths):</strong><br>
            <code>beginPath()</code><br>
            <code>moveTo(x,y)</code><br>
            <code>lineTo(x,y)</code><br>
            <code>arc(x,y,r,s,e)</code><br>
            <code>stroke()</code> &bull; <code>fill()</code>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Canvas Reference Demo</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <canvas id="refCanvas" width="200" height="100" style="border: 1px solid #cbd5e1;"></canvas>
  <script>
    const ctx = document.getElementById('refCanvas').getContext('2d');
    ctx.beginPath();
    ctx.moveTo(10, 10);
    ctx.lineTo(190, 90);
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3;
    ctx.stroke();
  </script>
</body>
</html>`,
    codeExplanation: [
      'moveTo() mengangkat kuas ke koordinat awal dan lineTo() menarik garis lurus.'
    ],
    quiz: {
      question: 'Method Canvas apakah yang digunakan untuk membersihkan seluruh piksel area gambar menjadi transparan kembali?',
      options: ['ctx.delete()', 'ctx.clearRect()', 'ctx.reset()', 'ctx.erase()'],
      answer: 1,
      explanation: 'ctx.clearRect(x, y, w, h) menghapus area piksel tertentu menjadi transparan.'
    }
  },

  // ── 8. HTML Audio/Video Reference ─────────────────────────────────────────
  {
    title: 'HTML Audio/Video - Referensi Properti, Method & Events Media',
    chapter: 'HTML Audio/Video',
    type: 'code',
    order: 133,
    overview: 'Daftar method kontrol pemrograman pemutar media audio dan video.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🎬 Audio/Video JavaScript Controls</h2>
        <div class="space-y-2 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Methods:</strong> <code>video.play()</code>, <code>video.pause()</code>, <code>video.load()</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>Properti:</strong> <code>video.currentTime</code> (detik saat ini), <code>video.duration</code>, <code>video.volume</code> (0.0 - 1.0), <code>video.paused</code>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Custom Video Player Controls</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <video id="myVid" width="300" src="https://www.w3schools.com/html/mov_bbb.mp4"></video><br>
  <button onclick="document.getElementById('myVid').play()">▶ Putar</button>
  <button onclick="document.getElementById('myVid').pause()">⏸ Jeda</button>
</body>
</html>`,
    codeExplanation: [
      'Anda bisa membangun antarmuka pemutar video kustom dengan memanggil method .play() dan .pause().'
    ],
    quiz: {
      question: 'Method JavaScript apakah yang dipanggil untuk menghentikan sementara pemutaran video pada elemen <video>?',
      options: ['video.stop()', 'video.pause()', 'video.halt()', 'video.break()'],
      answer: 1,
      explanation: 'video.pause() adalah method resmi untuk menghentikan pemutaran sementara.'
    }
  },

  // ── 9. HTML Doctypes ──────────────────────────────────────────────────────
  {
    title: 'HTML Doctypes - Sejarah & Format Deklarasi Dokumen Web',
    chapter: 'HTML Doctypes',
    type: 'code',
    order: 134,
    overview: 'Memahami evolusi deklarasi <!DOCTYPE html> dari masa HTML4/XHTML yang sangat panjang hingga era HTML5 yang sangat ringkas.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📜 Evolusi Deklarasi Doctype</h2>
        <div class="space-y-2 text-xs font-mono">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-sans">HTML5 (Modern & Ringkas):</strong><br>
            <code>&lt;!DOCTYPE html&gt;</code>
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-slate-500 font-sans">HTML 4.01 Strict (Kuno):</strong><br>
            <code class="text-[10px]">&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd"&gt;</code>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Doctype HTML5</title>
</head>
<body>
  <h1>Deklarasi HTML5 Sangat Bersih & Ringkas</h1>
</body>
</html>`,
    codeExplanation: [
      '<!DOCTYPE html> bersifat case-insensitive dan wajib menjadi baris pertama dokumen.'
    ],
    quiz: {
      question: 'Bagaimanakah penulisan deklarasi Doctype yang benar untuk standar HTML5 modern?',
      options: ['<!DOCTYPE html>', '<!DOCTYPE HTML5>', '<doctype>', '<html doctype="5">'],
      answer: 0,
      explanation: '<!DOCTYPE html> adalah deklarasi resmi untuk mode standar HTML5.'
    }
  },

  // ── 10. HTML Character Sets ───────────────────────────────────────────────
  {
    title: 'HTML Character Sets - Tabel Lengkap Karakter Set UTF-8 & ASCII',
    chapter: 'HTML Character Sets',
    type: 'code',
    order: 135,
    overview: 'Daftar kode heksadesimal dan desimal set karakter ASCII dan Unicode UTF-8.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔤 Standar Karakter Universal</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          UTF-8 adalah pengkodean karakter variabel 1 hingga 4 byte yang mencakup 1.114.112 karakter Unicode di dunia.
        </p>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Character Set Demo</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Karakter Unicode UTF-8:</h2>
  <p>Huruf Yunani Omega: &#937; (Omega)</p>
  <p>Simbol Catur Raja: &#9812; (King)</p>
</body>
</html>`,
    codeExplanation: [
      '&#937; merender simbol Omega (Ω) dan &#9812; merender simbol catur raja (♔).'
    ],
    quiz: {
      question: 'Berapa banyak karakter yang dapat dikodekan oleh standar Unicode UTF-8 modern?',
      options: ['Hanya 256', 'Lebih dari 1 Juta Karakter', 'Tepat 10.000', '65.536'],
      answer: 1,
      explanation: 'Unicode UTF-8 mendukung lebih dari 1,1 juta karakter dari seluruh aksara bahasa di dunia.'
    }
  },

  // ── 11. HTML URL Encode ───────────────────────────────────────────────────
  {
    title: 'HTML URL Encode - Tabel Lengkap Karakter Persen (%XX)',
    chapter: 'HTML URL Encode',
    type: 'code',
    order: 136,
    overview: 'Tabel referensi pengkodean URL persen untuk karakter khusus dan non-ASCII.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔗 Tabel URL Percent Encoding</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">Spasi = <strong>%20</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">" = <strong>%22</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">& = <strong>%26</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">/ = <strong>%2F</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">: = <strong>%3A</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">? = <strong>%3F</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">= = <strong>%3D</strong></div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">@ = <strong>%40</strong></div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo URL Encoding</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Fungsi JS encodeURIComponent()</h2>
  <script>
    const query = "belajar html & css";
    const encoded = encodeURIComponent(query);
    document.write('<p>Asli: ' + query + '</p>');
    document.write('<p>Encoded: ' + encoded + '</p>');
  </script>
</body>
</html>`,
    codeExplanation: [
      'encodeURIComponent() di JavaScript mengonversi karakter spasi dan & menjadi %20 dan %26.'
    ],
    quiz: {
      question: 'Apakah fungsi bawaan JavaScript yang digunakan untuk mengubah string teks menjadi format URL Encoded aman?',
      options: ['urlConvert()', 'encodeURIComponent()', 'toPercent()', 'makeUrl()'],
      answer: 1,
      explanation: 'encodeURIComponent() adalah fungsi resmi JavaScript untuk meng-encode komponen URI.'
    }
  },

  // ── 12. HTML Lang Codes ───────────────────────────────────────────────────
  {
    title: 'HTML Lang Codes - Daftar Kode Bahasa ISO 639-1',
    chapter: 'HTML Lang Codes',
    type: 'code',
    order: 137,
    overview: 'Referensi kode 2 huruf standar ISO 639-1 untuk atribut lang pada tag <html>.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🌐 Daftar Kode Bahasa ISO 639-1</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><code>id</code>: Indonesia</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><code>en</code>: Inggris</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><code>ar</code>: Arab</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><code>ja</code>: Jepang</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><code>zh</code>: Mandarin</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><code>es</code>: Spanyol</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><code>de</code>: Jerman</div>
          <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"><code>fr</code>: Prancis</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Bahasa Indonesia</title>
</head>
<body>
  <h1>Dokumen Berbahasa Indonesia (lang="id")</h1>
</body>
</html>`,
    codeExplanation: [
      'Atribut lang="id" memberitahu mesin penerjemah Google Translate dan Screen Reader bahasa utama halaman.'
    ],
    quiz: {
      question: 'Kode ISO 639-1 manakah yang benar untuk mendeklarasikan bahasa Indonesia pada tag <html lang="...">?',
      options: ['in', 'id', 'indo', 'idn'],
      answer: 1,
      explanation: 'id adalah kode 2 huruf resmi standar ISO 639-1 untuk bahasa Indonesia.'
    }
  },

  // ── 13. HTTP Messages ─────────────────────────────────────────────────────
  {
    title: 'HTTP Messages - Struktur Request & Response serta Status Codes',
    chapter: 'HTTP Messages',
    type: 'code',
    order: 138,
    overview: 'Memahami anatomi pesan HTTP antara browser klien dan server web backend serta arti kode status 200, 404, 500.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚦 Status Codes HTTP Terpopuler</h2>
        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40">
            <strong>200 OK</strong>: Permintaan berhasil diproses dengan sukses.
          </div>
          <div class="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40">
            <strong>301 Moved Permanently</strong>: Pengalihan (redirect) halaman permanen ke URL baru.
          </div>
          <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40">
            <strong>401 / 403 Forbidden</strong>: Tidak memiliki izin otentikasi/akses ke resource.
          </div>
          <div class="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40">
            <strong>404 Not Found</strong>: Halaman atau berkas file tidak ditemukan di server.
          </div>
          <div class="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40">
            <strong>500 Internal Server Error</strong>: Terjadi kegagalan/error pada script server backend.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>HTTP Status Demo</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>HTTP Request Fetch API</h2>
  <script>
    fetch('/api/v1/modules')
      .then(res => {
        document.write('<p>HTTP Status Code: ' + res.status + ' (' + res.statusText + ')</p>');
      });
  </script>
</body>
</html>`,
    codeExplanation: [
      'res.status membaca kode status numerik HTTP yang dikembalikan oleh server.'
    ],
    quiz: {
      question: 'Kode status HTTP berapakah yang menandakan bahwa resource file yang diminta tidak ditemukan (Not Found)?',
      options: ['200', '301', '404', '500'],
      answer: 2,
      explanation: '404 Not Found adalah kode standar HTTP saat file/endpoint tidak ditemukan di server.'
    }
  },

  // ── 14. HTTP Methods ──────────────────────────────────────────────────────
  {
    title: 'HTTP Methods - GET, POST, PUT, PATCH, DELETE & REST API',
    chapter: 'HTTP Methods',
    type: 'code',
    order: 139,
    overview: 'Metode protokol HTTP yang digunakan browser untuk melakukan operasi CRUD (Create, Read, Update, Delete) ke backend.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🔄 5 Metode HTTP Pokok REST API</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-sky-500">GET</strong>: Mengambil / membaca data (Read).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500">POST</strong>: Membuat data baru (Create).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500">PUT / PATCH</strong>: Memperbarui data yang ada (Update).
          </div>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-rose-500">DELETE</strong>: Menghapus data (Delete).
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTTP Methods</title>
</head>
<body>
  <!-- Form HTML hanya mendukung GET dan POST secara native -->
  <form action="/api/users" method="POST">
    <button type="submit">Buat User Baru (POST)</button>
  </form>
</body>
</html>`,
    codeExplanation: [
      'Elemen <form> natif HTML mendukung method GET dan POST.',
      'Metode PUT, PATCH, dan DELETE dapat dipanggil menggunakan JavaScript Fetch API atau AJAX.'
    ],
    quiz: {
      question: 'Metode HTTP apakah yang digunakan secara khusus untuk mengambil/membaca data dari server tanpa mengubah data di database?',
      options: ['POST', 'GET', 'DELETE', 'PUT'],
      answer: 1,
      explanation: 'Metode GET bersifat idempoten dan aman untuk membaca (retrieve) data dari server.'
    }
  },

  // ── 15. PX to EM Converter ────────────────────────────────────────────────
  {
    title: 'PX to EM Converter - Panduan Rumus Konversi Satuan Web',
    chapter: 'PX to EM Converter',
    type: 'code',
    order: 140,
    overview: 'Rumus matematika konversi ukuran piksel (px) ke satuan relatif (em dan rem) berbasis ukuran font default 16px.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📏 Rumus Konversi Satuan Relatif</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Ukuran font standar browser adalah <strong>16px</strong> (1em = 16px).
        </p>

        <div class="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Rumus Dasar:</div>
          <div>em = piksel / ukuran_font_induk (16px)</div>
          <div class="mt-2 text-slate-400">• 12px = 12 / 16 = <strong>0.75em</strong></div>
          <div class="text-slate-400">• 16px = 16 / 16 = <strong>1.0em</strong></div>
          <div class="text-slate-400">• 24px = 24 / 16 = <strong>1.5em</strong></div>
          <div class="text-slate-400">• 32px = 32 / 16 = <strong>2.0em</strong></div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>PX to EM Converter</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Kalkulator PX ke EM</h2>
  <input type="number" id="px-val" value="24" oninput="konversi(this.value)"> px = 
  <strong id="em-res" style="color: #4f46e5;">1.5em</strong> (Basis 16px)

  <script>
    function konversi(px) {
      document.getElementById('em-res').textContent = (px / 16).toFixed(3) + 'em';
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'Satuan rem (root em) selalu mengacu pada ukuran font <html>, sangat ideal untuk tipografi responsif.'
    ],
    quiz: {
      question: 'Berapakah nilai dalam satuan EM untuk ukuran 32 piksel jika ukuran dasar font browser adalah 16 piksel?',
      options: ['1.5em', '2.0em', '2.5em', '3.2em'],
      answer: 1,
      explanation: '32px / 16px = 2.0em.'
    }
  },

  // ── 16. Keyboard Shortcuts ────────────────────────────────────────────────
  {
    title: 'Keyboard Shortcuts - Pintasan Keyboard Editor & Browser Developer',
    chapter: 'Keyboard Shortcuts',
    type: 'code',
    order: 141,
    overview: 'Kombinasi tombol pintasan keyboard penting untuk mempercepat proses pengkodean di VS Code dan debugging di Chrome DevTools.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">⌨️ Pintasan Keyboard Wajib Developer</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold block mb-1">Visual Studio Code:</strong>
            <p class="text-slate-600 dark:text-slate-400 font-mono">
              • <kbd>Ctrl</kbd> + <kbd>/</kbd>: Toggle Comment Baris<br>
              • <kbd>Alt</kbd> + <kbd>↑ / ↓</kbd>: Pindah Baris Kode<br>
              • <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>↓</kbd>: Duplikasi Baris<br>
              • <kbd>Ctrl</kbd> + <kbd>D</kbd>: Seleksi Kata Kembar Berikutnya
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-bold block mb-1">Browser DevTools:</strong>
            <p class="text-slate-600 dark:text-slate-400 font-mono">
              • <kbd>F12</kbd> / <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>: Buka Inspect Element<br>
              • <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>: Mode Responsive Mobile View<br>
              • <kbd>Ctrl</kbd> + <kbd>F5</kbd>: Hard Reload Tanpa Cache
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Pintasan Keyboard</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Tekan F12 di Keyboard Anda!</h2>
  <p>Periksa tab Elements dan Console untuk melihat bagaimana browser merender kode HTML ini.</p>
</body>
</html>`,
    codeExplanation: [
      'Gunakan tombol F12 untuk membuka DevTools dan menginspeksi elemen HTML secara langsung.'
    ],
    quiz: {
      question: 'Tombol fungsi apakah pada keyboard yang menjadi shortcut universal untuk membuka jendela browser Developer Tools (Inspect Element)?',
      options: ['F1', 'F5', 'F11', 'F12'],
      answer: 3,
      explanation: 'F12 atau Ctrl+Shift+I adalah shortcut universal peramban web untuk membuka Developer Tools.'
    }
  }
];
