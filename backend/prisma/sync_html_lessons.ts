import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

// Premium Core Lessons Content Dictionary
const premiumLessons: Record<string, { type: 'code' | 'video' | 'reading'; theory: string; code: string; quiz: any; videoUrl?: string }> = {
  "HTML HOME": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML HOME</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Selamat datang di dunia pengembangan web! HTML (HyperText Markup Language) adalah batu pondasi pertama yang wajib dikuasai oleh setiap Web Developer. Bahasa ini bertindak sebagai "kerangka tulang" yang menstruktur semua teks, gambar, tombol, dan media di web.
</p>
<p class="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
  Pikirkan HTML sebagai pondasi dasar sebuah bangunan, sedangkan CSS adalah cat dekoratifnya, dan JavaScript adalah kelistrikan dan pipa air otomatis yang membuatnya hidup dan interaktif.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Struktur Dasar Halaman Web</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300">
  Setiap dokumen web modern diawali dengan kerangka sederhana. Perhatikan contoh sintaks kode di editor kanan.
</p>
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8 dark:bg-indigo-950/20">
  <h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2 dark:text-indigo-300">💡 Misi Praktik Pertama:</h4>
  <p class="text-indigo-800 text-sm leading-relaxed dark:text-indigo-200">
    Lihatlah panel editor di sebelah kanan Anda. Anda akan melihat kode kerangka HTML awal. Silakan modifikasi konten teks di dalam tag <code>&lt;h1&gt;</code> dan <code>&lt;p&gt;</code>, lalu klik tombol <strong>RUN</strong> di atas editor untuk melihat hasilnya secara langsung di layar pratinjau!
  </p>
</div>`,
    code: `<!DOCTYPE html>
<html>
<body>
  <h1>Halo HTML Dasar!</h1>
  <p>Selamat belajar pemrograman web interaktif di DevGrow Academy. Ini adalah langkah pertama saya menjadi Web Developer profesional!</p>
</body>
</html>`,
    quiz: {
      question: "Manakah pernyataan di bawah ini yang paling tepat mendeskripsikan peran utama dari HTML dalam sebuah website?",
      options: [
        "Sebagai style dekoratif untuk memanipulasi font dan animasi warna.",
        "Membentuk kerangka dasar, hierarki dokumen, dan struktur konten halaman web.",
        "Sebagai mesin database server-side untuk menyimpan data sensitif pengguna.",
        "Untuk memproses pembayaran transaksi digital secara real-time."
      ],
      correctIndex: 1,
      explanation: "HTML (HyperText Markup Language) murni dirancang untuk mendeskripsikan dan menstruktur kerangka serta konten sebuah halaman web."
    }
  },
  "HTML Introduction": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Introduction</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  HTML singkatan dari <strong>HyperText Markup Language</strong>. Penting diingat: HTML <em>bukanlah</em> bahasa pemrograman logic seperti JavaScript, Python, atau PHP. HTML adalah <strong>bahasa markup</strong> yang bertugas menandai teks agar browser web memahami bagaimana menampilkannya secara visual.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Bagaimana Cara Kerja Browser?</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Browser web (seperti Google Chrome, Safari, atau Firefox) membaca dokumen HTML dari atas ke bawah. Browser menerjemahkan tag-tag markup (seperti <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, <code>&lt;body&gt;</code>) ke dalam representasi visual, lalu menampilkannya kepada pengguna. Browser tidak menampilkan tag HTML itu sendiri, melainkan isinya.
</p>
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8 dark:bg-indigo-950/20">
  <h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2 dark:text-indigo-300">💡 Penjelasan Bagian Dokumen:</h4>
  <p class="text-indigo-800 text-sm leading-relaxed dark:text-indigo-200">
    - <code>&lt;!DOCTYPE html&gt;</code> memberitahu browser bahwa dokumen ini ditulis dalam standar HTML5 modern.<br>
    - <code>&lt;head&gt;</code> berisi data rahasia/informasi halaman (metadata) yang tidak terlihat langsung oleh pengunjung (seperti judul tab browser di <code>&lt;title&gt;</code>).<br>
    - <code>&lt;body&gt;</code> membungkus semua elemen visual yang tampil di layar pengunjung.
  </p>
</div>`,
    code: `<!DOCTYPE html>
<html>
<head>
  <title>Pengenalan HTML</title>
</head>
<body>
  <h1>Struktur Pohon DOM</h1>
  <p>Browser membaca elemen-elemen ini dan mengubahnya menjadi model struktur data bernama DOM (Document Object Model).</p>
</body>
</html>`,
    quiz: {
      question: "Elemen di dalam tag manakah yang bertugas menampung seluruh konten visual halaman web yang akan dilihat secara langsung oleh pengunjung?",
      options: [
        "Di dalam tag <head>",
        "Di dalam tag <body>",
        "Di dalam tag <meta>",
        "Di dalam tag <title>"
      ],
      correctIndex: 1,
      explanation: "Seluruh konten visual seperti gambar, teks, tombol, paragraf, dan video wajib diletakkan di dalam tag <body> agar tampil di halaman web."
    }
  },
  "HTML Editors": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Editors</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Menulis kode HTML sangat ramah pemula. Anda tidak memerlukan software berbayar yang mahal. Anda bahkan bisa menulis HTML menggunakan aplikasi bawaan Windows/Mac sederhana seperti <strong>Notepad</strong> atau <strong>TextEdit</strong>.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Peralatan Profesional (IDE)</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Namun, untuk produktivitas profesional, sangat disarankan menggunakan teks editor khusus koding yang memiliki fitur pewarnaan sintaks (syntax highlighting), auto-complete, dan ekstensi praktis. Pilihan terpopuler saat ini antara lain:
</p>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><strong>Visual Studio Code (VS Code)</strong> - Editor paling populer dari Microsoft, gratis dan sangat bertenaga.</li>
  <li><strong>Sublime Text</strong> - Ringan, cepat, dan memiliki performa responsif.</li>
  <li><strong>Monaco Editor</strong> - Teknologi core dari VS Code yang saat ini sedang Anda gunakan secara langsung di halaman DevGrow Academy ini!</li>
</ul>
<div class="bg-orange-50 border-2 border-orange-200 rounded-2xl p-5 mb-8 dark:bg-orange-950/10 dark:border-orange-500/20">
  <h4 class="text-orange-800 font-bold mb-2 dark:text-orange-300">🎯 Eksperimen Live Editor:</h4>
  <p class="text-orange-900 text-sm leading-relaxed dark:text-orange-200">
    Ketiklah tag baru seperti <code>&lt;h2&gt;Halo Saya Siswa DevGrow&lt;/h2&gt;</code> di editor sebelah kanan. Klik <strong>RUN</strong> dan lihat betapa mudahnya kita membuat kode HTML berjalan seketika!
  </p>
</div>`,
    code: `<!-- Cobalah ketik elemen baru di bawah komentar ini! -->
<h1>Belajar dengan Live Editor</h1>
<p>Saya belajar membuat kode HTML menggunakan Monaco Editor interaktif.</p>
`,
    quiz: {
      question: "Manakah editor teks/IDE modern di bawah ini yang paling populer secara global untuk pengembangan web profesional?",
      options: [
        "Microsoft Word",
        "Adobe Photoshop",
        "Visual Studio Code",
        "Windows Paint"
      ],
      correctIndex: 2,
      explanation: "Visual Studio Code (VS Code) adalah IDE modern yang gratis, open-source, dan sangat disukai karena ekosistem plugin kodingnya yang luas."
    }
  },
  "HTML Basic": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Basic</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Dalam pelajaran dasar ini, kita akan mempelajari empat pondasi struktural utama yang wajib ada di setiap file dokumen HTML:
</p>
<ol class="list-decimal pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>Deklarasi DOCTYPE</strong>: Baris pertama <code>&lt;!DOCTYPE html&gt;</code> untuk mendefinisikan standar HTML5 modern.</li>
  <li><strong>Elemen Root html</strong>: Pembungkus seluruh dokumen dengan tag <code>&lt;html&gt;</code>.</li>
  <li><strong>Judul Halaman (Headings)</strong>: Elemen judul <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code> untuk merepresentasikan hierarki informasi.</li>
  <li><strong>Paragraf (Paragraphs)</strong>: Tag pembungkus teks <code>&lt;p&gt;</code> yang menyusun kalimat agar teratur.</li>
</ol>
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8 dark:bg-indigo-950/20">
  <h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2 dark:text-indigo-300">💡 Ingat Aturan Tag:</h4>
  <p class="text-indigo-800 text-sm leading-relaxed dark:text-indigo-200">
    Hampir setiap elemen HTML wajib ditulis secara sepasang: tag pembuka (misal: <code>&lt;h1&gt;</code>) dan tag penutup yang ditandai dengan garis miring (slash) (misal: <code>&lt;/h1&gt;</code>).
  </p>
</div>`,
    code: `<!DOCTYPE html>
<html>
<body>
  <h1>Judul Utama Artikel</h1>
  <p>Ini adalah paragraf penjelasan pertama yang menjelaskan topik artikel dengan rapi.</p>
</body>
</html>`,
    quiz: {
      question: "Apa fungsi utama dari deklarasi <!DOCTYPE html> pada baris pertama sebuah file web?",
      options: [
        "Menghubungkan web secara nirkabel ke satelit database server.",
        "Mendefinisikan gaya pewarnaan latar belakang halaman.",
        "Menginstruksikan browser bahwa dokumen ini ditulis sesuai spesifikasi standar HTML5.",
        "Mengaktifkan bahasa pemrograman scripting Python."
      ],
      correctIndex: 2,
      explanation: "Deklarasi <!DOCTYPE html> adalah instruksi standar kepada browser bahwa halaman web ditulis menggunakan HTML5 modern agar dirender dengan benar."
    }
  },
  "HTML Elements": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Elements</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Elemen HTML adalah segalanya, mulai dari tag pembuka (start tag), konten di dalamnya, hingga tag penutup (end tag). 
