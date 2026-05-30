// JavaScript Course Data

export const jsCourseModules = [
  {
    id: 'js-mod-1', title: 'Basic JavaScript',
    lessons: [
      { id: 'js-intro',        title: 'JS Introduction' },
      { id: 'js-whereto',      title: 'JS Where To' },
      { id: 'js-output',       title: 'JS Output' },
      { id: 'js-syntax',       title: 'JS Syntax' },
      { id: 'js-statements',   title: 'JS Statements' },
      { id: 'js-comments',     title: 'JS Comments' },
      { id: 'js-variables',    title: 'JS Variables' },
      { id: 'js-let',          title: 'JS Let' },
      { id: 'js-const',        title: 'JS Const' },
      { id: 'js-types',        title: 'JS Data Types' },
      { id: 'js-operators',    title: 'JS Operators' },
      { id: 'js-ifelse',       title: 'JS If Else' },
      { id: 'js-loops',        title: 'JS Loops' },
      { id: 'js-strings',      title: 'JS Strings' },
      { id: 'js-numbers',      title: 'JS Numbers' },
      { id: 'js-functions',    title: 'JS Functions' },
      { id: 'js-objects',      title: 'JS Objects' },
      { id: 'js-scope',        title: 'JS Scope' },
      { id: 'js-arrays',       title: 'JS Arrays' },
      { id: 'js-sets',         title: 'JS Sets' },
      { id: 'js-maps',         title: 'JS Maps' },
      { id: 'js-math',         title: 'JS Math' },
      { id: 'js-dates',        title: 'JS Dates' },
      { id: 'js-regexp',       title: 'JS RegExp' },
      { id: 'js-errors',       title: 'JS Errors' },
      { id: 'js-debugging',    title: 'JS Debugging' },
    ]
  },
  {
    id: 'js-mod-2', title: 'JS Advanced',
    lessons: [
      { id: 'js-adv-functions',  title: 'Advanced Functions' },
      { id: 'js-adv-objects',    title: 'Advanced Objects' },
      { id: 'js-classes',        title: 'JS Classes' },
      { id: 'js-async',          title: 'JS Asynchronous' },
      { id: 'js-promises',       title: 'JS Promises' },
      { id: 'js-async-await',    title: 'Async / Await' },
      { id: 'js-modules',        title: 'JS Modules' },
      { id: 'js-destructuring',  title: 'JS Destructuring' },
      { id: 'js-spread-rest',    title: 'Spread & Rest' },
      { id: 'js-closures',       title: 'JS Closures' },
    ]
  },
  {
    id: 'js-mod-3', title: 'JS HTML DOM',
    lessons: [
      { id: 'js-dom-intro',      title: 'DOM Introduction' },
      { id: 'js-dom-selectors',  title: 'DOM Selectors' },
      { id: 'js-dom-events',     title: 'DOM Events' },
      { id: 'js-dom-manipulation', title: 'DOM Manipulation' },
      { id: 'js-dom-forms',      title: 'DOM Forms' },
    ]
  },
  {
    id: 'js-mod-4', title: 'JS Web APIs & AJAX',
    lessons: [
      { id: 'js-fetch',          title: 'Fetch API' },
      { id: 'js-json',           title: 'JS JSON' },
      { id: 'js-localstorage',   title: 'LocalStorage' },
      { id: 'js-ajax',           title: 'JS AJAX' },
    ]
  },
];

export const jsLessonsData: Record<string, any> = {

'js-intro': {
  courseId:'javascript', title:'JS Introduction', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>Apa itu JavaScript?</h2>
<p>JavaScript adalah bahasa pemrograman yang membuat halaman web menjadi <strong>interaktif dan dinamis</strong>. Bersama HTML dan CSS, JavaScript adalah tiga teknologi inti web.</p>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
  <p class="text-orange-900 font-bold mb-2">Tiga Pilar Web:</p>
  <ul class="text-orange-800 text-sm space-y-1">
    <li><strong>HTML</strong> - Struktur (kerangka)</li>
    <li><strong>CSS</strong> - Tampilan (desain)</li>
    <li><strong>JavaScript</strong> - Perilaku (interaktivitas)</li>
  </ul>
</div>
<h3>Apa yang bisa dilakukan JavaScript?</h3>
<ul>
  <li>Mengubah konten HTML secara dinamis</li>
  <li>Merespons aksi pengguna (klik, input, scroll)</li>
  <li>Mengirim dan menerima data dari server (AJAX/Fetch)</li>
  <li>Membuat animasi dan efek visual</li>
  <li>Memvalidasi form sebelum dikirim</li>
  <li>Menyimpan data di browser (localStorage)</li>
</ul>
<h3>JavaScript di mana-mana</h3>
<ul>
  <li><strong>Browser</strong> - frontend web</li>
  <li><strong>Node.js</strong> - backend server</li>
  <li><strong>React Native</strong> - mobile app</li>
  <li><strong>Electron</strong> - desktop app</li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 24px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(234,179,8,0.15);
  border: 1px solid #fde68a;
  max-width: 400px;
}
h1 {
  color: #92400e;
  margin-bottom: 8px;
}
p {
  color: #78350f;
  margin-bottom: 16px;
}
button {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
}
button:hover {
  background: #d97706;
}
#output {
  margin-top: 16px;
  padding: 12px;
  background: #fef3c7;
  border-radius: 8px;
  color: #92400e;
  font-weight: bold;
  display: none;
}

</style>
</head>
<body>
<div class="card">
  <h1>Hello, JavaScript! 🚀</h1>
  <p>Klik tombol untuk melihat JavaScript beraksi!</p>
  <button onclick="sayHello()">Klik Saya!</button>
  <div id="output"></div>
</div>
<script>
  function sayHello() {
    const output = document.getElementById('output');
    output.style.display = 'block';
    output.textContent = '✅ JavaScript berjalan! Waktu: ' + new Date().toLocaleTimeString();
  }
</script>
</body>
</html>`,
  quiz:{ question:'Apa fungsi utama JavaScript dalam pengembangan web?', options:['Mengatur tampilan/desain halaman','Membuat struktur HTML','Menambahkan interaktivitas dan logika','Menyimpan database'], correctIndex:2, explanation:'JavaScript bertanggung jawab untuk interaktivitas, logika, dan perilaku dinamis halaman web.' },
  prevPath:null, nextPath:'js-whereto'
},

'js-whereto': {
  courseId:'javascript', title:'JS Where To', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>Di Mana Menulis JavaScript?</h2>
<p>JavaScript bisa ditulis di 3 tempat berbeda dalam HTML.</p>
<h3>1. Internal JavaScript (dalam &lt;script&gt;)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">script</span>&gt;<br/>
  &nbsp;&nbsp;<span class="text-purple-600">alert</span>(<span class="text-green-600">"Halo!"</span>);<br/>
  &lt;/<span class="text-blue-600">script</span>&gt;
</div>
<h3>2. External JavaScript (file .js terpisah)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">script</span> <span class="text-purple-600">src</span>="<span class="text-green-600">script.js</span>"&gt;&lt;/<span class="text-blue-600">script</span>&gt;
</div>
<h3>3. Inline JavaScript</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  &lt;<span class="text-blue-600">button</span> <span class="text-purple-600">onclick</span>="<span class="text-green-600">alert('Halo!')</span>"&gt;Klik&lt;/<span class="text-blue-600">button</span>&gt;
</div>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <p class="text-orange-900"><strong>Best Practice:</strong> Letakkan tag &lt;script&gt; sebelum &lt;/body&gt; agar HTML dimuat lebih dulu, atau gunakan <code>defer</code> attribute.</p>
</div>`,
  code:`<!DOCTYPE html>
<html><head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 24px;
  background: #fffbeb;
}
.demo {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
  border: 1px solid #fde68a;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #92400e;
  text-transform: uppercase;
  margin-bottom: 8px;
}
button {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  margin: 4px;
}
button:hover {
  background: #d97706;
}

</style>
<!-- Internal JS di head dengan defer -->
<script defer>
  function fromHead() {
    document.getElementById('r1').textContent = 'Dari <script> di head (defer)!';
  }
</script>
</head><body>
<div class="demo">
  <div class="label">1. Internal JS (di head dengan defer)</div>
  <button onclick="fromHead()">Jalankan</button>
  <p id="r1" style="color:#92400e;margin-top:8px"></p>
</div>
<div class="demo">
  <div class="label">2. Inline JS (di atribut onclick)</div>
  <button onclick="document.getElementById('r2').textContent='Inline JS berjalan!'">Jalankan</button>
  <p id="r2" style="color:#92400e;margin-top:8px"></p>
</div>
<div class="demo">
  <div class="label">3. Internal JS (di akhir body - best practice)</div>
  <button onclick="fromBody()">Jalankan</button>
  <p id="r3" style="color:#92400e;margin-top:8px"></p>
</div>
<script>
  // Internal JS di akhir body
  function fromBody() {
    document.getElementById('r3').textContent = 'JS di akhir body berjalan!';
  }
</script>
</body>
</html>`,
  quiz:{ question:'Di mana posisi terbaik untuk meletakkan tag <script> agar tidak memblokir loading HTML?', options:['Di dalam <head>','Di awal <body>','Sebelum </body> atau gunakan defer','Di dalam <style>'], correctIndex:2, explanation:'Meletakkan script sebelum </body> atau menggunakan atribut defer memastikan HTML dimuat lebih dulu.' },
  prevPath:'js-intro', nextPath:'js-output'
},

'js-output': {
  courseId:'javascript', title:'JS Output', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Output</h2>
<p>JavaScript memiliki beberapa cara untuk menampilkan output/data.</p>
<h3>4 Cara Output JavaScript</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">// 1. Mengubah konten HTML</span><br/>
  document.<span class="text-blue-600">getElementById</span>(<span class="text-green-600">"demo"</span>).innerHTML = <span class="text-green-600">"Halo!"</span>;
  </div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">// 2. Menulis ke HTML</span><br/>
  document.<span class="text-blue-600">write</span>(<span class="text-green-600">"Halo!"</span>);
  </div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">// 3. Alert box</span><br/>
  <span class="text-purple-600">window</span>.<span class="text-blue-600">alert</span>(<span class="text-green-600">"Halo!"</span>);
  </div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">// 4. Console (untuk debugging)</span><br/>
  <span class="text-purple-600">console</span>.<span class="text-blue-600">log</span>(<span class="text-green-600">"Halo!"</span>);
  </div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body { font-family: Arial, sans-serif;
  padding: 24px;
  background: #fffbeb;
}
.demo {
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin: 12px 0;
  border: 1px solid #fde68a;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #92400e;
  text-transform: uppercase;
  margin-bottom: 8px;
}
button {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
button:hover {
  background: #d97706;
}
#output {
  color: #92400e;
  font-weight: bold;
  margin-top: 8px;
}

</style>
</head>
<body>
<div class="demo">
  <div class="label">1. innerHTML</div>
  <button onclick="document.getElementById('output').innerHTML = '<b>Halo dari innerHTML!</b>'">Coba</button>
  <div id="output"></div>
</div>
<div class="demo">
  <div class="label">2. console.log (buka DevTools F12)</div>
  <button onclick="console.log('Halo dari console!', {nama:'DevGrow', tahun:2024})">Log ke Console</button>
  <p style="color:#64748b;font-size:0.85rem;margin-top:8px">Buka F12 > Console untuk melihat output</p>
</div>
<div class="demo">
  <div class="label">3. Berbagai console methods</div>
  <button onclick="demoConsole()">Coba Console Methods</button>
</div>
<script>
  function demoConsole() {
    console.log('log: pesan biasa');
    console.warn('warn: peringatan');
    console.error('error: kesalahan');
    console.table([{nama:'Arif', nilai:90}, {nama:'Siti', nilai:85}]);
    console.group('Group');
    console.log('item 1');
    console.log('item 2');
    console.groupEnd();
    alert('Cek console (F12) untuk melihat semua output!');
  }
</script>
</body>
</html>`,
  quiz:{ question:'Method console mana yang paling sering digunakan untuk debugging?', options:['console.print()','console.log()','console.show()','console.display()'], correctIndex:1, explanation:'console.log() adalah method paling umum untuk menampilkan nilai variabel saat debugging.' },
  prevPath:'js-whereto', nextPath:'js-syntax'
},

'js-syntax': {
  courseId:'javascript', title:'JS Syntax', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Syntax</h2>
<p>Syntax adalah aturan penulisan kode JavaScript yang harus diikuti.</p>
<h3>Aturan Dasar</h3>
<ul>
  <li>JavaScript <strong>case-sensitive</strong>: <code>nama</code> berbeda dengan <code>Nama</code></li>
  <li>Statement diakhiri dengan titik koma <code>;</code> (opsional tapi direkomendasikan)</li>
  <li>Whitespace diabaikan (spasi, tab, baris baru)</li>
  <li>Komentar: <code>// satu baris</code> atau <code>/* multi baris */</code></li>
</ul>
<h3>Identifier (Nama Variabel)</h3>
<ul>
  <li>Harus dimulai dengan huruf, <code>_</code>, atau <code>$</code></li>
  <li>Tidak boleh dimulai dengan angka</li>
  <li>Tidak boleh menggunakan reserved words (<code>let</code>, <code>if</code>, dll)</li>
  <li>Gunakan camelCase: <code>namaLengkap</code>, <code>totalHarga</code></li>
</ul>
<h3>Literal vs Identifier</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-slate-400">// Literal = nilai langsung</span><br/>
  <span class="text-orange-600">42</span>, <span class="text-green-600">"halo"</span>, <span class="text-blue-600">true</span><br/><br/>
  <span class="text-slate-400">// Identifier = nama variabel/fungsi</span><br/>
  <span class="text-yellow-600">namaUser</span>, <span class="text-yellow-600">hitungTotal</span>
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: 'Courier New', monospace;
  padding: 24px;
  background: #1e1e2e;
  color: #e2e8f0;
}
.line {
  margin: 4px 0;
  font-size: 0.9rem;
}
.comment {
  color: #475569;
}
.keyword {
  color: #a78bfa;
}
.string {
  color: #34d399;
}
.number {
  color: #fb923c;
}
.func {
  color: #60a5fa;
}
.var {
  color: #fbbf24;
}
.output {
  background: #0d1117;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
  border: 1px solid #334155;
}
.out-label {
  color: #475569;
  font-size: 0.75rem;
  margin-bottom: 8px;
}

</style>
</head>
<body>
<div class="line"><span class="comment">// JavaScript Syntax Demo</span></div>
<div class="line"><span class="comment">// 1. Variabel dengan let dan const</span></div>
<div class="line"><span class="keyword">let</span> <span class="var">nama</span> = <span class="string">"DevGrow"</span>;</div>
<div class="line"><span class="keyword">const</span> <span class="var">tahun</span> = <span class="number">2024</span>;</div>
<div class="line"></div>
<div class="line"><span class="comment">// 2. Fungsi</span></div>
<div class="line"><span class="keyword">function</span> <span class="func">sapa</span>(<span class="var">nama</span>) {</div>
<div class="line">&nbsp;&nbsp;<span class="keyword">return</span> <span class="string">"Halo, "</span> + <span class="var">nama</span> + <span class="string">"!"</span>;</div>
<div class="line">}</div>
<div class="line"></div>
<div class="line"><span class="comment">// 3. Kondisi</span></div>
<div class="line"><span class="keyword">if</span> (<span class="var">tahun</span> >= <span class="number">2024</span>) {</div>
<div class="line">&nbsp;&nbsp;<span class="func">console</span>.<span class="func">log</span>(<span class="string">"Tahun modern!"</span>);</div>
<div class="line">}</div>
<div class="output" id="out">
  <div class="out-label">OUTPUT:</div>
</div>
<script>
  let nama = "DevGrow";
  const tahun = 2024;
  function sapa(n) { return "Halo, " + n + "!"; }
  const out = document.getElementById('out');
  out.innerHTML += '<div style="color:#34d399">' + sapa(nama) + '</div>';
  out.innerHTML += '<div style="color:#fb923c">Tahun: ' + tahun + '</div>';
  if (tahun >= 2024) out.innerHTML += '<div style="color:#a78bfa">Tahun modern!</div>';
</script>
</body>
</html>`,
  quiz:{ question:'Konvensi penamaan variabel yang direkomendasikan di JavaScript adalah?', options:['snake_case (nama_lengkap)','PascalCase (NamaLengkap)','camelCase (namaLengkap)','UPPERCASE (NAMALENGKAP)'], correctIndex:2, explanation:'camelCase adalah konvensi standar untuk variabel dan fungsi di JavaScript.' },
  prevPath:'js-output', nextPath:'js-statements'
},

