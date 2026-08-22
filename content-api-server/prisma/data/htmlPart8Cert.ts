import { HtmlLessonItem } from './htmlPart2';

export const htmlLessonsPart8Cert: HtmlLessonItem[] = [
  // ── 1. HTML Certificate ───────────────────────────────────────────────────
  {
    title: 'HTML Certificate - Ujian Akhir & Sertifikasi Kompetensi Resmi',
    chapter: 'HTML Certificate',
    type: 'code',
    order: 113,
    overview: 'Selamat atas pencapaian Anda menyelesaikan seluruh materi! Bab ini adalah panduan ujian akhir kelulusan dan klaim Sertifikat Kompetensi HTML5 Developer resmi.',
    theory: `
      <div class="space-y-6">
        <div class="p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-transparent border border-amber-500/30">
          <h2 class="text-2xl font-black text-slate-800 dark:text-white mb-2">🎓 Sertifikasi Resmi HTML5 Developer</h2>
          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Sertifikat ini memvalidasi keahlian fundamental Anda dalam merancang struktur web modern berstandar W3C, menerapkan aksesibilitas, formulir terproteksi, multimedia responsif, hingga Web APIs.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-amber-500 font-bold block mb-1">1. Skor Kelulusan Minimal 80%</strong>
            <p class="text-slate-600 dark:text-slate-400">Menyelesaikan seluruh kuis dan tantangan coding di semua bab.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-emerald-500 font-bold block mb-1">2. ID Kredensial Unik</strong>
            <p class="text-slate-600 dark:text-slate-400">Setiap sertifikat dilengkapi QR Code dan tautan verifikasi online publik.</p>
          </div>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong class="text-indigo-500 font-bold block mb-1">3. Integrasi LinkedIn & CV</strong>
            <p class="text-slate-600 dark:text-slate-400">Dapat langsung ditambahkan ke profil LinkedIn dan portofolio kerja Anda.</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs text-indigo-900 dark:text-indigo-300">
          <strong>📋 Cakupan Ujian Komprehensif:</strong>
          <ul class="list-disc list-inside mt-2 space-y-1">
            <li>Struktur Dokumen & Doctype HTML5</li>
            <li>Hirarki Heading, Paragraf, Format Teks, & Entities</li>
            <li>Link Navigasi, List (ul/ol/dl), & Tabel Kompleks (Colspan/Rowspan)</li>
            <li>Formulir Web, Validasi Input Types, & Atribut Formaction</li>
            <li>Layout Semantik (Header, Nav, Section, Article, Aside, Footer)</li>
            <li>Grafika Vektor SVG & Canvas 2D Rendering</li>
            <li>Web Multimedia (Video/Audio) & Native Web APIs (Geolocation, Web Storage)</li>
          </ul>
        </div>
      </div>
    `,
    code: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Sertifikat Kelulusan HTML5</title>
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f1f5f9; padding: 30px; display: flex; justify-content: center; }
    .cert-card {
      background: white; border: 8px solid #0f172a; border-radius: 16px; padding: 40px;
      max-width: 600px; text-align: center; box-shadow: 0 10px 25px rgba(0,0,0,0.1); position: relative;
    }
    .cert-title { font-size: 26px; font-weight: 900; color: #0f172a; margin-bottom: 5px; }
    .cert-subtitle { font-size: 14px; color: #64748b; margin-bottom: 20px; }
    .recipient { font-size: 22px; font-weight: bold; color: #4f46e5; border-bottom: 2px solid #e2e8f0; padding-bottom: 10px; margin-bottom: 15px; }
    .badge { display: inline-block; background: #fef3c7; color: #d97706; padding: 6px 16px; border-radius: 999px; font-weight: bold; font-size: 12px; }
  </style>
</head>
<body>
  <div class="cert-card">
    <div class="badge">🏆 CERTIFICATE OF COMPLETION</div>
    <h1 class="cert-title">Certified HTML5 Specialist</h1>
    <p class="cert-subtitle">Diberikan kepada siswa berprestasi:</p>
    <div class="recipient">Nama Siswa Teladan</div>
    <p style="font-size: 13px; color: #334155; line-height: 1.6;">
      Telah berhasil menyelesaikan seluruh 61 Bab & 113 Materi Pembelajaran Kurikulum Standar Global HTML5 dengan nilai memuaskan.
    </p>
    <p style="font-size: 11px; color: #94a3b8; margin-top: 25px;">
      ID Kredensial: <strong>HTML-CERT-2026-99482</strong> &bull; Terverifikasi
    </p>
  </div>
</body>
</html>`,
    codeExplanation: [
      'Struktur kartu sertifikat menggunakan CSS Flexbox untuk tata letak tengah.',
      'ID Kredensial unik memvalidasi keaslian sertifikat di database sistem.',
      'Badge penghargaan menandai kelulusan resmi seluruh silabus HTML.'
    ],
    quiz: {
      question: 'Berapakah batas minimal skor persentase untuk berhasil lulus dan mengklaim sertifikat kompetensi resmi?',
      options: ['50%', '65%', '80%', '100% tanpa salah'],
      answer: 2,
      explanation: 'Standar kelulusan minimum sertifikasi kompetensi developer adalah skor 80% pada evaluasi materi.'
    },
    challenge: {
      instruction: 'Buat tag <div class="cert-badge"><h3>HTML5 Certified Developer</h3><p>Status: Lulus</p></div>.',
      starterCode: `<!DOCTYPE html>
<html>
<head>
  <title>Verifikasi Sertifikat</title>
</head>
<body>

</body>
</html>`,
      solutionCode: `<!DOCTYPE html>
<html>
<head>
  <title>Verifikasi Sertifikat</title>
</head>
<body>
  <div class="cert-badge">
    <h3>HTML5 Certified Developer</h3>
    <p>Status: Lulus</p>
  </div>
</body>
</html>`,
      hint: 'Gunakan <div class="cert-badge"> yang membungkus <h3> dan <p>'
    }
  }
];
