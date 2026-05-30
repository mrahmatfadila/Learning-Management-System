'use client';

import React, { useState, useEffect } from 'react';
import { Plus, X, Edit, Trash2, Users, Clock, CheckCircle, Star } from 'lucide-react';

export default function InstructorTasks({ user, activeMenu }: { user: any; activeMenu?: string }) {
  const [modules, setModules] = useState<any[]>([]);
  const [selectedModule, setSelectedModule] = useState<string>('');
  const [tasks, setTasks] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [gradeModal, setGradeModal] = useState<any>(null);
  const [gradeForm, setGradeForm] = useState({ score: '', feedback: '' });
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [taskForm, setTaskForm] = useState({ title: '', description: '', deadline: '' });
  const [loading, setLoading] = useState(false);
  const [moduleStudents, setModuleStudents] = useState<any[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  useEffect(() => {
    // fetch instructor's modules
    const fetchModules = async () => {
      const res = await fetch(`http://localhost:5000/api/modules`);
      if (res.ok) {
        const all = await res.json();
        setModules(all.filter((m: any) => m.instructor?.id === user.id));
      }
    };
    fetchModules();
  }, [user.id]);

  useEffect(() => {
    if (!selectedModule) {
      setModuleStudents([]);
      return;
    }
    const fetchTasks = async () => {
      const res = await fetch(`http://localhost:5000/api/tasks/module/${selectedModule}`);
      if (res.ok) setTasks(await res.json());
    };
    const fetchStudents = async () => {
      const res = await fetch(`http://localhost:5000/api/enrollments/module/${selectedModule}`);
      if (res.ok) {
        const students = await res.json();
        setModuleStudents(students.filter((s: any) => s.status === 'APPROVED'));
      }
    };
    fetchTasks();
    fetchStudents();
  }, [selectedModule]);

  const fetchSubmissions = async (taskId: string) => {
    const res = await fetch(`http://localhost:5000/api/submissions/task/${taskId}`);
    if (res.ok) setSubmissions(await res.json());
  };

  const handleSelectTask = async (task: any) => {
    setSelectedTask(task);
    await fetchSubmissions(task.id);
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedModule) return alert('Pilih modul terlebih dahulu!');
    setLoading(true);
    const res = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...taskForm, moduleId: selectedModule, studentIds: selectedStudents })
    });
    if (res.ok) {
      setTaskForm({ title: '', description: '', deadline: '' });
      setSelectedStudents([]);
      setShowCreateForm(false);
      const updatedRes = await fetch(`http://localhost:5000/api/tasks/module/${selectedModule}`);
      if (updatedRes.ok) setTasks(await updatedRes.json());
    }
    setLoading(false);
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm('Hapus tugas ini?')) return;
    await fetch(`http://localhost:5000/api/tasks/${taskId}`, { method: 'DELETE' });
    setTasks(tasks.filter(t => t.id !== taskId));
    if (selectedTask?.id === taskId) setSelectedTask(null);
  };

  const handleGrade = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/submissions/${gradeModal.id}/grade`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ score: Number(gradeForm.score), feedback: gradeForm.feedback })
    });
    if (res.ok) {
      setGradeModal(null);
      setGradeForm({ score: '', feedback: '' });
      if (selectedTask) await fetchSubmissions(selectedTask.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Manajemen Tugas</h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Buat, lihat, dan nilai tugas siswa Anda.</p>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-indigo-650/20 text-sm"
        >
          <Plus className="w-4 h-4" /> Buat Tugas Baru
        </button>
      </div>

      {/* Module Selector */}
      <div className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 mb-6 shadow-sm">
        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Pilih Modul</label>
        <select
          value={selectedModule}
          onChange={e => { setSelectedModule(e.target.value); setSelectedTask(null); setSubmissions([]); }}
          className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
        >
          <option value="" className="text-slate-800 dark:text-slate-350 bg-white dark:bg-[#0c0e18]">-- Pilih Modul --</option>
          {modules.map(m => (
            <option key={m.id} value={m.id} className="text-slate-800 dark:text-slate-200 bg-white dark:bg-[#0c0e18]">{m.title}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Task List */}
        <div className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
          <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-indigo-500" /> Daftar Tugas
            <span className="ml-auto text-xs text-slate-400 dark:text-slate-500 font-normal">{tasks.length} tugas</span>
          </h3>
          {!selectedModule ? (
            <p className="text-sm text-slate-400 dark:text-slate-500 text-center py-6">Pilih modul untuk melihat tugas.</p>
          ) : tasks.length === 0 ? (
            <p className="text-sm text-slate-400 dark:text-slate-500 text-center py-6">Belum ada tugas di modul ini.</p>
          ) : (
            <div className="space-y-3">
              {tasks.map(task => (
                <div
                  key={task.id}
                  onClick={() => handleSelectTask(task)}
                  className={`p-4 rounded-xl cursor-pointer border transition-all ${selectedTask?.id === task.id ? 'border-indigo-400 bg-indigo-50 dark:border-indigo-500/80 dark:bg-indigo-950/20' : 'border-slate-200 dark:border-slate-800/80 hover:border-indigo-200 dark:hover:border-indigo-850 hover:bg-slate-50 dark:hover:bg-indigo-950/10'}`}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">{task.title}</h4>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDeleteTask(task.id); }}
                      className="p-1 hover:bg-red-105 dark:hover:bg-red-950/40 rounded text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="text-xs text-slate-505 dark:text-slate-400 mt-1 line-clamp-1 leading-relaxed">{task.description}</p>
                  {task.deadline && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-amber-600 dark:text-amber-400 font-medium">
                      <Clock className="w-3 h-3" />
                      {new Date(task.deadline).toLocaleDateString('id-ID')}
                    </div>
                  )}
                  <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="text-[10px] text-indigo-605 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 font-bold px-2 py-0.5 rounded-full">
                      {task.submissions?.length || 0} Terkumpul
                    </span>
                    {task.assignedStudents && task.assignedStudents.length > 0 ? (
                      <span className="text-[10px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-955/20 font-bold px-2 py-0.5 rounded-full">
                        Ke {task.assignedStudents.length} siswa
                      </span>
                    ) : (
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-955/20 font-bold px-2 py-0.5 rounded-full">
                        Semua siswa
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submissions Panel */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5">
          {!selectedTask ? (
            <div className="flex flex-col items-center justify-center h-full py-16 text-center">
              <div className="w-16 h-16 bg-slate-100 dark:bg-slate-900/60 border border-slate-150 dark:border-slate-800 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-slate-400 dark:text-slate-500" />
              </div>
              <h3 className="font-bold text-slate-700 dark:text-slate-350 mb-1">Pilih Tugas</h3>
              <p className="text-sm text-slate-400 dark:text-slate-500 max-w-xs leading-relaxed">Klik salah satu tugas di sebelah kiri untuk melihat pengumpulan siswa.</p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-850">
                <div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-100">{selectedTask.title}</h3>
                  <p className="text-xs text-slate-505 dark:text-slate-400 mt-1">{submissions.length} siswa sudah mengumpulkan</p>
                </div>
              </div>
              {submissions.length === 0 ? (
                <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm font-medium">Belum ada siswa yang mengumpulkan tugas ini.</div>
              ) : (
                <div className="space-y-4">
                  {submissions.map(sub => (
                    <div key={sub.id} className="border border-slate-200 dark:border-slate-850 rounded-xl p-4 hover:border-indigo-200 dark:hover:border-indigo-900 transition-all">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-slate-800 dark:text-slate-200">{sub.student?.name}</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{sub.student?.email}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {sub.status === 'GRADED' ? (
                            <span className="flex items-center gap-1 px-2.5 py-1 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-lg text-xs font-bold border border-emerald-200/50 dark:border-emerald-900/30">
                              <Star className="w-3 h-3" /> {sub.score}/100
                            </span>
                          ) : (
                            <span className="px-2.5 py-1 bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-450 rounded-lg text-xs font-bold border border-blue-200/50 dark:border-blue-900/30">Menunggu Penilaian</span>
                          )}
                        </div>
                      </div>
                      <a href={sub.fileUrl} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
                        🔗 Lihat File Tugas
                      </a>
                      {sub.feedback && (
                        <div className="mt-2 p-3 bg-slate-50 dark:bg-slate-900/50 border border-slate-100/50 dark:border-slate-850 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                          <span className="font-bold text-xs block mb-1">Feedback:</span>
                          {sub.feedback}
                        </div>
                      )}
                      <div className="mt-3">
                        <button
                          onClick={() => { setGradeModal(sub); setGradeForm({ score: sub.score?.toString() || '', feedback: sub.feedback || '' }); }}
                          className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 text-xs font-bold rounded-lg transition-colors border border-indigo-100 dark:border-indigo-900/30"
                        >
                          <Edit className="w-3.5 h-3.5" /> {sub.status === 'GRADED' ? 'Edit Nilai' : 'Beri Nilai'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Create Task Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-scaleIn">
            <div className="p-6 border-b border-slate-100 dark:border-slate-850 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Buat Tugas Baru</h3>
              <button onClick={() => setShowCreateForm(false)} className="p-2 hover:bg-slate-205 dark:hover:bg-slate-800 text-slate-400 dark:text-white rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleCreateTask} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-1">Pilih Modul</label>
                <select
                  required
                  value={selectedModule}
                  onChange={e => {
                    setSelectedModule(e.target.value);
                    setSelectedStudents([]);
                  }}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                >
                  <option value="" className="text-slate-800 dark:text-slate-350 bg-white dark:bg-[#0c0e18]">-- Pilih Modul --</option>
                  {modules.map(m => (
                    <option key={m.id} value={m.id} className="text-slate-800 dark:text-slate-200 bg-white dark:bg-[#0c0e18]">{m.title}</option>
                  ))}
                </select>
                {modules.length === 0 && (
                  <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">⚠ Anda belum memiliki modul. Buat modul terlebih dahulu di menu Courses.</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-1">Judul Tugas</label>
                <input
                  required value={taskForm.title} onChange={e => setTaskForm({ ...taskForm, title: e.target.value })}
                  placeholder="Contoh: Buat form registrasi HTML"
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-805 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-1">Deskripsi / Instruksi</label>
                <textarea
                  required value={taskForm.description} onChange={e => setTaskForm({ ...taskForm, description: e.target.value })}
                  rows={4} placeholder="Jelaskan detail tugas yang harus dikerjakan..."
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none placeholder:text-slate-400"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-350 mb-1">Batas Waktu (Opsional)</label>
                <input
                  type="datetime-local" value={taskForm.deadline} onChange={e => setTaskForm({ ...taskForm, deadline: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>

              {selectedModule && moduleStudents.length > 0 && (
                <div className="pt-2 border-t border-slate-100 dark:border-slate-850 mt-4">
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex justify-between">
                    <span>Pilih Siswa (Opsional)</span>
                    <span className="text-xs font-normal text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded-full">
                      {selectedStudents.length} / {moduleStudents.length} terpilih
                    </span>
                  </label>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Jika tidak ada yang dipilih, tugas akan ditugaskan ke semua siswa di modul ini.</p>
                  
                  <div className="max-h-40 overflow-y-auto space-y-2 bg-slate-50 dark:bg-[#0d101d]/60 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                    {moduleStudents.map(student => (
                      <label key={student.id} className="flex items-center gap-3 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-lg cursor-pointer transition-colors">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-indigo-600 dark:text-indigo-400 rounded border-slate-300 dark:border-slate-700 dark:bg-slate-800 focus:ring-indigo-500"
                          checked={selectedStudents.includes(student.id)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelectedStudents([...selectedStudents, student.id]);
                            } else {
                              setSelectedStudents(selectedStudents.filter(id => id !== student.id));
                            }
                          }}
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{student.name}</span>
                          <span className="text-xs text-slate-505 dark:text-slate-400">{student.email}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowCreateForm(false)} className="flex-1 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all">Batal</button>
                <button type="submit" disabled={loading || modules.length === 0} className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white font-bold rounded-xl shadow-lg shadow-indigo-600/20 transition-all">
                  {loading ? 'Menyimpan...' : 'Buat Tugas'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Grade Modal */}
      {gradeModal && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-md shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-scaleIn">
            <div className="p-6 border-b border-slate-100 dark:border-slate-850 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">Beri Nilai — {gradeModal.student?.name}</h3>
              <button onClick={() => setGradeModal(null)} className="p-2 hover:bg-slate-205 dark:hover:bg-slate-800 text-slate-400 dark:text-white rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleGrade} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-305 mb-1">Nilai (0-100)</label>
                <input
                  required type="number" min={0} max={100}
                  value={gradeForm.score} onChange={e => setGradeForm({ ...gradeForm, score: e.target.value })}
                  className="w-full px-4 py-3 border border-slate-202 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-305 mb-1">Feedback (Opsional)</label>
                <textarea
                  rows={3} value={gradeForm.feedback} onChange={e => setGradeForm({ ...gradeForm, feedback: e.target.value })}
                  placeholder="Berikan umpan balik yang membangun..."
                  className="w-full px-4 py-3 border border-slate-202 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none resize-none placeholder:text-slate-400"
                />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setGradeModal(null)} className="flex-1 py-3 bg-slate-101 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all">Batal</button>
                <button type="submit" className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-650/20 transition-all">
                  Simpan Nilai
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
