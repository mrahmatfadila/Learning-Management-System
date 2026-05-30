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
      <div className="h-screen w-full flex items-center justify-center bg-slate-50">
        <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-[#F8FAFC] font-sans">
      <DashboardNavbar />
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button onClick={() => router.push(`/dashboard/modules/${id}`)} className="p-2 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors text-slate-500 hover:text-indigo-600">
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <div>
                  <h1 className="text-2xl font-black text-slate-800">Edit Materi Pembelajaran</h1>
                  <p className="text-sm text-slate-500 font-medium">Sesuaikan judul, teori, dan konten materi.</p>
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

            <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Judul Materi</label>
                  <input 
                    type="text" 
                    value={lesson.title} 
                    onChange={e => setLesson({ ...lesson, title: e.target.value })} 
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-semibold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Bab Pembelajaran</label>
                  <input 
                    type="text" 
                    value={lesson.chapter} 
                    onChange={e => setLesson({ ...lesson, chapter: e.target.value })} 
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-semibold"
                    placeholder="Contoh: Bab 1: Pengenalan"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-3">Tipe Materi</label>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setLesson({ ...lesson, type: 'code' })} className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold transition-all ${lesson.type === 'code' ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-sm' : 'border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
                    <Code2 className="w-4 h-4" /> Code & Live Editor
                  </button>
                  <button onClick={() => setLesson({ ...lesson, type: 'reading' })} className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold transition-all ${lesson.type === 'reading' ? 'border-amber-500 bg-amber-50 text-amber-700 shadow-sm' : 'border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
                    <FileText className="w-4 h-4" /> Reading / Artikel
                  </button>
                  <button onClick={() => setLesson({ ...lesson, type: 'video' })} className={`flex-1 min-w-[120px] flex items-center justify-center gap-2 py-3.5 rounded-xl border font-bold transition-all ${lesson.type === 'video' ? 'border-red-500 bg-red-50 text-red-700 shadow-sm' : 'border-slate-200 text-slate-500 hover:bg-slate-50'}`}>
                    <Video className="w-4 h-4" /> Video Player
                  </button>
                </div>
              </div>

              {/* TEORI / VISUAL WYSIWYG WORKSPACE */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-slate-400" /> Konten & Teori Pembelajaran
                  </label>
                  <button 
                    type="button" 
                    onClick={() => setHtmlMode(!htmlMode)} 
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${htmlMode ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/10' : 'bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200'}`}
                  >
                    {htmlMode ? '✍️ Lihat Visual Editor' : '⚡ Lihat Kode HTML'}
                  </button>
                </div>

                <div className="border border-slate-200 rounded-[1.5rem] overflow-hidden bg-white shadow-inner">
                  {htmlMode ? (
                    /* HTML Code Mode */
                    <textarea 
                      value={lesson.theory}
                      onChange={e => setLesson({ ...lesson, theory: e.target.value })}
                      className="w-full h-[400px] p-5 focus:outline-none resize-y text-slate-700 font-mono text-xs leading-relaxed border-t border-slate-100 bg-slate-50/50"
                      placeholder="<h2>Pengenalan...</h2><p>Tuliskan teori materi di sini.</p>"
                    />
                  ) : (
                    /* Notion-style Visual WYSIWYG Mode */
                    <div className="flex flex-col">
                      {/* Editor Toolbar */}
                      <div className="flex flex-wrap items-center gap-1.5 p-3 bg-slate-50 border-b border-slate-200/80 rounded-t-[1.5rem] select-none">
                        <button type="button" onClick={() => execCmd('bold')} title="Tebal" className="px-2.5 py-1.5 hover:bg-slate-200/60 active:bg-slate-300/60 rounded-lg text-sm font-extrabold text-slate-700 transition-colors">B</button>
                        <button type="button" onClick={() => execCmd('italic')} title="Miring" className="px-2.5 py-1.5 hover:bg-slate-200/60 active:bg-slate-300/60 rounded-lg text-sm italic text-slate-700 transition-colors">I</button>
                        <div className="w-px h-5 bg-slate-200 self-center mx-1" />
                        <button type="button" onClick={() => formatBlock('h2')} title="Judul Besar" className="px-2.5 py-1.5 hover:bg-slate-200/60 active:bg-slate-300/60 rounded-lg text-xs font-black text-slate-700 transition-colors">H2</button>
                        <button type="button" onClick={() => formatBlock('h3')} title="Judul Sedang" className="px-2.5 py-1.5 hover:bg-slate-200/60 active:bg-slate-300/60 rounded-lg text-xs font-bold text-slate-700 transition-colors">H3</button>
                        <button type="button" onClick={() => formatBlock('p')} title="Paragraf Biasa" className="px-2.5 py-1.5 hover:bg-slate-200/60 active:bg-slate-300/60 rounded-lg text-xs font-semibold text-slate-600 transition-colors">Teks</button>
                        <div className="w-px h-5 bg-slate-200 self-center mx-1" />
                        <button type="button" onClick={() => insertCustomBlock('info')} title="Kotak Penjelasan" className="px-3 py-1.5 bg-indigo-50 border border-indigo-100 hover:bg-indigo-100 text-indigo-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1">💡 Penjelasan</button>
                        <button type="button" onClick={() => insertCustomBlock('mission')} title="Kotak Penugasan / Misi" className="px-3 py-1.5 bg-orange-50 border border-orange-100 hover:bg-orange-100 text-orange-700 rounded-lg text-xs font-bold transition-all flex items-center gap-1">🎯 Misi Praktik</button>
                        <button type="button" onClick={() => insertCustomBlock('code')} title="Kotak Kode" className="px-3 py-1.5 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-mono font-bold transition-all">&lt;/&gt; Kode</button>
                      </div>

                      {/* Visual Content Workspace (Mimicking Student prose-custom) */}
                      <div 
                        ref={editorRef}
                        contentEditable={true}
                        onInput={handleEditorInput}
                        className="w-full min-h-[350px] max-h-[500px] p-6 focus:outline-none text-slate-800 leading-relaxed text-[15px] overflow-y-auto bg-stone-50/10 border-t border-slate-100
                          prose-custom
                          [&_h2]:text-2xl [&_h2]:font-black [&_h2]:mb-5 [&_h2]:mt-10 [&_h2]:tracking-tight [&_h2]:text-slate-900
                          [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-3 [&_h3]:mt-7 [&_h3]:text-slate-800
                          [&_p]:mb-5 [&_p]:leading-[1.8] [&_p]:text-slate-600
                          [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ul>li]:mb-2 [&_ul>li]:text-slate-600
                          [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_ol>li]:mb-2 [&_ol>li]:text-slate-600
                          [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:font-mono [&_code]:text-[13px] [&_code]:font-bold
                          [&_code]:bg-indigo-50 [&_code]:text-indigo-700
                          [&_strong]:font-bold [&_strong]:text-slate-900
                          [&_.bg-indigo-50]:bg-indigo-50
                          [&_.border-indigo-500]:border-indigo-500
                          [&_.text-indigo-900]:text-indigo-900
                          [&_.text-indigo-800]:text-indigo-800
                          [&_.bg-orange-50]:bg-orange-50
                          [&_.border-orange-200]:border-orange-200
                          [&_.text-orange-800]:text-orange-800
                          [&_.text-orange-900]:text-orange-900
                          [&_.bg-slate-100]:bg-slate-100
                          [&_.bg-slate-50]:bg-slate-50
                        "
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* QUIZ BUILDER */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-base">Quick Check-up (Asesmen Kuis)</h3>
                    <p className="text-xs text-slate-400 font-medium">Opsional. Buat kuis mini interaktif yang muncul di akhir materi ini.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Pertanyaan Kuis</label>
                    <input 
                      type="text" 
                      value={lesson.quizQuestion} 
                      onChange={e => setLesson({ ...lesson, quizQuestion: e.target.value })}
                      placeholder="Contoh: Apa fungsi utama tag &lt;div&gt; dalam HTML?"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-semibold"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {lesson.quizOptions.map((opt: string, oidx: number) => (
                      <div key={oidx}>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">Pilihan {['A', 'B', 'C', 'D'][oidx]}</label>
                        <input 
                          type="text" 
                          value={opt} 
                          onChange={e => {
                            const newOpts = [...lesson.quizOptions];
                            newOpts[oidx] = e.target.value;
                            setLesson({ ...lesson, quizOptions: newOpts });
                          }}
                          placeholder={`Jawaban Pilihan ${['A', 'B', 'C', 'D'][oidx]}`}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 text-sm font-semibold"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Jawaban yang Benar</label>
                      <select 
                        value={lesson.quizCorrectIndex} 
                        onChange={e => setLesson({ ...lesson, quizCorrectIndex: Number(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-bold bg-white"
                      >
                        <option value={0}>Pilihan A</option>
                        <option value={1}>Pilihan B</option>
                        <option value={2}>Pilihan C</option>
                        <option value={3}>Pilihan D</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Penjelasan Kuis</label>
                      <input 
                        type="text" 
                        value={lesson.quizExplanation} 
                        onChange={e => setLesson({ ...lesson, quizExplanation: e.target.value })}
                        placeholder="Tulis alasan kenapa jawaban tersebut benar..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 text-slate-800 font-semibold"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {lesson.type === 'code' && (
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-slate-400" /> Base Code Editor (Initial Code untuk Siswa)
                  </label>
                  <div className="h-[400px] rounded-xl overflow-hidden border border-slate-200">
                    <MonacoEditor
                      height="100%"
                      defaultLanguage={id === 'php' ? 'php' : id === 'javascript' ? 'javascript' : id === 'css' ? 'css' : 'html'}
                      value={lesson.code}
                      onChange={v => setLesson({ ...lesson, code: v || '' })}
                      options={{ minimap: { enabled: false }, padding: { top: 16 } }}
                    />
                  </div>
                </div>
              )}

              {lesson.type === 'video' && (
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Video URL (YouTube Embed / MP4)</label>
                  <input 
                    type="text" 
                    value={lesson.videoUrl} 
                    onChange={e => setLesson({ ...lesson, videoUrl: e.target.value })} 
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 text-slate-800 font-medium"
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