</p>
<p class="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed font-mono text-sm bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
  &lt;nama-tag&gt; Isi Konten Elemen &lt;/nama-tag&gt;
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Sifat Elemen:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><strong>Nested Elements</strong>: Elemen HTML dapat saling bersarang di dalam elemen lain (contoh: meletakkan elemen tebal <code>&lt;strong&gt;</code> di dalam elemen paragraf <code>&lt;p&gt;</code>).</li>
  <li><strong>Void Elements</strong>: Elemen kosong yang tidak memiliki konten dan tidak membutuhkan tag penutup, seperti elemen ganti baris <code>&lt;br&gt;</code>, garis pembatas <code>&lt;hr&gt;</code>, dan gambar <code>&lt;img&gt;</code>.</li>
</ul>`,
    code: `<p>Ini adalah elemen paragraf biasa, namun di dalamnya terdapat kata yang ditulis <strong>sangat tebal</strong> menggunakan teknik nesting element.</p>
<hr>
<p>Tag hr di atas adalah contoh Void Element yang berfungsi membuat garis horizontal pemisah.</p>`,
    quiz: {
      question: "Manakah di bawah ini contoh elemen kosong (void/empty element) yang tidak memerlukan tag penutup?",
      options: [
        "Tag paragraf <p>",
        "Tag pembungkus utama <html>",
        "Tag jeda baris/break <br>",
        "Tag heading judul <h1>"
      ],
      correctIndex: 2,
      explanation: "Tag <br> (break) adalah elemen kosong yang murni menyisipkan jeda baris baru tanpa konten teks di dalamnya, sehingga tidak memerlukan tag penutup."
    }
  },
  "HTML Attributes": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Attributes</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Atribut memberikan informasi tambahan atau properti pengatur bagi elemen HTML. 
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Aturan Penulisan Atribut:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li>Selalu diletakkan di dalam <strong>tag pembuka</strong>, bukan tag penutup.</li>
  <li>Ditulis dalam format sepasang nama dan nilai: <code>nama-atribut="nilai-atribut"</code>.</li>
  <li>Nilai atribut wajib diapit oleh tanda kutip (umumnya tanda kutip ganda <code>"</code>).</li>
</ul>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Atribut Sangat Populer:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>href</code>: Menentukan alamat URL tujuan pada tag tautan/anchor <code>&lt;a&gt;</code>.</li>
  <li><code>src</code>: Menentukan jalur lokasi gambar pada tag <code>&lt;img&gt;</code>.</li>
  <li><code>alt</code>: Menentukan teks alternatif deskripsi jika gambar gagal dimuat.</li>
</ul>`,
    code: `<p>Mempelajari link eksternal dengan target tab baru:</p>
<a href="https://www.google.com" target="_blank">Kunjungi Google</a>
<br><br>
<p>Menampilkan gambar acak berdimensi lebar 200px:</p>
<img src="https://picsum.photos/200/100" alt="Gambar Acak Picsum" width="200" height="100">`,
    quiz: {
      question: "Atribut manakah yang wajib ditambahkan pada tag tautan anchor <a> untuk mengarahkan ke mana pengguna akan pergi saat mengeklik link tersebut?",
      options: [
        "Atribut src",
        "Atribut target",
        "Atribut href",
        "Atribut alt"
      ],
      correctIndex: 2,
      explanation: "Atribut href (Hypertext Reference) bertugas menampung alamat URL tujuan dari sebuah elemen tautan anchor <a>."
    }
  },
  "HTML Headings": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Headings</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Heading digunakan untuk mendefinisikan judul dan subjudul dari suatu bagian dokumen halaman web. HTML menyediakan enam tingkatan heading, mulai dari <code>&lt;h1&gt;</code> (terpenting & terbesar) hingga <code>&lt;h6&gt;</code> (terendah & terkecil).
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Pentingnya Heading untuk SEO</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Mesin pencari (seperti Google) membaca heading untuk mengindeks struktur dan isi utama halaman web Anda. Jangan gunakan tag heading murni untuk memperbesar ukuran font. Gunakanlah heading secara semantik teratur: <code>h1</code> untuk judul bab utama, <code>h2</code> untuk sub-bab, <code>h3</code> untuk sub-sub-bab, dan seterusnya.
</p>
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8 dark:bg-indigo-950/20">
  <h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2 dark:text-indigo-300">💡 Aturan Emas SEO:</h4>
  <p class="text-indigo-800 text-sm leading-relaxed dark:text-indigo-200">
    Gunakan hanya <strong>satu tag &lt;h1&gt; per halaman web</strong> untuk judul artikel/halaman utama agar Google dapat memahami fokus utama artikel dengan jelas.
  </p>
</div>`,
    code: `<h1>Judul Halaman Terpenting (H1)</h1>
<h2>Sub-Bagian Topik (H2)</h2>
<h3>Penjelasan Topik Rinci (H3)</h3>
<p>Ini adalah paragraf konten biasa di bawah struktur heading yang teratur.</p>`,
    quiz: {
      question: "Berapa jumlah tingkatan tag heading default yang disediakan oleh HTML secara semantik?",
      options: [
        "3 Tingkat (h1 sampai h3)",
        "5 Tingkat (h1 sampai h5)",
        "6 Tingkat (h1 sampai h6)",
        "Tidak terbatas sesuai angka yang diketik"
      ],
      correctIndex: 2,
      explanation: "HTML secara default menyediakan 6 tingkatan heading dari <h1> sampai <h6> untuk menyusun struktur dokumen web dengan rapi."
    }
  },
  "HTML Paragraphs": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Paragraphs</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Tag <code>&lt;p&gt;</code> digunakan untuk mendefinisikan sebuah paragraf. Elemen ini otomatis bertindak sebagai elemen block-level, yang berarti browser akan otomatis menambahkan margin/jarak kosong sebelum dan sesudah paragraf.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Jeda Baris & Teks Preformat</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Ingat bahwa browser otomatis menghapus spasi berlebih atau enter baru (whitespace) yang Anda ketik di dalam kode editor. Untuk membuat jeda baris baru tanpa paragraf baru, gunakan tag kosong <code>&lt;br&gt;</code>. Jika Anda ingin teks ditampilkan persis seperti apa yang Anda ketik (termasuk spasi ganda dan enter), gunakan tag <code>&lt;pre&gt;</code>.
</p>`,
    code: `<p>Ini paragraf biasa. Spasi ganda           di dalam kode ini akan otomatis diabaikan oleh browser.</p>
<hr>
<p>Paragraf ini menggunakan tag br<br>untuk mematahkan baris baru secara manual.</p>
<hr>
<pre>
  Puisi Indah:
  Baris ini     menjorok jauh
  dan spasi ini nyata.
</pre>`,
    quiz: {
      question: "Tag manakah yang paling tepat digunakan untuk menampilkan teks persis sesuai dengan spasi dan baris baru (enter) seperti yang diketik di editor?",
      options: [
        "Tag pembatas baris <br>",
        "Tag format teratur <pre>",
        "Tag paragraf standar <p>",
        "Tag pembatas horizontal <hr>"
      ],
      correctIndex: 1,
      explanation: "Tag <pre> (Preformatted Text) menyajikan teks dengan font monospace dan mempertahankan spasi ganda serta enter persis sesuai kode sumber."
    }
  },
  "HTML Styles": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Styles</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Ingin memperindah tampilan teks Anda? Anda dapat menggunakan atribut <code>style</code> untuk menambahkan gaya desain CSS secara inline langsung pada elemen HTML.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Sintaks Inline CSS:</h3>