'js-statements': {
  courseId:'javascript', title:'JS Statements', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Statements</h2>
<p>Program JavaScript adalah kumpulan <strong>statements</strong> (pernyataan) yang dieksekusi oleh browser secara berurutan.</p>
<h3>Komponen Statement</h3>
<ul>
  <li><strong>Values</strong> - nilai (literal atau variabel)</li>
  <li><strong>Operators</strong> - operator (+, -, =, dll)</li>
  <li><strong>Expressions</strong> - kombinasi nilai dan operator</li>
  <li><strong>Keywords</strong> - kata kunci (let, if, for, dll)</li>
  <li><strong>Comments</strong> - komentar yang diabaikan</li>
</ul>
<h3>Semicolon</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-purple-600">let</span> a = <span class="text-orange-600">5</span>;<br/>
  <span class="text-purple-600">let</span> b = <span class="text-orange-600">10</span>;<br/>
  <span class="text-purple-600">let</span> c = a + b; <span class="text-slate-400">// c = 15</span>
</div>
<h3>Code Block</h3>
<p>Statements bisa dikelompokkan dalam blok <code>{}</code>:</p>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  {<br/>
  &nbsp;&nbsp;<span class="text-purple-600">let</span> x = <span class="text-orange-600">1</span>;<br/>
  &nbsp;&nbsp;<span class="text-purple-600">let</span> y = <span class="text-orange-600">2</span>;<br/>
  }
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 24px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #fde68a;
}
.result {
  background: #fef3c7;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  font-family: monospace;
  color: #92400e;
}
button {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 12px;
}

</style>
</head>
<body>
<div class="card">
  <h2 style="color:#92400e;margin-bottom:16px">JS Statements Demo</h2>
  <button onclick="runStatements()">Jalankan Semua Statements</button>
  <div class="result" id="result">Klik tombol untuk melihat hasil...</div>
</div>
<script>
function runStatements() {
  let output = '';

  // Statement 1: Deklarasi variabel
  let nama = "Arif";
  let umur = 25;
  output += '1. Variabel: nama=' + nama + ', umur=' + umur + '\n';

  // Statement 2: Ekspresi
  let total = umur * 2 + 10;
  output += '2. Ekspresi: umur*2+10 = ' + total + '\n';

  // Statement 3: Kondisi
  if (umur >= 18) {
    output += '3. Kondisi: Sudah dewasa\n';
  }

  // Statement 4: Loop
  let angka = '';
  for (let i = 1; i <= 5; i++) {
    angka += i + ' ';
  }
  output += '4. Loop: ' + angka + '\n';

  // Statement 5: Fungsi
  function salam(n) { return 'Halo, ' + n + '!'; }
  output += '5. Fungsi: ' + salam(nama);

  document.getElementById('result').textContent = output;
}
</script>
</body>
</html>`,
  quiz:{ question:'Apa yang dimaksud dengan "code block" di JavaScript?', options:['Satu baris kode','Kumpulan statements dalam kurung kurawal {}','Sebuah fungsi','Sebuah variabel'], correctIndex:1, explanation:'Code block adalah kumpulan statements yang dikelompokkan dalam kurung kurawal {}.' },
  prevPath:'js-syntax', nextPath:'js-comments'
},

'js-comments': {
  courseId:'javascript', title:'JS Comments', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Comments</h2>
<p>Komentar digunakan untuk menjelaskan kode dan diabaikan saat eksekusi.</p>
<h3>Single Line Comment</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-slate-400">// Ini adalah komentar satu baris</span><br/>
  <span class="text-purple-600">let</span> x = <span class="text-orange-600">5</span>; <span class="text-slate-400">// komentar di akhir baris</span>
</div>
<h3>Multi Line Comment</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-slate-400">/*<br/>
  &nbsp;* Ini komentar<br/>
  &nbsp;* multi baris<br/>
  &nbsp;*/</span>
</div>
<h3>JSDoc Comment</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-slate-400">/**<br/>
  &nbsp;* @param {string} nama - Nama pengguna<br/>
  &nbsp;* @returns {string} Pesan salam<br/>
  &nbsp;*/</span><br/>
  <span class="text-purple-600">function</span> <span class="text-blue-600">sapa</span>(nama) { ... }
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 24px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #fde68a;
}
button {
  background: #f59e0b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
}
#result {
  background: #fef3c7;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  font-family: monospace;
  color: #92400e;
  white-space: pre;
}

</style>
</head>
<body>
<div class="card">
  <h2 style="color:#92400e;margin-bottom:16px">JS Comments Demo</h2>
  <button onclick="demo()">Jalankan</button>
  <div id="result">Klik tombol...</div>
</div>
<script>
// Ini adalah single-line comment

/*
  Multi-line comment:
  Fungsi di bawah menghitung luas persegi panjang
*/

/**
 * Menghitung luas persegi panjang
 * @param {number} panjang - Panjang persegi panjang
 * @param {number} lebar - Lebar persegi panjang
 * @returns {number} Luas persegi panjang
 */
function hitungLuas(panjang, lebar) {
  return panjang * lebar; // rumus luas
}

function demo() {
  let p = 10; // panjang
  let l = 5;  // lebar
  let luas = hitungLuas(p, l);
  document.getElementById('result').textContent =
    'Panjang: ' + p + '\n' +
    'Lebar: ' + l + '\n' +
    'Luas: ' + luas;
}
</script>
</body>
</html>`,
  quiz:{ question:'Bagaimana cara menulis komentar satu baris di JavaScript?', options:['# komentar','<!-- komentar -->','// komentar','/* komentar */'], correctIndex:2, explanation:'// digunakan untuk komentar satu baris di JavaScript.' },
  prevPath:'js-statements', nextPath:'js-variables'
},

};
export const jsLessonsData2: Record<string, any> = {

'js-variables': {
  courseId:'javascript', title:'JS Variables', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Variables</h2>
<p>Variable adalah wadah untuk menyimpan data. Di JavaScript ada 3 cara mendeklarasikan variable: <code>var</code>, <code>let</code>, dan <code>const</code>.</p>
<h3>Cara Deklarasi</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-purple-600">var</span> nama = <span class="text-green-600">"Arif"</span>;<br/>
  <span class="text-purple-600">let</span> umur = <span class="text-orange-600">25</span>;<br/>
  <span class="text-purple-600">const</span> PI = <span class="text-orange-600">3.14</span>;
</div>
<h3>Aturan Penamaan</h3>
<ul>
  <li>Harus dimulai dengan huruf, <code>_</code>, atau <code>$</code></li>
  <li>Case-sensitive: <code>nama</code> berbeda dengan <code>Nama</code></li>
  <li>Tidak boleh menggunakan reserved words (<code>let</code>, <code>if</code>, dll)</li>
  <li>Gunakan camelCase: <code>namaLengkap</code></li>
</ul>
<h3>var vs let vs const</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <p class="text-orange-900"><strong>var</strong> - function scoped, bisa re-declare (hindari di kode modern)</p>
  <p class="text-orange-900 mt-1"><strong>let</strong> - block scoped, bisa diubah nilainya</p>
  <p class="text-orange-900 mt-1"><strong>const</strong> - block scoped, tidak bisa diubah nilainya</p>
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.output {
  background:white;
  border-radius:12px;
  padding:16px;
  margin:8px 0;
  border:1px solid #fde68a;
  font-family:monospace;
  font-size:0.9rem;
}
.label {
  font-size:0.7rem;
  font-weight:bold;
  color:#92400e;
  text-transform:uppercase;
  margin-bottom:6px;
}

</style></head>
<body>
<script>
// var - function scoped
var kota = "Jakarta";
var kota = "Bandung"; // bisa re-declare

// let - block scoped
let nama = "Arif";
let umur = 25;
umur = 26; // bisa diubah

// const - tidak bisa diubah
const PI = 3.14159;
const NAMA_APP = "DevGrow";

// Multiple assignment
let x = 1, y = 2, z = 3;

document.body.innerHTML += '<div class="output"><div class="label">var</div>kota = "' + kota + '" (re-declared)</div>';
document.body.innerHTML += '<div class="output"><div class="label">let</div>nama = "' + nama + '", umur = ' + umur + '</div>';
document.body.innerHTML += '<div class="output"><div class="label">const</div>PI = ' + PI + ', NAMA_APP = "' + NAMA_APP + '"</div>';
document.body.innerHTML += '<div class="output"><div class="label">multiple</div>x=' + x + ', y=' + y + ', z=' + z + '</div>';
</script>
</body>
</html>`,
  quiz:{question:'Keyword mana yang digunakan untuk variable yang nilainya tidak boleh berubah?',options:['var','let','const','fixed'],correctIndex:2,explanation:'const digunakan untuk nilai yang tidak berubah (konstanta).'},
  prevPath:'js-comments', nextPath:'js-let'
},

'js-let': {
  courseId:'javascript', title:'JS Let', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Let</h2>
<p><code>let</code> diperkenalkan di ES6 (2015) sebagai pengganti <code>var</code> yang lebih aman.</p>
<h3>Keunggulan let vs var</h3>
<ul>
  <li><strong>Block Scope</strong> - hanya ada di dalam blok <code>{}</code></li>
  <li><strong>No Re-declaration</strong> - tidak bisa dideklarasikan ulang di scope yang sama</li>
  <li><strong>No Hoisting</strong> - tidak bisa digunakan sebelum dideklarasikan</li>
</ul>
<h3>Block Scope</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  {<br/>
  &nbsp;&nbsp;<span class="text-purple-600">let</span> x = <span class="text-orange-600">10</span>;<br/>
  &nbsp;&nbsp;console.log(x); <span class="text-slate-400">// 10</span><br/>
  }<br/>
  console.log(x); <span class="text-red-600">// ReferenceError!</span>
</div>
<div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4">
  <p class="text-indigo-900"><strong>Best Practice:</strong> Gunakan <code>let</code> untuk semua variable yang nilainya bisa berubah, dan <code>const</code> untuk yang tidak berubah. Hindari <code>var</code>.</p>
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.output {
  background:white;
  border-radius:12px;
  padding:14px;
  margin:8px 0;
  border:1px solid #fde68a;
  font-family:monospace;
  font-size:0.85rem;
  color:#1e293b;
}
.error {
  border-color:#fca5a5;
  background:#fef2f2;
  color:#dc2626;
}
.label {
  font-size:0.7rem;
  font-weight:bold;
  color:#92400e;
  text-transform:uppercase;
  margin-bottom:4px;
}

</style></head>
<body>
<script>
// Block scope
let hasil = "";
{
  let blockVar = "Saya hanya ada di dalam blok";
  hasil += "Di dalam blok: " + blockVar;
}
// blockVar tidak bisa diakses di sini

// Loop scope
for (let i = 0; i < 3; i++) {
  // i hanya ada di dalam loop
}
// i tidak bisa diakses di sini

// let bisa diubah nilainya
let skor = 0;
skor = 100;
skor += 50;

// Temporal Dead Zone
// console.log(tdz); // Error! tidak bisa sebelum deklarasi
let tdz = "sekarang bisa";

document.body.innerHTML = '<div class="output"><div class="label">Block Scope</div>' + hasil + '</div>';
document.body.innerHTML += '<div class="output"><div class="label">let bisa diubah</div>skor = ' + skor + '</div>';
document.body.innerHTML += '<div class="output"><div class="label">Temporal Dead Zone</div>tdz = "' + tdz + '"</div>';
document.body.innerHTML += '<div class="output error"><div class="label">Error jika akses blockVar di luar blok</div>ReferenceError: blockVar is not defined</div>';
</script>
</body>
</html>`,
  quiz:{question:'Apa yang terjadi jika kamu mencoba mengakses variable let di luar blok {}?',options:['Mengembalikan undefined','Mengembalikan null','ReferenceError','Mengembalikan 0'],correctIndex:2,explanation:'let adalah block-scoped, mengaksesnya di luar blok akan menghasilkan ReferenceError.'},
  prevPath:'js-variables', nextPath:'js-const'
},

'js-const': {
  courseId:'javascript', title:'JS Const', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Const</h2>
<p><code>const</code> digunakan untuk mendeklarasikan variable yang nilainya tidak bisa diubah (re-assign).</p>
<h3>Aturan const</h3>
<ul>
  <li>Harus diinisialisasi saat deklarasi</li>
  <li>Tidak bisa di-reassign</li>
  <li>Block scoped (sama seperti let)</li>
</ul>
<h3>const dengan Object dan Array</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>Penting!</strong> const mencegah re-assignment, tapi TIDAK mencegah modifikasi isi object/array.</p>
</div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-purple-600">const</span> user = { nama: <span class="text-green-600">"Arif"</span> };<br/>
  user.nama = <span class="text-green-600">"Budi"</span>; <span class="text-slate-400">// OK! modifikasi property</span><br/>
  user = {}; <span class="text-red-600">// Error! re-assignment</span>
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.output {
  background:white;
  border-radius:12px;
  padding:14px;
  margin:8px 0;
  border:1px solid #fde68a;
  font-family:monospace;
  font-size:0.85rem;
  color:#1e293b;
}
.label {
  font-size:0.7rem;
  font-weight:bold;
  color:#92400e;
  text-transform:uppercase;
  margin-bottom:4px;
}

</style></head>
<body>
<script>
// const untuk nilai primitif
const PI = 3.14159;
const NAMA_APP = "DevGrow";
const MAX_USERS = 100;

// const dengan object - property BISA diubah
const user = { nama: "Arif", umur: 25 };
user.nama = "Budi"; // OK
user.kota = "Jakarta"; // OK - tambah property baru

// const dengan array - isi BISA diubah
const buah = ["apel", "mangga"];
buah.push("jeruk"); // OK
buah[0] = "pisang"; // OK

document.body.innerHTML = '<div class="output"><div class="label">const primitif</div>PI=' + PI + ', MAX_USERS=' + MAX_USERS + '</div>';
document.body.innerHTML += '<div class="output"><div class="label">const object (property bisa diubah)</div>' + JSON.stringify(user) + '</div>';
document.body.innerHTML += '<div class="output"><div class="label">const array (isi bisa diubah)</div>' + JSON.stringify(buah) + '</div>';
</script>
</body>
</html>`,
  quiz:{question:'Manakah yang VALID dengan const?',options:['const x = 5; x = 10;','const arr = []; arr.push(1);','const obj; obj = {};','const y;'],correctIndex:1,explanation:'const mencegah re-assignment, tapi isi array/object tetap bisa dimodifikasi.'},
  prevPath:'js-let', nextPath:'js-types'
},

'js-types': {
  courseId:'javascript', title:'JS Data Types', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Data Types</h2>
<p>JavaScript memiliki 8 tipe data. 7 tipe primitif dan 1 tipe object.</p>
<h3>Tipe Primitif</h3>
<ul>
  <li><code>String</code> - teks: <code>"Hello"</code>, <code>'World'</code></li>
  <li><code>Number</code> - angka: <code>42</code>, <code>3.14</code></li>
  <li><code>BigInt</code> - angka sangat besar: <code>9007199254740991n</code></li>
  <li><code>Boolean</code> - true/false</li>
  <li><code>Undefined</code> - variable belum diberi nilai</li>
  <li><code>Null</code> - nilai kosong yang disengaja</li>
  <li><code>Symbol</code> - identifier unik</li>
</ul>
<h3>Tipe Object</h3>
<ul>
  <li><code>Object</code> - <code>{ key: value }</code></li>
  <li><code>Array</code> - <code>[1, 2, 3]</code></li>
  <li><code>Function</code> - <code>function() {}</code></li>
</ul>
<h3>typeof Operator</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-purple-600">typeof</span> <span class="text-green-600">"Hello"</span> <span class="text-slate-400">// "string"</span><br/>
  <span class="text-purple-600">typeof</span> <span class="text-orange-600">42</span> <span class="text-slate-400">// "number"</span><br/>
  <span class="text-purple-600">typeof</span> <span class="text-blue-600">true</span> <span class="text-slate-400">// "boolean"</span>
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.output {
  background:white;
  border-radius:12px;
  padding:14px;
  margin:6px 0;
  border:1px solid #fde68a;
  font-family:monospace;
  font-size:0.85rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.type {
  background:#fef3c7;
  color:#92400e;
  padding:2px 8px;
  border-radius:4px;
  font-size:0.75rem;
  font-weight:bold;
}

</style></head>
<body>
<script>
const types = [
  { val: "Hello DevGrow",    label: '"Hello DevGrow"' },
  { val: 42,                 label: '42' },
  { val: 3.14,               label: '3.14' },
  { val: true,               label: 'true' },
  { val: undefined,          label: 'undefined' },
  { val: null,               label: 'null' },
  { val: {nama:"Arif"},      label: '{nama:"Arif"}' },
  { val: [1,2,3],            label: '[1,2,3]' },
  { val: function(){},       label: 'function(){}' },
];
types.forEach(t => {
  document.body.innerHTML += '<div class="output"><span>' + t.label + '</span><span class="type">typeof: ' + typeof t.val + '</span></div>';
});
</script>
</body>
</html>`,
  quiz:{question:'Apa hasil dari typeof null di JavaScript?',options:['"null"','"undefined"','"object"','"empty"'],correctIndex:2,explanation:'typeof null mengembalikan "object" - ini adalah bug lama di JavaScript yang tetap dipertahankan untuk kompatibilitas.'},
  prevPath:'js-const', nextPath:'js-operators'
},

'js-operators': {
  courseId:'javascript', title:'JS Operators', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JavaScript Operators</h2>
<p>Operator digunakan untuk melakukan operasi pada variable dan nilai.</p>
<h3>Arithmetic Operators</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  + &nbsp;- &nbsp;* &nbsp;/ &nbsp;% &nbsp;** &nbsp;++ &nbsp;--
</div>
<h3>Assignment Operators</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  = &nbsp;+= &nbsp;-= &nbsp;*= &nbsp;/= &nbsp;%= &nbsp;**=
</div>
<h3>Comparison Operators</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  == &nbsp;=== &nbsp;!= &nbsp;!== &nbsp;&gt; &nbsp;&lt; &nbsp;&gt;= &nbsp;&lt;=
</div>
<h3>Logical Operators</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  &amp;&amp; (AND) &nbsp;|| (OR) &nbsp;! (NOT)
</div>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4">
  <p class="text-orange-900"><strong>== vs ===</strong>: == membandingkan nilai saja, === membandingkan nilai DAN tipe. Selalu gunakan ===.</p>
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.section {
  background:white;
  border-radius:12px;
  padding:16px;
  margin:10px 0;
  border:1px solid #fde68a;
}
.label {
  font-size:0.7rem;
  font-weight:bold;
  color:#92400e;
  text-transform:uppercase;
  margin-bottom:8px;
}
.row {
  font-family:monospace;
  font-size:0.85rem;
  color:#1e293b;
  padding:3px 0;
  border-bottom:1px solid #f9fafb;
}

</style></head>
<body>
<script>
let a = 10, b = 3;
document.body.innerHTML += '<div class="section"><div class="label">Arithmetic</div>' +
  '<div class="row">a + b = ' + (a+b) + '</div>' +
  '<div class="row">a - b = ' + (a-b) + '</div>' +
  '<div class="row">a * b = ' + (a*b) + '</div>' +
  '<div class="row">a / b = ' + (a/b).toFixed(2) + '</div>' +
  '<div class="row">a % b = ' + (a%b) + ' (sisa bagi)</div>' +
  '<div class="row">a ** b = ' + (a**b) + ' (pangkat)</div>' +
  '</div>';

document.body.innerHTML += '<div class="section"><div class="label">Comparison</div>' +
  '<div class="row">5 == "5" = ' + (5=="5") + ' (loose)</div>' +
  '<div class="row">5 === "5" = ' + (5==="5") + ' (strict)</div>' +
  '<div class="row">5 !== "5" = ' + (5!=="5") + '</div>' +
  '<div class="row">10 > 3 = ' + (10>3) + '</div>' +
  '</div>';

document.body.innerHTML += '<div class="section"><div class="label">Logical</div>' +
  '<div class="row">true && false = ' + (true&&false) + '</div>' +
  '<div class="row">true || false = ' + (true||false) + '</div>' +
  '<div class="row">!true = ' + (!true) + '</div>' +
  '</div>';
</script>
</body>
</html>`,
  quiz:{question:'Apa perbedaan == dan === di JavaScript?',options:['Tidak ada perbedaan','== lebih cepat','=== membandingkan nilai DAN tipe data','== hanya untuk angka'],correctIndex:2,explanation:'=== (strict equality) membandingkan nilai dan tipe, sedangkan == (loose equality) hanya nilai dengan konversi tipe otomatis.'},
  prevPath:'js-types', nextPath:'js-ifelse'
},

// ── IF ELSE ──────────────────────────────────
'js-ifelse': {
  courseId:'javascript', title:'JS If Else', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS If Else</h2>
<p>Pernyataan kondisional digunakan untuk mengeksekusi kode berdasarkan kondisi tertentu.</p>
<h3>Sintaks</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-purple-600">if</span> (kondisi) {<br/>
  &nbsp;&nbsp;<span class="text-slate-400">// kode jika true</span><br/>
  } <span class="text-purple-600">else if</span> (kondisi2) {<br/>
  &nbsp;&nbsp;<span class="text-slate-400">// kode jika kondisi2 true</span><br/>
  } <span class="text-purple-600">else</span> {<br/>
  &nbsp;&nbsp;<span class="text-slate-400">// kode jika semua false</span><br/>
  }
</div>
<h3>Ternary Operator</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">let</span> result = kondisi ? <span class="text-green-600">'true'</span> : <span class="text-green-600">'false'</span>;
</div>
<h3>Switch Statement</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-purple-600">switch</span>(nilai) {<br/>
  &nbsp;&nbsp;<span class="text-purple-600">case</span> 1: ...; <span class="text-purple-600">break</span>;<br/>
  &nbsp;&nbsp;<span class="text-purple-600">default</span>: ...;<br/>
  }
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.result {
  background:white;
  border-radius:10px;
  padding:14px;
  margin:8px 0;
  border-left:4px solid #f59e0b;
  font-size:0.9rem;
  color:#334155;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}

</style>
</head>
<body>
<script>
const score = 75;
const hour = new Date().getHours();
const day = new Date().getDay();

// if else
let grade;
if (score >= 90) grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else if (score >= 60) grade = 'D';
else grade = 'F';

// ternary
const status = score >= 70 ? 'LULUS' : 'TIDAK LULUS';

// switch
const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
let dayType;
switch(day) {
  case 0: case 6: dayType = 'Weekend'; break;
  default: dayType = 'Weekday';
}

document.write('<div class="label">if else - nilai: ' + score + '</div>');
document.write('<div class="result">Grade: <strong>' + grade + '</strong></div>');
document.write('<div class="label">Ternary operator</div>');
document.write('<div class="result">Status: <strong>' + status + '</strong></div>');
document.write('<div class="label">Switch statement</div>');
document.write('<div class="result">Hari ini: <strong>' + days[day] + ' (' + dayType + ')</strong></div>');
document.write('<div class="label">Greeting berdasarkan jam (' + hour + ':00)</div>');
document.write('<div class="result"><strong>' + (hour < 12 ? 'Selamat Pagi!' : hour < 17 ? 'Selamat Siang!' : 'Selamat Malam!') + '</strong></div>');
</script>
</body>
</html>`,
  quiz:{question:'Apa output dari: let x = 5 > 3 ? "ya" : "tidak"?',options:['"tidak"','"ya"','true','undefined'],correctIndex:1,explanation:'5 > 3 adalah true, sehingga ternary mengembalikan nilai pertama yaitu "ya".'},
  prevPath:'js-operators', nextPath:'js-loops'
},

// ── LOOPS ────────────────────────────────────
'js-loops': {
  courseId:'javascript', title:'JS Loops', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Loops</h2>
<p>Loop digunakan untuk mengeksekusi blok kode berulang kali.</p>
<h3>Jenis Loop</h3>
<ul>
  <li><code>for</code> - loop dengan counter</li>
  <li><code>while</code> - loop selama kondisi true</li>
  <li><code>do...while</code> - eksekusi minimal sekali</li>
  <li><code>for...of</code> - iterasi nilai array/iterable</li>
  <li><code>for...in</code> - iterasi key object</li>
</ul>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-purple-600">for</span> (<span class="text-blue-600">let</span> i = 0; i &lt; 5; i++) {<br/>
  &nbsp;&nbsp;console.log(i);<br/>
  }
</div>
<h3>break dan continue</h3>
<ul>
  <li><code>break</code> - keluar dari loop</li>
  <li><code>continue</code> - skip iterasi saat ini</li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.box {
  background:white;
  border-radius:10px;
  padding:14px;
  margin:8px 0;
  font-size:0.85rem;
  color:#334155;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.tag {
  display:inline-block;
  background:#fef3c7;
  color:#92400e;
  padding:2px 8px;
  border-radius:4px;
  margin:2px;
  font-weight:bold;
}

</style>
</head>
<body>
<script>
// for loop
let forResult = '';
for (let i = 1; i <= 5; i++) forResult += '<span class="tag">' + i + '</span>';
document.write('<div class="label">for loop (1-5)</div><div class="box">' + forResult + '</div>');

// while loop
let w = 1, whileResult = '';
while (w <= 5) { whileResult += '<span class="tag">' + (w*w) + '</span>'; w++; }
document.write('<div class="label">while loop (kuadrat 1-5)</div><div class="box">' + whileResult + '</div>');

// for...of
const fruits = ['Apel','Mangga','Jeruk','Pisang'];
let ofResult = '';
for (const fruit of fruits) ofResult += '<span class="tag">' + fruit + '</span>';
document.write('<div class="label">for...of array</div><div class="box">' + ofResult + '</div>');

// for...in
const person = {nama:'Arif', umur:25, kota:'Jakarta'};
let inResult = '';
for (const key in person) inResult += '<span class="tag">' + key + ': ' + person[key] + '</span>';
document.write('<div class="label">for...in object</div><div class="box">' + inResult + '</div>');

// continue & break
let skipResult = '';
for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  if (i % 2 === 0) continue;
  skipResult += '<span class="tag">' + i + '</span>';
}
document.write('<div class="label">continue (skip genap) + break (stop di 7)</div><div class="box">' + skipResult + '</div>');
</script>
</body>
</html>`,
  quiz:{question:'Apa perbedaan for...of dan for...in?',options:['Tidak ada perbedaan','for...of iterasi nilai, for...in iterasi key/index','for...in lebih cepat','for...of hanya untuk string'],correctIndex:1,explanation:'for...of mengiterasi nilai dari iterable (array, string), for...in mengiterasi key/properti dari object.'},
  prevPath:'js-ifelse', nextPath:'js-strings'
},

// ── STRINGS ──────────────────────────────────
'js-strings': {
  courseId:'javascript', title:'JS Strings', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Strings</h2>
<p>String adalah urutan karakter yang digunakan untuk menyimpan teks.</p>
<h3>Membuat String</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">let</span> s1 = <span class="text-green-600">'single quote'</span>;<br/>
  <span class="text-blue-600">let</span> s2 = <span class="text-green-600">"double quote"</span>;<br/>
  <span class="text-blue-600">let</span> s3 = <span class="text-green-600">&#96;template literal&#96;</span>;
</div>
<h3>Method String Penting</h3>
<ul>
  <li><code>length</code> - panjang string</li>
  <li><code>toUpperCase()</code> / <code>toLowerCase()</code></li>
  <li><code>trim()</code> - hapus spasi di awal/akhir</li>
  <li><code>includes()</code> - cek apakah mengandung substring</li>
  <li><code>indexOf()</code> - posisi substring</li>
  <li><code>slice(start, end)</code> - ambil bagian string</li>
  <li><code>replace()</code> - ganti substring</li>
  <li><code>split()</code> - pecah jadi array</li>
  <li><code>padStart()</code> / <code>padEnd()</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.row {
  background:white;
  border-radius:8px;
  padding:10px 14px;
  margin:6px 0;
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:0.85rem;
}
.method {
  color:#6366f1;
  font-weight:bold;
  font-family:monospace;
}
.val {
  color:#059669;
  font-weight:bold;
}

</style>
</head>
<body>
<script>
const str = "  Hello, JavaScript World!  ";
const clean = str.trim();
const rows = [
  ['Original', '"' + str + '"'],
  ['trim()', '"' + clean + '"'],
  ['length', clean.length],
  ['toUpperCase()', clean.toUpperCase()],
  ['toLowerCase()', clean.toLowerCase()],
  ['includes("Java")', clean.includes("Java")],
  ['indexOf("World")', clean.indexOf("World")],
  ['slice(7, 17)', clean.slice(7, 17)],
  ['replace("World","Dunia")', clean.replace("World","Dunia")],
  ['split(", ")', JSON.stringify(clean.split(", "))],
  ['Template literal', "Halo, " + clean.split(" ")[1] + "!"],
  ['"5".padStart(3,"0")', "5".padStart(3,"0")],
];
rows.forEach(([m,v]) => {
  document.write('<div class="row"><span class="method">' + m + '</span><span class="val">' + v + '</span></div>');
});
</script>
</body>
</html>`,
  quiz:{question:'Apa output dari "JavaScript".slice(0, 4)?',options:['"Java"','"Script"','"Java"','"avas"'],correctIndex:0,explanation:'slice(0, 4) mengambil karakter dari index 0 hingga 3 (tidak termasuk 4), yaitu "Java".'},
  prevPath:'js-loops', nextPath:'js-numbers'
},

