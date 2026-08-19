'use client';

import {
  Bell, Search, LogOut, Settings, ChevronDown, X, BookOpen,
  LayoutDashboard, Layers, CheckSquare, Users, Activity,
  ChevronRight, Plus, FileText, UserCheck, Clock, TrendingUp,
  Compass, Sparkles, Award, BarChart2, Map, MessageSquare,
  Calendar, PlayCircle, CheckCircle, Star, Home, Sun, Moon
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

// ── All possible page contexts ────────────────────────────────────────────────
type PageCtx = {
  icon: React.ElementType;
  label: string;
  desc: string;
  color: string;
  parent?: { label: string; href: string };
  quickAction?: { label: string; icon: React.ElementType; href?: string; onClick?: () => void; color?: string };
};

export default function DashboardNavbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; role: string; email?: string; profilePicture?: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showNotif, setShowNotif] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notifRef = useRef<HTMLDivElement>(null);

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('lms_theme');
    const systemPrefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;
    const activeTheme = storedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    if (activeTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    const themeName = nextDark ? 'dark' : 'light';
    localStorage.setItem('lms_theme', themeName);
    
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    window.dispatchEvent(new Event('lms-theme-change'));
  };

  useEffect(() => {
    const loadUser = () => {
      const stored = localStorage.getItem('lms_user');
      if (stored) { try { setUser(JSON.parse(stored)); } catch { } }
    };
    loadUser();
    // Listen for profile updates from dashboard page sync
    window.addEventListener('storage', loadUser);
    const interval = setInterval(loadUser, 3000); // poll every 3s for cross-tab sync
    return () => {
      window.removeEventListener('storage', loadUser);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) setShowUserMenu(false);
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setShowNotif(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('lms_user');
    localStorage.removeItem('lms_token');
    document.cookie = 'lms_token=; path=/; max-age=0';
    window.location.href = '/login';
  };

  // ── Resolve page context based on pathname + search params ────────────────
  const view = searchParams.get('view');
  const tab = searchParams.get('tab');
  const role = searchParams.get('role');
  const userRole = user?.role?.toUpperCase() || 'STUDENT';

  const resolveCtx = (): PageCtx => {
    const dashParent = { label: 'Dashboard', href: '/dashboard' };

    // ── Sub-pages (separate routes) ──────────────────────────────────────
    if (pathname.startsWith('/dashboard/modules/') && pathname.includes('/lesson/')) {
      return {
        icon: PlayCircle, label: 'Pelajaran', color: 'text-indigo-600 bg-indigo-50',
        desc: 'Mode belajar penuh — selesaikan pelajaran untuk meningkatkan progres.',
        parent: { label: 'Modul', href: '/dashboard/manage-modules' },
      };
    }
    if (pathname.startsWith('/dashboard/modules/')) {
      return {
        icon: BookOpen, label: 'Detail Modul', color: 'text-indigo-600 bg-indigo-50',
        desc: 'Kelola konten, tambahkan pelajaran, kuis, dan tugas pada modul ini.',
        parent: { label: 'Kelola Kursus', href: '/dashboard/manage-modules' },
      };
    }
    if (pathname.startsWith('/dashboard/manage-modules')) {
      if (view === 'approvals') return {
        icon: UserCheck, label: 'Persetujuan Pendaftaran', color: 'text-amber-600 bg-amber-50',
        desc: 'Tinjau dan kelola permintaan akses modul dari siswa yang menunggu persetujuan.',
        parent: { label: 'Kelola Kursus', href: '/dashboard/manage-modules' },
      };
      return {
        icon: Layers, label: 'Kelola Kursus', color: 'text-purple-600 bg-purple-50',
        desc: 'Buat, edit, dan atur modul pembelajaran. Pantau jumlah siswa per kursus.',
        parent: dashParent,
      };
    }
    if (pathname.startsWith('/dashboard/users')) {
      const subLabel =
        tab === 'roles' ? 'Roles & Permissions' :
        role === 'INSTRUCTOR' ? 'Instruktur' :
        role === 'STUDENT' ? 'Siswa' :
        role === 'ADMIN' ? 'Admin' : 'Semua Pengguna';
      const subDesc =
        tab === 'roles' ? 'Atur hak akses dan tingkat wewenang setiap peran pengguna.' :
        role === 'INSTRUCTOR' ? 'Daftar instruktur yang terdaftar dan mengajar di platform.' :
        role === 'STUDENT' ? 'Daftar siswa aktif yang mengikuti program pembelajaran.' :
        role === 'ADMIN' ? 'Daftar akun admin yang mengelola sistem LMS.' :
        'Kelola semua pengguna: siswa, instruktur, dan admin sistem.';
      return {
        icon: Users, label: `Pengguna — ${subLabel}`, color: 'text-emerald-600 bg-emerald-50',
        desc: subDesc, parent: dashParent,
      };
    }
    if (pathname.startsWith('/dashboard/activity-log')) {
      return {
        icon: Activity, label: 'Log Aktivitas', color: 'text-rose-600 bg-rose-50',
        desc: 'Rekam jejak seluruh tindakan pengguna: login, perubahan data, dan aktivitas sistem.',
        parent: dashParent,
      };
    }
    if (pathname.startsWith('/dashboard/tasks')) {
      return {
        icon: CheckSquare, label: 'Tugas & Penilaian', color: 'text-amber-600 bg-amber-50',
        desc: 'Kelola pengumpulan tugas, beri nilai, dan berikan umpan balik kepada siswa.',
        parent: dashParent,
      };
    }

    // ── Main dashboard page — resolve by view/tab params ─────────────────
    // Instructor views
    if (view === 'dashboard-overview') return {
      icon: BarChart2, label: 'Ringkasan Dashboard', color: 'text-indigo-600 bg-indigo-50',
      desc: 'Statistik kelas, performa siswa, dan ringkasan aktivitas kursus yang Anda ampu.',
      parent: dashParent,
    };
    if (view === 'recent-activity') return {
      icon: Activity, label: 'Aktivitas Terkini', color: 'text-purple-600 bg-purple-50',
      desc: 'Pantau aktivitas belajar terbaru dari seluruh siswa di kelas Anda.',
      parent: dashParent,
    };
    if (view === 'enrolled-students') return {
      icon: Users, label: 'Manajemen Siswa', color: 'text-emerald-600 bg-emerald-50',
      desc: 'Lihat daftar siswa yang terdaftar, kelola status akses, dan tinjau detail enrollment.',
      parent: dashParent,
    };
    if (view === 'progress-tracking') return {
      icon: TrendingUp, label: 'Progress Siswa', color: 'text-indigo-600 bg-indigo-50',
      desc: 'Analisis progres belajar, tingkat kelulusan, dan rekam jejak pencapaian setiap siswa.',
      parent: dashParent,
    };
    if (view === 'discussions') return {
      icon: MessageSquare, label: 'Diskusi & QA', color: 'text-sky-600 bg-sky-50',
      desc: 'Kelola forum diskusi dan pertanyaan siswa seputar materi pembelajaran.',
      parent: dashParent,
    };
    if (view === 'manage-tasks') return {
      icon: CheckSquare, label: 'Task & Grading', color: 'text-amber-600 bg-amber-50',
      desc: 'Buat tugas, periksa pengumpulan, dan berikan penilaian kepada siswa.',
      parent: dashParent,
    };
    if (view === 'pending-tasks') return {
      icon: Clock, label: 'Tugas Tertunda', color: 'text-orange-600 bg-orange-50',
      desc: 'Daftar tugas yang telah dikumpulkan siswa dan menunggu penilaian dari Anda.',
      parent: { label: 'Tugas', href: '/dashboard?view=manage-tasks' },
    };
    if (view === 'submitted') return {
      icon: FileText, label: 'Tugas Dikumpulkan', color: 'text-blue-600 bg-blue-50',
      desc: 'Seluruh pengumpulan tugas dari siswa — periksa dan beri nilai satu per satu.',
      parent: { label: 'Tugas', href: '/dashboard?view=manage-tasks' },
    };
    if (view === 'grades') return {
      icon: Star, label: 'Nilai & Feedback', color: 'text-yellow-600 bg-yellow-50',
      desc: 'Rekap nilai tugas dan feedback yang telah Anda berikan kepada siswa.',
      parent: { label: 'Tugas', href: '/dashboard?view=manage-tasks' },
    };
    if (view === 'offline-schedule') return {
      icon: Calendar, label: 'Jadwal Offline', color: 'text-teal-600 bg-teal-50',
      desc: 'Atur jadwal sesi pembelajaran tatap muka atau sesi offline bersama siswa.',
      parent: dashParent,
    };
    if (view === 'profile-settings') return {
      icon: Settings, label: 'Pengaturan Profil', color: 'text-slate-600 bg-slate-100',
      desc: 'Perbarui data pribadi, foto profil, dan kata sandi akun Anda.',
      parent: dashParent,
    };
    // Student views
    if (tab === 'browse') return {
      icon: Compass, label: 'Katalog Kursus', color: 'text-indigo-600 bg-indigo-50',
      desc: 'Jelajahi semua modul pembelajaran yang tersedia dan mulai mendaftar.',
      parent: dashParent,
    };
    if (tab === 'in-progress') return {
      icon: PlayCircle, label: 'Sedang Dipelajari', color: 'text-blue-600 bg-blue-50',
      desc: 'Lanjutkan kursus yang sedang Anda pelajari dan tingkatkan progres belajar.',
      parent: dashParent,
    };
    if (tab === 'recommended') return {
      icon: Sparkles, label: 'Rekomendasi AI', color: 'text-purple-600 bg-purple-50',
      desc: 'Rekomendasi personal berbasis AI sesuai minat, progres, dan target karier Anda.',
      parent: dashParent,
    };
    if (tab === 'paths') return {
      icon: Map, label: 'Learning Paths', color: 'text-emerald-600 bg-emerald-50',
      desc: 'Ikuti jalur belajar terstruktur untuk menguasai kompetensi industri secara bertahap.',
      parent: dashParent,
    };
    if (view === 'completed') return {
      icon: CheckCircle, label: 'Kursus Selesai', color: 'text-emerald-600 bg-emerald-50',
      desc: 'Daftar kursus yang telah Anda selesaikan dengan progres 100%.',
      parent: dashParent,
    };
    if (view === 'certificates') return {
      icon: Award, label: 'Sertifikat Kelulusan', color: 'text-amber-600 bg-amber-50',
      desc: 'Kredensial digital terverifikasi yang Anda raih setelah menyelesaikan modul.',
      parent: dashParent,
    };

    // ── Default: Dashboard Home ───────────────────────────────────────────
    return {
      icon: Home, label: userRole === 'STUDENT' ? 'Beranda Siswa' : userRole === 'INSTRUCTOR' ? 'Beranda Instruktur' : 'Beranda Admin',
      color: 'text-indigo-600 bg-indigo-50',
      desc: userRole === 'STUDENT'
        ? 'Pantau kursus aktif, tugas yang tertunda, dan progres belajar Anda hari ini.'
        : userRole === 'INSTRUCTOR'
        ? 'Ringkasan kelas, aktivitas siswa terkini, dan manajemen modul yang Anda ampu.'
        : 'Kelola seluruh sistem LMS — pengguna, kursus, dan aktivitas platform.',
    };
  };

  const ctx = resolveCtx();
  const PageIcon = ctx.icon;

  const roleColor =
    userRole === 'ADMIN' ? 'bg-purple-100 text-purple-700' :
    userRole === 'INSTRUCTOR' ? 'bg-emerald-100 text-emerald-700' :
    'bg-indigo-100 text-indigo-700';

  const notifications = [
    { id: 1, icon: '📚', title: 'Kursus baru tersedia', desc: 'PHP Backend Development telah ditambahkan', time: '2 menit lalu', unread: true },
    { id: 2, icon: '✅', title: 'Tugas dinilai', desc: 'Instruktur telah menilai tugas Anda', time: '1 jam lalu', unread: true },
    { id: 3, icon: '🏆', title: 'Badge baru!', desc: 'Anda mendapatkan badge "Fast Learner"', time: '3 jam lalu', unread: false },
  ];
  const unreadCount = notifications.filter(n => n.unread).length;

  return (
    <header className="bg-white/95 dark:bg-[#0b0f19]/95 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-850 shrink-0 z-40 shadow-sm sticky top-0 transition-colors">
      {/* ── Top bar: Logo + Search + User ────────────────────────────────── */}
      <div className="h-14 flex items-center justify-between px-4 md:px-6 border-b border-slate-100 dark:border-slate-800/50">
        <Link href="/dashboard" className="flex items-center gap-2.5 font-extrabold text-slate-800 dark:text-white text-lg tracking-tight group shrink-0">
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="hidden sm:inline bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">DevGrow.</span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="hidden lg:flex items-center bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-2 w-52 gap-2 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100 dark:focus-within:ring-indigo-950 transition-all">
            <Search className="w-4 h-4 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Cari kursus, tugas..."
              className="bg-transparent border-none focus:outline-none text-sm w-full placeholder:text-slate-400 text-slate-700 dark:text-slate-200"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all active:scale-95 shrink-0"
            title={isDark ? 'Mode Terang' : 'Mode Gelap'}
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-amber-500 animate-spin-slow" />
            ) : (
              <Moon className="w-5 h-5 text-slate-500" />
            )}
          </button>

          {/* Notification */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => { setShowNotif(!showNotif); setShowUserMenu(false); }}
              className="relative w-9 h-9 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#0b0f19] animate-pulse" />
              )}
            </button>
            {showNotif && (
              <div className="absolute right-0 top-11 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden z-50">
                <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                  <h3 className="font-bold text-slate-800 text-sm">Notifikasi</h3>
                  <span className="text-xs font-bold px-2 py-0.5 bg-red-100 text-red-600 rounded-full">{unreadCount} baru</span>
                </div>
                <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                  {notifications.map(n => (
                    <div key={n.id} className={`p-4 flex gap-3 hover:bg-slate-50 cursor-pointer transition-colors ${n.unread ? 'bg-indigo-50/40' : ''}`}>
                      <div className="text-2xl shrink-0">{n.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-800 text-sm">{n.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{n.desc}</p>
                        <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                      </div>
                      {n.unread && <div className="w-2 h-2 bg-indigo-500 rounded-full mt-1.5 shrink-0" />}
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-slate-100">
                  <button className="w-full text-center text-xs font-bold text-indigo-600 hover:text-indigo-800 py-1 hover:bg-indigo-50 rounded-lg transition-colors">
                    Lihat semua notifikasi
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Menu */}
          <div className="relative" ref={userMenuRef}>
            <button
              onClick={() => { setShowUserMenu(!showUserMenu); setShowNotif(false); }}
              className="flex items-center gap-2.5 px-2 py-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div className="w-8 h-8 rounded-xl overflow-hidden bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm shadow-sm shrink-0">
                {user?.profilePicture ? (
                  <img src={user.profilePicture} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span>{user?.name?.slice(0, 2).toUpperCase() || 'ME'}</span>
                )}
              </div>
              <div className="hidden md:block text-left">
                <div className="text-sm font-bold text-slate-800 dark:text-white leading-tight">{user?.name?.split(' ')[0] || 'User'}</div>
                <div className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md inline-block mt-0.5 ${roleColor}`}>
                  {user?.role || 'STUDENT'}
                </div>
              </div>
              <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform hidden md:block ${showUserMenu ? 'rotate-180' : ''}`} />
            </button>
            {showUserMenu && (
              <div className="absolute right-0 top-12 w-56 bg-white dark:bg-[#0c0e18] rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden z-50 animate-scaleIn">
                <div className="p-4 border-b border-slate-100 dark:border-slate-800/60">
                  <p className="font-bold text-slate-800 dark:text-white text-sm">{user?.name || 'User'}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">{user?.email || ''}</p>
                </div>
                <div className="p-2">
                  <button
                    onClick={() => { router.push('/dashboard?view=profile-settings'); setShowUserMenu(false); }}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl transition-colors"
                  >
                    <Settings className="w-4 h-4" /> Pengaturan Profil
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-colors mt-1"
                  >
                    <LogOut className="w-4 h-4" /> Keluar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Page Context Bar ──────────────────────────────────────────────── */}
      <div className="h-11 flex items-center justify-between px-4 md:px-6 bg-slate-50/60 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/30">
        {/* Breadcrumb + icon + desc */}
        <div className="flex items-center gap-3 min-w-0">
          <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${ctx.color}`}>
            <PageIcon className="w-3 h-3" />
          </div>
          <div className="flex items-center gap-1.5 text-xs min-w-0">
            {ctx.parent && (
              <>
                <Link href={ctx.parent.href} className="text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 font-semibold transition-colors whitespace-nowrap">
                  {ctx.parent.label}
                </Link>
                <ChevronRight className="w-3 h-3 text-slate-300 dark:text-slate-700 shrink-0" />
              </>
            )}
            <span className="font-bold text-slate-700 dark:text-slate-200 truncate">{ctx.label}</span>
          </div>
          {/* Description — hidden on small screens */}
          <div className="hidden xl:flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 shrink-0" />
            <p className="text-xs text-slate-400 dark:text-slate-500 truncate">{ctx.desc}</p>
          </div>
        </div>

        {/* Context-aware quick actions */}
        <div className="flex items-center gap-2 shrink-0">
          {pathname.startsWith('/dashboard/manage-modules') && view !== 'approvals' && (
            <>
              <Link
                href="/dashboard/manage-modules?view=approvals"
                className="hidden sm:flex items-center gap-1.5 text-[11px] font-bold text-amber-600 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-2.5 py-1.5 rounded-lg transition-colors"
              >
                <Clock className="w-3 h-3" /> Persetujuan
              </Link>
              <button
                onClick={() => router.push('/dashboard/manage-modules?action=create')}
                className="flex items-center gap-1.5 text-[11px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 px-2.5 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                <Plus className="w-3 h-3" />
                <span className="hidden sm:inline">Buat Modul</span>
              </button>
            </>
          )}
          {view === 'progress-tracking' && (
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1.5 rounded-lg">
              <TrendingUp className="w-3 h-3" />
              <span className="hidden sm:inline">Analisis Progres</span>
            </div>
          )}
          {view === 'enrolled-students' && (
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2.5 py-1.5 rounded-lg">
              <Users className="w-3 h-3" />
              <span className="hidden sm:inline">Manajemen Siswa</span>
            </div>
          )}
          {tab === 'browse' && (
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-2.5 py-1.5 rounded-lg">
              <Compass className="w-3 h-3" />
              <span className="hidden sm:inline">Jelajahi Kursus</span>
            </div>
          )}
          {view === 'certificates' && (
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-2.5 py-1.5 rounded-lg">
              <Award className="w-3 h-3" />
              <span className="hidden sm:inline">Sertifikat Digital</span>
            </div>
          )}
          {pathname.startsWith('/dashboard/activity-log') && (
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-2.5 py-1.5 rounded-lg">
              <Activity className="w-3 h-3 animate-pulse" />
              <span className="hidden sm:inline">Live Monitoring</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