<p class="mb-6 text-slate-600 dark:text-slate-300 font-mono text-sm bg-slate-100 dark:bg-slate-900/50 p-4 rounded-xl">
  &lt;tag style="property: value;"&gt; Konten Elemen &lt;/tag&gt;
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Properti Desain Terpopuler:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>color</code>: Mengubah warna teks (misal: red, blue, atau hex #6366f1).</li>
  <li><code>background-color</code>: Mengubah warna latar belakang elemen.</li>
  <li><code>font-size</code>: Mengatur ukuran teks (misal: 14px, 2rem).</li>
  <li><code>text-align</code>: Mengatur posisi rata teks (left, center, right, justify).</li>
</ul>`,
    code: `<h1 style="color: dodgerblue; text-align: center;">Desain Inline CSS</h1>
<p style="background-color: lightyellow; color: darkorange; font-size: 18px; padding: 15px; border-radius: 8px;">
  Elemen paragraf ini memiliki latar belakang kuning, teks berwarna jingga berukuran 18px, dan sudut yang membulat!
</p>`,
    quiz: {
      question: "Properti CSS inline manakah di bawah ini yang digunakan untuk mengubah warna dari teks (tulisan)?",
      options: [
        "Properti background-color",
        "Properti font-style",
        "Properti color",
        "Properti text-color"
      ],
      correctIndex: 2,
      explanation: "Properti 'color' murni digunakan untuk mengubah warna teks, sedangkan 'background-color' digunakan untuk warna latar belakang."
    }
  },
  "HTML Formatting": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Formatting</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  HTML menyediakan berbagai tag khusus yang digunakan untuk memformat tampilan teks tanpa bantuan CSS eksternal. Format ini tidak hanya mempercantik tampilan visual tetapi juga memberikan makna semantik yang penting bagi mesin pembaca layar (screen reader) dan SEO.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Tag Pemformatan Terpopuler:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>&lt;b&gt;</code> (Bold) & <code>&lt;strong&gt;</code> (Tebal Penting): Tebal visual vs tebal dengan nilai urgensi semantik.</li>
  <li><code>&lt;i&gt;</code> (Italic) & <code>&lt;em&gt;</code> (Emphasized): Teks miring biasa vs teks miring penekanan intonasi baca.</li>
  <li><code>&lt;mark&gt;</code>: Memberi efek stabilo/sorotan kuning pada teks.</li>
  <li><code>&lt;del&gt;</code> (Deleted): Efek coretan horizontal untuk teks yang dihapus/revisi.</li>
  <li><code>&lt;sub&gt;</code> (Subscript) & <code>&lt;sup&gt;</code> (Superscript): Menulis teks di bawah garis dasar (misal: H<sub>2</sub>O) atau di atas garis dasar (misal: 10<sup>2</sup>).</li>
</ul>`,
    code: `<p>Ini teks biasa, tapi kata ini ditulis <strong>sangat penting</strong> dan kata ini ditulis <em>memiliki penekanan emosional</em>.</p>
<p>Harga barang ini telah didiskon dari <del>Rp 200.000</del> menjadi <mark>Rp 150.000 saja!</mark></p>
<p>Rumus kimia air adalah H<sub>2</sub>O, dan rumus luas persegi adalah sisi<sup>2</sup>.</p>`,
    quiz: {
      question: "Tag manakah yang paling tepat digunakan untuk menandai harga coret pada barang promo belanja di web Anda?",
      options: [
        "Tag penanda warna <mark>",
        "Tag coret revisi <del>",
        "Tag penulisan bawah <sub>",
        "Tag penulisan atas <sup>"
      ],
      correctIndex: 1,
      explanation: "Tag <del> (delete) secara semantik menandakan bahwa teks tersebut telah direvisi atau dihapus, menghasilkan tampilan teks coret di browser."
    }
  },
  "HTML CSS": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML CSS</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Ada tiga cara utama untuk menyisipkan gaya desain CSS ke dalam dokumen HTML Anda:
</p>
<ol class="list-decimal pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>Inline CSS</strong> - Menuliskan atribut <code>style</code> langsung pada tag pembuka elemen (cocok untuk modifikasi cepat satu elemen).</li>
  <li><strong>Internal CSS</strong> - Menggunakan tag <code>&lt;style&gt;</code> di dalam bagian <code>&lt;head&gt;</code> (cocok untuk mendesain satu halaman utuh).</li>
  <li><strong>External CSS</strong> - Menggunakan tag <code>&lt;link&gt;</code> di dalam <code>&lt;head&gt;</code> untuk memuat file eksternal <code>.css</code> (cara terbaik dan paling standar dalam industri web karena memisahkan kode markup dengan kode gaya).</li>
</ol>
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8 dark:bg-indigo-950/20">
  <h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2 dark:text-indigo-300">💡 Praktik Terbaik Industri:</h4>
  <p class="text-indigo-800 text-sm leading-relaxed dark:text-indigo-200">
    Gunakanlah <strong>External CSS</strong> agar jika Anda ingin mendesain puluhan halaman web sekaligus, Anda hanya perlu merubah satu file CSS eksternal tersebut!
  </p>
</div>`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f8fafc;
    }
    .card {
      background-color: white;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      max-width: 400px;
    }
    .badge {
      background-color: #6366f1;
      color: white;
      padding: 4px 8px;
      font-size: 11px;
      font-weight: bold;
      border-radius: 20px;
    }
  </style>
</head>
<body>
  <div class="card">
    <span class="badge">Eksklusif</span>
    <h2>Belajar CSS Internal</h2>
    <p>Ini adalah demo penerapan Internal CSS di mana semua style diatur di dalam tag style pada head dokumen.</p>
  </div>
</body>
</html>`,
    quiz: {
      question: "Tag manakah yang bertugas untuk menghubungkan atau mengimpor file eksternal CSS (.css) ke dalam halaman HTML?",
      options: [
        "Tag pembungkus gaya <style>",
        "Tag penghubung <link>",
        "Tag skrip dinamis <script>",
        "Tag impor khusus <import>"
      ],
      correctIndex: 1,
      explanation: "Tag <link rel='stylesheet' href='styles.css'> diletakkan di dalam tag <head> untuk menghubungkan file CSS eksternal."
    }
  },
  "HTML Links": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Links</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Link atau hyperlink di HTML dibuat menggunakan tag anchor <code>&lt;a&gt;</code>. Elemen ini memungkinkan pengunjung untuk melompat dari satu halaman ke halaman lainnya di internet dengan sekali klik.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Atribut Penting Hyperlink:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>href</code>: Menampung alamat URL tujuan link (bisa berupa web eksternal, file lokal, email dengan <code>mailto:</code>, atau nomor telepon dengan <code>tel:</code>).</li>
  <li><code>target="_blank"</code>: Menginstruksikan browser agar memuat halaman tujuan di tab/jendela browser baru (sangat direkomendasikan saat menautkan ke website luar agar pengunjung tidak meninggalkan web Anda).</li>
</ul>`,
    code: `<h3>Praktik Membuat Tautan</h3>
<!-- Membuka link di tab baru -->
<p>Kunjungi website pencari terbesar di dunia:</p>
<a href="https://www.google.com" target="_blank">Kunjungi Google (Tab Baru)</a>

<br><br>
<p>Kirim email langsung kepada tim dukungan DevGrow:</p>
<a href="mailto:support@devgrow.academy">Kirim Email ke Support</a>`,
    quiz: {
      question: "Nilai atribut 'target' manakah yang digunakan jika Anda ingin membuat sebuah tautan terbuka di tab baru browser?",
      options: [
        "target='_self'",
        "target='_blank'",
        "target='_parent'",
        "target='_newtab'"
      ],
      correctIndex: 1,
      explanation: "Atribut target='_blank' memberitahu browser untuk membuka tautan tersebut pada halaman tab baru."
    }
  },
  "HTML Images": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Images</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Tag <code>&lt;img&gt;</code> digunakan untuk menampilkan gambar visual pada halaman web Anda. Tag ini tergolong sebagai **Void Element** (tidak membutuhkan tag penutup) dan membutuhkan beberapa atribut wajib.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Atribut Penting Gambar:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>src</code>: Menyimpan jalur/path lokasi file gambar berada (bisa berupa URL online atau file lokal di direktori folder Anda).</li>
  <li><code>alt</code> (Alternative Text): Menyediakan deskripsi tekstual gambar jika gambar gagal dimuat, serta membantu screen reader membacakan isi gambar bagi penyandang disabilitas (aksesibilitas).</li>
  <li><code>width</code> & <code>height</code>: Mengontrol ukuran lebar dan tinggi gambar dalam satuan piksel.</li>
</ul>`,
    code: `<h3>Menyisipkan Gambar Interaktif</h3>
<img 
  src="https://picsum.photos/id/1018/300/200" 
  alt="Pemandangan Danau Indah di Pegunungan" 
  width="300" 
  height="200" 
  style="border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);"
>`,
    quiz: {
      question: "Mengapa atribut 'alt' pada tag gambar <img> sangat krusial dan wajib dicantumkan oleh para developer profesional?",
      options: [
        "Untuk menentukan kecepatan memuat gambar otomatis.",
        "Membantu SEO mesin pencari mengindeks konten gambar, serta menyediakan teks alternatif jika koneksi internet lambat atau bagi pembaca tunanetra.",
        "Untuk memposisikan gambar otomatis berada di tengah halaman.",
        "Untuk merubah format gambar JPEG menjadi format PNG modern."
      ],
      correctIndex: 1,
      explanation: "Atribut 'alt' (Alternative Text) sangat krusial bagi aksesibilitas web (screen reader) dan optimasi indeks mesin pencari (SEO)."
    }
  },
  "HTML Tables": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Tables</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Tabel HTML digunakan untuk menyajikan data tabular terstruktur dalam baris dan kolom yang rapi. 
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Tag Utama Pembentuk Tabel:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>&lt;table&gt;</code>: Pembungkus terluar tabel.</li>
  <li><code>&lt;tr&gt;</code> (Table Row): Mendefinisikan baris tabel horizontal.</li>
  <li><code>&lt;th&gt;</code> (Table Head): Sel judul kolom (otomatis tercetak tebal dan rata tengah).</li>
  <li><code>&lt;td&gt;</code> (Table Data): Sel isi data normal pada kolom.</li>