// ── NUMBERS ──────────────────────────────────
'js-numbers': {
  courseId:'javascript', title:'JS Numbers', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Numbers</h2>
<p>JavaScript hanya memiliki satu tipe number - semua angka disimpan sebagai floating point 64-bit.</p>
<h3>Tipe Angka Khusus</h3>
<ul>
  <li><code>Infinity</code> - tak terhingga</li>
  <li><code>-Infinity</code> - negatif tak terhingga</li>
  <li><code>NaN</code> - Not a Number</li>
</ul>
<h3>Method Number</h3>
<ul>
  <li><code>toFixed(n)</code> - desimal n digit</li>
  <li><code>toString()</code> - konversi ke string</li>
  <li><code>parseInt()</code> - konversi ke integer</li>
  <li><code>parseFloat()</code> - konversi ke float</li>
  <li><code>isNaN()</code> - cek apakah NaN</li>
  <li><code>isFinite()</code> - cek apakah finite</li>
  <li><code>Number.MAX_SAFE_INTEGER</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.row {
  background:white;
  border-radius:8px;
  padding:10px 14px;
  margin:6px 0;
  display:flex;
  justify-content:space-between;
  font-size:0.85rem;
}
.method {
  color:#6366f1;
  font-weight:bold;
  font-family:monospace;
}
.val {
  color:#059669;
  font-weight:bold;
}

</style>
</head>
<body>
<script>
const rows = [
  ['typeof 42', typeof 42],
  ['typeof 3.14', typeof 3.14],
  ['10 / 0', 10/0],
  ['"abc" * 2', "abc"*2],
  ['isNaN("abc")', isNaN("abc")],
  ['isNaN(42)', isNaN(42)],
  ['parseInt("42px")', parseInt("42px")],
  ['parseFloat("3.14abc")', parseFloat("3.14abc")],
  ['(3.14159).toFixed(2)', (3.14159).toFixed(2)],
  ['(255).toString(16)', (255).toString(16)],
  ['(255).toString(2)', (255).toString(2)],
  ['Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER],
  ['0.1 + 0.2', 0.1 + 0.2],
  ['(0.1+0.2).toFixed(1)', (0.1+0.2).toFixed(1)],
];
rows.forEach(([m,v]) => {
  document.write('<div class="row"><span class="method">' + m + '</span><span class="val">' + v + '</span></div>');
});
</script>
</body>
</html>`,
  quiz:{question:'Apa hasil dari parseInt("42abc")?',options:['NaN','42','Error','"42abc"'],correctIndex:1,explanation:'parseInt() membaca angka dari awal string dan berhenti saat menemukan karakter non-angka, menghasilkan 42.'},
  prevPath:'js-strings', nextPath:'js-functions'
},

// ── FUNCTIONS ────────────────────────────────
'js-functions': {
  courseId:'javascript', title:'JS Functions', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Functions</h2>
<p>Function adalah blok kode yang dapat dipanggil berulang kali.</p>
<h3>Cara Membuat Function</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">// Function Declaration</span><br/>
  <span class="text-purple-600">function</span> <span class="text-yellow-600">greet</span>(name) {<br/>
  &nbsp;&nbsp;<span class="text-purple-600">return</span> <span class="text-green-600">"Halo, " + name</span>;<br/>
  }
</div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">// Function Expression</span><br/>
  <span class="text-blue-600">const</span> greet = <span class="text-purple-600">function</span>(name) { ... };
</div>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-slate-400">// Arrow Function</span><br/>
  <span class="text-blue-600">const</span> greet = (name) =&gt; <span class="text-green-600">"Halo, " + name</span>;
</div>
<h3>Default Parameter</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-purple-600">function</span> greet(name = <span class="text-green-600">"Dunia"</span>) { ... }
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.result {
  color:#334155;
  font-size:0.9rem;
}
code {
  background:#fef3c7;
  padding:2px 6px;
  border-radius:4px;
  font-size:0.85rem;
}

</style>
</head>
<body>
<script>
// Function declaration
function tambah(a, b) { return a + b; }

// Arrow function
const kali = (a, b) => a * b;

// Default parameter
function sapa(nama = "Dunia") { return "Halo, " + nama + "!"; }

// Higher-order function
function operasi(a, b, fn) { return fn(a, b); }

// Recursive
function faktorial(n) { return n <= 1 ? 1 : n * faktorial(n-1); }

// IIFE
const hasil = (function() { return "Langsung dieksekusi!"; })();

document.write('<div class="card"><div class="label">Function Declaration</div><div class="result">tambah(5, 3) = <code>' + tambah(5,3) + '</code></div></div>');
document.write('<div class="card"><div class="label">Arrow Function</div><div class="result">kali(4, 6) = <code>' + kali(4,6) + '</code></div></div>');
document.write('<div class="card"><div class="label">Default Parameter</div><div class="result">sapa() = <code>' + sapa() + '</code> | sapa("Arif") = <code>' + sapa("Arif") + '</code></div></div>');
document.write('<div class="card"><div class="label">Higher-Order Function</div><div class="result">operasi(10, 5, tambah) = <code>' + operasi(10,5,tambah) + '</code></div></div>');
document.write('<div class="card"><div class="label">Recursive (Faktorial)</div><div class="result">faktorial(5) = <code>' + faktorial(5) + '</code></div></div>');
document.write('<div class="card"><div class="label">IIFE</div><div class="result"><code>' + hasil + '</code></div></div>');
</script>
</body>
</html>`,
  quiz:{question:'Apa perbedaan function declaration dan function expression?',options:['Tidak ada perbedaan','Function declaration di-hoist, function expression tidak','Function expression lebih cepat','Function declaration tidak bisa pakai arrow'],correctIndex:1,explanation:'Function declaration di-hoist (bisa dipanggil sebelum dideklarasikan), sedangkan function expression tidak.'},
  prevPath:'js-numbers', nextPath:'js-objects'
},

// ── OBJECTS ──────────────────────────────────
'js-objects': {
  courseId:'javascript', title:'JS Objects', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Objects</h2>
<p>Object adalah koleksi pasangan key-value. Hampir semua hal di JavaScript adalah object.</p>
<h3>Membuat Object</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">const</span> person = {<br/>
  &nbsp;&nbsp;nama: <span class="text-green-600">"Arif"</span>,<br/>
  &nbsp;&nbsp;umur: <span class="text-orange-600">25</span>,<br/>
  &nbsp;&nbsp;sapa() { <span class="text-purple-600">return</span> <span class="text-green-600">"Halo!"</span>; }<br/>
  };
</div>
<h3>Mengakses Property</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  person.nama &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-slate-400">// dot notation</span><br/>
  person["nama"] &nbsp;<span class="text-slate-400">// bracket notation</span>
</div>
<h3>Method Object Penting</h3>
<ul>
  <li><code>Object.keys()</code> - array semua key</li>
  <li><code>Object.values()</code> - array semua value</li>
  <li><code>Object.entries()</code> - array [key, value]</li>
  <li><code>Object.assign()</code> - copy/merge object</li>
  <li><code>Spread {...obj}</code> - spread operator</li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background:#fef3c7;
  padding:2px 6px;
  border-radius:4px;
  font-size:0.82rem;
  font-family:monospace;
}

