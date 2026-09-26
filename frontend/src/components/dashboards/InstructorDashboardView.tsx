'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Users, BookOpen, Clock, CheckCircle2,
  Sparkles, FileText, ChevronRight, ArrowRight,
  TrendingUp, BarChart2, CheckSquare, Plus, Award,
  Bot, Zap, Play, RefreshCw, Shield,
  Layers, Search, UserCheck, ShieldCheck
} from 'lucide-react';

interface InstructorDashboardViewProps {
  user: any;
  modules?: any[];
  enrollments?: any[];
}

export default function InstructorDashboardView({ user, modules = [], enrollments = [] }: InstructorDashboardViewProps) {
  const router = useRouter();
  const userName = user?.name ? user.name.split(' ')[0] : 'Instruktur';
  const userFullName = user?.name || 'Instruktur DevGrow';
  const userEmail = user?.email || 'instructor@devgrow.test';

  // Filter modules owned by this instructor (or all modules if admin/super-instructor)
  const myModules = modules.filter((m: any) => m.instructorId === user?.id);
  const displayModules = myModules.length > 0 ? myModules : modules;

  // Filter students by enrollment status
  const pendingStudents = enrollments.filter((s: any) => s.status === 'PENDING');
  const approvedStudents = enrollments.filter((s: any) => s.status === 'APPROVED');

  const totalStudentsCount = approvedStudents.length;

  // 6 Quick Shortcuts
  const quickLinks = [
    { name: 'Daftar Siswa', icon: Users, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/30', href: '/dashboard?view=enrolled-students' },
    { name: 'Kelola Modul', icon: BookOpen, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/30', href: '/dashboard/manage-modules' },
    { name: 'Progress Siswa', icon: TrendingUp, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/30', href: '/dashboard?view=progress-tracking' },
    { name: 'Persetujuan Akses', icon: ShieldCheck, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/30', href: '/dashboard?view=enrolled-students' },
    { name: 'Tugas & Penilaian', icon: FileText, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/30', href: '/dashboard?view=manage-tasks' },
    { name: 'AI Quiz Builder', icon: Bot, color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/30', href: '/dashboard?view=quizizz' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 p-4 sm:p-6 lg:p-7 space-y-6 max-w-[1780px] mx-auto font-sans">

      {/* ── HEADER TITLE ── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Dashboard Instruktur
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Kelola silabus, pantau progres belajar siswa, dan verifikasi permohonan akses
          </p>
        </div>
        <button
          onClick={() => router.push('/dashboard/manage-modules')}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md flex items-center gap-1.5 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Buat Modul Baru</span>
        </button>
      </div>

      {/* ── MAIN 2-COLUMN OVERALL GRID ── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

        {/* ── LEFT MAIN AREA (9 / 12 COLS) ── */}
        <div className="xl:col-span-9 space-y-6">

          {/* ROW 1: HERO GREETING BANNER & AI TOOLS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">

            {/* Left: Greeting Banner */}
            <div className="lg:col-span-8 bg-gradient-to-r from-[#EEF6FF] via-[#F4F9FF] to-[#E9F3FF] dark:from-[#131E36] dark:via-[#16223D] dark:to-[#182645] rounded-3xl p-6 sm:p-7 border border-blue-100/80 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2.5 max-w-md z-10 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 text-xs font-black border border-blue-500/20">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Instruktur Resmi DevGrow</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  Selamat Datang, {userName}! <span className="inline-block animate-bounce">👋</span>
                </h2>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
                  Anda mengampu <strong className="text-slate-900 dark:text-white font-bold">{displayModules.length} kursus</strong> dengan{' '}
                  <strong className="text-slate-900 dark:text-white font-bold">{totalStudentsCount} siswa aktif</strong>
                  {pendingStudents.length > 0 && (
                    <span> dan <strong className="text-amber-600 dark:text-amber-400 font-bold">{pendingStudents.length} permohonan akses baru</strong> menunggu persetujuan Anda</span>
                  )}.
                </p>

                <div className="pt-2 flex flex-wrap gap-2.5 justify-center sm:justify-start">
                  <button
                    onClick={() => router.push('/dashboard?view=enrolled-students')}
                    className="px-5 py-2.5 rounded-xl bg-[#1D64F2] hover:bg-[#1554D1] active:scale-95 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>Daftar Siswa</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => router.push('/dashboard/manage-modules')}
                    className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 text-slate-800 dark:text-white font-bold text-xs border border-slate-200 dark:border-slate-700 shadow-sm transition-all"
                  >
                    <span>Kelola Modul</span>
                  </button>
                </div>
              </div>

              {/* Teacher Avatar Illustration */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-300/20 rounded-full blur-2xl pointer-events-none" />
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" fill="none">
                  <circle cx="100" cy="100" r="85" fill="#E0F2FE" />
                  <path d="M48 175 C48 135 70 120 100 120 C130 120 152 135 152 175 Z" fill="#2563EB" />
                  <path d="M85 120 L100 150 L115 120 Z" fill="#FFFFFF" />
                  <path d="M96 150 L100 175 L104 150 Z" fill="#E2E8F0" />
                  <circle cx="100" cy="80" r="28" fill="#FDE68A" />
                  <rect x="82" y="74" width="15" height="11" rx="3" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                  <rect x="103" y="74" width="15" height="11" rx="3" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                  <line x1="97" y1="79" x2="103" y2="79" stroke="#1E293B" strokeWidth="2" />
                  <circle cx="89" cy="79" r="2" fill="#1E293B" />
                  <circle cx="111" cy="79" r="2" fill="#1E293B" />
                  <path d="M94 92 Q100 97 106 92" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <rect x="62" y="130" width="34" height="42" rx="4" fill="#0F172A" transform="rotate(-12 62 130)" />
                  <line x1="68" y1="140" x2="86" y2="136" stroke="#38BDF8" strokeWidth="2" />
                </svg>
              </div>
            </div>

            {/* Right: AI Assistant Card */}
            <div className="lg:col-span-4 bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">AI Content Assistant</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">
                  Gunakan kecerdasan buatan untuk menyusun silabus pembelajaran, kuis evaluasi, atau studi kasus pemrograman.
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => router.push('/dashboard?view=quizizz')}
                  className="w-full py-2.5 px-3 bg-purple-50 dark:bg-purple-950/30 hover:bg-purple-100 text-purple-700 dark:text-purple-300 font-bold text-xs rounded-xl flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2"><Bot className="w-4 h-4" /> Buat Kuis Quizizz</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => router.push('/dashboard?view=manage-tasks')}
                  className="w-full py-2.5 px-3 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2"><FileText className="w-4 h-4" /> Kelola Tugas Siswa</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* ROW 2: 4 REAL KPI METRIC STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Card 1: Modul Diampu */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Modul Diampu</span>
                <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#1D64F2] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">{displayModules.length}</h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Kursus Aktif di LMS</p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-blue-600 dark:text-blue-400">
                Tersedia untuk Seluruh Siswa
              </div>
            </div>

            {/* Card 2: Total Siswa */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Siswa Terdaftar</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">{totalStudentsCount}</h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Siswa Terverifikasi</p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                Status Enrollment: APPROVED
              </div>
            </div>

            {/* Card 3: Menunggu Persetujuan */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Menunggu Approval</span>
                <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">{pendingStudents.length}</h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Permintaan Akses Baru</p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                {pendingStudents.length > 0 ? 'Perlu tindakan Anda ⚠️' : 'Semua permintaan diproses ✓'}
              </div>
            </div>

            {/* Card 4: Status Materi */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Kesiapan Materi</span>
                <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">100%</h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Dual-Database Terkoneksi</p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-purple-600 dark:text-purple-400">
                Live Preview Aktif
              </div>
            </div>

          </div>

          {/* ROW 3: REAL INSTRUCTOR MODULES LIST */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Modul Kursus Anda</h3>
                <p className="text-xs text-slate-400">Daftar kursus aktif yang Anda bimbing di DevGrow LMS</p>
              </div>
              <button
                onClick={() => router.push('/dashboard/manage-modules')}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Kelola Semua Modul ({displayModules.length})
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayModules.slice(0, 6).map((m: any) => (
                <div
                  key={m.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-900/30">
                      {m.category || 'Pemrograman'}
                    </span>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white line-clamp-1">{m.title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">
                      {m.description || 'Kurikulum keahlian industri terstruktur.'}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-xs">
                    <span className="text-slate-500 font-semibold">{m.lessonsCount || 0} Materi</span>
                    <button
                      onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                      className="px-3 py-1 bg-white dark:bg-slate-700 hover:bg-slate-100 text-slate-900 dark:text-white text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-600 transition-colors"
                    >
                      Buka Modul
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT SIDEBAR (3 / 12 COLS) ── */}
        <div className="xl:col-span-3 space-y-6">

          {/* 6 Quick Action Shortcuts */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400">Pintasan Cepat</h3>
            <div className="grid grid-cols-2 gap-2.5">
              {quickLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => router.push(item.href)}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-2 transition-all cursor-pointer group"
                  >
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center border ${item.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 leading-tight">
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pending Approval Widget */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-xs uppercase tracking-wider text-slate-400">Permohonan Izin Baru</h3>
              <span className="text-[10px] font-bold text-indigo-600 cursor-pointer" onClick={() => router.push('/dashboard?view=enrolled-students')}>
                Lihat Semua
              </span>
            </div>

            {pendingStudents.length === 0 ? (
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-center text-xs text-slate-400">
                Tidak ada permohonan akses pending saat ini.
              </div>
            ) : (
              <div className="space-y-2.5">
                {pendingStudents.slice(0, 3).map((s: any, idx: number) => (
                  <div key={idx} className="p-3 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 flex items-center justify-between text-xs">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white truncate max-w-[120px]">{s.studentName || 'Siswa'}</h4>
                      <p className="text-[10px] text-slate-400 truncate max-w-[120px]">{s.moduleTitle || 'Kursus'}</p>
                    </div>
                    <button
                      onClick={() => router.push('/dashboard?view=enrolled-students')}
                      className="px-2.5 py-1 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-[10px] rounded-lg shadow-sm"
                    >
                      Proses
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>

    </div>
  );
}