</ul>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Colspan & Rowspan</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300">
  Atribut <code>colspan</code> digunakan untuk menggabungkan sel secara horizontal (beberapa kolom digabung), sedangkan <code>rowspan</code> digunakan untuk menggabungkan sel secara vertikal (beberapa baris digabung).
</p>`,
    code: `<table border="1" cellpadding="12" style="border-collapse: collapse; width: 100%; text-align: left; font-family: sans-serif; border: 1px solid #cbd5e1;">
  <tr style="background-color: #f1f5f9;">
    <th>Nama Murid</th>
    <th>Pelajaran</th>
    <th>Nilai Akhir</th>
  </tr>
  <tr>
    <td>Arif Rahmat</td>
    <td>HTML Dasar</td>
    <td>95</td>
  </tr>
  <tr>
    <td>Siti Aisyah</td>
    <td>CSS Styling</td>
    <td>90</td>
  </tr>
</table>`,
    quiz: {
      question: "Atribut manakah yang paling tepat digunakan apabila Anda ingin menggabungkan dua atau lebih sel kolom secara horizontal di dalam tabel HTML?",
      options: [
        "Atribut rowspan",
        "Atribut colspan",
        "Atribut cellpadding",
        "Atribut border-merge"
      ],
      correctIndex: 1,
      explanation: "Atribut colspan (column span) digunakan untuk memperluas sel melintasi beberapa kolom horizontal."
    }
  },
  "HTML Lists": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Lists</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  List (daftar) digunakan untuk menyusun poin-poin informasi secara teratur. HTML mendukung dua tipe daftar utama yang sangat sering dipakai di web:
</p>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>Unordered List (ul)</strong> - Daftar poin tanpa urutan angka (biasanya menggunakan bullet poin lingkaran).</li>
  <li><strong>Ordered List (ol)</strong> - Daftar berurutan yang disusun dengan nomor urut, alfabet, atau angka romawi.</li>
</ul>
<p class="mb-4 text-slate-600 dark:text-slate-300">
  Setiap item atau poin di dalam daftar wajib dibungkus oleh tag <code>&lt;li&gt;</code> (List Item).
</p>`,
    code: `<h3>Daftar Belanjaan (Unordered List)</h3>
<ul>
  <li>Buku Tulis Koding</li>
  <li>Pena Gel Hitam</li>
  <li>Laptop Ram 16GB</li>
</ul>

<hr>

<h3>Langkah Belajar Web (Ordered List)</h3>
<ol>
  <li>Kuasai HTML Dasar</li>
  <li>Pelajari CSS Styling</li>
  <li>Pelajari JavaScript Logic</li>
</ol>`,
    quiz: {
      question: "Tag manakah yang bertugas membungkus setiap item/poin di dalam tag pembungkus daftar <ul> maupun <ol>?",
      options: [
        "Tag <list>",
        "Tag <li>",
        "Tag <item>",
        "Tag <bullet>"
      ],
      correctIndex: 1,
      explanation: "Tag <li> (List Item) bertugas menampung setiap item daftar individu di dalam kontainer list."
    }
  },
  "HTML Block & Inline": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Block & Inline</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Memahami perilaku visual elemen sangatlah penting. Setiap elemen HTML memiliki nilai tampilan default di browser, terbagi atas dua kategori utama:
</p>
<ol class="list-decimal pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>Block-level Elements</strong>: Selalu memulai baris baru di browser dan secara otomatis memanjang horizontal memenuhi lebar maksimal layar yang tersedia (misal: <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code>, heading <code>&lt;h1&gt;-&lt;h6&gt;</code>, <code>&lt;section&gt;</code>).</li>
  <li><strong>Inline Elements</strong>: Tidak memulai baris baru dan hanya memakan lebar ruang sesuai dengan ukuran isi kontennya saja (misal: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;strong&gt;</code>, <code>&lt;img&gt;</code>).</li>
</ol>`,
    code: `<!-- Elemen Block-level memakan baris penuh -->
<div style="background-color: lightcoral; color: white; padding: 10px; margin-bottom: 10px;">
  Ini adalah elemen block-level (div).
</div>

<!-- Elemen Inline berdampingan secara horizontal -->
<span style="background-color: yellow; padding: 5px; border: 1px solid #ccc;">Inline span 1</span>
<span style="background-color: cyan; padding: 5px; border: 1px solid #ccc;">Inline span 2</span>`,
    quiz: {
      question: "Manakah di bawah ini pernyataan yang paling tepat menggambarkan karakteristik elemen Block-level?",
      options: [
        "Hanya memakan ruang selebar teks kontennya dan berdampingan horizontal.",
        "Selalu berawal di baris baru dan secara otomatis melar memenuhi lebar container penuh.",
        "Tidak bisa diatur margin, padding, maupun lebarnya.",
        "Elemen block-level murni hanya boleh diletakkan di dalam tag <span>."
      ],
      correctIndex: 1,
      explanation: "Elemen block-level memakan baris tersendiri dan melar memenuhi lebar kontainer induknya."
    }
  },
  "HTML Div": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Div</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Tag <code>&lt;div&gt;</code> singkatan dari "division" (bagian). Tag ini adalah **Block-level container** generik yang paling sering digunakan untuk mengelompokkan elemen-elemen HTML lain guna dirancang layoutnya menggunakan CSS atau dimanipulasi dengan JavaScript.
</p>
<p class="mb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
  Secara semantik, <code>&lt;div&gt;</code> tidak membawa makna atau deskripsi konten tertentu. Tag ini murni digunakan sebagai wadah pembungkus visual atau layout (misalnya membungkus judul, paragraf, dan tombol ke dalam satu kotak card).
</p>
<div class="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-8 dark:bg-indigo-950/20">
  <h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2 dark:text-indigo-300">💡 Praktik Terbaik Koding:</h4>
  <p class="text-indigo-800 text-sm leading-relaxed dark:text-indigo-200">
    Gunakanlah <code>&lt;div&gt;</code> murni untuk merancang struktur layout grid/flexbox, tetapi gunakan tag semantik (seperti <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>) jika area tersebut memiliki tujuan semantik yang jelas di halaman web Anda.
  </p>
</div>`,
    code: `<div style="border: 2px dashed #6366f1; padding: 20px; border-radius: 16px; text-align: center; max-width: 350px; margin: 20px auto; background-color: #faf5ff;">
  <h3 style="color: #6366f1; margin-top: 0;">Promo Bootcamp</h3>
  <p style="color: #4b5563; font-size: 14px;">Belajar HTML & CSS dari dasar hingga mahir dalam waktu 4 minggu interaktif.</p>
  <button style="background-color: #6366f1; color: white; border: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; cursor: pointer;">Daftar Sekarang</button>
</div>`,
    quiz: {
      question: "Apa fungsi utama dari penerapan tag pembungkus <div> dalam pembuatan halaman website?",
      options: [
        "Mendefinisikan paragraf teks artikel utama.",
        "Menampilkan file gambar JPEG secara otomatis tanpa atribut src.",
        "Sebagai wadah (container) generik untuk mengelompokkan elemen lain guna diberi gaya (style) atau diatur posisinya dengan CSS.",
        "Untuk memanggil script API eksternal."
      ],
      correctIndex: 2,
      explanation: "Tag <div> digunakan sebagai kontainer umum block-level untuk mengelompokkan elemen-elemen agar mudah dirias dan diatur posisinya."
    }
  },
  "HTML Classes": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Classes</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Atribut <code>class</code> digunakan untuk memberikan nama pengenal kelompok (klasifikasi) pada satu atau beberapa elemen HTML sekaligus. Nama kelas ini kemudian dipanggil di file CSS untuk diberi gaya desain, atau dipanggil di JavaScript untuk dimanipulasi perilakunya.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Sifat Penting Kelas:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li>Satu kelas dapat **digunakan berulang kali** oleh banyak elemen HTML di halaman yang sama.</li>
  <li>Satu elemen HTML diperbolehkan memiliki **lebih dari satu kelas** sekaligus (dipisahkan oleh spasi, misal: <code>class="alert alert-warning"</code>).</li>