</style>
</head>
<body>
<script>
const mahasiswa = {
  nama: "Arif Rahmat",
  umur: 22,
  jurusan: "Informatika",
  nilai: { uts: 85, uas: 90 },
  sapa() { return "Halo, saya " + this.nama; }
};

// Destructuring
const { nama, umur, jurusan } = mahasiswa;

// Spread & merge
const extra = { ipk: 3.8, angkatan: 2022 };
const lengkap = { ...mahasiswa, ...extra };

document.write('<div class="card"><div class="label">Object</div><code>' + JSON.stringify({nama,umur,jurusan}) + '</code></div>');
document.write('<div class="card"><div class="label">Nested object</div><code>nilai.uts = ' + mahasiswa.nilai.uts + '</code></div>');
document.write('<div class="card"><div class="label">Method</div><code>' + mahasiswa.sapa() + '</code></div>');
document.write('<div class="card"><div class="label">Object.keys()</div><code>' + JSON.stringify(Object.keys(mahasiswa)) + '</code></div>');
document.write('<div class="card"><div class="label">Object.values() (non-object)</div><code>' + JSON.stringify(Object.values({nama,umur,jurusan})) + '</code></div>');
document.write('<div class="card"><div class="label">Spread merge</div><code>ipk: ' + lengkap.ipk + ', angkatan: ' + lengkap.angkatan + '</code></div>');
document.write('<div class="card"><div class="label">Destructuring</div><code>nama=' + nama + ', umur=' + umur + '</code></div>');
</script>
</body>
</html>`,
  quiz:{question:'Apa output dari Object.keys({a:1, b:2, c:3})?',options:['[1, 2, 3]','["a", "b", "c"]','{a:1, b:2}','3'],correctIndex:1,explanation:'Object.keys() mengembalikan array berisi semua key (nama properti) dari object.'},
  prevPath:'js-functions', nextPath:'js-scope'
},

// ── SCOPE ────────────────────────────────────
'js-scope': {
  courseId:'javascript', title:'JS Scope', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Scope</h2>
<p>Scope menentukan di mana variabel bisa diakses dalam kode.</p>
<h3>Jenis Scope</h3>
<ul>
  <li><strong>Global Scope</strong> - variabel di luar function, bisa diakses di mana saja</li>
  <li><strong>Function Scope</strong> - variabel di dalam function, hanya bisa diakses di dalam function</li>
  <li><strong>Block Scope</strong> - variabel let/const di dalam {}, hanya bisa diakses di dalam blok</li>
</ul>
<h3>var vs let vs const</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>var</strong> - function scoped, di-hoist, bisa re-declare</p>
  <p class="text-orange-900 mt-1"><strong>let</strong> - block scoped, tidak di-hoist, tidak bisa re-declare</p>
  <p class="text-orange-900 mt-1"><strong>const</strong> - block scoped, tidak bisa re-assign</p>
</div>
<h3>Hoisting</h3>
<p>Deklarasi variabel dan function "diangkat" ke atas scope-nya saat kompilasi.</p>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background:white;
  border-radius:10px;
  padding:14px;
  margin:8px 0;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.ok {
  color: #059669;
  font-weight: bold;
}
.err {
  color: #ef4444;
  font-weight: bold;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
// Global scope
var globalVar = "Global";
let globalLet = "Global Let";

function testScope() {
  var funcVar = "Function";
  let blockLet = "Block";
  if (true) {
    var varInBlock = "var in block";  // function scoped!
    let letInBlock = "let in block";  // block scoped
    const constInBlock = "const in block";
  }
  return { funcVar, blockLet, varInBlock };
}

const scopeResult = testScope();

// Closure
function counter() {
  let count = 0;
  return { increment: () => ++count, get: () => count };
}
const c = counter();
c.increment(); c.increment(); c.increment();

document.write('<div class="card"><div class="label">Global Scope</div><span class="ok">globalVar: ' + globalVar + '</span></div>');
document.write('<div class="card"><div class="label">Function Scope</div><span class="ok">funcVar: ' + scopeResult.funcVar + '</span></div>');
document.write('<div class="card"><div class="label">var di dalam if (function scoped)</div><span class="ok">varInBlock: ' + scopeResult.varInBlock + '</span></div>');
document.write('<div class="card"><div class="label">Closure Counter</div><span class="ok">count setelah 3x increment: ' + c.get() + '</span></div>');
document.write('<div class="card"><div class="label">Hoisting - function bisa dipanggil sebelum deklarasi</div><span class="ok">' + hoisted() + '</span></div>');
function hoisted() { return "Function declaration di-hoist!"; }
</script>
</body>
</html>`,
  quiz:{question:'Apa perbedaan var dan let dalam hal scope?',options:['Tidak ada perbedaan','var adalah function scoped, let adalah block scoped','let lebih cepat dari var','var tidak bisa diubah nilainya'],correctIndex:1,explanation:'var memiliki function scope (atau global jika di luar function), sedangkan let memiliki block scope (di dalam {}).'},
  prevPath:'js-objects', nextPath:'js-arrays'
},

// ── ARRAYS ───────────────────────────────────
'js-arrays': {
  courseId:'javascript', title:'JS Arrays', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Arrays</h2>
<p>Array adalah struktur data untuk menyimpan banyak nilai dalam satu variabel.</p>
<h3>Membuat Array</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">const</span> arr = [<span class="text-green-600">1, 2, 3, "empat", true</span>];
</div>
<h3>Method Array Penting</h3>
<ul>
  <li><code>push()</code> / <code>pop()</code> - tambah/hapus akhir</li>
  <li><code>unshift()</code> / <code>shift()</code> - tambah/hapus awal</li>
  <li><code>map()</code> - transformasi setiap elemen</li>
  <li><code>filter()</code> - filter elemen</li>
  <li><code>reduce()</code> - akumulasi nilai</li>
  <li><code>find()</code> / <code>findIndex()</code></li>
  <li><code>includes()</code> - cek keberadaan</li>
  <li><code>sort()</code> - urutkan</li>
  <li><code>flat()</code> / <code>flatMap()</code></li>
  <li><code>slice()</code> / <code>splice()</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.row {
  background:white;
  border-radius:8px;
  padding:10px 14px;
  margin:5px 0;
  display:flex;
  justify-content:space-between;
  font-size:0.82rem;
}
.method {
  color:#6366f1;
  font-weight:bold;
  font-family:monospace;
}
.val {
  color:#059669;
  font-weight:bold;
  max-width:60%;
  text-align:right;
}

</style>
</head>
<body>
<script>
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const students = [
  {nama:"Arif", nilai:85},
  {nama:"Siti", nilai:92},
  {nama:"Budi", nilai:78},
  {nama:"Dewi", nilai:95}
];

const rows = [
  ['Original', JSON.stringify(nums)],
  ['length', nums.length],
  ['map(x => x*2)', JSON.stringify(nums.map(x=>x*2))],
  ['filter(x > 4)', JSON.stringify(nums.filter(x=>x>4))],
  ['reduce(sum)', nums.reduce((a,b)=>a+b, 0)],
  ['find(x > 5)', nums.find(x=>x>5)],
  ['includes(9)', nums.includes(9)],
  ['sort()', JSON.stringify([...nums].sort((a,b)=>a-b))],
  ['slice(2,5)', JSON.stringify(nums.slice(2,5))],
  ['students.map(nama)', JSON.stringify(students.map(s=>s.nama))],
  ['filter nilai>=90', JSON.stringify(students.filter(s=>s.nilai>=90).map(s=>s.nama))],
  ['max nilai', Math.max(...students.map(s=>s.nilai))],
];
rows.forEach(([m,v]) => {
  document.write('<div class="row"><span class="method">' + m + '</span><span class="val">' + v + '</span></div>');
});
</script>
</body>
</html>`,
  quiz:{question:'Method array mana yang mengembalikan array BARU dengan elemen yang sudah ditransformasi?',options:['filter()','forEach()','map()','reduce()'],correctIndex:2,explanation:'map() mengembalikan array baru dengan setiap elemen yang sudah ditransformasi oleh callback function.'},
  prevPath:'js-scope', nextPath:'js-sets'
},

// ── SETS ─────────────────────────────────────
'js-sets': {
  courseId:'javascript', title:'JS Sets', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Sets</h2>
<p>Set adalah koleksi nilai yang <strong>unik</strong> - tidak ada duplikat.</p>
<h3>Membuat Set</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">const</span> mySet = <span class="text-purple-600">new</span> Set([1, 2, 3, 2, 1]);<br/>
  <span class="text-slate-400">// Set {1, 2, 3} - duplikat dihapus</span>
</div>
<h3>Method Set</h3>
<ul>
  <li><code>add(value)</code> - tambah nilai</li>
  <li><code>delete(value)</code> - hapus nilai</li>
  <li><code>has(value)</code> - cek keberadaan</li>
  <li><code>size</code> - jumlah elemen</li>
  <li><code>clear()</code> - hapus semua</li>
  <li><code>forEach()</code> - iterasi</li>
</ul>
<h3>Kegunaan Utama</h3>
<p>Menghapus duplikat dari array: <code>[...new Set(array)]</code></p>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
// Hapus duplikat
const arr = [1, 2, 3, 2, 1, 4, 3, 5];
const unique = [...new Set(arr)];

// Set operations
const setA = new Set([1, 2, 3, 4, 5]);
const setB = new Set([3, 4, 5, 6, 7]);

// Union
const union = new Set([...setA, ...setB]);
// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));

// String Set
const words = ["apel","mangga","apel","jeruk","mangga","pisang"];
const uniqueWords = [...new Set(words)];

document.write('<div class="card"><div class="label">Array dengan duplikat</div><code>' + JSON.stringify(arr) + '</code></div>');
document.write('<div class="card"><div class="label">Setelah [...new Set(arr)]</div><code>' + JSON.stringify(unique) + '</code></div>');
document.write('<div class="card"><div class="label">Set A</div><code>' + JSON.stringify([...setA]) + '</code></div>');
document.write('<div class="card"><div class="label">Set B</div><code>' + JSON.stringify([...setB]) + '</code></div>');
document.write('<div class="card"><div class="label">Union (A | B)</div><code>' + JSON.stringify([...union]) + '</code></div>');
document.write('<div class="card"><div class="label">Intersection (A & B)</div><code>' + JSON.stringify([...intersection]) + '</code></div>');
document.write('<div class="card"><div class="label">Difference (A - B)</div><code>' + JSON.stringify([...difference]) + '</code></div>');
document.write('<div class="card"><div class="label">Unique words</div><code>' + JSON.stringify(uniqueWords) + '</code></div>');
</script>
</body>
</html>`,
  quiz:{question:'Apa kegunaan utama Set di JavaScript?',options:['Menyimpan data terurut','Menyimpan nilai unik tanpa duplikat','Menyimpan pasangan key-value','Menyimpan fungsi'],correctIndex:1,explanation:'Set menyimpan nilai unik - duplikat otomatis diabaikan. Sangat berguna untuk menghapus duplikat dari array.'},
  prevPath:'js-arrays', nextPath:'js-maps'
},

// ── MAPS ─────────────────────────────────────
'js-maps': {
  courseId:'javascript', title:'JS Maps', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Maps</h2>
<p>Map adalah koleksi pasangan key-value di mana key bisa berupa tipe data apa saja (tidak hanya string).</p>
<h3>Perbedaan Map vs Object</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>Object</strong>: key harus string/symbol, tidak ada urutan pasti</p>
  <p class="text-orange-900 mt-1"><strong>Map</strong>: key bisa tipe apa saja, urutan insertion dipertahankan</p>
</div>
<h3>Method Map</h3>
<ul>
  <li><code>set(key, value)</code> - tambah/update</li>
  <li><code>get(key)</code> - ambil nilai</li>
  <li><code>has(key)</code> - cek keberadaan</li>
  <li><code>delete(key)</code> - hapus</li>
  <li><code>size</code> - jumlah entry</li>
  <li><code>forEach()</code> / <code>entries()</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}
.row {
  display:flex;
  justify-content:space-between;
  padding:4px 0;
  border-bottom:1px solid #f1f5f9;
  font-size:0.85rem;
}

</style>
</head>
<body>
<script>
// Map dengan berbagai tipe key
const map = new Map();
map.set("nama", "Arif");
map.set(1, "angka satu");
map.set(true, "boolean true");
const objKey = {id: 1};
map.set(objKey, "object sebagai key");

// Map dari array
const scores = new Map([
  ["Arif", 85], ["Siti", 92], ["Budi", 78]
]);

// Frekuensi kata
const words = ["apel","mangga","apel","jeruk","apel","mangga"];
const freq = new Map();
words.forEach(w => freq.set(w, (freq.get(w) || 0) + 1));

document.write('<div class="card"><div class="label">Map dengan berbagai tipe key</div>');
map.forEach((v,k) => {
  document.write('<div class="row"><span>' + String(k) + '</span><code>' + v + '</code></div>');
});
document.write('</div>');

document.write('<div class="card"><div class="label">Map size</div><code>' + map.size + '</code></div>');
document.write('<div class="card"><div class="label">scores.get("Siti")</div><code>' + scores.get("Siti") + '</code></div>');
document.write('<div class="card"><div class="label">Frekuensi kata</div>');
freq.forEach((v,k) => document.write('<div class="row"><span>' + k + '</span><code>' + v + 'x</code></div>'));
document.write('</div>');
</script>
</body>
</html>`,
  quiz:{question:'Apa keunggulan Map dibanding Object biasa?',options:['Map lebih cepat','Map bisa menggunakan tipe data apa saja sebagai key','Map lebih mudah dibuat','Map tidak bisa di-loop'],correctIndex:1,explanation:'Map memungkinkan key berupa tipe data apa saja (number, object, boolean), sedangkan Object hanya string/symbol.'},
  prevPath:'js-sets', nextPath:'js-math'
},

// ── MATH ─────────────────────────────────────
'js-math': {
  courseId:'javascript', title:'JS Math', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Math</h2>
<p>Math adalah built-in object yang menyediakan konstanta dan fungsi matematika.</p>
<h3>Konstanta Math</h3>
<ul>
  <li><code>Math.PI</code> = 3.14159...</li>
  <li><code>Math.E</code> = 2.71828...</li>
</ul>
<h3>Method Math Penting</h3>
<ul>
  <li><code>Math.round()</code> - bulatkan ke integer terdekat</li>
  <li><code>Math.floor()</code> - bulatkan ke bawah</li>
  <li><code>Math.ceil()</code> - bulatkan ke atas</li>
  <li><code>Math.abs()</code> - nilai absolut</li>
  <li><code>Math.max()</code> / <code>Math.min()</code></li>
  <li><code>Math.pow(base, exp)</code> - pangkat</li>
  <li><code>Math.sqrt()</code> - akar kuadrat</li>
  <li><code>Math.random()</code> - angka acak 0-1</li>
  <li><code>Math.trunc()</code> - hapus desimal</li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.row {
  background:white;
  border-radius:8px;
  padding:10px 14px;
  margin:5px 0;
  display:flex;
  justify-content:space-between;
  font-size:0.85rem;
}
.method {
  color:#6366f1;
  font-weight:bold;
  font-family:monospace;
}
.val {
  color:#059669;
  font-weight:bold;
}

</style>
</head>
<body>
<script>
const rows = [
  ['Math.PI', Math.PI.toFixed(5)],
  ['Math.round(4.6)', Math.round(4.6)],
  ['Math.round(4.4)', Math.round(4.4)],
  ['Math.floor(4.9)', Math.floor(4.9)],
  ['Math.ceil(4.1)', Math.ceil(4.1)],
  ['Math.abs(-7)', Math.abs(-7)],
  ['Math.max(3,7,2,9,1)', Math.max(3,7,2,9,1)],
  ['Math.min(3,7,2,9,1)', Math.min(3,7,2,9,1)],
  ['Math.pow(2, 10)', Math.pow(2,10)],
  ['Math.sqrt(144)', Math.sqrt(144)],
  ['Math.trunc(4.9)', Math.trunc(4.9)],
  ['Math.random() * 100', Math.floor(Math.random()*100)],
  ['Random 1-6 (dadu)', Math.floor(Math.random()*6)+1],
];
rows.forEach(([m,v]) => {
  document.write('<div class="row"><span class="method">'+m+'</span><span class="val">'+v+'</span></div>');
});
</script>
</body>
</html>`,
  quiz:{question:'Bagaimana cara menghasilkan angka acak antara 1 dan 10?',options:['Math.random(10)','Math.floor(Math.random() * 10) + 1','Math.random() * 10','Math.ceil(Math.random())'],correctIndex:1,explanation:'Math.floor(Math.random() * 10) + 1 menghasilkan integer acak antara 1 dan 10.'},
  prevPath:'js-maps', nextPath:'js-dates'
},

