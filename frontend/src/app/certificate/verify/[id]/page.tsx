'use client';

import { useEffect, useState } from 'react';
import { Award, ShieldCheck, Download, ChevronLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

export default function CertificatePage() {
  const { id } = useParams();
  const router = useRouter();
  const [cert, setCert] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCert = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/enrollments/certificate/${id}`);
        if (res.ok) {
          setCert(await res.json());
        }
      } catch (err) {
        console.error('Failed to fetch certificate', err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchCert();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mb-4" />
          <p className="text-slate-500 font-medium">Memverifikasi Sertifikat...</p>
        </div>
      </div>
    );
  }

  if (!cert) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 max-w-md w-full text-center">
          <div className="w-20 h-20 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Sertifikat Tidak Valid</h2>
          <p className="text-slate-500 mb-6">Sertifikat dengan ID ini tidak ditemukan atau URL tidak lengkap.</p>
          <button onClick={() => router.push('/')} className="px-6 py-2.5 bg-slate-800 text-white rounded-xl font-semibold">Kembali ke Beranda</button>
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1131;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    bgGradient.addColorStop(0, '#f8fafc');
    bgGradient.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 30;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 8;
    ctx.strokeRect(80, 80, canvas.width - 160, canvas.height - 160);

    ctx.textAlign = 'center';
    
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 70px "Times New Roman", serif';
    ctx.fillText('CERTIFICATE OF COMPLETION', canvas.width / 2, 280);
    
    ctx.fillStyle = '#475569';
    ctx.font = 'italic 30px Georgia, serif';
    ctx.fillText('This certificate is proudly presented to', canvas.width / 2, 380);

    ctx.fillStyle = '#1d4ed8';
    ctx.font = 'bold 90px "Times New Roman", serif';
    ctx.fillText((cert.studentName || 'Student').toUpperCase(), canvas.width / 2, 500);

    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 300, 530);
    ctx.lineTo(canvas.width / 2 + 300, 530);
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 4;
    ctx.stroke();

    ctx.fillStyle = '#334155';
    ctx.font = '30px Arial, sans-serif';
    ctx.fillText('For successfully completing the comprehensive module:', canvas.width / 2, 620);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 50px Arial, sans-serif';
    ctx.fillText(cert.moduleTitle, canvas.width / 2, 700);

    ctx.lineWidth = 2;
    ctx.strokeStyle = '#64748b';
    
    ctx.beginPath();
    ctx.moveTo(300, 900);
    ctx.lineTo(600, 900);
    ctx.stroke();
    
    ctx.fillStyle = '#475569';
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('Date of Issue', 450, 940);
    
    ctx.fillStyle = '#0f172a';
    ctx.font = 'bold 30px Arial, sans-serif';
    const dateStr = new Date(cert.updatedAt || new Date()).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    ctx.fillText(dateStr, 450, 880);

    ctx.beginPath();
    ctx.moveTo(1000, 900);
    ctx.lineTo(1300, 900);
    ctx.stroke();
    
    ctx.fillStyle = '#475569';
    ctx.font = '24px Arial, sans-serif';
    ctx.fillText('Lead Instructor', 1150, 940);

    ctx.fillStyle = '#0f172a';
    ctx.font = 'italic 40px "Times New Roman", serif';
    ctx.fillText('DevGrow Academy', 1150, 870);

    const centerX = canvas.width / 2;
    const centerY = 900;
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI);
    ctx.fillStyle = '#ca8a04';
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#fef08a';
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(centerX, centerY, 65, 0, 2 * Math.PI);
    ctx.strokeStyle = '#eab308';
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.fillText('VERIFIED', centerX, centerY - 5);
    ctx.font = '16px Arial';
    ctx.fillText('EXCELLENCE', centerX, centerY + 20);

    ctx.fillStyle = '#64748b';
    ctx.font = '20px Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`Credential ID: CERT-${(id as string).toUpperCase()}`, 120, 1020);
    ctx.fillText(`Verify at: http://localhost:3000/certificate/verify/${id}`, 120, 1060);

    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = `Sertifikat_${cert.moduleTitle.replace(/\s+/g, '_')}.png`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <button onClick={() => router.push('/dashboard')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 font-medium transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Kembali ke Dashboard
        </button>

        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 overflow-hidden">
          {/* Header Verify */}
          <div className="bg-emerald-50 border-b border-emerald-100 p-6 flex items-center justify-center sm:justify-start gap-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-emerald-800">Sertifikat Valid & Terverifikasi</h1>
              <p className="text-sm text-emerald-600">Dikeluarkan oleh DevGrow Academy</p>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Penerima Sertifikat</h3>
                <p className="text-3xl font-black text-slate-800 mb-8">{cert.studentName}</p>

                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Modul yang Diselesaikan</h3>
                <p className="text-xl font-bold text-indigo-600 mb-4">{cert.moduleTitle}</p>
                <p className="text-slate-600 leading-relaxed mb-8">{cert.moduleDescription || 'Materi pembelajaran kurikulum DevGrow Academy.'}</p>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Credential ID</span>
                    <span className="font-bold text-slate-800 font-mono">CERT-{(id as string)?.substring(0,8).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Tanggal Terbit</span>
                    <span className="font-bold text-slate-800">
                      {new Date(cert.updatedAt || new Date()).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-slate-100">
                    <span className="text-slate-500">Instruktur Utama</span>
                    <span className="font-bold text-slate-800">DevGrow Academy</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center bg-slate-50 rounded-3xl p-8 border border-slate-200">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 mb-6">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1 text-center">Certificate of Completion</h3>
                <p className="text-sm text-slate-500 text-center mb-8">Bukti penyelesaian resmi.</p>
                
                <button onClick={handleDownload} className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold transition-all shadow-md shadow-indigo-600/20">
                  <Download className="w-5 h-5" /> Download PDF / Image
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