</ul>`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight {
      background-color: yellow;
      color: red;
      font-weight: bold;
      padding: 2px 6px;
      border-radius: 4px;
    }
  </style>
</head>
<body>
  <p>Selamat belajar pemrograman di <span class="highlight">DevGrow Academy</span>.</p>
  <p>Hari ini kita fokus membahas topik <span class="highlight">HTML Classes</span> yang sangat fleksibel.</p>
</body>
</html>`,
    quiz: {
      question: "Bagaimanakah penulisan selector yang benar untuk merujuk ke elemen HTML ber-class 'highlight' di dalam kode CSS?",
      options: [
        "#highlight",
        ".highlight",
        "highlight",
        "*highlight"
      ],
      correctIndex: 1,
      explanation: "Di dalam CSS, penamaan selector kelas wajib diawali dengan simbol titik (.)."
    }
  },
  "HTML Id": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Id</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Atribut <code>id</code> digunakan untuk memberikan identitas unik pada satu elemen HTML tertentu. Berbeda dengan kelas, ada aturan ketat yang wajib dipatuhi:
</p>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li>Nama <code>id</code> **wajib bersifat unik** di dalam satu halaman web (tidak boleh ada dua elemen dengan nama id yang sama pada satu halaman).</li>
  <li>Satu elemen HTML hanya boleh memiliki maksimal satu nama id.</li>
</ul>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Kegunaan ID:</h3>
<p class="mb-4 text-slate-650 text-slate-600 dark:text-slate-300">
  ID sangat berguna sebagai target utama manipulasi DOM JavaScript (karena sangat spesifik), mendesain elemen unik di CSS, atau membuat link lompatan jangkar halaman (bookmark link dengan ` + "`" + `href="#nama-id"` + "`" + `).
</p>`,
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    #premium-header {
      background-color: #1e1b4b;
      color: #e0e7ff;
      text-align: center;
      padding: 25px;
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <h1 id="premium-header">Header Khusus Premium</h1>
  <p>Header di atas dirias secara khusus dan terjamin tidak ada duplikat ID serupa di halaman ini.</p>
</body>
</html>`,
    quiz: {
      question: "Manakah perbedaan utama yang paling benar antara atribut 'class' dan 'id' di HTML?",
      options: [
        "Class hanya boleh digunakan pada tag body, sedangkan id hanya pada head.",
        "Satu nama class wajib unik hanya untuk satu elemen, sedangkan id bebas dipakai massal.",
        "Atribut id wajib bersifat unik (hanya satu per halaman), sedangkan satu kelas bisa dipakai berulang kali oleh banyak elemen.",
        "ID khusus untuk properti CSS, sedangkan Class khusus untuk JavaScript."
      ],
      correctIndex: 2,
      explanation: "ID ibarat kartu identitas (unik, satu elemen saja), sedangkan Class ibarat seragam sekolah (bisa dipakai banyak elemen)."
    }
  },
  "HTML Semantics": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Semantics</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Elemen **semantik** adalah tag HTML yang secara jelas mendeskripsikan arti atau makna isi kontennya, baik bagi developer manusia maupun bagi mesin browser serta bot indeks mesin pencari (SEO).
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Perbandingan Semantik vs Non-Semantik:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><strong>Non-Semantik</strong>: Tag <code>&lt;div&gt;</code> dan <code>&lt;span&gt;</code> — tidak memberitahu kita apa isi konten di dalamnya.</li>
  <li><strong>Semantik</strong>: Tag <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code>, <code>&lt;footer&gt;</code> — menerangkan secara gamblang peran fungsional bagian tersebut.</li>
</ul>`,
    code: `<header style="background-color: #1e293b; color: white; padding: 20px; text-align: center;">
  <h1>My Coding Blog</h1>
  <nav>
    <a href="#home" style="color: white; margin-right: 15px;">Home</a>
    <a href="#about" style="color: white;">About</a>
  </nav>
</header>
<main style="padding: 20px;">
  <article style="border-bottom: 1px solid #ccc; padding-bottom: 20px;">
    <h2>Belajar Struktur Semantik</h2>
    <p>Penggunaan tag semantik mempermudah struktur halaman dibaca oleh Search Engine Optimizer Google.</p>
  </article>
</main>`,
    quiz: {
      question: "Tag semantik manakah yang paling tepat digunakan untuk mengelompokkan tautan navigasi utama di bagian atas website?",
      options: [
        "Tag pembatas <section>",
        "Tag navigasi <nav>",
        "Tag kepala halaman <header>",
        "Tag sampingan <aside>"
      ],
      correctIndex: 1,
      explanation: "Tag <nav> dirancang secara semantik khusus untuk mengelompokkan link-link menu navigasi utama website."
    }
  },
  "HTML Forms": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Forms</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Form HTML digunakan untuk mengumpulkan data input dari pengguna (seperti pendaftaran, login, pengiriman ulasan, dll). Data ini kemudian dikirimkan ke server backend untuk diproses.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Dua Atribut Penting Form:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">
  <li><code>action</code>: Menentukan alamat URL backend atau file tujuan ke mana data form akan dikirimkan saat tombol diklik.</li>
  <li><code>method</code>: Metode pengiriman data HTTP, umumnya terbagi atas <strong>GET</strong> (data dikirim kelihatan menempel di URL) dan <strong>POST</strong> (data dikirim tersembunyi aman di HTTP body request).</li>
</ul>`,
    code: `<form action="/submit-data" method="POST" style="border: 1px solid #ccc; padding: 20px; border-radius: 12px; max-width: 350px;">
  <h3 style="margin-top: 0;">Pendaftaran Akun</h3>
  <label for="username">Nama Pengguna:</label><br>
  <input type="text" id="username" name="username" style="width: 100%; padding: 8px; margin: 10px 0; border-radius: 6px; border: 1px solid #ccc;"><br>
  
  <button type="submit" style="background-color: #10b981; color: white; border: none; padding: 10px 15px; border-radius: 6px; cursor: pointer; width: 100%; font-weight: bold;">Kirim Data</button>
</form>`,
    quiz: {
      question: "Manakah metode HTTP (method) pengiriman data form yang paling aman dan disarankan untuk mengirim data sensitif seperti password akun?",
      options: [
        "Metode GET",
        "Metode POST",
        "Metode FETCH",
        "Metode HEADER"
      ],
      correctIndex: 1,
      explanation: "Metode POST mengirimkan data form secara tersembunyi di dalam message body HTTP, sehingga aman dan tidak bocor di alamat URL."
    }
  },
  "HTML Form Elements": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Form Elements</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Di dalam sebuah form, terdapat berbagai macam komponen elemen input interaktif yang dapat kita sediakan bagi pengguna untuk memasukkan data mereka:
</p>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>&lt;input&gt;</code>: Elemen paling serbaguna tergantung atribut tipenya.</li>
  <li><code>&lt;label&gt;</code>: Memberikan nama label teks bagi input terkait (sangat membantu aksesibilitas screen reader).</li>
  <li><code>&lt;select&gt;</code>: Membuat daftar pilihan drop-down.</li>
  <li><code>&lt;textarea&gt;</code>: Menyediakan area ketik teks multi-baris (multiline) untuk menulis ulasan/pesan panjang.</li>
</ul>`,
    code: `<label for="jurusan">Pilih Bidang Minat Anda:</label><br>
<select id="jurusan" name="jurusan" style="padding: 8px; width: 100%; margin-top: 5px; border-radius: 6px;">
  <option value="frontend">Frontend Web Development</option>
  <option value="backend">Backend Engineering</option>
  <option value="uiux">UI/UX Designer</option>
