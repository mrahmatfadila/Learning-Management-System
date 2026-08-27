module.exports = [
  // ── 181. JS FETCH API ───────────────────────────────────────────────────
  {
    id: 'js-fetch-api',
    title: 'JS Fetch API',
    chapter: 'JS Fetch API',
    chapterId: 'js-chap-fetchapi',
    order: 181,
    overview: 'Menguasai Fetch API modern: pengiriman request HTTP (GET, POST, PUT, DELETE), konfigurasi Headers & Body, parsing response.json(), penanganan error response.ok, dan pembatalan request via AbortController.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-amber-500/15 via-yellow-500/10 to-transparent p-6 rounded-2xl border border-yellow-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-yellow-500 text-slate-950">FETCH API</span>
            <span class="text-xs text-yellow-600 dark:text-yellow-400 font-bold uppercase tracking-wider">Materi 181 / 195</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">🌐 Komunikasi Jaringan Modern: Fetch API</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <strong>Fetch API</strong> menyediakan antarmuka standar berbasis Promise untuk mengambil sumber daya di jaringan. Fetch menggantikan objek <code>XMLHttpRequest</code> klasik dengan sintaks yang jauh lebih bersih dan terintegrasi dengan <code>async/await</code>.
          </p>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>JS Fetch API Demo</title>
</head>
<body style="font-family: sans-serif; padding: 24px;">

  <h2>Simulasi Pengiriman Data dengan Fetch API (POST)</h2>
  <button onclick="kirimDataMateri()" style="padding: 10px 20px; background: #0284c7; color: white; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">
    🚀 Kirim Request POST
  </button>
  <div id="output" style="margin-top: 15px; background: #0f172a; color: #38bdf8; padding: 15px; border-radius: 8px; font-family: monospace;"></div>

  <script>
    async function kirimDataMateri() {
      const output = document.getElementById('output');
      output.innerHTML = '⏳ Mengirim request HTTP ke Content API server...';

      const payload = {
        judul: 'Mastering Fetch API',
        kategori: 'Web API'
      };

      try {
        // Simulasi Request Fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

        // Simulasi respons sukses API
        const mockResponse = {
          status: 201,
          ok: true,
          json: async () => ({ id: 'MAT-181', ...payload, createdAt: new Date().toISOString() })
        };

        if (!mockResponse.ok) {
          throw new Error('HTTP Error: ' + mockResponse.status);
        }

        const data = await mockResponse.json();
        clearTimeout(timeoutId);

        output.innerHTML = 
          '✅ <strong>Data Berhasil Diterima dari Server:</strong><br>' +
          '• ID: ' + data.id + '<br>' +
          '• Judul: ' + data.judul + '<br>' +
          '• Waktu: ' + data.createdAt;
      } catch (err) {
        output.innerHTML = '❌ Gagal: ' + err.message;
      }
    }
  </script>

</body>
</html>`,
    codeExplanation: [
      'fetch(url, options) menerima konfigurasi method (GET/POST/PUT/DELETE), headers (Content-Type: application/json), dan body payload berformat string JSON.',
      'response.ok bernilai true jika status kode HTTP berada dalam rentang sukses 200 - 299.',
      'AbortController memungkinkan pembatalan request jika koneksi timeout.'
    ],
    quiz: {
      question: 'Properti boolean apakah pada objek Response Fetch API yang menandakan bahwa HTTP status code berada pada rentang sukses 200-299?',
      options: [
        'response.success',
        'response.ok',
        'response.isDone',
        'response.valid'
      ],
      answer: 1,
      explanation: '`response.ok` bernilai `true` jika status HTTP request berada dalam rentang 200–299.'
    },
    challenge: {
      title: 'Tantangan: Parsing Response JSON',
      description: 'Lakukan parsing JSON dari response `const data = await res.json();`.',
      startingCode: `async function parseRes(res) {\n  // Parse json di bawah:\n  let data = null;\n  return data;\n}`,
      solution: `async function parseRes(res) {\n  let data = await res.json();\n  return data;\n}`
    }
  }
];
