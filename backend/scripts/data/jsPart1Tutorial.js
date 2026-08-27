module.exports = [
  // ── 1. JS HOME ──────────────────────────────────────────────────────────
  {
    id: 'js-home',
    title: 'JS Home',
    chapter: 'JS Tutorial',
    chapterId: 'js-chap-tutorial',
    order: 1,
    overview: 'Selamat datang di JavaScript Tutorial! JavaScript adalah bahasa pemrograman terpopuler di dunia yang memberikan nyawa, interaktivitas, dan logika pada aplikasi web modern.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS TUTORIAL</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 01 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🚀 Selamat Datang di JavaScript Tutorial</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>JavaScript (JS)</strong> adalah bahasa pemrograman tingkat tinggi, dinamis, dan serbaguna. Jika <strong>HTML</strong> adalah kerangka tulang dan <strong>CSS</strong> adalah pakaian/gaya visual, maka <strong>JavaScript adalah otak dan sistem saraf</strong> yang membuat website hidup, bereaksi terhadap aksi pengguna, dan memproses data secara realtime.
          </p>
        </div>

        <!-- 3 Pilar Web -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-900/40">
            <div class="text-orange-600 dark:text-orange-400 font-black text-base mb-1">🏗️ 1. HTML (Struktur)</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Menentukan elemen-elemen dokumen seperti tombol, formulir, teks, dan tata letak dasar.</p>
          </div>
          <div class="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/40">
            <div class="text-blue-600 dark:text-blue-400 font-black text-base mb-1">🎨 2. CSS (Tampilan)</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Mengatur estetika, warna, tipografi, animasi, dan responsivitas pada berbagai layar.</p>
          </div>
          <div class="p-4 rounded-xl bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-900/40">
            <div class="text-yellow-600 dark:text-yellow-400 font-black text-base mb-1">⚡ 3. JavaScript (Logika)</div>
            <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Memanipulasi konten secara dinamis, merespons klik, validasi form, dan interaksi API.</p>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 border border-slate-800 space-y-3">
          <h3 class="text-base font-bold text-amber-400 flex items-center gap-2">
            <span>✨ Mengapa Anda Wajib Menguasai JavaScript?</span>
          </h3>
          <ul class="space-y-2 text-xs text-slate-300 leading-relaxed">
            <li class="flex items-start gap-2">
              <span class="text-amber-400 font-bold">✓</span>
              <span><strong>Universal:</strong> Berjalan langsung di semua web browser tanpa perlu instalasi compiler tambahan.</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-400 font-bold">✓</span>
              <span><strong>Full-Stack Capability:</strong> Dapat digunakan di Frontend (React, Vue, Angular) dan Backend (Node.js, Express, Next.js).</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-amber-400 font-bold">✓</span>
              <span><strong>Komunitas Raksasa:</strong> Ekosistem NPM memiliki lebih dari 2 juta paket pustaka siap pakai untuk mempercepat pengembangan.</span>
            </li>
          </ul>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Home Demo</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 24px; background: #f8fafc; color: #0f172a; }
    .card { background: white; padding: 20px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); max-width: 420px; }
    button { background: #eab308; color: #000; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer; transition: 0.2s; }
    button:hover { background: #ca8a04; }
  </style>
</head>
<body>

  <div class="card">
    <h2>Halo JavaScript! 👋</h2>
    <p id="teks">JavaScript belum dijalankan...</p>
    <button onclick="ubahTeks()">Nyalakan Interaktivitas ⚡</button>
  </div>

  <script>
    function ubahTeks() {
      const el = document.getElementById('teks');
      el.innerHTML = '<strong>Luar biasa!</strong> JavaScript berhasil mengubah teks ini secara langsung!';
      el.style.color = '#16a34a';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Elemen <p id="teks"> adalah elemen HTML biasa yang memiliki identifier unik "teks".',
      'Elemen <button> memiliki atribut onclick="ubahTeks()", yang akan mengeksekusi fungsi JavaScript ketika tombol diklik.',
      'Fungsi ubahTeks() mencari elemen dengan document.getElementById("teks").',
      'Konten teks diganti secara dinamis menggunakan properti .innerHTML tanpa perlu me-reload seluruh halaman browser.',
      'Gaya warna teks diubah langsung menggunakan properti manipulasi style .style.color.'
    ],
    quiz: {
      question: 'Apa peran utama JavaScript dalam pengembangan web berdampingan dengan HTML dan CSS?',
      options: [
        'Sebagai kerangka penyusun struktur dasar halaman web',
        'Sebagai pemberi logika, interaktivitas, dan manipulasi dinamis halaman',
        'Hanya untuk mengatur tata letak warna dan font',
        'Sebagai basis data server yang menyimpan data permanen'
      ],
      answer: 1,
      explanation: 'HTML membentuk struktur, CSS menghias tampilan, dan JavaScript memberikan logika serta interaktivitas dinamis pada halaman web.'
    },
    challenge: {
      title: 'Tantangan Pertama: Ubah Teks & Warna Latar',
      description: 'Di dalam fungsi `ubahTeks()`, tambahkan kode untuk mengubah background kartu menjadi warna `#fef08a` ketika tombol diklik!',
      startingCode: `function ubahTeks() {\n  document.getElementById('teks').innerText = 'Berhasil diubah!';\n  // Tulis kode ubah background kartu di bawah:\n}`,
      solution: `function ubahTeks() {\n  document.getElementById('teks').innerText = 'Berhasil diubah!';\n  document.querySelector('.card').style.backgroundColor = '#fef08a';\n}`
    }
  },

  // ── 2. JS INTRODUCTION ──────────────────────────────────────────────────
  {
    id: 'js-intro',
    title: 'JS Introduction',
    chapter: 'JS Tutorial',
    chapterId: 'js-chap-tutorial',
    order: 2,
    overview: 'Pahami kemampuan fundamental JavaScript: mengubah konten HTML, memanipulasi atribut, mengubah gaya CSS, serta menyembunyikan atau menampilkan elemen secara interaktif.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-yellow-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS INTRODUCTION</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 02 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">💡 Apa Saja yang Bisa Dilakukan JavaScript?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript dapat memanipulasi setiap bagian dari halaman web (DOM - Document Object Model) secara realtime. Browser membaca dokumen HTML dan memberikan akses penuh kepada JavaScript untuk membaca, menambah, mengubah, atau menghapus elemen.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <strong class="text-amber-500 text-sm flex items-center gap-1.5">1. Mengubah Konten HTML</strong>
            <p class="text-slate-600 dark:text-slate-300">Gunakan properti <code>innerHTML</code> atau <code>innerText</code> untuk mengganti isi teks dan tag di dalam suatu elemen secara instan.</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
              document.getElementById('demo').innerHTML = 'Halo Dunia!';
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <strong class="text-amber-500 text-sm flex items-center gap-1.5">2. Mengubah Atribut HTML</strong>
            <p class="text-slate-600 dark:text-slate-300">JavaScript bisa mengganti atribut seperti sumber gambar <code>src</code>, link <code>href</code>, atau status <code>disabled</code>.</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
              document.getElementById('lampu').src = 'lampu_on.gif';
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <strong class="text-amber-500 text-sm flex items-center gap-1.5">3. Mengubah Gaya CSS</strong>
            <p class="text-slate-600 dark:text-slate-300">Mengubah ukuran font, warna, display, margin, atau animasi melalui properti <code>style</code>.</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
              document.getElementById('demo').style.fontSize = '28px';
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <strong class="text-amber-500 text-sm flex items-center gap-1.5">4. Sembunyi / Tampilkan Elemen</strong>
            <p class="text-slate-600 dark:text-slate-300">Mengatur visibility elemen secara dinamis menggunakan properti <code>style.display</code> ('none' atau 'block').</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-indigo-600 dark:text-indigo-400">
              document.getElementById('modal').style.display = 'none';
            </div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Simulasi Lampu JavaScript</title>
  <style>
    body { font-family: sans-serif; text-align: center; padding: 30px; background: #0f172a; color: white; }
    .box { background: #1e293b; padding: 25px; border-radius: 16px; display: inline-block; box-shadow: 0 10px 25px rgba(0,0,0,0.5); }
    .bulb { font-size: 80px; margin: 15px 0; transition: filter 0.3s; }
    .bulb.on { filter: drop-shadow(0 0 35px #fde047); }
    button { padding: 10px 16px; margin: 6px; border-radius: 8px; font-weight: bold; border: none; cursor: pointer; }
    .btn-on { background: #22c55e; color: white; }
    .btn-off { background: #ef4444; color: white; }
  </style>
</head>
<body>

  <div class="box">
    <h2>Interaktivitas Lampu JS 💡</h2>
    <div id="lampu" class="bulb">⚪</div>
    <p id="status">Status: Lampu Mati</p>

    <button class="btn-on" onclick="nyalakanLampu()">Nyalakan (ON)</button>
    <button class="btn-off" onclick="matikanLampu()">Matikan (OFF)</button>
  </div>

  <script>
    function nyalakanLampu() {
      const lampu = document.getElementById('lampu');
      lampu.innerText = '💡';
      lampu.classList.add('on');
      document.getElementById('status').innerText = 'Status: Lampu Menyala Terang! ✨';
      document.getElementById('status').style.color = '#fde047';
    }

    function matikanLampu() {
      const lampu = document.getElementById('lampu');
      lampu.innerText = '⚪';
      lampu.classList.remove('on');
      document.getElementById('status').innerText = 'Status: Lampu Mati 💤';
      document.getElementById('status').style.color = '#94a3b8';
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'Fungsi nyalakanLampu() mengubah innerText emoji lampu menjadi bola lampu menyala 💡.',
      'lampu.classList.add("on") menambahkan kelas CSS .on yang memberikan efek glowing filter drop-shadow.',
      'Teks status dan warna font pada elemen #status diperbarui secara realtime.',
      'Fungsi matikanLampu() mengembalikan keadaan elemen menjadi semula saat tombol merah diklik.'
    ],
    quiz: {
      question: 'Manakah baris kode JavaScript yang benar untuk mengubah ukuran teks elemen dengan id="teks" menjadi 24px?',
      options: [
        'document.getElementById("teks").fontSize = "24px";',
        'document.getElementById("teks").style.fontSize = "24px";',
        'document.getElementById("teks").style.font_size = 24;',
        'document.style.teks.fontSize = "24px";'
      ],
      answer: 1,
      explanation: 'Dalam JavaScript DOM, manipulasi style dilakukan melalui objek .style dengan penamaan camelCase, yaitu document.getElementById("teks").style.fontSize = "24px".'
    },
    challenge: {
      title: 'Tantangan: Sembunyikan dan Tampilkan Elemen',
      description: 'Buat fungsi `toggleRahasia()` yang jika dijalankan akan menyembunyikan teks `#rahasia` dengan `display = "none"` atau menampilkannya kembali dengan `display = "block"`.',
      startingCode: `function toggleRahasia() {\n  const el = document.getElementById('rahasia');\n  // Lengkapi kondisi toggle di sini:\n}`,
      solution: `function toggleRahasia() {\n  const el = document.getElementById('rahasia');\n  if (el.style.display === 'none') {\n    el.style.display = 'block';\n  } else {\n    el.style.display = 'none';\n  }\n}`
    }
  },

  // ── 3. JS WHERE TO ──────────────────────────────────────────────────────
  {
    id: 'js-whereto',
    title: 'JS Where To',
    chapter: 'JS Tutorial',
    chapterId: 'js-chap-tutorial',
    order: 3,
    overview: 'Pelajari di mana dan bagaimana meletakkan kode JavaScript dalam dokumen HTML: di dalam <head>, di akhir <body>, atau menggunakan file eksternal .js beserta atribut defer & async.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-yellow-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS WHERE TO</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 03 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📍 Di Mana Sebaiknya Menaruh Kode JavaScript?</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            Kode JavaScript dapat disisipkan ke dalam dokumen HTML menggunakan tag <code>&lt;script&gt;...&lt;/script&gt;</code> di beberapa lokasi strategis tergantung kebutuhan performa dan rendering halaman.
          </p>
        </div>

        <div class="space-y-3">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1 text-emerald-600 dark:text-emerald-400">1. Di Bagian Akhir &lt;body&gt; (Sangat Direkomendasikan)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
              Menempatkan script sebelum tag penutup <code>&lt;/body&gt;</code> memastikan seluruh elemen HTML sudah selesai dimuat oleh browser sebelum script dieksekusi, sehingga mempercepat waktu tampilan awal web (First Contentful Paint).
            </p>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">&lt;body&gt;\n  &lt;h1&gt;Konten Web&lt;/h1&gt;\n  &lt;script&gt;\n    console.log('DOM sudah siap!');\n  &lt;/script&gt;\n&lt;/body&gt;</pre>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1 text-blue-600 dark:text-blue-400">2. Di Bagian &lt;head&gt;</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
              Cocok untuk library analitik atau script konfigurasi awal. Jika script di <code>&lt;head&gt;</code> ingin mengakses elemen DOM, gunakan atribut <code>defer</code> agar browser memuatnya di latar belakang tanpa memblokir rendering HTML.
            </p>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">&lt;head&gt;\n  &lt;script src="script.js" defer&gt;&lt;/script&gt;\n&lt;/head&gt;</pre>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <h4 class="font-bold text-slate-800 dark:text-white text-sm mb-1 text-amber-600 dark:text-amber-400">3. File Eksternal (.js)</h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mb-2">
              Memisahkan kode HTML dan JS ke dalam file terpisah (seperti <code>app.js</code>) membuat struktur proyek rapi, mudah dikelola, dan memungkinkan browser melakukan <em>caching</em> file JS untuk akses super cepat di halaman berikutnya.
            </p>
            <pre class="bg-slate-950 text-slate-200 p-2.5 rounded text-[11px] font-mono">&lt;script src="js/main.js"&gt;&lt;/script&gt;</pre>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Lokasi Script JS</title>
  <style>
    body { font-family: sans-serif; padding: 25px; line-height: 1.6; }
    .badge { display: inline-block; padding: 4px 10px; background: #e0f2fe; color: #0369a1; border-radius: 999px; font-weight: bold; font-size: 12px; }
  </style>

  <!-- Script di HEAD: Mendefinisikan fungsi tanpa langsung memanipulasi DOM sebelum siap -->
  <script>
    function salamDariHead() {
      alert('Salam hangat dari fungsi yang didefinisikan di dalam tag <head>!');
    }
  </script>
</head>
<body>

  <h1>Penempatan File & Script JS</h1>
  <p>Klik tombol untuk memanggil fungsi yang dideklarasikan di <code>&lt;head&gt;</code>:</p>
  <button onclick="salamDariHead()">Panggil Fungsi Head</button>

  <div style="margin-top: 25px; padding: 15px; background: #fef9c3; border-radius: 8px;">
    <span class="badge">Status Body Script</span>
    <p id="pesan-body">Menunggu script di akhir body berjalan...</p>
  </div>

  <!-- Script di akhir BODY: Dieksekusi otomatis setelah DOM siap -->
  <script>
    document.getElementById('pesan-body').innerText = '✅ Script di akhir <body> sukses dieksekusi secara instan saat halaman selesai dibaca!';
  </script>

</body>
</html>`,
    codeExplanation: [
      'Tag <script> di bagian <head> digunakan untuk mendeklarasikan blueprint fungsi salamDariHead(). Fungsi ini belum berjalan sampai dipanggil oleh event klik.',
      'Elemen HTML dirender secara berurutan dari atas ke bawah oleh browser.',
      'Tag <script> di bagian bawah langsung mengubah teks elemen #pesan-body dengan aman karena elemen tersebut sudah ada di memori browser.'
    ],
    quiz: {
      question: 'Mengapa menaruh tag <script> di bagian paling bawah sebelum </body> sangat dianjurkan untuk script pemula?',
      options: [
        'Karena JavaScript hanya bisa berjalan jika ditaruh di dalam body',
        'Agar browser memuat dan menampilkan seluruh elemen HTML terlebih dahulu sebelum menjalankan logika script',
        'Karena file CSS tidak bisa dibaca jika ada script di head',
        'Agar browser tidak membaca file HTML sama sekali'
      ],
      answer: 1,
      explanation: 'Menaruh script di akhir body mencegah pemblokiran rendering HTML sehingga halaman muncul lebih cepat dan seluruh elemen DOM sudah siap dimanipulasi.'
    },
    challenge: {
      title: 'Tantangan: Hubungkan Script Eksternal',
      description: 'Tuliskan tag HTML yang benar untuk memanggil file JavaScript eksternal bernama `logic.js` yang berada di folder `assets/js/` dengan atribut `defer`!',
      startingCode: `<!-- Tuliskan tag script eksternal di bawah ini: -->\n`,
      solution: `<script src="assets/js/logic.js" defer></script>`
    }
  },

  // ── 4. JS OUTPUT ────────────────────────────────────────────────────────
  {
    id: 'js-output',
    title: 'JS Output',
    chapter: 'JS Tutorial',
    chapterId: 'js-chap-tutorial',
    order: 4,
    overview: 'Kuasai 4 cara utama menampilkan data dan output di JavaScript: innerHTML, document.write(), window.alert(), dan console.log().',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-yellow-500/15 via-amber-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">JS OUTPUT</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 04 / 22</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🖥️ 4 Cara Menampilkan Output di JavaScript</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            JavaScript tidak memiliki fungsi bawaan <code>print()</code> seperti bahasa lain. Untuk menampilkan output ke pengguna atau developer, JavaScript menyediakan 4 mekanisme standar:
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <strong class="text-amber-500 text-sm">1. innerHTML (Ke Elemen HTML)</strong>
            <p class="text-slate-600 dark:text-slate-300">Cara paling umum untuk menyuntikkan teks atau tag HTML langsung ke dalam elemen tertentu di halaman.</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
              document.getElementById('hasil').innerHTML = 5 + 10;
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <strong class="text-amber-500 text-sm">2. console.log() (Ke Browser Console)</strong>
            <p class="text-slate-600 dark:text-slate-300">Standar industri utama developer untuk mencetak data variabel, pesan error, dan proses debugging (tekan F12 pada browser).</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
              console.log('Nilai User:', userProfile);
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <strong class="text-amber-500 text-sm">3. window.alert() (Kotak Dialog Popup)</strong>
            <p class="text-slate-600 dark:text-slate-300">Menampilkan kotak dialog modal peringatan kepada pengguna sebelum melanjutkan interaksi.</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
              alert('Selamat! Registrasi berhasil.');
            </div>
          </div>

          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <strong class="text-amber-500 text-sm">4. document.write() (Menulis Dokumen)</strong>
            <p class="text-slate-600 dark:text-slate-300">Digunakan untuk pengujian cepat. <em>Peringatan:</em> jika dipanggil setelah halaman selesai dimuat, ia akan menghapus seluruh konten HTML yang ada!</p>
            <div class="p-2 bg-slate-100 dark:bg-slate-800 rounded font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
              document.write('Teks langsung di halaman');
            </div>
          </div>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Eksperimen 4 Output JS</title>
  <style>
    body { font-family: sans-serif; padding: 24px; background: #f1f5f9; }
    .container { max-width: 500px; margin: auto; background: white; padding: 24px; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
    .btn { display: block; width: 100%; padding: 10px; margin: 8px 0; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; }
    .btn:hover { background: #0369a1; }
    .result-box { padding: 12px; background: #f8fafc; border: 1px dashed #94a3b8; border-radius: 6px; margin-top: 15px; font-family: monospace; }
  </style>
</head>
<body>

  <div class="container">
    <h2>Eksperimen 4 Output JS 🚀</h2>
    
    <button class="btn" onclick="outputInnerHTML()">1. Tampilkan via innerHTML</button>
    <button class="btn" onclick="outputAlert()">2. Tampilkan via window.alert()</button>
    <button class="btn" onclick="outputConsole()">3. Tampilkan via console.log()</button>

    <div class="result-box" id="output-area">
      Output innerHTML akan muncul di sini...
    </div>
  </div>

  <script>
    function outputInnerHTML() {
      const a = 25;
      const b = 75;
      document.getElementById('output-area').innerHTML = 
        '<strong>Hasil Kalkulasi:</strong> ' + a + ' + ' + b + ' = <span style="color: #16a34a; font-weight:bold;">' + (a + b) + '</span>';
    }

    function outputAlert() {
      alert('Pemberitahuan: Halo dari window.alert()!');
    }

    function outputConsole() {
      console.log('=== LOG DEBUGGING DARI JAVASCRIPT ===');
      console.log('Waktu saat ini:', new Date().toLocaleTimeString());
      console.log('Objek Pengguna:', { nama: 'Rahmat', level: 'Frontend Pro', score: 98 });
      alert('Data telah dikirim ke Developer Console! Tekan F12 atau klik Inspect -> Console untuk melihatnya.');
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'outputInnerHTML() menghitung nilai matematika (25 + 75) dan memasukkan tag HTML berwarna langsung ke dalam div #output-area.',
      'outputAlert() memunculkan modal peringatan browser standar.',
      'outputConsole() mencetak pesan terstruktur dan objek JavaScript ke Developer Console (F12) tanpa mengganggu tampilan halaman utama pengguna.'
    ],
    quiz: {
      question: 'Metode manakah yang paling direkomendasikan untuk keperluan debugging dan pelacakan error oleh programmer profesional?',
      options: [
        'window.alert()',
        'document.write()',
        'console.log()',
        'window.print()'
      ],
      answer: 2,
      explanation: 'console.log() adalah alat utama developer untuk inspeksi variabel, objek, dan error di dalam Developer Tools tanpa memblokir interaksi halaman pengguna seperti alert.'
    },
    challenge: {
      title: 'Tantangan: Cetak Objek ke Console',
      description: 'Lengkapi fungsi `cetakProfil(nama, umur)` agar mencetak teks "User: [nama], Umur: [umur]" ke console browser menggunakan `console.log()`!',
      startingCode: `function cetakProfil(nama, umur) {\n  // Tulis console.log di sini:\n}`,
      solution: `function cetakProfil(nama, umur) {\n  console.log('User: ' + nama + ', Umur: ' + umur);\n}`
    }
  }
];