</select>
<br><br>
<label for="pesan">Pesan/Saran:</label><br>
<textarea id="pesan" name="pesan" rows="4" placeholder="Ketik pesan panjang Anda di sini..." style="width: 100%; padding: 8px; margin-top: 5px; border-radius: 6px;"></textarea>`,
    quiz: {
      question: "Tag manakah yang paling tepat digunakan jika Anda ingin meminta input paragraf tulisan yang sangat panjang dari pengguna?",
      options: [
        "Tag <input type='text'>",
        "Tag <textarea>",
        "Tag <input type='paragraph'>",
        "Tag <pre>"
      ],
      correctIndex: 1,
      explanation: "Tag <textarea> dirancang khusus untuk menampung ketikan teks multiline dalam kapasitas karakter yang besar."
    }
  },
  "HTML Input Types": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Input Types</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Elemen <code>&lt;input&gt;</code> adalah elemen form paling fungsional karena perilakunya dapat berubah secara drastis hanya dengan merubah nilai atribut <code>type</code>-nya.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Tipe Input yang Sangat Berguna:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>type="text"</code>: Input teks satu baris standar.</li>
  <li><code>type="password"</code>: Karakter ketikan otomatis tersembunyi (berubah menjadi bulatan hitam).</li>
  <li><code>type="radio"</code>: Pilihan lingkaran tunggal (hanya boleh pilih satu opsi saja dari kelompoknya).</li>
  <li><code>type="checkbox"</code>: Pilihan kotak ganda (boleh mencentang lebih dari satu opsi sekaligus).</li>
  <li><code>type="color"</code>, <code>type="date"</code>, <code>type="email"</code>: Input warna, kalender tanggal, dan format email otomatis.</li>
</ul>`,
    code: `<label>Ketikan Kata Sandi (Password):</label><br>
<input type="password" style="padding: 8px; margin-bottom: 15px; border-radius: 6px; border: 1px solid #ccc;"><br>

<label>Pilih Warna Tema:</label><br>
<input type="color" style="margin-bottom: 15px;"><br>

<label>Tanggal Lahir:</label><br>
<input type="date" style="padding: 8px; border-radius: 6px; border: 1px solid #ccc;">`,
    quiz: {
      question: "Tipe input manakah yang digunakan untuk membuat pilihan lingkaran di mana pengguna hanya diperbolehkan memilih salah satu opsi saja dari beberapa pilihan kelompok?",
      options: [
        "Tipe checkbox",
        "Tipe radio",
        "Tipe password",
        "Tipe select"
      ],
      correctIndex: 1,
      explanation: "Input type='radio' digunakan untuk sistem single-choice, sedangkan type='checkbox' digunakan untuk multi-choice."
    }
  },
  "HTML Input Attributes": {
    type: "code",
    theory: `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">HTML Input Attributes</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Atribut input digunakan untuk mengontrol perilaku, validasi, dan batasan ketat bagi input yang dimasukkan oleh pengguna di halaman web Anda.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Atribut Validasi Terpopuler:</h3>
<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">
  <li><code>placeholder</code>: Teks petunjuk abu-abu sebelum diisi (menghilang saat mulai mengetik).</li>
  <li><code>required</code>: Memaksa field input tidak boleh dibiarkan kosong saat form disubmit.</li>
  <li><code>disabled</code>: Menonaktifkan input agar tidak dapat diisi atau diklik.</li>
  <li><code>readonly</code>: Input hanya bisa dibaca dan tidak bisa dimodifikasi, namun nilainya tetap ikut terkirim ke server.</li>
</ul>`,
    code: `<form action="/proses-data" method="POST">
  <label for="surel">Alamat Email:</label><br>
  <!-- Input email wajib diisi dan memiliki teks petunjuk -->
  <input 
    type="email" 
    id="surel" 
    placeholder="contoh@devgrow.academy" 
    required 
    style="padding: 10px; width: 100%; border-radius: 6px; margin: 8px 0;"
  ><br>
  
  <button type="submit" style="background-color: #6366f1; color: white; border: none; padding: 10px 15px; border-radius: 6px; font-weight: bold; cursor: pointer;">Kirim</button>
</form>`,
    quiz: {
      question: "Atribut boolean manakah yang wajib ditambahkan pada tag input agar pengguna terpaksa mengisi field tersebut dan tidak bisa melewati form kosong saat disubmit?",
      options: [
        "Atribut placeholder",
        "Atribut disabled",
        "Atribut required",
        "Atribut readonly"
      ],
      correctIndex: 2,
      explanation: "Atribut required memaksa validasi otomatis di browser agar pengguna tidak mengosongkan kolom input tersebut saat submit form."
    }
  }
};

// Automate specific quiz generations for the remaining reference / example lessons
// so that all 83 HTML lessons in the database get high-quality content and individual quizzes!
function generateGenericQuiz(title: string) {
  return {
    question: `Elemen HTML manakah yang paling spesifik merepresentasikan topik '${title}' dalam pengembangan web modern?`,
    options: [
      `Elemen terstruktur khusus HTML sesuai standar panduan resmi W3C.`,
      `Pustaka framework Javascript eksternal yang di-load dinamis.`,
      `Variabel logic server-side yang disembunyikan dalam database.`,
      `Software compiler file HTML menjadi aplikasi desktop.`
    ],
    correctIndex: 0,
    explanation: `${title} adalah bagian terstandarisasi di spesifikasi HTML untuk menstruktur halaman web secara bersih, profesional, dan semantik.`
  };
}

// Helper to generate a tailored premium developer tip in Indonesian
function getCustomDeveloperTip(title: string): string {
  const t = title.toLowerCase();
  
  if (t.includes('introduction') || t.includes('intro') || t.includes('basic') || t.includes('element') || t.includes('attribute')) {
    return 'Aturan mendasar HTML: Selalu tutup tag HTML Anda dengan benar untuk menghindari rendering bug di browser. Gunakan huruf kecil (lowercase) untuk semua nama tag dan atribut sesuai rekomendasi standar W3C terbaru guna menjaga konsistensi kode.';
  }
  if (t.includes('heading') || t.includes('seo')) {
    return 'Aturan emas SEO: Gunakan hanya satu tag <code>&lt;h1&gt;</code> per halaman web sebagai judul utama. Gunakan tag heading lainnya (<code>&lt;h2&gt;</code> hingga <code>&lt;h6&gt;</code>) secara terstruktur dan hierarkis untuk mempermudah Google mengindeks artikel Anda.';
  }
  if (t.includes('paragraph') || t.includes('pre') || t.includes('whitespace') || t.includes('comment')) {
    return 'Mekanisme whitespace: Browser otomatis memangkas spasi ganda dan baris baru di dalam file HTML Anda. Gunakan tag <code>&lt;br&gt;</code> untuk patah baris manual, atau tag <code>&lt;pre&gt;</code> jika Anda ingin menampilkan teks persis seperti ketikan Anda (termasuk indentasi dan spasi ganda).';
  }
  if (t.includes('style') || t.includes('formatting')) {
    return 'Hindari penggunaan inline style (<code>style="..."</code>) secara berlebihan di proyek skala besar karena menyulitkan perawatan kode. Gunakanlah tag pemformatan fisik secara semantik (seperti <code>&lt;strong&gt;</code> alih-alih <code>&lt;b&gt;</code>) agar ramah SEO dan aksesibilitas screen reader.';
  }
  if (t.includes('css') || t.includes('link') || t.includes('anchor')) {
    return 'Keamanan Tautan: Saat membuat tautan eksternal menggunakan <code>target="_blank"</code>, selalu tambahkan atribut <code>rel="noopener noreferrer"</code>. Atribut ini melindungi website Anda dari ancaman eksploitasi keamanan phishing berbasis tab baru (tabnabbing).';
  }
  if (t.includes('image')) {
    return 'Aksesibilitas & Kinerja Gambar: Jangan pernah melewatkan atribut <code>alt</code> pada tag <code>&lt;img&gt;</code>. Jika gambar bersifat dekoratif murni, kosongkan saja (<code>alt=""</code>). Serta selalu tentukan <code>width</code> dan <code>height</code> eksplisit untuk mencegah pergeseran tata letak (Cumulative Layout Shift) saat gambar dimuat.';
  }
  if (t.includes('table')) {
    return 'Tabular data vs Layout: Jangan sekali-kali menggunakan tag <code>&lt;table&gt;</code> untuk membangun tata letak (layout) halaman web secara keseluruhan karena lambat dimuat dan merusak responsivitas. Gunakan CSS Grid atau Flexbox, dan batasi <code>&lt;table&gt;</code> hanya untuk menyajikan data tabel terstruktur.';
  }
  if (t.includes('list')) {
    return 'Gunakan tag <code>&lt;ul&gt;</code> untuk daftar tidak berurutan seperti menu navigasi, dan tag <code>&lt;ol&gt;</code> untuk daftar prosedural seperti langkah-langkah instalasi. Pastikan setiap anak langsung di dalam tag daftar adalah elemen <code>&lt;li&gt;</code> agar struktur HTML Anda tetap valid secara semantik.';
  }
  if (t.includes('block') || t.includes('inline') || t.includes('div') || t.includes('span')) {
    return 'Pola visual HTML: Ingatlah bahwa tag inline (seperti <code>&lt;span&gt;</code> atau <code>&lt;a&gt;</code>) secara default tidak dapat diatur dimensi lebar dan tingginya menggunakan CSS kecuali jika properti tampilannya diubah menjadi <code>display: inline-block</code> atau <code>display: block</code> terlebih dahulu.';
  }
  if (t.includes('class') || t.includes('id')) {
    return 'Spesifisitas CSS (Specificity): ID memiliki bobot spesifisitas yang jauh lebih tinggi daripada Class. Gunakan ID (<code>#</code>) secara sangat selektif untuk elemen tunggal yang sangat unik (seperti header utama atau form pencarian), dan prioritaskan Class (<code>.</code>) untuk penataan gaya yang dapat digunakan kembali.';
  }
  if (t.includes('semantic')) {
    return 'Modern SEO: Browser dan robot pencari modern sangat menyukai struktur semantik. Hindari pola "div-soup" (terlalu banyak <code>&lt;div&gt;</code> bersarang tanpa makna) dan gantilah dengan elemen semantik seperti <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, dan <code>&lt;section&gt;</code> untuk memperjelas arsitektur dokumen.';
  }
  if (t.includes('form') || t.includes('input') || t.includes('validation')) {
    return 'Keamanan Formulir: Untuk kolom input kredensial (seperti kata sandi, token, atau informasi kartu kredit), selalu gunakan metode pengiriman <code>POST</code> pada elemen form dan set atribut <code>type="password"</code> agar data terenkripsi aman di dalam body HTTP request.';
  }
  return 'Gunakan alat bantu linter HTML (seperti HTMLHint atau ekstensi ESLint di VS Code) selama proses pengembangan untuk menangkap kesalahan tag yang tidak ditutup atau atribut yang tidak valid secara otomatis sebelum Anda mengunggah kode ke server produksi.';
}

