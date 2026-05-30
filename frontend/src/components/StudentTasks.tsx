'use client';

import React, { useState, useEffect } from 'react';
import { Clock, CheckSquare, UploadCloud, X, FileText, CheckCircle, AlertCircle } from 'lucide-react';

export default function StudentTasks({ user, activeMenu = 'Pending Tasks' }: { user: any, activeMenu?: string }) {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [fileUrl, setFileUrl] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/student/${user.id}`);
      if (res.ok) {
        setTasks(await res.json());
      }
    } catch (err) {
      console.error('Failed to fetch tasks', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fileUrl) return alert('Silakan masukkan link file tugas Anda!');
    setSubmitLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          taskId: selectedTask.id,
          studentId: user.id,
          fileUrl
        })
      });
      if (res.ok) {
        alert('Tugas berhasil dikumpulkan!');
        setSelectedTask(null);
        setFileUrl('');
        fetchTasks(); // Refresh data
      } else {
        alert('Gagal mengumpulkan tugas.');
      }
    } catch (err) {
      alert('Terjadi kesalahan jaringan.');
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  const pendingTasks = tasks.filter(t => !t.submissions || t.submissions.length === 0);
  const submittedTasks = tasks.filter(t => t.submissions && t.submissions.length > 0 && t.submissions[0].status !== 'GRADED');
  const gradedTasks = tasks.filter(t => t.submissions && t.submissions.length > 0 && t.submissions[0].status === 'GRADED');

  return (
    <div className="max-w-7xl mx-auto">

      {activeMenu === 'Pending Tasks' && (
        <div className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 transition-colors duration-300">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100 dark:border-slate-850">
            <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-800 dark:text-white">Tugas Belum Dikerjakan</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">{pendingTasks.length} tugas menunggu pengumpulan</p>
            </div>
          </div>

          {pendingTasks.length === 0 ? (
            <div className="text-center py-16">
              <CheckCircle className="w-16 h-16 text-emerald-300 dark:text-emerald-500/70 mx-auto mb-4" />
              <p className="text-lg font-bold text-slate-700 dark:text-slate-250">Tidak ada tugas tertunda!</p>
              <p className="text-sm text-slate-550 dark:text-slate-400 mt-1">Anda sudah menyelesaikan semua tugas. Pertahankan kerja bagus ini! 🎉</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingTasks.map(task => (
                <div key={task.id} className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-300 dark:hover:border-indigo-500/50 hover:shadow-lg dark:hover:shadow-indigo-950/10 transition-all group bg-white dark:bg-[#0c0e18] flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <span className="px-3 py-1 bg-amber-50 dark:bg-amber-955/20 text-amber-600 dark:text-amber-400 rounded-lg text-[10px] font-black uppercase tracking-wider border border-amber-200/55 dark:border-amber-900/30">
                        Pending
                      </span>
                      <div className="text-xs font-bold text-rose-500 dark:text-rose-400 flex items-center gap-1.5 bg-rose-50 dark:bg-rose-955/20 px-2.5 py-1 rounded-md border border-rose-100 dark:border-rose-900/30">
                        <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
                        {task.deadline ? new Date(task.deadline).toLocaleDateString('id-ID') : 'Tanpa Tenggat'}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1 line-clamp-1">{task.title}</h4>
                    <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-4">{task.module?.title}</p>
                    
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-4 mb-6 flex-1 border border-slate-100/50 dark:border-slate-850">
                      <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">{task.description}</p>
                    </div>
                  </div>
                  
                  <button onClick={() => setSelectedTask(task)} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2">
                    <UploadCloud className="w-4 h-4" /> Kumpulkan Tugas
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeMenu === 'Submitted' && (
        <div className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 transition-colors duration-300">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100 dark:border-slate-850">
            <div className="w-12 h-12 bg-blue-105 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-800 dark:text-white">Tugas Sedang Diperiksa</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">{submittedTasks.length} tugas menunggu penilaian instruktur</p>
            </div>
          </div>

          {submittedTasks.length === 0 ? (
            <div className="text-center py-16 text-slate-500 dark:text-slate-400 font-medium">Belum ada tugas yang sedang dalam tahap pemeriksaan.</div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {submittedTasks.map(task => {
                const submission = task.submissions[0];
                return (
                  <div key={task.id} className="border border-slate-200 dark:border-slate-800 rounded-2xl p-5 bg-slate-50 dark:bg-slate-900/40 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h4 className="text-lg font-bold text-slate-800 dark:text-white truncate max-w-md">{task.title}</h4>
                        <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-blue-200/50 dark:border-blue-900/30">
                          <Clock className="w-3 h-3 animate-spin" /> Sedang Diperiksa
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">{task.module?.title}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1 leading-relaxed">{task.description}</p>
                    </div>
                    <div className="shrink-0 flex items-center gap-3 w-full md:w-auto">
                      <a href={submission.fileUrl} target="_blank" rel="noopener noreferrer" className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold rounded-xl transition-all shadow-sm">
                        <FileText className="w-4 h-4 text-slate-450 dark:text-slate-500" /> Lihat File Terkirim
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {activeMenu === 'Grades & Feedback' && (
        <div className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 transition-colors duration-300">
          <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100 dark:border-slate-850">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-800 dark:text-white">Nilai & Umpan Balik</h3>
              <p className="text-sm text-slate-505 dark:text-slate-400 font-medium mt-1">{gradedTasks.length} tugas telah dinilai</p>
            </div>
          </div>

          {gradedTasks.length === 0 ? (
            <div className="text-center py-16 text-slate-500 dark:text-slate-400 font-medium">Belum ada tugas yang dinilai oleh instruktur.</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {gradedTasks.map(task => {
                const submission = task.submissions[0];
                const score = submission.score || 0;
                const isPerfect = score >= 90;
                
                return (
                  <div key={task.id} className="border border-slate-200 dark:border-slate-800 rounded-3xl p-6 bg-white dark:bg-[#0c0e18] relative overflow-hidden shadow-sm hover:shadow-md transition-all">
                    <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full -z-10 ${isPerfect ? 'bg-emerald-50 dark:bg-emerald-950/10' : 'bg-indigo-50 dark:bg-indigo-950/10'}`}></div>
                    
                    <div className="flex justify-between items-start mb-6 gap-4">
                      <div className="pr-4 min-w-0">
                        <span className="text-xs font-bold text-slate-500 dark:text-slate-405 uppercase tracking-wider">{task.module?.title}</span>
                        <h4 className="text-xl font-extrabold text-slate-805 dark:text-white mt-1 leading-tight line-clamp-2">{task.title}</h4>
                      </div>
                      <div className="text-right shrink-0 bg-white dark:bg-slate-900 rounded-2xl p-3 border border-slate-100 dark:border-slate-850 shadow-sm flex flex-col items-center min-w-[80px]">
                        <span className={`text-3xl font-black ${isPerfect ? 'text-emerald-500' : 'text-indigo-600 dark:text-indigo-400'}`}>{score}</span>
                        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 mt-1">/100</span>
                      </div>
                    </div>
                    
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-5 border border-slate-100/50 dark:border-slate-850">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold overflow-hidden ${isPerfect ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-450' : 'bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400'}`}>
                          {task.module?.instructor?.profilePicture ? (
                            <img src={task.module.instructor.profilePicture} alt="Instructor" className="w-full h-full object-cover" />
                          ) : (
                            task.module?.instructor?.name?.charAt(0) || 'I'
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-black uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Feedback Instruktur</p>
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">&quot;{submission.feedback || 'Tugas telah dikerjakan dengan baik.'}&quot;</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-850 flex justify-end">
                      <a href={submission.fileUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-405 hover:text-indigo-850 hover:underline">
                        <FileText className="w-4 h-4" /> Buka Kembali File Tugas
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Modal Pengumpulan */}
      {selectedTask && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-scaleIn">
            <div className="p-6 border-b border-slate-100 dark:border-slate-850 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white flex items-center gap-2">
                <UploadCloud className="w-5 h-5 text-indigo-500" /> Kumpulkan Tugas
              </h3>
              <button onClick={() => setSelectedTask(null)} className="p-2 hover:bg-slate-205 dark:hover:bg-slate-800 text-slate-400 dark:text-white rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-bold text-slate-800 dark:text-white text-xl mb-2 leading-snug">{selectedTask.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{selectedTask.description}</p>
                {selectedTask.deadline && (
                  <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 bg-rose-50 dark:bg-rose-955/20 text-rose-600 dark:text-rose-400 rounded-md text-xs font-bold border border-rose-100 dark:border-rose-900/30">
                    <AlertCircle className="w-3.5 h-3.5 animate-pulse" />
                    Batas Akhir: {new Date(selectedTask.deadline).toLocaleDateString('id-ID')}
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-1">URL File / Repositori / Drive</label>
                  <input
                    type="url"
                    required
                    value={fileUrl}
                    onChange={(e) => setFileUrl(e.target.value)}
                    placeholder="https://github.com/username/project"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all placeholder:text-slate-450"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-405 mt-2 font-medium">
                    Penting: Pastikan link tugas dapat diakses publik (tidak di-private).
                  </p>
                </div>

                <div className="pt-4 flex gap-3 border-t border-slate-100 dark:border-slate-850 mt-6">
                  <button type="button" onClick={() => setSelectedTask(null)} className="flex-1 py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all">
                    Batal
                  </button>
                  <button type="submit" disabled={submitLoading} className="flex-1 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20">
                    {submitLoading ? 'Mengirim...' : 'Kumpulkan Sekarang'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
