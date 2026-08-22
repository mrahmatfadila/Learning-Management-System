import { HtmlLessonItem } from './htmlPart2';

export const htmlLessonsPart7APIs: HtmlLessonItem[] = [
  // ── 1. HTML Web APIs ──────────────────────────────────────────────────────
  {
    title: 'HTML Web APIs - Pengenalan Antarmuka Pemrograman Browser',
    chapter: 'HTML Web APIs',
    type: 'code',
    order: 107,
    overview: 'Web API adalah kumpulan fitur, fungsi, dan antarmuka pemrograman bawaan peramban (browser) yang memungkinkan website berinteraksi dengan hardware perangkat dan sistem operasi.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🚀 Apa itu HTML5 Web APIs?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Semua browser modern dilengkapi dengan seperangkat <strong>Web APIs</strong> bawaan. API ini memperluas fungsi HTML standar sehingga sebuah website dapat bekerja layaknya aplikasi native (desktop/mobile).
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold block mb-1">Browser APIs Bawaan:</strong>
            <p class="text-slate-600 dark:text-slate-400">
              Tertanam langsung di browser (Geolocation, Storage, Fetch API, Notifications, Canvas, Audio Context).
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-bold block mb-1">Third-Party APIs:</strong>
            <p class="text-slate-600 dark:text-slate-400">
              Disediakan oleh server pihak ketiga melalui internet (Google Maps API, Payment Gateway API, Weather API).
            </p>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Web APIs</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Kekuatan Web APIs Modern</h2>
  <p>Status Koneksi Internet Anda (Network Information API):</p>
  <h3 id="status-online" style="color: #10b981;">Memeriksa...</h3>

  <script>
    const statusEl = document.getElementById('status-online');
    if (navigator.onLine) {
      statusEl.textContent = '🟢 Online (Terhubung ke Internet)';
    } else {
      statusEl.textContent = '🔴 Offline (Koneksi Terputus)';
      statusEl.style.color = '#ef4444';
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'navigator.onLine adalah bagian dari Browser Web API untuk mendeteksi status jaringan perangkat secara instan.',
      'Web APIs menyederhanakan kode kompleks menjadi properti dan fungsi JavaScript yang mudah dipanggil.'
    ],
    quiz: {
      question: 'Apakah yang dimaksud dengan Web APIs bawaan browser?',
      options: ['Software yang harus didownload dan diinstal di komputer', 'Kumpulan fungsi dan properti bawaan peramban web untuk memperluas kapabilitas HTML & JavaScript', 'Bahasa pemrograman baru pengganti HTML', 'Driver hardware kartu grafis'],
      answer: 1,
      explanation: 'Web APIs adalah antarmuka bawaan peramban web yang memungkinkan pengembang mengakses fitur canggih perangkat dan jaringan.'
    }
  },

  // ── 2. HTML Geolocation ───────────────────────────────────────────────────
  {
    title: 'HTML Geolocation - Mendeteksi Titik Koordinat Pengguna (GPS/IP)',
    chapter: 'HTML Geolocation',
    type: 'code',
    order: 108,
    overview: 'HTML Geolocation API digunakan untuk mendapatkan posisi geografis (Latitude & Longitude) pengguna atas izin (permission) mereka.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📍 Geolocation API & Privasi Pengguna</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Karena alasan privasi dan keamanan, lokasi pengguna <strong>tidak akan pernah bisa diakses</strong> kecuali pengguna menekan tombol <em>"Allow / Izinkan"</em> pada kotak dialog izin browser.
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Cara Mengambil Koordinat:</div>
          <div><span class="text-sky-400">navigator</span>.geolocation.<span class="text-emerald-400">getCurrentPosition</span>((position) =&gt; {</div>
          <div class="ml-4"><span class="text-purple-400">console</span>.<span class="text-sky-400">log</span>(position.coords.latitude);</div>
          <div class="ml-4"><span class="text-purple-400">console</span>.<span class="text-sky-400">log</span>(position.coords.longitude);</div>
          <div>});</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Geolocation</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Pelacak Lokasi Geolocation</h2>
  <button onclick="dapatkanLokasi()" style="padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold;">
    📍 Dapatkan Koordinat Saya
  </button>
  
  <p id="hasil-lokasi" style="margin-top: 15px; font-weight: bold;"></p>

  <script>
    function dapatkanLokasi() {
      const output = document.getElementById('hasil-lokasi');
      if (navigator.geolocation) {
        output.textContent = 'Meminta izin lokasi...';
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            output.innerHTML = 'Latitude: ' + pos.coords.latitude + '<br>Longitude: ' + pos.coords.longitude;
          },
          (err) => {
            output.textContent = 'Gagal / Izin Ditolak: ' + err.message;
          }
        );
      } else {
        output.textContent = 'Geolocation tidak didukung oleh browser Anda.';
      }
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'navigator.geolocation memeriksa ketersediaan fitur di browser.',
      'getCurrentPosition(successCallback, errorCallback) meminta izin lokasi dan mengembalikan koordinat.',
      'pos.coords.latitude dan pos.coords.longitude menyimpan titik koordinat bumi.'
    ],
    quiz: {
      question: 'Method apakah yang digunakan pada navigator.geolocation untuk mengambil koordinat lokasi pengguna saat ini satu kali?',
      options: ['watchPosition()', 'getCurrentPosition()', 'fetchLocation()', 'getGPS()'],
      answer: 1,
      explanation: 'getCurrentPosition() adalah method untuk mengambil koordinat posisi perangkat saat ini secara instan.'
    }
  },

  // ── 3. HTML Drag and Drop ─────────────────────────────────────────────────
  {
    title: 'HTML Drag and Drop - Interaksi Geser & Lepas Elemen Natif',
    chapter: 'HTML Drag and Drop',
    type: 'code',
    order: 109,
    overview: 'HTML5 Drag and Drop API memungkinkan pengguna menggeser elemen visual dari satu area dan menjatuhkannya ke area wadah drop target.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🖐️ 3 Langkah Utama Drag & Drop</h2>
        <div class="space-y-2.5 text-xs">
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Jadikan Elemen Dapat Digeser</strong>: Tambahkan atribut <code>draggable="true"</code>.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Tangkap Data Saat Digeser</strong>: Event <code>ondragstart</code> menggunakan <code>ev.dataTransfer.setData("text", ev.target.id)</code>.
          </div>
          <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Izinkan Drop & Pindahkan Elemen</strong>: Event <code>ondragover="ev.preventDefault()"</code> dan <code>ondrop</code> memindahkan elemen dengan <code>appendChild</code>.
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Drag and Drop</title>
  <style>
    .dropzone {
      width: 160px; height: 160px; padding: 10px; border: 2px dashed #94a3b8;
      border-radius: 12px; display: inline-block; vertical-align: top; margin-right: 15px;
      background: #f8fafc; text-align: center;
    }
    .drag-item {
      width: 120px; padding: 15px; background: #6366f1; color: white;
      border-radius: 8px; font-weight: bold; cursor: grab; margin: 15px auto;
    }
  </style>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Geser Kotak ke Kotak Target!</h2>
  
  <div class="dropzone" id="zone1" ondrop="drop(event)" ondragover="allowDrop(event)">
    <div id="drag1" class="drag-item" draggable="true" ondragstart="drag(event)">📦 Kotak Barang</div>
  </div>

  <div class="dropzone" id="zone2" ondrop="drop(event)" ondragover="allowDrop(event)">
    <p style="color: #94a3b8; font-size: 12px;">Letakkan di Sini</p>
  </div>

  <script>
    function allowDrop(ev) { ev.preventDefault(); }
    function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
    function drop(ev) {
      ev.preventDefault();
      const data = ev.dataTransfer.getData("text");
      ev.currentTarget.appendChild(document.getElementById(data));
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'draggable="true" membuat elemen kotak barang bisa ditarik mouse.',
      'ev.preventDefault() pada ondragover sangat krusial karena browser secara default melarang drop pada elemen biasa.',
      'appendChild memindahkan node DOM elemen ke dalam kotak baru.'
    ],
    quiz: {
      question: 'Atribut HTML apakah yang wajib ditambahkan pada sebuah elemen agar dapat digeser oleh kursor pengguna?',
      options: ['movable="true"', 'draggable="true"', 'droppable="true"', 'selectable="true"'],
      answer: 1,
      explanation: 'Atribut draggable="true" menandai elemen HTML agar dapat ditarik menggunakan cursor mouse.'
    }
  },

  // ── 4. HTML Web Storage ───────────────────────────────────────────────────
  {
    title: 'HTML Web Storage - localStorage vs sessionStorage (Penyimpanan Klien)',
    chapter: 'HTML Web Storage',
    type: 'code',
    order: 110,
    overview: 'HTML Web Storage memungkinkan aplikasi web menyimpan data pasangan key-value di browser pengguna hingga 5-10MB tanpa mengirimkannya ke server di setiap HTTP request seperti cookies.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">💾 localStorage vs sessionStorage</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold block mb-1">localStorage</strong>
            <p class="text-slate-600 dark:text-slate-400">
              Data tersimpan permanen <strong>tanpa batas waktu</strong> kedaluwarsa. Data tetap ada meski tab atau browser ditutup dan dibuka kembali besok.
            </p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500 font-bold block mb-1">sessionStorage</strong>
            <p class="text-slate-600 dark:text-slate-400">
              Data hanya bertahan selama <strong>sesi tab browser aktif</strong>. Data otomatis terhapus saat tab ditutup.
            </p>
          </div>
        </div>

        <div class="space-y-2 text-xs font-mono">
          <h3 class="font-bold text-slate-800 dark:text-white text-sm font-sans">🌟 4 Method Utama Web Storage:</h3>
          <div class="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <div>• <code>localStorage.setItem("key", "value")</code>: Menyimpan data.</div>
            <div>• <code>localStorage.getItem("key")</code>: Mengambil nilai data.</div>
            <div>• <code>localStorage.removeItem("key")</code>: Menghapus 1 data spesifik.</div>
            <div>• <code>localStorage.clear()</code>: Menghapus seluruh data penyimpanan.</div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo Web Storage</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Penyimpanan Preferensi (localStorage)</h2>
  <input type="text" id="input-nama" placeholder="Masukkan nama Anda...">
  <button onclick="simpanNama()" style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Simpan</button>
  <button onclick="hapusNama()" style="background: #ef4444; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Hapus</button>

  <h3 id="salam-user" style="color: #4f46e5; margin-top: 20px;"></h3>

  <script>
    function tampilkanNama() {
      const nama = localStorage.getItem('namaUser');
      if (nama) {
        document.getElementById('salam-user').textContent = 'Selamat Datang Kembali, ' + nama + '! 👋 (Data Tersimpan)';
      } else {
        document.getElementById('salam-user').textContent = 'Belum ada nama yang tersimpan.';
      }
    }

    function simpanNama() {
      const val = document.getElementById('input-nama').value;
      localStorage.setItem('namaUser', val);
      tampilkanNama();
    }

    function hapusNama() {
      localStorage.removeItem('namaUser');
      tampilkanNama();
    }

    tampilkanNama();
  </script>
</body>
</html>`,
    codeExplanation: [
      'localStorage.setItem("namaUser", val) menyimpan teks nama ke memori lokal browser.',
      'Data tetap tersimpan saat Anda merefresh atau menutup halaman browser.'
    ],
    quiz: {
      question: 'Manakah objek Web Storage yang datanya tetap tersimpan permanen dan tidak hilang meskipun browser ditutup?',
      options: ['sessionStorage', 'localStorage', 'cookieStorage', 'tempStorage'],
      answer: 1,
      explanation: 'localStorage menyimpan data tanpa batas waktu kedaluwarsa hingga dihapus secara manual atau via script.'
    }
  },

  // ── 5. HTML Web Workers ───────────────────────────────────────────────────
  {
    title: 'HTML Web Workers - Menjalankan JavaScript Multi-Thread di Background',
    chapter: 'HTML Web Workers',
    type: 'code',
    order: 111,
    overview: 'Web Workers menjalankan script komputasi berat di background thread terpisah tanpa memblokir antarmuka pengguna (UI) agar website tidak mengalami freezing atau lag.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">🧵 Mengapa Butuh Web Worker?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          JavaScript secara default adalah <em>Single-Threaded</em>. Jika Anda menjalankan perhitungan matematika loop 10 miliar data di thread utama, halaman web akan macet total (*freeze*), tombol tidak bisa diklik, dan animasi terhenti.
        </p>

        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-300">
          <strong>💡 Cara Kerja Worker:</strong> Dibuat dengan <code>new Worker("worker.js")</code>. Berkomunikasi dengan thread utama menggunakan pesan <code>postMessage()</code> dan mendengarkan dengan event <code>onmessage</code>.
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML Web Workers</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Hitungan Berat di Background Thread</h2>
  <p>Angka Counter Background: <strong id="hasil-hitung" style="font-size: 24px; color: #4f46e5;">0</strong></p>
  
  <button onclick="mulaiWorker()" style="background: #10b981; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Mulai Worker</button>
  <button onclick="hentikanWorker()" style="background: #ef4444; color: white; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Stop Worker</button>

  <script>
    let w;
    function mulaiWorker() {
      if (typeof(Worker) !== "undefined") {
        if (typeof(w) == "undefined") {
          // Membuat worker inline via Blob untuk simulasi demo
          const blobCode = 'let i = 0; function timedCount() { i++; postMessage(i); setTimeout(timedCount, 500); } timedCount();';
          const blob = new Blob([blobCode], { type: 'application/javascript' });
          w = new Worker(URL.createObjectURL(blob));
          w.onmessage = function(event) {
            document.getElementById("hasil-hitung").textContent = event.data;
          };
        }
      }
    }

    function hentikanWorker() {
      if (w) {
        w.terminate();
        w = undefined;
      }
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'new Worker(...) menjalankan skrip di thread background terpisah.',
      'postMessage(i) mengirimkan hasil perhitungan dari thread worker ke thread utama.',
      'w.terminate() mematikan proses background worker untuk menghemat memori RAM.'
    ],
    quiz: {
      question: 'Method apakah yang digunakan pada objek Web Worker untuk menghentikan eksekusi worker dari thread utama?',
      options: ['w.stop()', 'w.kill()', 'w.terminate()', 'w.destroy()'],
      answer: 2,
      explanation: 'Method w.terminate() segera menghentikan aktivitas background worker.'
    }
  },

  // ── 6. HTML SSE ───────────────────────────────────────────────────────────
  {
    title: 'HTML SSE - Server-Sent Events (Streaming Pembaruan Data Realtime)',
    chapter: 'HTML SSE',
    type: 'code',
    order: 112,
    overview: 'Server-Sent Events (SSE) memungkinkan server backend mengirimkan pembaruan data secara otomatis ke browser (one-way stream) tanpa perlu klien terus-menerus melakukan polling.',
    theory: `
      <div class="space-y-6">
        <h2 class="text-2xl font-black text-slate-800 dark:text-white">📡 Apa itu Server-Sent Events (SSE)?</h2>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          SSE sangat cocok untuk fitur streaming satu arah seperti harga saham live, update skor pertandingan olahraga, live feed media sosial, atau streaming token output AI (seperti ChatGPT).
        </p>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs overflow-x-auto border border-slate-800">
          <div class="text-amber-400 mb-2 font-bold">// Sintaks EventSource di JavaScript:</div>
          <div><span class="text-emerald-400">const</span> source = <span class="text-emerald-400">new</span> <span class="text-sky-400">EventSource</span>(<span class="text-amber-300">"/api/live-stream"</span>);</div>
          <div>source.<span class="text-purple-400">onmessage</span> = (event) =&gt; {</div>
          <div class="ml-4"><span class="text-purple-400">console</span>.<span class="text-sky-400">log</span>(<span class="text-amber-300">"Pesan baru dari server:"</span>, event.data);</div>
          <div>};</div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Demo HTML SSE</title>
</head>
<body style="font-family: sans-serif; padding: 20px;">
  <h2>Live Feed Berita Realtime (Server-Sent Events)</h2>
  
  <div id="sse-feed" style="background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #cbd5e1; max-width: 400px; min-height: 80px;">
    Mendengarkan siaran data server via EventSource...
  </div>

  <script>
    if (typeof(EventSource) !== "undefined") {
      // Contoh inisialisasi EventSource
      console.log('Browser mendukung Server-Sent Events (EventSource)');
    } else {
      document.getElementById('sse-feed').textContent = 'Browser Anda tidak mendukung SSE.';
    }
  </script>
</body>
</html>`,
    codeExplanation: [
      'Objek new EventSource(url) membuka koneksi HTTP streaming persisten ke server backend.',
      'Event onmessage otomatis terpanggil setiap kali server memancarkan baris data baru ("data: ...\\n\\n").'
    ],
    quiz: {
      question: 'Objek JavaScript bawaan apakah yang digunakan di sisi browser untuk menerima koneksi Server-Sent Events (SSE)?',
      options: ['WebSocket', 'EventSource', 'StreamReader', 'FetchStream'],
      answer: 1,
      explanation: 'Objek EventSource adalah API resmi HTML5 untuk mendengarkan aliran data streaming Server-Sent Events dari server.'
    }
  }
];