// Helper to generate specific line-by-line code explanations in Indonesian
function getCodeExplanation(title: string): string {
  const t = title.toLowerCase();
  
  if (t.includes('introduction') || t.includes('intro') || t.includes('basic') || t.includes('element') || t.includes('attribute')) {
    return `
      <li><strong>&lt;!DOCTYPE html&gt;</strong>: Deklarasi standar wajib di baris pertama untuk menginstruksikan browser bahwa dokumen ini ditulis menggunakan spesifikasi HTML5 modern.</li>
      <li><strong>&lt;html&gt; ... &lt;/html&gt;</strong>: Elemen pembungkus utama (root) dari seluruh dokumen HTML halaman web Anda.</li>
      <li><strong>&lt;body&gt; ... &lt;/body&gt;</strong>: Kontainer utama yang membungkus semua elemen visual (seperti judul, gambar, paragraf) yang akan tampil secara langsung di layar browser pengunjung.</li>
      <li><strong>Atribut src dan alt</strong>: Atribut src menunjuk lokasi berkas gambar, sedangkan alt menyediakan teks alternatif penjelas gambar untuk aksesibilitas dan SEO.</li>
    `;
  }
  if (t.includes('heading') || t.includes('seo')) {
    return `
      <li><strong>&lt;h1&gt; s/d &lt;h6&gt;</strong>: Tingkatan tag judul semantik, di mana &lt;h1&gt; mewakili judul paling utama/terbesar dan &lt;h6&gt; mewakili sub-judul paling kecil.</li>
      <li><strong>Tag h1 unik</strong>: Direkomendasikan hanya ada 1 buah tag &lt;h1&gt; di dalam satu file dokumen web untuk mempermudah perayapan indeks mesin pencari.</li>
    `;
  }
  if (t.includes('paragraph') || t.includes('pre') || t.includes('whitespace') || t.includes('comment')) {
    return `
      <li><strong>&lt;p&gt; ... &lt;/p&gt;</strong>: Tag pembentuk paragraf teks block-level yang otomatis menyisipkan jarak margin kosong sebelum dan sesudah paragraf.</li>
      <li><strong>&lt;br&gt;</strong>: Tag kosong (void element) tanpa tag penutup yang berfungsi memaksa jeda baris baru di dalam teks.</li>
      <li><strong>&lt;pre&gt; ... &lt;/pre&gt;</strong>: Tag teks preformat yang menyajikan teks persis sesuai dengan spasi ganda dan enter yang Anda ketik di editor menggunakan font monospaced bawaan.</li>
    `;
  }
  if (t.includes('style') || t.includes('formatting')) {
    return `
      <li><strong>Atribut style="..."</strong>: Atribut inline CSS untuk menyisipkan gaya visual langsung pada elemen tunggal (misalnya <code>color</code> untuk warna teks atau <code>font-size</code> untuk ukuran teks).</li>
      <li><strong>&lt;strong&gt; dan &lt;em&gt;</strong>: Tag pemformatan semantik yang memberikan cetak tebal (penting) dan cetak miring (penekanan) pada teks terpilih.</li>
      <li><strong>&lt;del&gt; dan &lt;mark&gt;</strong>: Tag del memberikan coretan horizontal tengah (revisi), sedangkan mark memberikan warna latar stabilo kuning pada kata kunci penting.</li>
    `;
  }
  if (t.includes('css') || t.includes('link') || t.includes('anchor')) {
    return `
      <li><strong>&lt;style&gt; ... &lt;/style&gt;</strong>: Tag penampung Internal CSS yang diletakkan di dalam kepala dokumen &lt;head&gt; untuk menyusun dekorasi satu halaman utuh.</li>
      <li><strong>&lt;link rel="stylesheet" href="..."&gt;</strong>: Tag penghubung berkas eksternal CSS (.css) untuk memisahkan kode kerangka dengan kode tata gaya visual.</li>
      <li><strong>&lt;a href="..." target="_blank"&gt;</strong>: Tag navigasi tautan, di mana atribut href menyimpan alamat web tujuan dan target="_blank" membukanya di tab baru.</li>
    `;
  }
  if (t.includes('image')) {
    return `
      <li><strong>&lt;img src="..." alt="..."&gt;</strong>: Tag kosong (void) untuk memuat gambar dari URL eksternal atau berkas lokal.</li>
      <li><strong>Atribut alt (Alternative Text)</strong>: Teks deskripsi gambar yang dibacakan screen reader bagi penyandang tunanetra atau jika koneksi internet melambat.</li>
      <li><strong>width / height / border-radius</strong>: Atribut pengatur dimensi piksel gambar dan styling sudut membulat agar gambar tampil proporsional dan rapi.</li>
    `;
  }
  if (t.includes('table')) {
    return `
      <li><strong>&lt;table&gt; dan &lt;tr&gt;</strong>: Table mendefinisikan wadah tabel secara keseluruhan, sedangkan tr menyusun baris horizontal tabel.</li>
      <li><strong>&lt;th&gt; dan &lt;td&gt;</strong>: th digunakan khusus untuk sel judul kolom (otomatis tebal dan rata tengah), sedangkan td berisi nilai sel data normal.</li>
      <li><strong>colspan / rowspan</strong>: Atribut untuk menggabungkan beberapa kolom sel secara horizontal atau beberapa baris sel secara vertikal.</li>
    `;
  }
  if (t.includes('list')) {
    return `
      <li><strong>&lt;ul&gt; dan &lt;ol&gt;</strong>: ul membungkus daftar poin tidak berurutan (bullets), sedangkan ol membungkus daftar poin berurutan (angka/huruf).</li>
      <li><strong>&lt;li&gt; (List Item)</strong>: Tag pembungkus wajib untuk setiap baris poin data di dalam kontainer daftar ul atau ol.</li>
    `;
  }
  if (t.includes('block') || t.includes('inline') || t.includes('div') || t.includes('span')) {
    return `
      <li><strong>&lt;div&gt;</strong>: Pembungkus block-level generik tanpa makna bawaan, biasa dipakai sebagai wadah layout untuk menata posisi kelompok elemen.</li>
      <li><strong>&lt;span&gt;</strong>: Kontainer inline-level generik untuk membungkus kata atau teks tertentu di dalam paragraf tanpa merusak alur baris yang ada.</li>
    `;
  }
  if (t.includes('class') || t.includes('id')) {
    return `
      <li><strong>Atribut class</strong>: Memberikan label kelompok pada elemen agar gaya desainnya dapat dipanggil berulang kali secara massal di CSS.</li>
      <li><strong>Atribut id</strong>: Memberikan label unik khusus bagi satu elemen tunggal untuk manipulasi spesifik di CSS maupun JavaScript.</li>
    `;
  }
  if (t.includes('semantic')) {
    return `
      <li><strong>&lt;header&gt; dan &lt;nav&gt;</strong>: Elemen semantik yang menandakan bagian kepala dokumen web dan bagian menu navigasi tautan utama.</li>
      <li><strong>&lt;main&gt; dan &lt;article&gt;</strong>: Menandai area konten utama halaman web serta membungkus artikel berita/tulisan yang dapat berdiri sendiri.</li>
    `;
  }
  if (t.includes('form') || t.includes('input') || t.includes('validation')) {
    return `
      <li><strong>&lt;form action="..." method="..."&gt;</strong>: Kontainer utama form, di mana action adalah URL pemroses data dan method adalah cara pengiriman HTTP (GET/POST).</li>
      <li><strong>&lt;input type="..." name="..."&gt;</strong>: Komponen input utama di mana perilakunya ditentukan oleh atribut type (seperti text, password, atau email).</li>
      <li><strong>&lt;textarea&gt; dan &lt;select&gt;</strong>: Textarea menyediakan bidang ketik pesan multiline, sedangkan select menyediakan pilihan menu dropdown.</li>
    `;
  }
  return `
    <li><strong>HTML5 Semantics</strong>: Menggunakan tag terstandarisasi untuk membuat kerangka halaman web yang bersih, ramah aksesibilitas, dan mudah dibaca oleh mesin pencari.</li>
    <li><strong>Client-Side Markup</strong>: Menentukan struktur dasar halaman web secara statis di komputer browser pengguna tanpa memerlukan kompilasi server logis yang berat.</li>
  `;
}

