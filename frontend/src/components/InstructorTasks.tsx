'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Plus, X, Edit2, Trash2, Users, Clock, CheckCircle, Star, FileText,
  Search, Filter, Download, Sparkles, Award, Zap, Layers, ChevronRight,
  Eye, Calendar, CheckCircle2, AlertCircle, HelpCircle, Send, Copy, BookOpen
} from 'lucide-react';

export default function InstructorTasks({ user, activeMenu }: { user: any; activeMenu?: string }) {
  const [modules, setModules] = useState<any[]>([]);
  const [selectedModule, setSelectedModule] = useState<string>('');
  const [tasks, setTasks] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  
  // Modals
  const [gradeModal, setGradeModal] = useState<any>(null);
  const [gradeForm, setGradeForm] = useState({ score: '', feedback: '' });
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    deadline: '',
    taskType: 'ASSIGNMENT', // 'ASSIGNMENT' | 'QUIZ' | 'PROJECT'
    maxScore: '100'
  });
  
  const [loading, setLoading] = useState(false);
  const [moduleStudents, setModuleStudents] = useState<any[]>([]);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  
  // Active Tab & Filters
  const [activeTab, setActiveTab] = useState<'tasks' | 'submissions' | 'analytics'>('tasks');
  const [submissionFilter, setSubmissionFilter] = useState<'ALL' | 'PENDING' | 'GRADED'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [taskTypeFilter, setTaskTypeFilter] = useState<'ALL' | 'ASSIGNMENT' | 'QUIZ' | 'PROJECT'>('ALL');

  // Fetch instructor's modules
  useEffect(() => {
    const fetchModules = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/modules`);
        if (res.ok) {
          const all = await res.json();
          const filtered = all.filter((m: any) => m.instructor?.id === user.id);
          setModules(filtered);
          if (filtered.length > 0 && !selectedModule) {
            setSelectedModule(filtered[0].id);
          }
        }
      } catch (err) {
        console.error('Error fetching modules', err);
      }
    };
    fetchModules();
  }, [user.id]);

  // Fetch tasks & students when selectedModule changes
  useEffect(() => {
    if (!selectedModule) {
      setModuleStudents([]);
      setTasks([]);
      return;
    }
    const fetchTasks = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/tasks/module/${selectedModule}`);
        if (res.ok) {
          const data = await res.json();
          setTasks(data);
          if (data.length > 0 && !selectedTask) {
            handleSelectTask(data[0]);
          }
        }
      } catch (err) {
        console.error('Error fetching tasks', err);
      }
    };
    const fetchStudents = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/enrollments/module/${selectedModule}`);
        if (res.ok) {
          const students = await res.json();
          setModuleStudents(students.filter((s: any) => s.status === 'APPROVED'));
        }
      } catch (err) {
        console.error('Error fetching students', err);
      }
    };
    fetchTasks();
    fetchStudents();
  }, [selectedModule]);

  const fetchSubmissions = async (taskId: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/submissions/task/${taskId}`);
      if (res.ok) setSubmissions(await res.json());
    } catch (err) {
      console.error('Error fetching submissions', err);
    }
  };

  const handleSelectTask = async (task: any) => {
    setSelectedTask(task);
    await fetchSubmissions(task.id);
  };

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedModule) return alert('Pilih modul terlebih dahulu!');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...taskForm, moduleId: selectedModule, studentIds: selectedStudents })
      });
      if (res.ok) {
        setTaskForm({ title: '', description: '', deadline: '', taskType: 'ASSIGNMENT', maxScore: '100' });
        setSelectedStudents([]);
        setShowCreateForm(false);
        const updatedRes = await fetch(`http://localhost:5000/api/tasks/module/${selectedModule}`);
        if (updatedRes.ok) {
          const updated = await updatedRes.json();
          setTasks(updated);
          if (updated.length > 0) handleSelectTask(updated[updated.length - 1]);
        }
      }
    } catch (err) {
      console.error('Error creating task', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    if (!confirm('Hapus tugas/quiz ini beserta seluruh pengumpulan siswa?')) return;
    try {
      await fetch(`http://localhost:5000/api/tasks/${taskId}`, { method: 'DELETE' });
      const filtered = tasks.filter(t => t.id !== taskId);
      setTasks(filtered);
      if (selectedTask?.id === taskId) {
        setSelectedTask(filtered.length > 0 ? filtered[0] : null);
        if (filtered.length > 0) fetchSubmissions(filtered[0].id);
        else setSubmissions([]);
      }
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  const handleGrade = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
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
    } catch (err) {
      console.error('Error grading submission', err);
    }
  };

  // Quick feedback template insertion
  const applyPresetFeedback = (presetText: string, presetScore?: number) => {
    setGradeForm(prev => ({
      score: presetScore !== undefined ? presetScore.toString() : prev.score,
      feedback: prev.feedback ? `${prev.feedback}\n${presetText}` : presetText
    }));
  };

  // Stats calculation
  const stats = useMemo(() => {
    const totalTasks = tasks.length;
    const totalSubmissions = submissions.length;
    const gradedSubmissions = submissions.filter(s => s.status === 'GRADED').length;
    const pendingSubmissions = totalSubmissions - gradedSubmissions;
    
    let avgScore = 0;
    if (gradedSubmissions > 0) {
      const sum = submissions.filter(s => s.status === 'GRADED').reduce((acc, s) => acc + (s.score || 0), 0);
      avgScore = Math.round(sum / gradedSubmissions);
    }

    return { totalTasks, totalSubmissions, gradedSubmissions, pendingSubmissions, avgScore };
  }, [tasks, submissions]);

  // Filtered Submissions
  const filteredSubmissions = useMemo(() => {
    return submissions.filter(s => {
      const matchSearch =
        s.student?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.student?.email?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchFilter =
        submissionFilter === 'ALL' ? true :
        submissionFilter === 'GRADED' ? s.status === 'GRADED' : s.status !== 'GRADED';

      return matchSearch && matchFilter;
    });
  }, [submissions, searchQuery, submissionFilter]);

  // Filtered Tasks list
  const filteredTasks = useMemo(() => {
    return tasks.filter(t => {
      const matchType = taskTypeFilter === 'ALL' || t.taskType === taskTypeFilter;
      return matchType;
    });
  }, [tasks, taskTypeFilter]);

  // Export Grades to CSV
  const handleExportGrades = () => {
    if (submissions.length === 0) return alert('Belum ada data pengumpulan untuk diekspor!');
    const headers = ['Siswa', 'Email', 'Tugas', 'Nilai', 'Status', 'Feedback'];
    const rows = submissions.map(s => [
      `"${s.student?.name || ''}"`,
      `"${s.student?.email || ''}"`,
      `"${(selectedTask?.title || '').replace(/"/g, '""')}"`,
      `"${s.score !== null && s.score !== undefined ? s.score : '-'}"`,
      `"${s.status || 'SUBMITTED'}"`,
      `"${(s.feedback || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nilai-${selectedTask?.title || 'tugas'}-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* ── TOP HERO BANNER ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 md:p-8 text-white shadow-xl border border-indigo-900/40">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-black rounded-full border border-indigo-500/30 flex items-center gap-1.5 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Instructor Evaluation Portal
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-2.5">
              Manajemen Quiz & Tugas
            </h1>
            <p className="text-xs md:text-sm text-indigo-200/80 mt-1 max-w-2xl leading-relaxed">
              Buat penugasan interaktif, periksa hasil kuis siswa, berikan umpan balik instan, dan pantau statistik kelulusan.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap">
            <button
              onClick={() => setShowCreateForm(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-indigo-500/30 text-xs md:text-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" /> Buat Tugas / Quiz Baru
            </button>
          </div>
        </div>
      </div>

      {/* ── MODULE SELECTOR & METRICS CARDS ── */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Module Picker */}
        <div className="lg:col-span-1 bg-white dark:bg-[#0c0e18] p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <label className="block text-xs font-black text-slate-400 dark:text-slate-400 uppercase tracking-wider mb-2">
              Pilih Modul Pembelajaran
            </label>
            <select
              value={selectedModule}
              onChange={e => { setSelectedModule(e.target.value); setSelectedTask(null); setSubmissions([]); }}
              className="w-full px-4 py-3 border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-slate-100 text-xs font-bold focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none cursor-pointer"
            >
              <option value="" className="text-slate-800 dark:text-slate-350 bg-white dark:bg-[#0c0e18]">-- Pilih Modul --</option>
              {modules.map(m => (
                <option key={m.id} value={m.id} className="text-slate-800 dark:text-slate-200 bg-white dark:bg-[#0c0e18]">{m.title}</option>
              ))}
            </select>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500">
            <span>Siswa Terdaftar:</span>
            <span className="px-2 py-0.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 rounded-lg text-xs font-black">
              {moduleStudents.length} Siswa
            </span>
          </div>
        </div>

        {/* Metric 1: Total Tasks */}
        <div className="bg-white dark:bg-[#0c0e18] p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Penugasan</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-2">{stats.totalTasks}</div>
          <div className="text-[11px] text-slate-400 mt-1 font-bold">Quiz & Tugas Aktif</div>
        </div>

        {/* Metric 2: Submissions Ratio */}
        <div className="bg-white dark:bg-[#0c0e18] p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Terkumpul</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-2">{stats.totalSubmissions}</div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-bold">
            {stats.pendingSubmissions > 0 ? `⚠️ ${stats.pendingSubmissions} Belum Dinilai` : '✅ Semua Terpenuhi'}
          </div>
        </div>

        {/* Metric 3: Average Score */}
        <div className="bg-white dark:bg-[#0c0e18] p-5 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Rata-Rata Nilai</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-amber-600 dark:text-amber-400 mt-2">
            {stats.avgScore > 0 ? `${stats.avgScore} / 100` : '-'}
          </div>
          <div className="text-[11px] text-amber-600 dark:text-amber-400 mt-1 font-bold">
            {stats.gradedSubmissions} Siswa Dinilai
          </div>
        </div>
      </div>

      {/* ── MAIN WORKSPACE GRID ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ── LEFT PANEL: TASK LIST ── */}
        <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-black text-slate-800 dark:text-slate-200 text-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500" /> Daftar Tugas & Quiz
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-black text-slate-500">
              {filteredTasks.length} Tugas
            </span>
          </div>

          {/* Task Type Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {[
              { id: 'ALL', label: 'Semua' },
              { id: 'ASSIGNMENT', label: 'Tugas' },
              { id: 'QUIZ', label: 'Quiz' },
              { id: 'PROJECT', label: 'Proyek' }
            ].map(tf => (
              <button
                key={tf.id}
                onClick={() => setTaskTypeFilter(tf.id as any)}
                className={`px-3 py-1 rounded-xl text-[10px] font-black transition-all cursor-pointer ${
                  taskTypeFilter === tf.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-900 text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-100 dark:border-slate-800'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>

          {!selectedModule ? (
            <div className="py-12 text-center text-slate-400">
              <BookOpen className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
              <p className="text-xs font-bold">Pilih modul di atas untuk melihat tugas.</p>
            </div>
          ) : filteredTasks.length === 0 ? (
            <div className="py-12 text-center text-slate-400">
              <FileText className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
              <p className="text-xs font-bold">Belum ada tugas di kategori ini.</p>
              <button
                onClick={() => setShowCreateForm(true)}
                className="mt-3 text-xs font-black text-indigo-600 hover:underline"
              >
                + Buat Tugas Pertama
              </button>
            </div>
          ) : (
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
              {filteredTasks.map(task => {
                const isSelected = selectedTask?.id === task.id;
                return (
                  <div
                    key={task.id}
                    onClick={() => handleSelectTask(task)}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all relative group ${
                      isSelected
                        ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/20 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-800 hover:bg-slate-50/80 dark:hover:bg-slate-900/40'
                    }`}
                  >
                    <div className="flex justify-between items-start gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${
                            task.taskType === 'QUIZ'
                              ? 'bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300'
                              : task.taskType === 'PROJECT'
                              ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300'
                              : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'
                          }`}>
                            {task.taskType || 'TUGAS'}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-slate-800 dark:text-slate-200 text-xs truncate">
                          {task.title}
                        </h4>
                      </div>
                      <button
                        onClick={(e) => { e.stopPropagation(); handleDeleteTask(task.id); }}
                        className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                        title="Hapus Tugas"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {task.description}
                    </p>

                    <div className="flex items-center justify-between gap-2 mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold">
                      {task.deadline ? (
                        <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                          <Clock className="w-3 h-3" />
                          {new Date(task.deadline).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                        </div>
                      ) : (
                        <div className="text-slate-400 font-normal">Tanpa Deadline</div>
                      )}

                      <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded-md font-black">
                        {task.submissions?.length || 0} Terkumpul
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* ── RIGHT PANEL: SUBMISSIONS & GRADING ── */}
        <div className="lg:col-span-2 bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 space-y-4">
          {!selectedTask ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/30 rounded-2xl flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="font-black text-slate-800 dark:text-slate-200 text-sm">Pilih Tugas / Quiz</h3>
              <p className="text-xs text-slate-400 max-w-xs mt-1">Klik salah satu tugas dari daftar di sebelah kiri untuk melihat pengumpulan siswa dan memberi nilai.</p>
            </div>
          ) : (
            <>
              {/* Task Title Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-slate-800 dark:text-slate-100 text-base">{selectedTask.title}</h3>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {submissions.length} siswa sudah mengumpulkan • Maksimal Nilai: 100
                  </p>
                </div>

                <button
                  onClick={handleExportGrades}
                  className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Ekspor Nilai (CSV)
                </button>
              </div>

              {/* Submissions Search & Filter */}
              <div className="flex items-center justify-between gap-3 flex-wrap bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                <div className="relative flex-1 min-w-[200px]">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari nama atau email siswa..."
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    className="w-full pl-8 pr-3 py-1.5 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setSubmissionFilter('ALL')}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                      submissionFilter === 'ALL' ? 'bg-indigo-600 text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Semua ({submissions.length})
                  </button>
                  <button
                    onClick={() => setSubmissionFilter('PENDING')}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                      submissionFilter === 'PENDING' ? 'bg-amber-600 text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Belum Dinilai ({submissions.filter(s => s.status !== 'GRADED').length})
                  </button>
                  <button
                    onClick={() => setSubmissionFilter('GRADED')}
                    className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
                      submissionFilter === 'GRADED' ? 'bg-emerald-600 text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    Sudah Dinilai ({submissions.filter(s => s.status === 'GRADED').length})
                  </button>
                </div>
              </div>

              {/* Submissions List */}
              {filteredSubmissions.length === 0 ? (
                <div className="text-center py-16 text-slate-400 text-xs font-bold">
                  Tidak ada pengumpulan yang sesuai dengan filter.
                </div>
              ) : (
                <div className="space-y-3.5 max-h-[500px] overflow-y-auto pr-1">
                  {filteredSubmissions.map(sub => (
                    <div
                      key={sub.id}
                      className="border border-slate-200 dark:border-slate-800 rounded-2xl p-4 hover:border-indigo-300 dark:hover:border-indigo-800 transition-all bg-white dark:bg-[#0c0e18]"
                    >
                      <div className="flex justify-between items-start gap-3">
                        <div className="flex items-center gap-3">
                          {sub.student?.profilePicture ? (
                            <img
                              src={sub.student.profilePicture}
                              alt={sub.student.name}
                              className="w-10 h-10 rounded-2xl object-cover shrink-0 shadow-sm border border-slate-200 dark:border-slate-800"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white font-black text-xs flex items-center justify-center uppercase shadow-sm">
                              {sub.student?.name?.slice(0, 2) || 'ST'}
                            </div>
                          )}
                          <div>
                            <h4 className="font-extrabold text-slate-800 dark:text-white text-xs">
                              {sub.student?.name}
                            </h4>
                            <p className="text-[11px] text-slate-400">{sub.student?.email}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          {sub.status === 'GRADED' ? (
                            <span className="flex items-center gap-1 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 rounded-xl text-xs font-black border border-emerald-200 dark:border-emerald-800">
                              <Star className="w-3.5 h-3.5 fill-emerald-500" /> {sub.score} / 100
                            </span>
                          ) : (
                            <span className="px-3 py-1 bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-xl text-xs font-black border border-amber-200 dark:border-amber-800">
                              ⏳ Perlu Penilaian
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Submitted File / Content Link */}
                      <div className="mt-3 p-3 bg-slate-50 dark:bg-[#0d101d] rounded-xl border border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 truncate">
                          <FileText className="w-4 h-4 text-indigo-500 shrink-0" />
                          <span className="truncate font-bold">{sub.fileUrl || 'Jawaban Tugas / Kode'}</span>
                        </div>
                        {sub.fileUrl && (
                          <a
                            href={sub.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-[11px] font-bold transition-all shrink-0 flex items-center gap-1"
                          >
                            Buka File <ChevronRight className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Feedback Display */}
                      {sub.feedback && (
                        <div className="mt-2.5 p-3 bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/30 rounded-xl text-xs text-slate-700 dark:text-slate-300">
                          <span className="font-black text-[10px] text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block mb-1">
                            Umpan Balik Instruktur:
                          </span>
                          <p className="leading-relaxed">{sub.feedback}</p>
                        </div>
                      )}

                      {/* Action Button */}
                      <div className="mt-3 flex justify-end">
                        <button
                          onClick={() => {
                            setGradeModal(sub);
                            setGradeForm({ score: sub.score?.toString() || '', feedback: sub.feedback || '' });
                          }}
                          className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black transition-all shadow-md shadow-indigo-600/20 cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                          {sub.status === 'GRADED' ? 'Edit Nilai & Feedback' : 'Beri Nilai Sekarang'}
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

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 1: CREATE TASK / QUIZ ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-scaleIn">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 flex items-center justify-center font-bold">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-800 dark:text-white">Buat Tugas / Quiz Baru</h3>
                  <p className="text-xs text-slate-400">Atur instruksi, tipe penugasan, dan batas waktu</p>
                </div>
              </div>
              <button onClick={() => setShowCreateForm(false)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 rounded-xl transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateTask} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Pilih Modul Pembelajaran</label>
                <select
                  required
                  value={selectedModule}
                  onChange={e => {
                    setSelectedModule(e.target.value);
                    setSelectedStudents([]);
                  }}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-slate-100 text-xs font-bold focus:outline-none"
                >
                  <option value="" className="text-slate-800 dark:text-slate-350 bg-white dark:bg-[#0c0e18]">-- Pilih Modul --</option>
                  {modules.map(m => (
                    <option key={m.id} value={m.id} className="text-slate-800 dark:text-slate-200 bg-white dark:bg-[#0c0e18]">{m.title}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Tipe Penugasan</label>
                  <select
                    value={taskForm.taskType}
                    onChange={e => setTaskForm({ ...taskForm, taskType: e.target.value })}
                    className="w-full px-3 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-slate-100 text-xs font-bold focus:outline-none"
                  >
                    <option value="ASSIGNMENT">📋 Tugas Praktikum</option>
                    <option value="QUIZ">⚡ Quiz Kuis Mandiri</option>
                    <option value="PROJECT">🚀 Proyek Akhir</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Maksimal Nilai</label>
                  <input
                    type="number"
                    value={taskForm.maxScore}
                    onChange={e => setTaskForm({ ...taskForm, maxScore: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white text-xs font-bold focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Judul Tugas / Quiz</label>
                <input
                  required
                  value={taskForm.title}
                  onChange={e => setTaskForm({ ...taskForm, title: e.target.value })}
                  placeholder="Contoh: Kuis Interaktif Logika & Algoritma"
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white text-xs font-bold focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Deskripsi / Instruksi Soal</label>
                <textarea
                  required
                  rows={4}
                  value={taskForm.description}
                  onChange={e => setTaskForm({ ...taskForm, description: e.target.value })}
                  placeholder="Tuliskan petunjuk pengerjaan, soal kuis, atau kriteria penilaian..."
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white text-xs font-bold focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Batas Waktu Pengumpulan (Deadline)</label>
                <input
                  type="datetime-local"
                  value={taskForm.deadline}
                  onChange={e => setTaskForm({ ...taskForm, deadline: e.target.value })}
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white text-xs font-bold focus:outline-none"
                />
              </div>

              {selectedModule && moduleStudents.length > 0 && (
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2 flex justify-between">
                    <span>Target Siswa (Opsional)</span>
                    <span className="text-[11px] font-bold text-indigo-600">
                      {selectedStudents.length === 0 ? 'Ditugaskan ke Semua Siswa' : `${selectedStudents.length} Terpilih`}
                    </span>
                  </label>
                  
                  <div className="max-h-36 overflow-y-auto space-y-1.5 bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-200 dark:border-slate-800">
                    {moduleStudents.map(student => (
                      <label key={student.id} className="flex items-center gap-2.5 p-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer text-xs">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-indigo-600 rounded"
                          checked={selectedStudents.includes(student.id)}
                          onChange={(e) => {
                            if (e.target.checked) setSelectedStudents([...selectedStudents, student.id]);
                            else setSelectedStudents(selectedStudents.filter(id => id !== student.id));
                          }}
                        />
                        <span className="font-bold text-slate-700 dark:text-slate-200">{student.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2.5">
                <button type="button" onClick={() => setShowCreateForm(false)} className="px-4 py-2 text-xs font-bold text-slate-500">Batal</button>
                <button
                  type="submit"
                  disabled={loading || modules.length === 0}
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black shadow-md disabled:opacity-60"
                >
                  {loading ? 'Menyimpan...' : 'Terbitkan Tugas'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 2: GRADE & AI ASSISTANT FEEDBACK ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {gradeModal && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-md shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-scaleIn">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <div>
                <h3 className="text-base font-black text-slate-800 dark:text-white">Beri Nilai & Feedback</h3>
                <p className="text-xs text-slate-400 mt-0.5">Siswa: {gradeModal.student?.name}</p>
              </div>
              <button onClick={() => setGradeModal(null)} className="p-2 text-slate-400 hover:text-slate-600 rounded-xl">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleGrade} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Nilai Akhir (0 - 100)</label>
                <input
                  required
                  type="number"
                  min={0}
                  max={100}
                  value={gradeForm.score}
                  onChange={e => setGradeForm({ ...gradeForm, score: e.target.value })}
                  placeholder="Contoh: 95"
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white text-xs font-bold focus:outline-none"
                />
              </div>

              {/* Quick Score Presets */}
              <div className="flex items-center gap-1.5">
                {[100, 90, 85, 75, 60].map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setGradeForm(prev => ({ ...prev, score: s.toString() }))}
                    className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 text-[11px] font-bold rounded-lg transition-colors cursor-pointer"
                  >
                    {s} Pts
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Umpan Balik Instruktur</label>
                <textarea
                  rows={3}
                  value={gradeForm.feedback}
                  onChange={e => setGradeForm({ ...gradeForm, feedback: e.target.value })}
                  placeholder="Tuliskan apresiasi atau bagian yang perlu ditingkatkan..."
                  className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-slate-50 dark:bg-[#0d101d] text-slate-800 dark:text-white text-xs font-bold focus:outline-none resize-none"
                />
              </div>

              {/* Quick Preset Feedback Buttons */}
              <div>
                <label className="block text-[10px] font-black text-slate-400 uppercase tracking-wider mb-1.5">Template Umpan Balik Instan:</label>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => applyPresetFeedback('🌟 Pekerjaan sangat luar biasa! Kode rapi, logika sistematis, dan sesuai spesifikasi.', 100)}
                    className="px-2 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-[10px] font-bold hover:bg-emerald-100"
                  >
                    👏 Sempurna (100)
                  </button>
                  <button
                    type="button"
                    onClick={() => applyPresetFeedback('👍 Sangat baik! Hasil pengerjaan sudah memenuhi kriteria dengan baik.', 90)}
                    className="px-2 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg text-[10px] font-bold hover:bg-indigo-100"
                  >
                    👍 Sangat Baik (90)
                  </button>
                  <button
                    type="button"
                    onClick={() => applyPresetFeedback('⚠️ Cukup baik, namun perhatikan kerapian penulisan variabel dan logika penanganan error.', 75)}
                    className="px-2 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-lg text-[10px] font-bold hover:bg-amber-100"
                  >
                    ⚠️ Perlu Perbaikan (75)
                  </button>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2.5">
                <button type="button" onClick={() => setGradeModal(null)} className="px-4 py-2 text-xs font-bold text-slate-500">Batal</button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow-md cursor-pointer"
                >
                  Simpan & Terbitkan Nilai
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
