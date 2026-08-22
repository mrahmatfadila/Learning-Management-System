'use client';

import {
  CheckCircle, ChevronLeft, ChevronRight, Code2, Play, Copy, RefreshCw,
  X, Zap, List, Moon, Sun, Sparkles, Send, ChevronDown, ChevronUp,
  MonitorPlay, BookOpen, Trophy, Clock, Video, FileText, Users, Trash, MessageSquare, Lock, Star
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { lessons, coursesData } from '@/data/lessonData';
import dynamic from 'next/dynamic';

if (typeof window !== 'undefined') {
  const originalError = console.error;
  console.error = (...args) => {
    // Check if any argument contains "Canceled" (as string or inside an Error object)
    const isCanceledError = args.some(arg => {
      if (typeof arg === 'string' && arg.includes('Canceled')) return true;
      if (arg instanceof Error && (arg.message.includes('Canceled') || arg.name.includes('Canceled'))) return true;
      if (arg && typeof arg === 'object' && arg.message && typeof arg.message === 'string' && arg.message.includes('Canceled')) return true;
      return false;
    });
    
    if (isCanceledError) {
      return; // Suppress Next.js Turbopack dev warning safely
    }
    originalError.apply(console, args);
  };
}

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const defineCustomThemes = (monaco: any) => {
  monaco.editor.defineTheme('devgrow-light', {
    base: 'vs', inherit: true,
    rules: [
      { token: '',                     foreground: '1e293b' },
      { token: 'tag',                  foreground: '0369a1', fontStyle: 'bold' },
      { token: 'attribute.name',       foreground: '7c3aed' },
      { token: 'attribute.value',      foreground: '059669' },
      { token: 'attribute.value.html', foreground: '059669' },
      { token: 'string',               foreground: '059669' },
      { token: 'comment',              foreground: '94a3b8', fontStyle: 'italic' },
      { token: 'delimiter',            foreground: '64748b' },
      { token: 'metatag',              foreground: 'dc2626' },
      { token: 'metatag.content.html', foreground: 'ea580c' },
      { token: 'keyword',              foreground: '7c3aed', fontStyle: 'bold' },
      { token: 'number',               foreground: 'ea580c' },
      { token: 'property.css',         foreground: '0369a1' },
      { token: 'selector.css',         foreground: 'dc2626', fontStyle: 'bold' },
      { token: 'function',             foreground: 'c026d3' },
    ],
    colors: {
      'editor.background': '#fafafa',
      'editor.foreground': '#1e293b',
      'editor.lineHighlightBackground': '#f1f5f9',
      'editor.selectionBackground': '#bfdbfe',
      'editorLineNumber.foreground': '#94a3b8',
      'editorLineNumber.activeForeground': '#6366f1',
      'editorCursor.foreground': '#6366f1',
      'editorIndentGuide.background1': '#e2e8f0',
      'editorBracketMatch.background': '#ddd6fe',
      'editorBracketMatch.border': '#7c3aed',
    },
  });
  monaco.editor.defineTheme('devgrow-dark', {
    base: 'vs-dark', inherit: true,
    rules: [
      { token: '',                     foreground: 'e2e8f0' },
      { token: 'tag',                  foreground: '60a5fa', fontStyle: 'bold' },
      { token: 'attribute.name',       foreground: 'a78bfa' },
      { token: 'attribute.value',      foreground: '34d399' },
      { token: 'attribute.value.html', foreground: '34d399' },
      { token: 'string',               foreground: '34d399' },
      { token: 'comment',              foreground: '475569', fontStyle: 'italic' },
      { token: 'delimiter',            foreground: '64748b' },
      { token: 'metatag',              foreground: 'f87171' },
      { token: 'metatag.content.html', foreground: 'fb923c' },
      { token: 'keyword',              foreground: 'a78bfa', fontStyle: 'bold' },
      { token: 'number',               foreground: 'fb923c' },
      { token: 'property.css',         foreground: '60a5fa' },
      { token: 'selector.css',         foreground: 'f87171', fontStyle: 'bold' },
      { token: 'function',             foreground: 'e879f9' },
    ],
    colors: {
      'editor.background': '#0d1117',
      'editor.foreground': '#e2e8f0',
      'editor.lineHighlightBackground': '#161b22',
      'editor.selectionBackground': '#3730a380',
      'editorLineNumber.foreground': '#475569',
      'editorLineNumber.activeForeground': '#818cf8',
      'editorCursor.foreground': '#818cf8',
      'editorIndentGuide.background1': '#1e293b',
      'editorBracketMatch.background': '#4c1d9540',
      'editorBracketMatch.border': '#7c3aed',
    },
  });
};

const colorMap: Record<string, { main: string; bg: string; bgLight: string; border: string; hover: string; icon: string; pill: string }> = {
  orange: { main: 'text-orange-600', bg: 'bg-orange-500', bgLight: 'bg-orange-50', border: 'border-orange-300', hover: 'hover:bg-orange-600', icon: 'text-orange-500', pill: 'bg-orange-100 text-orange-700 border-orange-200' },
  blue:   { main: 'text-blue-600',   bg: 'bg-blue-600',   bgLight: 'bg-blue-50',   border: 'border-blue-300',   hover: 'hover:bg-blue-700',   icon: 'text-blue-500',   pill: 'bg-blue-100 text-blue-700 border-blue-200'   },
  yellow: { main: 'text-yellow-600', bg: 'bg-yellow-500', bgLight: 'bg-yellow-50', border: 'border-yellow-300', hover: 'hover:bg-yellow-600', icon: 'text-yellow-500', pill: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
};

export default function LessonPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const lessonId = params.lessonId as string;

  const [dbLessonData, setDbLessonData] = useState<any>(null);
  const [dbModuleData, setDbModuleData] = useState<any>(null);
  const [isDbLoaded, setIsDbLoaded] = useState(false);
  const [enrollmentProgress, setEnrollmentProgress] = useState<number>(0);
  const [enrollmentStatus, setEnrollmentStatus] = useState<string>('APPROVED');
  const [isStudentRole, setIsStudentRole] = useState(false);
  const [enrollmentChecked, setEnrollmentChecked] = useState(false);

  // Lesson Comments State
  const [lessonComments, setLessonComments] = useState<any[]>([]);
  const [newCommentText, setNewCommentText] = useState('');
  const [isPostingComment, setIsPostingComment] = useState(false);

  const fetchLessonComments = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/lessons/${lessonId}/comments`);
      if (res.ok) {
        setLessonComments(await res.json());
      }
    } catch {}
  };

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    const stored = localStorage.getItem('lms_user');
    if (!stored) return alert('Silakan login terlebih dahulu.');
    const user = JSON.parse(stored);
    if (!newCommentText.trim()) return;

    setIsPostingComment(true);
    try {
      const res = await fetch(`http://localhost:5000/api/lessons/${lessonId}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, content: newCommentText.trim() })
      });
      if (res.ok) {
        setNewCommentText('');
        fetchLessonComments();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsPostingComment(false);
    }
  };

  const handleDeleteLessonComment = async (commentId: string) => {
    if (!confirm('Hapus komentar ini?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/lessons/comments/${commentId}`, { method: 'DELETE' });
      if (res.ok) fetchLessonComments();
    } catch {}
  };

  // Course Review & Rating Modal State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [moduleUserRating, setModuleUserRating] = useState(5);
  const [moduleReviewHoverStar, setModuleReviewHoverStar] = useState(0);
  const [moduleUserComment, setModuleUserComment] = useState('');
  const [isSubmittingModuleReview, setIsSubmittingModuleReview] = useState(false);
  const [moduleReviewSuccess, setModuleReviewSuccess] = useState(false);

  const handlePostModuleReview = async (e: React.FormEvent) => {
    e.preventDefault();
    const stored = localStorage.getItem('lms_user');
    if (!stored) return alert('Silakan login terlebih dahulu.');
    const user = JSON.parse(stored);
    if (!moduleUserComment.trim()) return alert('Silakan tuliskan komentar ulasan Anda.');

    setIsSubmittingModuleReview(true);
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${id}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          rating: moduleUserRating,
          comment: moduleUserComment.trim()
        })
      });
      if (res.ok) {
        setModuleReviewSuccess(true);
        setModuleUserComment('');
        setTimeout(() => {
          setIsReviewModalOpen(false);
          setModuleReviewSuccess(false);
        }, 1500);
      } else {
        const data = await res.json().catch(() => ({}));
        alert(data.error || 'Gagal menyimpan ulasan.');
      }
    } catch (err) {
      alert('Terjadi kesalahan saat mengirim ulasan.');
    } finally {
      setIsSubmittingModuleReview(false);
    }
  };

  useEffect(() => {
    if (lessonId) fetchLessonComments();
  }, [lessonId]);

  useEffect(() => {
    const fetchDbData = async () => {
      try {
        const [modRes, lesRes] = await Promise.all([
          fetch(`http://localhost:5000/api/modules/${id}`),
          fetch(`http://localhost:5000/api/lessons/${lessonId}`)
        ]);
        if (modRes.ok) setDbModuleData(await modRes.json());
        if (lesRes.ok) setDbLessonData(await lesRes.json());
      } catch (err) {}
      setIsDbLoaded(true);
    };
    fetchDbData();

    // Fetch enrollment status & progress
    const stored = localStorage.getItem('lms_user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        if (user?.role?.toUpperCase() === 'STUDENT' && user.id) {
          setIsStudentRole(true);
          fetch(`http://localhost:5000/api/enrollments/check?studentId=${user.id}&moduleId=${id}`)
            .then(r => r.ok ? r.json() : null)
            .then(data => {
              if (data) {
                setEnrollmentStatus(data.status || (data.enrolled ? 'APPROVED' : 'NONE'));
                if (data.enrollment?.progress !== undefined) {
                  setEnrollmentProgress(data.enrollment.progress);
                }
              } else {
                setEnrollmentStatus('NONE');
              }
              setEnrollmentChecked(true);
            })
            .catch(() => { setEnrollmentChecked(true); });
        } else {
          setEnrollmentChecked(true);
        }
      } catch { setEnrollmentChecked(true); }
    } else {
      setEnrollmentChecked(true);
    }
  }, [id, lessonId]);

  // Course theme detection helper
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

  // Merge static with dynamic if available
  const FALLBACK_LESSON = {
    title: 'Memuat...', theory: '', code: '', quiz: null,
    color: 'orange', chapter: '', prevPath: null, nextPath: null, courseId: 'html'
  };

  // Resolve normalized lesson ID for aliases/slugs
  const directMatch = (lessons as any)[lessonId];
  const cleanedSlug = lessonId.replace(/^html-lesson-/, '').replace(/---.*$/, '');
  const slugMatch = (lessons as any)[cleanedSlug] || (lessons as any)[`html-${cleanedSlug}`];
  const staticLessonData = directMatch || slugMatch || (lessons as any)['html-home'] || FALLBACK_LESSON;
  
  let dynamicLessonData = null;
  if (dbLessonData && dbModuleData && dbModuleData.lessons) {
    let parsedContent: any = {};
    try {
      parsedContent = typeof dbLessonData.content === 'object' ? dbLessonData.content : JSON.parse(dbLessonData.content || '{}');
    } catch {
      parsedContent = { theory: dbLessonData.content, code: dbLessonData.videoUrl || '' };
    }

    const sortedLessons = [...dbModuleData.lessons].sort((a: any, b: any) => a.order - b.order);
    const currentIndex = sortedLessons.findIndex((l: any) => l.id === lessonId);

    const w3 = dbLessonData.w3schoolStructure || parsedContent.w3schoolStructure || null;
    const quizData = w3?.pertanyaanKuis ? {
      question: w3.pertanyaanKuis.question,
      options: w3.pertanyaanKuis.options,
      correctIndex: w3.pertanyaanKuis.answer,
      explanation: w3.pertanyaanKuis.explanation
    } : (parsedContent.quiz ? {
      question: parsedContent.quiz.question,
      options: parsedContent.quiz.options,
      correctIndex: parsedContent.quiz.answer !== undefined ? parsedContent.quiz.answer : parsedContent.quiz.correctIndex,
      explanation: parsedContent.quiz.explanation
    } : staticLessonData.quiz);

    dynamicLessonData = {
      ...staticLessonData,
      title: dbLessonData.title,
      overview: w3?.penjelasanJudul || parsedContent.overview || '',
      theory: w3?.isiMateri || parsedContent.theory || dbLessonData.content || '',
      code: w3?.contohCoding || parsedContent.code || dbLessonData.starterCode || '',
      codeExplanation: w3?.penjelasanCodingSatuPerSatu || parsedContent.codeExplanation || [],
      challenge: w3?.codinganLatihan || parsedContent.challenge || null,
      quiz: quizData,
      color: parsedContent.color || staticLessonData.color || 'orange',
      chapter: dbLessonData.chapter || 'Materi Pembelajaran',
      prevPath: currentIndex > 0 ? sortedLessons[currentIndex - 1].id : null,
      nextPath: currentIndex < sortedLessons.length - 1 ? sortedLessons[currentIndex + 1].id : null,
    };
  }

  const lessonData: any = dynamicLessonData || staticLessonData || FALLBACK_LESSON;

  const colors = colorMap[lessonData?.color as string] || colorMap.orange;

  // Resolve correct course definition
  const detectedTheme = getCourseTheme(dbModuleData?.title || '');
  const courseId = (detectedTheme !== 'default' ? detectedTheme : lessonData?.courseId) || 'html';
  const currentCourse = coursesData.find(c => c.id === id || c.id === courseId) || coursesData[0];
  
  // Prioritize structured course modules (8 chapters for HTML) to match Silabus perfectly
  let sidebarModules = currentCourse?.modules && currentCourse.modules.length > 0 ? currentCourse.modules : [];
  if (!sidebarModules || sidebarModules.length === 0) {
    if (dbModuleData && dbModuleData.chapters && dbModuleData.lessons?.length > 0) {
      const chapters = [...dbModuleData.chapters].sort((a: any, b: any) => a.order - b.order);
      sidebarModules = chapters.map((chapter: any, i: number) => {
        const chapterLessons = [...dbModuleData.lessons]
          .filter((l: any) => l.chapterId === chapter.id || l.chapter === chapter.title)
          .sort((a: any, b: any) => a.order - b.order);
        return { id: chapter.id || `dyn-mod-${i}`, title: chapter.title, lessons: chapterLessons };
      });

      const mappedLessonIds = new Set(sidebarModules.flatMap((m: any) => m.lessons.map((l: any) => l.id)));
      const unmappedLessons = dbModuleData.lessons.filter((l: any) => !mappedLessonIds.has(l.id));

      if (unmappedLessons.length > 0) {
        const grouped = unmappedLessons.reduce((acc: any, lesson: any) => {
          const chap = lesson.chapter || 'Bab Umum';
          if (!acc[chap]) acc[chap] = [];
          acc[chap].push(lesson);
          return acc;
        }, {});
        const fallbackModules = Object.entries(grouped).map(([title, lessons]: [string, any], i) => {
          lessons.sort((a: any, b: any) => a.order - b.order);
          return { id: `dyn-fallback-${i}`, title, lessons };
        });
        sidebarModules = [...sidebarModules, ...fallbackModules];
      }
    } else if (dbModuleData && dbModuleData.lessons?.length > 0) {
      const grouped = dbModuleData.lessons.reduce((acc: any, lesson: any) => {
        const chap = lesson.chapter || 'Bab Umum';
        if (!acc[chap]) acc[chap] = [];
        acc[chap].push(lesson);
        return acc;
      }, {});
      sidebarModules = Object.entries(grouped).map(([title, lessons]: [string, any], i) => {
        lessons.sort((a: any, b: any) => a.order - b.order);
        return {
          id: `module-${i}`,
          title,
          lessons: lessons.map((l: any) => ({ id: l.id, title: l.title }))
        };
      });
    }
  }

  // ── Progress tracking ──
  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [isProgressLoaded, setIsProgressLoaded] = useState(false);

  const allLessons = sidebarModules.flatMap((m: any) => m.lessons);
  const currentIdx = allLessons.findIndex((l: any) => l.id === lessonId);
  const totalLessons = allLessons.length;

  // Step 1: Load progress dari localStorage
  useEffect(() => {
    const key = `progress_${id}`;
    const saved = localStorage.getItem(key);
    const completed: Set<string> = saved ? new Set(JSON.parse(saved)) : new Set<string>();
    setCompletedLessons(completed);
  }, [id]);

  // Step 2: Cek kunci HANYA setelah data DB sudah dimuat (isDbLoaded = true)
  useEffect(() => {
    // Tunggu sampai data modul dari API sudah ada
    if (!isDbLoaded) return;
    // Jika tidak ada data lesson sama sekali, jangan redirect
    if (allLessons.length === 0) {
      setIsProgressLoaded(true);
      return;
    }

    const key = `progress_${id}`;
    const saved = localStorage.getItem(key);
    const completed: Set<string> = saved ? new Set(JSON.parse(saved)) : new Set<string>();
    setCompletedLessons(completed);
    setIsProgressLoaded(true);

    // Cek apakah lesson ini boleh diakses
    const allLessonIds = new Set(allLessons.map((l: any) => l.id));
    const validCount = [...allLessonIds].filter(lid => completed.has(lid)).length;
    const currentPct = Math.min(100, allLessons.length > 0 ? Math.round((validCount / allLessons.length) * 100) : 0);
    
    // Jika backend ATAU localStorage menunjukkan 100%, semua terbuka
    if (currentPct >= 100 || enrollmentProgress >= 100) return;

    if (currentIdx > 0) {
      const prevLessonId = allLessons[currentIdx - 1]?.id;
      if (prevLessonId && !completed.has(prevLessonId)) {
        let lastUnlockedIdx = 0;
        for (let i = 1; i < allLessons.length; i++) {
          const prev = allLessons[i - 1]?.id;
          if (prev && completed.has(prev)) {
            lastUnlockedIdx = i;
          } else {
            break;
          }
        }
        const targetLesson = allLessons[lastUnlockedIdx];
        if (targetLesson && targetLesson.id !== lessonId) {
          window.location.replace(`/dashboard/modules/${id}/lesson/${targetLesson.id}`);
          return;
        }
      }
    }
  }, [isDbLoaded, allLessons.length, currentIdx, id, lessonId, enrollmentProgress]); // eslint-disable-line react-hooks/exhaustive-deps

  // Derive effectiveCompleted — if fully done, all lesson IDs count as complete
  const allLessonIdsSet = new Set<string>(allLessons.map((l: any) => l.id));
  const rawCompleted = completedLessons;
  const localPct = allLessons.length > 0 ? Math.round([...allLessonIdsSet].filter(lid => rawCompleted.has(lid)).length / allLessons.length * 100) : 0;
  const effectivelyComplete = enrollmentProgress >= 100 || localPct >= 100;
  const effectiveCompletedLessons: Set<string> = effectivelyComplete ? allLessonIdsSet : rawCompleted;

  const validCompletedCount = [...allLessonIdsSet].filter(lid => effectiveCompletedLessons.has(lid)).length;
  const progressPct = Math.min(100, totalLessons > 0 ? Math.round((validCompletedCount / totalLessons) * 100) : (enrollmentProgress || 0));

  // Helper: apakah lesson di-index tertentu bisa diakses?
  const isLessonUnlocked = (lessonIdx: number): boolean => {
    if (progressPct >= 100) return true;
    if (lessonIdx === 0) return true;
    const prevLessonId = allLessons[lessonIdx - 1]?.id;
    return effectiveCompletedLessons.has(prevLessonId);
  };

  const isCurrentLessonDone = effectiveCompletedLessons.has(lessonId);

  // Helper to find chapter ID for any lesson ID or slug
  const findChapterForLesson = (lid: string) => {
    const cleaned = (lid || '').replace(/^html-lesson-/, '').replace(/---.*$/, '');
    const found = sidebarModules.find((bab: any) => 
      bab.lessons?.some((l: any) => l.id === lid || l.id === cleaned || l.id === `html-${cleaned}`)
    );
    return found?.id || sidebarModules[0]?.id;
  };

  const activeChapter = findChapterForLesson(lessonId);
  const nextLessonId = allLessons[currentIdx + 1]?.id || lessonData?.nextPath;
  const prevLessonId = allLessons[currentIdx - 1]?.id || lessonData?.prevPath;

  const handleCompleteLesson = () => {
    const updated = new Set([...completedLessons, lessonId]);
    const cleaned = (lessonId || '').replace(/^html-lesson-/, '').replace(/---.*$/, '');
    if (cleaned) updated.add(cleaned);
    setCompletedLessons(updated);
    localStorage.setItem(`progress_${id}`, JSON.stringify([...updated]));
    // Sync progress % to backend enrollment
    const stored = localStorage.getItem('lms_user');
    if (stored) {
      try {
        const user = JSON.parse(stored);
        if (user?.id) {
          const pct = Math.round((updated.size / totalLessons) * 100);
          fetch(`http://localhost:5000/api/enrollments/progress`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ studentId: user.id, moduleId: id, progress: pct })
          }).catch(() => {});
        }
      } catch {}
    }

    if (nextLessonId) {
      router.push(`/dashboard/modules/${id}/lesson/${nextLessonId}`);
    }
  };


  const [userCode, setUserCode] = useState(lessonData?.code || '');
  const [liveRender, setLiveRender] = useState('');
  const [isRunningPHP, setIsRunningPHP] = useState(false);
  const [isRunningGit, setIsRunningGit] = useState(false);
  const userCodeRef = useRef(lessonData?.code || '');
  const [quizAnswered, setQuizAnswered] = useState<{ [k: number]: boolean | null }>({});
  const [isDark, setIsDark] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [codeCopied, setCodeCopied] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [aiInput, setAiInput] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessages, setAiMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: `Halo! Saya AI Assistant DevGrow 👋\n\nSiap bantu kamu belajar ${lessonData?.title || 'HTML'}. Tanya apa saja!` },
  ]);

  // Keep all opened chapters open without closing during navigation
  const [expandedBab, setExpandedBab] = useState<string[]>([]);
  const aiBottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setUserCode(lessonData?.code || '');
    userCodeRef.current = lessonData?.code || '';
    setQuizAnswered({});
    
    // Ensure the current lesson's chapter is expanded in the sidebar
    if (activeChapter) {
      setExpandedBab(prev => prev.includes(activeChapter) ? prev : [...prev, activeChapter]);
    }

    if (id === 'php' && lessonData?.code) {
      setLiveRender('');
      setIsRunningPHP(true);
      fetch('/api/run-php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: lessonData.code })
      })
      .then(res => res.json())
      .then(data => {
        let out = data.output || '';
        if (data.error && !out) out = `<div style="color: red; font-family: monospace; white-space: pre-wrap; padding: 16px;">${data.error}</div>`;
        else if (data.error) out += `<br><br><div style="color: red; font-family: monospace; white-space: pre-wrap; padding: 16px;">${data.error}</div>`;
        out += formInterceptScript;
        setLiveRender(out);
      })
      .catch(err => {
        setLiveRender(`<div style="color: red; padding: 16px;">Gagal menjalankan kode PHP.</div>`);
      })
      .finally(() => setIsRunningPHP(false));
    } else if (id === 'git' && lessonData?.code) {
      setLiveRender('');
      setIsRunningGit(true);
      fetch('/api/run-git', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: lessonData.code })
      })
      .then(res => res.json())
      .then(data => {
        if (data.error && !data.output) {
          setLiveRender(`<div style="color: #f48771; font-family: monospace; white-space: pre-wrap; padding: 16px;">${data.error}</div>`);
        } else {
          setLiveRender(data.output || '');
        }
      })
      .catch(() => {
        setLiveRender(`<div style="color: red; padding: 16px;">Gagal menjalankan perintah Git.</div>`);
      })
      .finally(() => setIsRunningGit(false));
    } else {
      setLiveRender(lessonData?.code || '');
    }

    // Auto-close sidebar on mobile
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, [lessonId, lessonData?.code, activeChapter, id]);

  const formInterceptScript = `
<script>
  document.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => { data[key] = value; });
    window.parent.postMessage({ type: 'form_submit', data: data }, '*');
  });
</script>`;

  useEffect(() => {
    const handleMessage = async (e: MessageEvent) => {
      if (e.data && e.data.type === 'form_submit' && id === 'php') {
        const formData = e.data.data;
        setIsRunningPHP(true);
        try {
          const res = await fetch('/api/run-php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: userCodeRef.current, method: 'POST', postData: formData })
          });
          const data = await res.json();
          let out = data.output || '';
          if (data.error && !out) out = `<div style="color: red; font-family: monospace; white-space: pre-wrap; padding: 16px;">${data.error}</div>`;
          else if (data.error) out += `<br><br><div style="color: red; font-family: monospace; white-space: pre-wrap; padding: 16px;">${data.error}</div>`;
          out += formInterceptScript;
          setLiveRender(out);
        } catch (err) {
          setLiveRender(`<div style="color: red; padding: 16px;">Gagal menjalankan kode PHP.</div>`);
        } finally {
          setIsRunningPHP(false);
        }
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [id]);

  useEffect(() => { aiBottom.current?.scrollIntoView({ behavior: 'smooth' }); }, [aiMessages]);

  const handleRun = async () => {
    if (id === 'php') {
      setIsRunningPHP(true);
      try {
        const res = await fetch('/api/run-php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: userCodeRef.current })
        });
        const data = await res.json();
        let out = data.output || '';
        if (data.error && !out) out = `<div style="color: red; font-family: monospace; white-space: pre-wrap; padding: 16px;">${data.error}</div>`;
        else if (data.error) out += `<br><br><div style="color: red; font-family: monospace; white-space: pre-wrap; padding: 16px;">${data.error}</div>`;
        out += formInterceptScript;
        setLiveRender(out);
      } catch (err) {
        setLiveRender(`<div style="color: red; padding: 16px;">Gagal menjalankan kode PHP.</div>`);
      } finally {
        setIsRunningPHP(false);
      }
    } else if (id === 'git') {
      setIsRunningGit(true);
      try {
        const res = await fetch('/api/run-git', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code: userCodeRef.current })
        });
        const data = await res.json();
        if (data.error && !data.output) {
          setLiveRender(`<div style="color: #f48771; font-family: monospace; white-space: pre-wrap; padding: 16px;">${data.error}</div>`);
        } else {
          setLiveRender(data.output || '');
        }
      } catch (err) {
        setLiveRender(`<div style="color: red; padding: 16px;">Gagal menjalankan perintah Git.</div>`);
      } finally {
        setIsRunningGit(false);
      }
    } else {
      setLiveRender(userCodeRef.current);
    }
  };
  const handleReset = () => { 
    setUserCode(lessonData.code); 
    userCodeRef.current = lessonData.code;
    if (id !== 'php') setLiveRender(''); // for php we could re-run but user can click Run
  };
  const handleCopy = () => { navigator.clipboard.writeText(userCode); setCodeCopied(true); setTimeout(() => setCodeCopied(false), 2000); };
  const toggleBab = (b: string) => {
    setExpandedBab(prev => prev.includes(b) ? prev.filter(x => x !== b) : [...prev, b]);
  };

  const handleAiSend = async () => {
    if (!aiInput.trim() || aiLoading) return;
    const userMsg = aiInput.trim();
    setAiMessages(p => [...p, { role: 'user', text: userMsg }]);
    setAiInput('');
    setAiLoading(true);
    try {
      const res = await fetch('/api/ai-chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ message: userMsg, lessonTitle: lessonData?.title, lessonChapter: lessonData?.chapter, userCode }) });
      const data = await res.json();
      setAiMessages(p => [...p, { role: 'ai', text: data.reply || '?? Gagal mendapatkan jawaban.' }]);
    } catch { setAiMessages(p => [...p, { role: 'ai', text: '?? Tidak dapat terhubung ke AI.' }]); }
    finally { setAiLoading(false); }
  };

  // allLessons, currentIdx, totalLessons, progressPct are already computed above

  // -- theme helpers --
  const bg = isDark ? 'bg-[#0d1117]' : 'bg-slate-50';
  const surface = isDark ? 'bg-[#161b22]' : 'bg-white';
  const border = isDark ? 'border-white/8' : 'border-slate-200';
  const textPrimary = isDark ? 'text-white' : 'text-slate-900';
  const textMuted = isDark ? 'text-slate-400' : 'text-slate-500';
  const hover = isDark ? 'hover:bg-white/6' : 'hover:bg-slate-50';

  if (isStudentRole && enrollmentChecked && enrollmentStatus !== 'APPROVED') {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
        <div className="bg-slate-800/90 border border-slate-700 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full text-center text-white shadow-2xl animate-fadeIn">
          <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border ${
            enrollmentStatus === 'PENDING' ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
          }`}>
            {enrollmentStatus === 'PENDING' ? <Clock className="w-8 h-8 animate-spin" /> : <Lock className="w-8 h-8" />}
          </div>
          <h2 className="text-xl font-black mb-2 text-white">
            {enrollmentStatus === 'PENDING' ? 'Akses Menunggu Persetujuan' : 'Izin Akses Diperlukan'}
          </h2>
          <p className="text-xs text-slate-300 mb-6 leading-relaxed">
            {enrollmentStatus === 'PENDING'
              ? 'Permintaan izin belajar Anda untuk modul ini sedang ditinjau oleh instruktur pengampu. Silakan tunggu hingga instruktur menyetujui akses Anda.'
              : 'Anda belum memiliki izin akses untuk mempelajari materi ini. Silakan ajukan permohonan izin di halaman detail kursus.'}
          </p>
          <div className="flex gap-3">
            <Link href={`/dashboard/modules/${id}`} className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-indigo-600/20 text-center">
              Lihat Status Modul
            </Link>
            <Link href="/dashboard?tab=browse" className="flex-1 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl text-xs transition-all text-center">
              Katalog Kursus
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    {/* Jangan tampilkan apapun sebelum progress dicek — cegah flash konten terkunci */}
    {!isProgressLoaded ? (
      <div className="h-screen w-full flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-3 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-slate-500 font-medium">Memuat materi...</p>
        </div>
      </div>
    ) : (
    <div className={`h-screen w-full flex overflow-hidden font-sans ${bg} transition-colors duration-200`}>


      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* -- LEFT SIDEBAR -- */}
      <aside className={`
        fixed lg:relative z-50 lg:z-auto
        ${isSidebarOpen ? 'translate-x-0 w-[260px]' : '-translate-x-full lg:translate-x-0 lg:w-0'}
        transition-all duration-300
        h-full flex-col border-r overflow-hidden shrink-0 ${surface} ${border} flex
      `}>
        {/* Sidebar header */}
        <div className={`px-5 py-4 border-b ${border} flex items-center justify-between shrink-0`}>
          <Link href={`/dashboard/modules/${id}`} className={`flex items-center gap-2 text-sm font-semibold ${textMuted} hover:${textPrimary} transition-colors group`}>
            <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-white/8 group-hover:bg-white/12' : 'bg-slate-100 group-hover:bg-slate-200'} flex items-center justify-center transition-colors`}>
              <ChevronLeft className="w-3.5 h-3.5" />
            </div>
            <span>Silabus</span>
          </Link>
          <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold ${colors.pill} border`}>
            <BookOpen className="w-3 h-3" />
            {currentIdx + 1}/{totalLessons}
          </div>
        </div>

        {/* Lesson list */}
        <div className="flex-1 overflow-y-auto py-2 px-2">
          {sidebarModules.map((bab: any) => (
            <div key={bab.id} className="mb-1">
              <button onClick={() => toggleBab(bab.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors ${textMuted} ${hover}`}>
                <span>{bab.title}</span>
                {expandedBab.includes(bab.id) ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
              </button>
              {expandedBab.includes(bab.id) && bab.lessons.map((l: any, li: number) => {
                const globalIdx = allLessons.findIndex((x: any) => x.id === l.id);
                const unlocked = isLessonUnlocked(globalIdx);
                const done = completedLessons.has(l.id);
                return unlocked ? (
                  <Link key={l.id} href={`/dashboard/modules/${id}/lesson/${l.id}`}
                    className={`flex items-center gap-3 px-3 py-2.5 mx-1 rounded-xl mb-0.5 text-sm font-medium transition-all ${
                      l.id === lessonId
                        ? `${isDark ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'bg-indigo-50 text-indigo-700 border border-indigo-200'} shadow-sm`
                        : `${textMuted} ${hover} border border-transparent`
                    }`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      done ? 'bg-emerald-500' : l.id === lessonId ? (isDark ? 'bg-indigo-500' : 'bg-indigo-600') : (isDark ? 'bg-white/10' : 'bg-slate-200')
                    }`}>
                      {done ? (
                        <CheckCircle className="w-3.5 h-3.5 text-white" />
                      ) : l.type === 'video' ? (
                        <Video className={`w-2.5 h-2.5 ${l.id === lessonId ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                      ) : l.type === 'reading' ? (
                        <FileText className={`w-2.5 h-2.5 ${l.id === lessonId ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                      ) : (
                        <Code2 className={`w-2.5 h-2.5 ${l.id === lessonId ? 'text-white' : isDark ? 'text-slate-400' : 'text-slate-500'}`} />
                      )}
                    </div>
                    <span className={`truncate text-xs ${done ? 'line-through opacity-60' : ''}`}>{l.title}</span>
                  </Link>
                ) : (
                  <div key={l.id} className={`flex items-center gap-3 px-3 py-2.5 mx-1 rounded-xl mb-0.5 text-sm font-medium opacity-40 cursor-not-allowed border border-transparent`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isDark ? 'bg-white/5' : 'bg-slate-100'}`}>
                      <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    </div>
                    <span className="truncate text-xs">{l.title}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Progress footer */}
        <div className={`p-4 border-t ${border} shrink-0`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`text-[10px] font-bold uppercase tracking-widest ${textMuted}`}>Progress</span>
            <span className={`text-xs font-black ${colors.main}`}>{progressPct}%</span>
          </div>
          <div className={`w-full h-2 rounded-full overflow-hidden ${isDark ? 'bg-white/8' : 'bg-slate-200'}`}>
            <div className={`h-full rounded-full transition-all duration-500 ${colors.bg}`} style={{ width: `${progressPct}%` }} />
          </div>
          <div className={`text-[10px] mt-1.5 ${textMuted}`}>{completedLessons.size} dari {totalLessons} materi selesai</div>
        </div>
      </aside>

      {/* -- MAIN AREA -- */}
      <div className="flex-1 flex flex-col h-full overflow-hidden min-w-0">

        {/* -- Top Bar -- */}
        <header className={`flex items-center justify-between px-5 py-3 border-b shrink-0 z-20 ${surface} ${border} shadow-sm`}>
          {/* Left */}
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={() => setIsSidebarOpen(p => !p)}
              className={`p-2 rounded-xl transition-all shrink-0 ${isDark ? 'text-slate-400 hover:text-white hover:bg-white/8' : 'text-slate-500 hover:bg-slate-100'}`}>
              <List className="w-4 h-4" />
            </button>
            <div className={`w-px h-5 shrink-0 ${isDark ? 'bg-white/10' : 'bg-slate-200'}`} />
            <div className="flex items-center gap-2 min-w-0">
              <span className={`shrink-0 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border ${colors.pill}`}>
                {lessonData?.chapter || ''}
              </span>
              <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${textMuted}`} />
              <span className={`text-sm font-semibold truncate ${textPrimary}`}>{lessonData.title}</span>
            </div>
          </div>
          {/* Right */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsReviewModalOpen(true)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isDark
                  ? 'bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/30'
                  : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200 shadow-2xs'
              }`}
              title="Beri Rating & Ulasan Kursus"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="hidden sm:inline">Rating Kursus</span>
            </button>
            <button onClick={() => setAiOpen(p => !p)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                aiOpen
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                  : isDark ? 'bg-white/8 text-slate-300 hover:bg-white/12 border border-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}>
              <Sparkles className="w-3.5 h-3.5" />
              AI Hint
            </button>
            <button onClick={() => setIsDark(p => !p)}
              className={`w-8 h-8 flex items-center justify-center rounded-xl transition-all ${isDark ? 'text-slate-400 hover:text-amber-400 hover:bg-white/8' : 'text-slate-500 hover:bg-slate-100'}`}>
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </header>

        {/* -- Body: Theory + Editor -- */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">

          {/* CENTER: Theory panel */}
          <div className={`flex-1 overflow-y-auto ${bg}`}>
            <div className="max-w-2xl mx-auto px-6 md:px-10 py-10 pb-28">

              {/* Lesson badge + title */}
              <div className="mb-8">
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border mb-5 ${colors.pill}`}>
                  <Code2 className="w-3 h-3" /> Developer Guide
                </div>
                <h1 className={`text-3xl md:text-4xl font-black tracking-tight leading-tight mb-3 ${textPrimary}`}>
                  {lessonData?.title || 'Memuat...'}
                </h1>
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-1.5 text-xs font-medium ${textMuted}`}>
                    <Clock className="w-3.5 h-3.5" />
                    <span>~15 menit</span>
                  </div>
                  <div className={`flex items-center gap-1.5 text-xs font-medium ${textMuted}`}>
                    <Trophy className="w-3.5 h-3.5" />
                    <span>+50 XP</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px w-full mb-8 ${isDark ? 'bg-white/8' : 'bg-slate-200'}`} />

              {/* Overview Banner (W3Schools Standard) */}
              {lessonData?.overview && (
                <div className={`p-4 rounded-2xl mb-8 border flex items-start gap-3.5 ${isDark ? 'bg-indigo-500/10 border-indigo-500/25 text-indigo-200' : 'bg-gradient-to-r from-indigo-50/90 to-blue-50/90 border-indigo-200 text-indigo-950'}`}>
                  <div className="p-2.5 rounded-xl bg-indigo-600 text-white shrink-0 shadow-sm mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1">
                      Ikhtisar Materi
                    </div>
                    <p className="text-sm leading-relaxed font-medium">
                      {lessonData.overview}
                    </p>
                  </div>
                </div>
              )}

              {/* Theory content */}
              {/* Video Player */}
              {lessonData.type === 'video' && lessonData.videoUrl && (
                <div className="mb-8 aspect-video rounded-3xl overflow-hidden border border-slate-200/80 shadow-md bg-black relative">
                  <iframe
                    src={lessonData.videoUrl.includes('youtube.com') && !lessonData.videoUrl.includes('embed') ? lessonData.videoUrl.replace('watch?v=', 'embed/') : lessonData.videoUrl}
                    title={lessonData.title}
                    className="absolute inset-0 w-full h-full border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              <div className={`prose-custom mb-10 leading-relaxed text-[15px]
                [&_h2]:text-2xl [&_h2]:font-black [&_h2]:mb-5 [&_h2]:mt-10 [&_h2]:tracking-tight [&_h2]:${isDark ? 'text-white' : 'text-slate-900'}
                [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:${isDark ? 'text-slate-200' : 'text-slate-800'}
                [&_p]:mb-5 [&_p]:leading-[1.8] [&_p]:${isDark ? 'text-slate-300' : 'text-slate-600'}
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ul>li]:mb-2 [&_ul>li]:${isDark ? 'text-slate-300' : 'text-slate-600'}
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_ol>li]:mb-2 [&_ol>li]:${isDark ? 'text-slate-300' : 'text-slate-600'}
                [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:font-mono [&_code]:text-[13px] [&_code]:font-bold
                [&_code]:${isDark ? 'bg-indigo-500/15 text-indigo-300' : 'bg-indigo-50 text-indigo-700'}
                [&_strong]:font-bold [&_strong]:${isDark ? 'text-white' : 'text-slate-900'}
                [&_.bg-orange-50]:${isDark ? 'bg-orange-500/10' : 'bg-orange-50'}
                [&_.border-orange-200]:${isDark ? 'border-orange-500/30' : 'border-orange-200'}
                [&_.text-orange-800]:${isDark ? 'text-orange-300' : 'text-orange-800'}
                [&_.text-orange-900]:${isDark ? 'text-orange-200' : 'text-orange-900'}
                [&_.bg-slate-100]:${isDark ? 'bg-white/8 text-slate-300' : 'bg-slate-100 text-slate-700'}
                [&_.bg-slate-50]:${isDark ? 'bg-white/5 text-slate-300' : 'bg-slate-50 text-slate-700'}
                [&_.bg-indigo-50]:${isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'}
                [&_.border-indigo-500]:${isDark ? 'border-indigo-400/50' : 'border-indigo-500'}
                [&_.text-indigo-900]:${isDark ? 'text-indigo-200' : 'text-indigo-900'}
                [&_.text-indigo-800]:${isDark ? 'text-indigo-300' : 'text-indigo-800'}
                [&_pre]:${isDark ? 'text-slate-200' : 'text-slate-700'}
                [&_h4]:${isDark ? 'text-indigo-200' : 'text-indigo-900'}
              `}
                dangerouslySetInnerHTML={{ __html: lessonData?.theory || '' }}
              />

              {/* Try It Yourself */}
              <div className={`relative flex items-center gap-4 p-5 rounded-2xl mb-8 border overflow-hidden ${
                isDark ? 'bg-gradient-to-r from-orange-500/10 to-violet-500/10 border-orange-500/20' : 'bg-gradient-to-r from-orange-50 to-violet-50 border-orange-200'
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md ${isDark ? 'bg-orange-500' : 'bg-white border border-orange-200'}`}>
                  <Zap className={`w-5 h-5 ${isDark ? 'text-white' : 'text-orange-500'}`} />
                </div>
                <div>
                  <div className={`font-bold text-sm mb-0.5 ${textPrimary}`}>Try It Yourself ⚡</div>
                  <div className={`text-xs ${textMuted}`}>Edit kode di panel kanan → lihat hasilnya secara <strong className={isDark ? 'text-orange-400' : 'text-orange-600'}>Live Preview</strong></div>
                </div>
              </div>

              {/* Penjelasan Coding Satu per Satu (W3Schools Standard) */}
              {lessonData?.codeExplanation && lessonData.codeExplanation.length > 0 && (
                <div className={`rounded-2xl border p-5 mb-8 ${isDark ? 'bg-[#161b22] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm">
                      💡
                    </div>
                    <div>
                      <h3 className={`text-sm font-black ${textPrimary}`}>Penjelasan Baris Kode Satu per Satu</h3>
                      <div className={`text-[10px] ${textMuted}`}>Bedah sintaks kode langkah demi langkah</div>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    {lessonData.codeExplanation.map((exp: string, idx: number) => (
                      <div key={idx} className={`p-3.5 rounded-xl border text-xs leading-relaxed flex items-start gap-3 ${isDark ? 'bg-white/5 border-white/5 text-slate-300' : 'bg-slate-50/80 border-slate-200/60 text-slate-700'}`}>
                        <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-mono font-bold flex items-center justify-center shrink-0 text-[10px] shadow-sm">
                          {idx + 1}
                        </span>
                        <span className="font-mono">{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Codingan Latihan / Tantangan Praktik (W3Schools Standard) */}
              {lessonData?.challenge && (
                <div className={`rounded-2xl border p-5 mb-8 overflow-hidden relative ${isDark ? 'bg-gradient-to-br from-indigo-950/40 to-purple-950/20 border-indigo-500/30' : 'bg-gradient-to-br from-indigo-50/60 to-purple-50/40 border-indigo-200'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-indigo-600 text-white shadow-sm">🎯 Latihan Praktik</span>
                      <span className={`text-xs font-bold ${textMuted}`}>Uji Skill Coding Kamu</span>
                    </div>
                    {lessonData.challenge.starterCode && (
                      <button
                        onClick={() => {
                          setUserCode(lessonData.challenge.starterCode);
                          userCodeRef.current = lessonData.challenge.starterCode;
                        }}
                        className="text-xs font-bold text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 flex items-center gap-1 bg-white/80 dark:bg-white/10 px-3 py-1.5 rounded-xl border border-indigo-200 dark:border-indigo-500/30 transition-all hover:scale-105">
                        ⚡ Muat ke Editor
                      </button>
                    )}
                  </div>
                  <p className={`text-sm font-semibold mb-3 leading-relaxed ${textPrimary}`}>{lessonData.challenge.instruction}</p>
                  {lessonData.challenge.hint && (
                    <details className="mt-2 text-xs">
                      <summary className="cursor-pointer font-bold text-indigo-600 dark:text-indigo-400 hover:underline">💡 Butuh Hint?</summary>
                      <p className={`mt-2 p-3 rounded-xl border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-white border-slate-200 text-slate-600'}`}>
                        {lessonData.challenge.hint}
                      </p>
                    </details>
                  )}
                </div>
              )}

              {/* Quiz */}
              {lessonData?.quiz && (
                <div className={`rounded-2xl border overflow-hidden mb-8 ${isDark ? 'bg-[#161b22] border-white/8' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <div className={`flex items-center gap-3 px-5 py-4 border-b ${border}`}>
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${colors.bgLight}`}>
                      <CheckCircle className={`w-4 h-4 ${colors.icon}`} />
                    </div>
                    <div>
                      <div className={`text-sm font-black ${textPrimary}`}>Quick Check-up</div>
                      <div className={`text-[10px] ${textMuted}`}>Uji pemahamanmu sebelum lanjut</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className={`text-sm font-semibold mb-4 leading-relaxed ${textPrimary}`}>{lessonData?.quiz?.question}</p>
                    <div className="space-y-2">
                      {lessonData?.quiz?.options?.map((ans: string, i: number) => {
                        const isCorrect = i === lessonData?.quiz?.correctIndex;
                        const answered = quizAnswered[1] !== undefined;
                        return (
                          <button key={i} disabled={answered}
                            onClick={() => setQuizAnswered({ 1: isCorrect })}
                            className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                              answered && isCorrect
                                ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                                : answered && !isCorrect
                                ? `border-transparent ${isDark ? 'bg-white/4 text-slate-500' : 'bg-slate-50 text-slate-400'} cursor-not-allowed`
                                : isDark
                                ? 'border-white/10 bg-white/4 text-slate-300 hover:border-indigo-400/50 hover:bg-indigo-500/8'
                                : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50'
                            }`}>
                            <span>{ans}</span>
                            {answered && isCorrect && <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                    {quizAnswered[1] === true && (
                      <div className="mt-4 flex items-start gap-2.5 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-sm text-emerald-700">
                        <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-500" />
                        <span>{lessonData?.quiz?.explanation}</span>
                      </div>
                    )}
                    {quizAnswered[1] === false && (
                      <div className={`mt-4 p-3.5 rounded-xl text-sm ${isDark ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                        Kurang tepat! Jawaban benar: <strong>{lessonData?.quiz?.options?.[lessonData?.quiz?.correctIndex || 0]}</strong>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Complete & Nav footer */}
              <div className="space-y-4 pt-4">
                {/* Mark Complete Button */}
                {!isCurrentLessonDone ? (
                  <button
                    onClick={handleCompleteLesson}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold text-white transition-all shadow-lg ${colors.bg} ${colors.hover} hover:scale-[1.02]`}
                  >
                    <CheckCircle className="w-4 h-4" /> Tandai Selesai & Lanjut
                  </button>
                ) : (
                  <div className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold text-emerald-700 bg-emerald-50 border-2 border-emerald-200">
                    <CheckCircle className="w-4 h-4" /> Materi Ini Sudah Selesai ✓
                  </div>
                )}

                <div className="flex justify-between items-center">
                  {prevLessonId ? (
                    <Link href={`/dashboard/modules/${id}/lesson/${prevLessonId}`}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all ${isDark ? 'border-white/10 text-slate-300 hover:bg-white/6' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 shadow-sm'}`}>
                      <ChevronLeft className="w-4 h-4" /> Sebelumnya
                    </Link>
                  ) : <div />}
                  {nextLessonId ? (
                    isCurrentLessonDone ? (
                      <Link href={`/dashboard/modules/${id}/lesson/${nextLessonId}`}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all shadow-lg ${colors.bg} ${colors.hover}`}>
                        Materi Berikutnya <ChevronRight className="w-4 h-4" />
                      </Link>
                    ) : (
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold bg-slate-100 text-slate-400 cursor-not-allowed">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                        Terkunci
                      </div>
                    )
                  ) : (
                    <Link href={`/dashboard/modules/${id}`}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-500/20">
                      Selesai Semua! 🎉 <CheckCircle className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Editor + Preview */}
          <div className={`w-full lg:w-[48%] h-[50vh] lg:h-full shrink-0 flex flex-col border-t lg:border-t-0 lg:border-l ${border} z-10`}>

            {/* Editor header bar */}
            <div className={`flex items-center justify-between px-4 py-2.5 border-b ${border} shrink-0 ${isDark ? 'bg-[#161b22]' : 'bg-slate-50'}`}>
              <div className="flex items-center gap-3">
                {/* macOS dots */}
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors cursor-pointer" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400 hover:bg-emerald-500 transition-colors cursor-pointer" />
                </div>
                <div className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-semibold ${isDark ? 'bg-white/6 text-slate-400 border border-white/8' : 'bg-white text-slate-500 border border-slate-200 shadow-sm'}`}>
                  <Code2 className="w-3 h-3" />
                  index.html
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={handleCopy} title="Copy"
                  className={`p-1.5 rounded-lg transition-colors text-xs font-medium flex items-center gap-1 ${isDark ? 'text-slate-500 hover:text-white hover:bg-white/8' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200'}`}>
                  {codeCopied ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button onClick={handleReset} title="Reset"
                  className={`p-1.5 rounded-lg transition-colors ${isDark ? 'text-slate-500 hover:text-white hover:bg-white/8' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-200'}`}>
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button onClick={handleRun}
                  className="flex items-center gap-1.5 ml-1 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-black transition-all shadow-md shadow-emerald-500/30 hover:-translate-y-0.5">
                  <Play className="w-3 h-3 fill-current" /> RUN
                </button>
              </div>
            </div>

            {/* Monaco Editor */}
            <div className={`h-[56%] overflow-hidden ${isDark ? 'bg-[#0d1117]' : 'bg-[#fafafa]'}`}>
              <Suspense fallback={
                <div className={`h-full flex items-center justify-center gap-3 ${textMuted}`}>
                  <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                  <span className="text-sm">Loading editor...</span>
                </div>
              }>
                <MonacoEditor
                  height="100%"
                  defaultLanguage={id === 'php' ? 'php' : id === 'javascript' ? 'javascript' : id === 'css' ? 'css' : 'html'}
                  value={userCode}
                  onChange={(v) => { 
                    const val = v || ''; 
                    setUserCode(val); 
                    userCodeRef.current = val;
                    if (id !== 'php') setLiveRender(val); 
                  }}
                  beforeMount={defineCustomThemes}
                  theme={isDark ? 'devgrow-dark' : 'devgrow-light'}
                  options={{
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
                    fontLigatures: true,
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    lineNumbers: 'on',
                    wordWrap: 'on',
                    padding: { top: 14, bottom: 14 },
                    automaticLayout: true,
                    bracketPairColorization: { enabled: true },
                    cursorBlinking: 'smooth',
                    smoothScrolling: true,
                    renderLineHighlight: 'line',
                    scrollbar: { verticalScrollbarSize: 4, horizontalScrollbarSize: 4 },
                  }}
                />
              </Suspense>
            </div>

            {/* Preview panel */}
            <div className={`flex-1 flex flex-col border-t ${border}`}>
              <div className={`flex items-center justify-between px-4 py-2 border-b ${border} shrink-0 ${isDark ? 'bg-[#161b22]' : 'bg-slate-50'}`}>
                <div className={`flex items-center gap-2 text-[10px] font-black uppercase tracking-widest ${textMuted}`}>
                  <MonitorPlay className="w-3.5 h-3.5" />
                  Live Preview
                </div>
                {liveRender && !isRunningPHP && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[10px] text-emerald-600 font-bold">Live</span>
                  </div>
                )}
                {isRunningPHP && (
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin" />
                    <span className="text-[10px] text-emerald-600 font-bold">Running...</span>
                  </div>
                )}
              </div>
              {liveRender ? (
                <iframe srcDoc={liveRender} title="preview" className="flex-1 w-full bg-white border-none" sandbox="allow-scripts allow-modals allow-forms allow-same-origin" />
              ) : (
                <div className={`flex-1 flex flex-col items-center justify-center gap-3 ${isDark ? 'bg-[#0d1117]' : 'bg-slate-50'}`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${isDark ? 'bg-white/6' : 'bg-slate-200'}`}>
                    <Play className={`w-5 h-5 ${isDark ? 'text-slate-600' : 'text-slate-400'}`} />
                  </div>
                  <p className={`text-xs font-semibold ${textMuted}`}>Klik RUN untuk melihat output</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* -- AI ASSISTANT PANEL -- */}
      {aiOpen && (
        <div className={`fixed inset-y-0 right-0 z-50 w-full md:w-[350px] lg:relative lg:z-auto lg:w-[300px] h-full flex flex-col border-l shrink-0 ${surface} ${border} shadow-2xl lg:shadow-none`}>
          {/* AI Header */}
          <div className={`flex items-center justify-between px-4 py-3.5 border-b ${border} shrink-0`}>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md shadow-violet-500/30">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className={`text-sm font-black ${textPrimary}`}>AI Assistant</div>
                <div className="text-[10px] text-violet-500 font-semibold">Gemini 2.0 Flash ?</div>
              </div>
            </div>
            <button onClick={() => setAiOpen(false)}
              className={`w-7 h-7 flex items-center justify-center rounded-lg transition-colors ${isDark ? 'text-slate-500 hover:text-white hover:bg-white/8' : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'}`}>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {aiMessages.map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'ai' && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className={`max-w-[82%] px-3 py-2.5 rounded-2xl text-xs leading-relaxed whitespace-pre-wrap ${
                  m.role === 'user'
                    ? 'bg-indigo-600 text-white rounded-br-sm shadow-md shadow-indigo-500/20'
                    : isDark ? 'bg-white/8 text-slate-200 rounded-bl-sm border border-white/8' : 'bg-slate-100 text-slate-700 rounded-bl-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {aiLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <div className={`px-3 py-2.5 rounded-2xl rounded-bl-sm ${isDark ? 'bg-white/8 border border-white/8' : 'bg-slate-100'}`}>
                  <div className="flex gap-1 items-center">
                    {[0, 150, 300].map(d => (
                      <span key={d} className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-bounce" style={{ animationDelay: `${d}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div ref={aiBottom} />
          </div>

          {/* Input */}
          <div className={`p-3 border-t ${border} shrink-0`}>
            <div className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border transition-all ${
              isDark ? 'bg-white/6 border-white/10 focus-within:border-violet-500/50' : 'bg-white border-slate-200 focus-within:border-violet-400 focus-within:shadow-sm shadow-sm'
            }`}>
              <input
                value={aiInput}
                onChange={e => setAiInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && !e.shiftKey && handleAiSend()}
                placeholder={aiLoading ? 'AI sedang berpikir...' : 'Tanya tentang materi ini...'}
                disabled={aiLoading}
                className={`flex-1 bg-transparent text-xs outline-none ${isDark ? 'text-white placeholder:text-slate-600' : 'text-slate-800 placeholder:text-slate-400'}`}
              />
              <button onClick={handleAiSend} disabled={aiLoading || !aiInput.trim()}
                className={`w-7 h-7 flex items-center justify-center rounded-lg transition-all shrink-0 ${
                  aiLoading || !aiInput.trim()
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-gradient-to-br from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-md shadow-violet-500/20 hover:-translate-y-0.5'
                }`}>
                <Send className="w-3 h-3" />
              </button>
            </div>
            <p className={`text-[9px] text-center mt-1.5 ${textMuted}`}>AI membaca kode editor kamu 🧠💡</p>
          </div>
        </div>
      )}
      {/* -- Course Rating & Review Modal -- */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-[#161b22] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative text-left">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <h3 className="font-black text-slate-800 dark:text-white text-base">Beri Rating &amp; Ulasan Kursus</h3>
                  <p className="text-[11px] text-slate-400">{dbModuleData?.title || 'Modul Pembelajaran'}</p>
                </div>
              </div>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {moduleReviewSuccess ? (
              <div className="py-10 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl animate-bounce">
                  ✓
                </div>
                <h4 className="text-base font-black text-slate-800 dark:text-white">Terima Kasih!</h4>
                <p className="text-xs text-slate-500">Ulasan dan rating Anda telah berhasil disimpan.</p>
              </div>
            ) : (
              <form onSubmit={handlePostModuleReview} className="space-y-4">
                {/* Interactive Star Picker */}
                <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((st) => (
                      <button
                        key={st}
                        type="button"
                        onMouseEnter={() => setModuleReviewHoverStar(st)}
                        onMouseLeave={() => setModuleReviewHoverStar(0)}
                        onClick={() => setModuleUserRating(st)}
                        className="p-1 hover:scale-125 transition-transform"
                      >
                        <Star className={`w-7 h-7 ${(moduleReviewHoverStar || moduleUserRating) >= st ? 'fill-amber-400 text-amber-400 drop-shadow-sm' : 'text-slate-300 dark:text-slate-700'}`} />
                      </button>
                    ))}
                  </div>
                  <span className="text-xs font-black text-amber-700 dark:text-amber-400">
                    {moduleUserRating === 5 ? '⭐⭐⭐⭐⭐ Sangat Puas!' :
                     moduleUserRating === 4 ? '⭐⭐⭐⭐ Bagus & Jelas' :
                     moduleUserRating === 3 ? '⭐⭐⭐ Cukup Baik' :
                     moduleUserRating === 2 ? '⭐⭐ Kurang Lengkap' : '⭐ Perlu Perbaikan'}
                  </span>
                </div>

                {/* Quick Tags */}
                <div>
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 mb-2 block">Kata kunci cepat:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { label: 'Materi Jelas 💡', text: 'Materi Jelas 💡' },
                      { label: 'Live Code Keren 🚀', text: 'Live Code Keren 🚀' },
                      { label: 'Mudah Dipahami 👍', text: 'Mudah Dipahami 👍' },
                      { label: 'Rekomendasi ⭐', text: 'Rekomendasi ⭐' }
                    ].map(tag => {
                      const isSelected = moduleUserComment.includes(tag.text);
                      return (
                        <button
                          key={tag.label}
                          type="button"
                          onClick={() => {
                            if (!isSelected) {
                              setModuleUserComment(prev => prev ? `${prev} ${tag.text}` : tag.text);
                            } else {
                              setModuleUserComment(prev => prev.replace(tag.text, '').replace(/\s+/g, ' ').trim());
                            }
                          }}
                          className={`px-3 py-1 text-[11px] font-semibold rounded-full border transition-all hover:scale-105 ${
                            isSelected 
                              ? 'bg-indigo-50 dark:bg-indigo-950/40 border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300 shadow-sm' 
                              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700'
                          }`}
                        >
                          + {tag.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Textarea */}
                <div>
                  <textarea
                    value={moduleUserComment}
                    onChange={(e) => setModuleUserComment(e.target.value)}
                    placeholder="Tuliskan pengalaman belajar Anda di sini..."
                    rows={3}
                    className="w-full px-4 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 font-medium leading-relaxed"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsReviewModalOpen(false)}
                    className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition-colors"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmittingModuleReview || !moduleUserComment.trim()}
                    className="flex-1 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold text-xs rounded-xl transition-all shadow-md shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmittingModuleReview ? 'Menyimpan...' : 'Kirim Ulasan & Rating'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
    )}
    </>
  );
}