// ── DATES ─────────────────────────────────────
'js-dates': {
  courseId:'javascript', title:'JS Dates', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Dates</h2>
<p>JavaScript Date object digunakan untuk bekerja dengan tanggal dan waktu.</p>
<h3>Membuat Date</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">new</span> Date() <span class="text-slate-400">// sekarang</span><br/>
  <span class="text-blue-600">new</span> Date(<span class="text-green-600">"2024-01-15"</span>)<br/>
  <span class="text-blue-600">new</span> Date(<span class="text-orange-600">2024, 0, 15</span>) <span class="text-slate-400">// bulan 0-indexed</span>
</div>
<h3>Method Date</h3>
<ul>
  <li><code>getFullYear()</code>, <code>getMonth()</code>, <code>getDate()</code></li>
  <li><code>getHours()</code>, <code>getMinutes()</code>, <code>getSeconds()</code></li>
  <li><code>getDay()</code> - hari (0=Minggu)</li>
  <li><code>getTime()</code> - milliseconds sejak 1970</li>
  <li><code>toLocaleDateString()</code></li>
  <li><code>toLocaleTimeString()</code></li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
const now = new Date();
const days = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
const months = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];

// Hitung umur
const birthYear = 2000;
const age = now.getFullYear() - birthYear;

// Countdown ke tahun baru
const nextYear = new Date(now.getFullYear()+1, 0, 1);
const diff = nextYear - now;
const daysLeft = Math.floor(diff / (1000*60*60*24));

document.write('<div class="card"><div class="label">Tanggal & Waktu Sekarang</div><code>'+now.toLocaleString('id-ID')+'</code></div>');
document.write('<div class="card"><div class="label">Komponen</div><code>'+now.getDate()+' '+months[now.getMonth()]+' '+now.getFullYear()+' ('+days[now.getDay()]+')</code></div>');
document.write('<div class="card"><div class="label">Waktu</div><code>'+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0')+':'+String(now.getSeconds()).padStart(2,'0')+'</code></div>');
document.write('<div class="card"><div class="label">Timestamp (ms sejak 1970)</div><code>'+now.getTime()+'</code></div>');
document.write('<div class="card"><div class="label">Umur jika lahir tahun '+birthYear+'</div><code>'+age+' tahun</code></div>');
document.write('<div class="card"><div class="label">Hari menuju tahun baru</div><code>'+daysLeft+' hari lagi</code></div>');
</script>
</body>
</html>`,
  quiz:{question:'getMonth() mengembalikan nilai berapa untuk bulan Januari?',options:['1','0','January','01'],correctIndex:1,explanation:'getMonth() mengembalikan 0-11, di mana 0 = Januari dan 11 = Desember.'},
  prevPath:'js-math', nextPath:'js-regexp'
},

// ── REGEXP ────────────────────────────────────
'js-regexp': {
  courseId:'javascript', title:'JS RegExp', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Regular Expressions</h2>
<p>RegExp adalah pola yang digunakan untuk mencocokkan karakter dalam string.</p>
<h3>Membuat RegExp</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">const</span> re1 = <span class="text-green-600">/pola/flags</span>;<br/>
  <span class="text-blue-600">const</span> re2 = <span class="text-purple-600">new</span> RegExp(<span class="text-green-600">"pola"</span>, <span class="text-green-600">"flags"</span>);
</div>
<h3>Flags</h3>
<ul>
  <li><code>g</code> - global (semua match)</li>
  <li><code>i</code> - case insensitive</li>
  <li><code>m</code> - multiline</li>
</ul>
<h3>Method</h3>
<ul>
  <li><code>test()</code> - cek apakah cocok (boolean)</li>
  <li><code>match()</code> - ambil semua match</li>
  <li><code>replace()</code> - ganti match</li>
  <li><code>split()</code> - pecah dengan pola</li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.ok {
  color: #059669;
  font-weight: bold;
}
.err {
  color: #ef4444;
  font-weight: bold;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
const email = "user@example.com";
const phone = "081234567890";
const text = "Halo JavaScript! JavaScript itu seru!";

// Validasi email
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Validasi nomor HP Indonesia
const phoneRe = /^(08|62)[0-9]{8,11}$/;
// Cari semua kata JavaScript
const jsRe = /javascript/gi;
// Ekstrak angka
const numRe = /\d+/g;
const mixed = "Ada 3 kucing dan 12 anjing di 5 kandang";

document.write('<div class="card"><div class="label">Validasi Email</div>email: <code>'+email+'</code> → <span class="'+(emailRe.test(email)?'ok':'err')+'">'+(emailRe.test(email)?'VALID':'INVALID')+'</span></div>');
document.write('<div class="card"><div class="label">Validasi No HP</div>phone: <code>'+phone+'</code> → <span class="'+(phoneRe.test(phone)?'ok':'err')+'">'+(phoneRe.test(phone)?'VALID':'INVALID')+'</span></div>');
document.write('<div class="card"><div class="label">match() - cari "JavaScript" (gi)</div><code>'+JSON.stringify(text.match(jsRe))+'</code></div>');
document.write('<div class="card"><div class="label">replace() - ganti JavaScript → JS</div><code>'+text.replace(jsRe,'JS')+'</code></div>');
document.write('<div class="card"><div class="label">Ekstrak semua angka</div><code>'+JSON.stringify(mixed.match(numRe))+'</code></div>');
</script>
</body>
</html>`,
  quiz:{question:'Method RegExp mana yang mengembalikan true/false?',options:['match()','exec()','test()','find()'],correctIndex:2,explanation:'test() mengembalikan boolean true jika pola ditemukan dalam string, false jika tidak.'},
  prevPath:'js-dates', nextPath:'js-errors'
},

// ── ERRORS ────────────────────────────────────
'js-errors': {
  courseId:'javascript', title:'JS Errors', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Errors</h2>
<p>Error handling memungkinkan program menangani kesalahan dengan graceful.</p>
<h3>try...catch...finally</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-purple-600">try</span> {<br/>
  &nbsp;&nbsp;<span class="text-slate-400">// kode yang mungkin error</span><br/>
  } <span class="text-purple-600">catch</span> (error) {<br/>
  &nbsp;&nbsp;console.log(error.message);<br/>
  } <span class="text-purple-600">finally</span> {<br/>
  &nbsp;&nbsp;<span class="text-slate-400">// selalu dieksekusi</span><br/>
  }
</div>
<h3>Jenis Error</h3>
<ul>
  <li><code>ReferenceError</code> - variabel tidak ditemukan</li>
  <li><code>TypeError</code> - tipe data salah</li>
  <li><code>SyntaxError</code> - sintaks salah</li>
  <li><code>RangeError</code> - nilai di luar range</li>
</ul>
<h3>Custom Error</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-purple-600">throw new</span> Error(<span class="text-green-600">"Pesan error"</span>);
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background:white;
  border-radius:10px;
  padding:14px;
  margin:8px 0;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.ok {
  color:#059669;
}
.err {
  color:#ef4444;
}
.warn {
  color:#f59e0b;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
// try-catch dasar
function bagi(a, b) {
  if (b === 0) throw new Error("Tidak bisa dibagi nol!");
  return a / b;
}

// Validasi dengan custom error
function validasiUmur(umur) {
  if (typeof umur !== 'number') throw new TypeError("Umur harus berupa angka");
  if (umur < 0 || umur > 150) throw new RangeError("Umur tidak valid: " + umur);
  return "Umur valid: " + umur;
}

// Test cases
const tests = [
  () => bagi(10, 2),
  () => bagi(10, 0),
  () => validasiUmur(25),
  () => validasiUmur("dua puluh"),
  () => validasiUmur(-5),
  () => JSON.parse("invalid json"),
];

tests.forEach((fn, i) => {
  try {
    const result = fn();
    document.write('<div class="card"><div class="label">Test '+(i+1)+'</div><span class="ok">OK: '+result+'</span></div>');
  } catch(e) {
    document.write('<div class="card"><div class="label">Test '+(i+1)+' - '+e.constructor.name+'</div><span class="err">'+e.message+'</span></div>');
  }
});
</script>
</body>
</html>`,
  quiz:{question:'Blok kode mana yang SELALU dieksekusi, baik ada error maupun tidak?',options:['try','catch','finally','throw'],correctIndex:2,explanation:'finally selalu dieksekusi setelah try-catch, berguna untuk cleanup seperti menutup koneksi database.'},
  prevPath:'js-regexp', nextPath:'js-debugging'
},

// ── DEBUGGING ─────────────────────────────────
'js-debugging': {
  courseId:'javascript', title:'JS Debugging', chapter:'Basic JavaScript', color:'yellow',
  theory:`<h2>JS Debugging</h2>
<p>Debugging adalah proses menemukan dan memperbaiki bug dalam kode.</p>
<h3>Teknik Debugging</h3>
<ul>
  <li><code>console.log()</code> - tampilkan nilai ke console</li>
  <li><code>console.error()</code> - tampilkan error</li>
  <li><code>console.warn()</code> - tampilkan warning</li>
  <li><code>console.table()</code> - tampilkan data sebagai tabel</li>
  <li><code>console.time()</code> / <code>console.timeEnd()</code> - ukur waktu</li>
  <li><code>debugger</code> - breakpoint di browser DevTools</li>
</ul>
<h3>Browser DevTools</h3>
<ul>
  <li>Tekan <strong>F12</strong> untuk buka DevTools</li>
  <li>Tab <strong>Console</strong> - lihat output dan error</li>
  <li>Tab <strong>Sources</strong> - set breakpoint</li>
  <li>Tab <strong>Network</strong> - monitor request</li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.console {
  background:#1e293b;
  color:#e2e8f0;
  border-radius:8px;
  padding:12px;
  font-family:monospace;
  font-size:0.82rem;
  margin-top:8px;
}
.log {
  color:#94a3b8;
}
.err {
  color:#f87171;
}
.warn {
  color:#fbbf24;
}
.info {
  color:#60a5fa;
}

</style>
</head>
<body>
<div class="card">
  <div class="label">Simulasi Console Output</div>
  <div class="console">
    <div class="log">> console.log("Nilai x:", 42)</div>
    <div class="log">  Nilai x: 42</div>
    <div class="warn">> console.warn("Hati-hati!")</div>
    <div class="warn">  ⚠ Hati-hati!</div>
    <div class="err">> console.error("Terjadi error!")</div>
    <div class="err">  ✕ Terjadi error!</div>
    <div class="info">> console.info("Info penting")</div>
    <div class="info">  ℹ Info penting</div>
  </div>
</div>
<script>
const data = [
  {nama:"Arif", nilai:85, lulus:true},
  {nama:"Siti", nilai:92, lulus:true},
  {nama:"Budi", nilai:55, lulus:false},
];

// Debugging dengan berbagai teknik
let output = '<div class="card"><div class="label">console.table() - Data Mahasiswa</div><table style="width:100%;border-collapse:collapse;font-size:0.82rem">';
output += '<tr style="background:#f1f5f9"><th style="padding:6px;text-align:left">Nama</th><th>Nilai</th><th>Lulus</th></tr>';
data.forEach(d => {
  output += '<tr style="border-top:1px solid #f1f5f9"><td style="padding:6px">'+d.nama+'</td><td style="text-align:center">'+d.nilai+'</td><td style="text-align:center">'+(d.lulus?'✅':'❌')+'</td></tr>';
});
output += '</table></div>';
document.write(output);

// Performance timing
const start = performance.now();
let sum = 0;
for(let i = 0; i < 1000000; i++) sum += i;
const end = performance.now();
document.write('<div class="card"><div class="label">Performance Timing</div>Loop 1 juta iterasi: <strong>'+(end-start).toFixed(2)+'ms</strong></div>');
</script>
</body>
</html>`,
  quiz:{question:'Shortcut keyboard untuk membuka DevTools di browser?',options:['Ctrl+D','F12','Ctrl+F5','Alt+D'],correctIndex:1,explanation:'F12 membuka Developer Tools di semua browser modern (Chrome, Firefox, Edge).'},
  prevPath:'js-errors', nextPath:'js-adv-functions'
},

// ── ADVANCED FUNCTIONS ────────────────────────
'js-adv-functions': {
  courseId:'javascript', title:'Advanced Functions', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>Advanced Functions</h2>
<p>JavaScript memiliki fitur function yang lebih canggih untuk menulis kode yang lebih bersih.</p>
<h3>Arrow Function</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-blue-600">const</span> add = (a, b) =&gt; a + b;<br/>
  <span class="text-blue-600">const</span> greet = name =&gt; <span class="text-green-600">"Halo " + name</span>;
</div>
<h3>Higher-Order Functions</h3>
<p>Function yang menerima atau mengembalikan function lain.</p>
<h3>Callback</h3>
<p>Function yang dikirim sebagai argumen ke function lain.</p>
<h3>Currying</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-blue-600">const</span> multiply = a =&gt; b =&gt; a * b;<br/>
  <span class="text-blue-600">const</span> double = multiply(2);
</div>
<h3>Memoization</h3>
<p>Cache hasil function untuk performa lebih baik.</p>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
// Arrow functions
const add = (a, b) => a + b;
const square = n => n * n;
const isEven = n => n % 2 === 0;

// Higher-order function
function applyTwice(fn, x) { return fn(fn(x)); }

// Currying
const multiply = a => b => a * b;
const double = multiply(2);
const triple = multiply(3);

// Compose
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const addOne = x => x + 1;
const doubleIt = x => x * 2;
const addOneThenDouble = compose(doubleIt, addOne);

// Memoization
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key] + " (cached)";
    cache[key] = fn(...args);
    return cache[key];
  };
}
const slowFib = n => n <= 1 ? n : slowFib(n-1) + slowFib(n-2);
const fastFib = memoize(n => n <= 1 ? n : fastFib(n-1) + fastFib(n-2));

document.write('<div class="card"><div class="label">Arrow Functions</div><code>add(3,4)='+add(3,4)+' | square(5)='+square(5)+' | isEven(6)='+isEven(6)+'</code></div>');
document.write('<div class="card"><div class="label">Higher-Order: applyTwice(square, 3)</div><code>'+applyTwice(square,3)+'</code></div>');
document.write('<div class="card"><div class="label">Currying</div><code>double(5)='+double(5)+' | triple(4)='+triple(4)+'</code></div>');
document.write('<div class="card"><div class="label">Compose: addOneThenDouble(5)</div><code>'+addOneThenDouble(5)+'</code></div>');
document.write('<div class="card"><div class="label">Memoize fib(10)</div><code>'+fastFib(10)+'</code></div>');
</script>
</body>
</html>`,
  quiz:{question:'Apa itu currying dalam JavaScript?',options:['Mengulang function','Mengubah function multi-argumen menjadi chain function satu argumen','Menyimpan hasil function','Menggabungkan dua function'],correctIndex:1,explanation:'Currying mengubah f(a,b) menjadi f(a)(b) - function yang menerima argumen satu per satu.'},
  prevPath:'js-debugging', nextPath:'js-adv-objects'
},

