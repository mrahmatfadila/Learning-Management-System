// ==========================================================
// DATA MATERI PHP: BAB 8 - PHP CERTIFICATION EXAM & GRADUATION
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart10Cert = [
  // 1. PHP CERTIFICATE
  {
    id: 'php-cert-exam',
    title: 'PHP Certificate',
    chapter: 'PHP Cert',
    chapterId: 'php-chap-cert',
    order: 1,
    overview: 'Uji kompetensi puncak kelulusan (Capstone Certification Exam) modul PHP 8.x: evaluasi menyeluruh sintaks dasar, validasi form aman, OOP, PDO MySQL, XML, REST API, dan klaim Sertifikat Kelulusan Terverifikasi DevGrow.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 p-6 md:p-8 rounded-3xl text-white shadow-xl">
          <div class="flex items-center gap-2 mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-black bg-white/20 backdrop-blur-md text-white">UJIAN SERTIFIKASI RESMI</span>
            <span class="text-xs text-purple-200 font-bold uppercase tracking-wider">Bab 08 / Kelulusan</span>
          </div>
          <h2 class="text-2xl md:text-4xl font-black mb-3">🎓 Sertifikasi Kompetensi PHP 8.x Full-Stack</h2>
          <p class="text-purple-100 leading-relaxed text-sm md:text-base">
            Selamat! Anda telah menuntaskan perjalanan panjang mempelajari 113+ materi PHP dari fondasi dasar hingga arsitektur enterprise modern. Ujian ini menguji pemahaman komprehensif Anda untuk menerbitkan <strong>Sertifikat Kelulusan Resmi Terverifikasi</strong>.
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-900 text-slate-100 space-y-4 border border-slate-800">
          <h3 class="text-base font-black text-amber-400">📋 Peta Kompetensi Kelulusan yang Telah Dikuasai:</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
            <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <strong class="text-emerald-400 block mb-1">✓ Bab 1: PHP Tutorial & Control Flow</strong>
              Variabel, Tipe Data, Operator Spaceship, Match Expression, dan Loops.
            </div>
            <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <strong class="text-emerald-400 block mb-1">✓ Bab 2: Form Handling & Sanitasi OWASP</strong>
              Pencegahan XSS, Server-side validation, Filter RFC Email & URL, Sticky Forms.
            </div>
            <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <strong class="text-emerald-400 block mb-1">✓ Bab 3: PHP Advanced, Sessions & JSON</strong>
              File handling, Autentikasi Sessions login, REST API JSON, Exception Handling.
            </div>
            <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <strong class="text-emerald-400 block mb-1">✓ Bab 4: PHP OOP Architecture</strong>
              Constructor Promotion, Enkapsulasi, Multiple Interfaces, Traits, Namespaces.
            </div>
            <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <strong class="text-emerald-400 block mb-1">✓ Bab 5: Database Relasional & PDO</strong>
              Prepared Statements anti-SQLi, Transaksi ACID, Pagination LIMIT-OFFSET.
            </div>
            <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
              <strong class="text-emerald-400 block mb-1">✓ Bab 6 & 7: XML & Asynchronous AJAX</strong>
              SimpleXML, DOM Parser, Live Search Autocomplete, Realtime Polling.
            </div>
          </div>
        </div>
      </div>
    `,
    code: `<?php
// Generator Sertifikat Kelulusan DevGrow LMS
class SertifikatKelulusan {
    public string $nomorSertifikat;
    public string $tanggalTerbit;

    public function __construct(
        public string $namaSiswa,
        public string $namaKursus = "PHP 8.x Server-Side Web Programming",
        public int $nilaiUjian = 100,
        public string $predikat = "Cum Laude / Sangat Memuaskan"
    ) {
        $this->nomorSertifikat = "DEVGROW-PHP-" . strtoupper(bin2hex(random_bytes(4))) . "-2026";
        $this->tanggalTerbit = date("d F Y");
    }

    public function renderSertifikatHtml(): string {
        return "
        <div style='background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%); border: 3px solid #f59e0b; border-radius: 16px; padding: 25px; color: white; max-width: 520px; box-shadow: 0 10px 25px rgba(0,0,0,0.3); font-family: sans-serif;'>
          <div style='text-align: center; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 15px; margin-bottom: 15px;'>
            <div style='font-size: 11px; font-weight: bold; letter-spacing: 2px; color: #fbbf24; text-transform: uppercase;'>SERTIFIKAT KELULUSAN RESMI</div>
            <h2 style='margin: 5px 0 0 0; font-size: 22px; color: #ffffff;'>DevGrow Learning Management System</h2>
          </div>

          <div style='text-align: center; margin: 20px 0;'>
            <p style='margin: 0; font-size: 12px; color: #cbd5e1;'>Diberikan secara terhormat kepada:</p>
            <h3 style='margin: 8px 0; font-size: 24px; color: #38bdf8; text-decoration: underline;'>{$this->namaSiswa}</h3>
            <p style='margin: 0; font-size: 13px; color: #e2e8f0;'>Telah berhasil menuntaskan seluruh <strong>114 materi</strong> kurikulum keahlian:</p>
            <h4 style='margin: 8px 0; font-size: 16px; color: #fbbf24;'>{$this->namaKursus}</h4>
            <p style='margin: 0; font-size: 12px; color: #94a3b8;'>Predikat: <strong>{$this->predikat}</strong> (Nilai: {$this->nilaiUjian}/100)</p>
          </div>

          <div style='display: flex; justify-content: space-between; align-items: flex-end; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px; font-size: 11px; color: #94a3b8;'>
            <div>
              <span>ID Kredensial:</span><br>
              <strong style='color: #ffffff; font-family: monospace;'>{$this->nomorSertifikat}</strong>
            </div>
            <div style='text-align: right;'>
              <span>Diterbitkan Pada:</span><br>
              <strong style='color: #ffffff;'>{$this->tanggalTerbit}</strong>
            </div>
          </div>
        </div>
        ";
    }
}

$sertifikat = new SertifikatKelulusan("Muhammad Rahmat Fadila");
echo $sertifikat->renderSertifikatHtml();
?>`,
    codeExplanation: [
      'Class SertifikatKelulusan merangkum seluruh prinsip OOP modern PHP 8 (Constructor Promotion, String Interpolation, Cryptographic random_bytes).',
      'Setiap nomor sertifikat bersifat unik dan dapat diverifikasi melalui ID Kredensial resmi platform DevGrow.'
    ],
    challenge: {
      instruction: 'Ubah nama pada $sertifikat = new SertifikatKelulusan("Nama Anda"); dan klik RUN untuk mencetak sertifikat resmi Anda!',
      starterCode: `<?php
// Ganti dengan nama lengkap Anda:
$sertifikat = new SertifikatKelulusan("Muhammad Rahmat Fadila");
echo $sertifikat->renderSertifikatHtml();
?>`,
      hint: 'Klik RUN untuk merender sertifikat kelulusan interaktif.'
    },
    quiz: {
      question: 'Setelah menguasai seluruh kurikulum PHP 8.x (Dasar, OOP, Database PDO, XML, REST API, dan AJAX), langkah berikutnya yang disarankan dalam jalur karir Full-Stack Backend Developer adalah:',
      options: [
        'Mempelajari Modern Framework PHP seperti Laravel 11 / Symfony dan membangun aplikasi web komersial dunia nyata',
        'Mengulang kembali materi tag HTML dasar',
        'Berhenti belajar pemrograman',
        'Menghapus seluruh file skrip'
      ],
      correctIndex: 0,
      explanation: 'Setelah memahami fondasi kuat PHP 8 dan OOP, Anda siap melanjutkan ke ekosistem framework industri seperti Laravel 11, Lumen, atau Symfony.'
    }
  }
];

module.exports = phpPart10Cert;
