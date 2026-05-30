import nodemailer from 'nodemailer';

// Konfigurasi transporter untuk Gmail
export const sendVerificationEmail = async (to: string, code: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // Gunakan App Password dari Gmail
      },
    });

    const mailOptions = {
      from: `"DevGrow Academy" <${process.env.SMTP_USER}>`,
      to,
      subject: 'Kode Verifikasi Akun Anda',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
          <h2 style="color: #4f46e5; text-align: center;">Selamat datang di DevGrow Academy!</h2>
          <p style="color: #334155; font-size: 16px;">Halo,</p>
          <p style="color: #334155; font-size: 16px;">Terima kasih telah mendaftar. Untuk mengaktifkan akun Anda, masukkan 6-digit kode verifikasi berikut:</p>
          
          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <span style="font-size: 32px; font-weight: bold; color: #1e293b; letter-spacing: 5px;">${code}</span>
          </div>
          
          <p style="color: #64748b; font-size: 14px;">Kode ini hanya berlaku selama 1 jam. Jika Anda tidak merasa mendaftar di platform kami, abaikan email ini.</p>
          <br/>
          <p style="color: #334155; font-size: 16px;">Salam,<br/>Tim DevGrow</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Berhasil mengirim email verifikasi ke: ${to}`);
    return true;
  } catch (error) {
    console.error('Gagal mengirim email:', error);
    return false;
  }
};
