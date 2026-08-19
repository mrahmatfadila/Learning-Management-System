'use client';

import { useState, useEffect, use, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, Loader2, Code2, Video, FileText, Bold, Italic, Info, Sparkles, Plus } from 'lucide-react';
import DashboardNavbar from '@/components/DashboardNavbar';
import DashboardSidebar from '@/components/DashboardSidebar';
import dynamic from 'next/dynamic';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

export default function EditLessonPage({ params }: { params: Promise<{ id: string; lessonId: string }> }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const { id, lessonId } = unwrappedParams;

  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [htmlMode, setHtmlMode] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    window.addEventListener('lms-theme-change', checkTheme);
    return () => window.removeEventListener('lms-theme-change', checkTheme);
  }, []);

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/lessons/${lessonId}`);
        if (res.ok) {
          const data = await res.json();
          let parsedContent: any = {};
          try {
            parsedContent = JSON.parse(data.content || '{}');
          } catch {
            parsedContent = { theory: data.content, code: data.videoUrl || '' };
          }
          setLesson({
            title: data.title || '',
            chapter: data.chapter || 'Bab Umum',
            type: data.type || 'code',
            theory: parsedContent.theory || (typeof data.content === 'string' && !data.content.startsWith('{') ? data.content : ''),
            code: parsedContent.code || '',
            videoUrl: data.type === 'video' ? (data.videoUrl || '') : '',
            quizQuestion: parsedContent.quiz?.question || '',
            quizOptions: parsedContent.quiz?.options || ['', '', '', ''],
            quizCorrectIndex: parsedContent.quiz?.correctIndex !== undefined ? parsedContent.quiz.correctIndex : 0,
            quizExplanation: parsedContent.quiz?.explanation || ''
          });
        }
      } catch (err) {
        console.error('Failed to fetch lesson', err);
      } finally {
        setLoading(false);
      }
    };
    fetchLesson();
  }, [lessonId]);

  // Synchronize visual contentEditable editor with lesson.theory state
  useEffect(() => {
    if (editorRef.current && lesson && !htmlMode) {
      if (editorRef.current.innerHTML !== lesson.theory) {
        editorRef.current.innerHTML = lesson.theory;
      }
    }
  }, [lesson, htmlMode]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const contentObj = {
        theory: lesson.theory,
        code: lesson.type === 'code' ? lesson.code : '',
        quiz: lesson.quizQuestion ? {
          question: lesson.quizQuestion,
          options: lesson.quizOptions,
          correctIndex: Number(lesson.quizCorrectIndex),
          explanation: lesson.quizExplanation
        } : null
      };
      const res = await fetch(`http://localhost:5000/api/lessons/${lessonId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: lesson.title,
          chapter: lesson.chapter,
          type: lesson.type,
          content: JSON.stringify(contentObj),
          videoUrl: lesson.type === 'video' ? lesson.videoUrl : ''
        })
      });
      if (res.ok) {
        alert('Materi berhasil disimpan!');
        router.push(`/dashboard/modules/${id}`);
      } else {
        alert('Gagal menyimpan materi');
      }
    } catch (err) {
      alert('Terjadi kesalahan');
    } finally {
      setSaving(false);
    }
  };
  // Helper for WYSIWYG commands
  const execCmd = (cmd: string, val: string = '') => {
    document.execCommand(cmd, false, val);
    handleEditorInput();
  };

  const formatBlock = (tag: string) => {
    document.execCommand('formatBlock', false, tag);
    handleEditorInput();
  };

  const insertCustomBlock = (type: 'info' | 'mission' | 'code') => {
    let html = '';
    if (type === 'info') {
      html = `<div class="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-lg mb-8"><h4 class="text-indigo-900 font-bold mb-2 flex items-center gap-2">💡 Penjelasan:</h4><p class="text-indigo-800 text-sm leading-relaxed font-medium">Tulis penjelasan teori atau catatan penting di sini...</p></div><p></p>`;
    } else if (type === 'mission') {
      html = `<div class="p-6 mt-10 bg-orange-50 border-2 border-orange-200 rounded-2xl drop-shadow-sm"><h3 class="mt-0 text-orange-800 font-bold">🎯 Misi: Praktik Langsung</h3><p class="mb-4 text-orange-900">Modifikasi kode dasar di panel editor sebelah kanan sesuai instruksi ini untuk mempraktikkan langsung!</p></div><p></p>`;
    } else if (type === 'code') {
      html = `<div class="bg-slate-100 p-4 rounded-xl mb-4 font-mono text-sm overflow-x-auto"><pre><code>&lt;button&gt;Tombol Contoh&lt;/button&gt;</code></pre></div><p></p>`;
    }
    
    if (editorRef.current) {
      editorRef.current.focus();
    }
    
    document.execCommand('insertHTML', false, html);
    handleEditorInput();
  };

  const handleEditorInput = () => {
    if (editorRef.current) {
      setLesson((prev: any) => ({ ...prev, theory: editorRef.current?.innerHTML || '' }));
    }
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-50 dark:bg-[#0b0f19]">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600 dark:text-indigo-400" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-[#0b0f19] gap-4">
        <p className="text-red-500 font-bold">Materi tidak ditemukan atau gagal memuat data.</p>
        <button onClick={() => router.push(`/dashboard/modules/${id}`)} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-md shadow-indigo-500/20">
          Kembali ke Modul
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[#F8FAFC] dark:bg-[#0b0f19] font-sans">
      <DashboardNavbar />
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />
        <div className="flex-1 overflow-y-auto bg-[#F8FAFC] dark:bg-[#0f111a]">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button onClick={() => router.push(`/dashboard/modules/${id}`)} className="p-2 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-2xl font-black text-slate-800 dark:text-white">Edit Materi Pembelajaran</h1>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Sesuaikan judul, teori, dan konten materi.</p>
                </div>
              </div>
              <button 
                onClick={handleSave} 
                disabled={saving}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-md shadow-indigo-500/20 disabled:opacity-70"
              >
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>

            <div className="bg-white dark:bg-[#0c0e18] rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Judul Materi</label>
                  <input 
                    type="text" 
                    value={lesson.title} 
                    onChange={e => setLesson({ ...lesson, title: e.target.value })} 
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-500 text-slate-800 dark:text-white font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Bab Pembelajaran</label>
                  <input 
                    type="text" 
                    value={lesson.chapter} 
                    onChange={e => setLesson({ ...lesson, chapter: e.target.value })} 
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-500 text-slate-800 dark:text-white font-semibold"
                    placeholder="Contoh: Bab 1: Pengenalan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">Tipe Materi</label>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setLesson({ ...lesson, type: 'code' })} className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold transition-all ${lesson.type === 'code' ? 'border-indigo-500 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400 shadow-sm' : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
                    <Code2 className="w-4 h-4" /> Code & Live Editor
                  </button>
                  <button onClick={() => setLesson({ ...lesson, type: 'reading' })} className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold transition-all ${lesson.type === 'reading' ? 'border-amber-500 dark:border-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 shadow-sm' : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
                    <FileText className="w-4 h-4" /> Reading / Artikel
                  </button>
                  <button onClick={() => setLesson({ ...lesson, type: 'video' })} className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold transition-all ${lesson.type === 'video' ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-450 dark:text-red-400 shadow-sm' : 'border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-900'}`}>
                    <Video className="w-4 h-4" /> Video Player
                  </button>
                </div>
              </div>

              {/* TEORI / VISUAL WYSIWYG WORKSPACE */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400 dark:text-slate-500" /> Konten & Teori Pembelajaran
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setHtmlMode(!htmlMode)} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${htmlMode ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/10' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-350 border border-slate-200 dark:border-slate-700'}`}
                  >
                    {htmlMode ? '✍️ Lihat Visual Editor' : '⚡ Lihat Kode HTML'}
                  </button>
                </div>

                <div className="border border-slate-200 dark:border-slate-800 rounded-[1.5rem] overflow-hidden bg-white dark:bg-slate-900 shadow-inner">
                  {htmlMode ? (
                    /* HTML Code Mode */
                    <textarea 
                      value={lesson.theory}
                      onChange={e => setLesson({ ...lesson, theory: e.target.value })}
                      className="w-full h-[400px] p-5 focus:outline-none resize-y text-slate-700 dark:text-slate-200 font-mono text-xs leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"
                      placeholder="<h2>Pengenalan...</h2><p>Tuliskan teori materi di sini.</p>"
                    />
                  ) : (
                    /* Notion-style Visual WYSIWYG Mode */
                    <div className="flex flex-col">
                      {/* Editor Toolbar */}
                      <div className="flex flex-wrap items-center gap-1.5 p-3 bg-slate-50 dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 rounded-t-[1.5rem] select-none">
                        <button type="button" onClick={() => execCmd('bold')} title="Tebal" className="px-2.5 py-1.5 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 active:bg-slate-300/60 rounded-lg text-sm font-extrabold text-slate-700 dark:text-slate-300 transition-colors">B</button>
                        <button type="button" onClick={() => execCmd('italic')} title="Miring" className="px-2.5 py-1.5 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 active:bg-slate-300/60 rounded-lg text-sm italic text-slate-700 dark:text-slate-300 transition-colors">I</button>
                        <div className="w-px h-5 bg-slate-200 dark:bg-slate-800 self-center mx-1" />
                        <button type="button" onClick={() => formatBlock('h2')} title="Judul Besar" className="px-2.5 py-1.5 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 active:bg-slate-300/60 rounded-lg text-xs font-black text-slate-700 dark:text-slate-300 transition-colors">H2</button>
                        <button type="button" onClick={() => formatBlock('h3')} title="Judul Sedang" className="px-2.5 py-1.5 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 active:bg-slate-300/60 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors">H3</button>
                        <button type="button" onClick={() => formatBlock('p')} title="Paragraf Biasa" className="px-2.5 py-1.5 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 active:bg-slate-300/60 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 transition-colors">Teks</button>
                        <div className="w-px h-5 bg-slate-200 dark:bg-slate-800 self-center mx-1" />
                        <button type="button" onClick={() => insertCustomBlock('info')} title="Kotak Penjelasan" className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-400 rounded-lg text-xs font-bold transition-all flex items-center gap-1">💡 Penjelasan</button>
                        <button type="button" onClick={() => insertCustomBlock('mission')} title="Kotak Penugasan / Misi" className="px-3 py-1.5 bg-orange-50 dark:bg-orange-950/20 border border-orange-100 dark:border-orange-900 text-orange-700 dark:text-orange-400 rounded-lg text-xs font-bold transition-all flex items-center gap-1">🎯 Misi Praktik</button>
                        <button type="button" onClick={() => insertCustomBlock('code')} title="Kotak Kode" className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-300 rounded-lg text-xs font-mono font-bold transition-all">&lt;/&gt; Kode</button>
                      </div>

                      {/* Visual Content Workspace (Mimicking Student prose-custom) */}
                      <div 
                        ref={editorRef}
                        contentEditable={true}
                        onInput={handleEditorInput}
                        className="w-full min-h-[350px] max-h-[500px] p-6 focus:outline-none text-slate-800 dark:text-slate-200 leading-relaxed text-[15px] overflow-y-auto bg-stone-50/10 border-t border-slate-100 dark:border-slate-800
                          prose-custom
                          [&_h2]:text-2xl [&_h2]:font-black [&_h2]:mb-5 [&_h2]:mt-10 [&_h2]:tracking-tight [&_h2]:text-slate-900 dark:[&_h2]:text-white
                          [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:text-slate-800 dark:[&_h3]:text-slate-200
                          [&_p]:mb-5 [&_p]:leading-[1.8] [&_p]:text-slate-600 dark:[&_p]:text-slate-300
                          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ul>li]:mb-2 [&_ul>li]:text-slate-600 dark:[&_ul>li]:text-slate-350
                          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_ol>li]:mb-2 [&_ol>li]:text-slate-600 dark:[&_ol>li]:text-slate-350
                          [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:font-mono [&_code]:text-[13px] [&_code]:font-bold
                          [&_code]:bg-indigo-50 dark:[&_code]:bg-indigo-950/40 [&_code]:text-indigo-700 dark:[&_code]:text-indigo-400
                          [&_strong]:font-bold [&_strong]:text-slate-900 dark:[&_strong]:text-white
                          [&_.bg-indigo-50]:bg-indigo-50 dark:[&_.bg-indigo-50]:bg-indigo-950/20
                          [&_.border-indigo-500]:border-indigo-500
                          [&_.text-indigo-900]:text-indigo-900 dark:[&_.text-indigo-900]:text-indigo-200
                          [&_.text-indigo-800]:text-indigo-800 dark:[&_.text-indigo-800]:text-indigo-300
                          [&_.bg-orange-50]:bg-orange-50 dark:[&_.bg-orange-50]:bg-orange-950/20
                          [&_.border-orange-200]:border-orange-200 dark:[&_.border-orange-200]:border-orange-900/50
                          [&_.text-orange-800]:text-orange-800 dark:[&_.text-orange-800]:text-orange-200
                          [&_.text-orange-900]:text-orange-900 dark:[&_.text-orange-900]:text-orange-300
                          [&_.bg-slate-100]:bg-slate-100 dark:[&_.bg-slate-100]:bg-slate-800
                          [&_.bg-slate-50]:bg-slate-50 dark:[&_.bg-slate-50]:bg-slate-800
                        "
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* QUIZ BUILDER */}
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 dark:text-white text-base">Quick Check-up (Asesmen Kuis)</h3>
                    <p className="text-xs text-slate-450 dark:text-slate-500 font-medium">Opsional. Buat kuis mini interaktif yang muncul di akhir materi ini.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Pertanyaan Kuis</label>
                    <input 
                      type="text" 
                      value={lesson.quizQuestion} 
                      onChange={e => setLesson({ ...lesson, quizQuestion: e.target.value })}
                      placeholder="Contoh: Apa fungsi utama tag &lt;div&gt; dalam HTML?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-500 text-slate-800 dark:text-white font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {lesson.quizOptions.map((opt: string, oidx: number) => (
                      <div key={oidx}>
                        <label className="block text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1.5">Pilihan {['A', 'B', 'C', 'D'][oidx]}</label>
                        <input 
                          type="text" 
                          value={opt} 
                          onChange={e => {
                            const newOpts = [...lesson.quizOptions];
                            newOpts[oidx] = e.target.value;
                            setLesson({ ...lesson, quizOptions: newOpts });
                          }}
                          placeholder={`Jawaban Pilihan ${['A', 'B', 'C', 'D'][oidx]}`}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-500 text-slate-800 dark:text-white text-sm font-semibold"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-405 dark:text-slate-400 uppercase tracking-wider mb-2">Jawaban yang Benar</label>
                      <select 
                        value={lesson.quizCorrectIndex} 
                        onChange={e => setLesson({ ...lesson, quizCorrectIndex: Number(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-500 text-slate-800 dark:text-white font-bold"
                      >
                        <option value={0}>Pilihan A</option>
                        <option value={1}>Pilihan B</option>
                        <option value={2}>Pilihan C</option>
                        <option value={3}>Pilihan D</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 dark:text-slate-405 dark:text-slate-400 uppercase tracking-wider mb-2">Penjelasan Kuis</label>
                      <input 
                        type="text" 
                        value={lesson.quizExplanation} 
                        onChange={e => setLesson({ ...lesson, quizExplanation: e.target.value })}
                        placeholder="Tulis alasan kenapa jawaban tersebut benar..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 dark:focus:border-indigo-500 text-slate-800 dark:text-white font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {lesson.type === 'code' && (
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-slate-400 dark:text-slate-500" /> Base Code Editor (Initial Code untuk Siswa)
                  </label>
                  <div className="h-[400px] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-850">
                    <MonacoEditor
                      height="100%"
                      defaultLanguage={id === 'php' ? 'php' : id === 'javascript' ? 'javascript' : id === 'css' ? 'css' : 'html'}
                      value={lesson.code}
                      theme={isDark ? 'vs-dark' : 'light'}
                      onChange={v => setLesson({ ...lesson, code: v || '' })}
                      options={{ minimap: { enabled: false }, padding: { top: 16 } }}
                    />
                  </div>
                </div>
              )}

              {lesson.type === 'video' && (
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Video URL (YouTube Embed / MP4)</label>
                  <input 
                    type="text" 
                    value={lesson.videoUrl} 
                    onChange={e => setLesson({ ...lesson, videoUrl: e.target.value })} 
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 dark:focus:border-red-500 text-slate-800 dark:text-white font-medium"
                    placeholder="https://www.youtube.com/embed/..."
                  />
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
