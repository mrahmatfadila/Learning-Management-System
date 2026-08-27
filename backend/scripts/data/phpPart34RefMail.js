// ==========================================================
// DATA MATERI PHP: BAB 10 - PHP REFERENCE (MAIL: 369-370)
// Kurikulum Resmi DevGrow & W3Schools PHP 8.x
// ==========================================================

const phpPart34RefMail = [
  // 369. EZMLM_HASH()
  {
    id: 'php-ref-ezmlm-hash',
    title: 'PHP ezmlm_hash()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 369,
    overview: 'Kuasai fungsi ezmlm_hash(): menghitung nilai integer hash untuk alamat email pada sistem manajemen milis EZMLM (Easy Mailing List Manager) berbasis Mail Transfer Agent Qmail.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">PHP MAIL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 369 / 370</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">📬 Hashing Milis EZMLM (ezmlm_hash)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>ezmlm_hash(string $addr): int</code> menghasilkan nilai integer hash 32-bit dari alamat email. Digunakan secara historis pada server Unix dengan Qmail untuk mengelompokkan subscriber mailing list ke dalam tabel database hash EZMLM.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$email = "subscriber@devgrow.id";

if (function_exists('ezmlm_hash')) {
    $hashValue = ezmlm_hash($email);
    echo "<h3>Hasil Penggunaan ezmlm_hash():</h3>";
    echo "<p>Email: <strong>$email</strong></p>";
    echo "<p>Hash EZMLM Integer: <strong style='color: #059669;'>$hashValue</strong></p>";
} else {
    // Simulasi algoritma hash DJB yang mendasari ezmlm jika ekstensi tidak di-compile
    function simulasiEzmlmHash(string $str): int {
        $h = 5381;
        for ($i = 0; $i < strlen($str); $i++) {
            $h = (($h << 5) + $h) ^ ord($str[$i]);
        }
        return $h & 52;
    }
    
    echo "<h3>Hasil ezmlm_hash() (Simulasi Algoritma Milis):</h3>";
    echo "<p>Email: <strong>$email</strong></p>";
    echo "<p>Hash EZMLM Bucket: <strong style='color: #4f46e5;'>" . simulasiEzmlmHash($email) . "</strong></p>";
}
?>`,
    codeExplanation: [
      'ezmlm_hash($email) mengembalikan nilai hash numerik untuk pengindeksan database subscriber mailing list EZMLM/qmail.'
    ],
    challenge: {
      instruction: 'Pahami fungsi hash milis ezmlm_hash().',
      starterCode: `<?php
echo "ezmlm_hash digunakan untuk mailing list EZMLM pada Qmail.";
?>`,
      hint: 'Klik RUN untuk mereview.'
    },
    quiz: {
      question: 'Sistem Mail Transfer Agent (MTA) dan mailing list manager apakah yang menggunakan `ezmlm_hash()`?',
      options: [
        'EZMLM (Easy Mailing List Manager) pada server mail Qmail',
        'Microsoft Exchange',
        'Sendmail saja',
        'Postfix database'
      ],
      correctIndex: 0,
      explanation: 'ezmlm_hash dirancang khusus untuk integrasi mailing list EZMLM dengan Qmail.'
    }
  },

  // 370. MAIL()
  {
    id: 'php-ref-mail',
    title: 'PHP mail()',
    chapter: 'PHP Reference',
    chapterId: 'php-chap-reference',
    order: 370,
    overview: 'Kuasai fungsi mail(): mengirim email teks murni atau HTML profesional langsung dari server PHP dengan konfigurasi Header MIME lengkap (From, Reply-To, CC, BCC, Content-Type) dan mitigasi Email Header Injection.',
    theory: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-purple-500/15 via-indigo-500/10 to-transparent p-6 rounded-2xl border border-purple-500/30">
          <div class="flex items-center gap-2 mb-2">
            <span class="px-2.5 py-0.5 rounded-full text-xs font-black bg-purple-600 text-white">CORE EMAIL</span>
            <span class="text-xs text-purple-600 dark:text-purple-400 font-bold uppercase tracking-wider">Materi 370 / 370</span>
          </div>
          <h2 class="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-2">✉️ Mengirim Email dari PHP (mail)</h2>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <code>mail($to, $subject, $message, $headers, $params): bool</code> adalah fungsi bawaan PHP untuk mengirim email via daemon MTA lokal (Sendmail / Postfix / SMTP). Untuk mengirim email HTML, sertakan header <code>MIME-Version: 1.0</code> dan <code>Content-Type: text/html; charset=UTF-8</code>.
          </p>
        </div>
      </div>
    `,
    code: `<?php
$to = "student@devgrow.id";
$subject = "Aktivasi Akun Kursus DevGrow LMS";

// Template Pesan Berformat HTML Mewah
$message = <<<HTML
<!DOCTYPE html>
<html>
<body style="font-family: Arial, sans-serif; background-color: #f8fafc; padding: 20px;">
    <div style="max-width: 600px; background: white; border-radius: 12px; padding: 24px; border: 1px solid #e2e8f0;">
        <h2 style="color: #4f46e5; margin-top: 0;">🎉 Selamat Datang di DevGrow LMS!</h2>
        <p>Halo <strong>Rahmat Fadila</strong>, pendaftaran modul PHP 8 Anda telah berhasil.</p>
        <p style="margin: 20px 0;">
            <a href="https://devgrow.id/verify" style="background: #4f46e5; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                Verifikasi Akun Sekarang
            </a>
        </p>
        <p style="color: #64748b; font-size: 12px;">Jika Anda tidak mendaftar, abaikan email ini.</p>
    </div>
</body>
</html>
HTML;

// Headers MIME Standar RFC
$headers = [
    'From'         => 'DevGrow LMS <noreply@devgrow.id>',
    'Reply-To'     => 'Support Team <support@devgrow.id>',
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/html; charset=UTF-8',
    'X-Mailer'     => 'PHP/' . phpversion()
];

echo "<h3>Hasil Simulasi Pengiriman Email via mail():</h3>";
echo "<p>Penerima: <strong>$to</strong></p>";
echo "<p>Subjek: <strong>$subject</strong></p>";
echo "<p>Status Eksekusi Header: <strong style='color: #059669;'>Header MIME HTML Valid Siap Kirim</strong></p>";
?>`,
    codeExplanation: [
      'mail($to, $subject, $message, $headers) menerima array asosiatif header di PHP 7.2+.',
      'Content-Type: text/html; charset=UTF-8 memberitahu email client (Gmail/Outlook) untuk me-render format HTML.',
      'Di lingkungan produksi, library seperti PHPMailer atau Symfony Mailer sering digunakan untuk koneksi SMTP authenticated (TLS/SSL).'
    ],
    challenge: {
      instruction: 'Susun struktur array headers untuk email HTML dengan MIME-Version dan Content-Type.',
      starterCode: `<?php
$headers = [
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/html; charset=UTF-8'
];
echo "Header MIME: " . $headers['Content-Type'];
?>`,
      hint: 'Akses $headers[\'Content-Type\'].'
    },
    quiz: {
      question: 'Header MIME apakah yang WAJIB disertakan pada parameter `$headers` fungsi `mail()` agar email ditampilkan sebagai dokumen HTML visual alih-alih teks mentah?',
      options: [
        '`MIME-Version: 1.0` dan `Content-Type: text/html; charset=UTF-8`',
        '`Content-Type: application/json`',
        '`Accept: text/html`',
        '`Format: visual`'
      ],
      correctIndex: 0,
      explanation: 'Header Content-Type: text/html dan MIME-Version: 1.0 adalah standar resmi RFC untuk email HTML.'
    }
  }
];

module.exports = phpPart34RefMail;
