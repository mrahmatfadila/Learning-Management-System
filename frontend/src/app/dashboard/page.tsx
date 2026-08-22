'use client';
import { useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardNavbar from '@/components/DashboardNavbar';
import ProfileSettings from '@/components/ProfileSettings';
import StudentTasks from '@/components/StudentTasks';
import InstructorTasks from '@/components/InstructorTasks';
import OfflineSchedule from '@/components/OfflineSchedule';
import Discussions from '@/components/Discussions';
import QnaForum from '@/components/QnaForum';
import QuizizzModule from '@/components/QuizizzModule';
import DevGrowLoader from '@/components/DevGrowLoader';
import {
  BookOpen, Users, TrendingUp, Award, Clock, CheckCircle,
  BarChart2, Zap, ArrowRight, Star, Activity, LogOut, Settings,
  Home, PlayCircle, Plus, Compass, Sparkles, Server, Layout,
  Lock, RefreshCw, ChevronRight, Check, Search, X, Trophy,
  Play, MessageSquare, ChevronDown, Edit
} from 'lucide-react';


export default function DashboardPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<{ id: string; name: string; role: string; email: string; profilePicture?: string } | null>(null);
  const [modules, setModules] = useState<any[]>([]);
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [activeGroup, setActiveGroup] = useState('home');
  const [loading, setLoading] = useState(true);
  const [enrModal, setEnrModal] = useState<any>(null);
  const [selectedPath, setSelectedPath] = useState(0);
  const [aiAnalyzing, setAiAnalyzing] = useState(false);
  const [aiReportMessage, setAiReportMessage] = useState('Analisis Profil Berhasil! AI telah mencocokkan riwayat belajar Anda.');
  const [aiStep, setAiStep] = useState(4);
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null);
  const [selectedCert, setSelectedCert] = useState<any>(null);

  // New Student Management States
  const [enrolledStudents, setEnrolledStudents] = useState<any[]>([]);
  const [studentSearch, setStudentSearch] = useState('');
  const [selectedCourseFilter, setSelectedCourseFilter] = useState('All');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('All');
  const [selectedStudentDetail, setSelectedStudentDetail] = useState<any>(null);
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);

  // Progress Tracking States
  const [progressSubTab, setProgressSubTab] = useState('overview'); // 'overview' | 'students'
  const [selectedProgressStudent, setSelectedProgressStudent] = useState<any>(null);
  const [isProgressModalOpen, setIsProgressModalOpen] = useState(false);
  const [progressSliderVal, setProgressSliderVal] = useState(0);
  const [isUpdatingProgress, setIsUpdatingProgress] = useState(false);
  const [progressFilterVal, setProgressFilterVal] = useState('All');

  // â”€â”€ Explore Course page state â”€â”€
  const [exploreSearch, setExploreSearch] = useState('');
  const [exploreCatFilter, setExploreCatFilter] = useState('Semua');
  const [exploreSortBy, setExploreSortBy] = useState<'popular' | 'newest' | 'az'>('popular');
  const [exploreViewMode, setExploreViewMode] = useState<'grid' | 'list'>('grid');
  const [exploreWishlist, setExploreWishlist] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try { return JSON.parse(localStorage.getItem('lms_wishlist') || '[]'); } catch { return []; }
    }
    return [];
  });
  const [explorePreview, setExplorePreview] = useState<any>(null);
  const [requestSuccessModal, setRequestSuccessModal] = useState<{ moduleId: string; moduleTitle: string } | null>(null);

  const getDifficulty = (m: any) => {
    const t = (m?.title || '').toLowerCase();
    if (t.includes('dasar') || t.includes('basic') || t.includes('intro') || t.includes('pemula')) return { label: 'Pemula', color: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30' };
    if (t.includes('lanjut') || t.includes('advanced') || t.includes('expert')) return { label: 'Mahir', color: 'text-red-600 bg-red-50 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30' };
    return { label: 'Menengah', color: 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30' };
  };

  const getSkillTags = (m: any): string[] => {
    const t = ((m?.title || '') + ' ' + (m?.description || '')).toLowerCase();
    const tags: string[] = [];
    if (t.includes('html')) tags.push('HTML');
    if (t.includes('css')) tags.push('CSS');
    if (t.includes('javascript') || t.includes('js')) tags.push('JavaScript');
    if (t.includes('php')) tags.push('PHP');
    if (t.includes('mysql') || t.includes('database') || t.includes('sql')) tags.push('Database');
    if (t.includes('git')) tags.push('Git');
    if (t.includes('ui') || t.includes('ux') || t.includes('design')) tags.push('UI/UX');
    if (t.includes('mobile') || t.includes('android')) tags.push('Mobile');
    if (t.includes('cisco') || t.includes('network')) tags.push('Network');
    return tags.length > 0 ? tags : ['Web Dev', 'Coding'];
  };

  const applyNavFromUrl = useCallback((u: any) => {
    const view = searchParams.get('view');
    const tab = searchParams.get('tab');
    const role = u?.role?.toUpperCase();

    if (view === 'profile-settings') { setActiveGroup('settings'); setActiveMenu('Profile Settings'); return; }
    if (view === 'offline-schedule') { setActiveGroup('schedule'); setActiveMenu('Jadwal Offline'); return; }
    if (view === 'manage-tasks') { setActiveGroup('assignments'); setActiveMenu('Task & Grading'); return; }
    if (view === 'pending-tasks') { setActiveGroup('assignments'); setActiveMenu('Pending Tasks'); return; }
    if (view === 'submitted') { setActiveGroup('assignments'); setActiveMenu('Submitted'); return; }
    if (view === 'grades') { setActiveGroup('assignments'); setActiveMenu('Grades & Feedback'); return; }
    if (view === 'enrolled-students') { setActiveGroup('students'); setActiveMenu('Manajemen Siswa'); return; }
    if (view === 'progress-tracking') { setActiveGroup('students'); setActiveMenu('Progress Siswa'); return; }
    if (view === 'discussions') {
      setActiveGroup('community');
      setActiveMenu(role === 'STUDENT' ? 'Discussions' : 'Diskusi & QA');
      return;
    }
    if (view === 'q-a-forum') {
      setActiveGroup('community');
      setActiveMenu('Q&A Forum');
      return;
    }
    if (view === 'completed') { setActiveGroup('courses'); setActiveMenu('Completed'); return; }
    if (view === 'certificates') { setActiveGroup('courses'); setActiveMenu('Certificates'); return; }
    if (view === 'dashboard-overview') { setActiveGroup('overview'); setActiveMenu('Dashboard Overview'); return; }
    if (view === 'recent-activity') { setActiveGroup('overview'); setActiveMenu('Recent Activity'); return; }
    if (['browse', 'explore', 'catalog'].includes(tab || '') || ['browse', 'explore', 'catalog'].includes(view || '')) {
      setActiveGroup('explore');
      setActiveMenu('Browse Courses');
      return;
    }
    if (tab === 'in-progress') { setActiveGroup('courses'); setActiveMenu('In Progress'); return; }
    if (tab === 'recommended') { setActiveGroup('explore'); setActiveMenu('Recommended (AI)'); return; }
    if (tab === 'paths') { setActiveGroup('explore'); setActiveMenu('Learning Paths'); return; }

    // default
    if (role === 'STUDENT') { setActiveGroup('home'); setActiveMenu('Dashboard'); }
    else { setActiveGroup('overview'); setActiveMenu('Dashboard Overview'); }
  }, [searchParams]);

  useEffect(() => {
    const stored = localStorage.getItem('lms_user');
    if (!stored) { router.push('/login'); return; }
    try {
      const u = JSON.parse(stored);
      setUser(u);
      applyNavFromUrl(u);
      fetchData(u);
      // Sync latest profile data (incl. profilePicture) from backend
      fetch(`http://localhost:5000/api/users/${u.id}`)
        .then(r => r.ok ? r.json() : null)
        .then(fresh => {
          if (!fresh) return;
          const merged = {
            ...u,
            name: fresh.name || u.name,
            email: fresh.email || u.email,
            profilePicture: fresh.profilePicture || u.profilePicture || null,
            specialty: fresh.specialty || u.specialty || null,
            phone: fresh.phone || u.phone || null,
          };
          setUser(merged);
          localStorage.setItem('lms_user', JSON.stringify(merged));
        })
        .catch(() => {});
    } catch {
      router.push('/login');
    }
  }, [searchParams]);

  const fetchData = async (u: any) => {
    setLoading(true);
    try {
      const role = u?.role?.toUpperCase();
      if (role === 'STUDENT') {
        const [modRes, enrRes] = await Promise.all([
          fetch('http://localhost:5000/api/modules').catch(() => null),
          fetch(`http://localhost:5000/api/enrollments/student/${u.id}`).catch(() => null)
        ]);
        if (modRes?.ok) setModules(await modRes.json());
        if (enrRes?.ok) setEnrollments(await enrRes.json());
      } else {
        const [modRes, studRes] = await Promise.all([
          fetch('http://localhost:5000/api/modules').catch(() => null),
          fetch(`http://localhost:5000/api/enrollments/instructor/${u.id}`).catch(() => null)
        ]);
        if (modRes?.ok) setModules(await modRes.json());
        if (studRes?.ok) setEnrolledStudents(await studRes.json());
      }
    } catch (e) { console.error('Error fetching dashboard data:', e); }
    setLoading(false);
  };

  const fetchStudentsOnly = async (currentUser: any) => {
    if (!currentUser) return;
    try {
      const studRes = await fetch(`http://localhost:5000/api/enrollments/instructor/${currentUser.id}`);
      if (studRes.ok) setEnrolledStudents(await studRes.json());
    } catch (err) {
      console.error('Failed to fetch students', err);
    }
  };

  const handleApproveStudent = async (enrollmentId: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/enrollments/${enrollmentId}/approve`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });
      if (res.ok) {
        alert('Permintaan pendaftaran berhasil disetujui!');
        fetchStudentsOnly(user);
        setIsStudentModalOpen(false);
      } else {
        alert('Gagal menyetujui permintaan');
      }
    } catch (err) {
      alert('Terjadi kesalahan jaringan');
    }
  };

  const handleRejectStudent = async (enrollmentId: string, note?: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/enrollments/${enrollmentId}/reject`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note: note || 'Ditolak oleh instruktur.' })
      });
      if (res.ok) {
        alert(note ? 'Akses siswa berhasil dicabut.' : 'Pendaftaran berhasil ditolak.');
        fetchStudentsOnly(user);
        setIsStudentModalOpen(false);
      } else {
        alert('Gagal menolak pendaftaran');
      }
    } catch (err) {
      alert('Terjadi kesalahan jaringan');
    }
  };

  const handleUpdateProgress = async (studentId: string, moduleId: string, newProgress: number) => {
    setIsUpdatingProgress(true);
    try {
      const res = await fetch('http://localhost:5000/api/enrollments/progress', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, moduleId, progress: Number(newProgress) })
      });
      if (res.ok) {
        // Refresh local student list
        await fetchStudentsOnly(user);
        
        // Update local modal display state
        if (selectedProgressStudent && selectedProgressStudent.studentId === studentId && selectedProgressStudent.moduleId === moduleId) {
          setSelectedProgressStudent((prev: any) => ({ ...prev, progress: Number(newProgress) }));
        }
        
        alert(`Berhasil memperbarui progres belajar menjadi ${newProgress}%!`);
      } else {
        const data = await res.json();
        alert(data.message || 'Gagal memperbarui progres.');
      }
    } catch (err) {
      alert('Terjadi kesalahan jaringan.');
    } finally {
      setIsUpdatingProgress(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('lms_user');
    localStorage.removeItem('lms_token');
    document.cookie = 'lms_token=; path=/; max-age=0';
    window.location.href = '/login';
  };

  if (!user) return null;

  const role = user.role?.toUpperCase();

  const getCourseTheme = (title: string) => {
    const t = title?.toLowerCase() || '';
    if (t.includes('html')) return { bg: 'from-orange-500 to-red-600', label: 'HTML', emoji: 'HTML', logo: 'HTML5' };
    if (t.includes('css')) return { bg: 'from-blue-500 to-indigo-600', label: 'CSS', emoji: 'CSS', logo: 'CSS3' };
    if (t.includes('javascript') || t.includes('js')) return { bg: 'from-yellow-400 to-amber-500', label: 'JS', emoji: 'JS', logo: 'JS' };
    if (t.includes('php')) return { bg: 'from-purple-500 to-violet-600', label: 'PHP', emoji: 'PHP', logo: 'PHP' };
    if (t.includes('mysql') || t.includes('sql') || t.includes('database')) return { bg: 'from-sky-500 to-cyan-600', label: 'SQL', emoji: 'SQL', logo: 'SQL' };
    if (t.includes('git')) return { bg: 'from-rose-500 to-pink-600', label: 'GIT', emoji: 'GIT', logo: 'GIT' };
    if (t.includes('react') || t.includes('mobile')) return { bg: 'from-cyan-500 to-teal-600', label: 'RN', emoji: 'RN', logo: 'React' };
    if (t.includes('cisco') || t.includes('jaringan') || t.includes('network') || t.includes('packet')) return { bg: 'from-emerald-500 to-green-600', label: 'NET', emoji: 'NET', logo: 'CISCO' };
    if (t.includes('python')) return { bg: 'from-green-500 to-emerald-600', label: 'PY', emoji: 'PY', logo: 'PYTHON' };
    if (t.includes('ui') || t.includes('ux') || t.includes('design')) return { bg: 'from-fuchsia-500 to-pink-600', label: 'UI', emoji: 'UI', logo: 'UI/UX' };
    if (t.includes('java')) return { bg: 'from-red-500 to-orange-600', label: 'JV', emoji: 'JV', logo: 'JAVA' };
    if (t.includes('node') || t.includes('express')) return { bg: 'from-lime-500 to-green-600', label: 'NODE', emoji: 'NODE', logo: 'NODE' };
    if (t.includes('typescript') || t.includes('ts')) return { bg: 'from-blue-600 to-indigo-700', label: 'TS', emoji: 'TS', logo: 'TS' };
    if (t.includes('linux') || t.includes('bash') || t.includes('terminal')) return { bg: 'from-slate-600 to-slate-800', label: 'CLI', emoji: 'CLI', logo: 'LINUX' };
    if (t.includes('flutter') || t.includes('dart')) return { bg: 'from-sky-400 to-blue-600', label: 'FL', emoji: 'FL', logo: 'FLUTTER' };
    if (t.includes('figma') || t.includes('wireframe') || t.includes('prototype')) return { bg: 'from-purple-400 to-pink-500', label: 'FIG', emoji: 'FIG', logo: 'FIGMA' };
    if (t.includes('security') || t.includes('cyber')) return { bg: 'from-red-600 to-rose-800', label: 'SEC', emoji: 'SEC', logo: 'SEC' };
    if (t.includes('algorithm') || t.includes('struktur') || t.includes('data')) return { bg: 'from-violet-500 to-purple-700', label: 'ALG', emoji: 'ALG', logo: 'ALG' };
    return { bg: 'from-indigo-500 to-purple-600', label: 'LMS', emoji: 'LMS', logo: 'BOOK' };
  };

  const aliasMap: Record<string, string> = {
    '67adde6d-81a6-4470-b88d-506b733f87ee': 'html',
    'html': '67adde6d-81a6-4470-b88d-506b733f87ee',
    'ba1383a2-219d-44ab-bf63-804d5a0f0902': 'css',
    'css': 'ba1383a2-219d-44ab-bf63-804d5a0f0902',
    'mastering-ui-design-for-impactful-solutions': 'javascript',
    'javascript': 'mastering-ui-design-for-impactful-solutions',
    'php-backend-mastery': 'php',
    'php': 'php-backend-mastery',
    'mysql-relational-database': 'mysql',
    'mysql': 'mysql-relational-database',
    'git-github-version-control': 'git',
    'git': 'git-github-version-control',
    'mobile-app-java-android': 'mobile',
    'mobile': 'mobile-app-java-android',
    'cisco-packet-tracer': 'cisco',
    'cisco': 'cisco-packet-tracer'
  };

  const enrollmentMap = new Map();
  enrollments.forEach((e: any) => {
    if (e.id) enrollmentMap.set(e.id, e);
    if (e.moduleId) enrollmentMap.set(e.moduleId, e);
    if (aliasMap[e.id]) enrollmentMap.set(aliasMap[e.id], e);
    if (e.moduleId && aliasMap[e.moduleId]) enrollmentMap.set(aliasMap[e.moduleId], e);
  });

  const enrolledModuleIds = new Set(
    enrollments
      .filter((e: any) => e.enrollmentStatus === 'APPROVED')
      .flatMap((e: any) => [e.id, e.moduleId, aliasMap[e.id], aliasMap[e.moduleId]].filter(Boolean))
  );

  const myModules = modules.filter((m: any) => enrolledModuleIds.has(m.id));

  // â”€â”€â”€ RENDER CONTENT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  const renderContent = () => {

    // Profile Settings
    if (activeGroup === 'settings' && activeMenu === 'Profile Settings') {
      return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          <h1 className="text-2xl font-black text-slate-800 mb-6">Pengaturan Profil</h1>
          <ProfileSettings user={user} setUser={(u: any) => { setUser(u); localStorage.setItem('lms_user', JSON.stringify(u)); }} />
        </div>
      );
    }

    // Offline Schedule
    if (activeMenu === 'Jadwal Offline') {
      return <OfflineSchedule user={user} />;
    }

    // Quizizz Arena & Studio (Gamified Quiz Platform)
    if (searchParams.get('view') === 'quizizz' || ['Quizizz Arena ⚡', 'Quizizz Studio ⚡', 'Quizizz'].includes(activeMenu)) {
      return <QuizizzModule user={user} />;
    }

    // Instructor Tasks
    if (role === 'INSTRUCTOR' && activeMenu === 'Task & Grading') {
      return (
        <div className="p-4 md:p-8">
          <InstructorTasks user={user} activeMenu={activeMenu} />
        </div>
      );
    }

    // Student Tasks
    if (role === 'STUDENT' && ['Pending Tasks', 'Submitted', 'Grades & Feedback'].includes(activeMenu)) {
      return (
        <div className="p-4 md:p-8">
          <StudentTasks user={user} activeMenu={activeMenu} />
        </div>
      );
    }

    // Discussions & Chat (all roles)
    if (activeMenu === 'Discussions' || activeMenu === 'Diskusi & QA') {
      return (
        <div className="h-full">
          <Discussions user={user} modules={modules} />
        </div>
      );
    }

    // Q&A Forum (all roles)
    if (activeMenu === 'Q&A Forum') {
      return (
        <div className="h-full">
          <QnaForum user={user} modules={modules} />
        </div>
      );
    }

    // Student: My Learning (In Progress / Completed / Certificates)
    if (role === 'STUDENT' && activeGroup === 'courses') {
      const filtered = modules.filter((m: any) => {
        const enr = enrollmentMap.get(m.id);
        if (!enr || enr.enrollmentStatus !== 'APPROVED') return false;
        
        if (activeMenu === 'In Progress') {
          return enr.progress < 100;
        }
        if (activeMenu === 'Completed' || activeMenu === 'Certificates') {
          return enr.progress === 100;
        }
        return true;
      });

      return (
        <div className="p-4 md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">{activeMenu}</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              {activeMenu === 'In Progress' && 'Lanjutkan pembelajaran Anda untuk menguasai kompetensi praktis.'}
              {activeMenu === 'Completed' && 'Selamat atas keberhasilan Anda! Berikut modul yang telah Anda selesaikan.'}
              {activeMenu === 'Certificates' && 'Kredensial kelulusan digital Anda yang tervalidasi oleh LMS Academy.'}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-16 text-center shadow-sm">
              <BookOpen className="w-16 h-16 text-slate-200 dark:text-slate-700 mx-auto mb-4" />
              <p className="text-slate-500 dark:text-slate-400 font-medium text-lg">
                {activeMenu === 'In Progress' && 'Semua kursus Anda telah selesai, atau Anda belum mendaftar kursus baru.'}
                {activeMenu === 'Completed' && 'Belum ada kursus yang diselesaikan. Terus belajar!'}
                {activeMenu === 'Certificates' && 'Selesaikan setidaknya satu modul dengan progress 100% untuk membuka sertifikat.'}
              </p>
              <button onClick={() => router.push('/dashboard?tab=browse')} className="mt-4 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/20">
                Jelajahi Kursus
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3.5">
              {filtered.map((m: any) => {
                const theme = getCourseTheme(m.title);
                const enrollment = enrollmentMap.get(m.id);
                const progress = enrollment?.progress || 0;

                if (activeMenu === 'Certificates') {
                  return (
                    <div key={m.id} className="bg-white dark:bg-[#0c0e18] border-2 border-amber-200 dark:border-amber-900/30 hover:border-amber-400 dark:hover:border-amber-500/50 rounded-2xl p-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all overflow-hidden flex flex-col justify-between relative group">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-300/10 to-yellow-500/10 rounded-bl-full pointer-events-none" />
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/30 flex items-center justify-center">
                            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400 animate-pulse" />
                          </div>
                          <span className="text-[9px] font-black text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 px-2 py-0.5 rounded-md tracking-wider uppercase border border-amber-100/50 dark:border-amber-900/30">
                            Verified
                          </span>
                        </div>

                        <h3 className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm mb-1 leading-snug line-clamp-1">{m.title}</h3>
                        <p className="text-[9px] text-slate-400 dark:text-slate-500 font-medium">No: <span className="font-mono text-slate-500 dark:text-slate-400">{enrollment.enrollmentId ? enrollment.enrollmentId.substring(0, 8).toUpperCase() : 'LMS-' + m.id.substring(0, 8).toUpperCase()}</span></p>
                        
                        <div className="border-t border-slate-100 dark:border-slate-800 pt-2.5 mt-2.5 text-[10px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="truncate">Selesai {new Date(enrollment.updatedAt || enrollment.enrolledAt).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                      </div>

                      <button onClick={() => setSelectedCert({ module: m, enrollment })}
                        className="mt-3 w-full py-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-bold rounded-xl text-[11px] shadow-sm shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-1">
                        <Award className="w-3.5 h-3.5" /> Buka Sertifikat
                      </button>
                    </div>
                  );
                }

                return (
                  <div
                    key={m.id}
                    onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                    className="group bg-white dark:bg-[#0d1117] rounded-2xl border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-[transform,shadow,border-color] duration-200 overflow-hidden flex flex-col justify-between cursor-pointer relative animate-fadeIn [transform:translateZ(0)]"
                  >
                    {/* Top Thumbnail Section (Compact) */}
                    <div className="relative">
                      <div className={`${m.thumbnail ? 'bg-slate-950' : `bg-gradient-to-br ${theme.bg}`} w-full aspect-[16/8.5] flex items-center justify-center relative overflow-hidden`}>
                        {m.thumbnail ? (
                          <>
                            <img
                              src={m.thumbnail}
                              alt={m.title}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          </>
                        ) : (
                          <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
                            <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-200 mb-1">
                              <span className="text-lg drop-shadow">{theme.emoji}</span>
                            </div>
                            <span className="text-[10px] font-black text-white/90 uppercase tracking-wider">{theme.logo}</span>
                          </div>
                        )}

                        {/* Floating Category Pill */}
                        <div className="absolute top-2 left-2 z-10">
                          <span className="bg-slate-900/90 text-white border border-white/10 px-2 py-0.5 rounded-md text-[9px] font-black tracking-wide uppercase shadow-sm">
                            {m.category || 'Programming'}
                          </span>
                        </div>

                        {/* Status Icon Top Right */}
                        <div className="absolute top-2 right-2 z-10">
                          {activeMenu === 'Completed' ? (
                            <div className="bg-emerald-500 text-white p-1 rounded-full shadow">
                              <CheckCircle className="w-3.5 h-3.5" />
                            </div>
                          ) : (
                            <div className="bg-slate-900/90 border border-white/10 text-white px-2 py-0.5 rounded-md text-[9px] font-black flex items-center gap-1 shadow-sm">
                              <BookOpen className="w-2.5 h-2.5 text-indigo-300" />
                              <span>{m.lessonsCount || 0} Materi</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content Body (Compact) */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between gap-2.5">
                      <div>
                        <div className="flex items-center justify-between gap-1.5 mb-1.5">
                          <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${getDifficulty(m).color}`}>
                            {getDifficulty(m).label}
                          </span>
                          {m.instructor ? (
                            <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[100px]" title={m.instructor.name}>
                              <div className="w-3.5 h-3.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[8px] font-black shrink-0">
                                {m.instructor.name.charAt(0)}
                              </div>
                              <span className="truncate">{m.instructor.name}</span>
                            </div>
                          ) : (
                            <span className="text-[9px] text-slate-400 font-medium">Instruktur</span>
                          )}
                        </div>

                        <h3 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm leading-snug mb-1 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {m.title}
                        </h3>
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 line-clamp-1 leading-normal">
                          {m.description || 'Pelajari materi kurikulum terstruktur.'}
                        </p>
                      </div>

                      {/* Progress & Action Footer */}
                      <div className="border-t border-slate-100 dark:border-slate-800/80 pt-2.5">
                        {activeMenu === 'In Progress' ? (
                          <div className="space-y-2">
                            <div>
                              <div className="flex justify-between items-center text-[10px] font-bold mb-1">
                                <span className="text-slate-400 dark:text-slate-500">Progres</span>
                                <span className="text-indigo-600 dark:text-indigo-400 font-black">{progress}%</span>
                              </div>
                              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden shadow-inner">
                                <div
                                  className="bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 h-full rounded-full transition-all duration-500"
                                  style={{ width: `${progress}%` }}
                                />
                              </div>
                            </div>

                            <button
                              onClick={(e) => { e.stopPropagation(); router.push(`/dashboard/modules/${m.id}`); }}
                              className="w-full py-1.5 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl text-[11px] transition-all flex items-center justify-center gap-1 border border-indigo-200/80 dark:border-indigo-800/50 shadow-sm group/btn"
                            >
                              <BookOpen className="w-3 h-3" /> Lanjut Belajar <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
                              <Users className="w-3 h-3" /> {m.enr || 0} siswa
                            </span>
                            <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-800/50 font-black text-[10px] flex items-center gap-1">
                              <CheckCircle className="w-3 h-3" /> Lulus 100%
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      );
    }

    // Student: Browse / Explore
    if (role === 'STUDENT' && activeGroup === 'explore') {
      const handleEnroll = async (moduleId: string) => {
        try {
          const targetMod = modules.find((m: any) => m.id === moduleId);
          const res = await fetch('http://localhost:5000/api/enrollments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId: user.id, moduleId })
          });
          const data = await res.json();
          if (res.ok) {
            setRequestSuccessModal({
              moduleId,
              moduleTitle: targetMod?.title || 'Kursus'
            });
            fetchData(user);
          } else {
            alert(data.message || 'Gagal mengirim permintaan izin.');
          }
        } catch {
          alert('Terjadi kesalahan saat mengirim permintaan izin.');
        }
      };

      // 1. BROWSE COURSES TAB / DEFAULT CATALOG
      if (activeMenu === 'Recommended (AI)') {
        // Handled in next block
      } else if (activeMenu === 'Learning Paths') {
        // Handled in next block
      } else {
        const toggleLike = (moduleId: string) => {
          // Optimistic update: toggle likes array in local state instantly
          setModules((prev: any[]) => prev.map((m: any) => {
            if (m.id !== moduleId) return m;
            const alreadyLiked = m.likes?.some((l: any) => l.userId === user.id);
            const newLikes = alreadyLiked
              ? (m.likes || []).filter((l: any) => l.userId !== user.id)
              : [...(m.likes || []), { id: '__optimistic__', userId: user.id }];
            return { ...m, likes: newLikes, likesCount: newLikes.length };
          }));

          // Fire API in background — no await, no loading
          fetch(`http://localhost:5000/api/modules/${moduleId}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id })
          }).catch(err => {
            console.error('Failed to toggle like', err);
            // Revert on error
            setModules((prev: any[]) => prev.map((m: any) => {
              if (m.id !== moduleId) return m;
              const alreadyLiked = m.likes?.some((l: any) => l.userId === user.id && l.id !== '__optimistic__');
              const newLikes = alreadyLiked
                ? (m.likes || []).filter((l: any) => l.userId !== user.id)
                : [...(m.likes || []), { id: '__optimistic__', userId: user.id }];
              return { ...m, likes: newLikes, likesCount: newLikes.length };
            }));
          });
        };

        const allCategories = ['Semua', ...Array.from(new Set(modules.map((m: any) => m.category).filter(Boolean)))] as string[];

        const getDifficulty = (m: any) => {
          const t = (m.title || '').toLowerCase();
          if (t.includes('dasar') || t.includes('basic') || t.includes('intro') || t.includes('pemula')) return { label: 'Pemula', color: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30' };
          if (t.includes('lanjut') || t.includes('advanced') || t.includes('expert')) return { label: 'Mahir', color: 'text-red-600 bg-red-50 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30' };
          return { label: 'Menengah', color: 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30' };
        };

        const getSkillTags = (m: any): string[] => {
          const t = (m.title + ' ' + (m.description || '')).toLowerCase();
          const tags: string[] = [];
          if (t.includes('html')) tags.push('HTML');
          if (t.includes('css')) tags.push('CSS');
          if (t.includes('javascript') || t.includes('js')) tags.push('JavaScript');
          if (t.includes('php')) tags.push('PHP');
          if (t.includes('mysql') || t.includes('sql')) tags.push('SQL');
          if (t.includes('react')) tags.push('React');
          if (t.includes('python')) tags.push('Python');
          if (t.includes('git')) tags.push('Git');
          if (t.includes('jaringan') || t.includes('cisco') || t.includes('network')) tags.push('Networking');
          if (t.includes('database') || t.includes('db')) tags.push('Database');
          if (m.category && !tags.includes(m.category)) tags.push(m.category);
          return tags.slice(0, 3);
        };

        // Deduplicate unique courses by title / canonical name
        const seenTitles = new Set<string>();
        const uniqueModules = modules.filter((m: any) => {
          const key = (m.title || m.id).toLowerCase().trim();
          if (seenTitles.has(key)) return false;
          seenTitles.add(key);
          return true;
        });

        let browseModules = uniqueModules;

        if (exploreSearch.trim()) {
          const q = exploreSearch.toLowerCase();
          browseModules = browseModules.filter((m: any) =>
            m.title?.toLowerCase().includes(q) ||
            m.description?.toLowerCase().includes(q) ||
            m.category?.toLowerCase().includes(q)
          );
        }
        if (exploreCatFilter !== 'Semua') {
          browseModules = browseModules.filter((m: any) => m.category === exploreCatFilter);
        }
        if (exploreSortBy === 'popular') browseModules = [...browseModules].sort((a: any, b: any) => (b.enr || 0) - (a.enr || 0));
        if (exploreSortBy === 'az') browseModules = [...browseModules].sort((a: any, b: any) => a.title.localeCompare(b.title));

        const totalAvailable = uniqueModules.filter((m: any) => {
          const enr = enrollmentMap.get(m.id) || (aliasMap[m.id] ? enrollmentMap.get(aliasMap[m.id]) : null);
          return !enr || enr.enrollmentStatus !== 'APPROVED';
        }).length;

        return (
          <div className="p-4 md:p-8">
            {/* ── Title & Search Header ── */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">Katalog Kursus</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Jelajahi seluruh kurikulum pembelajaran dan tingkatkan keahlian Anda.</p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="relative flex-1 md:w-72">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
                    <Search className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={exploreSearch}
                    onChange={e => setExploreSearch(e.target.value)}
                    placeholder="Cari kursus..."
                    className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                  {exploreSearch && (
                    <button
                      onClick={() => setExploreSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 flex items-center justify-center transition-colors"
                    >
                      <X className="w-3 h-3 text-slate-500 dark:text-slate-400" />
                    </button>
                  )}
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 font-bold px-4 py-2.5 rounded-xl text-xs border border-indigo-100 dark:border-indigo-900/30 flex items-center gap-2 shrink-0">
                  <BookOpen className="w-4 h-4" />
                  <span>{browseModules.length} Kursus</span>
                </div>
              </div>
            </div>

            {/* ── Filter & Sort Bar ── */}
            <div className="mb-6 flex flex-col gap-4">
              {/* Category Filter Pills */}
              <div className="flex gap-2 flex-wrap">
                {allCategories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setExploreCatFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                      exploreCatFilter === cat
                        ? 'bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-600/20'
                        : 'bg-white dark:bg-[#0c0e18] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort + View Toggle */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-bold">Urutkan:</span>
                  {(['popular', 'newest', 'az'] as const).map(opt => (
                    <button
                      key={opt}
                      onClick={() => setExploreSortBy(opt)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        exploreSortBy === opt
                          ? 'bg-slate-800 dark:bg-white text-white dark:text-slate-800'
                          : 'bg-white dark:bg-[#0c0e18] text-slate-500 border border-slate-200 dark:border-slate-700 hover:border-slate-400'
                      }`}
                    >
                      {opt === 'popular' ? '🔥 Populer' : opt === 'newest' ? '🆕 Terbaru' : '🔤 A-Z'}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                  <button onClick={() => setExploreViewMode('grid')}
                    className={`p-2 rounded-lg transition-all ${exploreViewMode === 'grid' ? 'bg-white dark:bg-slate-700 shadow text-indigo-600' : 'text-slate-400 hover:text-slate-600 dark:hover:text-white'}`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
                  </button>
                  <button onClick={() => setExploreViewMode('list')}
                    className={`p-2 rounded-lg transition-all ${exploreViewMode === 'list' ? 'bg-white dark:bg-slate-700 shadow text-indigo-600' : 'text-slate-400 hover:text-slate-600 dark:hover:text-white'}`}>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="4" width="18" height="3" rx="1"/><rect x="3" y="10.5" width="18" height="3" rx="1"/><rect x="3" y="17" width="18" height="3" rx="1"/></svg>
                  </button>
                </div>
              </div>

              {/* Result summary */}
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-bold text-slate-700 dark:text-slate-300">{browseModules.length}</span> kursus ditemukan
                {exploreSearch && <span>untuk &ldquo;<span className="text-indigo-600 font-bold">{exploreSearch}</span>&rdquo;</span>}
              </div>
            </div>

            {/* ── Course List ── */}
            {browseModules.length === 0 ? (
              <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-16 text-center shadow-sm">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-black text-slate-700 dark:text-slate-200 mb-2">
                  Tidak ada kursus yang sesuai dengan pencarian &ldquo;{exploreSearch}&rdquo;
                </h3>
                <p className="text-slate-400 dark:text-slate-500 text-sm mb-6">
                  Coba gunakan kata kunci lain atau pilih kategori &ldquo;Semua&rdquo;.
                </p>
                <div className="flex items-center justify-center gap-3">
                  <button onClick={() => { setExploreSearch(''); setExploreCatFilter('Semua'); }}
                    className="px-5 py-2.5 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl text-sm hover:bg-indigo-100 transition-colors">
                    Reset Filter
                  </button>
                </div>
              </div>
            ) : exploreViewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-3.5">
                {browseModules.map((m: any) => {
                  const theme = getCourseTheme(m.title);
                  const enrollment = enrollmentMap.get(m.id) || (aliasMap[m.id] ? enrollmentMap.get(aliasMap[m.id]) : null);
                  const isLiked = m.likes?.some((l: any) => l.userId === user.id);
                  const difficulty = getDifficulty(m);
                  const skillTags = getSkillTags(m);
                  const isApproved = enrollment?.enrollmentStatus === 'APPROVED';
                  const isPending = enrollment?.enrollmentStatus === 'PENDING';
                  const isRejected = enrollment?.enrollmentStatus === 'REJECTED';

                  return (
                    <div
                      key={m.id}
                      className="group bg-white dark:bg-[#0d1117] rounded-2xl border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-[transform,shadow,border-color] duration-200 overflow-hidden flex flex-col justify-between relative [transform:translateZ(0)]"
                    >
                      {/* Top Thumbnail Section (Compact) */}
                      <div className="relative">
                        <div
                          onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                          className={`${m.thumbnail ? 'bg-slate-950' : `bg-gradient-to-br ${theme.bg}`} w-full aspect-[16/8.5] flex items-center justify-center relative overflow-hidden cursor-pointer group/thumb`}
                        >
                          {m.thumbnail ? (
                            <>
                              <img
                                src={m.thumbnail}
                                alt={m.title}
                                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                            </>
                          ) : (
                            <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
                              <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-200 mb-1">
                                <span className="text-lg drop-shadow">{theme.emoji}</span>
                              </div>
                              <span className="text-[10px] font-black text-white/90 uppercase tracking-wider">{theme.logo}</span>
                            </div>
                          )}

                          {/* Floating Category Pill */}
                          <div className="absolute top-2 left-2 z-10">
                            <span className="bg-slate-900/90 text-white border border-white/10 px-2 py-0.5 rounded-md text-[9px] font-black tracking-wide uppercase shadow-sm">
                              {m.category || 'General'}
                            </span>
                          </div>

                          {/* Wishlist Button */}
                          <button
                            onClick={e => { e.stopPropagation(); toggleLike(m.id); }}
                            className={`absolute top-2 right-2 z-10 w-7 h-7 rounded-full flex items-center justify-center transition-[transform,background-color,box-shadow] duration-200 shadow active:scale-125 ${
                              isLiked
                                ? 'bg-rose-500 text-white scale-110 ring-2 ring-rose-300 ring-offset-1 shadow-rose-500/40 shadow-md'
                                : 'bg-slate-900/70 text-white/80 hover:text-rose-400 hover:bg-slate-900/90 hover:scale-110'
                            }`}
                            title={isLiked ? 'Batal Suka' : 'Suka Modul Ini'}
                          >
                            <svg
                              className={`w-3.5 h-3.5 transition-transform duration-200 ${isLiked ? 'scale-110 drop-shadow-sm' : ''}`}
                              fill={isLiked ? 'currentColor' : 'none'}
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </button>

                          {/* Floating Enrollment Status Badge */}
                          {isApproved && (
                            <div className="absolute bottom-2 left-2 z-10 bg-emerald-600/95 text-white font-black text-[9px] tracking-wide px-2 py-0.5 rounded-md shadow flex items-center gap-1 border border-emerald-400/40">
                              <CheckCircle className="w-2.5 h-2.5 text-emerald-200" />
                              <span>Terdaftar {enrollment.progress !== undefined ? `(${enrollment.progress}%)` : ''}</span>
                            </div>
                          )}
                          {isPending && (
                            <div className="absolute bottom-2 left-2 z-10 bg-amber-500/95 text-white font-black text-[9px] tracking-wide px-2 py-0.5 rounded-md shadow flex items-center gap-1 border border-amber-300/40 animate-pulse">
                              <Clock className="w-2.5 h-2.5 animate-spin text-amber-200" />
                              <span>Menunggu Izin</span>
                            </div>
                          )}
                          {isRejected && (
                            <div className="absolute bottom-2 left-2 z-10 bg-rose-600/95 text-white font-black text-[9px] tracking-wide px-2 py-0.5 rounded-md shadow flex items-center gap-1 border border-rose-400/40">
                              <X className="w-2.5 h-2.5" />
                              <span>Ditolak</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Content & Information Body (Compact) */}
                      <div className="p-3.5 flex-1 flex flex-col justify-between gap-2.5">
                        <div>
                          {/* Meta Header: Difficulty & Instructor */}
                          <div className="flex items-center justify-between gap-1.5 mb-1.5">
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${difficulty.color}`}>
                              {difficulty.label}
                            </span>
                            {m.instructor ? (
                              <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[100px]" title={m.instructor.name}>
                                <div className="w-3.5 h-3.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[8px] font-black shrink-0">
                                  {m.instructor.name.charAt(0)}
                                </div>
                                <span className="truncate">{m.instructor.name}</span>
                              </div>
                            ) : (
                              <span className="text-[9px] text-slate-400 font-medium">Instruktur</span>
                            )}
                          </div>

                          {/* Course Title */}
                          <h3
                            onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                            className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm leading-snug mb-1 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
                          >
                            {m.title}
                          </h3>

                          {/* Description */}
                          <p className="text-[11px] text-slate-400 dark:text-slate-500 line-clamp-1 leading-normal mb-2">
                            {m.description || 'Pelajari materi kurikulum terstruktur.'}
                          </p>

                          {/* Skill tags */}
                          {skillTags.length > 0 && (
                            <div className="flex flex-wrap gap-1">
                              {skillTags.slice(0, 3).map((tag: string) => (
                                <span key={tag} className="text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Footer: Stats & CTA Action */}
                        <div>
                          {/* Information Row */}
                          <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 font-medium py-2 border-t border-slate-100 dark:border-slate-800/80">
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3 text-slate-400" />
                              <span className="font-semibold text-slate-600 dark:text-slate-300">{m.enr || 0}</span> siswa
                            </div>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <div className="flex items-center gap-1">
                              <BookOpen className="w-3 h-3 text-slate-400" />
                              <span className="font-semibold text-slate-600 dark:text-slate-300">{m.lessonsCount || 0}</span> materi
                            </div>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <div className="flex items-center gap-0.5 text-amber-500 font-bold">
                              <span>★ {m.avgRating > 0 ? Number(m.avgRating).toFixed(1) : '–'}</span>
                            </div>
                          </div>

                          {/* Dynamic Action Button */}
                          {['INSTRUCTOR', 'ADMIN', 'TEACHER', 'GURU'].includes((user?.role || '').toUpperCase()) ? (
                            <button
                              onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                              className="w-full py-1.5 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl text-[11px] transition-all flex items-center justify-center gap-1 border border-indigo-200/80 dark:border-indigo-800/50 shadow-sm"
                            >
                              <Edit className="w-3 h-3" /> Kelola Modul
                            </button>
                          ) : isApproved ? (
                            <button
                              onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                              className="w-full py-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold rounded-xl text-[11px] transition-all flex items-center justify-center gap-1 shadow-sm shadow-emerald-600/20 hover:scale-[1.01] active:scale-[0.99]"
                            >
                              <BookOpen className="w-3 h-3" /> Lanjut Belajar <ArrowRight className="w-3 h-3" />
                            </button>
                          ) : isPending ? (
                            <button
                              disabled
                              className="w-full py-1.5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 text-amber-600 dark:text-amber-400 font-bold rounded-xl text-[11px] flex items-center justify-center gap-1 cursor-not-allowed shadow-sm"
                            >
                              <Clock className="w-3 h-3 animate-spin" /> Menunggu Izin
                            </button>
                          ) : isRejected ? (
                            <button
                              onClick={() => handleEnroll(m.id)}
                              className="w-full py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-[11px] flex items-center justify-center gap-1 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-sm shadow-rose-600/20"
                            >
                              Ajukan Izin Ulang <ArrowRight className="w-3 h-3" />
                            </button>
                          ) : (
                            <button
                              onClick={() => handleEnroll(m.id)}
                              className="w-full py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl text-[11px] transition-all flex items-center justify-center gap-1 shadow-sm shadow-indigo-600/25 hover:scale-[1.01] active:scale-[0.99]"
                            >
                              <Lock className="w-3 h-3" /> Minta Izin Akses <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* ── LIST VIEW (Compact) ── */
              <div className="space-y-3">
                {browseModules.map((m: any) => {
                  const theme = getCourseTheme(m.title);
                  const enrollment = enrollmentMap.get(m.id) || (aliasMap[m.id] ? enrollmentMap.get(aliasMap[m.id]) : null);
                  const isLiked = m.likes?.some((l: any) => l.userId === user.id);
                  const difficulty = getDifficulty(m);
                  const skillTags = getSkillTags(m);
                  const isApproved = enrollment?.enrollmentStatus === 'APPROVED';
                  const isPending = enrollment?.enrollmentStatus === 'PENDING';
                  const isRejected = enrollment?.enrollmentStatus === 'REJECTED';

                  return (
                    <div
                      key={m.id}
                      className="group bg-white dark:bg-[#0d1117] rounded-2xl border border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-400/60 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-md transition-all duration-200 p-3 flex flex-col md:flex-row gap-3.5 items-start md:items-center justify-between"
                    >
                      <div className="flex gap-3 items-start md:items-center min-w-0 flex-1">
                        {/* 16:9 Mini Thumbnail */}
                        <div
                          onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                          className={`${m.thumbnail ? 'bg-slate-950' : `bg-gradient-to-br ${theme.bg}`} w-28 sm:w-36 aspect-[16/8.5] rounded-xl shrink-0 flex items-center justify-center relative overflow-hidden cursor-pointer shadow-sm`}
                        >
                          {m.thumbnail ? (
                            <img src={m.thumbnail} alt={m.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          ) : (
                            <span className="text-2xl drop-shadow select-none">{theme.emoji}</span>
                          )}
                        </div>

                        {/* Text & Meta */}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 mb-1 flex-wrap">
                            <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${difficulty.color}`}>{difficulty.label}</span>
                            <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md uppercase">{m.category || 'General'}</span>
                            {isApproved && <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/50">✅ Terdaftar</span>}
                            {isPending && <span className="text-[9px] font-black text-amber-600 bg-amber-50 dark:bg-amber-950/30 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800/50 animate-pulse">⏳ Menunggu Izin</span>}
                          </div>

                          <h3
                            onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                            className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm leading-snug mb-0.5 cursor-pointer group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-1"
                          >
                            {m.title}
                          </h3>

                          <p className="text-[11px] text-slate-400 dark:text-slate-500 line-clamp-1 mb-1.5">
                            {m.description || 'Pelajari materi kurikulum terstruktur.'}
                          </p>

                          <div className="flex items-center gap-3 text-[10px] text-slate-400 font-medium">
                            <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {m.enr || 0} siswa</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {m.lessonsCount || 0} materi</span>
                            {m.instructor && (
                              <>
                                <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                                <span className="truncate">👤 {m.instructor.name}</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Action Buttons */}
                      <div className="flex items-center gap-2 shrink-0 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                        <button
                          onClick={() => toggleLike(m.id)}
                          className={`w-8 h-8 rounded-xl border transition-all duration-200 flex items-center justify-center active:scale-125 ${
                            isLiked
                              ? 'bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-900/40 text-rose-500 shadow-sm shadow-rose-200 scale-105'
                              : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-400 hover:text-rose-500 hover:border-rose-200 hover:scale-105'
                          }`}
                        >
                          <svg
                            className={`w-3.5 h-3.5 transition-all duration-200 ${isLiked ? 'scale-110' : ''}`}
                            fill={isLiked ? 'currentColor' : 'none'}
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2.2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </button>

                        {isApproved ? (
                          <button
                            onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-[11px] flex items-center gap-1 transition-all shadow-sm hover:scale-[1.02]"
                          >
                            <BookOpen className="w-3 h-3" /> Lanjut Belajar <ArrowRight className="w-3 h-3" />
                          </button>
                        ) : isPending ? (
                          <span className="px-3 py-1.5 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 text-amber-600 dark:text-amber-400 font-bold rounded-xl text-[11px] flex items-center gap-1 animate-pulse">
                            <Clock className="w-3 h-3 animate-spin" /> Menunggu Izin
                          </span>
                        ) : isRejected ? (
                          <button
                            onClick={() => handleEnroll(m.id)}
                            className="px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl text-[11px] transition-all hover:scale-[1.02] shadow-sm shadow-rose-600/20"
                          >
                            Ajukan Izin Ulang <ArrowRight className="w-3 h-3" />
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEnroll(m.id)}
                            className="px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold rounded-xl text-[11px] flex items-center gap-1 transition-all hover:scale-[1.02] shadow-sm shadow-indigo-600/25"
                          >
                            <Lock className="w-3 h-3" /> Minta Izin Akses <ArrowRight className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* ── Liked / Wishlist Section ── */}
            {(() => {
              const likedModules = modules.filter((m: any) => m.likes?.some((l: any) => l.userId === user.id));
              if (likedModules.length === 0) return null;
              return (
                <div className="mt-12">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 flex items-center justify-center">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-slate-800 dark:text-white">Wishlist Saya</h2>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{likedModules.length} kursus disukai</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {likedModules.map((m: any) => {
                      const theme = getCourseTheme(m.title);
                      const enrL = enrollmentMap.get(m.id) || (aliasMap[m.id] ? enrollmentMap.get(aliasMap[m.id]) : null);
                      return (
                        <div key={m.id} className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-red-100 dark:border-red-900/30 shadow-sm hover:shadow-lg transition-all overflow-hidden flex group">
                          <div onClick={() => router.push(`/dashboard/modules/${m.id}`)} className={`${m.thumbnail ? 'bg-slate-900' : `bg-gradient-to-br ${theme.bg}`} w-24 shrink-0 flex items-center justify-center relative overflow-hidden cursor-pointer`}>
                            {m.thumbnail ? <img src={m.thumbnail} alt={m.title} className="absolute inset-0 w-full h-full object-cover" /> : <span className="text-3xl">{theme.emoji}</span>}
                          </div>
                          <div className="p-4 flex-1 min-w-0">
                            <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm line-clamp-1 mb-1 cursor-pointer group-hover:text-indigo-600" onClick={() => router.push(`/dashboard/modules/${m.id}`)}>{m.title}</h4>
                            <p className="text-[11px] text-slate-400 mb-3">{m.category}</p>
                            <div className="flex gap-2">
                              <button onClick={() => toggleLike(m.id)} className="p-1.5 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/30 rounded-lg text-red-400 hover:text-red-600 transition-colors"><X className="w-3.5 h-3.5" /></button>
                              {!enrL && <button onClick={() => handleEnroll(m.id)} className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg text-xs transition-all">Daftar</button>}
                              {enrL?.enrollmentStatus === 'APPROVED' && <button onClick={() => router.push(`/dashboard/modules/${m.id}`)} className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-all">Belajar</button>}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })()}
          </div>
        );

      }
      // 2. RECOMMENDED (AI) TAB
      if (activeMenu === 'Recommended (AI)') {
        const handleAiAnalysis = () => {
          setAiAnalyzing(true);
          setAiStep(0);
          setTimeout(() => {
            setAiStep(1);
            setTimeout(() => {
              setAiStep(2);
              setTimeout(() => {
                setAiStep(3);
                setTimeout(() => {
                  setAiAnalyzing(false);
                  setAiStep(4);
                }, 700);
              }, 700);
            }, 700);
          }, 700);
        };

        const incompleteModules = modules.filter((m: any) => {
          const enr = enrollmentMap.get(m.id);
          return !enr || enr.enrollmentStatus !== 'APPROVED' || enr.progress < 100;
        });

        const recommendedList = incompleteModules.slice(0, 2);

        return (
          <div className="p-4 md:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight flex items-center gap-2">
                <Sparkles className="w-8 h-8 text-purple-600 animate-pulse" />
                <span>Rekomendasi AI Personal</span>
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Sistem kecerdasan buatan kami memetakan minat, keaktifan, dan target karier Anda.</p>
            </div>

            {aiAnalyzing ? (
              <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-12 text-center text-white border border-indigo-500/20 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[400px]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent)] animate-pulse" />
                
                <div className="w-24 h-24 rounded-full bg-indigo-500/10 border-2 border-indigo-400/30 flex items-center justify-center mb-8 relative animate-spin-slow">
                  <div className="absolute inset-1 rounded-full border border-dashed border-indigo-300/40" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                    <Sparkles className="w-6 h-6 text-white animate-bounce" />
                  </div>
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-6">AI Advisor Sedang Menganalisis Profil Anda...</h3>
                
                <div className="max-w-md w-full space-y-3.5 text-left bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  {[
                    { step: 0, text: 'Membaca riwayat pendaftaran & modul selesai...' },
                    { step: 1, text: 'Mengevaluasi kecepatan belajar & pengumpulan tugas...' },
                    { step: 2, text: 'Memetakan kompetensi dengan kebutuhan industri terkini...' },
                    { step: 3, text: 'Menghasilkan jalur belajar & rekomendasi personalisasi...' }
                  ].map((s) => {
                    const isPassed = aiStep > s.step;
                    const isActive = aiStep === s.step;
                    return (
                      <div key={s.step} className="flex items-center gap-3 text-sm">
                        {isPassed ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 text-[10px] font-bold text-white">âœ“</div>
                        ) : isActive ? (
                          <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 relative">
                            <span className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-75" />
                            <span className="w-2 h-2 rounded-full bg-white relative z-10" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-bold text-white/30">â€¢</div>
                        )}
                        <span className={`font-medium ${isPassed ? 'text-emerald-400 font-semibold' : isActive ? 'text-indigo-200 font-semibold animate-pulse' : 'text-white/40'}`}>
                          {s.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-purple-950 rounded-3xl p-6 md:p-8 text-white border border-indigo-800 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent)] pointer-events-none" />
                  
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-xl shadow-indigo-500/20 shrink-0 relative">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-2">
                      <span className="text-[10px] font-bold tracking-widest text-indigo-300 bg-white/10 px-3 py-1 rounded-full uppercase">AI Career Profile</span>
                      <span className="text-[10px] font-bold tracking-widest text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full uppercase">96% Accuracy</span>
                    </div>
                    <h2 className="text-2xl font-black mb-2">Profil Belajar: <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-300 to-pink-300">Pragmatic Engineer</span></h2>
                    <p className="text-indigo-200/80 text-sm leading-relaxed max-w-2xl">
                      Anda menunjukkan antusiasme tinggi di bidang pemrograman visual dan pengerjaan terstruktur. 
                      Kecepatan penyerapan materi dasar Anda berada di <strong>top 5% siswa</strong>. Rekomendasi karir ideal Anda adalah <strong className="text-white">Frontend Web Architect</strong>.
                    </p>
                  </div>

                  <button onClick={handleAiAnalysis}
                    className="px-5 py-3 bg-white text-indigo-950 hover:bg-indigo-50 font-bold rounded-2xl text-xs transition-all shadow-lg shadow-white/10 shrink-0 flex items-center gap-2 hover:scale-[1.03] active:scale-[0.97]">
                    <RefreshCw className="w-3.5 h-3.5 text-indigo-950" /> Analisis Ulang AI
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { title: 'Kecocokan Karir', value: '94%', desc: 'Sesuai dengan Industri Web', color: 'text-indigo-600 bg-indigo-50 border-indigo-100' },
                    { title: 'Konsistensi Belajar', value: 'Sangat Baik', desc: 'Aktivitas belajar mingguan aktif', color: 'text-purple-600 bg-purple-50 border-purple-100' },
                    { title: 'Rekomendasi Utama', value: recommendedList[0]?.title || 'Lanjut Belajar', desc: 'Langkah karir krusial berikutnya', color: 'text-emerald-600 bg-emerald-50 border-emerald-100' }
                  ].map((st, idx) => (
                    <div key={idx} className="p-6 bg-white dark:bg-[#0c0e18] border border-slate-205 dark:border-slate-800 rounded-3xl shadow-sm flex flex-col justify-between">
                      <div>
                        <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{st.title}</p>
                        <p className="text-2xl font-black text-slate-800 dark:text-slate-200 mt-2 leading-none">{st.value}</p>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {st.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-black text-slate-800 dark:text-white mb-5 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-indigo-650 dark:text-indigo-400" />
                    <span>Modul Prioritas Berdasarkan AI</span>
                  </h3>

                  {recommendedList.length === 0 ? (
                    <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center shadow-sm">
                      <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                      <p className="text-slate-550 dark:text-slate-400 font-bold">Luar Biasa! Semua rekomendasi modul telah Anda selesaikan.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {recommendedList.map((m: any) => {
                        const theme = getCourseTheme(m.title);
                        const enrollment = enrollmentMap.get(m.id);

                        return (
                          <div key={m.id} className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col md:flex-row group">
                            {/* Thumbnail */}
                            <div className={`${m.thumbnail ? 'bg-slate-900' : `bg-gradient-to-br ${theme.bg}`} w-full md:w-44 h-36 md:h-full flex items-center justify-center shrink-0 relative overflow-hidden group`}>
                              {/* Custom uploaded thumbnail */}
                              {m.thumbnail && (
                                <>
                                  <img
                                    src={m.thumbnail}
                                    alt={m.title}
                                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                                </>
                              )}
                              <div className="absolute top-3 left-3 bg-purple-600 text-white font-bold text-[9px] px-2 py-0.5 rounded-md shadow-sm tracking-wider uppercase z-10">
                                Recommended
                              </div>

                              {/* Visual Glassmorphic Logo Block â€” only when no custom thumbnail */}
                              {!m.thumbnail && (
                                <div className="w-[110px] h-16 bg-white/10 rounded-2xl rotate-[-4deg] absolute border border-white/20 backdrop-blur-sm flex items-center justify-between px-2.5 shadow-xl shadow-black/10 group-hover:scale-105 group-hover:rotate-0 transition-all duration-500">
                                  <span className="text-2xl drop-shadow-md select-none group-hover:scale-110 transition-transform duration-500">{theme.emoji}</span>
                                  <div className="text-right select-none">
                                    <p className="text-[8px] font-black text-white/50 tracking-widest uppercase leading-none">Module</p>
                                    <p className="text-sm font-black text-white leading-tight mt-0.5 tracking-tight">{theme.logo}</p>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-between">
                              <div>
                                <span className="text-[10px] font-black tracking-wider text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-955/20 uppercase px-2.5 py-1 rounded-md self-start mb-2 inline-block">
                                  {m.category || 'Programming'}
                                </span>
                                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-base mb-1.5 leading-snug">{m.title}</h4>
                                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">{m.description || 'Pondasi penting untuk kelayakan industri karir Anda.'}</p>
                              </div>
                              <div className="flex items-center justify-between gap-4 mt-auto">
                                <span className="text-[11px] text-slate-400 dark:text-slate-500 font-medium flex items-center gap-1">
                                  <Users className="w-3.5 h-3.5 text-slate-400" /> {m.enr || 0} siswa
                                </span>
                                {enrollment && enrollment.enrollmentStatus === 'APPROVED' ? (
                                  <button onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-600/10">
                                    Lanjut Belajar
                                  </button>
                                ) : enrollment && enrollment.enrollmentStatus === 'PENDING' ? (
                                  <span className="text-xs font-bold text-amber-500 dark:text-amber-400 bg-amber-50 dark:bg-amber-955/20 px-3 py-1.5 rounded-lg border border-amber-100 dark:border-amber-900/30 flex items-center gap-1.5">
                                    <Clock className="w-3.5 h-3.5 animate-spin" /> Pending
                                  </span>
                                ) : (
                                  <button onClick={() => handleEnroll(m.id)}
                                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-indigo-600/10">
                                    Minta Akses
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      }

      // 3. LEARNING PATHS TAB
      if (activeMenu === 'Learning Paths') {
        const frontendPath = [
          {
            step: 1,
            title: 'HTML & Web Basics',
            desc: 'Kuasai kerangka dasar web menggunakan HTML5 semantik dan berstandar aksesibilitas tinggi.',
            skills: ['Semantic HTML5', 'Document Structure', 'Forms & Inputs', 'SEO Basics'],
            estTime: '4 jam'
          },
          {
            step: 2,
            title: 'CSS Styling & Animations',
            desc: 'Rancang website yang responsif dan interaktif dengan CSS Flexbox, Grid, dan keyframe animations.',
            skills: ['Flexbox & Grid', 'Responsive Design', 'CSS Variables', 'Keyframe Animations'],
            estTime: '6 jam'
          },
          {
            step: 3,
            title: 'Modern Javascript (ES6+)',
            desc: 'Berikan logika pada website. Pelajari DOM manipulation, async/await, API fetch, dan modern ES syntax.',
            skills: ['DOM Manipulation', 'ES6+ Features', 'Async/Await & Fetch', 'Local Storage'],
            estTime: '8 jam'
          },
          {
            step: 4,
            title: 'Mobile App with React Native',
            desc: 'Bangun aplikasi mobile multiplatform (Android & iOS) dengan bekal React dan Javascript.',
            skills: ['React Native', 'Navigation Router', 'State Management', 'Native Device APIs'],
            estTime: '12 jam'
          }
        ];

        const backendPath = [
          {
            step: 1,
            title: 'MySQL Database Mastery',
            desc: 'Kuasai pemodelan database relasional, kueri kompleks (JOINs), arsitektur skema, dan performa indeks.',
            skills: ['Database Schema', 'SQL Queries', 'Indexes & Constraints', 'Relational Modeling'],
            estTime: '5 jam'
          },
          {
            step: 2,
            title: 'PHP Backend Development',
            desc: 'Bangun server-side logic tangguh. Pelajari pemrograman berorientasi objek (OOP) di PHP 8 dan integrasi database.',
            skills: ['PHP Syntax & OOP', 'Database CRUD', 'Session Auth', 'REST APIs Basics'],
            estTime: '8 jam'
          },
          {
            step: 3,
            title: 'Git Version Control',
            desc: 'Kelola kode dan kolaborasi layaknya software engineer profesional. Pahami branching, merging, dan conflict resolution.',
            skills: ['Git Core Concepts', 'Branching & Merging', 'Resolving Conflicts', 'GitHub'],
            estTime: '3 jam'
          },
          {
            step: 4,
            title: 'Cisco Networking Fundamentals',
            desc: 'Mengerti cara kerja jaringan internet, perutean data, subnetting IP, serta manajemen switch dan router Cisco.',
            skills: ['IP Subnetting', 'Routing & Switching', 'Network Protocols', 'Firewalls & Security'],
            estTime: '6 jam'
          }
        ];

        const activePath = selectedPath === 0 ? frontendPath : backendPath;

        const pathWithStatus = activePath.map((item, idx) => {
          const dbMod = modules.find((m: any) => m.title?.toLowerCase() === item.title.toLowerCase());
          const enr = dbMod ? enrollmentMap.get(dbMod.id) : null;
          
          let status = 'LOCKED';
          let progress = 0;
          let id = dbMod?.id || null;

          if (enr) {
            progress = enr.progress || 0;
            if (enr.enrollmentStatus === 'APPROVED') {
              status = progress === 100 ? 'COMPLETED' : 'IN_PROGRESS';
            } else if (enr.enrollmentStatus === 'PENDING') {
              status = 'PENDING';
            } else if (enr.enrollmentStatus === 'REJECTED') {
              status = 'READY';
            }
          } else {
            if (idx === 0) {
              status = 'READY';
            } else {
              const prevItem = activePath[idx - 1];
              const prevDbMod = modules.find((m: any) => m.title?.toLowerCase() === prevItem.title.toLowerCase());
              const prevEnr = prevDbMod ? enrollmentMap.get(prevDbMod.id) : null;
              if (prevEnr && prevEnr.enrollmentStatus === 'APPROVED' && prevEnr.progress === 100) {
                status = 'READY';
              }
            }
          }

          return { ...item, status, progress, id, dbMod };
        });

        const activeMilestone = selectedMilestone 
          ? (pathWithStatus.find(p => p.title === selectedMilestone.title) || pathWithStatus[0])
          : pathWithStatus[0];

        return (
          <div className="p-4 md:p-8">
            <div className="mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h1 className="text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                  <Layout className="w-8 h-8 text-indigo-600" />
                  <span>Jalur Pembelajaran Karier</span>
                </h1>
                <p className="text-slate-500 text-sm mt-1">Jalur kurikulum terstruktur yang didesain khusus untuk mempersiapkan Anda siap kerja.</p>
              </div>

              <div className="bg-slate-100 p-1.5 rounded-2xl flex gap-1 self-start lg:self-auto border border-slate-200">
                <button onClick={() => { setSelectedPath(0); setSelectedMilestone(null); }}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${selectedPath === 0 ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-800'}`}>
                  Frontend Developer
                </button>
                <button onClick={() => { setSelectedPath(1); setSelectedMilestone(null); }}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${selectedPath === 1 ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-800'}`}>
                  Backend & Fullstack
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8 relative">
                <div className="absolute left-[39px] md:left-[47px] top-12 bottom-12 w-[3px] bg-slate-100 z-0 pointer-events-none" />

                {pathWithStatus.map((item, index) => {
                  const isActive = activeMilestone.title === item.title;
                  
                  let circleClass = 'bg-slate-100 text-slate-400 border-slate-200';
                  let icon = <span className="font-bold text-sm">{item.step}</span>;

                  if (item.status === 'COMPLETED') {
                    circleClass = 'bg-emerald-500 text-white border-emerald-400 shadow-md shadow-emerald-500/20';
                    icon = <Check className="w-5 h-5 stroke-[3]" />;
                  } else if (item.status === 'IN_PROGRESS') {
                    circleClass = 'bg-amber-400 text-white border-amber-300 shadow-md shadow-amber-400/20';
                  } else if (item.status === 'PENDING') {
                    circleClass = 'bg-amber-500 text-white border-amber-400 animate-pulse';
                    icon = <Clock className="w-4 h-4 animate-spin" />;
                  } else if (item.status === 'READY') {
                    circleClass = 'bg-white text-indigo-600 border-indigo-500 border-2 shadow-md shadow-indigo-600/10 ring-4 ring-indigo-50';
                  } else if (item.status === 'LOCKED') {
                    circleClass = 'bg-slate-100 text-slate-400 border-slate-200';
                    icon = <Lock className="w-4 h-4 text-slate-400" />;
                  }

                  return (
                    <button key={index} onClick={() => setSelectedMilestone(item)}
                      className={`w-full flex items-start gap-4 md:gap-6 text-left relative z-10 p-4 rounded-2xl border transition-all ${isActive ? 'bg-indigo-50/50 border-indigo-200 shadow-sm' : 'border-transparent hover:bg-slate-50'}`}>
                      <div className={`w-12 h-12 rounded-full border-4 flex items-center justify-center shrink-0 transition-all font-black ${circleClass}`}>
                        {icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug truncate">{item.title}</h3>
                          
                          {item.status === 'COMPLETED' && (
                            <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md uppercase">Lulus</span>
                          )}
                          {item.status === 'IN_PROGRESS' && (
                            <span className="text-[9px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md uppercase">{item.progress}% selesai</span>
                          )}
                          {item.status === 'PENDING' && (
                            <span className="text-[9px] font-black text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md uppercase">Pending</span>
                          )}
                          {item.status === 'READY' && (
                            <span className="text-[9px] font-black text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md uppercase">Siap Mulai</span>
                          )}
                          {item.status === 'LOCKED' && (
                            <span className="text-[9px] font-black text-slate-400 bg-slate-50 px-2 py-0.5 rounded-md uppercase">Terkunci</span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{item.desc}</p>
                        
                        {item.status === 'IN_PROGRESS' && (
                          <div className="w-full bg-slate-100 h-1.5 rounded-full mt-3 overflow-hidden">
                            <div className="bg-amber-400 h-full rounded-full transition-all" style={{ width: `${item.progress}%` }} />
                          </div>
                        )}
                      </div>
                      
                      <ChevronRight className={`w-5 h-5 self-center text-slate-300 transition-transform ${isActive ? 'translate-x-1 text-indigo-500' : ''}`} />
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col h-full self-stretch">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-black tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase">
                      Milestone {activeMilestone.step}
                    </span>
                    {activeMilestone.status === 'LOCKED' ? (
                      <span className="text-[9px] font-black text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" /> LOCKED
                      </span>
                    ) : (
                      <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full uppercase">
                        AVAILABLE
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-black text-slate-800 leading-snug mb-3">{activeMilestone.title}</h2>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{activeMilestone.desc}</p>

                  <div className="space-y-5">
                    <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                      <span className="text-slate-400 font-medium">Estimasi Waktu Belajar</span>
                      <span className="text-slate-700 font-bold">{activeMilestone.estTime}</span>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">Skill yang Akan Dikuasai:</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeMilestone.skills.map((sk: string, sidx: number) => (
                          <span key={sidx} className="text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200/50 px-2.5 py-1 rounded-lg">
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 border-t border-slate-100 pt-6">
                  {activeMilestone.status === 'COMPLETED' ? (
                    <button onClick={() => router.push(`/dashboard/modules/${activeMilestone.id}`)}
                      className="w-full py-3.5 bg-indigo-50 text-indigo-700 font-black rounded-2xl text-xs hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2">
                      Pelajari Ulang Modul
                    </button>
                  ) : activeMilestone.status === 'IN_PROGRESS' ? (
                    <button onClick={() => router.push(`/dashboard/modules/${activeMilestone.id}`)}
                      className="w-full py-3.5 bg-indigo-600 text-white font-black rounded-2xl text-xs hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
                      Lanjutkan Belajar ({activeMilestone.progress}%)
                    </button>
                  ) : activeMilestone.status === 'READY' ? (
                    activeMilestone.dbMod ? (
                      <button onClick={() => handleEnroll(activeMilestone.id)}
                        className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20">
                        Minta Akses Sekarang
                      </button>
                    ) : (
                      <button disabled className="w-full py-3.5 bg-slate-100 text-slate-400 font-bold rounded-2xl text-xs cursor-not-allowed">
                        Modul Tidak Ditemukan di DB
                      </button>
                    )
                  ) : activeMilestone.status === 'PENDING' ? (
                    <button disabled
                      className="w-full py-3.5 bg-amber-50 border border-amber-200 text-amber-600 font-bold rounded-2xl text-xs cursor-not-allowed flex items-center justify-center gap-2 animate-pulse">
                      <Clock className="w-4 h-4 animate-spin" /> Akses Sedang Ditinjau Instruktur
                    </button>
                  ) : (
                    <div className="text-center p-4 bg-slate-50 border border-dashed border-slate-200 rounded-2xl">
                      <p className="text-[11px] text-slate-400 font-semibold flex items-center justify-center gap-1.5">
                        <Lock className="w-3.5 h-3.5 text-slate-300" />
                        <span>Selesaikan modul sebelumnya terlebih dahulu</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    // Admin / Instructor Overview
    if ((role === 'ADMIN' || role === 'INSTRUCTOR') && activeGroup === 'overview') {
      const instructorModules = role === 'INSTRUCTOR' ? modules.filter((m: any) => m.instructor?.id === user.id || m.instructorId === user.id) : modules;
      const totalEnrollments = instructorModules.reduce((acc: number, m: any) => acc + (m._count?.enrollments || 0), 0);

      // Filter recent students waiting for approval (PENDING)
      const pendingEnrollments = enrolledStudents.filter((s: any) => s.status === 'PENDING');
      const recentStudents = enrolledStudents.slice(0, 3); // Get 3 recent students

      return (
        <div className="p-4 md:p-8 space-y-8 animate-fadeIn max-w-7xl mx-auto">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-950 dark:from-[#0d101d] dark:via-[#090b14] dark:to-[#0f111a] border border-indigo-850 dark:border-slate-800 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-indigo-950/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent)] pointer-events-none" />
            
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] font-black tracking-widest text-indigo-300 bg-white/10 px-3.5 py-1 rounded-full uppercase">
                Studio Dasbor Pengajar
              </span>
              <h1 className="text-2xl md:text-3xl font-black tracking-tight mt-2">
                Selamat datang kembali, {user.name?.split(' ')[0]}! ðŸ‘‹
              </h1>
              <p className="text-indigo-200/80 text-xs leading-relaxed max-w-2xl font-medium">
                Anda memiliki <strong className="text-white">{instructorModules.length} kursus aktif</strong> dengan total <strong className="text-white">{totalEnrollments} peserta terdaftar</strong>. Mari pantau aktivitas dan kemajuan belajar mereka hari ini.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <button 
                onClick={() => router.push('/dashboard/manage-modules?action=create')}
                className="px-5 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-2xl text-xs shadow-lg shadow-indigo-600/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Plus className="w-4 h-4 text-white" />
                <span>Buat Modul Baru</span>
              </button>

              <button 
                onClick={() => {
                  router.push('/dashboard?view=q-a-forum');
                }}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-bold rounded-2xl text-xs border border-white/10 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-indigo-200" />
                <span>Buka Forum Q&A</span>
              </button>
            </div>
          </div>

          {/* Key KPI Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Total Modul Kursus', value: instructorModules.length, desc: 'Aktif di catalog', icon: BookOpen, color: 'text-indigo-650 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/20 border-indigo-105 dark:border-indigo-900/30' },
              { label: 'Total Peserta Terdaftar', value: totalEnrollments, desc: 'Siswa belajar aktif', icon: Users, color: 'text-emerald-650 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950/20 border-emerald-105 dark:border-emerald-900/30' },
              { label: 'Rata-rata Rating', value: '4.8', desc: 'Kepuasan belajar siswa', icon: Star, color: 'text-amber-650 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/20 border-amber-105 dark:border-amber-900/30' },
              { label: 'Selesai Pembelajaran', value: '78%', desc: 'Rasio progress 100%', icon: TrendingUp, color: 'text-purple-650 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/20 border-purple-105 dark:border-purple-900/30' },
            ].map((s, i) => (
              <div key={i} className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm dark:shadow-none hover:shadow-md transition-all flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-110 duration-300 ${s.color.split(' ')[0]} ${s.color.split(' ')[1]} ${s.color.split(' ')[2]}`}>
                  <s.icon className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest leading-none">{s.label}</p>
                  <p className="text-2xl font-black text-slate-800 dark:text-white mt-1.5 leading-none">{s.value}</p>
                  <p className="text-[9px] text-slate-500 dark:text-slate-400 font-semibold mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-350 dark:bg-slate-700" /> {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 2-Column Main Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            
            {/* Left: Course Performance & Listing */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider">Performa Modul Kursus</h2>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-medium mt-0.5">Daftar kursus terbaru yang Anda kelola</p>
                </div>
                <button 
                  onClick={() => router.push('/dashboard/manage-modules')}
                  className="text-xs font-black text-indigo-650 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 px-3.5 py-2 rounded-xl transition-all border border-transparent hover:border-indigo-100 dark:hover:border-indigo-900/40"
                >
                  Lihat Semua
                </button>
              </div>

              {instructorModules.length === 0 ? (
                <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-12 text-center">
                  <BookOpen className="w-12 h-12 text-slate-350 dark:text-slate-700 mx-auto mb-4" />
                  <p className="text-slate-500 font-semibold text-sm">Anda belum menerbitkan modul kursus.</p>
                  <button
                    onClick={() => router.push('/dashboard/manage-modules?action=create')}
                    className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-xl text-xs transition-all shadow-md"
                  >
                    Terbitkan Modul Pertama
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {instructorModules.slice(0, 4).map((m: any) => {
                    const theme = getCourseTheme(m.title);
                    return (
                      <div 
                        key={m.id}
                        onClick={() => router.push(`/dashboard/modules/${m.id}`)}
                        className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900/30 rounded-3xl p-5 shadow-sm dark:shadow-none hover:shadow-md transition-all text-left flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer group"
                      >
                        <div className="flex items-center gap-4 overflow-hidden">
                          <div className={`bg-gradient-to-br ${theme.bg} w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shrink-0 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                            {theme.emoji}
                          </div>
                          <div className="overflow-hidden">
                            <span className="text-[8px] font-black tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded uppercase border border-indigo-100/50 dark:border-indigo-900/20">
                              {m.category || 'General'}
                            </span>
                            <p className="font-extrabold text-slate-800 dark:text-white text-sm line-clamp-1 leading-snug mt-1.5 group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">{m.title}</p>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5 flex items-center gap-1.5">
                              <Users className="w-3.5 h-3.5 text-slate-455" />
                              <span>{m._count?.enrollments || 0} siswa bergabung</span>
                            </p>
                          </div>
                        </div>

                        <div className="w-full sm:w-auto shrink-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800/80 pt-3 sm:pt-0 flex items-center justify-between gap-6">
                          <div className="text-left sm:text-right">
                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Progress Kelas</p>
                            <p className="text-sm font-black text-slate-700 dark:text-slate-300 mt-0.5">78%</p>
                          </div>
                          <button 
                            onClick={(e) => { e.stopPropagation(); router.push(`/dashboard/modules/${m.id}`); }}
                            className="px-4 py-2 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900 text-slate-700 dark:text-slate-300 hover:text-indigo-650 dark:hover:text-indigo-400 font-extrabold rounded-xl text-[10px] transition-all flex items-center gap-1"
                          >
                            <span>Kelola</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Right: Quick actions & AI Assistant Advice */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Recent Enrollments waiting or new */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-black text-slate-800 dark:text-white uppercase tracking-wider">Aktivitas Siswa Terbaru</h2>
                  {pendingEnrollments.length > 0 && (
                    <span className="text-[9px] font-black text-amber-605 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 px-2 py-0.5 rounded-full animate-pulse">
                      {pendingEnrollments.length} pending
                    </span>
                  )}
                </div>

                <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm dark:shadow-none space-y-4 transition-colors duration-300">
                  {recentStudents.length === 0 ? (
                    <div className="p-6 text-center text-slate-400 text-xs">
                      Belum ada pendaftaran siswa.
                    </div>
                  ) : (
                    recentStudents.map((stud: any, idx: number) => {
                      const initial = stud.name ? stud.name.substring(0, 2).toUpperCase() : 'ST';
                      return (
                        <div key={idx} className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800/40 pb-3.5 last:border-b-0 last:pb-0">
                          <div className="flex items-center gap-3 overflow-hidden">
                            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-350 font-black text-xs flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-900/20">
                              {initial}
                            </div>
                            <div className="overflow-hidden">
                              <p className="font-extrabold text-slate-800 dark:text-white text-xs truncate leading-snug">{stud.name}</p>
                              <p className="text-[9px] font-bold text-slate-450 dark:text-slate-500 truncate leading-none mt-0.5">Daftar: {stud.moduleTitle}</p>
                            </div>
                          </div>

                          <div>
                            {stud.status === 'PENDING' ? (
                              <button 
                                onClick={() => router.push('/dashboard?view=enrolled-students')}
                                className="px-2.5 py-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-700 font-black rounded-lg text-[9px] uppercase tracking-wider animate-pulse"
                              >
                                Tinjau
                              </button>
                            ) : (
                              <span className="text-[9px] font-bold text-slate-450 dark:text-slate-500">
                                {stud.progress}% progress
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })
                  )}
                  
                  <button 
                    onClick={() => router.push('/dashboard?view=enrolled-students')}
                    className="w-full py-2.5 bg-slate-50 dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 border border-slate-200 dark:border-slate-800 hover:border-indigo-200 text-slate-600 dark:text-slate-400 hover:text-indigo-600 font-extrabold rounded-2xl text-[10px] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Buka Manajemen Pendaftaran Siswa</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* AI Advisor Panel */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-[#0f111a] dark:to-[#16132b] border border-indigo-100 dark:border-indigo-950/40 rounded-3xl p-6 shadow-sm dark:shadow-none space-y-4 relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-300/10 to-purple-500/10 rounded-bl-full pointer-events-none" />
                
                <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400">
                  <Sparkles className="w-5 h-5 text-indigo-500 dark:text-indigo-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-wider">AI Teaching Assistant</span>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-extrabold text-slate-800 dark:text-white text-xs leading-snug">Rekomendasi Pintar untuk Anda:</h4>
                  <div className="text-slate-600 dark:text-slate-350 text-xs leading-relaxed font-medium space-y-2 bg-white/50 dark:bg-slate-950/40 p-3 rounded-2xl border border-white dark:border-slate-800/40">
                    <p>
                      Siswa di modul <strong className="text-indigo-650 dark:text-indigo-400 font-black">HTML Basics</strong> mengalami perlambatan belajar di Bab 4 (Syllabus: Form & Inputs). 
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                      ðŸ’¡ **Solusi**: Posting tautan penjelasan tambahan atau adakan sesi Q&A seputar Form Validasi di Forum Diskusi secepatnya.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[10px] text-slate-450 dark:text-slate-550 font-bold border-t border-indigo-200/50 dark:border-slate-800/40">
                  <span>DevGrow AI Advisor v1.2</span>
                  <span>Akurasi 94%</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      );
    }

    // Student Instructor: Enrolled Students (Manajemen Siswa)
    if (role === 'INSTRUCTOR' && activeGroup === 'students' && activeMenu === 'Manajemen Siswa') {
      // Calculate Stats
      const totalEnrolled = enrolledStudents.length;
      const approvedCount = enrolledStudents.filter(s => s.status === 'APPROVED').length;
      const pendingCount = enrolledStudents.filter(s => s.status === 'PENDING').length;
      const completedCount = enrolledStudents.filter(s => s.status === 'APPROVED' && s.progress >= 100).length;
      
      const totalProgress = enrolledStudents.filter(s => s.status === 'APPROVED').reduce((sum, s) => sum + (s.progress || 0), 0);
      const avgProgress = approvedCount > 0 ? Math.round(totalProgress / approvedCount) : 0;

      // Unique Modules Instructor Teaches (for drop down filter)
      const instructorModules = modules.filter(m => m.instructor?.id === user.id);

      // Filtering Logic
      const filteredStudents = enrolledStudents.filter(s => {
        const matchSearch = s.name?.toLowerCase().includes(studentSearch.toLowerCase()) || 
                            s.email?.toLowerCase().includes(studentSearch.toLowerCase());
        
        const matchCourse = selectedCourseFilter === 'All' || s.moduleId === selectedCourseFilter;
        
        let matchStatus = true;
        if (selectedStatusFilter === 'PENDING') matchStatus = s.status === 'PENDING';
        else if (selectedStatusFilter === 'REJECTED') matchStatus = s.status === 'REJECTED';
        else if (selectedStatusFilter === 'APPROVED') matchStatus = s.status === 'APPROVED';
        else if (selectedStatusFilter === 'COMPLETED') matchStatus = s.status === 'APPROVED' && s.progress >= 100;
        else if (selectedStatusFilter === 'IN_PROGRESS') matchStatus = s.status === 'APPROVED' && s.progress < 100;

        return matchSearch && matchCourse && matchStatus;
      });

      return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-fadeIn text-slate-800 dark:text-slate-100 transition-colors duration-300">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">Manajemen Siswa</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Pantau progres belajar, berikan persetujuan modul, dan kelola semua siswa Anda di satu dasbor.</p>
            </div>
            {pendingCount > 0 && (
              <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-xl text-amber-700 dark:text-amber-400 font-bold text-xs shrink-0 animate-pulse">
                <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>{pendingCount} Permintaan Akses Menunggu</span>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Pendaftaran', value: totalEnrolled, desc: 'Siswa bergabung', icon: Users, color: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/30 shadow-indigo-600/5' },
              { label: 'Menunggu Persetujuan', value: pendingCount, desc: 'Menunggu respon', icon: Clock, color: pendingCount > 0 ? 'bg-amber-50 dark:bg-amber-955/20 text-amber-600 dark:text-amber-405 border-amber-200 dark:border-amber-900/30 animate-pulse' : 'bg-slate-50 dark:bg-slate-900/40 text-slate-400 dark:text-slate-500 border-slate-100 dark:border-slate-850' },
              { label: 'Lulus Modul', value: completedCount, desc: 'Progress 100%', icon: Award, color: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30 shadow-emerald-600/5' },
              { label: 'Rata-Rata Progress', value: `${avgProgress}%`, desc: 'Siswa yang disetujui', icon: TrendingUp, color: 'bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/30 shadow-purple-600/5' }
            ].map((stat, i) => (
              <div key={i} className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-md transition-all flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${stat.color.split(' ')[0]} ${stat.color.split(' ')[1]} ${stat.color.split(' ')[2]}`}>
                  <stat.icon className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-black text-slate-800 dark:text-slate-100 leading-none mt-1.5">{stat.value}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold mt-1 flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" /> {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls: Search, Course Filter, Status Filter */}
          <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Cari nama siswa atau email..."
                value={studentSearch}
                onChange={(e) => setStudentSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-850 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="flex-1 sm:flex-initial">
                <select
                  value={selectedCourseFilter}
                  onChange={(e) => setSelectedCourseFilter(e.target.value)}
                  className="w-full sm:w-48 px-4 py-3 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                >
                  <option value="All" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Semua Modul</option>
                  {instructorModules.map(m => (
                    <option key={m.id} value={m.id} className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">{m.title}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1 sm:flex-initial">
                <select
                  value={selectedStatusFilter}
                  onChange={(e) => setSelectedStatusFilter(e.target.value)}
                  className="w-full sm:w-48 px-4 py-3 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                >
                  <option value="All" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Semua Progres</option>
                  <option value="PENDING" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Menunggu Persetujuan</option>
                  <option value="APPROVED" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Telah Disetujui</option>
                  <option value="IN_PROGRESS" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Sedang Belajar (&lt;100%)</option>
                  <option value="COMPLETED" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Telah Lulus (100%)</option>
                  <option value="REJECTED" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Ditolak</option>
                </select>
              </div>
            </div>
          </div>

          {/* Student Grid / Table */}
          {filteredStudents.length === 0 ? (
            <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-16 text-center shadow-sm">
              <Users className="w-16 h-16 text-slate-200 dark:text-slate-650 mx-auto mb-4" />
              <p className="text-slate-500 dark:text-slate-400 font-bold text-lg">Tidak ada siswa yang cocok dengan filter atau kata kunci Anda.</p>
              <button 
                onClick={() => { setStudentSearch(''); setSelectedCourseFilter('All'); setSelectedStatusFilter('All'); }}
                className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-600/10"
              >
                Reset Filter
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs font-black text-slate-400 uppercase tracking-widest">
                      <th className="px-6 py-4">Siswa</th>
                      <th className="px-6 py-4">Modul / Kursus</th>
                      <th className="px-6 py-4">Progres Pembelajaran</th>
                      <th className="px-6 py-4">Status Akses</th>
                      <th className="px-6 py-4">Tanggal Daftar</th>
                      <th className="px-6 py-4 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-850 font-medium text-slate-700 dark:text-slate-300 text-sm">
                    {filteredStudents.map((s: any, idx) => {
                      const theme = getCourseTheme(s.moduleTitle);
                      const isCompleted = s.progress >= 100;
                      const dateStr = s.enrolledAt ? new Date(s.enrolledAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-';

                      return (
                        <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                          {/* Student profile */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-indigo-105 dark:bg-indigo-950/40 font-black text-indigo-700 dark:text-indigo-300 text-sm uppercase flex items-center justify-center shrink-0 shadow-sm border border-indigo-200/50 dark:border-indigo-900/30">
                                {s.name ? s.name.substring(0, 2) : 'ST'}
                              </div>
                              <div className="min-w-0">
                                <p className="font-extrabold text-slate-800 dark:text-slate-205 truncate leading-snug">{s.name}</p>
                                <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold truncate mt-0.5">{s.email}</p>
                              </div>
                            </div>
                          </td>

                          {/* Module */}
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2 max-w-[200px] truncate">
                              <span className="text-base shrink-0">{theme.emoji}</span>
                              <div className="min-w-0">
                                <p className="font-extrabold text-slate-800 dark:text-slate-205 text-xs truncate leading-snug">{s.moduleTitle}</p>
                                <p className="text-[9px] font-black uppercase text-indigo-500 dark:text-indigo-400 tracking-wider mt-0.5">{s.moduleCategory}</p>
                              </div>
                            </div>
                          </td>

                          {/* Progress */}
                          <td className="px-6 py-4">
                            {s.status === 'APPROVED' ? (
                              <div className="w-full max-w-[150px]">
                                <div className="flex justify-between items-center text-[10px] font-bold mb-1.5">
                                  <span className={isCompleted ? 'text-emerald-600 dark:text-emerald-400 font-black' : 'text-slate-400 dark:text-slate-500'}>
                                    {isCompleted ? 'Lulus' : 'Belajar'}
                                  </span>
                                  <span className={isCompleted ? 'text-emerald-600 dark:text-emerald-400 font-black' : 'text-indigo-600 dark:text-indigo-400 font-black'}>
                                    {s.progress}%
                                  </span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden shadow-inner">
                                  <div 
                                    className={`h-full rounded-full transition-all duration-500 ${
                                      isCompleted ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                                    }`}
                                    style={{ width: `${s.progress}%` }} 
                                  />
                                </div>
                              </div>
                            ) : (
                              <span className="text-xs text-slate-400 dark:text-slate-550 italic">Akses Belum Disetujui</span>
                            )}
                          </td>

                          {/* Status Badge */}
                          <td className="px-6 py-4">
                            {s.status === 'PENDING' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-50 dark:bg-amber-955/20 text-amber-705 dark:text-amber-400 border border-amber-200 dark:border-amber-900/30 text-[10px] font-black rounded-lg uppercase tracking-wider animate-pulse">
                                <Clock className="w-3 h-3 text-amber-505" /> Pending
                              </span>
                            )}
                            {s.status === 'APPROVED' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-955/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30 text-[10px] font-black rounded-lg uppercase tracking-wider">
                                <Check className="w-3 h-3 text-emerald-500" /> Aktif
                              </span>
                            )}
                            {s.status === 'REJECTED' && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 dark:bg-rose-955/20 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-900/30 text-[10px] font-black rounded-lg uppercase tracking-wider">
                                <X className="w-3 h-3 text-rose-500" /> Ditolak
                              </span>
                            )}
                          </td>

                          {/* Joined date */}
                          <td className="px-6 py-4 text-xs font-semibold text-slate-400 dark:text-slate-500">
                            {dateStr}
                          </td>

                          {/* Actions */}
                          <td className="px-6 py-4 text-center">
                            <button
                              onClick={() => { setSelectedStudentDetail(s); setIsStudentModalOpen(true); }}
                              className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:hover:bg-indigo-900/40 border border-indigo-100 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-extrabold transition-all shadow-sm flex items-center gap-1.5 mx-auto"
                            >
                              Detail & Kontrol
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Detailed Control Drawer / Modal */}
          {isStudentModalOpen && selectedStudentDetail && (
            <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
              <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
                
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-850 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/40">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-black text-base uppercase flex items-center justify-center border border-indigo-200/50 dark:border-indigo-900/30 shadow-sm shrink-0">
                      {selectedStudentDetail.name ? selectedStudentDetail.name.substring(0, 2) : 'ST'}
                    </div>
                    <div>
                      <h2 className="text-lg font-black text-slate-800 dark:text-white leading-snug">{selectedStudentDetail.name}</h2>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-0.5">{selectedStudentDetail.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsStudentModalOpen(false)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-6">
                  
                  {/* Course Details Card */}
                  <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{getCourseTheme(selectedStudentDetail.moduleTitle).emoji}</span>
                        <div>
                          <p className="font-extrabold text-slate-800 dark:text-slate-200 text-sm leading-snug">{selectedStudentDetail.moduleTitle}</p>
                          <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">{selectedStudentDetail.moduleCategory}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-md">
                        Module
                      </span>
                    </div>

                    <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />

                    {selectedStudentDetail.status === 'APPROVED' ? (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400">
                          <span>Progres Belajar</span>
                          <span className="text-indigo-600 dark:text-indigo-400 font-black">{selectedStudentDetail.progress}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-slate-250 dark:bg-slate-950 rounded-full overflow-hidden shadow-inner">
                          <div 
                            className={`h-full rounded-full transition-all duration-700 ${
                              selectedStudentDetail.progress >= 100 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-500' 
                                : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                            }`}
                            style={{ width: `${selectedStudentDetail.progress}%` }} 
                          />
                        </div>
                        {selectedStudentDetail.progress >= 100 ? (
                          <div className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-black bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/30 rounded-xl p-2.5 mt-2">
                            <Award className="w-4 h-4 text-emerald-500 animate-bounce" />
                            <span>Siswa Telah Menyelesaikan Seluruh Modul! (LULUS)</span>
                          </div>
                        ) : (
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold italic">Siswa sedang aktif mempelajari materi pelajaran.</p>
                        )}
                      </div>
                    ) : selectedStudentDetail.status === 'PENDING' ? (
                      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/30 rounded-xl p-3.5 flex items-start gap-2.5 text-amber-800 dark:text-amber-400">
                        <Clock className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0 mt-0.5 animate-pulse" />
                        <div>
                          <p className="text-xs font-bold">Menunggu Persetujuan</p>
                          <p className="text-[10px] text-amber-600 dark:text-amber-500 font-medium leading-relaxed mt-0.5">Siswa ini meminta akses belajar untuk modul ini. Setujui untuk mengizinkan siswa mengakses materi, tugas, dan ujian live editor.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 rounded-xl p-3.5 flex items-start gap-2.5 text-rose-800 dark:text-rose-400">
                        <X className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold">Akses Ditolak</p>
                          <p className="text-[10px] text-rose-600 dark:text-rose-500 font-medium leading-relaxed mt-0.5">Akses pendaftaran siswa ini telah ditolak oleh Anda.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Student Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-center">
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Tanggal Daftar</p>
                      <p className="font-extrabold text-slate-700 dark:text-slate-300 text-xs">
                        {selectedStudentDetail.createdAt ? new Date(selectedStudentDetail.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'}
                      </p>
                    </div>
                    <div className="p-4 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-center">
                      <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Tanggal Request</p>
                      <p className="font-extrabold text-slate-700 dark:text-slate-300 text-xs">
                        {selectedStudentDetail.enrolledAt ? new Date(selectedStudentDetail.enrolledAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' }) : '-'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer / Action controls */}
                <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-850 flex items-center justify-end gap-3 bg-slate-50/50 dark:bg-slate-950/40">
                  <button 
                    onClick={() => setIsStudentModalOpen(false)}
                    className="px-5 py-2.5 text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
                  >
                    Tutup
                  </button>

                  {selectedStudentDetail.status === 'PENDING' && (
                    <>
                      <button 
                        onClick={() => handleRejectStudent(selectedStudentDetail.enrollmentId)}
                        className="px-4 py-2.5 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/40 text-xs font-extrabold rounded-xl transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        Tolak Akses
                      </button>
                      <button 
                        onClick={() => handleApproveStudent(selectedStudentDetail.enrollmentId)}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md shadow-indigo-500/20 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]"
                      >
                        Setujui Akses
                      </button>
                    </>
                  )}

                  {selectedStudentDetail.status === 'APPROVED' && (
                    <button 
                      onClick={() => {
                        if (confirm(`Apakah Anda yakin ingin mencabut akses belajar siswa ${selectedStudentDetail.name} dari modul ${selectedStudentDetail.moduleTitle}?`)) {
                          handleRejectStudent(selectedStudentDetail.enrollmentId, 'Akses dicabut oleh instruktur.');
                        }
                      }}
                      className="px-4 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md shadow-rose-600/10 flex items-center gap-1.5"
                    >
                      Cabut Akses Siswa
                    </button>
                  )}

                  {selectedStudentDetail.status === 'REJECTED' && (
                    <button 
                      onClick={() => handleApproveStudent(selectedStudentDetail.enrollmentId)}
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-md shadow-indigo-500/20 flex items-center gap-1.5"
                    >
                      Ubah Jadi Setujui
                    </button>
                  )}
                </div>

              </div>
            </div>
          )}

        </div>
      );
    }

    // Student Instructor: Progress Siswa (Progress Tracking Analytics)
    if (role === 'INSTRUCTOR' && activeGroup === 'students' && activeMenu === 'Progress Siswa') {
      // Unique Modules Instructor Teaches
      const instructorModules = modules.filter(m => m.instructor?.id === user.id || m.instructorId === user.id);

      // Calculations based on all enrolled students
      const totalEnrolled = enrolledStudents.length;
      const approvedStudents = enrolledStudents.filter(s => s.status === 'APPROVED');
      const approvedCount = approvedStudents.length;
      const completedCount = approvedStudents.filter(s => s.progress >= 100).length;
      
      const totalProgress = approvedStudents.reduce((sum, s) => sum + (s.progress || 0), 0);
      const avgProgress = approvedCount > 0 ? Math.round(totalProgress / approvedCount) : 0;
      const graduationRate = approvedCount > 0 ? Math.round((completedCount / approvedCount) * 100) : 0;
      const activelyLearning = approvedStudents.filter(s => s.progress > 0 && s.progress < 100).length;

      // Sort students for Leaderboard (highest progress first)
      const topStudents = [...approvedStudents]
        .sort((a, b) => b.progress - a.progress)
        .slice(0, 5);

      // Timeline activity helper based on actual students
      const simulatedActivities = approvedStudents.slice(0, 4).map((s, index) => {
        const activities = [
          { type: 'progress', text: `${s.name} meningkatkan progress belajar di modul ${s.moduleTitle} menjadi ${s.progress}%`, time: '10 menit yang lalu' },
          { type: 'quiz', text: `${s.name} menyelesaikan kuis singkat pada modul ${s.moduleTitle} dengan sukses`, time: '30 menit yang lalu' },
          { type: 'lesson', text: `${s.name} baru saja membuka topik pelajaran baru di ${s.moduleTitle}`, time: '1 jam yang lalu' },
          { type: 'completed', text: `Selamat! ${s.name} telah menyelesaikan seluruh modul ${s.moduleTitle} dengan progress 100%`, time: '2 jam yang lalu' }
        ];
        return activities[index % activities.length];
      });

      const getProgressCheckpoints = (courseTitle: string) => {
        return [
          { step: 1, name: 'Konsep Dasar & Pengenalan Teori', desc: 'Memahami dasar materi, istilah industri, dan setup awal.' },
          { step: 2, name: 'Instalasi & Konfigurasi Lingkungan', desc: 'Mempersiapkan tools, text editor, dan runtime yang diperlukan.' },
          { step: 3, name: 'Praktik Terbimbing & Contoh Kasus', desc: 'Melakukan latihan hands-on bersama materi pembelajaran.' },
          { step: 4, name: 'Tugas Mandiri & Pemecahan Masalah', desc: 'Menguji pemahaman dengan tantangan pemrograman nyata.' },
          { step: 5, name: 'Ujian Kompetensi Akhir Modul', desc: 'Asesmen komprehensif untuk validasi pemahaman keseluruhan.' }
        ];
      };

      const getRankBadge = (p: number) => {
        if (p === 0) return { label: 'Baru Mendaftar', bg: 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-800' };
        if (p < 40) return { label: 'Pionir Belajar ðŸš€', bg: 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-900/30' };
        if (p < 80) return { label: 'Pembelajar Konsisten ðŸ“ˆ', bg: 'bg-amber-50 dark:bg-amber-955/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/30' };
        if (p < 100) return { label: 'Calon Profesional ðŸŽ“', bg: 'bg-purple-50 dark:bg-purple-950/20 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-900/30' };
        return { label: 'Wisudawan Ahli ðŸ†', bg: 'bg-emerald-500 text-white border-emerald-600 shadow-md shadow-emerald-500/20' };
      };

      // Filter Approved Students Matrix
      const filteredApproved = approvedStudents.filter(s => {
        const matchSearch = s.name?.toLowerCase().includes(studentSearch.toLowerCase()) || 
                            s.email?.toLowerCase().includes(studentSearch.toLowerCase());
        
        const matchCourse = selectedCourseFilter === 'All' || s.moduleId === selectedCourseFilter;
        
        let matchProgress = true;
        if (progressFilterVal === 'ZERO') matchProgress = s.progress === 0;
        else if (progressFilterVal === 'IN_PROGRESS') matchProgress = s.progress > 0 && s.progress < 100;
        else if (progressFilterVal === 'COMPLETED') matchProgress = s.progress >= 100;

        return matchSearch && matchCourse && matchProgress;
      });

      return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-8 animate-fadeIn text-slate-800 dark:text-slate-100 transition-colors duration-300">
          {/* Header & Sub Tabs Switcher */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-800 dark:text-white tracking-tight">Progress Siswa</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Tinjau metrik kelulusan, analisis pencapaian kelas, dan kelola progress belajar siswa Anda.</p>
            </div>
            
            {/* Tab selector */}
            <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0">
              <button 
                onClick={() => setProgressSubTab('overview')}
                className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${
                  progressSubTab === 'overview' 
                    ? 'bg-white dark:bg-[#0c0e18] text-indigo-600 dark:text-indigo-400 shadow-sm' 
                    : 'text-slate-500 dark:text-slate-450 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                Ringkasan & Analisis Kelas
              </button>
              <button 
                onClick={() => setProgressSubTab('students')}
                className={`px-4 py-2 text-xs font-black rounded-lg transition-all ${
                  progressSubTab === 'students' 
                    ? 'bg-white dark:bg-[#0c0e18] text-indigo-600 dark:text-indigo-400 shadow-sm' 
                    : 'text-slate-500 dark:text-slate-450 hover:text-slate-800 dark:hover:text-slate-200'
                }`}
              >
                Daftar & Analisis Siswa
              </button>
            </div>
          </div>

          {/* VIEW: OVERVIEW SUMMARY STATS & CHARTS TAB */}
          {progressSubTab === 'overview' && (
            <div className="space-y-8">
              {/* Analytics Metric Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Rata-rata Progress', value: `${avgProgress}%`, icon: BarChart2, color: 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 border-indigo-100 dark:border-indigo-900/30' },
                  { label: 'Rasio Kelulusan', value: `${graduationRate}%`, icon: Award, color: 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/30' },
                  { label: 'Siswa Belajar Aktif', value: activelyLearning, icon: PlayCircle, color: 'bg-purple-50 dark:bg-purple-950/20 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/30' },
                  { label: 'Total Lulus Modul', value: completedCount, icon: CheckCircle, color: 'bg-sky-50 dark:bg-sky-950/20 text-sky-600 dark:text-sky-400 border-sky-100 dark:border-sky-900/30' }
                ].map((stat, i) => (
                  <div key={i} className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider">{stat.label}</p>
                      <p className="text-2xl font-black text-slate-800 dark:text-slate-100 leading-none mt-1.5">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Course progress averages breakdown */}
                <div className="lg:col-span-8 space-y-6">
                <h3 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2 tracking-tight">
                  <BookOpen className="w-5 h-5 text-indigo-600 animate-pulse" />
                  <span>Progres per Modul Pembelajaran</span>
                </h3>

                {instructorModules.length === 0 ? (
                  <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-16 text-center shadow-sm">
                    <BookOpen className="w-12 h-12 text-slate-200 dark:text-slate-650 mx-auto mb-4" />
                    <p className="text-slate-500 dark:text-slate-400 font-bold text-lg">Belum ada modul aktif yang Anda ajar.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {instructorModules.map((m: any) => {
                      const theme = getCourseTheme(m.title);
                      const courseEnrollments = approvedStudents.filter(s => s.moduleId === m.id);
                      const courseCompleted = courseEnrollments.filter(s => s.progress >= 100).length;
                      const courseProgresses = courseEnrollments.reduce((sum, s) => sum + (s.progress || 0), 0);
                      const courseAvg = courseEnrollments.length > 0 ? Math.round(courseProgresses / courseEnrollments.length) : 0;

                      return (
                        <div key={m.id} className="bg-white dark:bg-[#0c0e18] border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm dark:shadow-none flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
                          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-bl-full pointer-events-none" />
                          
                          <div>
                            {/* Card Header */}
                            <div className="flex items-center gap-3 mb-5">
                              <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${theme.bg} flex items-center justify-center text-xl shrink-0 shadow-sm relative overflow-hidden`}>
                                <span className="relative z-10">{theme.emoji}</span>
                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-black text-slate-800 dark:text-white text-sm truncate leading-snug group-hover:text-indigo-650 dark:group-hover:text-indigo-400 transition-colors">{m.title}</h4>
                                <p className="text-[9px] font-black uppercase text-slate-400 dark:text-slate-500 tracking-widest mt-0.5">{m.category}</p>
                              </div>
                            </div>

                            {/* Class Average Progress Slider bar */}
                            <div className="space-y-3.5 mb-6">
                              <div>
                                <div className="flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5">
                                  <span>Rata-Rata Kelas</span>
                                  <span className="text-indigo-605 dark:text-indigo-405 font-black">{courseAvg}%</span>
                                </div>
                                <div className="w-full h-2.5 bg-slate-150 dark:bg-slate-900 rounded-full overflow-hidden shadow-inner relative">
                                  <div 
                                    className={`h-full rounded-full transition-all duration-700 bg-gradient-to-r ${theme.bg}`}
                                    style={{ width: `${courseAvg}%` }} 
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Quick details & Click-through link */}
                          <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 flex items-center justify-between">
                            <div className="flex gap-4 text-xs font-bold text-slate-500">
                              <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5 text-slate-400" /> {courseEnrollments.length} Siswa</span>
                              <span className="text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 px-2.5 py-0.5 rounded-lg border border-emerald-100/50 dark:border-emerald-900/30 flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> {courseCompleted} Lulus
                              </span>
                            </div>
                            <button
                              onClick={() => { setSelectedCourseFilter(m.id); setProgressSubTab('students'); }}
                              className="text-xs font-extrabold text-indigo-600 hover:text-indigo-850 dark:text-indigo-400 dark:hover:text-indigo-305 flex items-center gap-0.5 hover:translate-x-0.5 transition-transform"
                            >
                              Detail <ChevronRight className="w-4.5 h-4.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Leaderboards & Activity Feed */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Leaderboard Box */}
                <div className="bg-white dark:bg-[#0c0e18] border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm dark:shadow-none space-y-5">
                  <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500 animate-bounce" />
                    <span>Siswa Terbaik Minggu Ini</span>
                  </h3>

                  {topStudents.length === 0 ? (
                    <p className="text-xs text-slate-400 dark:text-slate-550 font-semibold italic text-center py-6">Belum ada data progres aktif siswa.</p>
                  ) : (
                    <div className="space-y-4">
                      {topStudents.map((s: any, i: number) => (
                        <div key={i} className="flex items-center justify-between gap-3 p-2 hover:bg-slate-50 dark:hover:bg-slate-900/40 rounded-2xl transition-colors group">
                          <div className="flex items-center gap-3 min-w-0">
                            <span className="w-6 text-center text-base shrink-0 select-none">
                              {i === 0 ? 'ðŸ‘‘' : i === 1 ? 'ðŸ¥ˆ' : i === 2 ? 'ðŸ¥‰' : `${i + 1}`}
                            </span>
                            <div className="min-w-0">
                              <p className="font-extrabold text-slate-800 dark:text-white text-xs truncate leading-snug">{s.name}</p>
                              <p className="text-[9px] font-bold text-slate-400 dark:text-slate-500 truncate mt-0.5">{s.moduleTitle}</p>
                            </div>
                          </div>
                          <button 
                            onClick={() => { setSelectedProgressStudent(s); setProgressSliderVal(s.progress); setIsProgressModalOpen(true); }}
                            className="text-xs font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 hover:scale-[1.03] transition-all px-3 py-1.5 rounded-xl border border-indigo-100 dark:border-indigo-900/30 flex items-center gap-1 shrink-0"
                          >
                            <span>{s.progress}%</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Timeline Feed */}
                <div className="bg-white dark:bg-[#0c0e18] border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 shadow-sm dark:shadow-none space-y-5">
                  <h3 className="text-sm font-black text-slate-800 dark:text-white uppercase tracking-widest flex items-center gap-2">
                    <Activity className="w-4 h-4 text-purple-500 animate-pulse" />
                    <span>Aktivitas Belajar Terkini</span>
                  </h3>

                  {simulatedActivities.length === 0 ? (
                    <p className="text-xs text-slate-400 dark:text-slate-550 font-semibold italic text-center py-6">Belum ada aktivitas belajar baru.</p>
                  ) : (
                    <div className="space-y-4.5 relative">
                      <div className="absolute left-[9px] top-2.5 bottom-2.5 w-0.5 bg-slate-100 dark:bg-slate-850 z-0 pointer-events-none" />
                      
                      {simulatedActivities.map((act: any, i: number) => (
                        <div key={i} className="flex items-start gap-3 relative z-10">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 shadow-sm border-2 ${
                            act.type === 'completed' 
                              ? 'bg-emerald-500 border-emerald-200 text-white' 
                              : act.type === 'quiz'
                                ? 'bg-amber-400 border-amber-200 text-white'
                                : 'bg-indigo-500 border-indigo-200 text-white'
                          } text-[8px] font-black`}>
                            {act.type === 'completed' ? 'âœ“' : 'â€¢'}
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-700 dark:text-slate-300 leading-relaxed break-words">{act.text}</p>
                            <p className="text-[9px] text-slate-400 dark:text-slate-500 font-semibold mt-1">{act.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

            </div>
          </div>
        )}            {/* VIEW: STUDENTS TABLE MATRIX TAB */}
          {progressSubTab === 'students' && (
            <div className="space-y-6">
              
              {/* Table Controls (Search, Filters) */}
              <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-md">
                  <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
                  <input
                    type="text"
                    placeholder="Cari nama siswa atau email..."
                    value={studentSearch}
                    onChange={(e) => setStudentSearch(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-850 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-505 focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  {/* Filter by Module */}
                  <div className="flex-1 sm:flex-initial">
                    <select
                      value={selectedCourseFilter}
                      onChange={(e) => setSelectedCourseFilter(e.target.value)}
                      className="w-full sm:w-48 px-4 py-3 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                    >
                      <option value="All" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Semua Modul</option>
                      {instructorModules.map(m => (
                        <option key={m.id} value={m.id} className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">{m.title}</option>
                      ))}
                    </select>
                  </div>

                  {/* Filter by Progress Level */}
                  <div className="flex-1 sm:flex-initial">
                    <select
                      value={progressFilterVal}
                      onChange={(e) => setProgressFilterVal(e.target.value)}
                      className="w-full sm:w-48 px-4 py-3 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
                    >
                      <option value="All" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Semua Progres</option>
                      <option value="ZERO" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Belum Mulai (0%)</option>
                      <option value="IN_PROGRESS" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Sedang Belajar (1-99%)</option>
                      <option value="COMPLETED" className="bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-slate-200">Telah Lulus (100%)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Student Matrix Display */}
              {filteredApproved.length === 0 ? (
                <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-16 text-center shadow-sm">
                  <Users className="w-16 h-16 text-slate-200 dark:text-slate-650 mx-auto mb-4" />
                  <p className="text-slate-500 dark:text-slate-400 font-bold text-lg">Tidak ada siswa yang cocok dengan filter atau kata kunci Anda.</p>
                  <button 
                    onClick={() => { setStudentSearch(''); setSelectedCourseFilter('All'); setProgressFilterVal('All'); }}
                    className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-600/10"
                  >
                    Reset Filter
                  </button>
                </div>
              ) : (
                <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                          <th className="px-6 py-5">Siswa</th>
                          <th className="px-6 py-5">Modul / Kursus</th>
                          <th className="px-6 py-5">Progres Belajar</th>
                          <th className="px-6 py-5">Status Capaian</th>
                          <th className="px-6 py-5">Tanggal Mulai</th>
                          <th className="px-6 py-5 text-center">Aksi</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-850 font-medium text-slate-700 dark:text-slate-300 text-sm">
                        {filteredApproved.map((s: any, idx) => {
                          const theme = getCourseTheme(s.moduleTitle);
                          const isCompleted = s.progress >= 100;
                          const dateStr = s.enrolledAt ? new Date(s.enrolledAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-';
                          const level = getRankBadge(s.progress);

                          return (
                            <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/20 transition-colors">
                              {/* Profile info */}
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 font-black text-indigo-700 dark:text-indigo-350 text-sm uppercase flex items-center justify-center shrink-0 border border-indigo-150 dark:border-indigo-900/30">
                                    {s.name ? s.name.substring(0, 2) : 'ST'}
                                  </div>
                                  <div className="min-w-0">
                                    <p className="font-extrabold text-slate-800 dark:text-white truncate leading-snug">{s.name}</p>
                                    <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold truncate mt-0.5">{s.email}</p>
                                  </div>
                                </div>
                              </td>

                              {/* Course Title Badge */}
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-2 max-w-[220px]">
                                  <span className="text-base shrink-0">{theme.emoji}</span>
                                  <div className="min-w-0">
                                    <p className="font-extrabold text-slate-800 dark:text-slate-200 text-xs truncate leading-snug">{s.moduleTitle}</p>
                                    <p className="text-[9px] font-black uppercase text-indigo-500 dark:text-indigo-400 tracking-wider mt-0.5">{s.moduleCategory}</p>
                                  </div>
                                </div>
                              </td>

                              {/* Visual Progress bar slider style */}
                              <td className="px-6 py-4">
                                <div className="w-full max-w-[160px]">
                                  <div className="flex justify-between items-center text-[10px] font-bold mb-1.5">
                                    <span className={isCompleted ? 'text-emerald-600 dark:text-emerald-400 font-black' : 'text-slate-400 dark:text-slate-500'}>
                                      {isCompleted ? 'Lulus' : 'Belajar'}
                                    </span>
                                    <span className={isCompleted ? 'text-emerald-600 dark:text-emerald-400 font-black' : 'text-indigo-600 dark:text-indigo-400 font-black'}>
                                      {s.progress}%
                                    </span>
                                  </div>
                                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden shadow-inner">
                                    <div 
                                      className={`h-full rounded-full transition-all duration-500 ${
                                        isCompleted ? 'bg-gradient-to-r from-emerald-500 to-teal-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                                      }`}
                                      style={{ width: `${s.progress}%` }} 
                                    />
                                  </div>
                                </div>
                              </td>

                              {/* Student Rank Badge */}
                              <td className="px-6 py-4">
                                <span className={`inline-flex items-center px-2.5 py-1 text-[10px] font-black rounded-lg border uppercase tracking-wider ${
                                  isCompleted ? 'bg-emerald-500 text-white border-emerald-600 dark:border-emerald-700' : level.bg
                                }`}>
                                  {isCompleted ? 'Wisudawan Ahli ðŸŽ“' : level.label}
                                </span>
                              </td>

                              {/* Starting Date */}
                              <td className="px-6 py-4 text-xs font-semibold text-slate-400 dark:text-slate-500">
                                {dateStr}
                              </td>

                              {/* Control modal toggle */}
                              <td className="px-6 py-4 text-center">
                                <button
                                  onClick={() => { 
                                    setSelectedProgressStudent(s); 
                                    setProgressSliderVal(s.progress); 
                                    setIsProgressModalOpen(true); 
                                  }}
                                  className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:hover:bg-indigo-900/40 border border-indigo-150 dark:border-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl text-xs font-black transition-all shadow-sm flex items-center gap-1.5 mx-auto"
                                >
                                  Detail & Analisis
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

            </div>
          )}            {/* HIGH-FIDELITY STUDENT DETAIL & MUTATION MODAL */}
          {isProgressModalOpen && selectedProgressStudent && (
            <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-955/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
              <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn flex flex-col max-h-[90vh]">
                
                {/* Modal Header */}
                <div className="p-6 border-b border-slate-150 dark:border-slate-850 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/40 shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 font-black text-lg uppercase flex items-center justify-center border border-indigo-200/50 dark:border-indigo-900/30 shadow-sm">
                      {selectedProgressStudent.name ? selectedProgressStudent.name.substring(0, 2) : 'ST'}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="text-lg font-black text-slate-800 dark:text-white leading-snug">{selectedProgressStudent.name}</h2>
                        <span className={`text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${
                          selectedProgressStudent.progress >= 100 
                            ? 'bg-emerald-500 text-white border-emerald-600' 
                            : getRankBadge(selectedProgressStudent.progress).bg
                        }`}>
                          {getRankBadge(selectedProgressStudent.progress).label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-0.5">{selectedProgressStudent.email}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsProgressModalOpen(false)}
                    className="text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-850 p-2 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white dark:bg-[#0f111a]">
                  
                  {/* Course Details Header */}
                  <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="text-3xl select-none">{getCourseTheme(selectedProgressStudent.moduleTitle).emoji}</span>
                        <div>
                          <p className="font-extrabold text-slate-800 dark:text-slate-200 text-sm leading-snug">{selectedProgressStudent.moduleTitle}</p>
                          <p className="text-[9px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest">{selectedProgressStudent.moduleCategory}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-black tracking-widest uppercase bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/30 text-indigo-650 dark:text-indigo-400 px-2 py-1 rounded-lg">
                        Modul Aksif
                      </span>
                    </div>

                    <div className="h-px bg-slate-200 dark:bg-slate-800 w-full" />

                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-500 dark:text-slate-400">
                        <span>Pencapaian Progres</span>
                        <span className="text-indigo-600 dark:text-indigo-400 font-black">{selectedProgressStudent.progress}%</span>
                      </div>
                      <div className="w-full h-3 bg-slate-200 dark:bg-slate-950 rounded-full overflow-hidden shadow-inner relative">
                        <div 
                          className={`h-full rounded-full transition-all duration-700 ${
                            selectedProgressStudent.progress >= 100 
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-md shadow-emerald-500/20' 
                              : 'bg-gradient-to-r from-indigo-500 to-purple-500'
                          }`}
                          style={{ width: `${selectedProgressStudent.progress}%` }} 
                        />
                      </div>
                      
                      {selectedProgressStudent.progress >= 100 ? (
                        <div className="flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-black bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 rounded-xl p-3 mt-3 animate-pulse">
                          <Award className="w-5 h-5 text-emerald-500 shrink-0" />
                          <span>Siswa ini telah lulus kelas 100%! Sertifikat digital terverifikasi telah diterbitkan.</span>
                        </div>
                      ) : (
                        <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold italic mt-1 flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-indigo-400 dark:text-indigo-300 animate-spin-slow" /> Siswa sedang aktif mempelajari modul pembelajaran saat ini.</p>
                      )}
                    </div>
                  </div>

                  {/* Interactive Dynamic Checklist Tracker: Timeline Pathway */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                      <span>Pathway Kurikulum Siswa</span>
                    </h3>

                    <div className="space-y-4 relative pl-3.5">
                      <div className="absolute left-[23px] top-4 bottom-4 w-0.5 bg-slate-150 dark:bg-slate-800 z-0 pointer-events-none" />
                      
                      {getProgressCheckpoints(selectedProgressStudent.moduleTitle).map((cp, cidx) => {
                        const isCompleted = selectedProgressStudent.progress >= (cidx + 1) * 20;
                        const isActive = !isCompleted && selectedProgressStudent.progress >= cidx * 20;
                        
                        return (
                          <div key={cp.step} className="flex items-start gap-4 relative z-10">
                            {/* Checkpoint Status Indicator Icon */}
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border-2 text-xs font-black shadow-sm ${
                              isCompleted 
                                ? 'bg-emerald-500 border-emerald-200 text-white' 
                                : isActive 
                                  ? 'bg-amber-500 border-amber-200 text-white animate-pulse'
                                  : 'bg-white dark:bg-[#0c0e18] border-slate-200 dark:border-slate-800 text-slate-300 dark:text-slate-600'
                            }`}>
                              {isCompleted ? 'âœ“' : cp.step}
                            </div>
                            
                            <div className="min-w-0">
                              <p className={`text-xs font-extrabold leading-snug flex items-center gap-2 ${
                                isCompleted ? 'text-slate-800 dark:text-slate-200' : isActive ? 'text-amber-605 dark:text-amber-400 font-black' : 'text-slate-400 dark:text-slate-500'
                              }`}>
                                <span>{cp.name}</span>
                                {isActive && (
                                  <span className="text-[8px] font-black tracking-widest uppercase bg-amber-100 dark:bg-amber-955/20 text-amber-700 dark:text-amber-400 px-1.5 py-0.5 rounded-md animate-pulse">
                                    Sedang Dipelajari
                                  </span>
                                )}
                              </p>
                              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-1 leading-relaxed">{cp.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Slider Control panel to update database progress value */}
                  <div className="border-t border-slate-150 dark:border-slate-800/80 pt-5 space-y-4">
                    <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Settings className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                      <span>Sesuaikan Progres Belajar</span>
                    </h3>

                    <div className="p-5 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl space-y-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Tentukan persentase progres manual:</span>
                        
                        <div className="flex items-center gap-2 shrink-0">
                          <input 
                            type="number" 
                            min="0"
                            max="100"
                            value={progressSliderVal}
                            onChange={(e) => {
                              const val = Math.min(100, Math.max(0, Number(e.target.value)));
                              setProgressSliderVal(val);
                            }}
                            className="w-16 px-2 py-1 bg-white dark:bg-[#0c0e18] border border-slate-250 dark:border-slate-800 rounded-lg text-center text-xs font-black text-indigo-700 dark:text-indigo-400 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                          />
                          <span className="text-xs font-extrabold text-slate-505 dark:text-slate-400">%</span>
                        </div>
                      </div>

                      {/* Manual Drag Slider */}
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500">0%</span>
                        <input 
                          type="range"
                          min="0"
                          max="100"
                          value={progressSliderVal}
                          onChange={(e) => setProgressSliderVal(Number(e.target.value))}
                          className="flex-1 h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none"
                        />
                        <span className="text-[10px] font-black text-slate-400 dark:text-slate-500">100%</span>
                      </div>

                      {/* Quick Shortcut control triggers */}
                      <div className="flex flex-wrap gap-2.5 pt-2">
                        <button
                          type="button"
                          onClick={() => setProgressSliderVal(100)}
                          className="px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/40 border border-emerald-200 dark:border-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-black transition-all flex items-center gap-1 shadow-sm"
                        >
                          <Award className="w-3.5 h-3.5" /> Luluskan & Berikan Sertifikat (100%)
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            const template = `Halo ${selectedProgressStudent.name}, progres belajarmu di modul ${selectedProgressStudent.moduleTitle} saat ini sudah mencapai ${selectedProgressStudent.progress}%. Hebat sekali! Pertahankan belajarmu, tinggal sedikit lagi kamu akan lulus! Semangat!`;
                            alert(`Simulasi pesan motivasi terkirim ke email siswa:\n\n"${template}"`);
                          }}
                          className="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:hover:bg-indigo-900/40 border border-indigo-200 dark:border-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-xl text-xs font-black transition-all flex items-center gap-1 shadow-sm"
                        >
                          <MessageSquare className="w-3.5 h-3.5" /> Kirim Motivasi
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Modal Footer / Save Actions */}
                <div className="px-6 py-5 border-t border-slate-150 dark:border-slate-850 flex items-center justify-end gap-3 bg-slate-50/50 dark:bg-slate-950/40 shrink-0">
                  <button 
                    onClick={() => setIsProgressModalOpen(false)}
                    className="px-5 py-2.5 text-xs font-black text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all"
                  >
                    Batal
                  </button>
                  <button 
                    disabled={isUpdatingProgress}
                    onClick={() => handleUpdateProgress(selectedProgressStudent.studentId, selectedProgressStudent.moduleId, progressSliderVal)}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white text-xs font-black rounded-xl transition-all shadow-md shadow-indigo-600/15 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {isUpdatingProgress ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Menyimpan...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Simpan Perubahan</span>
                      </>
                    )}
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>
      );
    }

    // Student Dashboard Home
    const approvedEnrollments = enrollments.filter((e: any) => e.enrollmentStatus === 'APPROVED');
    const completedEnrollments = approvedEnrollments.filter((e: any) => e.progress >= 100);
    const inProgressEnrollments = approvedEnrollments.filter((e: any) => e.progress > 0 && e.progress < 100);
    const avgProgress = approvedEnrollments.length > 0
      ? Math.round(approvedEnrollments.reduce((sum: number, e: any) => sum + (e.progress || 0), 0) / approvedEnrollments.length)
      : 0;

    // Time-based greeting
    const hour = new Date().getHours();
    const greeting = hour < 11 ? 'Selamat Pagi' : hour < 15 ? 'Selamat Siang' : hour < 18 ? 'Selamat Sore' : 'Selamat Malam';
    const greetingEmoji = hour < 11 ? 'â˜€ï¸' : hour < 15 ? 'ðŸŒ¤ï¸' : hour < 18 ? 'ðŸŒ‡' : 'ðŸŒ™';

    // Quick navigation items
    const quickNavs = [
      { label: 'Jelajahi Kursus', icon: Compass, color: 'from-indigo-500 to-purple-600', href: '/dashboard?tab=browse', desc: `${modules.length} modul tersedia` },
      { label: 'Lanjut Belajar', icon: PlayCircle, color: 'from-emerald-500 to-teal-600', href: '/dashboard?tab=in-progress', desc: `${inProgressEnrollments.length} kursus berlangsung` },
      { label: 'Sertifikat Saya', icon: Award, color: 'from-amber-500 to-orange-600', href: '/dashboard?view=certificates', desc: `${completedEnrollments.length} diraih` },
      { label: 'Jadwal Offline', icon: Server, color: 'from-rose-500 to-pink-600', href: '/dashboard?view=offline-schedule', desc: 'Sesi tatap muka' },
    ];

    return (
      <div className="min-h-full bg-slate-50 dark:bg-[#0f111a]">
        {/* â”€â”€ Hero Banner â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <div className="relative bg-gradient-to-br from-[#1e1b4b] via-indigo-800 to-purple-900 overflow-hidden">
          {/* Decorative blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute top-10 left-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-indigo-600/25 rounded-full blur-2xl" />
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          <div className="relative z-10 px-6 md:px-10 py-10 md:py-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Left: Greeting */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-black text-indigo-300 uppercase tracking-[0.2em]">{greeting} {greetingEmoji}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                    Halo, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">{user.name?.split(' ')[0]}</span>!
                  </h1>
                  <p className="text-indigo-200/80 text-sm font-medium mb-6 max-w-md">
                    {approvedEnrollments.length === 0
                      ? 'Mulai perjalanan belajar Anda â€” temukan kursus yang sesuai dan daftarkan diri sekarang.'
                      : inProgressEnrollments.length > 0
                      ? `Anda sedang mengikuti ${inProgressEnrollments.length} kursus aktif. Terus tingkatkan progres belajar Anda!`
                      : `Semua kursus Anda selesai! Jelajahi modul baru untuk terus berkembang.`
                    }
                  </p>

                  {/* Overall progress ring summary */}
                  {approvedEnrollments.length > 0 && (
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative w-16 h-16 shrink-0">
                        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="3" />
                          <circle cx="18" cy="18" r="15.9" fill="none" stroke="url(#progressGrad)" strokeWidth="3"
                            strokeDasharray={`${avgProgress} ${100 - avgProgress}`} strokeLinecap="round" />
                          <defs>
                            <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#a78bfa" />
                              <stop offset="100%" stopColor="#818cf8" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-black text-xs">{avgProgress}%</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm">Rata-rata Progres</p>
                        <p className="text-indigo-300 text-xs font-medium">{approvedEnrollments.length} kursus aktif Â· {completedEnrollments.length} lulus</p>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => router.push('/dashboard?tab=browse')}
                      className="px-5 py-2.5 bg-white text-indigo-700 font-bold rounded-xl text-sm hover:bg-indigo-50 transition-all shadow-lg shadow-black/20 flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]">
                      <Compass className="w-4 h-4" /> Jelajahi Kursus
                    </button>
                    {inProgressEnrollments.length > 0 && (
                      <button onClick={() => router.push('/dashboard?tab=in-progress')}
                        className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-sm transition-all border border-white/20 flex items-center gap-2 backdrop-blur-sm">
                        <PlayCircle className="w-4 h-4" /> Lanjut Belajar
                      </button>
                    )}
                  </div>
                </div>

                {/* Right: Stat pills */}
                <div className="grid grid-cols-2 gap-3 md:w-72 shrink-0">
                  {[
                    { label: 'Kursus Aktif', value: approvedEnrollments.length, icon: BookOpen, color: 'bg-white/10 border-white/10' },
                    { label: 'Kursus Lulus', value: completedEnrollments.length, icon: CheckCircle, color: 'bg-emerald-500/20 border-emerald-400/20' },
                    { label: 'Sedang Belajar', value: inProgressEnrollments.length, icon: PlayCircle, color: 'bg-purple-500/20 border-purple-400/20' },
                    { label: 'XP Terkumpul', value: `${approvedEnrollments.length * 120}`, icon: Zap, color: 'bg-amber-500/20 border-amber-400/20' },
                  ].map((s, i) => (
                    <div key={i} className={`${s.color} border rounded-2xl p-4 backdrop-blur-sm`}>
                      <s.icon className="w-4 h-4 text-white/60 mb-2" />
                      <p className="text-xl font-black text-white">{s.value}</p>
                      <p className="text-[10px] font-bold text-white/60 uppercase tracking-wider mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-10 py-8 max-w-7xl mx-auto space-y-8">

          {/* â”€â”€ Quick Navigation Cards â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickNavs.map((nav, i) => (
              <button key={i} onClick={() => router.push(nav.href)}
                className="group bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{ background: `linear-gradient(to bottom left, ${nav.color.includes('indigo') ? '#6366f1' : nav.color.includes('emerald') ? '#10b981' : nav.color.includes('amber') ? '#f59e0b' : '#f43f5e'}, transparent)` }} />
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${nav.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <nav.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-black text-slate-800 dark:text-slate-200 text-sm group-hover:text-indigo-600 transition-colors">{nav.label}</p>
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium mt-0.5">{nav.desc}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-650 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all mt-auto" />
              </button>
            ))}
          </div>

          {/* â”€â”€ Active Courses â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          {myModules.length > 0 ? (
            <div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-xl font-black text-slate-800 dark:text-white">Kursus Aktif Saya</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Lanjutkan belajar dari terakhir kali Anda berhenti</p>
                </div>
                <button onClick={() => router.push('/dashboard?tab=in-progress')}
                  className="text-sm font-bold text-indigo-600 hover:text-indigo-850 dark:text-indigo-400 dark:hover:text-indigo-300 flex items-center gap-1.5 hover:gap-2.5 transition-all">
                  Lihat Semua <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {myModules.slice(0, 3).map((m: any) => {
                  const theme = getCourseTheme(m.title);
                  const enr = enrollmentMap.get(m.id);
                  const progress = enr?.progress || 0;
                  const isCompleted = progress >= 100;

                  return (
                    <div key={m.id}
                      className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
                      onClick={() => router.push(`/dashboard/modules/${m.id}`)}>
                      {/* Thumbnail */}
                      <div className={`h-32 bg-gradient-to-br ${theme.bg} relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-black/10" />
                        <span className="text-5xl drop-shadow-xl group-hover:scale-110 transition-transform duration-500 relative z-10">{theme.emoji}</span>
                        {isCompleted && (
                          <div className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-black px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                            <CheckCircle className="w-3 h-3" /> LULUS
                          </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex-1 flex flex-col">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-650 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-2 py-0.5 rounded-md self-start mb-2">{m.category || 'General'}</span>
                        <h3 className="font-black text-slate-800 dark:text-slate-200 text-sm leading-snug mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{m.title}</h3>

                        {/* Progress Bar */}
                        <div className="mt-auto space-y-2">
                          <div className="flex justify-between items-center text-xs font-bold">
                            <span className={isCompleted ? 'text-emerald-600 dark:text-emerald-450' : 'text-slate-500 dark:text-slate-400'}>
                              {isCompleted ? 'âœ“ Selesai' : 'Progres'}
                            </span>
                            <span className={isCompleted ? 'text-emerald-600 dark:text-emerald-455 font-black' : 'text-indigo-600 dark:text-indigo-400 font-black'}>{progress}%</span>
                          </div>
                          <div className="w-full h-2 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden shadow-inner">
                            <div
                              className={`h-full rounded-full transition-all duration-700 ${isCompleted ? 'bg-gradient-to-r from-emerald-500 to-teal-400' : 'bg-gradient-to-r from-indigo-500 to-purple-500'}`}
                              style={{ width: `${progress}%` }}
                            />
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); router.push(`/dashboard/modules/${m.id}`); }}
                            className={`w-full py-2.5 rounded-xl text-xs font-black transition-all mt-1 flex items-center justify-center gap-2 ${
                              isCompleted
                                ? 'bg-emerald-50 dark:bg-emerald-955/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-900/30'
                                : 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98]'
                            }`}>
                            {isCompleted ? <><Award className="w-3.5 h-3.5" /> Lihat Sertifikat</> : <><PlayCircle className="w-3.5 h-3.5" /> Lanjutkan</>}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Empty state */
            <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-16 text-center">
              <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/30 rounded-full flex items-center justify-center mx-auto mb-5">
                <BookOpen className="w-10 h-10 text-indigo-300 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-black text-slate-800 dark:text-slate-200 mb-2">Belum Ada Kursus</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm mx-auto mb-6">Mulai petualangan belajar Anda dengan mendaftar ke modul pertama!</p>
              <button onClick={() => router.push('/dashboard?tab=browse')}
                className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl text-sm hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20 flex items-center gap-2 mx-auto">
                <Compass className="w-4 h-4" /> Jelajahi Kursus
              </button>
            </div>
          )}

          {/* â”€â”€ Weekly Activity Chart + Learning Tips â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Activity Chart */}
            <div className="lg:col-span-2 bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-base font-black text-slate-800 dark:text-slate-200">Aktivitas Belajar</h2>
                  <p className="text-xs text-slate-400 dark:text-slate-550 font-medium mt-0.5">7 hari terakhir</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/30 rounded-xl">
                  <BarChart2 className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Minggu Ini</span>
                </div>
              </div>
              <div className="flex items-end gap-2 h-28">
                {[40, 65, 30, 85, 55, 70, 90].map((h, i) => {
                  const today = new Date().getDay();
                  const isToday = (i + 1) % 7 === today % 7;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group">
                      <div className="relative w-full">
                        <div
                          className={`w-full rounded-t-lg transition-all duration-700 cursor-pointer relative overflow-hidden ${
                            isToday
                              ? 'bg-gradient-to-t from-indigo-600 to-purple-500 shadow-lg shadow-indigo-500/30'
                              : 'bg-gradient-to-t from-indigo-200 to-indigo-100 dark:from-indigo-900 dark:to-indigo-850 group-hover:from-indigo-500 group-hover:to-indigo-400'
                          }`}
                          style={{ height: `${h * 1.12}px` }}
                        >
                          <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            {h} XP
                          </div>
                        </div>
                      </div>
                      <span className={`text-[10px] font-bold ${isToday ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`}>
                        {['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'][i]}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />Hari ini</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-indigo-200 dark:bg-indigo-800" />Lainnya</span>
                </div>
                <span className="text-xs font-black text-slate-700 dark:text-slate-300">Total: <span className="text-indigo-600 dark:text-indigo-400">435 XP</span></span>
              </div>
            </div>

            {/* Learning Tips / Motivational Card */}
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-955/15 dark:to-orange-955/10 border border-amber-200/60 dark:border-amber-900/20 rounded-3xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wider">Tips Hari Ini</span>
                </div>
                <p className="text-sm text-amber-900 dark:text-amber-300 font-bold leading-relaxed">
                  "Konsistensi adalah kunci. Belajar 30 menit setiap hari lebih efektif dari 3 jam seminggu sekali."
                </p>
                <div className="mt-3 pt-3 border-t border-amber-200/60 dark:border-amber-900/25 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-905/30 flex items-center justify-center text-xs">ðŸ“š</div>
                  <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400">DevGrow Learning Tips</span>
                </div>
              </div>

              <div className="bg-white dark:bg-[#0c0e18] border border-slate-205 dark:border-slate-800 rounded-3xl p-5 shadow-sm">
                <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Star className="w-3.5 h-3.5 text-amber-500" />
                  Pencapaian Saya
                </h3>
                <div className="space-y-3">
                  {[
                    { label: 'Kursus Selesai', value: completedEnrollments.length, max: Math.max(approvedEnrollments.length, 1), color: 'bg-emerald-500', icon: 'ðŸŽ“' },
                    { label: 'Rata-rata Progres', value: avgProgress, max: 100, color: 'bg-indigo-500', icon: 'ðŸ“ˆ' },
                    { label: 'Kursus Diikuti', value: approvedEnrollments.length, max: Math.max(modules.length, 1), color: 'bg-purple-500', icon: 'ðŸ“š' },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                          <span>{item.icon}</span> {item.label}
                        </span>
                        <span className="text-xs font-black text-slate-800 dark:text-slate-200">{item.label === 'Rata-rata Progres' ? `${item.value}%` : item.value}</span>
                      </div>
                      <div className="h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full transition-all duration-700`}
                          style={{ width: `${Math.round((item.value / item.max) * 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 relative transition-colors duration-300">
      <DashboardNavbar />
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />
        <div className={`flex-1 overflow-hidden ${(activeMenu === 'Discussions' || activeMenu === 'Diskusi & QA' || activeMenu === 'Q&A Forum') ? 'flex flex-col' : 'overflow-y-auto pb-28 md:pb-0 scroll-smooth [will-change:scroll-position] [transform:translateZ(0)]'}`}>
          {loading ? (
            <DevGrowLoader
              message="Memuat konten dashboard..."
              subtitle="Menyiapkan data kursus & progress belajar Anda"
              fullScreen={false}
            />
          ) : (
            renderContent()
          )}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm print:p-0 print:bg-white overflow-y-auto animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 md:p-10 max-w-3xl w-full border border-slate-200 shadow-2xl relative print:border-none print:shadow-none print:p-0">
            {/* Close Button */}
            <button onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors print:hidden">
              <Plus className="w-5 h-5 rotate-45" />
            </button>

            {/* Certificate Frame */}
            <div className="border-[12px] border-double border-amber-500/80 p-8 md:p-12 text-center relative bg-stone-50/50 print:bg-white print:border-amber-600">
              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-amber-600" />
              <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-amber-600" />
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-amber-600" />
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-amber-600" />

              {/* Gold Medal Icon */}
              <div className="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md shadow-amber-500/20">
                <Award className="w-9 h-9" />
              </div>

              {/* Certificate Title */}
              <h2 className="font-serif text-3xl md:text-4xl text-slate-800 tracking-wide font-black mb-1">SERTIFIKAT KELULUSAN</h2>
              <p className="font-sans text-[10px] tracking-[0.2em] text-amber-600 uppercase font-black mb-8">Certificate of Completion</p>

              {/* Awarded to */}
              <p className="text-xs text-slate-400 font-medium italic mb-2">Dengan ini diberikan kepada:</p>
              <h3 className="font-serif text-2xl md:text-3xl text-indigo-950 font-black border-b-2 border-slate-200 pb-3 max-w-md mx-auto mb-6">
                {user.name}
              </h3>

              {/* Course Accomplishment description */}
              <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed mb-8">
                Atas keberhasilan menyelesaikan seluruh kurikulum terstruktur dan lulus asesmen praktis dalam modul kompetensi industri:
              </p>
              <h4 className="text-lg md:text-xl font-sans text-slate-800 font-black mb-1">{selectedCert.module.title}</h4>
              <p className="text-[10px] font-black tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md self-center inline-block mb-10 border border-indigo-100">
                {selectedCert.module.category || 'General'}
              </p>

              {/* Bottom Row: Signatures and Date */}
              <div className="grid grid-cols-2 gap-8 border-t border-slate-200/80 pt-8 max-w-xl mx-auto text-left text-xs text-slate-500 font-semibold">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Tanggal Kelulusan</p>
                  <p className="text-slate-800 font-bold">
                    {new Date(selectedCert.enrollment.updatedAt || selectedCert.enrollment.enrolledAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium font-mono mt-3">ID: {selectedCert.enrollment.enrollmentId ? selectedCert.enrollment.enrollmentId.toUpperCase() : 'LMS-' + selectedCert.module.id.toUpperCase()}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Instruktur Pendamping</p>
                  <p className="text-slate-800 font-bold">{selectedCert.module.instructor?.name || 'Bagus Kurniawan'}</p>
                  <div className="mt-2 text-indigo-500/30 text-lg font-serif italic select-none print:text-indigo-600/40">âœ“ Verified Digital Signature</div>
                </div>
              </div>
            </div>

            {/* Action buttons (Print/PDF) */}
            <div className="mt-6 flex justify-end gap-3 print:hidden">
              <button onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 bg-slate-50 text-slate-500 font-bold rounded-xl text-xs hover:bg-slate-100 transition-colors border border-slate-200">
                Tutup
              </button>
              <button onClick={() => window.print()}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-colors shadow-md shadow-indigo-600/10 flex items-center gap-1.5 hover:scale-[1.02] active:scale-[0.98]">
                Cetak / Simpan PDF
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Access Request Success Popup Modal ── */}
      {requestSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
          <div className="bg-white dark:bg-[#0f1422] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative overflow-hidden transform animate-scaleUp text-center">
            {/* Background Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-amber-500/15 dark:bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500/15 dark:bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            {/* Floating Animated Icon */}
            <div className="relative mx-auto mb-5 w-20 h-20 rounded-3xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-400 p-0.5 shadow-xl shadow-amber-500/25 flex items-center justify-center">
              <div className="w-full h-full bg-white dark:bg-slate-900 rounded-[22px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-amber-500/10 animate-pulse" />
                <Clock className="w-9 h-9 text-amber-500 animate-spin" style={{ animationDuration: '7s' }} />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-amber-600 dark:text-amber-400 text-[11px] font-black tracking-wider uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              Permintaan Terkirim
            </div>

            {/* Title */}
            <h3 className="text-xl font-black text-slate-800 dark:text-white tracking-tight mb-2">
              Permintaan Akses Berhasil Dikirim! 🎉
            </h3>

            {/* Body Text */}
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
              Permintaan izin akses modul <span className="font-bold text-slate-800 dark:text-slate-200">&ldquo;{requestSuccessModal.moduleTitle || 'Kursus'}&rdquo;</span> telah berhasil dikirim. Menunggu persetujuan instruktur pengampu.
            </p>

            {/* Step Progress Visual */}
            <div className="bg-slate-50 dark:bg-slate-900/70 border border-slate-100 dark:border-slate-800/80 rounded-2xl p-4 mb-6 text-left space-y-2.5">
              <div className="flex items-center gap-3 text-xs text-emerald-600 dark:text-emerald-400 font-bold">
                <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center text-emerald-600 text-[10px] font-black shrink-0">✓</div>
                <span>Permintaan Izin Terkirim ke Sistem</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-amber-600 dark:text-amber-400 font-bold">
                <div className="w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-950/40 flex items-center justify-center text-amber-600 text-[10px] font-black shrink-0 animate-spin">⏳</div>
                <span>Menunggu Persetujuan Instruktur</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                <div className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-slate-400 text-[10px] font-black shrink-0">3</div>
                <span>Materi Otomatis Terbuka di My Learning</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex gap-3">
              <button
                onClick={() => setRequestSuccessModal(null)}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 active:from-indigo-800 text-white font-black rounded-2xl text-xs sm:text-sm transition-all shadow-lg shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Mengerti, Terima Kasih 👍
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
