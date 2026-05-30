'use client';

import { use, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { coursesData } from '@/data/lessonData';
import { Download, ArrowLeft, Award, Share2, Lock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function CertificatePage({ params }: { params: Promise<{ courseId: string }> }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const courseId = unwrappedParams.courseId;
  const [userName, setUserName] = useState<string>('Demo Student');
  const [certId, setCertId] = useState<string>('');
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem('lms_user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        if (user.name) setUserName(user.name);
      } catch { /* ignore */ }
    }
    setCertId(Math.random().toString(36).substr(2, 8).toUpperCase());

    // Check progress
    let allDone = false;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('progress_')) {
        try {
          const saved = JSON.parse(localStorage.getItem(key) || '[]');
          if (Array.isArray(saved) && saved.length > 0) {
            setCompletedLessons(new Set(saved));
            allDone = true;
          }
        } catch {}
      }
    }

    // Cross check with the actual course data
    const course = coursesData.find((c) => c.id === courseId);
    if (course) {
      const total = course.modules.flatMap((m: any) => m.lessons).length;
      const allCompleted = new Set<string>();
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('progress_')) {
          try {
            const saved = JSON.parse(localStorage.getItem(key) || '[]');
            if (Array.isArray(saved)) saved.forEach((id: string) => allCompleted.add(id));
          } catch {}
        }
      }
      const allIds = course.modules.flatMap((m: any) => m.lessons.map((l: any) => l.id));
      const done = allIds.filter((id: string) => allCompleted.has(id)).length;
      setIsCompleted(done >= total && total > 0);
    }
  }, [courseId]);

  const currentCourse = coursesData.find((c) => c.id === courseId);

  if (!currentCourse) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Kursus tidak ditemukan</h1>
          <Link href="/dashboard" className="text-amber-600 hover:underline">Kembali ke Dashboard</Link>
        </div>
      </div>
    );
  }

  // If not completed, show locked screen
  if (!isCompleted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          body { font-family: 'Inter', sans-serif; }
        `}} />
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-200 shadow-sm">
            <Lock className="w-10 h-10 text-amber-500" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Sertifikat Terkunci</h1>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Selesaikan semua materi di kursus <span className="text-amber-600 font-semibold">{currentCourse.title}</span> terlebih dahulu untuk mendapatkan sertifikat.
          </p>
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 mx-auto px-8 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded-xl transition-colors shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali & Lanjutkan Belajar
          </button>
        </div>
      </div>
    );
  }

  const today = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const fullCertId = `DGA-${courseId.toUpperCase()}-${certId}`;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center py-12 px-4">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@400;500;600;700;800;900&family=Great+Vibes&display=swap');
        .font-cormorant { font-family: 'Cormorant Garamond', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .font-vibes { font-family: 'Great Vibes', cursive; }
        .print-exact { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        @media print {
          body * { visibility: hidden; }
          #certificate-container, #certificate-container * { visibility: visible; }
          #certificate-container { position: fixed; left: 0; top: 0; width: 100vw; height: 100vh; margin: 0; }
          .no-print { display: none !important; }
        }
      `}} />

      {/* Top Controls */}
      <div className="w-full max-w-[960px] flex items-center justify-between mb-8 no-print">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Kursus
        </button>
        <div className="flex gap-3">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-800 rounded-xl font-semibold text-sm transition-colors border border-slate-200 shadow-sm"
          >
            <Download className="w-4 h-4" /> Unduh PDF
          </button>
          <button
            onClick={() => {
              const text = `Saya telah menyelesaikan kursus ${currentCourse.title} di DevGrow Academy! 🎓\nVerifikasi di: https://devgrow.com/verify/${fullCertId}`;
              if (navigator.share) navigator.share({ title: 'Sertifikat DevGrow', text });
              else navigator.clipboard.writeText(text);
            }}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] hover:bg-[#0958a8] text-white rounded-xl font-semibold text-sm transition-colors shadow-sm"
          >
            <Share2 className="w-4 h-4" /> Bagikan ke LinkedIn
          </button>
        </div>
      </div>

      {/* Certificate */}
      <div
        id="certificate-container"
        className="w-full max-w-[960px] print-exact relative"
        style={{ aspectRatio: '1.414 / 1' }}
      >
        {/* Outer glow shadow */}
        <div className="absolute -inset-2 rounded-[24px] bg-slate-200/50 blur-xl" />

        {/* Main card */}
        <div className="relative w-full h-full bg-white rounded-2xl overflow-hidden shadow-xl border-[12px] border-slate-50">

          {/* Inner Border */}
          <div className="absolute inset-4 border-[3px] border-amber-500/80 rounded-xl" />
          <div className="absolute inset-5 border border-amber-500/40 rounded-lg" />

          {/* Corner ornaments */}
          {[
            'top-4 left-4 border-t-[3px] border-l-[3px]',
            'top-4 right-4 border-t-[3px] border-r-[3px]',
            'bottom-4 left-4 border-b-[3px] border-l-[3px]',
            'bottom-4 right-4 border-b-[3px] border-r-[3px]',
          ].map((cls, i) => (
            <div key={i} className={`absolute ${cls} border-amber-600 w-12 h-12`} />
          ))}

          {/* Background pattern/watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
            <div className="w-[500px] h-[500px] rounded-full border-[60px] border-amber-900" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-between py-12 px-16 text-center font-inter">

            {/* Header */}
            <div className="flex flex-col items-center gap-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-md bg-gradient-to-br from-amber-400 to-amber-600">
                  D
                </div>
                <span className="text-slate-800 font-bold text-xl tracking-wide">DevGrow Academy</span>
              </div>

              {/* Title */}
              <div className="flex flex-col items-center mt-2">
                <span className="text-amber-600 text-sm font-bold tracking-[0.4em] uppercase mb-2">Certificate of Completion</span>
                <h1 className="font-cormorant text-6xl font-bold tracking-wider text-slate-900">
                  CERTIFICATE
                </h1>
              </div>
            </div>

            {/* Center — recipient */}
            <div className="flex flex-col items-center gap-4 my-2">
              <p className="text-slate-500 text-sm font-medium tracking-[0.2em] uppercase">Dengan bangga diberikan kepada</p>

              {/* Name */}
              <div className="relative">
                <h2 className="font-cormorant italic text-5xl font-bold text-slate-900 relative px-8 py-2 border-b-2 border-amber-500/40">
                  {userName}
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-base leading-relaxed max-w-md mt-4">
                Telah berhasil menyelesaikan seluruh kurikulum dan membuktikan keahlian dalam program
              </p>
              <h3 className="font-inter text-2xl font-bold text-slate-900 max-w-lg leading-tight mt-2">
                {currentCourse.title}
              </h3>
            </div>

            {/* Footer — signatures */}
            <div className="w-full flex items-end justify-between mt-4">

              {/* Date */}
              <div className="flex flex-col items-start text-left">
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Tanggal Penerbitan</div>
                <div className="text-slate-900 text-sm font-bold border-b-2 border-slate-200 pb-1 min-w-[160px]">{today}</div>
              </div>

              {/* Seal */}
              <div className="flex flex-col items-center -mb-4">
                <div className="relative w-28 h-28">
                  {/* Main seal */}
                  <div className="relative w-full h-full rounded-full flex items-center justify-center border-4 border-amber-500 bg-white shadow-xl">
                    <div className="absolute inset-1.5 rounded-full border-2 border-dashed border-amber-500/60" />
                    <Award className="w-10 h-10 text-amber-500" />
                  </div>
                </div>
                <div className="mt-3 text-amber-600 text-[10px] font-black tracking-[0.3em] uppercase">VERIFIED</div>
              </div>

              {/* Founder signature */}
              <div className="flex flex-col items-end text-right">
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Founder & CEO</div>
                <div className="font-vibes text-4xl text-slate-800 leading-none mb-2 pr-2">
                  M. Rahmat Fadila
                </div>
                <div className="border-t-2 border-slate-200 pt-1 min-w-[160px]">
                  <div className="text-slate-900 text-sm font-bold">Muhamad Rahmat Fadila</div>
                  <div className="text-slate-500 text-[10px] font-semibold">DevGrow Academy</div>
                </div>
              </div>
            </div>

            {/* Credential ID for LinkedIn */}
            <div className="absolute bottom-6 left-16 flex flex-col items-start text-left">
              <span className="text-slate-800 text-[10px] font-bold tracking-[0.1em] uppercase mb-0.5">
                Credential ID
              </span>
              <span className="text-slate-600 text-[11px] font-mono tracking-wider font-semibold">
                {fullCertId}
              </span>
            </div>
            
            {/* Credential URL for LinkedIn */}
            <div className="absolute bottom-6 right-16 flex flex-col items-end text-right">
              <span className="text-slate-800 text-[10px] font-bold tracking-[0.1em] uppercase mb-0.5">
                Credential URL
              </span>
              <span className="text-slate-600 text-[11px] font-mono tracking-wider font-semibold">
                devgrow.com/verify/{fullCertId}
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Info badge below certificate */}
      <div className="mt-8 flex items-center gap-2 text-slate-500 text-sm font-medium no-print">
        <CheckCircle className="w-4 h-4 text-emerald-500" />
        <span>Sertifikat ini memiliki <span className="text-slate-800 font-bold">Credential ID</span> unik yang dapat diunggah ke LinkedIn</span>
      </div>
    </div>
  );
}
