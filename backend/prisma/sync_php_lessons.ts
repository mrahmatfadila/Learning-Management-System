import { PrismaClient } from '@prisma/client';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import * as dotenv from 'dotenv';
dotenv.config();

// Load static PHP syllabus and lessons
import { phpCourseModules, phpLessonsData } from '../../frontend/src/data/phpCourseData';

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Dil1212@localhost:5432/lms_edutech_db';
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter } as any);

// Helper to generate a tailored premium developer tip in Indonesian
function getCustomDeveloperTip(title: string): string {
  const t = title.toLowerCase();
  
  if (t.includes('install') || t.includes('server')) {
    return 'Dalam lingkungan lokal (development), paket seperti XAMPP atau Laragon sangat memudahkan kita menyalakan server web Apache/Nginx, interpreter PHP, dan database MySQL secara instan. Di lingkungan produksi (production), pastikan versi PHP di server web Anda selalu diperbarui untuk menutup celah keamanan (vulnerabilities) dan menikmati peningkatan kecepatan eksekusi.';
  }
  if (t.includes('syntax') || t.includes('comment')) {
    return 'Aturan mendasar PHP: kode PHP murni tidak wajib menggunakan tag penutup <code>?&gt;</code> di akhir file apabila file tersebut hanya berisi kode PHP. Ini mencegah karakter spasi kosong (whitespace) yang tidak sengaja tertulis ikut terkirim ke browser, yang dapat memicu error fatal <em>"Headers already sent"</em>.';
  }
  if (t.includes('variable') || t.includes('echo') || t.includes('print')) {
    return 'Kiat jitu penulisan teks: <code>echo</code> sedikit lebih cepat dibandingkan <code>print</code> karena ia tidak mengembalikan nilai kembalian (return value) dan dapat menerima beberapa argumen string sekaligus. Serta ingatlah untuk selalu menuliskan variabel dalam tanda kutip ganda (<code>"Hello $name"</code>) agar diinterpretasikan langsung nilainya oleh PHP.';
  }
  if (t.includes('data-type') || t.includes('casting')) {
    return 'PHP adalah bahasa pemrograman bertipe dinamis (loosely typed language), di mana variabel tidak dideklarasikan tipenya secara kaku. Namun, untuk menjaga integritas data matematis dan integritas input database, gunakan operator casting secara eksplisit seperti <code>(int)$input</code> atau <code>(bool)$input</code>.';
  }
  if (t.includes('string') || t.includes('regex')) {
    return 'Untuk manipulasi string berkinerja tinggi, pilihlah fungsi bawaan string dasar seperti <code>str_replace()</code> atau <code>strpos()</code> jika polanya sederhana. Hanya gunakan ekspresi reguler (<code>preg_match</code> atau <code>preg_replace</code>) apabila Anda membutuhkan pencocokan pola tingkat tinggi yang kompleks, karena pemrosesan RegEx memakan beban CPU lebih besar.';
  }
  if (t.includes('number') || t.includes('math') || t.includes('constant')) {
    return 'Konstanta yang dideklarasikan dengan fungsi <code>define()</code> bersifat global secara otomatis dan dapat diakses dari mana saja. Gunakanlah konstanta untuk menyimpan nilai-nilai konfigurasi aplikasi yang tidak boleh berubah selama siklus hidup eksekusi program (seperti URL dasar, detail API, atau kredensial database).';
  }
  if (t.includes('if') || t.includes('switch') || t.includes('match')) {
    return 'Untuk percabangan modern di PHP 8+, gunakanlah ekspresi <code>match()</code> alih-alih <code>switch()</code>. Ekspresi <code>match</code> menggunakan perbandingan identitas ketat (<code>===</code>), tidak memiliki perilaku <em>fall-through</em> (sehingga tidak memerlukan kata kunci break), dan mengembalikan nilai secara langsung ke variabel.';
  }
  if (t.includes('loop')) {
    return 'Saat mengiterasi elemen array asosiatif atau objek, gunakan struktur <code>foreach ($array as $key =&gt; $value)</code> untuk kemudahan akses kunci dan nilai secara bersamaan. Dan pastikan kondisi berhenti (stop condition) pada loop <code>while</code> atau <code>for</code> selalu terpenuhi agar tidak memicu <em>infinite loop</em> yang dapat melumpuhkan server Anda.';
  }
  if (t.includes('function') || t.includes('callback')) {
    return 'PHP 7+ mendukung fitur <strong>Type Hinting</strong> dan <strong>Return Type Declarations</strong> (deklarasi tipe data parameter dan nilai kembalian). Terapkan ini pada setiap fungsi Anda, misalnya <code>function jumlahkan(int $a, int $b): int</code>, untuk mencegah tipe data yang salah masuk ke dalam fungsi Anda dan mempermudah debugging.';
  }
  if (t.includes('array')) {
    return 'Array di PHP adalah struktur data yang sangat fleksibel karena menggabungkan konsep indexed list dan hash map (associative array). Manfaatkan fungsi array bawaan seperti <code>array_map()</code>, <code>array_filter()</code>, dan <code>array_reduce()</code> untuk manipulasi data array yang bersih dan efisien tanpa banyak menulis loop bersarang.';
  }
  if (t.includes('superglobal')) {
    return 'Variabel superglobal (seperti <code>$_GET</code>, <code>$_POST</code>, <code>$_SESSION</code>, <code>$_COOKIE</code>, <code>$_SERVER</code>) selalu tersedia di seluruh lingkup cakupan file dan fungsi tanpa kata kunci global. Variabel ini menyimpan data interaksi penting, namun wajib divalidasi dan disanitasi sebelum digunakan guna menghindari ancaman eksploitasi keamanan.';
  }
  if (t.includes('form') || t.includes('validate') || t.includes('required')) {
    return 'Aturan utama keamanan web: **Jangan pernah mempercayai input dari pengguna**. Gunakan fungsi <code>htmlspecialchars()</code> pada setiap data input yang akan ditampilkan kembali di layar untuk mensterilkan tag HTML dan JavaScript, guna mencegah serangan eksploitasi **Cross-Site Scripting (XSS)**.';
  }
  if (t.includes('cookie') || t.includes('session')) {
    return 'Perbedaan vital: **Cookies** disimpan di browser klien dan rentan dimanipulasi oleh pengguna, sedangkan **Sessions** disimpan secara aman di server web dengan pengenal sesi (Session ID) unik di browser. Untuk data sensitif (seperti status login, keranjang belanja, atau saldo), selalu gunakan sesi di server.';
  }
  if (t.includes('oop') || t.includes('class') || t.includes('construct') || t.includes('destruct') || t.includes('inheritance') || t.includes('interface') || t.includes('trait') || t.includes('namespace')) {
    return 'Konsep pemrograman berorientasi objek (OOP) di PHP membantu memecah aplikasi besar menjadi kode yang modular dan terstruktur. Gunakan <code>namespace</code> di awal file kelas Anda untuk mencegah konflik nama kelas serupa yang ditulis oleh library pihak ketiga (seperti saat mengunduh package via Composer).';
  }
  if (t.includes('mysql') || t.includes('connect') || t.includes('prepared') || t.includes('db')) {
    return 'Untuk interaksi database modern, hindari fungsi mysql_* lama yang sudah dihapus di PHP 7+. Pilihlah **PDO (PHP Data Objects)** atau **MySQLi** dengan teknik **Prepared Statements** (parameter bind). Ini adalah pelindung mutlak website Anda dari eksploitasi serangan **SQL Injection** yang merusak.';
  }
  if (t.includes('file') || t.includes('upload') || t.includes('read') || t.includes('write')) {
    return 'Ketika menangani pengunggahan berkas (file upload), selalu lakukan sanitasi ketat pada nama file menggunakan fungsi <code>basename()</code>, batasi ukuran maksimum berkas via konfigurasi <code>php.ini</code> atau logika manual, dan validasi ekstensi tipe MIME berkas untuk memblokir berkas skrip berbahaya (seperti .php) yang diunggah ke server Anda.';
  }
  if (t.includes('ajax')) {
    return 'Integrasi PHP dengan AJAX memungkinkan pertukaran data latar belakang secara asinkron tanpa mereload halaman web sepenuhnya. PHP bertindak sebagai penyaji data (data provider) yang biasanya mengembalikan data terstruktur dalam format JSON via fungsi <code>json_encode()</code> untuk diolah oleh JavaScript di sisi klien.';
  }
  if (t.includes('xml') || t.includes('simplexml')) {
    return 'SimpleXML adalah parser bawaan PHP yang sangat ramah pengembang untuk mengolah dokumen terstruktur XML. Gunakan <code>simplexml_load_string()</code> atau <code>simplexml_load_file()</code> untuk membaca node XML menjadi objek PHP yang dapat diakses langsung menggunakan operator panah (<code>-&gt;</code>).';
  }
  if (t.includes('exception') || t.includes('error')) {
    return 'Gunakan blok penanganan error <code>try { ... } catch (Exception $e) { ... }</code> untuk menangani kemungkinan kesalahan runtime secara elegan tanpa harus menghentikan atau mematikan seluruh proses pemuatan halaman web. Catatlah pesan kesalahan tersebut di file log server secara privat menggunakan fungsi <code>error_log()</code>.';
  }
  return 'Gunakan fungsi debug bawaan <code>var_dump($variabel)</code> atau <code>print_r($variabel)</code> untuk memeriksa isi dan tipe data variabel secara mendalam selama proses pengembangan kode program di lingkungan lokal Anda.';
}

