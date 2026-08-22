'use client';

import { PlayCircle, FileText, Code2, ArrowLeft, CheckCircle, Search, BarChart, BookOpen, Users, Clock, Plus, Settings, Folder, MessageSquare, Book, MoreHorizontal, Edit, ChevronDown, ChevronUp, AlignLeft, Layout, Database, Globe, BarChart2, User, X, Filter, AlarmClock, Trash, ChevronRight, Play, Server, Smartphone, Lock, Star, Sparkles, GraduationCap, Award, Subtitles, Infinity } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState, use } from 'react';
import { coursesData } from '@/data/lessonData';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardNavbar from '@/components/DashboardNavbar';
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

  const fetchReviews = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${id}/reviews`);
      if (res.ok) {
        const data = await res.json();
        setReviewsData(data);
        const stored = localStorage.getItem('lms_user');
        if (stored) {
          const u = JSON.parse(stored);
          const myReview = data.reviews?.find((r: any) => r.userId === u.id);
          if (myReview) {
            setUserRating(myReview.rating);
            setUserComment(myReview.comment);
          }
        }
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return alert('Silakan login terlebih dahulu untuk memberikan ulasan.');
    if (!userComment.trim()) return alert('Silakan tuliskan komentar ulasan Anda.');
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
        await fetchReviews();
        alert('Terima kasih! Ulasan Anda telah berhasil disimpan.');
      } else {
        alert('Gagal menyimpan ulasan.');
      }
    } catch (err) {
      console.error(err);
      alert('Terjadi kesalahan saat mengirim ulasan.');
    } finally {
      setIsSubmittingReview(false);
    }
  };

  const handleDeleteReview = async (reviewId: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus ulasan ini?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/reviews/${reviewId}`, { method: 'DELETE' });
      if (res.ok) fetchReviews();
    } catch (err) {
      console.error(err);
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

  const courseId = moduleData ? resolveCourseId(moduleData) : 'html';
  const gradient = gradientMap[courseId] || gradientMap.default;

  // ── INSTRUCTOR / ADMIN VIEW ──
  if (role === 'INSTRUCTOR' || role === 'ADMIN') {
    const lessons = (moduleData?.lessons ?? []).slice().sort((a: any, b: any) => a.order - b.order);
    const chapters = (moduleData?.chapters ?? []).slice().sort((a: any, b: any) => a.order - b.order);
    const learningPoints = getLearningPoints(moduleData?.title || '', moduleData?.category || '');
    const instructorName = moduleData?.instructor?.name || 'Bagus Rahmat';
    const lastUpdated = formatLastUpdated(moduleData?.updatedAt);
    const enrolledCount = moduleData?.enrolledStudentsCount ?? moduleData?.totalStudentsCount ?? (moduleData?.enrollments ? moduleData.enrollments.filter((e: any) => e.status === 'APPROVED').length || moduleData.enrollments.length : 1);
    const completedCount = moduleData?.completedStudentsCount ?? (moduleData?.enrollments ? moduleData.enrollments.filter((e: any) => e.progress >= 100).length : 0);
    const avgRating = moduleData?.avgRating || reviewsData.avgRating || 4.9;
    const totalReviews = reviewsData.totalReviews || moduleData?.totalRatings || 12;
    const videoLessonsCount = moduleData?.videoLessonsCount ?? lessons.filter((l: any) => l.type === 'video').length;
    const articleLessonsCount = moduleData?.articleLessonsCount ?? lessons.filter((l: any) => l.type !== 'video').length;
    const approxVideoHours = (videoLessonsCount > 0 ? (videoLessonsCount * 0.35).toFixed(1) : '16.5');
    const tasksCount = moduleData?.tasksCount ?? moduleData?.tasks?.length ?? 3;

    return (
      <div className="min-h-screen bg-[#F8FAFC]">
        <DashboardNavbar />
        <div className="p-6 md:p-10 max-w-5xl mx-auto space-y-8">
          {/* Top Back & Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <button onClick={() => router.push('/dashboard/manage-modules')} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Kembali ke Manajemen Kursus
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
          <div className={`bg-gradient-to-r ${gradient} rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden`}>
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5">
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
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl">
                {moduleData?.description || 'Kuasai fondasi utama dan lanjutan dengan konsep terstruktur, live coding playground, serta sertifikat kelulusan resmi.'}
              </p>

              {/* Key Metadata Stats Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-4 text-xs sm:text-sm font-semibold text-white/90">
                {/* Rating */}
                <div className="flex items-center gap-1.5 bg-amber-400/20 backdrop-blur-sm border border-amber-300/40 px-2.5 py-1 rounded-xl">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span className="font-black text-white">{avgRating}</span>
                  <span className="text-white/80">({totalReviews} rating)</span>
                </div>

                {/* Enrolled Students (Order) */}
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-xl">
                  <Users className="w-4 h-4 text-emerald-200" />
                  <span><strong>{enrolledCount}</strong> siswa terdaftar (Order)</span>
                </div>

                {/* Completed Students */}
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-xl">
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
          </div>

          {/* ── SECTION 1: WHAT YOU'LL LEARN ── */}
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

          {/* ── SECTION 2: THIS COURSE INCLUDES ── */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              Modul Ini Mencakup (This course includes):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-slate-700">
              {videoLessonsCount > 0 ? (
                <div className="flex items-center gap-3">
                  <PlayCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span>{approxVideoHours} jam video pembelajaran on-demand ({videoLessonsCount} video)</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Code2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{lessons.length} materi pembelajaran interaktif &amp; Live Coding Editor</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-blue-500 shrink-0" />
                <span>{articleLessonsCount > 0 ? articleLessonsCount : lessons.length} artikel &amp; dokumentasi materi terstruktur</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{tasksCount} tugas praktek &amp; asesmen proyek hands-on</span>
              </div>

              <div className="flex items-center gap-3">
                <Smartphone className="w-4 h-4 text-purple-500 shrink-0" />
                <span>Akses di perangkat Mobile, Tablet, dan TV (Access on mobile and TV)</span>
              </div>

              <div className="flex items-center gap-3">
                <Infinity className="w-4 h-4 text-cyan-500 shrink-0" />
                <span>Akses seumur hidup penuh (Full lifetime access)</span>
              </div>

              <div className="flex items-center gap-3">
                <Subtitles className="w-4 h-4 text-teal-500 shrink-0" />
                <span>Closed captions / Teks terjemahan otomatis [Auto]</span>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Sertifikat kelulusan resmi DevGrow (Certificate of completion)</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Total Materi', value: lessons.length, icon: BookOpen, color: 'text-indigo-600 bg-indigo-50' },
              { label: 'Total Bab', value: chapters.length, icon: Folder, color: 'text-purple-600 bg-purple-50' },
              { label: 'Siswa Selesai', value: completedCount, icon: GraduationCap, color: 'text-emerald-600 bg-emerald-50' },
            ].map(s => (
              <div key={s.label} className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-4 shadow-sm">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color} shrink-0`}><s.icon className="w-5 h-5" /></div>
                <div><p className="text-2xl font-black text-slate-800">{s.value}</p><p className="text-xs text-slate-500 font-medium">{s.label}</p></div>
              </div>
            ))}
          </div>

          {/* Lessons List / Content Builder */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
            <h2 className="font-black text-slate-800 text-lg">Daftar Bab & Materi</h2>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{lessons.length} materi</span>
          </div>
          {lessons.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
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
                        <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${lesson.type === 'code' ? 'bg-emerald-100 text-emerald-700' : lesson.type === 'video' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>{lesson.type}</span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => router.push(`/dashboard/modules/${id}/lesson/${lesson.id}/edit`)} className="flex items-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-bold transition-colors">
                          <Edit className="w-3.5 h-3.5" /> Edit Isi
                        </button>
                        <button onClick={() => handleDeleteLesson(lesson.id)} className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg transition-colors">
                          <Trash className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )})}

              {/* Unmapped fallback */}
              {(() => {
                const mappedLessonIds = new Set(chapters.flatMap((c: any) => lessons.filter((l: any) => l.chapterId === c.id || l.chapter === c.title).map((l: any) => l.id)));
                const unmapped = lessons.filter((l: any) => !mappedLessonIds.has(l.id));
                if (unmapped.length === 0) return null;
                
                const grouped = unmapped.reduce((acc: any, lesson: any) => {
                  const chap = lesson.chapter || 'Bab Umum';
                  if (!acc[chap]) acc[chap] = [];
                  acc[chap].push(lesson);
                  return acc;
                }, {});

                return Object.entries(grouped).map(([chapTitle, chapLessons]: [string, any]) => (
                  <div key={chapTitle}>
                    <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 border-b border-slate-100 group/chap">
                      <Folder className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="text-xs font-black text-slate-600 uppercase tracking-wider">{chapTitle}</span>
                      <span className="text-xs text-slate-400 font-medium ml-auto">{chapLessons.length} materi</span>
                    </div>
                    {chapLessons.map((lesson: any, i: number) => (
                      <div key={lesson.id} className="flex items-center gap-4 px-6 py-4 hover:bg-slate-50 transition-colors group border-b border-slate-100 last:border-b-0">
                        <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-xs shrink-0">{i + 1}</div>
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${lesson.type === 'code' ? 'bg-emerald-50 text-emerald-600' : lesson.type === 'video' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>
                          {lesson.type === 'code' ? <Code2 className="w-3.5 h-3.5" /> : lesson.type === 'video' ? <PlayCircle className="w-3.5 h-3.5" /> : <FileText className="w-3.5 h-3.5" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-800 text-sm truncate">{lesson.title}</h4>
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md ${lesson.type === 'code' ? 'bg-emerald-100 text-emerald-700' : lesson.type === 'video' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'}`}>{lesson.type}</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button onClick={() => router.push(`/dashboard/modules/${id}/lesson/${lesson.id}/edit`)} className="flex items-center gap-1.5 px-3 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-600 rounded-lg text-xs font-bold transition-colors">
                            <Edit className="w-3.5 h-3.5" /> Edit Isi
                          </button>
                          <button onClick={() => handleDeleteLesson(lesson.id)} className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-lg transition-colors">
                            <Trash className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ));
              })()}
              <div className="px-6 py-4 border-t border-slate-100">
                <button onClick={() => setIsAddLessonModalOpen(true)} className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-slate-300 rounded-xl text-sm font-bold text-slate-400 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-all">
                  <Plus className="w-4 h-4" /> Tambah Bab / Materi Baru
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 flex items-start gap-3 bg-blue-50 border border-blue-100 rounded-2xl px-5 py-4">
          <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">i</div>
          <p className="text-sm text-blue-700 font-medium leading-relaxed">Klik <strong>Edit Isi</strong> pada materi untuk mengubah judul, teori, dan kode dasar yang akan dilihat oleh siswa. Semua perubahan tersimpan langsung ke database.</p>
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
      </div>
    );
  }

  // ── STUDENT VIEW ──
  const chapters = (moduleData?.chapters ?? []).slice().sort((a: any, b: any) => a.order - b.order);
  const lessons = (moduleData?.lessons ?? []).slice().sort((a: any, b: any) => a.order - b.order);

  // Group lessons by chapters explicitly defined
  let syllabus = chapters.map((chapter: any) => {
    const chapterLessons = lessons.filter((l: any) => l.chapterId === chapter.id || l.chapter === chapter.title);
    return { title: chapter.title, lessons: chapterLessons };
  });

  // Find any lessons that weren't caught by the chapter mapping
  const mappedLessonIds = new Set(syllabus.flatMap((chap: any) => chap.lessons.map((l: any) => l.id)));
  const unmappedLessons = lessons.filter((l: any) => !mappedLessonIds.has(l.id));

  // Fallback for unmapped lessons or if chapters don't exist yet
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

  const totalLessonsCount = moduleData?.lessons?.length || 0;

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
  const instructorName = moduleData?.instructor?.name || 'Bagus Rahmat';
  const lastUpdated = formatLastUpdated(moduleData?.updatedAt);
  const enrolledCount = moduleData?.enrolledStudentsCount ?? moduleData?.totalStudentsCount ?? (moduleData?.enrollments ? moduleData.enrollments.filter((e: any) => e.status === 'APPROVED').length || moduleData.enrollments.length : 1);
  const completedCount = moduleData?.completedStudentsCount ?? (moduleData?.enrollments ? moduleData.enrollments.filter((e: any) => e.progress >= 100).length : 0);
  const avgRating = moduleData?.avgRating || reviewsData.avgRating || 4.9;
  const totalReviews = reviewsData.totalReviews || moduleData?.totalRatings || 12;
  const videoLessonsCount = moduleData?.videoLessonsCount ?? lessons.filter((l: any) => l.type === 'video').length;
  const articleLessonsCount = moduleData?.articleLessonsCount ?? lessons.filter((l: any) => l.type !== 'video').length;
  const approxVideoHours = (videoLessonsCount > 0 ? (videoLessonsCount * 0.35).toFixed(1) : '16.5');
  const tasksCount = moduleData?.tasksCount ?? moduleData?.tasks?.length ?? 3;

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button onClick={() => router.back()} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6 font-medium transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke Katalog Kursus
        </button>

        {/* Hero Banner Header */}
        <div className={`bg-gradient-to-r ${gradient} rounded-3xl p-6 sm:p-10 text-white mb-8 shadow-xl relative overflow-hidden`}>
          {/* Subtle Ambient Background */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-8">
            <div className="flex-1 space-y-4">
              {/* Badges Row */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-black tracking-wide uppercase border border-white/30">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" /> Access 28,000+ top-rated courses with DevGrow [Personal Plan]
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider bg-black/25 px-3 py-1 rounded-full border border-white/10">
                  {moduleData?.category || 'Programming'}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-4xl font-black leading-tight tracking-tight text-white drop-shadow-sm">
                {moduleData?.title || 'Kursus Pembelajaran'}
              </h1>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-3xl">
                {moduleData?.description || 'Pelajari konsep fundamental dan lanjutan dengan kurikulum terstruktur, live coding playground, serta sertifikat kelulusan resmi.'}
              </p>

              {/* Key Metadata Stats Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2.5 gap-x-4 text-xs sm:text-sm font-semibold text-white/90">
                {/* Rating */}
                <div className="flex items-center gap-1.5 bg-amber-400/20 backdrop-blur-sm border border-amber-300/40 px-2.5 py-1 rounded-xl">
                  <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  <span className="font-black text-white">{avgRating}</span>
                  <span className="text-white/80">({totalReviews} rating)</span>
                </div>

                {/* Enrolled Students (Order) */}
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-xl">
                  <Users className="w-4 h-4 text-emerald-200" />
                  <span><strong>{enrolledCount}</strong> siswa terdaftar</span>
                </div>

                {/* Completed Students */}
                <div className="flex items-center gap-1.5 bg-white/15 backdrop-blur-sm border border-white/20 px-2.5 py-1 rounded-xl">
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

            {/* Action CTA & Progress Box */}
            <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-3 bg-black/20 backdrop-blur-md border border-white/20 p-5 sm:p-6 rounded-3xl min-w-[240px]">
              {progressPct > 0 && (
                <div className="w-full text-center mb-1">
                  <div className={`text-3xl font-black mb-1 ${progressPct >= 100 ? 'text-emerald-300 drop-shadow-lg' : 'text-white'}`}>
                    {progressPct}%
                  </div>
                  <div className="text-xs text-white/75 mb-2 font-bold">Progress Belajar Anda</div>
                  <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-700 ${progressPct >= 100 ? 'bg-emerald-300' : 'bg-white'}`} style={{ width: `${progressPct}%` }} />
                  </div>
                </div>
              )}

              {/* Completed Badge */}
              {progressPct >= 100 && (
                <div className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-400/30 border border-emerald-300/50 text-white font-black rounded-2xl text-xs backdrop-blur-sm shadow-sm">
                  <Award className="w-4 h-4 text-emerald-200" />
                  🎉 Kursus Telah Selesai!
                </div>
              )}

              {enrollmentStatus === 'NONE' && (
                <button onClick={handleEnroll} disabled={enrolling} className="w-full px-8 py-3.5 bg-white text-indigo-700 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-lg hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-2 text-sm">
                  <Lock className="w-4 h-4 text-indigo-600" />
                  {enrolling ? 'Mengirim Izin...' : 'Minta Izin Akses'}
                </button>
              )}

              {enrollmentStatus === 'PENDING' && (
                <div className="w-full px-5 py-3.5 bg-amber-500/30 border border-amber-300/40 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 backdrop-blur-sm text-center">
                  <Clock className="w-4 h-4 animate-spin shrink-0" /> Menunggu Persetujuan Instruktur
                </div>
              )}

              {enrollmentStatus === 'APPROVED' && (
                <button onClick={handleStart} className="w-full px-8 py-3.5 bg-white text-emerald-700 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-lg hover:scale-105 flex items-center justify-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  {progressPct >= 100 ? '📖 Pelajari Ulang' : progressPct > 0 ? 'Lanjutkan Belajar →' : 'Mulai Belajar Sekarang →'}
                </button>
              )}

              {enrollmentStatus === 'REJECTED' && (
                <button onClick={handleEnroll} disabled={enrolling} className="w-full px-6 py-3.5 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md">
                  ❌ Ditolak · Ajukan Ulang
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Enrollment Status Notice Banner */}
        {role === 'STUDENT' && enrollmentStatus === 'PENDING' && (
          <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-6 mb-8 flex items-center gap-4 text-amber-900 shadow-sm animate-fadeIn">
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
          <div className="bg-rose-50 border-2 border-rose-200 rounded-3xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-rose-900 shadow-sm animate-fadeIn">
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
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-6 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-indigo-900 shadow-sm animate-fadeIn">
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

        {/* ── SECTION 1: WHAT YOU'LL LEARN ── */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 mb-8 shadow-sm">
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

        {/* ── SECTION 2: THIS COURSE INCLUDES ── */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-8 shadow-sm">
          <h3 className="text-lg font-black text-slate-800 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-600" />
            Modul Ini Mencakup (This course includes):
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-semibold text-slate-700">
            {videoLessonsCount > 0 ? (
              <div className="flex items-center gap-3">
                <PlayCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                <span>{approxVideoHours} jam video pembelajaran on-demand ({videoLessonsCount} video)</span>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Code2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>{totalLessonsCount} materi pembelajaran interaktif &amp; Live Coding Editor</span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-blue-500 shrink-0" />
              <span>{articleLessonsCount > 0 ? articleLessonsCount : totalLessonsCount} artikel &amp; dokumentasi materi terstruktur</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{tasksCount} tugas praktek &amp; asesmen proyek hands-on</span>
            </div>

            <div className="flex items-center gap-3">
              <Smartphone className="w-4 h-4 text-purple-500 shrink-0" />
              <span>Akses di perangkat Mobile, Tablet, dan TV (Access on mobile and TV)</span>
            </div>

            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-cyan-500 shrink-0" />
              <span>Akses seumur hidup penuh (Full lifetime access)</span>
            </div>

            <div className="flex items-center gap-3">
              <Subtitles className="w-4 h-4 text-teal-500 shrink-0" />
              <span>Closed captions / Teks terjemahan otomatis [Auto]</span>
            </div>

            <div className="flex items-center gap-3">
              <Award className="w-4 h-4 text-rose-500 shrink-0" />
              <span>Sertifikat kelulusan resmi DevGrow (Certificate of completion)</span>
            </div>
          </div>
        </div>

        {/* ── SECTION 3: SYLLABUS ── */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black text-slate-800">Silabus Pembelajaran</h2>
              <p className="text-sm text-slate-500 mt-1">{syllabus.length} bab · {totalLessonsCount} materi</p>
            </div>
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Kurikulum Terverifikasi</span>
          </div>
          <SyllabusAccordion
            syllabus={syllabus}
            completedSet={completedSet}
            progressPct={progressPct}
            enrollmentStatus={enrollmentStatus}
            id={id}
            router={router}
          />
        </div>

        {/* ── SECTION 4: RATINGS & REVIEWS ── */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-xl font-black text-slate-800 flex items-center gap-2">
                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                Ulasan &amp; Rating Kursus
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Rating rata-rata <strong className="text-slate-800">{avgRating} dari 5</strong> berdasarkan {totalReviews} ulasan siswa.
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 px-4 py-2 rounded-2xl">
              <span className="text-2xl font-black text-amber-700">{avgRating}</span>
              <div className="flex text-amber-400">
                {[1, 2, 3, 4, 5].map(st => (
                  <Star key={st} className={`w-4 h-4 ${st <= Math.round(avgRating) ? 'fill-amber-400' : 'text-slate-300'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Add Review Form (If Student is Approved) */}
          {role === 'STUDENT' && enrollmentStatus === 'APPROVED' && (
            <form onSubmit={handleSubmitReview} className="mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <h4 className="text-sm font-bold text-slate-800 mb-3">Tulis Ulasan Anda untuk Kursus Ini:</h4>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold text-slate-600">Rating:</span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((st) => (
                    <button
                      key={st}
                      type="button"
                      onMouseEnter={() => setReviewHoverStar(st)}
                      onMouseLeave={() => setReviewHoverStar(0)}
                      onClick={() => setUserRating(st)}
                      className="p-1 hover:scale-110 transition-transform"
                    >
                      <Star className={`w-6 h-6 ${(reviewHoverStar || userRating) >= st ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                    </button>
                  ))}
                </div>
                <span className="text-xs font-bold text-amber-600 ml-2">{userRating} / 5 Bintang</span>
              </div>
              <textarea
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                placeholder="Bagikan pengalaman belajar Anda, materi yang paling berkesan, atau saran untuk instruktur..."
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium mb-3 bg-white"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmittingReview}
                  className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl transition-all shadow-md disabled:opacity-60"
                >
                  {isSubmittingReview ? 'Mengirim...' : 'Kirim Ulasan'}
                </button>
              </div>
            </form>
          )}

          {/* Reviews List */}
          {reviewsData.reviews && reviewsData.reviews.length > 0 ? (
            <div className="space-y-4">
              {reviewsData.reviews.map((rev: any) => (
                <div key={rev.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-black flex items-center justify-center shrink-0 text-sm">
                    {rev.user?.name ? rev.user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-bold text-slate-800 text-sm">{rev.user?.name || 'Siswa DevGrow'}</h4>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {rev.createdAt ? new Date(rev.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' }) : 'Baru saja'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((st) => (
                        <Star key={st} className={`w-3.5 h-3.5 ${st <= rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {rev.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-400 text-xs sm:text-sm font-medium">
              Belum ada ulasan untuk modul ini. Jadilah siswa pertama yang memberikan ulasan! ⭐
            </div>
          )}
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
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
//  SYLLABUS ACCORDION — Bab → Sub Bab → Materi
// ─────────────────────────────────────────────────────────────
function SyllabusAccordion({ syllabus, completedSet, progressPct, enrollmentStatus, id, router }: any) {
  const [openBab, setOpenBab] = useState<Record<string, boolean>>({});
  const [openSubBab, setOpenSubBab] = useState<Record<string, boolean>>({});

  // Initialize: open first bab and first sub-bab by default
  useEffect(() => {
    if (syllabus.length > 0) {
      const firstBab = syllabus[0]?.title || '0';
      setOpenBab({ [firstBab]: true });
      const firstBabLessons: any[] = syllabus[0]?.lessons || [];
      const firstSubBab = firstBabLessons[0]?.chapter || firstBab;
      setOpenSubBab({ [`${firstBab}__${firstSubBab}`]: true });
    }
  }, [syllabus.length]); // eslint-disable-line react-hooks/exhaustive-deps

  // Build a flat ordered list for sequential unlock computation
  const allLessons = syllabus.flatMap((mod: any) => mod.lessons || []);
  let firstUncompletedFound = false;

  return (
    <div className="divide-y divide-slate-150">
      {syllabus.map((bab: any, babIdx: number) => {
        const babLessons: any[] = bab.lessons || [];
        const babDone = babLessons.filter((l: any) => completedSet.has(l.id)).length;
        const babCompleted = babLessons.length > 0 && babDone === babLessons.length;
        const babKey = bab.title || String(babIdx);
        const isBabOpen = openBab[babKey] !== false; // default open

        // Group lessons by sub-bab (lesson.chapter string, if different from bab title use it as sub-bab)
        const subBabMap: Record<string, any[]> = {};
        for (const lesson of babLessons) {
          const subKey = (lesson.chapter && lesson.chapter !== bab.title) ? lesson.chapter : '__direct__';
          if (!subBabMap[subKey]) subBabMap[subKey] = [];
          subBabMap[subKey].push(lesson);
        }
        const hasSubBabs = Object.keys(subBabMap).some(k => k !== '__direct__');

        return (
          <div key={babKey} className="bg-white/80 backdrop-blur-sm transition-colors duration-200">
            {/* ── BAB HEADER ── */}
            <button
              onClick={() => setOpenBab(prev => ({ ...prev, [babKey]: !isBabOpen }))}
              className="w-full flex items-center gap-4 p-6 hover:bg-slate-50/50 transition-all text-left group border-b border-slate-100"
            >
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-extrabold text-sm shrink-0 transition-all shadow-sm ${
                babCompleted ? 'bg-emerald-100 text-emerald-700 shadow-emerald-100/30' : 'bg-indigo-50 text-indigo-700 group-hover:bg-indigo-100 shadow-indigo-100/10'
              }`}>
                {babCompleted ? (
                  <CheckCircle className="w-5 h-5 text-emerald-600" />
                ) : (babIdx + 1)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className={`font-black text-base transition-colors ${babCompleted ? 'text-emerald-800' : 'text-slate-800 group-hover:text-indigo-900'}`}>{bab.title}</h3>
                  {babCompleted && (
                    <span className="flex items-center gap-1 text-[9px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                      Completed
                    </span>
                  )}
                </div>
                <p className={`text-xs mt-1 font-semibold ${babCompleted ? 'text-emerald-600' : 'text-slate-400'}`}>
                  {babDone} / {babLessons.length} Materi Selesai {hasSubBabs ? `· ${Object.keys(subBabMap).filter(k => k !== '__direct__').length} Sub Bab` : ''}
                </p>
              </div>
              <ChevronDown className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:text-slate-600 ${isBabOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* ── BAB CONTENT ── */}
            {isBabOpen && (
              <div className="p-4 bg-slate-50/40">
                {hasSubBabs ? (
                  // 3-level: Bab → Sub Bab → Materi
                  <div className="space-y-3">
                    {/* Direct lessons (no sub-bab label) */}
                    {subBabMap['__direct__']?.length > 0 && (
                      <div className="mx-2 space-y-1">
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
                    {/* Sub-bab groups */}
                    {Object.entries(subBabMap).filter(([k]) => k !== '__direct__').map(([subBabTitle, subLessons], sIdx) => {
                      const sbKey = `${babKey}__${subBabTitle}`;
                      const sbOpen = openSubBab[sbKey] !== false; // default open
                      const sbDone = subLessons.filter((l: any) => completedSet.has(l.id)).length;
                      const sbCompleted = subLessons.length > 0 && sbDone === subLessons.length;
                      return (
                        <div key={sbKey} className="mx-2 border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-all duration-300">
                          {/* Sub Bab Header */}
                          <button
                            onClick={() => setOpenSubBab(prev => ({ ...prev, [sbKey]: !sbOpen }))}
                            className={`w-full flex items-center gap-3 px-5 py-3.5 text-left transition-colors group/sb ${
                              sbCompleted ? 'bg-emerald-50/20 hover:bg-emerald-50/40' : 'bg-slate-50/50 hover:bg-slate-50'
                            }`}
                          >
                            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-sm ${sbCompleted ? 'bg-emerald-100' : 'bg-indigo-50'}`}>
                              {sbCompleted ? (
                                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                              ) : <span className="text-[10px] font-extrabold text-indigo-600">{sIdx + 1}</span>}
                            </div>
                            <span className={`flex-1 text-xs font-black uppercase tracking-wider ${sbCompleted ? 'text-emerald-800' : 'text-slate-600 group-hover/sb:text-indigo-900'}`}>{subBabTitle}</span>
                            <span className={`text-[10px] font-bold mr-1 px-2 py-0.5 rounded-full ${sbCompleted ? 'bg-emerald-100/60 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>{sbDone}/{subLessons.length}</span>
                            <ChevronDown className={`w-4 h-4 shrink-0 text-slate-400 transition-transform duration-350 ${sbOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {/* Sub Bab Lessons */}
                          {sbOpen && (
                            <div className="bg-white/80 p-3 space-y-1">
                              {subLessons.map((lesson: any) => (
                                <LessonRow
                                  key={lesson.id} lesson={lesson} allLessons={allLessons}
                                  completedSet={completedSet} progressPct={progressPct}
                                  enrollmentStatus={enrollmentStatus} id={id} router={router}
                                  firstUncompletedFound={firstUncompletedFound}
                                  onFirstUncompleted={() => { firstUncompletedFound = true; }}
                                  indent
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  // 2-level: Bab → Materi (no sub-bab)
                  <div className="mx-2 space-y-1">
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
  );
}

function LessonRow({ lesson, allLessons, completedSet, progressPct, enrollmentStatus, id, router, firstUncompletedFound, onFirstUncompleted, indent }: any) {
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

  // Resolve type icon & color
  let typeIcon = <FileText className="w-3.5 h-3.5" />;
  let typeColor = 'bg-amber-50 text-amber-600 border-amber-200';
  if (lesson.type === 'code') {
    typeIcon = <Code2 className="w-3.5 h-3.5" />;
    typeColor = 'bg-emerald-50 text-emerald-600 border-emerald-200';
  } else if (lesson.type === 'video') {
    typeIcon = <PlayCircle className="w-3.5 h-3.5" />;
    typeColor = 'bg-rose-50 text-rose-600 border-rose-200';
  }

  return (
    <div
      onClick={() => isUnlocked && router.push(`/dashboard/modules/${id}/lesson/${lesson.id}`)}
      className={`flex items-center gap-4 px-4 py-3.5 my-1.5 rounded-2xl border text-sm transition-all duration-300 group ${indent ? 'ml-3' : ''}
        ${isDone
          ? 'bg-emerald-50/20 border-emerald-100/70 text-emerald-800 hover:bg-emerald-50/30 hover:border-emerald-200 hover:shadow-md cursor-pointer'
          : isUnlocked
            ? 'bg-white border-slate-200 text-slate-700 hover:bg-indigo-50/30 hover:border-indigo-200 hover:text-indigo-900 hover:shadow-md cursor-pointer hover:scale-[1.005]'
            : 'bg-slate-50/50 border-slate-100 text-slate-400 cursor-not-allowed opacity-60'
        }`}
    >
      {/* Check/Unchecked/Lock circle */}
      <div className="shrink-0">
        {isDone ? (
          <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-sm shadow-emerald-500/20">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
        ) : isUnlocked ? (
          <div className="w-6 h-6 rounded-full border-2 border-indigo-400 group-hover:border-indigo-600 group-hover:bg-indigo-50 flex items-center justify-center transition-all">
            <div className="w-2 h-2 bg-indigo-500 rounded-full scale-0 group-hover:scale-100 transition-transform" />
          </div>
        ) : (
          <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
          </div>
        )}
      </div>

      {/* Lesson Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md border ${typeColor} flex items-center gap-1`}>
            {typeIcon} {lesson.type || 'theory'}
          </span>
          {isDone && (
            <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
              Selesai
            </span>
          )}
        </div>
        <h4 className={`text-sm font-bold truncate transition-colors ${
          isDone ? 'line-through text-slate-400' : 'text-slate-800 group-hover:text-indigo-900'
        }`}>
          {lesson.title}
        </h4>
      </div>

      {/* Action Indicator */}
      <div className="shrink-0 transition-all duration-300 group-hover:translate-x-1">
        {isDone ? (
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">Pelajari Ulang</span>
        ) : isUnlocked ? (
          <div className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded-xl group-hover:bg-indigo-700 shadow-md shadow-indigo-600/10 flex items-center gap-1 transition-all">
            Mulai <Play className="w-3 h-3 fill-current" />
          </div>
        ) : (
          <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">Terkunci</span>
        )}
      </div>
    </div>
  );
}