// ── ADVANCED OBJECTS ──────────────────────────
'js-adv-objects': {
  courseId:'javascript', title:'Advanced Objects', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>Advanced Objects</h2>
<p>Fitur object lanjutan di JavaScript modern.</p>
<h3>Destructuring</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-blue-600">const</span> { nama, umur } = person;<br/>
  <span class="text-blue-600">const</span> { nama: n = <span class="text-green-600">"default"</span> } = person;
</div>
<h3>Computed Property Names</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  <span class="text-blue-600">const</span> key = <span class="text-green-600">"nama"</span>;<br/>
  <span class="text-blue-600">const</span> obj = { [key]: <span class="text-green-600">"Arif"</span> };
</div>
<h3>Optional Chaining (?.)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">
  user?.address?.city <span class="text-slate-400">// tidak error jika undefined</span>
</div>
<h3>Nullish Coalescing (??)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  <span class="text-blue-600">const</span> name = user.name ?? <span class="text-green-600">"Anonymous"</span>;
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
const user = { nama:"Arif", umur:25, alamat:{ kota:"Jakarta", kodePos:"12345" } };
const userTanpaAlamat = { nama:"Budi" };

// Destructuring dengan rename & default
const { nama, umur, alamat: { kota } } = user;
const { nama: nama2, telepon = "Tidak ada" } = user;

// Spread & rest
const { nama: n3, ...sisanya } = user;

// Optional chaining
const kota1 = user?.alamat?.kota;
const kota2 = userTanpaAlamat?.alamat?.kota;

// Nullish coalescing
const telepon = user.telepon ?? "Tidak terdaftar";
const nilai = 0 ?? "default"; // 0 bukan null/undefined!
const kosong = null ?? "default";

// Computed property
const field = "email";
const data = { [field]: "arif@email.com", [\`\${field}
Verified\`]: true };

// Object.freeze
const config = Object.freeze({ apiUrl: "https://api.example.com", timeout: 5000 });

document.write('<div class="card"><div class="label">Destructuring nested</div><code>nama='+nama+', kota='+kota+'</code></div>');
document.write('<div class="card"><div class="label">Destructuring dengan default</div><code>telepon='+telepon2+'</code></div>');
document.write('<div class="card"><div class="label">Rest operator</div><code>'+JSON.stringify(sisanya)+'</code></div>');
document.write('<div class="card"><div class="label">Optional chaining</div><code>user?.alamat?.kota='+kota1+' | tanpaAlamat?.kota='+kota2+'</code></div>');
document.write('<div class="card"><div class="label">Nullish coalescing (??)</div><code>telepon='+telepon+' | 0??default='+nilai+' | null??default='+kosong+'</code></div>');
document.write('<div class="card"><div class="label">Computed property</div><code>'+JSON.stringify(data)+'</code></div>');

function telepon2() { return nama2 + " - " + telepon; }
</script>
</body>
</html>`,
  quiz:{question:'Apa perbedaan || dan ?? untuk nilai default?',options:['Tidak ada perbedaan','|| menganggap 0 dan "" sebagai falsy, ?? hanya null/undefined','?? lebih cepat','|| hanya untuk boolean'],correctIndex:1,explanation:'|| menganggap 0, "", false sebagai falsy. ?? (nullish coalescing) hanya menganggap null dan undefined sebagai "tidak ada nilai".'},
  prevPath:'js-adv-functions', nextPath:'js-classes'
},

// ── CLASSES ───────────────────────────────────
'js-classes': {
  courseId:'javascript', title:'JS Classes', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>JS Classes</h2>
<p>Class adalah blueprint untuk membuat object. Diperkenalkan di ES6.</p>
<h3>Sintaks Class</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-purple-600">class</span> <span class="text-yellow-600">Animal</span> {<br/>
  &nbsp;&nbsp;<span class="text-purple-600">constructor</span>(name) { <span class="text-purple-600">this</span>.name = name; }<br/>
  &nbsp;&nbsp;speak() { <span class="text-purple-600">return</span> <span class="text-green-600">this.name + " berbunyi"</span>; }<br/>
  }
</div>
<h3>Inheritance (extends)</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-purple-600">class</span> <span class="text-yellow-600">Dog</span> <span class="text-purple-600">extends</span> <span class="text-yellow-600">Animal</span> {<br/>
  &nbsp;&nbsp;speak() { <span class="text-purple-600">return super</span>.speak() + <span class="text-green-600">" guk!"</span>; }<br/>
  }
</div>
<h3>Fitur Class</h3>
<ul>
  <li><code>static</code> - method/property milik class, bukan instance</li>
  <li><code>get</code> / <code>set</code> - getter dan setter</li>
  <li><code>#privateField</code> - field private (ES2022)</li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
class Shape {
  constructor(color = "merah") { this.color = color; }
  get info() { return "Shape berwarna " + this.color; }
  static create(color) { return new Shape(color); }
  area() { return 0; }
}

class Circle extends Shape {
  #radius;
  constructor(radius, color) {
    super(color);
    this.#radius = radius;
  }
  area() { return (Math.PI * this.#radius ** 2).toFixed(2); }
  get radius() { return this.#radius; }
  set radius(r) { if (r > 0) this.#radius = r; }
  toString() { return "Lingkaran r="+this.#radius+", warna="+this.color; }
}

class Rectangle extends Shape {
  constructor(w, h, color) { super(color); this.w = w; this.h = h; }
  area() { return this.w * this.h; }
  toString() { return "Persegi "+this.w+"x"+this.h+", warna="+this.color; }
}

const c = new Circle(5, "biru");
const r = new Rectangle(4, 6, "hijau");
const s = Shape.create("kuning");

document.write('<div class="card"><div class="label">Circle instance</div><code>'+c.toString()+'</code></div>');
document.write('<div class="card"><div class="label">Circle area()</div><code>'+c.area()+'</code></div>');
document.write('<div class="card"><div class="label">Getter</div><code>'+c.info+'</code></div>');
document.write('<div class="card"><div class="label">Rectangle</div><code>'+r.toString()+' | area='+r.area()+'</code></div>');
document.write('<div class="card"><div class="label">Static method</div><code>'+s.info+'</code></div>');
document.write('<div class="card"><div class="label">instanceof</div><code>c instanceof Circle: '+(c instanceof Circle)+' | c instanceof Shape: '+(c instanceof Shape)+'</code></div>');
</script>
</body>
</html>`,
  quiz:{question:'Kata kunci apa yang digunakan untuk memanggil constructor parent class?',options:['parent()','base()','super()','this.parent()'],correctIndex:2,explanation:'super() memanggil constructor dari parent class. Wajib dipanggil di constructor child class sebelum menggunakan this.'},
  prevPath:'js-adv-objects', nextPath:'js-async'
},

// ── ASYNC ─────────────────────────────────────
'js-async': {
  courseId:'javascript', title:'JS Asynchronous', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>JS Asynchronous</h2>
<p>JavaScript berjalan secara single-threaded, tapi bisa menangani operasi async tanpa memblokir eksekusi.</p>
<h3>Synchronous vs Asynchronous</h3>
<div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-4">
  <p class="text-orange-900"><strong>Sync</strong>: kode dieksekusi baris per baris, menunggu setiap operasi selesai</p>
  <p class="text-orange-900 mt-1"><strong>Async</strong>: operasi lambat (network, file) tidak memblokir kode lain</p>
</div>
<h3>Event Loop</h3>
<p>JavaScript menggunakan event loop untuk menangani async: Call Stack → Web APIs → Callback Queue → Call Stack.</p>
<h3>Cara Async di JS</h3>
<ul>
  <li><strong>Callbacks</strong> - cara lama, bisa callback hell</li>
  <li><strong>Promises</strong> - lebih terstruktur</li>
  <li><strong>Async/Await</strong> - paling modern dan mudah dibaca</li>
</ul>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}
.timeline {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
}
.step {
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.82rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sync {
  background: #dbeafe;
  color: #1e40af;
}
.async {
  background: #dcfce7;
  color: #166534;
}
.cb {
  background: #fef3c7;
  color: #92400e;
}

</style>
</head>
<body>
<script>
// Demonstrasi urutan eksekusi
const log = [];

// Sync
log.push({type:'sync', msg:'1. Kode sync pertama'});

// setTimeout (async)
setTimeout(() => log.push({type:'async', msg:'4. setTimeout 0ms (async)'}), 0);

// Promise (microtask - lebih prioritas dari setTimeout)
Promise.resolve().then(() => log.push({type:'cb', msg:'3. Promise.resolve (microtask)'}));

log.push({type:'sync', msg:'2. Kode sync kedua'});

// Tampilkan setelah semua selesai
setTimeout(() => {
  document.write('<div class="card"><div class="label">Urutan Eksekusi Event Loop</div><div class="timeline">');
  log.forEach(({type,msg}) => {
    document.write('<div class="step '+type+'">'+msg+'</div>');
  });
  document.write('</div></div>');

  // Callback hell example
  document.write('<div class="card"><div class="label">Callback Hell (hindari ini!)</div><code>getData(cb1(cb2(cb3(cb4()))))</code><br/><small style="color:#94a3b8">Sulit dibaca dan di-maintain</small></div>');
  document.write('<div class="card"><div class="label">Solusi Modern</div><code>async/await</code> membuat kode async terlihat seperti sync</div>');
}, 10);
</script>
</body>
</html>`,
  quiz:{question:'Apa yang dimaksud dengan "non-blocking" dalam JavaScript async?',options:['Kode berjalan lebih cepat','Operasi lambat tidak menghentikan eksekusi kode lain','JavaScript berjalan di banyak thread','Tidak ada error'],correctIndex:1,explanation:'Non-blocking berarti operasi lambat (seperti fetch data) tidak menghentikan/memblokir eksekusi kode JavaScript lainnya.'},
  prevPath:'js-classes', nextPath:'js-promises'
},

// ── PROMISES ──────────────────────────────────
'js-promises': {
  courseId:'javascript', title:'JS Promises', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>JS Promises</h2>
<p>Promise adalah object yang merepresentasikan hasil operasi async yang mungkin selesai di masa depan.</p>
<h3>3 State Promise</h3>
<ul>
  <li><strong>Pending</strong> - sedang berjalan</li>
  <li><strong>Fulfilled</strong> - berhasil, ada nilai</li>
  <li><strong>Rejected</strong> - gagal, ada error</li>
</ul>
<h3>Membuat Promise</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">
  <span class="text-blue-600">const</span> p = <span class="text-purple-600">new</span> Promise((resolve, reject) =&gt; {<br/>
  &nbsp;&nbsp;<span class="text-purple-600">if</span> (sukses) resolve(data);<br/>
  &nbsp;&nbsp;<span class="text-purple-600">else</span> reject(<span class="text-purple-600">new</span> Error("gagal"));<br/>
  });
</div>
<h3>Promise Chaining</h3>
<div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">
  fetch(url).then(r =&gt; r.json()).then(data =&gt; ...).catch(err =&gt; ...);
</div>`,
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.ok {
  color: #059669;
  font-weight: bold;
}
.err {
  color: #ef4444;
  font-weight: bold;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}

</style>
</head>
<body>
<script>
// Simulasi async operation
function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ id, nama: "User " + id, email: "user"+id+"@email.com" });
      else reject(new Error("ID tidak valid: " + id));
    }, 100);
  });
}

// Promise chaining
fetchUser(1)
  .then(user => {
    document.write('<div class="card"><div class="label">Promise Fulfilled</div><span class="ok">'+JSON.stringify(user)+'</span></div>');
    return fetchUser(2);
  })
  .then(user2 => {
    document.write('<div class="card"><div class="label">Promise Chaining</div><span class="ok">'+JSON.stringify(user2)+'</span></div>');
  });

// Promise.reject
fetchUser(-1).catch(err => {
  document.write('<div class="card"><div class="label">Promise Rejected</div><span class="err">'+err.message+'</span></div>');
});

// Promise.all
Promise.all([fetchUser(3), fetchUser(4), fetchUser(5)])
  .then(users => {
    document.write('<div class="card"><div class="label">Promise.all (3 sekaligus)</div><span class="ok">'+users.map(u=>u.nama).join(', ')+'</span></div>');
  });

// Promise.race
Promise.race([
  new Promise(r => setTimeout(() => r("Cepat!"), 50)),
  new Promise(r => setTimeout(() => r("Lambat"), 200))
]).then(winner => {
  document.write('<div class="card"><div class="label">Promise.race (siapa duluan)</div><span class="ok">'+winner+'</span></div>');
});
</script>
</body>
</html>`,
  quiz:{question:'Apa fungsi Promise.all()?',options:['Menjalankan promise satu per satu','Menjalankan semua promise sekaligus dan menunggu semua selesai','Mengambil promise yang paling cepat','Menggabungkan hasil promise'],correctIndex:1,explanation:'Promise.all() menjalankan semua promise secara paralel dan menunggu SEMUA selesai. Jika satu gagal, semua dianggap gagal.'},
  prevPath:'js-async', nextPath:'js-async-await'
},

// ── ASYNC/AWAIT ───────────────────────────────
'js-async-await': {
  courseId:'javascript', title:'Async / Await', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>Async / Await</h2><p>Async/Await adalah sintaks modern untuk menulis kode async yang terlihat seperti sync.</p><h3>Sintaks</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3"><span class="text-purple-600">async function</span> getData() {<br/>&nbsp;&nbsp;<span class="text-purple-600">try</span> {<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-600">const</span> data = <span class="text-purple-600">await</span> fetch(url);<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-600">const</span> json = <span class="text-purple-600">await</span> data.json();<br/>&nbsp;&nbsp;&nbsp;&nbsp;<span class="text-purple-600">return</span> json;<br/>&nbsp;&nbsp;} <span class="text-purple-600">catch</span>(e) { console.error(e); }<br/></div><h3>Aturan</h3><ul><li><code>await</code> hanya bisa digunakan di dalam <code>async</code> function</li><li><code>async</code> function selalu mengembalikan Promise</li><li>Gunakan try/catch untuk error handling</li></ul><h3>Parallel dengan async/await</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">const [a, b] = await Promise.all([fetchA(), fetchB()]);</div>`,
  code:`<!DOCTYPE html><html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.ok {
  color:#059669;
  font-weight:bold;
}
.err {
  color:#ef4444;
  font-weight:bold;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}
</style>
</head>
<body>
<div id="out"></div>
<script>
const out = document.getElementById('out');
const log = (label, msg, t='') => out.innerHTML += '<div class="card"><div class="label">'+label+'</div><span class="'+t+'">'+msg+'</span></div>';
const delay = (ms, val, fail=false) => new Promise((res,rej) => setTimeout(() => fail?rej(new Error(val)):res(val), ms));
async function sequential() {
  const a = await delay(100, "Step 1");
  const b = await delay(100, "Step 2");
  const c = await delay(100, "Step 3");
  return [a, b, c];
}
async function parallel() {
  const [a, b, c] = await Promise.all([delay(100,"P1"), delay(100,"P2"), delay(100,"P3")]);
  return [a, b, c];
}
async function withError() {
  try {
    await delay(100, "Ini error!", true);
  } catch(e) {
    return "Caught: " + e.message;
  }
}
async function fetchUser() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await res.json();
  return user.name + " (" + user.email + ")";
}
const start = performance.now();
sequential().then(r => log('Sequential (300ms+)', JSON.stringify(r) + " - " + Math.round(performance.now()-start) + "ms", 'ok'));
const start2 = performance.now();
parallel().then(r => log('Parallel Promise.all (~100ms)', JSON.stringify(r) + " - " + Math.round(performance.now()-start2) + "ms", 'ok'));
withError().then(r => log('Error Handling', r, 'ok'));
fetchUser().then(r => log('Real API (jsonplaceholder)', r, 'ok')).catch(e => log('API Error', e.message, 'err'));
</script></body>
</html>`,
  quiz:{question:'Apa yang dikembalikan oleh async function?',options:['Nilai biasa','Selalu mengembalikan Promise','undefined','Array'],correctIndex:1,explanation:'async function selalu mengembalikan Promise. Jika return nilai biasa, otomatis dibungkus Promise.resolve(nilai).'},
  prevPath:'js-promises', nextPath:'js-modules'
},

// ── MODULES ───────────────────────────────────
'js-modules': {
  courseId:'javascript', title:'JS Modules', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>JS Modules</h2><p>Module memungkinkan kode dibagi menjadi file-file terpisah yang bisa di-import/export.</p><h3>Export</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3"><span class="text-slate-400">// Named export</span><br/><span class="text-purple-600">export</span> <span class="text-blue-600">const</span> PI = 3.14;<br/><span class="text-purple-600">export function</span> add(a,b) { return a+b; }<br/><br/><span class="text-slate-400">// Default export</span><br/><span class="text-purple-600">export default class</span> Calculator { ... }</div><h3>Import</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3"><span class="text-purple-600">import</span> { PI, add } <span class="text-purple-600">from</span> <span class="text-green-600">'./math.js'</span>;<br/><span class="text-purple-600">import</span> Calculator <span class="text-purple-600">from</span> <span class="text-green-600">'./calc.js'</span>;<br/><span class="text-purple-600">import</span> * <span class="text-purple-600">as</span> Math <span class="text-purple-600">from</span> <span class="text-green-600">'./math.js'</span>;</div><h3>Dynamic Import</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">const module = await import('./module.js');</div>`,
  code:`<!DOCTYPE html><html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}
</style>
</head>
<body><script>
// Simulasi module pattern (karena tidak bisa import di inline script)
const MathModule = (() => {
  const PI = 3.14159;
  const add = (a,b) => a+b;
  const multiply = (a,b) => a*b;
  const circle = { area: r => PI*r*r, circumference: r => 2*PI*r };
  return { PI, add, multiply, circle };
})();
const StringModule = (() => {
  const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
  const truncate = (s, n) => s.length > n ? s.slice(0,n)+'...' : s;
  const slugify = s => s.toLowerCase().replace(/\s+/g,'-');
  return { capitalize, truncate, slugify };
})();
document.write('<div class="card"><div class="label">MathModule exports</div><code>PI = '+MathModule.PI+'</code><br/><code>add(5,3) = '+MathModule.add(5,3)+'</code><br/><code>circle.area(5) = '+MathModule.circle.area(5).toFixed(2)+'</code></div>');
document.write('<div class="card"><div class="label">StringModule exports</div><code>capitalize("hello") = "'+StringModule.capitalize("hello")+'"</code><br/><code>truncate("JavaScript is great", 10) = "'+StringModule.truncate("JavaScript is great",10)+'"</code><br/><code>slugify("Hello World") = "'+StringModule.slugify("Hello World")+'"</code></div>');
document.write('<div class="card"><div class="label">Contoh import di file JS</div><code>import { add, PI } from "./math.js"</code><br/><code>import * as Math from "./math.js"</code></div>');
</script></body>
</html>`,
  quiz:{question:'Apa perbedaan named export dan default export?',options:['Tidak ada perbedaan','Named export bisa banyak per file, default export hanya satu','Default export lebih cepat','Named export tidak bisa di-import'],correctIndex:1,explanation:'Named export bisa banyak per file (import dengan {}), default export hanya satu per file (import tanpa {}).'},
  prevPath:'js-async-await', nextPath:'js-destructuring'
},

// ── DESTRUCTURING ─────────────────────────────
'js-destructuring': {
  courseId:'javascript', title:'JS Destructuring', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>JS Destructuring</h2><p>Destructuring memungkinkan mengekstrak nilai dari array atau object ke variabel terpisah.</p><h3>Array Destructuring</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3"><span class="text-blue-600">const</span> [a, b, c] = [1, 2, 3];<br/><span class="text-blue-600">const</span> [first, ...rest] = [1,2,3,4,5];<br/><span class="text-blue-600">const</span> [x=0, y=0] = [10]; <span class="text-slate-400">// default value</span></div><h3>Object Destructuring</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3"><span class="text-blue-600">const</span> { nama, umur } = person;<br/><span class="text-blue-600">const</span> { nama: n, umur: u } = person; <span class="text-slate-400">// rename</span><br/><span class="text-blue-600">const</span> { nama, ...rest } = person; <span class="text-slate-400">// rest</span></div><h3>Nested Destructuring</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">const { address: { city } } = user;</div>`,
  code:`<!DOCTYPE html><html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}
</style>
</head>
<body><script>
const [a, b, c] = [10, 20, 30];
const [first, second, ...rest] = [1,2,3,4,5];
const [x=0, y=0, z=99] = [5, 10];
let p=1, q=2; [p, q] = [q, p];
const user = { nama:"Arif", umur:25, kota:"Jakarta", hobi:["coding","gaming"] };
const { nama, umur, kota: city } = user;
const { nama: n2, ...others } = user;
const nested = { user: { profile: { name: "Siti", age: 22 } } };
const { user: { profile: { name: profileName } } } = nested;
function greet({ nama, umur=0 }) { return "Halo " + nama + ", umur " + umur; }
document.write('<div class="card"><div class="label">Array Destructuring</div><code>[a,b,c] = '+JSON.stringify([a,b,c])+'</code></div>');
document.write('<div class="card"><div class="label">Rest Element</div><code>first='+first+', rest='+JSON.stringify(rest)+'</code></div>');
document.write('<div class="card"><div class="label">Default Value</div><code>x='+x+', y='+y+', z='+z+'</code></div>');
document.write('<div class="card"><div class="label">Swap Variables</div><code>p='+p+', q='+q+' (ditukar!)</code></div>');
document.write('<div class="card"><div class="label">Object Destructuring + Rename</div><code>nama="'+nama+'", city="'+city+'"</code></div>');
document.write('<div class="card"><div class="label">Nested Destructuring</div><code>profileName="'+profileName+'"</code></div>');
document.write('<div class="card"><div class="label">Function Parameter Destructuring</div><code>'+greet(user)+'</code></div>');
</script></body>
</html>`,
  quiz:{question:'Bagaimana cara swap dua variabel menggunakan destructuring?',options:['a = b; b = a','[a, b] = [b, a]','swap(a, b)','a.swap(b)'],correctIndex:1,explanation:'[a, b] = [b, a] adalah cara elegan untuk swap dua variabel tanpa variabel temporary.'},
  prevPath:'js-modules', nextPath:'js-spread-rest'
},

// ── SPREAD & REST ─────────────────────────────
'js-spread-rest': {
  courseId:'javascript', title:'Spread & Rest', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>Spread & Rest Operator</h2><p>Keduanya menggunakan sintaks <code>...</code> tapi dengan tujuan berbeda.</p><h3>Spread Operator</h3><p>Menyebarkan elemen array/object ke tempat lain.</p><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">const arr2 = [...arr1, 4, 5];<br/>const obj2 = {...obj1, newKey: "val"};<br/>Math.max(...numbers);</div><h3>Rest Parameter</h3><p>Mengumpulkan argumen menjadi array.</p><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">function sum(...nums) {<br/>&nbsp;&nbsp;return nums.reduce((a,b) => a+b, 0);<br/>}</div><h3>Perbedaan</h3><div class="bg-orange-50 border border-orange-200 rounded-xl p-4"><p class="text-orange-900"><strong>Spread</strong>: menyebarkan (expand) - digunakan saat memanggil/membuat</p><p class="text-orange-900 mt-1"><strong>Rest</strong>: mengumpulkan (collect) - digunakan di parameter function</p></div>`,
  code:`<!DOCTYPE html><html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}
</style>
</head>
<body><script>
const arr1 = [1,2,3]; const arr2 = [4,5,6];
const combined = [...arr1, ...arr2];
const copy = [...arr1];
copy.push(99);
const nums = [3,1,4,1,5,9,2,6];
const obj1 = {a:1, b:2}; const obj2 = {c:3, d:4};
const merged = {...obj1, ...obj2, e:5};
const override = {...obj1, b:99, c:3};
function sum(...nums2) { return nums2.reduce((a,b)=>a+b,0); }
function first(a, b, ...rest) { return {a, b, rest}; }
const [head, ...tail] = [10,20,30,40,50];
document.write('<div class="card"><div class="label">Spread - Gabung Array</div><code>'+JSON.stringify(combined)+'</code></div>');
document.write('<div class="card"><div class="label">Spread - Copy (tidak mutate original)</div><code>copy='+JSON.stringify(copy)+', arr1='+JSON.stringify(arr1)+'</code></div>');
document.write('<div class="card"><div class="label">Spread - Math.max</div><code>Math.max(...nums) = '+Math.max(...nums)+'</code></div>');
document.write('<div class="card"><div class="label">Spread - Merge Object</div><code>'+JSON.stringify(merged)+'</code></div>');
document.write('<div class="card"><div class="label">Spread - Override Property</div><code>'+JSON.stringify(override)+'</code></div>');
document.write('<div class="card"><div class="label">Rest Parameter</div><code>sum(1,2,3,4,5) = '+sum(1,2,3,4,5)+'</code></div>');
document.write('<div class="card"><div class="label">Rest + Destructuring</div><code>head='+head+', tail='+JSON.stringify(tail)+'</code></div>');
</script></body>
</html>`,
  quiz:{question:'Apa perbedaan spread dan rest operator?',options:['Tidak ada perbedaan, keduanya sama','Spread menyebarkan nilai, rest mengumpulkan nilai','Rest lebih cepat','Spread hanya untuk array'],correctIndex:1,explanation:'Spread (...) menyebarkan array/object ke tempat lain. Rest (...) mengumpulkan argumen/elemen menjadi array.'},
  prevPath:'js-destructuring', nextPath:'js-closures'
},

// ── CLOSURES ──────────────────────────────────
'js-closures': {
  courseId:'javascript', title:'JS Closures', chapter:'JS Advanced', color:'yellow',
  theory:`<h2>JS Closures</h2><p>Closure adalah fungsi yang "mengingat" variabel dari scope luar meskipun scope tersebut sudah selesai dieksekusi.</p><h3>Cara Kerja</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-4">function outer() {<br/>&nbsp;&nbsp;let count = 0; <span class="text-slate-400">// variabel di outer scope</span><br/>&nbsp;&nbsp;return function inner() {<br/>&nbsp;&nbsp;&nbsp;&nbsp;count++; <span class="text-slate-400">// inner "ingat" count</span><br/>&nbsp;&nbsp;&nbsp;&nbsp;return count;<br/>&nbsp;&nbsp;};<br/>}<br/>const counter = outer();<br/>counter(); // 1<br/>counter(); // 2</div><h3>Kegunaan Closure</h3><ul><li>Private variables (data encapsulation)</li><li>Factory functions</li><li>Memoization</li><li>Event handlers</li><li>Module pattern</li></ul>`,
  code:`<!DOCTYPE html><html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}
</style>
</head>
<body><script>
function makeCounter(start=0) {
  let count = start;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => { count = start; return count; },
    value: () => count
  };
}
function multiplier(factor) { return n => n * factor; }
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key) + " (cached)";
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}
function makeAdder(x) { return y => x + y; }
const c1 = makeCounter(0);
const c2 = makeCounter(10);
c1.increment(); c1.increment(); c1.increment();
c2.increment(); c2.decrement();
const double = multiplier(2);
const triple = multiplier(3);
const slowSquare = memoize(n => { let s=0; for(let i=0;i<n;i++) s+=n; return s; });
const add5 = makeAdder(5);
document.write('<div class="card"><div class="label">Counter Closure (c1 start=0)</div><code>setelah 3x increment: '+c1.value()+'</code></div>');
document.write('<div class="card"><div class="label">Counter Closure (c2 start=10)</div><code>setelah increment+decrement: '+c2.value()+'</code></div>');
document.write('<div class="card"><div class="label">Factory Function (multiplier)</div><code>double(7) = '+double(7)+', triple(7) = '+triple(7)+'</code></div>');
document.write('<div class="card"><div class="label">Memoization</div><code>slowSquare(100) = '+slowSquare(100)+'</code><br/><code>slowSquare(100) = '+slowSquare(100)+'</code></div>');
document.write('<div class="card"><div class="label">Partial Application</div><code>add5(3) = '+add5(3)+', add5(10) = '+add5(10)+'</code></div>');
</script></body>
</html>`,
  quiz:{question:'Apa yang dimaksud dengan closure?',options:['Fungsi yang tidak punya return','Fungsi yang mengingat variabel dari scope luar setelah scope tersebut selesai','Fungsi yang berjalan otomatis','Fungsi tanpa nama'],correctIndex:1,explanation:'Closure adalah fungsi yang memiliki akses ke variabel dari scope luar (enclosing scope) bahkan setelah fungsi luar selesai dieksekusi.'},
  prevPath:'js-spread-rest', nextPath:'js-dom-intro'
},

// DOM INTRO
'js-dom-intro': {
  courseId:'javascript', title:'DOM Introduction', chapter:'JS HTML DOM', color:'yellow',
  theory:'<h2>DOM Introduction</h2><p>DOM (Document Object Model) adalah representasi halaman HTML sebagai tree of objects yang bisa dimanipulasi JavaScript.</p><h3>Konsep DOM</h3><ul><li><code>document</code> - root dari DOM</li><li>Setiap tag HTML = Node</li><li>JavaScript bisa baca, ubah, tambah, hapus elemen</li></ul><div class="bg-indigo-50 border border-indigo-500 rounded-xl p-4 mt-4"><p class="text-indigo-900">DOM memungkinkan halaman web menjadi dinamis dan interaktif.</p></div>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
}

</style>
</head>
<body>
  <div id="out"></div>
<script>
  const o = document.getElementById("out");
  o.innerHTML += "<div class='card'><div class='label'>document.title</div><code>" + document.title + "</code></div>";
  o.innerHTML += "<div class='card'><div class='label'>document.URL</div><code>" + document.URL + "</code></div>";
  o.innerHTML += "<div class='card'><div class='label'>typeof document</div><code>" + typeof document + "</code></div>";
  o.innerHTML += "<div class='card'><div class='label'>document.body.tagName</div><code>" + document.body.tagName + "</code></div>";
</script>
</body>
</html>`,
  quiz:{question:'Apa itu DOM?',options:['Database Object Model','Document Object Model','Design Object Method','Dynamic Object Manipulation'],correctIndex:1,explanation:'DOM adalah Document Object Model - representasi HTML sebagai tree of objects yang bisa dimanipulasi JavaScript.'},
  prevPath:'js-closures', nextPath:'js-dom-selectors'
},

// DOM SELECTORS
'js-dom-selectors': {
  courseId:'javascript', title:'DOM Selectors', chapter:'JS HTML DOM', color:'yellow',
  theory:'<h2>DOM Selectors</h2><p>JavaScript menyediakan berbagai cara untuk memilih elemen HTML dari DOM.</p><h3>Method Selector</h3><ul><li><code>getElementById(id)</code> - pilih by ID</li><li><code>getElementsByClassName(class)</code> - pilih by class</li><li><code>getElementsByTagName(tag)</code> - pilih by tag</li><li><code>querySelector(css)</code> - pilih satu dengan CSS selector</li><li><code>querySelectorAll(css)</code> - pilih semua dengan CSS selector</li></ul><div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mt-4"><p class="text-orange-900"><strong>Rekomendasi:</strong> Gunakan <code>querySelector</code> dan <code>querySelectorAll</code> karena mendukung semua CSS selector.</p></div>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.item {
  padding: 6px 10px;
  background: #fef3c7;
  border-radius: 6px;
  margin: 3px 0;
  font-size: 0.85rem;
}

</style>
</head>
<body>
  <div id="judul" class="item">Elemen dengan id=judul</div>
  <p class="item teks">Paragraf 1</p>
  <p class="item teks">Paragraf 2</p>
  <div id="out" style="margin-top:12px"></div>

<script>
  const o = document.getElementById("out");
  const byId = document.getElementById("judul");
  o.innerHTML += "<div class='card'><div class='label'>getElementById</div>" + byId.textContent + "</div>";
  
  const byClass = document.querySelectorAll(".teks");
  o.innerHTML += "<div class='card'><div class='label'>querySelectorAll(.teks) - " + byClass.length + " elemen</div>" + Array.from(byClass).map(e => e.textContent).join(", ") + "</div>";
  
  const first = document.querySelector(".item");
  o.innerHTML += "<div class='card'><div class='label'>querySelector (pertama)</div>" + first.textContent + "</div>";
</script>
</body>
</html>`,
  quiz:{question:'Method mana yang mengembalikan SEMUA elemen yang cocok dengan CSS selector?',options:['querySelector()','getElementById()','querySelectorAll()','getElement()'],correctIndex:2,explanation:'querySelectorAll() mengembalikan NodeList berisi semua elemen yang cocok dengan CSS selector.'},
  prevPath:'js-dom-intro', nextPath:'js-dom-events'
},

// DOM EVENTS
'js-dom-events': {
  courseId:'javascript', title:'DOM Events', chapter:'JS HTML DOM', color:'yellow',
  theory:'<h2>DOM Events</h2><p>Event adalah aksi yang terjadi di browser - klik, hover, input, dll. JavaScript bisa merespons event ini.</p><h3>Cara Menambahkan Event</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">element.addEventListener("click", function() {<br/>&nbsp;&nbsp;console.log("diklik!");<br/>});</div><h3>Event Umum</h3><ul><li><code>click</code> - klik mouse</li><li><code>mouseover</code> / <code>mouseout</code> - hover</li><li><code>keydown</code> / <code>keyup</code> - keyboard</li><li><code>submit</code> - form submit</li><li><code>input</code> / <code>change</code> - input berubah</li><li><code>load</code> / <code>DOMContentLoaded</code> - halaman dimuat</li></ul><h3>Event Object</h3><p>Setiap event handler menerima object <code>event</code> dengan informasi detail.</p>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin: 4px;
}
.log {
  background: white;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 4px 0;
  font-size: 0.85rem;
  border-left: 3px solid #f59e0b;
}
#input {
  padding: 8px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  width: 200px;
  font-size: 0.9rem;
}

</style>
</head>
<body>
  <button class="btn" id="btn1" style="background:#6366f1;color:white">Klik Saya</button>
  <button class="btn" id="btn2" style="background:#22c55e;color:white">Hover Saya</button>
  <br/><br/>
  <input id="input" type="text" placeholder="Ketik sesuatu...">
  <div id="log" style="margin-top:12px"></div>

<script>
  const log = document.getElementById("log");

  function addLog(msg) {
    log.innerHTML = "<div class='log'>" + msg + "</div>" + log.innerHTML;
  }

  document.getElementById("btn1").addEventListener("click", e => {
    addLog("Klik! posisi: (" + e.clientX + "," + e.clientY + ")");
  });

  document.getElementById("btn2").addEventListener("mouseover", () => addLog("Mouse masuk tombol hijau"));
  document.getElementById("btn2").addEventListener("mouseout", () => addLog("Mouse keluar tombol hijau"));

  document.getElementById("input").addEventListener("input", e => addLog("Input: " + e.target.value));
  document.addEventListener("keydown", e => addLog("Key: " + e.key));
</script>
</body>
</html>`,
  quiz:{question:'Method apa yang digunakan untuk menambahkan event handler ke elemen?',options:['element.onClick()','element.addEvent()','element.addEventListener()','element.on()'],correctIndex:2,explanation:'addEventListener() adalah cara modern dan direkomendasikan untuk menambahkan event handler ke elemen DOM.'},
  prevPath:'js-dom-selectors', nextPath:'js-dom-manipulation'
},

// DOM MANIPULATION
'js-dom-manipulation': {
  courseId:'javascript', title:'DOM Manipulation', chapter:'JS HTML DOM', color:'yellow',
  theory:'<h2>DOM Manipulation</h2><p>JavaScript bisa mengubah konten, style, dan struktur halaman HTML secara dinamis.</p><h3>Mengubah Konten</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">el.textContent = "teks baru";<br/>el.innerHTML = "<b>HTML baru</b>";</div><h3>Mengubah Style</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">el.style.color = "red";<br/>el.classList.add("active");<br/>el.classList.toggle("hidden");</div><h3>Membuat & Menghapus Elemen</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">const div = document.createElement("div");<br/>parent.appendChild(div);<br/>parent.removeChild(div);</div>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin: 4px;
  font-size: 0.85rem;
}
.item {
  padding: 10px 14px;
  background: white;
  border-radius: 8px;
  margin: 6px 0;
  border: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.del {
  background: #ef4444;
  color: white;
  padding: 4px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.8rem;
}

</style>
</head>
<body>
  <div style="margin-bottom:12px">
    <input id="inp" placeholder="Tambah item..." style="padding:8px 12px;border:2px solid #e2e8f0;border-radius:8px;margin-right:8px;">
    <button class="btn" style="background:#6366f1;color:white" onclick="addItem()">Tambah</button>
    <button class="btn" style="background:#f59e0b;color:white" onclick="changeStyle()">Ubah Style</button>
  </div>
  <div id="list"></div>

<script>
  let count = 0;

  function addItem() {
    const v = document.getElementById("inp").value || "Item " + (++count);
    const d = document.createElement("div");
    d.className = "item";
    d.innerHTML = v + "<button class='del' onclick='this.parentElement.remove()'>Hapus</button>";
    document.getElementById("list").appendChild(d);
    document.getElementById("inp").value = "";
  }

  function changeStyle() {
    const items = document.querySelectorAll(".item");
    items.forEach((el, i) => {
      el.style.background = ["#dbeafe", "#dcfce7", "#fef3c7", "#fce7f3"][i % 4];
    });
  }

  addItem();
  addItem();
  addItem();
</script>
</body>
</html>`,
  quiz:{question:'Apa perbedaan textContent dan innerHTML?',options:['Tidak ada perbedaan','textContent hanya teks biasa, innerHTML bisa berisi HTML','innerHTML lebih cepat','textContent untuk div, innerHTML untuk span'],correctIndex:1,explanation:'textContent mengatur teks biasa (aman dari XSS), innerHTML mengatur konten HTML (bisa menyisipkan tag HTML).'},
  prevPath:'js-dom-events', nextPath:'js-dom-forms'
},