// Helper to generate specific line-by-line code explanations in Indonesian
function getCodeExplanation(title: string): string {
  const t = title.toLowerCase();
  
  if (t.includes('install') || t.includes('server')) {
    return `
      <li><strong>&lt;?php phpinfo(); ?&gt;</strong>: Memanggil fungsi bawaan PHP yang mengembalikan informasi lengkap mengenai konfigurasi lingkungan server, versi PHP aktif, modul terpasang, dan variabel server.</li>
      <li><strong>XAMPP / Laragon</strong>: Bertindak sebagai emulator server lokal (localhost) untuk menguji dan mengeksekusi kode program di komputer pengembang sebelum diunggah ke internet.</li>
    `;
  }
  if (t.includes('syntax') || t.includes('comment')) {
    return `
      <li><strong>&lt;?php ... ?&gt;</strong>: Tag pembuka dan penutup wajib yang menandai bahwa seluruh baris kode di dalamnya dieksekusi di sisi server.</li>
      <li><strong>Titik Koma (;)</strong>: Berperan penting sebagai penanda batas akhir dari sebuah baris instruksi koding di PHP. Tanpa ini, compiler akan mengalami error.</li>
      <li><strong>echo</strong>: Perintah keluaran yang bertugas mengirimkan teks atau tag HTML langsung ke layar browser pengunjung.</li>
    `;
  }
  if (t.includes('variable') || t.includes('echo') || t.includes('print')) {
    return `
      <li><strong>Simbol Dolar ($)</strong>: Penanda wajib yang digunakan di awal setiap deklarasi variabel di PHP.</li>
      <li><strong>Kutip Ganda (")</strong>: Mengaktifkan fitur interpolasi variabel, di mana PHP akan menerjemahkan variabel di dalam teks menjadi nilainya secara dinamis.</li>
      <li><strong>Operator Titik (.)</strong>: Digunakan untuk merangkai beberapa string atau variabel (concatenation) menjadi satu string keluaran utuh.</li>
    `;
  }
  if (t.includes('data-type') || t.includes('casting')) {
    return `
      <li><strong>var_dump()</strong>: Fungsi bawaan PHP yang sangat vital untuk memeriksa struktur, tipe data, dan nilai aktual dari suatu variabel secara mendalam.</li>
      <li><strong>(int) / (float)</strong>: Operator pemaksa tipe data (casting) untuk merubah format variabel (misalnya teks "10" dikonversi paksa menjadi angka 10 murni).</li>
    `;
  }
  if (t.includes('string') || t.includes('regex')) {
    return `
      <li><strong>preg_match()</strong>: Mencari kecocokan pola RegEx di dalam string. Mengembalikan angka 1 jika cocok, dan 0 jika tidak cocok.</li>
      <li><strong>preg_replace()</strong>: Menelusuri kecocokan pola RegEx pada sebuah paragraf teks lalu mengganti bagian tersebut secara instan dengan string pengganti.</li>
    `;
  }
  if (t.includes('number') || t.includes('math') || t.includes('constant')) {
    return `
      <li><strong>define()</strong>: Berfungsi membuat konstanta global. Nilai konstanta mutlak tidak dapat dirubah setelah dideklarasikan di memori server.</li>
      <li><strong>sqrt() / ceil() / floor()</strong>: Fungsi-fungsi matematika bawaan PHP untuk memudahkan kalkulasi numerik desimal dan pembulatan angka secara akurat.</li>
    `;
  }
  if (t.includes('if') || t.includes('else') || t.includes('switch') || t.includes('match')) {
    return `
      <li><strong>if ($kondisi)</strong>: Mengevaluasi ekspresi pembanding. Jika bernilai TRUE, maka baris perintah di dalam tanda kurung kurawal akan dijalankan.</li>
      <li><strong>match()</strong>: Ekspresi pencocokan modern di PHP 8+ yang menguji nilai dengan tingkat perbandingan ketat (===) dan mengembalikan hasilnya secara instan.</li>
      <li><strong>break</strong>: Kata kunci wajib di switch case untuk menghentikan alur pencarian setelah menemukan case yang cocok agar tidak meluber ke bawah.</li>
    `;
  }
  if (t.includes('loop')) {
    return `
      <li><strong>for ($i = 0; $i &lt; N; $i++)</strong>: Loop terkontrol menggunakan variabel counter untuk mengulang eksekusi sebanyak angka spesifik yang didefinisikan.</li>
      <li><strong>foreach ($array as $key =&gt; $val)</strong>: Loop terbaik khusus untuk array asosiatif/objek guna membaca index (key) dan isinya (value) secara dinamis.</li>
    `;
  }
  if (t.includes('function') || t.includes('callback')) {
    return `
      <li><strong>function namaFungsi()</strong>: Deklarasi blok fungsi modular agar kode program dapat dipanggil berulang kali tanpa harus menulis ulang.</li>
      <li><strong>return</strong>: Menghentikan eksekusi di dalam fungsi dan mengirimkan nilai hasil olah logika kembali ke baris pemanggil utama.</li>
    `;
  }
  if (t.includes('array')) {
    return `
      <li><strong>Associative Index (=>)</strong>: Menghubungkan penanda kunci (key string) dengan nilainya, membebaskan kita membuat indeks nama alih-alih angka.</li>
      <li><strong>array() / []</strong>: Membuat wadah data terstruktur yang dapat menampung beragam tipe data berbeda di dalam satu variabel tunggal.</li>
    `;
  }
  if (t.includes('superglobal')) {
    return `
      <li><strong>$_SERVER</strong>: Array superglobal yang menyimpan informasi lingkungan web server (seperti IP pengunjung, header HTTP, domain, dan file path).</li>
      <li><strong>$_GET / $_POST</strong>: Menyimpan parameter kiriman formulir web. GET mengirim lewat URL, sedangkan POST mengirim lewat body request secara tertutup.</li>
    `;
  }
  if (t.includes('form') || t.includes('validate') || t.includes('required')) {
    return `
      <li><strong>htmlspecialchars()</strong>: Mengonversi karakter khusus HTML (seperti &lt; dan &gt;) menjadi entitas aman, guna menangkal ancaman celah XSS.</li>
      <li><strong>$_SERVER["REQUEST_METHOD"]</strong>: Mendeteksi apakah metode pengiriman formulir menggunakan metode POST atau GET untuk memfilter akses ilegal.</li>
    `;
  }
  if (t.includes('cookie') || t.includes('session')) {
    return `
      <li><strong>session_start()</strong>: Wajib dipanggil di baris kode teratas sebelum teks HTML dikirim, guna menginisiasi penyimpanan sesi unik di server.</li>
      <li><strong>$_SESSION</strong>: Variabel array penampung data sesi pengguna. Data tersimpan di server secara aman dan hanya ID sesi acak yang dikirim ke browser.</li>
    `;
  }
  if (t.includes('oop') || t.includes('class') || t.includes('construct') || t.includes('destruct') || t.includes('inheritance') || t.includes('interface') || t.includes('trait') || t.includes('namespace')) {
    return `
      <li><strong>class</strong>: Cetak biru (blueprint) terstruktur yang membungkus properti (variabel) dan metode (fungsi) menjadi satu kesatuan objek kustom.</li>
      <li><strong>__construct()</strong>: Metode constructor khusus yang otomatis dieksekusi pertama kali saat objek baru diciptakan menggunakan kata kunci <code>new</code>.</li>
      <li><strong>$this</strong>: Referensi penunjuk khusus untuk mengakses properti dan metode di dalam instansi objek kelas bersangkutan.</li>
    `;
  }
  if (t.includes('mysql') || t.includes('connect') || t.includes('prepared') || t.includes('db')) {
    return `
      <li><strong>new PDO()</strong>: Menginisiasi koneksi aman ke database menggunakan standar PHP Data Objects yang portabel untuk berbagai jenis database SQL.</li>
      <li><strong>prepare()</strong>: Menyiapkan kerangka query SQL (Prepared Statement) di server database tanpa menyuntikkan data mentah secara langsung.</li>
      <li><strong>bindParam() / execute()</strong>: Mengikat data parameter secara terpisah dari query, bertindak sebagai pelindung mutlak dari eksploitasi SQL Injection.</li>
    `;
  }
  if (t.includes('file') || t.includes('upload') || t.includes('read') || t.includes('write')) {
    return `
      <li><strong>$_FILES</strong>: Array superglobal penampung data file unggahan (seperti nama asli file, tipe MIME, ukuran file, dan lokasi penyimpanan sementara).</li>
      <li><strong>move_uploaded_file()</strong>: Memindahkan berkas dari direktori penyimpanan sementara server ke folder tujuan permanen secara aman dan sah.</li>
    `;
  }
  if (t.includes('ajax')) {
    return `
      <li><strong>json_encode()</strong>: Fungsi vital untuk mengubah array/objek PHP menjadi format string JSON agar mudah dikonsumsi oleh JavaScript asinkron.</li>
      <li><strong>asynchronous communication</strong>: Memungkinkan browser mengirim data ke server PHP di latar belakang dan menerima data balik tanpa reload halaman.</li>
    `;
  }
  if (t.includes('xml') || t.includes('simplexml')) {
    return `
      <li><strong>simplexml_load_string()</strong>: Mengubah dokumen mentah terstruktur XML menjadi objek PHP yang dapat dibaca isinya menggunakan operator panah.</li>
      <li><strong>DOMDocument</strong>: Representasi objek pohon dokumen untuk memanipulasi elemen XML secara dinamis menggunakan standar W3C.</li>
    `;
  }
  if (t.includes('exception') || t.includes('error')) {
    return `
      <li><strong>try { ... } catch</strong>: Blok penguji error. Jika baris kode di dalam 'try' mengalami kegagalan runtime, eksekusi akan dilempar ke penanganan 'catch' tanpa mematikan server.</li>
      <li><strong>Exception $e</strong>: Menangkap pesan kesalahan, baris error, dan file sumber kesalahan untuk pencatatan log keamanan internal.</li>
    `;
  }
  return `
    <li><strong>Server-Side Logic</strong>: Mengeksekusi instruksi komputasi secara privat di server web, memastikan keamanan kode logika dan rahasia database.</li>
    <li><strong>HTML Output</strong>: Hasil komputasi kode PHP diterjemahkan menjadi halaman HTML statis biasa sebelum dikirimkan ke layar browser pengunjung.</li>
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
<div class="bg-purple-50/60 dark:bg-purple-950/20 border-l-4 border-purple-500 p-5 rounded-r-2xl mt-8 mb-4 shadow-sm">
  <h4 class="text-purple-950 dark:text-purple-300 font-bold mb-2 flex items-center gap-2 text-base">
    <span class="p-1 bg-purple-100 dark:bg-purple-900/50 rounded text-sm">💡</span> Info & Tip Developer:
  </h4>
  <p class="text-purple-900 dark:text-purple-200 text-sm leading-relaxed">
    ${tips}
  </p>
</div>`;

  return enriched;
}

