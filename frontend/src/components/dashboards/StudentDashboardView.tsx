'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen, Clock, CheckCircle2, Sparkles, TrendingUp, Award,
  ArrowRight, Send, Bot, Check, Star, BarChart2, Zap, Play,
  RefreshCw, Layers, ShieldCheck, ChevronRight, Compass,
  Flame, User, Calendar
} from 'lucide-react';

interface StudentDashboardViewProps {
  user: any;
  modules: any[];
  enrollments: any[];
}

export default function StudentDashboardView({ user, modules = [], enrollments = [] }: StudentDashboardViewProps) {
  const router = useRouter();

  // Dynamic User Information
  const userName = user?.name ? user.name.split(' ')[0] : 'Pelajar';
  const userFullName = user?.name || 'Siswa DevGrow';
  const userEmail = user?.email || 'student@devgrow.test';
  const userAvatar = user?.profilePicture;

  // Real Enrolled Courses Calculation
  const approvedEnrollments = enrollments.filter(
    (e: any) => (e.enrollmentStatus || e.status) === 'APPROVED'
  );

  const pendingEnrollments = enrollments.filter(
    (e: any) => (e.enrollmentStatus || e.status) === 'PENDING'
  );

  const inProgressCourses = approvedEnrollments.filter(
    (e: any) => (e.progress || 0) < 100
  );

  const completedCourses = approvedEnrollments.filter(
    (e: any) => (e.progress || 0) >= 100
  );

  const totalProgress = approvedEnrollments.reduce(
    (sum: number, e: any) => sum + (Number(e.progress) || 0), 0
  );
  const avgProgress = approvedEnrollments.length > 0
    ? Math.round(totalProgress / approvedEnrollments.length)
    : 0;

  const totalEnrolledLessons = approvedEnrollments.reduce((sum: number, e: any) => {
    return sum + (e.lessonsCount || (Array.isArray(e.lessons) ? e.lessons.length : 0) || 0);
  }, 0);

  // Recommended courses that student is NOT enrolled in yet
  const enrolledModuleIds = new Set(
    enrollments.map((e: any) => String(e.id || e.moduleId))
  );
  const recommendedCourses = modules.filter(
    (m: any) => !enrolledModuleIds.has(String(m.id))
  ).slice(0, 4);

  // AI Prompt State (Connected to real Gemini /api/ai-chat)
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiThinking, setIsAiThinking] = useState(false);

  const handleAiAsk = async (promptText?: string) => {
    const query = promptText || aiQuery;
    if (!query.trim() || isAiThinking) return;

    setIsAiThinking(true);
    setAiResponse(null);

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          lessonTitle: 'Dashboard Belajar Siswa',
          lessonChapter: 'Tanya Jawab Pemrograman',
          userCode: ''
        })
      });

      const data = await res.json();
      if (data.reply) {
        setAiResponse(data.reply);
      } else if (data.error) {
        setAiResponse(`⚠️ ${data.error}`);
      } else {
        setAiResponse('Mohon maaf, AI belum dapat menjawab saat ini. Silakan coba lagi.');
      }
    } catch {
      setAiResponse('⚠️ Tidak dapat terhubung ke AI Assistant. Pastikan server online.');
    } finally {
      setIsAiThinking(false);
    }
  };

  // Helper color tags based on category
  const getCategoryColor = (cat: string) => {
    const c = (cat || '').toLowerCase();
    if (c.includes('front') || c.includes('ui') || c.includes('html') || c.includes('css')) {
      return 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20';
    }
    if (c.includes('back') || c.includes('php') || c.includes('python')) {
      return 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20';
    }
    if (c.includes('data') || c.includes('sql') || c.includes('mysql')) {
      return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
    }
    if (c.includes('devops') || c.includes('git') || c.includes('tool')) {
      return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20';
    }
    return 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20';
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1680px] mx-auto text-slate-800 dark:text-slate-100 font-sans">

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── 1. TOP HERO GREETING BANNER & REAL AI PROMPT ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">

        {/* Left: Dynamic Greeting Banner */}
        <div className="lg:col-span-7 bg-gradient-to-r from-[#EBF5FB] via-[#F0F8FF] to-[#EBF3FB] dark:from-[#111A2E] dark:via-[#131D33] dark:to-[#17233D] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-md z-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 dark:text-teal-300 text-xs font-black border border-teal-500/20">
              <Flame className="w-3.5 h-3.5 text-orange-500" />
              <span>Siswa Aktif DevGrow</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Halo, {userName}! 👋
            </h1>

            <p className="text-xs font-semibold text-slate-600 dark:text-slate-300 leading-relaxed">
              Lanjutkan perjalanan belajarmu hari ini. Kuasai teknologi masa depan langkah demi langkah.
            </p>

            {/* Quote of the Day */}
            <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-xs italic text-slate-600 dark:text-slate-300 relative shadow-sm">
              <span className="text-xl text-teal-600 font-serif leading-none mr-1">&ldquo;</span>
              Ilmu yang kamu pelajari hari ini adalah investasi berharga untuk karir impianmu.
              <span className="text-xl text-teal-600 font-serif leading-none ml-1">&rdquo;</span>
            </div>

            {/* Dynamic Status Badges */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
              <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                {approvedEnrollments.length} Kursus Diikuti
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-500" />
                {inProgressCourses.length} Sedang Berjalan
              </span>
              {completedCourses.length > 0 && (
                <>
                  <span className="text-slate-300 dark:text-slate-600">•</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-bold border border-emerald-200 dark:border-emerald-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {completedCourses.length} Selesai
                  </span>
                </>
              )}
            </div>
          </div>

          {/* 3D Student Character / Avatar */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />
            {userAvatar ? (
              <img
                src={userAvatar}
                alt={userFullName}
                className="w-36 h-36 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-xl"
              />
            ) : (
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" fill="none">
                <circle cx="100" cy="100" r="85" fill="#E0F2FE" />
                <path d="M50 170 C50 135 70 125 100 125 C130 125 150 135 150 170 Z" fill="#0284C7" />
                <path d="M85 125 L100 145 L115 125 Z" fill="#FFFFFF" />
                <circle cx="100" cy="85" r="32" fill="#FDE68A" />
                <path d="M70 75 C70 55 90 45 115 50 C130 55 132 70 130 80 C125 65 110 58 95 62 C80 66 75 75 70 75 Z" fill="#1E293B" />
                <circle cx="90" cy="85" r="3.5" fill="#1E293B" />
                <circle cx="110" cy="85" r="3.5" fill="#1E293B" />
                <path d="M92 98 Q100 106 108 98" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <rect x="65" y="135" width="30" height="40" rx="4" fill="#0F172A" transform="rotate(-15 65 135)" />
                <line x1="72" y1="145" x2="88" y2="140" stroke="#38BDF8" strokeWidth="2" />
                <circle cx="142" cy="125" r="9" fill="#FDE68A" />
                <rect x="140" y="115" width="5" height="12" rx="2.5" fill="#FDE68A" />
              </svg>
            )}
          </div>
        </div>

        {/* Right: Real Interactive Ask DevGrow AI (Gemini) */}
        <div className="lg:col-span-5 bg-white dark:bg-[#131827] rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                Tanya DevGrow AI <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">Asisten belajar pintar didukung Gemini 2.5</p>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Tanyakan apa saja seputar kode, konsep pemula, solusi bug, atau rangkuman materi.
          </p>

          {/* Search/Ask Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Tanyakan konsep coding..."
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAiAsk()}
              disabled={isAiThinking}
              className="w-full pl-4 pr-12 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center">
              <button
                onClick={() => handleAiAsk()}
                disabled={isAiThinking || !aiQuery.trim()}
                className="p-2 bg-[#0E7A81] hover:bg-[#0B656B] disabled:opacity-50 text-white rounded-xl shadow transition-all cursor-pointer"
              >
                {isAiThinking ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* AI Response Display */}
          {isAiThinking && (
            <div className="p-3.5 bg-teal-50 dark:bg-teal-950/30 rounded-2xl text-xs text-teal-700 dark:text-teal-300 font-medium flex items-center gap-2 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin shrink-0" />
              <span>DevGrow AI sedang memproses jawabanmu...</span>
            </div>
          )}

          {aiResponse && !isAiThinking && (
            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed max-h-40 overflow-y-auto animate-fadeIn">
              <div className="font-bold text-[10px] text-teal-600 uppercase mb-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> Jawaban AI:
              </div>
              <p className="whitespace-pre-wrap">{aiResponse}</p>
            </div>
          )}

          {/* Quick Action Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => handleAiAsk('Jelaskan apa itu array di JavaScript dan contohnya')}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-[11px] font-bold text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1"
            >
              💡 Array di JS
            </button>
            <button
              onClick={() => handleAiAsk('Bagaimana cara membuat fungsi di PHP?')}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-[11px] font-bold text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1"
            >
              🐘 Fungsi di PHP
            </button>
            <button
              onClick={() => handleAiAsk('Jelaskan perbedaan git pull dan git fetch')}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-[11px] font-bold text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1"
            >
              🐙 Git Pull vs Fetch
            </button>
          </div>
        </div>

      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── 2. TOP 5 REAL KPI METRIC CARDS ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

        {/* Card 1: Kursus Diikuti */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Kursus Diikuti</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
              {approvedEnrollments.length}
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Modul Disetujui</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-bold text-blue-600 dark:text-blue-400">
            <span>{inProgressCourses.length} Sedang Berjalan</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 2: Rata-Rata Progres */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Rata-rata Progres</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
              {avgProgress}%
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Penyelesaian Modul</p>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${avgProgress}%` }} />
          </div>
        </div>

        {/* Card 3: Total Materi Tersedia */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Materi Tersedia</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-purple-600 dark:text-purple-400 leading-none">
              {totalEnrolledLessons > 0 ? totalEnrolledLessons : '1,500+'}
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Pelajaran Interaktif</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
            Termasuk Live Playground
          </div>
        </div>

        {/* Card 4: Sertifikat Kelulusan */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Sertifikat</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">
              {completedCourses.length} <span className="text-sm text-slate-400 font-bold">/ {approvedEnrollments.length || 1}</span>
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Modul Diselesaikan</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-amber-500">
            {completedCourses.length > 0 ? 'Siap Cetak PDF 🎉' : 'Selesaikan modul 100%'}
          </div>
        </div>

        {/* Card 5: Tingkat Kompetensi */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Level Belajar</span>
            <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 flex items-center justify-center">
              <BarChart2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-none">
              {avgProgress >= 80 ? 'Mahir ⭐' : avgProgress >= 40 ? 'Menengah ⚡' : 'Pemula 🚀'}
            </h3>
            <p className="text-[10px] font-bold text-slate-400 mt-1">Status Kompetensi</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-teal-600 dark:text-teal-400">
            Aktivitas Aktif
          </div>
        </div>

      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── 3. REAL ENROLLED COURSES (KURSUS SAYA SEDANG BERJALAN) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-500" /> Kursus Saya yang Sedang Berjalan
            </h2>
            <p className="text-xs text-slate-400">Pilih modul di bawah untuk langsung melanjutkan belajar di Code Playground</p>
          </div>
          <button
            onClick={() => router.push('/dashboard?tab=browse')}
            className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            Jelajahi Semua Kursus ({modules.length}) <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {approvedEnrollments.length === 0 ? (
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800 text-center space-y-4 shadow-sm">
            <div className="w-16 h-16 rounded-3xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 mx-auto flex items-center justify-center">
              <Compass className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-base text-slate-900 dark:text-white">Belum Ada Kursus yang Terdaftar</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
                {pendingEnrollments.length > 0
                  ? `Anda memiliki ${pendingEnrollments.length} permintaan pendaftaran yang sedang menunggu persetujuan instruktur.`
                  : 'Pilih modul favoritmu dari katalog kursus untuk mulai belajar materi terstruktur.'}
              </p>
            </div>
            <button
              onClick={() => router.push('/dashboard?tab=browse')}
              className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Buka Katalog Kursus 🚀
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {approvedEnrollments.map((course: any) => {
              const progressVal = Number(course.progress) || 0;
              const isCompleted = progressVal >= 100;
              const catColor = getCategoryColor(course.category);

              return (
                <div
                  key={course.id || course.moduleId}
                  className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-all group"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-lg border ${catColor}`}>
                        {course.category || 'Pemrograman'}
                      </span>
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md">
                          <CheckCircle2 className="w-3 h-3" /> Lulus
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-slate-400">
                          {progressVal}% Selesai
                        </span>
                      )}
                    </div>

                    <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {course.description || 'Modul pembelajaran terstruktur dengan latihan kode interaktif.'}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                    {/* Progress Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px] font-semibold text-slate-400">
                        <span>Progres Belajar</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">{progressVal}%</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isCompleted ? 'bg-emerald-500' : 'bg-gradient-to-r from-teal-500 to-indigo-600'
                          }`}
                          style={{ width: `${progressVal}%` }}
                        />
                      </div>
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => router.push(`/dashboard/modules/${course.id || course.moduleId}`)}
                      className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white font-bold text-xs rounded-2xl transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>{isCompleted ? 'Buka Ulang Materi' : 'Lanjutkan Belajar'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── 4. RECOMMENDED COURSES & STUDENT PROFILE SUMMARY ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

        {/* Left: Recommended Courses (8 cols) */}
        <div className="xl:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" /> Rekomendasi Kursus Lainnya
            </h3>
            <button
              onClick={() => router.push('/dashboard?tab=browse')}
              className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Lihat Semua
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recommendedCourses.map((m: any) => {
              const catColor = getCategoryColor(m.category);
              return (
                <div
                  key={m.id}
                  className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${catColor}`}>
                      {m.category || 'Kursus'}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">
                      {m.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {m.description || 'Tingkatkan skill kamu dengan kurikulum industri terstruktur.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-1 text-xs text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <span>{m.avgRating || 5.0}</span>
                    </div>
                    <button
                      onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                      className="px-3.5 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                    >
                      Detail Kursus
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Quick Study Tools (4 cols) */}
        <div className="xl:col-span-4 space-y-4">
          <div className="bg-gradient-to-br from-[#1E1B4B] via-[#1E1435] to-[#2E1065] text-white rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase">
                  Pusat Uji Kompetensi
                </span>
                <h4 className="font-extrabold text-base text-white mt-1">Quizizz & Tantangan Koding</h4>
                <p className="text-xs text-purple-200/80 mt-1">
                  Uji pemahaman sintaks dan logika kamu melalui kuis interaktif.
                </p>
              </div>
            </div>

            <button
              onClick={() => router.push('/dashboard?view=quizizz')}
              className="w-full py-2.5 bg-white text-slate-950 hover:bg-purple-50 font-black text-xs rounded-xl shadow transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <span>Mulai Kuis Interaktif</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Shortcuts */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              Pintasan Akun Siswa
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => router.push('/dashboard?view=certificates')}
                className="w-full p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-slate-700 dark:text-slate-300 font-bold transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2"><Award className="w-4 h-4 text-amber-500" /> Sertifikat Saya</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
              <button
                onClick={() => router.push('/dashboard?view=profile-settings')}
                className="w-full p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-slate-700 dark:text-slate-300 font-bold transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2"><User className="w-4 h-4 text-indigo-500" /> Pengaturan Profil</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
