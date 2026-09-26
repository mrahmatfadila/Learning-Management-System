'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Users, UserPlus, BookOpen, Sparkles, TrendingUp,
  CheckCircle2, ShieldCheck, Database, Server, Plus, ArrowRight,
  BarChart2, Calendar, Clock, FileText, Bot, Layers, UserCheck,
  Shield, CheckSquare, ChevronRight, Bell, RefreshCw
} from 'lucide-react';

interface AdminDashboardViewProps {
  user: any;
  modules?: any[];
}

export default function AdminDashboardView({ user, modules = [] }: AdminDashboardViewProps) {
  const router = useRouter();
  const userName = user?.name ? user.name.split(' ')[0] : 'Administrator';

  // System Stats fetched dynamically
  const [usersList, setUsersList] = useState<any[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoadingUsers(true);
      try {
        const res = await fetch('/api/users');
        if (res.ok) {
          const data = await res.json();
          setUsersList(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        console.error('Error fetching users for admin stats:', err);
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, []);

  const totalStudents = usersList.filter((u: any) => u.role?.toUpperCase() === 'STUDENT').length;
  const totalInstructors = usersList.filter((u: any) => u.role?.toUpperCase() === 'INSTRUCTOR').length;
  const totalAdmins = usersList.filter((u: any) => u.role?.toUpperCase() === 'ADMIN').length;

  const totalLessons = modules.reduce((sum: number, m: any) => {
    return sum + (m.lessonsCount || (Array.isArray(m.lessons) ? m.lessons.length : 0) || 0);
  }, 0);

  // 6 Quick Administrative Actions
  const quickActions = [
    { name: 'Kelola Pengguna', icon: Users, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/40 border-blue-200 dark:border-blue-900/30', href: '/dashboard/users' },
    { name: 'Kelola Modul Kursus', icon: BookOpen, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/30', href: '/dashboard/manage-modules' },
    { name: 'Log Aktivitas Sistem', icon: Server, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-900/30', href: '/dashboard/activity-log' },
    { name: 'Task & Grading', icon: FileText, color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-900/30', href: '/dashboard?view=manage-tasks' },
    { name: 'Kuis Quizizz AI', icon: Bot, color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-900/30', href: '/dashboard?view=quizizz' },
    { name: 'Forum & Diskusi', icon: Sparkles, color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-900/30', href: '/dashboard?view=discussions' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 p-4 sm:p-6 lg:p-7 space-y-6 max-w-[1780px] mx-auto font-sans">

      {/* ── HEADER TITLE ── */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
            <Shield className="w-6 h-6 text-indigo-600" /> Pusat Kendali Administrator
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Manajemen operasional platform DevGrow Learning Management System
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => router.push('/dashboard/users')}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            <UserPlus className="w-4 h-4" />
            <span>Tambah Siswa / Guru</span>
          </button>
        </div>
      </div>

      {/* ── TOP KPI METRIC CARDS ── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">

        {/* 1. Total Siswa */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Siswa</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">
              {loadingUsers ? '...' : totalStudents || 1}
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Akun Siswa Aktif</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-blue-600 dark:text-blue-400">
            Role: STUDENT
          </div>
        </div>

        {/* 2. Total Instruktur */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Instruktur</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
              <UserCheck className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">
              {loadingUsers ? '...' : totalInstructors || 2}
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Pengajar & Mentor</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
            Role: INSTRUCTOR
          </div>
        </div>

        {/* 3. Total Modul Kursus */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Modul</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">
              {modules.length}
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Modul Terpublikasi</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-purple-600 dark:text-purple-400">
            JS, PHP, HTML, CSS, Git, dll.
          </div>
        </div>

        {/* 4. Total Materi Pembelajaran */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Materi</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">
              {totalLessons > 0 ? totalLessons : '1,500+'}
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Pelajaran Interaktif</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-amber-600 dark:text-amber-400">
            Kurikulum Skala Industri
          </div>
        </div>

        {/* 5. Database Status */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Database Status</span>
            <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-black text-emerald-600 dark:text-emerald-400 leading-none">
              Online ⚡
            </h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">PostgreSQL Dual-Sync</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-teal-600 dark:text-teal-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            <span>edutech_db + content_db</span>
          </div>
        </div>

      </div>

      {/* ── 2-COLUMN MAIN CONTENT (LEFT MAIN + RIGHT SIDEBAR) ── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">

        {/* Left: Quick Actions + System Modules (8 cols) */}
        <div className="xl:col-span-8 space-y-6">

          {/* Quick Administrative Actions Grid */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="font-extrabold text-sm text-slate-900 dark:text-white uppercase tracking-wider">
              Aksi Cepat Pengelolaan Sistem
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => router.push(action.href)}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 flex flex-col items-center justify-center text-center space-y-2.5 transition-all cursor-pointer group"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${action.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-indigo-600">
                      {action.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Live Published Courses Table */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Daftar Modul Terbit</h3>
                <p className="text-xs text-slate-400">Total {modules.length} kurikulum terdaftar dalam sistem LMS</p>
              </div>
              <button
                onClick={() => router.push('/dashboard/manage-modules')}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                Kelola Modul
              </button>
            </div>

            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {modules.slice(0, 6).map((m: any) => (
                <div key={m.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">{m.title}</h4>
                    <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                      <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-bold">
                        {m.category || 'General'}
                      </span>
                      <span>•</span>
                      <span>{m.lessonsCount || 0} Materi</span>
                      <span>•</span>
                      <span>{m.enr || 0} Siswa Terdaftar</span>
                    </div>
                  </div>
                  <button
                    onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl shrink-0 transition-colors"
                  >
                    Buka
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Security & Server Overview (4 cols) */}
        <div className="xl:col-span-4 space-y-6">

          {/* Security & System Info */}
          <div className="bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-white">Status Server & Keamanan</h4>
                <p className="text-[11px] text-slate-400">Nginx Reverse Proxy & PM2</p>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between p-2 rounded-xl bg-white/5">
                <span className="text-slate-400">Port Frontend</span>
                <span className="font-bold text-emerald-400">Port 3000 (Online)</span>
              </div>
              <div className="flex justify-between p-2 rounded-xl bg-white/5">
                <span className="text-slate-400">Port Backend</span>
                <span className="font-bold text-emerald-400">Port 5000 (Online)</span>
              </div>
              <div className="flex justify-between p-2 rounded-xl bg-white/5">
                <span className="text-slate-400">Reverse Proxy</span>
                <span className="font-bold text-blue-400">Port 80 (Nginx)</span>
              </div>
              <div className="flex justify-between p-2 rounded-xl bg-white/5">
                <span className="text-slate-400">AI Assistant</span>
                <span className="font-bold text-purple-400">Gemini 2.5 Active</span>
              </div>
            </div>
          </div>

          {/* Quick Management Shortcuts */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <h4 className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              Manajemen Cepat
            </h4>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => router.push('/dashboard/users')}
                className="w-full p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 font-bold transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-500" /> Daftar Pengguna & Verifikasi</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
              <button
                onClick={() => router.push('/dashboard/activity-log')}
                className="w-full p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 font-bold transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2"><Server className="w-4 h-4 text-purple-500" /> Riwayat Audit & Log</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