async function main() {
  console.log('🏁 Starting PHP lessons content enrichment, sorting, and synchronization...');

  const moduleId = 'a7af45cb-3887-495b-9d7a-311766955334'; // PHP: Server-Side Programming

  // 1. Fetch DB chapters and lessons for PHP module
  const dbChapters = await prisma.chapter.findMany({ where: { moduleId } });
  const dbLessons = await prisma.lesson.findMany({ where: { moduleId } });

  console.log(`Database has ${dbChapters.length} chapters and ${dbLessons.length} lessons for PHP module.`);

  // Create title-to-static map from phpLessonsData
  const staticMap = new Map();
  for (const [key, data] of Object.entries(phpLessonsData)) {
    staticMap.set(data.title.toLowerCase().trim(), { key, data });
  }

  let globalLessonOrder = 0;

  // 2. Loop through official chapters in order
  for (let chapterIndex = 0; chapterIndex < phpCourseModules.length; chapterIndex++) {
    const officialChapter = phpCourseModules[chapterIndex];
    if (!officialChapter) continue;

    const chapterTitle = officialChapter.title; // e.g., "PHP Tutorial"

    // Find or create chapter in database
    const dbChapter = dbChapters.find(c => c.title.toLowerCase().trim() === chapterTitle.toLowerCase().trim());
    let dbChapterId: string | null = dbChapter?.id || null;

    if (dbChapter) {
      console.log(`Updating Chapter [${chapterIndex}] "${chapterTitle}"`);
      await prisma.chapter.update({
        where: { id: dbChapter.id },
        data: { order: chapterIndex }
      });
    } else {
      console.log(`⚠️ Chapter "${chapterTitle}" not found in database! Creating it...`);
      const newChapter = await prisma.chapter.create({
        data: {
          moduleId,
          title: chapterTitle,
          order: chapterIndex
        }
      });
      dbChapterId = newChapter.id;
    }

    // 3. Loop through lessons in this chapter in official order
    const officialLessons = officialChapter.lessons;
    if (officialLessons) {
      for (let lessonIndex = 0; lessonIndex < officialLessons.length; lessonIndex++) {
        const officialLesson = officialLessons[lessonIndex];
        if (!officialLesson) continue;

        const lessonTitle = officialLesson.title;
        const matchedDbLessons = dbLessons.filter(l => l.title.toLowerCase().trim() === lessonTitle.toLowerCase().trim());

        // Find the complete premium static content
        const staticMatch = staticMap.get(lessonTitle.toLowerCase().trim());

        if (matchedDbLessons.length > 0) {
          for (const dbLesson of matchedDbLessons) {
            let finalType: 'code' | 'video' | 'reading' = 'code';
            let finalTheory = '';
            let finalCode = '';
            let finalQuiz: any = null;

            if (staticMatch) {
              const staticData = staticMatch.data;
              finalTheory = makePremiumTheory(lessonTitle, staticData.theory || '');
              finalCode = staticData.code || '';
              finalQuiz = staticData.quiz || null;

              // Determine lesson type
              const lowerTitle = lessonTitle.toLowerCase();
              if (lowerTitle.includes('video') || lowerTitle.includes('media') || lowerTitle.includes('youtube')) {
                finalType = 'video';
              } else if (
                lowerTitle.includes('reference') ||
                lowerTitle.includes('overview') ||
                lowerTitle.includes('syllabus') ||
                lowerTitle.includes('study plan') ||
                lowerTitle.includes('ref-') ||
                dbLesson.id.startsWith('ref-')
              ) {
                finalType = 'reading';
              } else {
                finalType = 'code';
              }
            } else {
              // Fallback
              let parsedContent: any = {};
              try {
                parsedContent = JSON.parse(dbLesson.content || '{}');
              } catch {
                parsedContent = { theory: dbLesson.content || '', code: '' };
              }
              finalTheory = parsedContent.theory || '';
              finalCode = parsedContent.code || '';
              finalQuiz = parsedContent.quiz || null;
              finalType = dbLesson.type as any || 'code';
            }

            const contentObj = {
              theory: finalTheory,
              code: finalCode,
              quiz: finalQuiz
            };

            console.log(`  Updating Lesson [${globalLessonOrder}] "${dbLesson.title}" inside Chapter "${chapterTitle}"`);
            await prisma.lesson.update({
              where: { id: dbLesson.id },
              data: {
                type: finalType,
                content: JSON.stringify(contentObj),
                order: globalLessonOrder,
                chapter: chapterTitle,
                chapterId: dbChapterId
              }
            });
          }
        } else {
          console.log(`  ⚠️ Lesson "${lessonTitle}" not found in DB!`);
        }

        globalLessonOrder++;
      }
    }
  }

  console.log('🎉 Success! Successfully updated, sorted, and enriched all 113 PHP lessons in the database.');
}

main()
  .catch((e) => {
    console.error('❌ PHP Sync failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    pool.end();
  });
