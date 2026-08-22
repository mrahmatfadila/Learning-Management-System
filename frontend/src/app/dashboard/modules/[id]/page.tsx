'use client';

import { PlayCircle, FileText, Code2, ArrowLeft, CheckCircle, Search, BarChart, BookOpen, Users, Clock, Plus, Settings, Folder, MessageSquare, Book, MoreHorizontal, Edit, ChevronDown, ChevronUp, AlignLeft, Layout, Database, Globe, BarChart2, User, X, Filter, AlarmClock, Trash, ChevronRight, Play, Server, Smartphone, Lock, Star } from 'lucide-react';
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
      if (res.ok) setEnrollmentStatus('PENDING');
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

  // ── INSTRUCTOR / ADMIN VIEW ──
  if (role === 'INSTRUCTOR' || role === 'ADMIN') {
    const lessons = (moduleData?.lessons ?? []).slice().sort((a: any, b: any) => a.order - b.order);
    const chapters = (moduleData?.chapters ?? []).slice().sort((a: any, b: any) => a.order - b.order);

    return (
      <div className="p-6 md:p-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <button onClick={() => router.push('/dashboard/manage-modules')} className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 hover:text-indigo-600 transition-colors shadow-sm shrink-0">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-0.5">Content Builder</div>
              <h1 className="text-2xl font-black text-slate-800">{moduleData?.title || 'Loading...'}</h1>
              <p className="text-sm text-slate-500">{moduleData?.category}{moduleData?.description && ` · ${moduleData.description.slice(0, 70)}...`}</p>
            </div>
          </div>
          <button onClick={() => setIsAddLessonModalOpen(true)} className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md shadow-indigo-200 text-sm shrink-0 transition-all">
            <Plus className="w-4 h-4" /> Tambah Materi
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Materi', value: lessons.length, icon: BookOpen, color: 'text-indigo-600 bg-indigo-50' },
            { label: 'Total Bab', value: chapters.length, icon: Folder, color: 'text-purple-600 bg-purple-50' },
            { label: 'Tipe Reading', value: lessons.filter((l: any) => l.type === 'reading').length, icon: FileText, color: 'text-amber-600 bg-amber-50' },
          ].map(s => (
            <div key={s.label} className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-4 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${s.color} shrink-0`}><s.icon className="w-5 h-5" /></div>
              <div><p className="text-2xl font-black text-slate-800">{s.value}</p><p className="text-xs text-slate-500 font-medium">{s.label}</p></div>
            </div>
          ))}
        </div>

        {/* Lessons List */}
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
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <div className="bg-white rounded-[24px] w-full max-w-lg shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
                <h2 className="text-lg font-black text-slate-800">Tambah Materi Baru</h2>
                <button onClick={() => setIsAddLessonModalOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"><X className="w-5 h-5" /></button>
              </div>
              <form onSubmit={handleCreateLesson} className="p-6 space-y-5">
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

  const courseId = moduleData ? resolveCourseId(moduleData) : 'html';
  
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

  const gradientMap: Record<string, string> = {
    html: 'from-orange-500 to-pink-500', css: 'from-blue-500 to-teal-400',
    javascript: 'from-amber-400 to-orange-500', php: 'from-indigo-500 to-purple-500',
    mysql: 'from-teal-500 to-cyan-500', git: 'from-red-500 to-orange-500',
    mobile: 'from-emerald-500 to-green-500', cisco: 'from-cyan-500 to-indigo-400',
    default: 'from-violet-500 to-fuchsia-500'
  };
  const gradient = gradientMap[courseId] || gradientMap.default;

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

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <DashboardNavbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Back */}
        <button onClick={() => router.back()} className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-700 mb-6 font-medium">
          <ArrowLeft className="w-4 h-4" /> Kembali
        </button>

        {/* Hero Banner */}
        <div className={`bg-gradient-to-r ${gradient} rounded-3xl p-8 text-white mb-8 shadow-xl`}>
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">{moduleData?.category || 'Programming'}</span>
              <h1 className="text-3xl font-black mb-3 leading-tight">{moduleData?.title || 'Course'}</h1>
              <p className="text-white/80 text-sm leading-relaxed mb-4">{moduleData?.description || 'Pelajari materi ini dan tingkatkan skill Anda.'}</p>
              <div className="flex flex-wrap gap-4 text-sm font-semibold">
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> {totalLessonsCount} Materi</span>
                <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> Semua Level</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Sertifikat</span>
              </div>
            </div>
            <div className="w-full md:w-auto flex flex-col items-center gap-3">
              {progressPct > 0 && (
                <div className="w-full text-center">
                  <div className={`text-3xl font-black mb-1 ${progressPct >= 100 ? 'text-white drop-shadow-lg' : ''}`}>{progressPct}%</div>
                  <div className="text-xs text-white/70 mb-2">Progress Belajar</div>
                  <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-700 ${progressPct >= 100 ? 'bg-emerald-300' : 'bg-white'}`} style={{ width: `${progressPct}%` }} />
                  </div>
                </div>
              )}
              {/* Completed Badge */}
              {progressPct >= 100 && (
                <div className="flex items-center gap-2 px-5 py-2.5 bg-emerald-400/30 border border-emerald-300/50 text-white font-black rounded-xl text-sm backdrop-blur-sm">
                  <svg className="w-5 h-5 text-emerald-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                  🎉 Kursus Selesai!
                </div>
              )}
              {enrollmentStatus === 'NONE' && (
                <button onClick={handleEnroll} disabled={enrolling} className="px-8 py-3.5 bg-white text-indigo-700 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-lg hover:scale-105 disabled:opacity-50 flex items-center gap-2 text-sm">
                  <Lock className="w-4 h-4 text-indigo-600" />
                  {enrolling ? 'Mengirim Izin...' : 'Minta Izin Akses'}
                </button>
              )}
              {enrollmentStatus === 'PENDING' && (
                <div className="px-6 py-3 bg-amber-500/30 border border-amber-300/40 text-white font-bold rounded-2xl text-sm flex items-center gap-2 backdrop-blur-sm">
                  <Clock className="w-4 h-4 animate-spin" /> Menunggu Persetujuan Instruktur
                </div>
              )}
              {enrollmentStatus === 'APPROVED' && (
                <button onClick={handleStart} className="px-8 py-3.5 bg-white text-emerald-700 font-black rounded-2xl hover:bg-slate-50 transition-all shadow-lg hover:scale-105 flex items-center gap-2 text-sm">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  {progressPct >= 100 ? '📖 Pelajari Ulang' : progressPct > 0 ? 'Lanjutkan Belajar →' : 'Mulai Belajar →'}
                </button>
              )}
              {enrollmentStatus === 'REJECTED' && (
                <button onClick={handleEnroll} disabled={enrolling} className="px-6 py-3 bg-rose-500 hover:bg-rose-600 text-white font-bold rounded-2xl text-sm flex items-center gap-2 shadow-md">
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

        {/* Syllabus */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-xl font-black text-slate-800">Silabus Pembelajaran</h2>
            <p className="text-sm text-slate-500 mt-1">{syllabus.length} bab · {totalLessonsCount} materi</p>
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
      </div>
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

