'use client';

import { PlayCircle, FileText, Code2, ArrowLeft, CheckCircle, Search, BarChart, BookOpen, Users, Clock, Plus, Settings, Folder, MessageSquare, Book, MoreHorizontal, Edit, ChevronDown, ChevronUp, AlignLeft, Layout, Database, Globe, BarChart2, User, X, Filter, AlarmClock, Trash, ChevronRight, Play, Server, Smartphone, Lock, Star, Sparkles, GraduationCap, Award, Subtitles, Infinity, Send } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, use, useRef } from 'react';
import { coursesData } from '@/data/lessonData';
import DashboardSidebar from '@/components/DashboardSidebar';
import DevGrowLoader from '@/components/DevGrowLoader';
import { useRouter } from 'next/navigation';

export default function ModuleDetail({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;
  const [role, setRole] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [moduleData, setModuleData] = useState<any>(null);
  const [enrollmentStatus, setEnrollmentStatus] = useState<'NONE'|'PENDING'|'APPROVED'|'REJECTED'>('NONE');
  const [enrollmentProgress, setEnrollmentProgress] = useState<number>(0);
  const [enrolling, setEnrolling] = useState(false);
  const [enrollmentChecked, setEnrollmentChecked] = useState(false);
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [isAddLessonModalOpen, setIsAddLessonModalOpen] = useState(false);
  const [newLessonData, setNewLessonData] = useState({ chapter: '', subChapter: '', title: '', type: 'code', content: '' });
  const [isSavingLesson, setIsSavingLesson] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Reviews & Ratings State
  const [reviewsData, setReviewsData] = useState<{
    reviews: any[];
    avgRating: number;
    totalReviews: number;
    ratingCounts: Record<number, number>;
  }>({ reviews: [], avgRating: 0, totalReviews: 0, ratingCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 } });
  const [userRating, setUserRating] = useState<number>(5);
  const [userComment, setUserComment] = useState<string>('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewHoverStar, setReviewHoverStar] = useState<number>(0);
  const [isEditingReview, setIsEditingReview] = useState(false);
  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'error' | 'info' }>({
    show: false,
    message: '',
    type: 'success'
  });
  const toastTimerRef = useRef<NodeJS.Timeout | null>(null);

  const triggerToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast({ show: true, message, type });
    toastTimerRef.current = setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 3500);
  };

  const fetchReviews = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${id}/reviews`);
      if (res.ok) {
        const data = await res.json();
        setReviewsData(data);
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return triggerToast('Silakan login terlebih dahulu untuk memberikan ulasan.', 'error');
    if (!userComment.trim()) return triggerToast('Silakan tuliskan komentar ulasan Anda.', 'error');
    setIsSubmittingReview(true);
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${id}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: currentUser.id,
          rating: userRating,
          comment: userComment.trim()
        })
      });
      if (res.ok) {
        setIsEditingReview(false);
        await fetchReviews();
        triggerToast(isEditingReview ? 'Ulasan Anda telah berhasil diperbarui!' : 'Ulasan Anda telah berhasil disimpan!', 'success');
      } else {
        const data = await res.json().catch(() => ({}));
        triggerToast(data.error || 'Gagal menyimpan ulasan.', 'error');
      }
    } catch (err) {
      console.error(err);
      triggerToast('Terjadi kesalahan saat mengirim ulasan.', 'error');
    } finally {
      setIsSubmittingReview(false);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus ulasan Anda?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${reviewId}`, { method: 'DELETE' });
      if (res.ok) {
        setIsEditingReview(false);
        setUserComment('');
        setUserRating(5);
        await fetchReviews();
        triggerToast('Ulasan Anda telah berhasil dihapus.', 'info');
      } else {
        triggerToast('Gagal menghapus ulasan.', 'error');
      }
    } catch (err) {
      console.error(err);
      triggerToast('Terjadi kesalahan saat menghapus ulasan.', 'error');
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('lms_user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        setRole(user?.role?.toUpperCase());
        setCurrentUser(user);
      } catch {}
    }
    const fetchModule = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/modules/${id}`);
        if (res.ok) setModuleData(await res.json());
      } catch {}
    };
    if (id) {
      fetchModule();
      fetchReviews();
    }
    const savedProgress = localStorage.getItem(`progress_${id}`);
    if (savedProgress) {
      try { setCompletedLessons(new Set(JSON.parse(savedProgress))); } catch {}
    }
  }, [id]);

  useEffect(() => {
    const checkEnrollment = async () => {
      const stored = localStorage.getItem('lms_user');
      if (!stored) return;
      const user = JSON.parse(stored);
      if (user?.role?.toUpperCase() !== 'STUDENT') return;
      try {
        const res = await fetch(`http://localhost:5000/api/enrollments/check?studentId=${user.id}&moduleId=${id}`);
        if (res.ok) {
          const data = await res.json();
          setEnrollmentStatus(data.enrolled && data.status ? data.status : 'NONE');
          // Read backend progress value
          if (data.enrollment?.progress !== undefined) {
            setEnrollmentProgress(data.enrollment.progress);
          }
        }
      } catch {}
      setEnrollmentChecked(true);
    };
    if (id) checkEnrollment();
  }, [id]);

  const handleEnroll = async () => {
    if (!currentUser || enrolling) return;
    setEnrolling(true);
    try {
      const res = await fetch('http://localhost:5000/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: currentUser.id, moduleId: id })
      });
      if (res.ok) {
        setEnrollmentStatus('PENDING');
        setShowSuccessPopup(true);
      }
    } catch {} finally { setEnrolling(false); }
  };

  const fetchModuleDataAgain = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${id}`);
      if (res.ok) setModuleData(await res.json());
    } catch {}
  };

  const handleCreateLesson = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLessonData.title.trim()) return;
    setIsSavingLesson(true);
    try {
      const contentObj = { theory: newLessonData.content, code: '' };
      const res = await fetch('http://localhost:5000/api/lessons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          moduleId: id, 
          chapter: newLessonData.subChapter || newLessonData.chapter,  // sub-bab becomes lesson.chapter
          title: newLessonData.title, 
          type: newLessonData.type, 
          content: JSON.stringify(contentObj), 
          order: moduleData?.lessons?.length || 0 
        })
      });
      if (res.ok) {
        setIsAddLessonModalOpen(false);
        setNewLessonData({ chapter: '', subChapter: '', title: '', type: 'code', content: '' });
        fetchModuleDataAgain();
      } else { alert('Gagal menambahkan materi'); }
    } catch { alert('Terjadi kesalahan'); } finally { setIsSavingLesson(false); }
  };

  const handleDeleteLesson = async (lessonId: string) => {
    if (!confirm('Yakin ingin menghapus materi ini?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/lessons/${lessonId}`, { method: 'DELETE' });
      if (res.ok) fetchModuleDataAgain();
    } catch { alert('Terjadi kesalahan saat menghapus'); }
  };

  const [editingChapterId, setEditingChapterId] = useState<string | null>(null);
  const [editingChapterTitle, setEditingChapterTitle] = useState('');
  const [isSavingChapter, setIsSavingChapter] = useState(false);

  const handleUpdateChapter = async (chapterId: string) => {
    if (!editingChapterTitle.trim()) return;
    setIsSavingChapter(true);
    try {
      const res = await fetch(`http://localhost:5000/api/chapters/${chapterId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: editingChapterTitle })
      });
      if (res.ok) {
        setEditingChapterId(null);
        fetchModuleDataAgain();
      } else {
        alert('Gagal mengupdate bab');
      }
    } catch {
      alert('Terjadi kesalahan');
    } finally {
      setIsSavingChapter(false);
    }
  };

  const getCourseTheme = (title: string): string => {
    const t = (title || '').toLowerCase();
    if (t.includes('html') || t.includes('web')) return 'html';
    if (t.includes('css') || t.includes('styling')) return 'css';
    if (t.includes('javascript') || t.includes('js') || t.includes('ecmascript')) return 'javascript';
    if (t.includes('php') || t.includes('backend')) return 'php';
    if (t.includes('mysql') || t.includes('database') || t.includes('sql')) return 'mysql';
    if (t.includes('git') || t.includes('version control')) return 'git';
    if (t.includes('mobile') || t.includes('android') || t.includes('flutter')) return 'mobile';
    if (t.includes('cisco') || t.includes('network') || t.includes('jaringan')) return 'cisco';
    return 'default';
  };

  const resolveCourseId = (dbModule: any): string => {
    const theme = getCourseTheme(dbModule?.title || '');
    const catMap: Record<string, string> = { 'Jaringan': 'cisco', 'Mobile': 'mobile' };
    if (theme !== 'default') return theme;
    return catMap[dbModule?.category] || 'html';
  };

  const gradientMap: Record<string, string> = {
    html: 'from-orange-500 to-pink-500', css: 'from-blue-500 to-teal-400',
    javascript: 'from-amber-400 to-orange-500', php: 'from-indigo-500 to-purple-500',
    mysql: 'from-teal-500 to-cyan-500', git: 'from-red-500 to-orange-500',
    mobile: 'from-emerald-500 to-green-500', cisco: 'from-cyan-500 to-indigo-400',
    default: 'from-violet-500 to-fuchsia-500'
  };

  const getLearningPoints = (title: string, category: string): string[] => {
    const t = (title || '').toLowerCase();
    if (t.includes('html')) {
      return [
        'Memahami arsitektur dasar dan struktur dokumen HTML5 modern',
        'Menguasai penggunaan tag semantik untuk SEO dan aksesibilitas web',
        'Membangun form interaktif dengan berbagai tipe input dan validasi data',
        'Menyisipkan media gambar, audio, video, dan link navigasi standar industri',
        'Menerapkan praktik terbaik pengkodean web sesuai standar W3C',
        'Mempersiapkan fondasi kokoh untuk lanjut ke CSS dan JavaScript modern'
      ];
    }
    if (t.includes('css')) {
      return [
        'Menguasai styling modern menggunakan CSS3 Box Model (Margin, Padding, Border)',
        'Mendesain layout responsif canggih dengan Flexbox dan CSS Grid',
        'Membuat animasi, transisi halus, dan efek visual interaktif tanpa JavaScript',
        'Mengatur tipografi, palet warna dinamis, dan sistem variabel CSS',
        'Mengimplementasikan media queries untuk semua ukuran layar (Mobile, Tablet, Desktop)',
        'Membuat antarmuka web yang memukau dengan standar UI/UX profesional'
      ];
    }
    if (t.includes('javascript') || t.includes('js')) {
      return [
        'Memahami konsep fundamental: Variabel, Tipe Data, Operator, dan Fungsi Modern',
        'Menguasai manipulasi DOM (Document Object Model) dan Event Handling interaktif',
        'Memahami Asynchronous JavaScript: Promises, Async/Await, dan Fetch API',
        'Bekerja dengan struktur data kompleks (Array methods: map, filter, reduce)',
        'Menerapkan Object-Oriented Programming (OOP) dan ES6+ modern syntax',
        'Membangun logika aplikasi web dinamis yang responsif dan siap pakai'
      ];
    }
    if (t.includes('php')) {
      return [
        'Menguasai sintaks dasar dan logika pemrograman server-side dengan PHP',
        'Mengelola formulir POST/GET, validasi input, dan penanganan upload file',
        'Memahami Session, Cookies, dan sistem otentikasi login yang aman',
        'Menghubungkan PHP ke database MySQL menggunakan PDO dan Prepared Statements',
        'Membangun arsitektur CRUD (Create, Read, Update, Delete) yang modular',
        'Menerapkan praktik keamanan web: perlindungan terhadap SQL Injection & XSS'
      ];
    }
    if (t.includes('mysql') || t.includes('database') || t.includes('sql')) {
      return [
        'Memahami konsep Relational Database Management System (RDBMS) dan schema design',
        'Menulis query SQL tingkat lanjut: SELECT, JOIN (Inner, Left, Right), GROUP BY, HAVING',
        'Menguasai manipulasi data: INSERT, UPDATE, DELETE dengan transaksi ACID',
        'Mendesain relasi antar tabel (Primary Key, Foreign Key, dan Normalisasi Database)',
        'Mengoptimalkan performa query dengan Indexing dan Query Optimization',
        'Melakukan backup, restore, dan manajemen hak akses pengguna database'
      ];
    }
    if (t.includes('cisco') || t.includes('network') || t.includes('jaringan')) {
      return [
        'Memahami dasar-dasar jaringan komputer, model OSI, dan protokol TCP/IP',
        'Melakukan konfigurasi router dan switch Cisco menggunakan Packet Tracer',
        'Mengatur subnetting IPv4/IPv6 dan perutean statis maupun dinamis (RIP, OSPF)',
        'Menerapkan keamanan jaringan dengan Access Control List (ACL) dan VLAN',
        'Troubleshooting masalah konektivitas jaringan secara sistematis',
        'Mempersiapkan diri untuk sertifikasi jaringan standar internasional (CCNA)'
      ];
    }
    if (t.includes('mobile') || t.includes('android')) {
      return [
        'Memahami siklus hidup Activity dan Fragment pada aplikasi Android',
        'Membangun antarmuka pengguna responsif dengan layout XML dan ViewBinding',
        'Mengelola navigasi aplikasi, Intent, dan passing data antar layar',
        'Mengintegrasikan RESTful API untuk mengambil dan mengirim data cloud',
        'Menerapkan penyimpanan lokal menggunakan SQLite atau Room Database',
        'Mempersiapkan dan mempublikasikan aplikasi ke Google Play Store'
      ];
    }
    return [
      `Memahami konsep fundamental dan studi kasus nyata dalam bidang ${category || 'teknologi'}`,
      'Menerapkan metodologi terbaik dan alur kerja standar industri',
      'Menyelesaikan tugas dan latihan praktek langsung yang terstruktur',
      'Membangun portofolio karya nyata yang siap dipamerkan ke industri',
      'Mendapatkan panduan komprehensif dari instruktur berpengalaman',
      'Mendapatkan sertifikat kelulusan terverifikasi setelah menyelesaikan kursus'
    ];
  };

  const formatLastUpdated = (dateString?: string): string => {
    if (!dateString) return '8/2026';
    try {
      const d = new Date(dateString);
      return `${d.getMonth() + 1}/${d.getFullYear()}`;
    } catch {
      return '8/2026';
    }
  };

  if (!moduleData) {
    return (
      <DevGrowLoader
        message="Memuat kurikulum & silabus kursus..."
        subtitle="Menyiapkan data pembelajaran terstruktur DevGrow"
        fullScreen={true}
      />
    );
  }

  const courseId = resolveCourseId(moduleData);
  const gradient = gradientMap[courseId] || gradientMap.default;

  // ── INSTRUCTOR / ADMIN VIEW ──
  if (role === 'INSTRUCTOR' || role === 'ADMIN') {
    const lessons = (moduleData?.lessons ?? []).slice().sort((a: any, b: any) => a.order - b.order);
    const chapters = (moduleData?.chapters ?? []).slice().sort((a: any, b: any) => a.order - b.order);
    const learningPoints = getLearningPoints(moduleData?.title || '', moduleData?.category || '');
    const instructorName = moduleData?.instructor?.name || 'DevGrow Academy';
    const lastUpdated = formatLastUpdated(moduleData?.updatedAt);
    const enrolledCount = moduleData?.enrolledStudentsCount ?? moduleData?.totalStudentsCount ?? (moduleData?.enrollments ? moduleData.enrollments.filter((e: any) => e.status === 'APPROVED').length || moduleData.enrollments.length : 1);
    const completedCount = moduleData?.completedStudentsCount ?? (moduleData?.enrollments ? moduleData.enrollments.filter((e: any) => e.progress >= 100).length : 0);
    const avgRating = reviewsData.totalReviews > 0
      ? reviewsData.avgRating
      : (moduleData?.avgRating ?? 0);
    const totalReviews = reviewsData.totalReviews;
    const videoLessonsCount = moduleData?.videoLessonsCount ?? lessons.filter((l: any) => l.type === 'video').length;
    const articleLessonsCount = moduleData?.articleLessonsCount ?? lessons.filter((l: any) => l.type !== 'video').length;
    const approxVideoHours = (videoLessonsCount > 0 ? (videoLessonsCount * 0.35).toFixed(1) : '16.5');
    const tasksCount = moduleData?.tasksCount ?? moduleData?.tasks?.length ?? 3;

    return (
      <div className="w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-6 space-y-6">
          {/* Top Back & Mode Indicator */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <button onClick={() => router.push('/dashboard/manage-modules')} className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-500 hover:text-slate-800 font-semibold transition-colors group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Kembali ke Manajemen Kursus</span>
            </button>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-indigo-50 border border-indigo-200 text-indigo-700 font-black text-xs rounded-full">
                Mode Instruktur · Content Builder
              </span>
              <button onClick={() => setIsAddLessonModalOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md shadow-indigo-200 text-sm shrink-0 transition-all">
                <Plus className="w-4 h-4" /> Tambah Materi
              </button>
            </div>
          </div>

          {/* Hero Banner Header with Complete Metadata */}
          <div className={`bg-gradient-to-r ${gradient} rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden`}>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-black tracking-wide uppercase border border-white/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" /> Access 28,000+ top-rated courses with DevGrow [Personal Plan]
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-wider bg-black/25 px-3 py-1 rounded-full border border-white/10">
                    {moduleData?.category || 'Programming'}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-500/30 px-3 py-1 rounded-full border border-emerald-300/40 text-emerald-200">
                    ✓ Verified by DevGrow
                  </span>
                </div>

                {/* Title & Tagline */}
                <h1 className="text-2xl sm:text-4xl font-black leading-tight tracking-tight text-white drop-shadow-sm">
                  {moduleData?.title || 'Kursus Pembelajaran'}
                </h1>
                <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-4xl font-medium">
                  {moduleData?.description || 'Kuasai fondasi utama dan lanjutan dengan konsep terstruktur, live coding playground, serta sertifikat kelulusan resmi.'}
                </p>

                {/* Key Metadata Stats Bar */}
                <div className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-4 text-xs sm:text-sm font-semibold text-white/90">
                  {/* Rating */}
                  <div className="flex items-center gap-1.5 bg-amber-400/20 backdrop-blur-sm border border-amber-300/40 px-3 py-1 rounded-xl">
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    <span className="font-black text-white">{Number(avgRating).toFixed(1)}</span>
                    <span className="text-white/80">({totalReviews} rating)</span>
                  </div>

                  {/* Enrolled Students (Order) */}
                  <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-xl">
                    <Users className="w-4 h-4 text-emerald-200" />
                    <span><strong>{enrolledCount}</strong> siswa terdaftar (Order)</span>
                  </div>

                  {/* Completed Students */}
                  <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-xl">
                    <GraduationCap className="w-4 h-4 text-cyan-200" />
                    <span><strong>{completedCount}</strong> siswa lulus (100% Selesai)</span>
                  </div>

                  {/* Created by */}
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4 text-white/75" />
                    <span>Dibuat oleh <strong className="underline decoration-white/40">{instructorName}</strong></span>
                  </div>

                  {/* Last updated */}
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-white/75" />
                    <span>Terakhir diperbarui <strong>{lastUpdated}</strong></span>
                  </div>

                  {/* Language & CC */}
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4 text-white/75" />
                    <span>English · Indonesia [Auto]</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Subtitles className="w-4 h-4 text-white/75" />
                    <span>CC: Indonesia [Auto], English</span>
                  </div>
                </div>
              </div>

              {/* Right Col: Instructor Quick Stats */}
              <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-white/80">Statistik Konten</span>
                  <span className="px-2.5 py-0.5 bg-white/20 text-white text-[10px] font-black rounded-full">
                    {chapters.length} Bab
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-black/20 rounded-xl p-2.5 border border-white/10">
                    <p className="text-lg font-black text-white">{lessons.length}</p>
                    <p className="text-[10px] text-white/75 font-semibold uppercase">Total Materi</p>
                  </div>
                  <div className="bg-black/20 rounded-xl p-2.5 border border-white/10">
                    <p className="text-lg font-black text-emerald-300">{tasksCount}</p>
                    <p className="text-[10px] text-white/75 font-semibold uppercase">Tugas / Kuis</p>
                  </div>
                </div>
                <p className="text-[11px] text-white/80 text-center leading-relaxed">
                  Kelola bab, materi interaktif, dan kuis secara visual di panel Content Builder di bawah.
                </p>
              </div>
            </div>
          </div>

          {/* ── 2-COLUMN LAYOUT (LEFT: Syllabus/Builder, RIGHT: Info/Stats) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
            {/* ── LEFT COLUMN: 8 COLS ── */}
            <div className="lg:col-span-8 space-y-6">
              {/* SECTION 1: WHAT YOU'LL LEARN */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                <h2 className="text-xl font-black text-slate-800 mb-5 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-indigo-600" />
                  Yang Akan Anda Pelajari (What you&apos;ll learn)
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {learningPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs border border-emerald-200">
                        ✓
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION 2: CONTENT BUILDER / DAFTAR BAB & MATERI */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                  <div>
                    <h2 className="font-black text-slate-800 text-lg">Daftar Bab &amp; Materi Pembelajaran</h2>
                    <p className="text-xs text-slate-400 mt-0.5">Kelola struktur materi, bab, dan tipe pelajaran modul ini</p>
                  </div>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{lessons.length} materi</span>
                </div>
                {lessons.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4"><Book className="w-7 h-7 text-slate-400" /></div>
                    <h3 className="font-bold text-slate-700 mb-2">Belum ada materi</h3>
                    <p className="text-sm text-slate-400 mb-6 max-w-xs">Mulai tambahkan bab atau materi pembelajaran ke dalam modul ini.</p>
                    <button onClick={() => setIsAddLessonModalOpen(true)} className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors">
                      <Plus className="w-4 h-4" /> Tambah Materi Pertama
                    </button>
                  </div>
                ) : (
                  <div>
                    {chapters.map((chapter: any) => {
                      const chapLessons = lessons.filter((l: any) => l.chapterId === chapter.id || l.chapter === chapter.title);
                      return (
                      <div key={chapter.id}>
                        <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 border-b border-slate-100 group/chap">
                          <Folder className="w-4 h-4 text-indigo-400 shrink-0" />
                          {editingChapterId === chapter.id ? (
                            <div className="flex items-center gap-2 flex-1">
                              <input 
                                type="text" 
                                value={editingChapterTitle} 
                                onChange={e => setEditingChapterTitle(e.target.value)} 
                                className="px-2 py-1 text-xs font-black uppercase tracking-wider border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                                autoFocus
                                onKeyDown={e => e.key === 'Enter' && handleUpdateChapter(chapter.id)}
                              />
                              <button onClick={() => handleUpdateChapter(chapter.id)} disabled={isSavingChapter} className="text-xs bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700">Simpan</button>
                              <button onClick={() => setEditingChapterId(null)} className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded hover:bg-slate-300">Batal</button>
                            </div>
                          ) : (
                            <>
                              <span className="text-xs font-black text-slate-600 uppercase tracking-wider">{chapter.title}</span>
                              <button onClick={() => { setEditingChapterId(chapter.id); setEditingChapterTitle(chapter.title); }} className="opacity-0 group-hover/chap:opacity-100 p-1 text-slate-400 hover:text-indigo-600 transition-opacity ml-2">
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs text-slate-400 font-medium ml-auto">{chapLessons.length} materi</span>
                            </>
                          )}
                        </div>
                        {chapLessons.map((lesson: any, i: number) => (
                          <div key={lesson.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors group border-b border-slate-100 last:border-b-0">
                            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</div>
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${lesson.type === 'code' ? 'bg-emerald-50 text-emerald-600' : lesson.type === 'video' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>
                              {lesson.type === 'code' ? <Code2 className="w-3.5 h-3.5" /> : lesson.type === 'video' ? <PlayCircle className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-slate-800 text-sm truncate">{lesson.title}</h4>
                              <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                                <span className="uppercase font-semibold text-[10px] bg-slate-100 px-2 py-0.5 rounded">{lesson.type}</span>
                                {lesson.subChapter && <span>· {lesson.subChapter}</span>}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Link href={`/dashboard/modules/${id}/lesson/${lesson.id}`} className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Buka Materi">
                                <Play className="w-4 h-4" />
                              </Link>
                              <button onClick={() => handleDeleteLesson(lesson.id)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Hapus Materi">
                                <Trash className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* ── RIGHT COLUMN: 4 COLS (STICKY SIDEBAR) ── */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
              {/* SECTION 2: THIS COURSE INCLUDES */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
                <h3 className="text-base font-black text-slate-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-600" />
                  Modul Ini Mencakup:
                </h3>
                <div className="space-y-3.5 text-xs sm:text-sm font-semibold text-slate-700">
                  {videoLessonsCount > 0 ? (
                    <div className="flex items-center gap-3">
                      <PlayCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{approxVideoHours} jam video pembelajaran on-demand ({videoLessonsCount} video)</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-3">
                      <Code2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{lessons.length} materi interaktif &amp; Live Code Sandbox</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>{articleLessonsCount > 0 ? articleLessonsCount : lessons.length} artikel &amp; dokumentasi terstruktur</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{tasksCount} tugas praktek &amp; proyek hands-on</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Smartphone className="w-4 h-4 text-purple-500 shrink-0" />
                    <span>Akses di Mobile, Tablet, dan TV</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Infinity className="w-4 h-4 text-cyan-500 shrink-0" />
                    <span>Akses seumur hidup penuh (Full lifetime)</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Subtitles className="w-4 h-4 text-teal-500 shrink-0" />
                    <span>Closed captions / Subtitle [Auto]</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Award className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Sertifikat kelulusan resmi DevGrow</span>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Bar & Actions */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider">Statistik Modul</h4>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Materi', value: lessons.length, color: 'text-indigo-600 bg-indigo-50' },
                    { label: 'Bab', value: chapters.length, color: 'text-purple-600 bg-purple-50' },
                    { label: 'Lulus', value: completedCount, color: 'text-emerald-600 bg-emerald-50' },
                  ].map(s => (
                    <div key={s.label} className="bg-slate-50 rounded-2xl p-3 text-center border border-slate-100">
                      <p className="text-lg font-black text-slate-800">{s.value}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase">{s.label}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => setIsAddLessonModalOpen(true)} className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-md shadow-indigo-600/20 text-xs transition-all">
                  <Plus className="w-4 h-4" /> Tambah Materi Baru
                </button>
              </div>

              {/* Quality Guarantee Box */}
              <div className="bg-indigo-50/70 border border-indigo-100 rounded-3xl p-5 text-xs text-indigo-900 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-indigo-700">
                  <Sparkles className="w-4 h-4" /> Jaminan Kualitas DevGrow
                </div>
                <p className="text-slate-600 leading-relaxed text-[11px]">
                  Semua materi di Content Builder langsung sinkron dengan Live Code Editor siswa secara real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Lesson Modal */}
        {isAddLessonModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <h3 className="font-black text-slate-800 text-lg">Tambah Materi Baru</h3>
                <button onClick={() => setIsAddLessonModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"><X className="w-5 h-5" /></button>
              </div>
              <form onSubmit={handleCreateLesson} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Bab (Chapter)</label>
                  <input type="text" value={newLessonData.chapter} onChange={e => setNewLessonData({ ...newLessonData, chapter: e.target.value })} placeholder="Misal: Bab 1 — Dasar PHP" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium mb-3" />
                  <label className="block text-sm font-bold text-slate-700 mb-2">Sub Bab <span className="text-slate-400 font-normal text-xs">(Opsional)</span></label>
                  <input type="text" value={newLessonData.subChapter} onChange={e => setNewLessonData({ ...newLessonData, subChapter: e.target.value })} placeholder="Misal: Variabel dan Tipe Data" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium mb-4" />
                  <label className="block text-sm font-bold text-slate-700 mb-2">Judul Materi</label>
                  <input type="text" value={newLessonData.title} onChange={e => setNewLessonData({ ...newLessonData, title: e.target.value })} required placeholder="Misal: Pengenalan HTML, Membuat Form Login, dll" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-medium" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-3">Tipe Materi</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: 'code', label: 'Code / Interactive', icon: Code2, color: 'border-emerald-400 bg-emerald-50 text-emerald-700' },
                      { value: 'video', label: 'Video', icon: PlayCircle, color: 'border-rose-400 bg-rose-50 text-rose-700' },
                      { value: 'quiz', label: 'Quiz', icon: CheckCircle, color: 'border-amber-400 bg-amber-50 text-amber-700' },
                    ].map(t => (
                      <button key={t.value} type="button" onClick={() => setNewLessonData({ ...newLessonData, type: t.value })} className={`flex flex-col items-center gap-2 py-4 rounded-xl border-2 font-bold text-xs transition-all ${newLessonData.type === t.value ? t.color + ' shadow-sm' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}>
                        <t.icon className="w-5 h-5" />{t.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="button" onClick={() => setIsAddLessonModalOpen(false)} className="flex-1 py-3 font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors">Batal</button>
                  <button type="submit" disabled={isSavingLesson} className="flex-1 py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 rounded-xl transition-colors shadow-md shadow-indigo-500/20">{isSavingLesson ? 'Menyimpan...' : 'Simpan Materi'}</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  // ── STUDENT VIEW ──
  const courseFromLocal = coursesData.find(c => c.id === id || c.id === courseId);
  const localModules = courseFromLocal?.modules;

  let syllabus: any[] = [];
  if (localModules && localModules.length > 0) {
    syllabus = localModules.map((mod: any) => ({
      title: mod.title,
      lessons: mod.lessons || []
    }));
  } else {
    const chapters = (moduleData?.chapters ?? []).slice().sort((a: any, b: any) => a.order - b.order);
    const lessons = (moduleData?.lessons ?? []).slice().sort((a: any, b: any) => a.order - b.order);

    syllabus = chapters.map((chapter: any) => {
      const chapterLessons = lessons.filter((l: any) => l.chapterId === chapter.id || l.chapter === chapter.title);
      return { title: chapter.title, lessons: chapterLessons };
    });

    const mappedLessonIds = new Set(syllabus.flatMap((chap: any) => chap.lessons.map((l: any) => l.id)));
    const unmappedLessons = lessons.filter((l: any) => !mappedLessonIds.has(l.id));

    if (unmappedLessons.length > 0) {
      const fallbackGrouped = unmappedLessons.reduce((acc: any, lesson: any) => {
        const chap = lesson.chapter || 'Bab Umum';
        if (!acc[chap]) acc[chap] = [];
        acc[chap].push(lesson);
        return acc;
      }, {});
      
      const fallbackSyllabus = Object.entries(fallbackGrouped).map(([title, chapLessons]: [string, any]) => ({
        title, lessons: chapLessons.sort((a: any, b: any) => a.order - b.order)
      }));
      
      syllabus = [...syllabus, ...fallbackSyllabus];
    }
  }

  const totalLessonsCount = syllabus.reduce((sum: number, b: any) => sum + (b.lessons?.length || 0), 0);

  if (!enrollmentChecked && role === 'STUDENT') {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full" />
      </div>
    );
  }

  const progressKey = `progress_${id}`;
  const progressData = typeof window !== 'undefined' ? localStorage.getItem(progressKey) : null;
  const localCompleted: Set<string> = progressData ? new Set<string>(JSON.parse(progressData)) : completedLessons;

  // If backend says 100%, treat ALL lessons as completed for display purposes
  const allLessonIds = new Set<string>((moduleData?.lessons ?? []).map((l: any) => l.id));
  const isFullyCompleted = enrollmentProgress >= 100 || 
    (localCompleted.size > 0 && allLessonIds.size > 0 && [...allLessonIds].every(lid => localCompleted.has(lid)));
  
  const completedSet: Set<string> = isFullyCompleted ? allLessonIds : localCompleted;
  const validCompletedCount = [...allLessonIds].filter(lid => completedSet.has(lid)).length;
  const progressPct = Math.min(100, totalLessonsCount > 0 ? Math.round((validCompletedCount / totalLessonsCount) * 100) : (enrollmentProgress || 0));

  const getFirstLesson = () => {
    if (moduleData?.lessons?.length > 0) {
      const sorted = [...moduleData.lessons].sort((a: any, b: any) => a.order - b.order);
      return sorted[0]?.id;
    }
    const firstModule = syllabus[0];
    return firstModule?.lessons?.[0]?.id || null;
  };

  const handleStart = () => {
    const first = getFirstLesson();
    if (first) router.push(`/dashboard/modules/${id}/lesson/${first}`);
  };

  const learningPoints = getLearningPoints(moduleData?.title || '', moduleData?.category || '');
  const instructorName = moduleData?.instructor?.name || 'DevGrow Academy';
  const lastUpdated = formatLastUpdated(moduleData?.updatedAt);
  const enrolledCount = moduleData?.enrolledStudentsCount ?? moduleData?.totalStudentsCount ?? (moduleData?.enrollments ? moduleData.enrollments.filter((e: any) => e.status === 'APPROVED').length || moduleData.enrollments.length : 1);
  const completedCount = moduleData?.completedStudentsCount ?? (moduleData?.enrollments ? moduleData.enrollments.filter((e: any) => e.progress >= 100).length : 0);
  const avgRating = reviewsData.totalReviews > 0
    ? reviewsData.avgRating
    : (moduleData?.avgRating ?? 0);
  const totalReviews = reviewsData.totalReviews;
  const allStudentLessons = syllabus.flatMap((s: any) => s.lessons || []);
  const videoLessonsCount = moduleData?.videoLessonsCount ?? allStudentLessons.filter((l: any) => l.type === 'video').length;
  const articleLessonsCount = moduleData?.articleLessonsCount ?? allStudentLessons.filter((l: any) => l.type !== 'video').length;
  const approxVideoHours = (videoLessonsCount > 0 ? (videoLessonsCount * 0.35).toFixed(1) : '16.5');
  const tasksCount = moduleData?.tasksCount ?? moduleData?.tasks?.length ?? 3;

  return (
    <div className="w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 py-6 space-y-6">
        {/* Back Button */}
        <button onClick={() => router.back()} className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-500 hover:text-slate-800 font-semibold transition-colors group">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Kembali ke Katalog Kursus</span>
        </button>

        {/* Hero Banner Header with Rich 2-Column Utilization */}
        <div className={`bg-gradient-to-r ${gradient} rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-xl relative overflow-hidden`}>
          {/* Subtle Ambient Background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Main Details */}
            <div className="lg:col-span-8 space-y-4">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-black tracking-wide uppercase border border-white/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" /> Access 28,000+ top-rated courses with DevGrow [Personal Plan]
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-black/25 px-3 py-1 rounded-full border border-white/10">
                  {moduleData?.category || 'Programming'}
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-emerald-500/30 px-3 py-1 rounded-full border border-emerald-300/40 text-emerald-200">
                  ✓ Verified by DevGrow
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-4xl font-black leading-tight tracking-tight text-white drop-shadow-sm">
                {moduleData?.title || 'Kursus Pembelajaran'}
              </h1>
              <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed max-w-4xl font-medium">
                {moduleData?.description || 'Pelajari konsep fundamental dan lanjutan dengan kurikulum terstruktur, live coding playground, serta sertifikat kelulusan resmi.'}
              </p>

              {/* Key Metadata Stats Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-4 text-xs sm:text-sm font-semibold text-white/90">
                {/* Rating */}
                <div className="flex items-center gap-1.5 bg-amber-400/20 backdrop-blur-sm border border-amber-300/40 px-3 py-1 rounded-xl">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span className="font-black text-white">{Number(avgRating).toFixed(1)}</span>
                  <span className="text-white/80">({totalReviews} ulasan)</span>
                </div>

                {/* Enrolled Students (Order) */}
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-xl">
                  <Users className="w-4 h-4 text-emerald-200" />
                  <span><strong>{enrolledCount}</strong> siswa terdaftar</span>
                </div>

                {/* Completed Students */}
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-xl">
                  <GraduationCap className="w-4 h-4 text-cyan-200" />
                  <span><strong>{completedCount}</strong> siswa lulus</span>
                </div>

                {/* Created by */}
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-white/75" />
                  <span>Dibuat oleh <strong className="underline decoration-white/40">{instructorName}</strong></span>
                </div>

                {/* Last updated */}
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-white/75" />
                  <span>Terakhir diperbarui <strong>{lastUpdated}</strong></span>
                </div>

                {/* Language & CC */}
                <div className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-white/75" />
                  <span>English · Indonesia [Auto]</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Subtitles className="w-4 h-4 text-white/75" />
                  <span>CC: Indonesia [Auto], English</span>
                </div>
              </div>
            </div>

            {/* Right Col: Quick Snapshot / Overview Card in Hero */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-white space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-white/80">Kurikulum Resmi</span>
                <span className="px-2.5 py-0.5 bg-emerald-400/20 border border-emerald-300/30 text-emerald-200 text-[10px] font-black rounded-full">
                  8 Bab Lengkap
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div className="bg-black/20 rounded-xl p-2.5 border border-white/10">
                  <p className="text-lg font-black text-white">{totalLessonsCount}</p>
                  <p className="text-[10px] text-white/75 font-semibold uppercase">Total Materi</p>
                </div>
                <div className="bg-black/20 rounded-xl p-2.5 border border-white/10">
                  <p className="text-lg font-black text-amber-300">{Number(avgRating).toFixed(1)}</p>
                  <p className="text-[10px] text-white/75 font-semibold uppercase">Skor Rating</p>
                </div>
              </div>
              <p className="text-[11px] text-white/80 text-center leading-relaxed">
                Materi interaktif dilengkapi Live Code Editor, kuis uji pemahaman, dan sertifikat kelulusan.
              </p>
            </div>
          </div>
        </div>

        {/* Enrollment Status Notice Banner */}
        {role === 'STUDENT' && enrollmentStatus === 'PENDING' && (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 flex items-center gap-4 text-amber-900 shadow-sm animate-fadeIn">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 text-amber-600 animate-spin" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-black text-base text-amber-900">Permintaan Izin Akses Sedang Ditinjau</h3>
              <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                Anda telah mengirimkan permohonan izin untuk mempelajari modul ini. Mohon tunggu instruktur pengampu menyetujui akses Anda sebelum materi dapat dibuka dan dipelajari.
              </p>
            </div>
          </div>
        )}

        {role === 'STUDENT' && enrollmentStatus === 'REJECTED' && (
          <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-rose-900 shadow-sm animate-fadeIn">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-300 flex items-center justify-center shrink-0">
                <X className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <h3 className="font-black text-base text-rose-900">Permintaan Izin Akses Ditolak</h3>
                <p className="text-xs text-rose-700 mt-1 leading-relaxed">
                  Instruktur belum memberikan izin akses untuk akun Anda pada modul ini. Anda dapat mencoba mengajukan izin kembali.
                </p>
              </div>
            </div>
            <button onClick={handleEnroll} disabled={enrolling} className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-black text-xs rounded-xl transition-all shadow-md shrink-0">
              {enrolling ? 'Mengirim...' : 'Ajukan Ulang Izin'}
            </button>
          </div>
        )}

        {role === 'STUDENT' && enrollmentStatus === 'NONE' && (
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-indigo-900 shadow-sm animate-fadeIn">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-300 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-black text-base text-indigo-900">Modul Memerlukan Izin Instruktur</h3>
                <p className="text-xs text-indigo-700 mt-1 leading-relaxed">
                  Modul ini dibuat oleh instruktur. Silakan kirimkan permintaan izin akses terlebih dahulu agar instruktur dapat menyetujui dan materi dapat dipelajari di menu My Learning.
                </p>
              </div>
            </div>
            <button onClick={handleEnroll} disabled={enrolling} className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-black text-xs rounded-xl transition-all shadow-md shadow-indigo-600/20 shrink-0">
              {enrolling ? 'Mengirim...' : 'Minta Izin Akses →'}
            </button>
          </div>
        )}

        {/* ── 2-COLUMN LAYOUT (LEFT: Syllabus, RIGHT: What you'll learn + Rating) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 xl:gap-8 items-start">
          {/* ── LEFT COLUMN: 8 COLS (SYLLABUS) ── */}
          <div className="lg:col-span-8 space-y-6">
            {/* SECTION 1: SYLLABUS */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <SyllabusAccordion
                syllabus={syllabus}
                completedSet={completedSet}
                progressPct={progressPct}
                enrollmentStatus={enrollmentStatus}
                id={id}
                router={router}
                totalLessonsCount={totalLessonsCount}
              />
            </div>

            {/* SECTION 2: RATINGS & REVIEWS FEED */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              {/* Header & Rating Breakdown */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="space-y-1">
                  <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                    <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                    Ulasan &amp; Rating Kursus
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Berdasarkan <strong>{totalReviews} ulasan</strong> dari siswa yang telah mengikuti modul pembelajaran ini.
                  </p>
                </div>

                {/* Score Hero */}
                <div className="flex items-center gap-4 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 px-6 py-4 rounded-3xl shrink-0 shadow-sm">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl font-black text-amber-800 tracking-tight">{Number(avgRating).toFixed(1)}</div>
                    <div className="text-[10px] font-bold text-amber-600 uppercase tracking-wider">dari 5.0</div>
                  </div>
                  <div className="h-10 w-px bg-amber-200" />
                  <div>
                    <div className="flex text-amber-400 mb-1">
                      {[1, 2, 3, 4, 5].map(st => (
                        <Star key={st} className={`w-4 h-4 ${st <= Math.round(avgRating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                      ))}
                    </div>
                    <p className="text-[11px] font-bold text-amber-900">{totalReviews} Ulasan Terverifikasi</p>
                  </div>
                </div>
              </div>

              {/* Rating Distribution Breakdown */}
              {(() => {
                const reviewsList = reviewsData.reviews || [];
                const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
                reviewsList.forEach((r: any) => {
                  if (counts[r.rating] !== undefined) counts[r.rating]++;
                  else if (r.rating >= 5) counts[5]++;
                  else if (r.rating <= 1) counts[1]++;
                });
                const total = reviewsList.length || 1;

                return (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50/70 rounded-2xl border border-slate-100 text-xs">
                    {[5, 4, 3, 2, 1].map(st => {
                      const count = counts[st] || (st === 5 ? Math.round(totalReviews * 0.75) : st === 4 ? Math.round(totalReviews * 0.2) : 0);
                      const pct = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : (st === 5 ? 80 : st === 4 ? 20 : 0);
                      return (
                        <div key={st} className="flex items-center gap-2">
                          <span className="w-12 font-bold text-slate-600 flex items-center gap-1 shrink-0">
                            {st} <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          </span>
                          <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                            <div className="h-full bg-amber-400 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                          </div>
                          <span className="w-10 text-right text-[11px] font-bold text-slate-400 shrink-0">{pct}%</span>
                        </div>
                      );
                    })}
                  </div>
                );
              })()}

              {/* Reviews Feed List */}
              <div className="space-y-4 pt-2">
                <h4 className="text-sm font-black text-slate-800">Semua Ulasan Siswa ({reviewsData.reviews?.length || 0}):</h4>
                {reviewsData.reviews && reviewsData.reviews.length > 0 ? (
                  <div className="space-y-3.5">
                    {reviewsData.reviews.map((rev: any) => {
                      const isMyReview = currentUser && rev.userId === currentUser.id;
                      return (
                        <div key={rev.id} className="p-5 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-4 shadow-2xs">
                          {rev.user?.profilePicture ? (
                            <img
                              src={rev.user.profilePicture}
                              alt={rev.user.name}
                              className="w-10 h-10 rounded-2xl object-cover shrink-0 shadow-sm border border-slate-200"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white font-black flex items-center justify-center shrink-0 text-sm shadow-sm">
                              {rev.user?.name ? rev.user.name.charAt(0).toUpperCase() : 'S'}
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-slate-800 text-sm">{rev.user?.name || 'Siswa DevGrow'}</h4>
                                <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded-full">
                                  ✓ Siswa Terverifikasi
                                </span>
                              </div>
                              <span className="text-[11px] text-slate-400 font-semibold">
                                {rev.createdAt ? new Date(rev.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Baru saja'}
                              </span>
                            </div>

                            {/* Stars */}
                            <div className="flex items-center gap-1 mb-2">
                              {[1, 2, 3, 4, 5].map((st) => (
                                <Star key={st} className={`w-3.5 h-3.5 ${st <= rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                              ))}
                              <span className="text-xs font-black text-amber-700 ml-1.5">{rev.rating}.0</span>
                            </div>

                            {/* Comment */}
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                              {rev.comment}
                            </p>

                            {/* Edit & Delete option if author */}
                            {isMyReview && (
                              <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-end gap-3">
                                <button
                                  onClick={() => {
                                    setUserRating(rev.rating);
                                    setUserComment(rev.comment);
                                    setIsEditingReview(true);
                                    window.scrollTo({ top: 400, behavior: 'smooth' });
                                  }}
                                  className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 hover:underline transition-colors"
                                >
                                  <Edit className="w-3 h-3" /> Edit Ulasan
                                </button>
                                <button
                                  onClick={() => handleDeleteReview(rev.id)}
                                  className="text-[11px] font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 hover:underline transition-colors"
                                >
                                  <Trash className="w-3 h-3" /> Hapus Ulasan
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-slate-50 rounded-3xl border border-dashed border-slate-200 text-slate-400 text-xs sm:text-sm font-medium">
                    <Star className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    Belum ada ulasan untuk modul ini. Jadilah siswa pertama yang memberikan ulasan dan rating! ⭐
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: 4 COLS (STICKY SIDEBAR) ── */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">
            {/* Status & Enrollment Box */}
            <div className="bg-white border border-slate-200 p-6 rounded-3xl shadow-sm space-y-4">
              <h3 className="text-base font-black text-slate-800">Status Pembelajaran</h3>
              
              {progressPct > 0 && (
                <div className="w-full text-center">
                  <div className={`text-3xl font-black mb-1 ${progressPct >= 100 ? 'text-emerald-600' : 'text-indigo-600'}`}>
                    {progressPct}%
                  </div>
                  <div className="text-xs text-slate-400 mb-2 font-bold">Progress Selesai</div>
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-700 ${progressPct >= 100 ? 'bg-emerald-500' : 'bg-indigo-600'}`} style={{ width: `${progressPct}%` }} />
                  </div>
                </div>
              )}

              {progressPct >= 100 && (
                <div className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-50 border border-emerald-200 text-emerald-700 font-black rounded-2xl text-xs shadow-sm">
                  <Award className="w-4 h-4 text-emerald-600" />
                  🎉 Kursus Telah Selesai!
                </div>
              )}

              {enrollmentStatus === 'NONE' && (
                <button onClick={handleEnroll} disabled={enrolling} className="w-full px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-indigo-600/20 hover:scale-[1.02] disabled:opacity-50 flex items-center justify-center gap-2 text-sm">
                  <Lock className="w-4 h-4 text-white" />
                  {enrolling ? 'Mengirim Izin...' : 'Minta Izin Akses'}
                </button>
              )}

              {enrollmentStatus === 'APPROVED' && (
                <button onClick={handleStart} className="w-full px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-emerald-600/20 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-white" />
                  {progressPct >= 100 ? '📖 Pelajari Ulang' : progressPct > 0 ? 'Lanjutkan Belajar →' : 'Mulai Belajar Sekarang →'}
                </button>
              )}
            </div>

            {/* WHAT YOU'LL LEARN */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-black text-slate-800 mb-5 flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                Yang Akan Anda Pelajari
              </h3>
              <div className="space-y-4">
                {learningPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs border border-emerald-200">
                      ✓
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* REVIEW SECTION IN SIDEBAR (1 Review per Student with Edit & Delete) */}
            {role === 'STUDENT' && (() => {
              const myReview = reviewsData.reviews?.find((r: any) => currentUser && r.userId === currentUser.id);

              if (myReview && !isEditingReview) {
                return (
                  <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-800">
                            Ulasan Anda
                          </h4>
                          <p className="text-[11px] text-emerald-600 font-semibold">✓ Ulasan terkirim (1 per siswa)</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                        Aktif
                      </span>
                    </div>

                    {/* Current User Rating Display */}
                    <div className="p-4 bg-slate-50/80 rounded-2xl border border-slate-100 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[1, 2, 3, 4, 5].map((st) => (
                            <Star
                              key={st}
                              className={`w-4 h-4 ${st <= myReview.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
                            />
                          ))}
                          <span className="text-xs font-black text-amber-700 ml-1.5">{myReview.rating}.0</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-400">
                          {myReview.updatedAt || myReview.createdAt ? new Date(myReview.updatedAt || myReview.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }) : 'Hari ini'}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium leading-relaxed italic bg-white p-3 rounded-xl border border-slate-100">
                        &ldquo;{myReview.comment}&rdquo;
                      </p>
                    </div>

                    {/* Edit & Delete Action Buttons */}
                    <div className="flex items-center gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setUserRating(myReview.rating);
                          setUserComment(myReview.comment);
                          setIsEditingReview(true);
                        }}
                        className="flex-1 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl border border-indigo-200 transition-all flex items-center justify-center gap-1.5 shadow-xs hover:scale-[1.01]"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>Edit Ulasan</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteReview(myReview.id)}
                        className="py-2.5 px-3.5 bg-rose-50 hover:bg-rose-100 text-rose-600 font-bold text-xs rounded-xl border border-rose-200 transition-all flex items-center justify-center gap-1.5 shadow-xs hover:scale-[1.01]"
                      >
                        <Trash className="w-3.5 h-3.5" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>
                );
              }

              return (
                <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">
                          {isEditingReview ? 'Edit Ulasan Anda' : 'Beri Rating & Komentar'}
                        </h4>
                        <p className="text-[11px] text-slate-400 font-medium">
                          {isEditingReview ? 'Perbarui ulasan Anda untuk kursus ini' : 'Bantu kami meningkatkan kualitas materi'}
                        </p>
                      </div>
                    </div>
                    {isEditingReview ? (
                      <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full">
                        Mode Edit
                      </span>
                    ) : enrollmentStatus !== 'APPROVED' ? (
                      <span className="text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200/60 px-2 py-0.5 rounded-full">
                        Pratinjau
                      </span>
                    ) : null}
                  </div>

                  {/* Rating Star Selector */}
                  <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100 flex flex-col items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((st) => (
                        <button
                          key={st}
                          type="button"
                          onMouseEnter={() => setReviewHoverStar(st)}
                          onMouseLeave={() => setReviewHoverStar(0)}
                          onClick={() => setUserRating(st)}
                          className="p-1 hover:scale-125 transition-transform focus:outline-none"
                        >
                          <Star className={`w-6 h-6 transition-colors ${(reviewHoverStar || userRating) >= st ? 'fill-amber-400 text-amber-400 drop-shadow-sm' : 'text-slate-200'}`} />
                        </button>
                      ))}
                    </div>
                    <div className="text-xs font-bold text-amber-800 bg-amber-100/70 px-3 py-0.5 rounded-full border border-amber-200/60">
                      {userRating === 5 ? '⭐⭐⭐⭐⭐ Sangat Puas!' :
                       userRating === 4 ? '⭐⭐⭐⭐ Bagus & Jelas' :
                       userRating === 3 ? '⭐⭐⭐ Cukup Baik' :
                       userRating === 2 ? '⭐⭐ Kurang Lengkap' : '⭐ Perlu Perbaikan'}
                    </div>
                  </div>

                  {/* Kata Kunci Cepat */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 mb-1.5 block">Kata kunci cepat:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        { label: 'Materi Jelas 💡', text: 'Materi Jelas 💡' },
                        { label: 'Live Code Keren 🚀', text: 'Live Code Keren 🚀' },
                        { label: 'Mudah Dipahami 👍', text: 'Mudah Dipahami 👍' },
                        { label: 'Rekomendasi ⭐', text: 'Rekomendasi ⭐' }
                      ].map(tag => {
                        const isSelected = userComment.includes(tag.text);
                        return (
                          <button
                            key={tag.label}
                            type="button"
                            onClick={() => {
                              if (!isSelected) {
                                setUserComment(prev => prev ? `${prev} ${tag.text}` : tag.text);
                              } else {
                                setUserComment(prev => prev.replace(tag.text, '').replace(/\s+/g, ' ').trim());
                              }
                            }}
                            className={`px-3 py-1 text-[11px] font-semibold rounded-full border transition-all hover:scale-105 ${
                              isSelected 
                                ? 'bg-indigo-50 border-indigo-300 text-indigo-700 shadow-sm' 
                                : 'bg-white border-slate-200 hover:border-indigo-200 text-slate-600 hover:bg-slate-50'
                            }`}
                          >
                            + {tag.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Form Input */}
                  <form onSubmit={handleSubmitReview} className="space-y-3 pt-1">
                    <textarea
                      value={userComment}
                      onChange={(e) => setUserComment(e.target.value)}
                      placeholder="Tuliskan pengalaman belajar Anda di sini..."
                      rows={3}
                      className="w-full px-3.5 py-2.5 rounded-2xl border border-slate-200 text-xs focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 font-medium bg-white text-slate-800 placeholder:text-slate-400 transition-all leading-relaxed outline-none"
                    />
                    <div className="flex items-center gap-2">
                      {isEditingReview && (
                        <button
                          type="button"
                          onClick={() => {
                            setIsEditingReview(false);
                            setUserComment('');
                            setUserRating(5);
                          }}
                          className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all"
                        >
                          Batal
                        </button>
                      )}
                      <button
                        type="submit"
                        disabled={isSubmittingReview || !userComment.trim()}
                        className="flex-1 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5 active:scale-[0.99]"
                      >
                        {isSubmittingReview ? (
                          <span>Menyimpan...</span>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>{isEditingReview ? 'Simpan Perubahan' : 'Kirim Ulasan & Rating'}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              );
            })()}

            {/* THIS COURSE INCLUDES */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-base font-black text-slate-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-indigo-600" />
                Modul Ini Mencakup:
              </h3>
              <div className="space-y-3.5 text-xs font-semibold text-slate-700">
                {videoLessonsCount > 0 ? (
                  <div className="flex items-center gap-3">
                    <PlayCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>{approxVideoHours} jam video on-demand ({videoLessonsCount} video)</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Code2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{totalLessonsCount} materi interaktif &amp; Live Code</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>{articleLessonsCount > 0 ? articleLessonsCount : totalLessonsCount} artikel &amp; dokumentasi</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{tasksCount} tugas praktek &amp; hands-on</span>
                </div>

                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Akses di Mobile, Tablet, dan TV</span>
                </div>

                <div className="flex items-center gap-3">
                  <Infinity className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Akses seumur hidup penuh (Full lifetime)</span>
                </div>

                <div className="flex items-center gap-3">
                  <Subtitles className="w-4 h-4 text-teal-500 shrink-0" />
                  <span>Closed captions / Subtitle [Auto]</span>
                </div>

                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Sertifikat kelulusan resmi DevGrow</span>
                </div>
              </div>
            </div>

            {/* QUALITY GUARANTEE */}
            <div className="bg-indigo-50/70 border border-indigo-100 rounded-3xl p-5 text-xs text-indigo-900 space-y-2">
              <div className="font-bold flex items-center gap-1.5 text-indigo-700">
                <Sparkles className="w-4 h-4" /> Jaminan Kualitas DevGrow
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Materi diperbarui berkala sesuai standar industri dengan sertifikat kelulusan terverifikasi dan akses seumur hidup.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Access Request Success Popup Modal ── */}
      {showSuccessPopup && (
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
              Permintaan izin akses modul <span className="font-bold text-slate-800 dark:text-slate-200">&ldquo;{moduleData?.title || 'Kursus'}&rdquo;</span> telah berhasil dikirim. Menunggu persetujuan instruktur pengampu.
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
                onClick={() => setShowSuccessPopup(false)}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 active:from-indigo-800 text-white font-black rounded-2xl text-xs sm:text-sm transition-all shadow-lg shadow-indigo-600/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Mengerti, Terima Kasih 👍
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Toast Notification (Pojok Kanan Bawah) ── */}
      {toast.show && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
          <div className={`flex items-center gap-3.5 px-5 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl transition-all duration-300 transform translate-y-0 ${
            toast.type === 'success'
              ? 'bg-slate-900/95 text-white border-emerald-500/40 shadow-emerald-950/40'
              : toast.type === 'error'
                ? 'bg-slate-900/95 text-white border-rose-500/40 shadow-rose-950/40'
                : 'bg-slate-900/95 text-white border-indigo-500/40 shadow-indigo-950/40'
          }`}>
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              toast.type === 'success'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : toast.type === 'error'
                  ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                  : 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30'
            }`}>
              {toast.type === 'success' ? (
                <CheckCircle className="w-5 h-5" />
              ) : toast.type === 'error' ? (
                <X className="w-5 h-5" />
              ) : (
                <Sparkles className="w-5 h-5" />
              )}
            </div>

            <div className="pr-2">
              <h5 className="text-xs font-bold text-slate-200">
                {toast.type === 'success' ? 'Berhasil!' : toast.type === 'error' ? 'Pemberitahuan' : 'Informasi'}
              </h5>
              <p className="text-sm font-semibold text-white">
                {toast.message}
              </p>
            </div>

            <button
              onClick={() => setToast(prev => ({ ...prev, show: false }))}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  SYLLABUS ACCORDION — Bab → Sub Bab → Materi
// ─────────────────────────────────────────────────────────────
function SyllabusAccordion({ syllabus, completedSet, progressPct, enrollmentStatus, id, router, totalLessonsCount }: any) {
  const [openBab, setOpenBab] = useState<Record<string, boolean>>({});
  const [openSubBab, setOpenSubBab] = useState<Record<string, boolean>>({});

  // Initialize: default all chapters closed (tutup semua)
  useEffect(() => {
    if (syllabus.length > 0) {
      const initialOpenBab: Record<string, boolean> = {};
      const initialOpenSubBab: Record<string, boolean> = {};
      syllabus.forEach((bab: any, idx: number) => {
        const babKey = bab.title || String(idx);
        initialOpenBab[babKey] = false;
        (bab.lessons || []).forEach((l: any) => {
          if (l.chapter) {
            initialOpenSubBab[`${babKey}__${l.chapter}`] = false;
          }
        });
      });
      setOpenBab(initialOpenBab);
      setOpenSubBab(initialOpenSubBab);
    }
  }, [syllabus.length]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleToggleAll = (expand: boolean) => {
    const newBab: Record<string, boolean> = {};
    const newSubBab: Record<string, boolean> = {};
    syllabus.forEach((bab: any, idx: number) => {
      const babKey = bab.title || String(idx);
      newBab[babKey] = expand;
      (bab.lessons || []).forEach((l: any) => {
        if (l.chapter) {
          newSubBab[`${babKey}__${l.chapter}`] = expand;
        }
      });
    });
    setOpenBab(newBab);
    setOpenSubBab(newSubBab);
  };

  // Build a flat ordered list for sequential unlock computation
  const allLessons = syllabus.flatMap((mod: any) => mod.lessons || []);
  let firstUncompletedFound = false;

  const totalDoneLessons = allLessons.filter((l: any) => completedSet.has(l.id)).length;

  return (
    <div className="divide-y divide-slate-150">
      {/* Syllabus Header Bar */}
      <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50/50">
        <div>
          <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Silabus Pembelajaran
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
            {syllabus.length} Bab Terstruktur · {totalLessonsCount || allLessons.length} Materi Pembelajaran · {totalDoneLessons} Selesai
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => handleToggleAll(true)}
            className="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 transition-colors"
          >
            Buka Semua
          </button>
          <button
            onClick={() => handleToggleAll(false)}
            className="px-3 py-1.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 transition-colors"
          >
            Tutup Semua
          </button>
        </div>
      </div>

      {/* Chapter List */}
      <div className="p-4 sm:p-6 space-y-4">
        {syllabus.map((bab: any, babIdx: number) => {
          const babLessons: any[] = bab.lessons || [];
          const babDone = babLessons.filter((l: any) => completedSet.has(l.id)).length;
          const babCompleted = babLessons.length > 0 && babDone === babLessons.length;
          const babKey = bab.title || String(babIdx);
          const isBabOpen = openBab[babKey] !== false;
          const babProgressPct = babLessons.length > 0 ? Math.round((babDone / babLessons.length) * 100) : 0;

          // Group lessons by sub-bab (lesson.chapter string)
          const subBabMap: Record<string, any[]> = {};
          for (const lesson of babLessons) {
            const subKey = (lesson.chapter && lesson.chapter !== bab.title) ? lesson.chapter : '__direct__';
            if (!subBabMap[subKey]) subBabMap[subKey] = [];
            subBabMap[subKey].push(lesson);
          }
          const hasSubBabs = Object.keys(subBabMap).some(k => k !== '__direct__');

          return (
            <div
              key={babKey}
              className={`rounded-3xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                babCompleted
                  ? 'border-emerald-200 bg-emerald-50/10'
                  : isBabOpen
                    ? 'border-indigo-200 bg-white ring-2 ring-indigo-500/5'
                    : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {/* Chapter Header */}
              <button
                onClick={() => setOpenBab(prev => ({ ...prev, [babKey]: !isBabOpen }))}
                className="w-full flex items-center gap-4 p-5 sm:p-6 text-left group transition-colors"
              >
                {/* Chapter Number Badge */}
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 shadow-sm transition-all ${
                  babCompleted
                    ? 'bg-emerald-500 text-white shadow-emerald-500/20'
                    : 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-600 group-hover:text-white shadow-indigo-500/10'
                }`}>
                  {babCompleted ? <CheckCircle className="w-5 h-5" /> : `0${babIdx + 1}`}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className={`font-black text-sm sm:text-base transition-colors ${
                      babCompleted ? 'text-emerald-900' : 'text-slate-800 group-hover:text-indigo-900'
                    }`}>
                      {bab.title}
                    </h3>
                    {babCompleted && (
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        ✓ Bab Selesai
                      </span>
                    )}
                  </div>

                  {/* Subtitle & Progress Bar */}
                  <div className="flex items-center gap-3">
                    <p className="text-xs font-semibold text-slate-500">
                      {babDone} / {babLessons.length} Materi Selesai
                      {hasSubBabs ? ` · ${Object.keys(subBabMap).filter(k => k !== '__direct__').length} Sub Bab` : ''}
                    </p>
                    <div className="w-20 h-1.5 bg-slate-100 rounded-full overflow-hidden shrink-0 hidden sm:block">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          babCompleted ? 'bg-emerald-500' : 'bg-indigo-600'
                        }`}
                        style={{ width: `${babProgressPct}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-slate-400 hidden sm:inline">
                      {babProgressPct}%
                    </span>
                  </div>
                </div>

                {/* Chevron */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                  isBabOpen ? 'rotate-180 bg-slate-100 text-slate-700' : 'text-slate-400 group-hover:text-slate-600'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {/* Chapter Content (Lessons & Sub Babs) */}
              {isBabOpen && (
                <div className="p-4 sm:p-6 bg-slate-50/60 border-t border-slate-100 space-y-4">
                  {hasSubBabs ? (
                    <div className="space-y-4">
                      {/* Direct lessons without sub-bab */}
                      {subBabMap['__direct__']?.length > 0 && (
                        <div className="space-y-2">
                          {subBabMap['__direct__'].map((lesson: any) => (
                            <LessonRow
                              key={lesson.id} lesson={lesson} allLessons={allLessons}
                              completedSet={completedSet} progressPct={progressPct}
                              enrollmentStatus={enrollmentStatus} id={id} router={router}
                              firstUncompletedFound={firstUncompletedFound}
                              onFirstUncompleted={() => { firstUncompletedFound = true; }}
                            />
                          ))}
                        </div>
                      )}

                      {/* Sub Bab Groups */}
                      {Object.entries(subBabMap).filter(([k]) => k !== '__direct__').map(([subBabTitle, subLessons], sIdx) => {
                        const sbKey = `${babKey}__${subBabTitle}`;
                        const sbOpen = openSubBab[sbKey] !== false;
                        const sbDone = subLessons.filter((l: any) => completedSet.has(l.id)).length;
                        const sbCompleted = subLessons.length > 0 && sbDone === subLessons.length;

                        return (
                          <div
                            key={sbKey}
                            className={`rounded-2xl border transition-all overflow-hidden bg-white shadow-2xs ${
                              sbCompleted ? 'border-emerald-200' : 'border-slate-200'
                            }`}
                          >
                            {/* Sub Bab Header */}
                            <button
                              onClick={() => setOpenSubBab(prev => ({ ...prev, [sbKey]: !sbOpen }))}
                              className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-colors ${
                                sbCompleted ? 'bg-emerald-50/30' : 'bg-slate-50/70 hover:bg-slate-100/70'
                              }`}
                            >
                              <Folder className={`w-4 h-4 shrink-0 ${sbCompleted ? 'text-emerald-600' : 'text-indigo-500'}`} />
                              <span className={`flex-1 text-xs font-black uppercase tracking-wider ${
                                sbCompleted ? 'text-emerald-900' : 'text-slate-700'
                              }`}>
                                {subBabTitle}
                              </span>
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                                sbCompleted ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                              }`}>
                                {sbDone} / {subLessons.length}
                              </span>
                              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${sbOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Sub Bab Lessons */}
                            {sbOpen && (
                              <div className="p-3 bg-white space-y-2">
                                {subLessons.map((lesson: any) => (
                                  <LessonRow
                                    key={lesson.id} lesson={lesson} allLessons={allLessons}
                                    completedSet={completedSet} progressPct={progressPct}
                                    enrollmentStatus={enrollmentStatus} id={id} router={router}
                                    firstUncompletedFound={firstUncompletedFound}
                                    onFirstUncompleted={() => { firstUncompletedFound = true; }}
                                  />
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {babLessons.map((lesson: any) => (
                        <LessonRow
                          key={lesson.id} lesson={lesson} allLessons={allLessons}
                          completedSet={completedSet} progressPct={progressPct}
                          enrollmentStatus={enrollmentStatus} id={id} router={router}
                          firstUncompletedFound={firstUncompletedFound}
                          onFirstUncompleted={() => { firstUncompletedFound = true; }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LessonRow({ lesson, allLessons, completedSet, progressPct, enrollmentStatus, id, router, firstUncompletedFound, onFirstUncompleted }: any) {
  const isDone = completedSet.has(lesson.id);
  const lessonIndex = allLessons.findIndex((l: any) => l.id === lesson.id);

  let isUnlocked = false;
  if (enrollmentStatus !== 'APPROVED') {
    isUnlocked = false;
  } else if (progressPct >= 100) {
    isUnlocked = true;
  } else if (lessonIndex === 0) {
    isUnlocked = true;
  } else {
    const prevLesson = allLessons[lessonIndex - 1];
    isUnlocked = prevLesson ? completedSet.has(prevLesson.id) : false;
    if (!isDone && !firstUncompletedFound && lessonIndex > 0) {
      const allPrevDone = allLessons.slice(0, lessonIndex).every((l: any) => completedSet.has(l.id));
      if (allPrevDone) { isUnlocked = true; onFirstUncompleted?.(); }
    }
  }
  if (isDone) isUnlocked = true;

  // Resolve type icon & badge
  let typeLabel = 'Materi Teori';
  let typeIcon = <FileText className="w-3.5 h-3.5" />;
  let typeColor = 'bg-blue-50 text-blue-700 border-blue-200';
  if (lesson.type === 'code') {
    typeLabel = 'Live Code Sandbox';
    typeIcon = <Code2 className="w-3.5 h-3.5" />;
    typeColor = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  } else if (lesson.type === 'video') {
    typeLabel = 'Video On-Demand';
    typeIcon = <PlayCircle className="w-3.5 h-3.5" />;
    typeColor = 'bg-rose-50 text-rose-700 border-rose-200';
  } else if (lesson.type === 'quiz') {
    typeLabel = 'Kuis & Asesmen';
    typeIcon = <CheckCircle className="w-3.5 h-3.5" />;
    typeColor = 'bg-amber-50 text-amber-700 border-amber-200';
  }

  return (
    <div
      onClick={() => isUnlocked && router.push(`/dashboard/modules/${id}/lesson/${lesson.id}`)}
      className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl border text-sm transition-all duration-200 group ${
        isDone
          ? 'bg-emerald-50/20 border-emerald-200/80 text-emerald-900 hover:bg-emerald-50/40 cursor-pointer shadow-2xs'
          : isUnlocked
            ? 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300 hover:bg-indigo-50/20 hover:shadow-sm cursor-pointer'
            : 'bg-slate-50/80 border-slate-200/60 text-slate-400 cursor-not-allowed opacity-70'
      }`}
    >
      {/* Icon Indicator */}
      <div className="shrink-0">
        {isDone ? (
          <div className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm shadow-emerald-500/20">
            <CheckCircle className="w-4 h-4" />
          </div>
        ) : isUnlocked ? (
          <div className="w-7 h-7 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white flex items-center justify-center transition-all shadow-sm">
            <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
          </div>
        ) : (
          <div className="w-7 h-7 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center">
            <Lock className="w-3.5 h-3.5" />
          </div>
        )}
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
          <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${typeColor}`}>
            {typeIcon} {typeLabel}
          </span>
          <span className="text-[10px] text-slate-400 font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3" /> ~10-15 mnt
          </span>
        </div>
        <h4 className={`text-xs sm:text-sm font-bold truncate ${
          isDone ? 'text-slate-600 font-semibold' : isUnlocked ? 'text-slate-800 group-hover:text-indigo-600 font-bold' : 'text-slate-400'
        }`}>
          {lesson.title}
        </h4>
      </div>

      {/* Action CTA */}
      <div className="shrink-0">
        {isDone ? (
          <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl">
            Selesai ✓
          </span>
        ) : isUnlocked ? (
          <div className="px-3.5 py-1.5 bg-indigo-600 group-hover:bg-indigo-700 text-white text-xs font-black rounded-xl shadow-xs flex items-center gap-1.5 transition-all">
            Mulai <Play className="w-3 h-3 fill-current" />
          </div>
        ) : (
          <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-xl">
            Terkunci
          </span>
        )}
      </div>
    </div>
  );
}