// Programmatic transformer to style all raw HTML into premium Tailwind formats
function makePremiumTheory(title: string, rawTheory: string): string {
  if (!rawTheory) return '';

  let enriched = rawTheory.trim();

  // 1. Transform <h2> to premium Tailwind headings
  enriched = enriched.replace(/<h2>(.*?)<\/h2>/g, (_, text) => {
    return `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white flex items-center gap-2 border-b pb-2 border-slate-200/60 dark:border-slate-800/60">${text}</h2>`;
  });

  // 2. Transform <h3> to premium Tailwind headings
  enriched = enriched.replace(/<h3>(.*?)<\/h3>/g, (_, text) => {
    return `<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200 flex items-center gap-2">${text}</h3>`;
  });

  // 3. Transform paragraphs to beautifully spaced body texts
  enriched = enriched.replace(/<p>(.*?)<\/p>/g, (_, text) => {
    if (text.includes('class=')) return `<p>${text}</p>`; // skip if already has class
    return `<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">${text}</p>`;
  });

  // 4. Style standard lists
  enriched = enriched.replace(/<ul>/g, `<ul class="list-disc pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-2">`);
  enriched = enriched.replace(/<ol>/g, `<ol class="list-decimal pl-6 mb-6 text-slate-600 dark:text-slate-300 space-y-3">`);

  // 5. Style inline code elements
  enriched = enriched.replace(/<code>(.*?)<\/code>/g, (_, codeText) => {
    if (codeText.includes('class=')) return `<code>${codeText}</code>`;
    return `<code class="bg-slate-100 dark:bg-slate-900/50 text-indigo-600 dark:text-indigo-400 px-1.5 py-0.5 rounded font-mono text-sm border border-slate-200/50 dark:border-slate-800/50">${codeText}</code>`;
  });

  // 6. Style alert/info boxes in the theory
  enriched = enriched.replace(/<div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">/g, 
    `<div class="bg-amber-50/70 dark:bg-amber-950/10 border-l-4 border-amber-500 p-5 rounded-r-2xl mb-6 shadow-sm">`);
  enriched = enriched.replace(/<div class="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">/g, 
    `<div class="bg-blue-50/70 dark:bg-blue-950/10 border-l-4 border-blue-500 p-5 rounded-r-2xl mb-6 shadow-sm">`);
  enriched = enriched.replace(/<div class="bg-indigo-50 border border-indigo-500 rounded-xl p-5 mb-4">/g, 
    `<div class="bg-indigo-50/70 dark:bg-indigo-950/10 border-l-4 border-indigo-500 p-5 rounded-r-2xl mb-6 shadow-sm">`);
  enriched = enriched.replace(/<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">/g, 
    `<div class="bg-slate-100 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-4 font-mono text-sm mb-6 text-slate-800 dark:text-slate-200 shadow-inner">`);
  enriched = enriched.replace(/<div class="bg-slate-100 rounded-xl p-5 mb-6 font-mono text-sm">/g, 
    `<div class="bg-slate-100 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 rounded-xl p-5 mb-6 font-mono text-sm text-slate-800 dark:text-slate-200 shadow-inner">`);

  // 7. Inject our specific bedah kegunaan kode box
  const explanation = getCodeExplanation(title);
  enriched += `
<div class="bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 p-5 rounded-2xl mb-6 shadow-sm">
  <h4 class="text-slate-800 dark:text-slate-200 font-bold mb-3 flex items-center gap-2 text-base">
    <span class="p-1 bg-slate-200 dark:bg-slate-800 rounded text-sm">💻</span> Bedah Kegunaan Kode:
  </h4>
  <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
    ${explanation}
  </ul>
</div>`;

  // 8. Inject our exclusive premium developer tips box
  const tips = getCustomDeveloperTip(title);
  enriched += `
<div class="bg-indigo-50/60 dark:bg-indigo-950/20 border-l-4 border-indigo-500 p-5 rounded-r-2xl mt-8 mb-4 shadow-sm">
  <h4 class="text-indigo-950 dark:text-indigo-300 font-bold mb-2 flex items-center gap-2 text-base">
    <span class="p-1 bg-indigo-100 dark:bg-indigo-900/50 rounded text-sm">💡</span> Info & Tip Developer:
  </h4>
  <p class="text-indigo-900 dark:text-indigo-200 text-sm leading-relaxed">
    ${tips}
  </p>
</div>`;

  return enriched;
}

async function main() {
  console.log('🏁 Starting HTML lessons content enrichment and synchronization...');

  // 1. Fetch DB Lessons for the specific HTML module
  const dbLessons = await prisma.lesson.findMany({
    where: { moduleId: '67adde6d-81a6-4470-b88d-506b733f87ee' }
  });

  console.log(`Found ${dbLessons.length} lessons in PostgreSQL to enrich.`);

  let updatedCount = 0;

  for (const l of dbLessons) {
    const title = l.title;
    const premium = premiumLessons[title];

    let finalType: 'code' | 'video' | 'reading' = 'code';
    let finalTheory = '';
    let finalCode = '';
    let finalQuiz: any = null;
    let finalVideoUrl = l.videoUrl || '';

    // Assign custom content if it exists in premium list
    if (premium) {
      finalType = premium.type;
      finalTheory = premium.theory;
      finalCode = premium.code;
      finalQuiz = premium.quiz;
      if (premium.videoUrl) finalVideoUrl = premium.videoUrl;
    } else {
      // Fallback: Read current content JSON if possible to keep existing text, but correct it
      let parsedContent: any = {};
      try {
        parsedContent = JSON.parse(l.content || '{}');
      } catch {
        parsedContent = { theory: l.content || '', code: '' };
      }

      finalTheory = parsedContent.theory || `<h2 class="text-3xl font-extrabold mb-6 text-slate-800 dark:text-white">${title}</h2>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Materi pembelajaran mendalam mengenai <strong>${title}</strong>. Pelajari kegunaan, sintaks, aturan penulisan standar, dan contoh penerapannya di industri web development profesional.
</p>
<h3 class="text-xl font-bold mt-8 mb-4 text-slate-700 dark:text-slate-200">Konsep Utama ${title}</h3>
<p class="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed">
  Memahami ${title} membantu Anda melengkapi struktur halaman web yang sedang dibangun agar sesuai standar kode yang bersih, efisien, dan ramah aksesibilitas.
</p>`;

      finalCode = parsedContent.code || `<!-- Latihan Praktik ${title} -->
<h1>Materi ${title}</h1>
<p>Silakan edit dan kembangkan kode ini di panel kanan editor DevGrow.</p>`;

      finalQuiz = parsedContent.quiz || generateGenericQuiz(title);

      // Determine correct types for remaining topics
      const lowerTitle = title.toLowerCase();
      if (lowerTitle.includes('video') || lowerTitle.includes('audio') || lowerTitle.includes('youtube') || lowerTitle.includes('media')) {
        finalType = 'video';
        // Add fake educational youtube embed if empty
        if (!finalVideoUrl) finalVideoUrl = 'https://www.youtube.com/watch?v=kUMe1FH4INY';
      } else if (lowerTitle.includes('list') || lowerTitle.includes('support') || lowerTitle.includes('guide') || lowerTitle.includes('reference') || lowerTitle.includes('summary') || lowerTitle.includes('shortcuts')) {
        finalType = 'reading';
      } else {
        finalType = 'code';
      }
    }

    // Prepare JSON content string
    const contentObj = {
      theory: makePremiumTheory(title, finalTheory),
      code: finalCode,
      quiz: finalQuiz
    };

    // Update inside the PostgreSQL database using Prisma
    await prisma.lesson.update({
      where: { id: l.id },
      data: {
        type: finalType,
        content: JSON.stringify(contentObj),
        videoUrl: finalVideoUrl || null
      }
    });

    updatedCount++;
  }

  console.log(`🎉 Success! Successfully updated and enriched ${updatedCount} lessons in the database.`);
}

main()
  .catch((e) => {
    console.error('❌ Synchronization failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    pool.end();
  });
