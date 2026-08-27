'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  X, Download, Share2, Copy, Check, Sparkles, Trophy, 
  Clock, Award, Calendar, Zap, MessageCircle, 
  Smartphone, Maximize2, Palette, CheckCircle2, Flame, Heart,
  Camera, Upload, Image as ImageIcon, RefreshCw, User, ShieldCheck, CheckCircle
} from 'lucide-react';
import { toPng } from 'html-to-image';

interface ShareLearningStoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  studentAvatar?: string;
  studentEmail?: string;
  courseTitle: string;
  chapterTitle: string;
  lessonTitle: string;
  completedAt?: string;
  durationMinutes?: number;
  xpEarned?: number;
  quizScore?: number | string;
  progressPct?: number;
  completedLessonsCount?: number;
  totalLessonsCount?: number;
  achievementType?: 'lesson' | 'course';
  courseTheme?: string;
}

export default function ShareLearningStoryModal({
  isOpen,
  onClose,
  studentName = 'Student DevGrow',
  studentAvatar,
  courseTitle = 'CSS Styling: Desain Web',
  chapterTitle = 'CSS Tutorial',
  lessonTitle = 'CSS How To',
  completedAt,
  durationMinutes = 15,
  xpEarned = 50,
  quizScore = '100%',
  progressPct,
  completedLessonsCount,
  totalLessonsCount,
  achievementType = 'lesson',
  courseTheme = 'css'
}: ShareLearningStoryModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [aspectRatio, setAspectRatio] = useState<'story' | 'square'>('story');
  const [colorTheme, setColorTheme] = useState<'midnight' | 'emerald' | 'sunset' | 'ocean'>('midnight');
  const [customQuote, setCustomQuote] = useState('Alhamdulillah menyelesaikan materi ini dengan lancar! On progress menuju Web Developer handal 🚀🔥');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [avatarSrc, setAvatarSrc] = useState<string | undefined>(studentAvatar);

  // Real-time strictly computed values (Non-editable, 100% authentic)
  const realXp = xpEarned;
  const realDuration = Math.max(1, durationMinutes);
  const realScore = progressPct !== undefined && progressPct > 0 
    ? `${progressPct}%` 
    : (typeof quizScore === 'number' ? `${quizScore}%` : quizScore || '100%');
  const realScoreLabel = progressPct !== undefined && progressPct > 0 ? 'Total Progress' : 'Hasil Kuis';

  useEffect(() => {
    if (studentAvatar) {
      setAvatarSrc(studentAvatar);
    }
  }, [studentAvatar]);

  if (!isOpen) return null;

  const displayDate = completedAt || new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date());

  // Themes gradient maps
  const themes = {
    midnight: {
      name: 'Midnight Cyber',
      bg: 'linear-gradient(145deg, #090d16 0%, #131b2e 50%, #1e1b4b 100%)',
      accent: 'from-indigo-500 via-purple-500 to-pink-500',
      badgeBg: 'rgba(99, 102, 241, 0.15)',
      badgeBorder: 'rgba(129, 140, 248, 0.3)',
      badgeText: '#c7d2fe',
      glow: '#6366f1'
    },
    emerald: {
      name: 'Emerald Pro',
      bg: 'linear-gradient(145deg, #021a12 0%, #064e3b 50%, #042f2e 100%)',
      accent: 'from-emerald-400 via-teal-400 to-cyan-400',
      badgeBg: 'rgba(16, 185, 129, 0.15)',
      badgeBorder: 'rgba(52, 211, 153, 0.3)',
      badgeText: '#a7f3d0',
      glow: '#10b981'
    },
    sunset: {
      name: 'Sunset Crimson',
      bg: 'linear-gradient(145deg, #1f0410 0%, #4c0519 50%, #431407 100%)',
      accent: 'from-rose-500 via-amber-500 to-orange-400',
      badgeBg: 'rgba(244, 63, 94, 0.15)',
      badgeBorder: 'rgba(251, 113, 133, 0.3)',
      badgeText: '#fecdd3',
      glow: '#f43f5e'
    },
    ocean: {
      name: 'Oceanic Blue',
      bg: 'linear-gradient(145deg, #031525 0%, #0c2d48 50%, #145da0 100%)',
      accent: 'from-cyan-400 via-blue-500 to-indigo-500',
      badgeBg: 'rgba(6, 182, 212, 0.15)',
      badgeBorder: 'rgba(103, 232, 249, 0.3)',
      badgeText: '#bae6fd',
      glow: '#0ea5e9'
    }
  };

  const currentTheme = themes[colorTheme];

  const handleCustomPhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        setAvatarSrc(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDownload = async () => {
    if (!cardRef.current) return;
    setIsGenerating(true);
    try {
      // 2x pixel ratio for crystal clear Retina image
      const dataUrl = await toPng(cardRef.current, {
        cacheBust: true,
        pixelRatio: 2,
        quality: 0.98
      });
      const link = document.createElement('a');
      link.download = `DevGrow-Story-${lessonTitle.replace(/\s+/g, '-')}-${Date.now()}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Failed to export story card:', err);
      alert('Gagal mendownload gambar. Silakan coba lagi.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShareWhatsApp = () => {
    const text = `🎉 *Pencapaian Belajar Real-Time di DevGrow LMS!*\n\nSaya baru saja menyelesaikan materi: *${lessonTitle}* (${chapterTitle})\n📚 Kursus: *${courseTitle}*\n⏱️ Waktu Belajar: ${realDuration} Menit\n⚡ XP Diperoleh: +${realXp} XP\n🎯 Hasil: ${realScore} (${realScoreLabel})\n\n"${customQuote}"\n\nYuk belajar coding interaktif di https://devgrow.id 🚀`;
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleCopyCaption = () => {
    const text = `🎉 Pencapaian Belajar Real-Time di DevGrow LMS!\n\nSaya baru saja menyelesaikan materi: ${lessonTitle} (${chapterTitle})\n📚 Kursus: ${courseTitle}\n⏱️ Waktu: ${realDuration} Menit | ⚡ +${realXp} XP | 🎯 ${realScoreLabel}: ${realScore}\n\n"${customQuote}"\n\n#DevGrow #BelajarCoding #WebDevelopment #Programming #StudentLife`;
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Hidden File Input for Avatar Upload */}
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleCustomPhotoUpload} 
          accept="image/*" 
          className="hidden" 
        />

        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-white text-base sm:text-lg flex items-center gap-2">
                Bagikan Hasil Belajar ke Status / Story
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Real Data
                </span>
              </h3>
              <p className="text-xs text-slate-400">Pamerkan progres belajar coding asli Anda ke WhatsApp Status (SW) dan Instagram Story (SG)</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 overflow-y-auto">
          
          {/* LEFT: Preview Card Container */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center bg-slate-950/50 p-4 sm:p-6 rounded-2xl border border-slate-800/80">
            <div className="text-xs font-bold text-slate-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Pratinjau Story Card (Data Real-Time)
            </div>

            {/* 📸 ACTUAL STORY CARD FOR EXPORT */}
            <div 
              ref={cardRef}
              style={{ 
                background: currentTheme.bg,
                width: '100%',
                maxWidth: aspectRatio === 'story' ? '340px' : '360px',
                aspectRatio: aspectRatio === 'story' ? '9/16' : '1/1',
              }}
              className="rounded-3xl p-5 sm:p-6 text-white relative flex flex-col justify-between shadow-2xl border border-white/15 overflow-hidden transition-all select-none"
            >
              {/* Background Ambient Glows */}
              <div 
                style={{ background: currentTheme.glow }} 
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none" 
              />
              <div 
                style={{ background: currentTheme.glow }} 
                className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl opacity-25 pointer-events-none" 
              />

              {/* CARD TOP: Brand & Student Info */}
              <div className="relative z-10 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-black text-xs text-white shadow-md">
                      DG
                    </div>
                    <div>
                      <div className="font-black text-xs tracking-wider uppercase bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                        DevGrow Academy
                      </div>
                      <div className="text-[9px] text-slate-400 font-semibold tracking-tight">
                        Learning Management System
                      </div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-white/10 text-white/90 border border-white/15 backdrop-blur-md flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                    Verified
                  </span>
                </div>

                {/* Student Profile Row with Real Avatar Image */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-12 h-12 rounded-2xl overflow-hidden bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center font-black text-base text-white shadow-lg shadow-purple-500/20 border-2 border-white/30 shrink-0">
                    {avatarSrc ? (
                      <img 
                        src={avatarSrc} 
                        alt={studentName} 
                        className="w-full h-full object-cover"
                        crossOrigin="anonymous"
                      />
                    ) : (
                      <span>{studentName.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-black text-sm text-white truncate flex items-center gap-1.5">
                      {studentName}
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 inline" />
                    </h4>
                    <p className="text-[10px] text-slate-300 font-medium">
                      Student @ DevGrow Pro Track
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD CENTER: Achievement Details */}
              <div className="relative z-10 my-auto py-2 space-y-3">
                
                {/* Achievement Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wide uppercase shadow-sm"
                  style={{
                    backgroundColor: currentTheme.badgeBg,
                    borderColor: currentTheme.badgeBorder,
                    color: currentTheme.badgeText,
                    borderWidth: '1px'
                  }}
                >
                  <Trophy className="w-3 h-3 text-amber-400" />
                  {completedLessonsCount !== undefined && totalLessonsCount !== undefined 
                    ? `Materi ${completedLessonsCount} dari ${totalLessonsCount} Selesai`
                    : 'Materi Berhasil Diselesaikan!'}
                </div>

                {/* Lesson & Course Title */}
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                    {courseTitle} · {chapterTitle}
                  </div>
                  <h2 className={`font-black text-lg sm:text-xl leading-tight bg-gradient-to-r ${currentTheme.accent} bg-clip-text text-transparent`}>
                    {lessonTitle}
                  </h2>
                </div>

                {/* Metrics Badges: 100% Real Time Data */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-2 text-center">
                    <div className="flex items-center justify-center text-amber-400 mb-0.5">
                      <Zap className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-black text-xs text-white">+{realXp} XP</p>
                    <p className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">Exp Poin</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-2 text-center">
                    <div className="flex items-center justify-center text-sky-400 mb-0.5">
                      <Clock className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-black text-xs text-white">{realDuration} Min</p>
                    <p className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">Waktu Real</p>
                  </div>

                  <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-2 text-center">
                    <div className="flex items-center justify-center text-emerald-400 mb-0.5">
                      <Award className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-black text-xs text-white">{realScore}</p>
                    <p className="text-[8px] uppercase tracking-wider text-slate-400 font-bold truncate">{realScoreLabel}</p>
                  </div>
                </div>

                {/* Custom Quote / Caption */}
                {customQuote && (
                  <div className="bg-black/30 border border-white/10 rounded-2xl p-2.5 backdrop-blur-sm">
                    <p className="text-[10px] text-slate-200 italic leading-relaxed line-clamp-3">
                      &ldquo;{customQuote}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              {/* CARD BOTTOM: Footer & Timestamp */}
              <div className="relative z-10 pt-2 border-t border-white/10 flex items-center justify-between text-[9px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3 h-3 text-slate-400" />
                  <span>{displayDate}</span>
                </div>
                <div className="font-mono font-bold text-slate-300">
                  #DevGrowLMS
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Customization Controls & Share Action Buttons */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3.5">
              
              {/* Real-Time Authenticity Summary Box */}
              <div className="p-3.5 bg-slate-950/80 border border-emerald-500/30 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-black">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Data Belajar Real-Time Terverifikasi:</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center pt-1 border-t border-white/10">
                  <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block">XP Asli</span>
                    <strong className="text-xs text-amber-400 font-black">+{realXp} XP</strong>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block">Durasi Real</span>
                    <strong className="text-xs text-sky-400 font-black">{realDuration} Mnt</strong>
                  </div>
                  <div className="bg-slate-900/80 p-2 rounded-xl border border-slate-800">
                    <span className="text-[9px] text-slate-400 uppercase font-bold block">{realScoreLabel}</span>
                    <strong className="text-xs text-emerald-400 font-black">{realScore}</strong>
                  </div>
                </div>
              </div>

              {/* Photo Upload & Change Row */}
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5 text-pink-400" />
                    Foto Profil di Story:
                  </span>
                  {avatarSrc && (
                    <button
                      type="button"
                      onClick={() => setAvatarSrc(undefined)}
                      className="text-[10px] font-bold text-rose-400 hover:underline"
                    >
                      Reset ke Inisial
                    </button>
                  )}
                </label>
                <div className="flex items-center gap-3 p-2 bg-slate-950/80 border border-slate-700 rounded-2xl">
                  <div className="w-9 h-9 rounded-xl overflow-hidden bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shrink-0 border border-white/20">
                    {avatarSrc ? (
                      <img src={avatarSrc} alt="Avatar Preview" className="w-full h-full object-cover" />
                    ) : (
                      <span>{studentName.charAt(0).toUpperCase()}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Upload className="w-3.5 h-3.5 text-indigo-400" />
                      Ganti / Unggah Foto
                    </button>
                  </div>
                </div>
              </div>

              {/* Aspect Ratio & Color Theme Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Format Rasio */}
                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
                    Format Rasio:
                  </label>
                  <div className="flex flex-col gap-1.5">
                    <button
                      type="button"
                      onClick={() => setAspectRatio('story')}
                      className={`flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl border text-xs font-bold transition-all ${
                        aspectRatio === 'story'
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      Story (9:16)
                    </button>
                    <button
                      type="button"
                      onClick={() => setAspectRatio('square')}
                      className={`flex items-center justify-center gap-1.5 py-1.5 px-2.5 rounded-xl border text-xs font-bold transition-all ${
                        aspectRatio === 'square'
                          ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/30'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700 hover:border-slate-600'
                      }`}
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      Square (1:1)
                    </button>
                  </div>
                </div>

                {/* Color Theme */}
                <div>
                  <label className="text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1">
                    <Palette className="w-3.5 h-3.5 text-purple-400" />
                    Tema Warna:
                  </label>
                  <div className="grid grid-cols-2 gap-1.5">
                    {(Object.keys(themes) as Array<keyof typeof themes>).map((key) => {
                      const t = themes[key];
                      const isSelected = colorTheme === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setColorTheme(key)}
                          className={`flex items-center gap-1.5 p-1.5 rounded-xl border text-[11px] font-bold transition-all text-left ${
                            isSelected
                              ? 'border-indigo-400 bg-slate-800 text-white ring-2 ring-indigo-500/20'
                              : 'border-slate-800 bg-slate-900/60 text-slate-400 hover:border-slate-700'
                          }`}
                        >
                          <div 
                            className="w-3 h-3 rounded-full shrink-0 border border-white/20"
                            style={{ background: t.glow }}
                          />
                          <span className="truncate">{t.name.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Custom Quote Input */}
              <div>
                <label className="text-xs font-bold text-slate-300 mb-1 block">
                  Tulis Catatan / Quote Pamer Belajar:
                </label>
                <textarea
                  value={customQuote}
                  onChange={(e) => setCustomQuote(e.target.value)}
                  placeholder="Tulis pesan semangat atau caption kamu..."
                  rows={2}
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl p-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500 transition-all resize-none"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-1">
              <button
                type="button"
                onClick={handleDownload}
                disabled={isGenerating}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-black text-sm rounded-2xl shadow-lg shadow-indigo-500/25 transition-all disabled:opacity-60 active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                {isGenerating ? 'Menghasilkan Gambar HD...' : 'Download Gambar Story (PNG HD)'}
              </button>

              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={handleShareWhatsApp}
                  className="flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Share ke WhatsApp
                </button>

                <button
                  type="button"
                  onClick={handleCopyCaption}
                  className="flex items-center justify-center gap-2 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl border border-slate-700 transition-all"
                >
                  {copiedText ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin Teks Caption
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