// DOM FORMS
'js-dom-forms': {
  courseId:'javascript', title:'DOM Forms', chapter:'JS HTML DOM', color:'yellow',
  theory:'<h2>DOM Forms</h2><p>JavaScript bisa mengakses dan memvalidasi form HTML sebelum dikirim ke server.</p><h3>Mengakses Form</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">const form = document.getElementById("myForm");<br/>const email = document.getElementById("email").value;<br/>form.addEventListener("submit", e => {<br/>&nbsp;&nbsp;e.preventDefault(); // cegah reload<br/>});</div><h3>Validasi</h3><ul><li>Cek field kosong</li><li>Validasi format email dengan RegExp</li><li>Cek panjang password</li><li>Tampilkan pesan error</li></ul>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.form {
  background: white;
  border-radius: 12px;
  padding: 20px;
  max-width: 400px;
}
.field {
  margin-bottom: 14px;
}
.label {
  font-size: 0.8rem;
  font-weight: bold;
  color: #475569;
  margin-bottom: 4px;
  display: block;
}
.input {
  width: 100%;
  padding: 10px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  box-sizing: border-box;
}
.input.error {
  border-color: #ef4444;
}
.err {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 3px;
}
.btn {
  width: 100%;
  padding: 12px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 0.9rem;
}
.success {
  background: #dcfce7;
  border: 1px solid #22c55e;
  border-radius: 8px;
  padding: 12px;
  color: #166534;
  font-weight: bold;
  display: none;
}

</style>
</head>
<body>
  <div class="form">
    <h3 style="margin:0 0 16px;color:#1e293b">Form Registrasi</h3>
    <div id="success" class="success">Registrasi berhasil!</div>
    
    <div class="field">
      <label class="label">Nama Lengkap</label>
      <input class="input" id="nama" placeholder="Masukkan nama">
      <div class="err" id="err-nama"></div>
    </div>
    
    <div class="field">
      <label class="label">Email</label>
      <input class="input" id="email" type="email" placeholder="nama@email.com">
      <div class="err" id="err-email"></div>
    </div>
    
    <div class="field">
      <label class="label">Password</label>
      <input class="input" id="pass" type="password" placeholder="Min 6 karakter">
      <div class="err" id="err-pass"></div>
    </div>
    
    <button class="btn" onclick="submit()">Daftar</button>
  </div>

<script>
  function setErr(id, msg) {
    const el = document.getElementById("err-" + id);
    const inp = document.getElementById(id);
    el.textContent = msg;
    inp.className = "input" + (msg ? " error" : "");
  }

  function submit() {
    let ok = true;
    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = document.getElementById("pass").value;

    if (!nama) {
      setErr("nama", "Nama wajib diisi");
      ok = false;
    } else {
      setErr("nama", "");
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErr("email", "Email tidak valid");
      ok = false;
    } else {
      setErr("email", "");
    }

    if (pass.length < 6) {
      setErr("pass", "Password min 6 karakter");
      ok = false;
    } else {
      setErr("pass", "");
    }

    if (ok) {
      document.getElementById("success").style.display = "block";
    }
  }
</script>
</body>
</html>`,
  quiz:{question:'Mengapa perlu memanggil e.preventDefault() saat handle form submit?',options:['Untuk mempercepat form','Untuk mencegah halaman reload/redirect saat form disubmit','Untuk menghapus form','Untuk validasi otomatis'],correctIndex:1,explanation:'e.preventDefault() mencegah behavior default browser (reload/redirect) sehingga kita bisa handle submit dengan JavaScript.'},
  prevPath:'js-dom-manipulation', nextPath:'js-fetch'
},

// FETCH API
'js-fetch': {
  courseId:'javascript', title:'Fetch API', chapter:'JS Web APIs & AJAX', color:'yellow',
  theory:'<h2>Fetch API</h2><p>Fetch API adalah cara modern untuk membuat HTTP request di JavaScript.</p><h3>Sintaks Dasar</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">fetch(url)<br/>&nbsp;&nbsp;.then(res => res.json())<br/>&nbsp;&nbsp;.then(data => console.log(data))<br/>&nbsp;&nbsp;.catch(err => console.error(err));</div><h3>Dengan Async/Await</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">async function getData() {<br/>&nbsp;&nbsp;const res = await fetch(url);<br/>&nbsp;&nbsp;const data = await res.json();<br/>&nbsp;&nbsp;return data;<br/>}</div><h3>POST Request</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">fetch(url, {<br/>&nbsp;&nbsp;method: "POST",<br/>&nbsp;&nbsp;headers: { "Content-Type": "application/json" },<br/>&nbsp;&nbsp;body: JSON.stringify(data)<br/>});</div>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.btn {
  padding: 8px 16px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin: 4px;
}
.user {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #6366f1;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
}

</style>
</head>
<body>
  <button class="btn" onclick="loadUser()">Load User</button>
  <button class="btn" style="background:#22c55e" onclick="loadPosts()">Load Posts</button>
  <div id="out"></div>

<script>
  const out = document.getElementById("out");

  async function loadUser() {
    out.innerHTML = "<div class='card'>Loading...</div>";
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const u = await res.json();
      out.innerHTML = "<div class='card'><div class='label'>User dari API</div><div class='user'><div class='avatar'>" + u.name[0] + "</div><div><strong>" + u.name + "</strong><br/><small>" + u.email + "</small><br/><small>" + u.address.city + "</small></div></div></div>";
    } catch (e) {
      out.innerHTML = "<div class='card' style='color:red'>Error: " + e.message + "</div>";
    }
  }

  async function loadPosts() {
    out.innerHTML = "<div class='card'>Loading...</div>";
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    const posts = await res.json();
    out.innerHTML = posts.map(p => "<div class='card'><div class='label'>Post #" + p.id + "</div><strong>" + p.title + "</strong><p style='color:#64748b;font-size:0.85rem;margin:4px 0'>" + p.body.slice(0,80) + "...</p></div>").join("");
  }
</script>
</body>
</html>`,
  quiz:{question:'Apa yang dikembalikan oleh fetch()?',options:['Data langsung','Promise yang resolve dengan Response object','JSON object','String'],correctIndex:1,explanation:'fetch() mengembalikan Promise yang resolve dengan Response object. Perlu memanggil .json() atau .text() untuk mendapatkan data.'},
  prevPath:'js-dom-forms', nextPath:'js-json'
},

// JSON
'js-json': {
  courseId:'javascript', title:'JS JSON', chapter:'JS Web APIs & AJAX', color:'yellow',
  theory:'<h2>JS JSON</h2><p>JSON (JavaScript Object Notation) adalah format data ringan untuk pertukaran data antara server dan client.</p><h3>Aturan JSON</h3><ul><li>Key harus string dengan double quote</li><li>Value bisa: string, number, boolean, null, array, object</li><li>Tidak ada komentar</li><li>Tidak ada trailing comma</li></ul><h3>Method JSON</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">JSON.stringify(obj) // object ke string JSON<br/>JSON.parse(str)    // string JSON ke object</div><h3>Contoh JSON</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm">{"nama":"Arif","umur":25,"aktif":true}</div>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
code {
  background: #fef3c7;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.82rem;
}
.pre {
  background: #1e293b;
  color: #e2e8f0;
  border-radius: 8px;
  padding: 12px;
  font-family: monospace;
  font-size: 0.82rem;
  white-space: pre;
  overflow-x: auto;
}

</style>
</head>
<body>
<script>
  const obj = {
    nama: "Arif Rahmat",
    umur: 25,
    aktif: true,
    hobi: ["coding", "gaming"],
    alamat: {
      kota: "Jakarta",
      kodePos: "12345"
    }
  };

  const jsonStr = JSON.stringify(obj, null, 2);
  const parsed = JSON.parse(jsonStr);
  const compact = JSON.stringify(obj);

  document.write("<div class='card'><div class='label'>Object JavaScript</div><code>typeof obj = " + typeof obj + "</code></div>");
  document.write("<div class='card'><div class='label'>JSON.stringify() - compact</div><code>" + compact.slice(0,60) + "...</code></div>");
  document.write("<div class='card'><div class='label'>JSON.stringify(obj, null, 2) - pretty</div><div class='pre'>" + jsonStr + "</div></div>");
  document.write("<div class='card'><div class='label'>JSON.parse() - kembali ke object</div><code>parsed.nama = " + parsed.nama + " | parsed.hobi[0] = " + parsed.hobi[0] + "</code></div>");

  const arr = [{id:1,nama:"A"}, {id:2,nama:"B"}];
  document.write("<div class='card'><div class='label'>JSON Array</div><code>" + JSON.stringify(arr) + "</code></div>");
</script>
</body>
</html>`,
  quiz:{question:'Method mana yang mengubah JavaScript object menjadi string JSON?',options:['JSON.parse()','JSON.convert()','JSON.stringify()','JSON.encode()'],correctIndex:2,explanation:'JSON.stringify() mengubah JavaScript object/array menjadi string JSON. JSON.parse() adalah kebalikannya.'},
  prevPath:'js-fetch', nextPath:'js-localstorage'
},

// LOCALSTORAGE
'js-localstorage': {
  courseId:'javascript', title:'LocalStorage', chapter:'JS Web APIs & AJAX', color:'yellow',
  theory:'<h2>LocalStorage</h2><p>LocalStorage memungkinkan menyimpan data di browser yang tetap ada meski halaman di-refresh.</p><h3>Method</h3><ul><li><code>localStorage.setItem(key, value)</code> - simpan</li><li><code>localStorage.getItem(key)</code> - ambil</li><li><code>localStorage.removeItem(key)</code> - hapus satu</li><li><code>localStorage.clear()</code> - hapus semua</li><li><code>localStorage.length</code> - jumlah item</li></ul><h3>Perbedaan Storage</h3><div class="bg-orange-50 border border-orange-200 rounded-xl p-4"><p class="text-orange-900"><strong>localStorage</strong>: permanen sampai dihapus manual</p><p class="text-orange-900 mt-1"><strong>sessionStorage</strong>: hilang saat tab ditutup</p></div>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.btn {
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin: 3px;
  font-size: 0.82rem;
}
.inp {
  padding: 8px 12px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  margin: 3px;
  font-size: 0.85rem;
}

</style>
</head>
<body>
  <div style="margin-bottom:12px">
    <input class="inp" id="key" placeholder="Key" style="width:100px">
    <input class="inp" id="val" placeholder="Value" style="width:150px">
    <button class="btn" style="background:#6366f1;color:white" onclick="save()">Simpan</button>
    <button class="btn" style="background:#ef4444;color:white" onclick="clearAll()">Clear All</button>
  </div>
  <div id="out"></div>

<script>
  function save() {
    const k = document.getElementById("key").value;
    const v = document.getElementById("val").value;
    if (k && v) {
      localStorage.setItem(k, v);
      render();
    }
  }

  function clearAll() {
    localStorage.clear();
    render();
  }

  function render() {
    const out = document.getElementById("out");
    let html = "<div class='card'><div class='label'>LocalStorage (" + localStorage.length + " item)</div>";
    
    if (localStorage.length === 0) {
      html += "<em style='color:#94a3b8'>Kosong</em>";
    } else {
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        html += "<div style='display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid #f1f5f9'><span><strong>" + k + "</strong>: " + localStorage.getItem(k) + "</span><button onclick='localStorage.removeItem(" + JSON.stringify(k) + ");render()' style='background:#ef4444;color:white;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;font-size:0.75rem'>X</button></div>";
      }
    }
    html += "</div>";
    out.innerHTML = html;
  }

  localStorage.setItem("nama", "Arif");
  localStorage.setItem("tema", "dark");
  render();
</script>
</body>
</html>`,
  quiz:{question:'Apa perbedaan localStorage dan sessionStorage?',options:['Tidak ada perbedaan','localStorage permanen, sessionStorage hilang saat tab ditutup','sessionStorage lebih besar','localStorage hanya untuk string'],correctIndex:1,explanation:'localStorage menyimpan data secara permanen sampai dihapus manual. sessionStorage hilang saat tab/browser ditutup.'},
  prevPath:'js-json', nextPath:'js-ajax'
},

// AJAX
'js-ajax': {
  courseId:'javascript', title:'JS AJAX', chapter:'JS Web APIs & AJAX', color:'yellow',
  theory:'<h2>JS AJAX</h2><p>AJAX (Asynchronous JavaScript And XML) memungkinkan update halaman web tanpa reload penuh.</p><h3>Cara Modern: Fetch API</h3><div class="bg-slate-100 rounded-xl p-4 font-mono text-sm mb-3">async function loadData() {<br/>&nbsp;&nbsp;const res = await fetch("/api/data");<br/>&nbsp;&nbsp;const data = await res.json();<br/>&nbsp;&nbsp;document.getElementById("result").innerHTML = data.message;<br/>}</div><h3>HTTP Methods</h3><ul><li><code>GET</code> - ambil data</li><li><code>POST</code> - kirim data baru</li><li><code>PUT</code> - update data</li><li><code>DELETE</code> - hapus data</li></ul><h3>Status Code</h3><ul><li><code>200</code> - OK</li><li><code>201</code> - Created</li><li><code>400</code> - Bad Request</li><li><code>404</code> - Not Found</li><li><code>500</code> - Server Error</li></ul>',
  code:`<!DOCTYPE html>
<html>
<head>
<style>
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background: #fffbeb;
}
.card {
  background: white;
  border-radius: 10px;
  padding: 14px;
  margin: 8px 0;
  border-left: 4px solid #f59e0b;
}
.label {
  font-size: 0.7rem;
  font-weight: bold;
  color: #94a3b8;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  margin: 4px;
}
.loading {
  color: #94a3b8;
  font-style: italic;
}
.ok {
  color: #059669;
  font-weight: bold;
}
.err {
  color: #ef4444;
}

</style>
</head>
<body>
  <button class="btn" style="background:#6366f1;color:white" onclick="getUser()">GET User</button>
  <button class="btn" style="background:#22c55e;color:white" onclick="getUsers()">GET Users List</button>
  <button class="btn" style="background:#f59e0b;color:white" onclick="postData()">POST Data</button>
  <div id="out"></div>

<script>
  const out = document.getElementById("out");

  function log(label, content, type = "") {
    out.innerHTML = "<div class='card'><div class='label'>" + label + "</div><span class='" + type + "'>" + content + "</span></div>" + out.innerHTML;
  }

  async function getUser() {
    log("Loading...", "Fetching user...", "loading");
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      log("Status", res.status + " " + res.statusText, "ok");
      const u = await res.json();
      log("GET /users/1", "Nama: " + u.name + " | Email: " + u.email + " | Kota: " + u.address.city, "ok");
    } catch (e) {
      log("Error", e.message, "err");
    }
  }

  async function getUsers() {
    log("Loading...", "Fetching users...", "loading");
    const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3");
    const users = await res.json();
    log("GET /users (3 data)", users.map(u => u.name).join(", "), "ok");
  }

  async function postData() {
    log("Loading...", "Posting data...", "loading");
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "Belajar AJAX", body: "AJAX sangat berguna!", userId: 1 })
    });
    const data = await res.json();
    log("POST /posts (status " + res.status + ")", "ID baru: " + data.id + " | Title: " + data.title, "ok");
  }
</script>
</body>
</html>`,
  quiz:{question:'HTTP method apa yang digunakan untuk mengambil data dari server?',options:['POST','PUT','GET','DELETE'],correctIndex:2,explanation:'GET digunakan untuk mengambil/membaca data dari server tanpa mengubah data di server.'},
  prevPath:'js-localstorage', nextPath:null
},

};

export const jsAllLessons = { ...jsLessonsData, ...jsLessonsData2 };

