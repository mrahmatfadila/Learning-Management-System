'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Clock, CheckSquare, UploadCloud, X, FileText, CheckCircle, AlertCircle,
  FolderArchive, ExternalLink, RefreshCw, Send, Check, Sparkles, MessageSquare,
  FileCode, Layers, ShieldCheck, Star, Trash2, ArrowUpRight, Link2, HardDrive,
  CheckCircle2, Eye, Download
} from 'lucide-react';

/* ─── GitHub Icon SVG ─── */
function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export interface ParsedSubmission {
  submissionType: 'FILE' | 'GITHUB' | 'BOTH';
  fileUrl?: string;
  githubUrl?: string;
  fileName?: string;
  branch?: string;
  liveUrl?: string;
  notes?: string;
  submittedAt?: string;
}

export function parseSubmissionData(raw: string | undefined | null): ParsedSubmission {
  if (!raw) return { submissionType: 'FILE' };
  try {
    if (raw.startsWith('{')) {
      return JSON.parse(raw);
    }
  } catch {
    // fallback
  }
  if (raw.includes('github.com')) {
    return { submissionType: 'GITHUB', githubUrl: raw };
  }
  return { submissionType: 'FILE', fileUrl: raw, fileName: 'File Lampiran Tugas' };
}

export function getDirectDownloadUrl(fileUrl?: string, fileName?: string): string {
  if (!fileUrl && !fileName) return '';

  // 1. If fileUrl contains /uploads/submissions/, use filename from URL
  if (fileUrl && fileUrl.includes('/uploads/submissions/')) {
    const filename = fileUrl.split('/uploads/submissions/').pop();
    if (filename) {
      return `http://localhost:5000/api/submissions/download/${encodeURIComponent(filename)}`;
    }
  }

  // 2. If it's a real Google Drive file link, convert to direct export download link
  if (fileUrl) {
    const driveMatch = fileUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || fileUrl.match(/id=([a-zA-Z0-9_-]+)/);
    if (driveMatch && driveMatch[1]) {
      return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
    }
  }

  // 3. If fileName is provided (e.g. "dataset_ecommerce_transaksi.xlsx"), download from backend!
  if (fileName && !['File Tugas', 'Tautan Cloud Storage', 'Tautan Cloud Drive', 'File Lampiran Siswa', 'File Lampiran Tugas'].includes(fileName)) {
    return `http://localhost:5000/api/submissions/download/${encodeURIComponent(fileName)}`;
  }

  // 4. If fileUrl is a local server file URL
  if (fileUrl && fileUrl.includes(':5000')) {
    const lastPart = fileUrl.split('/').pop();
    if (lastPart) {
      return `http://localhost:5000/api/submissions/download/${encodeURIComponent(lastPart)}`;
    }
  }

  return '';
}

export function isLocalSubmissionFile(fileUrl?: string): boolean {
  if (!fileUrl) return false;
  return fileUrl.includes(':5000/uploads/') || fileUrl.includes('/uploads/submissions/');
}

export function isGoogleDriveUrl(url?: string): boolean {
  if (!url) return false;
  return url.includes('drive.google.com') || url.includes('docs.google.com');
}

export function getFileBadgeInfo(name: string) {
  const ext = name.split('.').pop()?.toLowerCase() || '';
  if (['xlsx', 'xls', 'csv'].includes(ext)) {
    return { icon: FileText, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20', label: 'DATASET' };
  }
  if (['zip', 'rar', '7z', 'tar', 'gz'].includes(ext)) {
    return { icon: FolderArchive, color: 'text-amber-500 bg-amber-500/10 border-amber-500/20', label: 'ARSIP ZIP' };
  }
  if (['pdf'].includes(ext)) {
    return { icon: FileText, color: 'text-rose-500 bg-rose-500/10 border-rose-500/20', label: 'PDF' };
  }
  if (['doc', 'docx'].includes(ext)) {
    return { icon: FileText, color: 'text-blue-500 bg-blue-500/10 border-blue-500/20', label: 'DOCX' };
  }
  if (['js', 'ts', 'jsx', 'tsx', 'py', 'php', 'html', 'css', 'json', 'sql', 'java', 'c', 'cpp'].includes(ext)) {
    return { icon: FileCode, color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20', label: 'SOURCE CODE' };
  }
  if (['png', 'jpg', 'jpeg', 'webp', 'gif', 'svg'].includes(ext)) {
    return { icon: Layers, color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20', label: 'GAMBAR' };
  }
  return { icon: FileText, color: 'text-slate-500 bg-slate-500/10 border-slate-500/20', label: 'FILE DOKUMEN' };
}

export function formatDeadlineDateTime(raw: string | Date | undefined | null) {
  if (!raw) return 'Tanpa Tenggat';
  const d = new Date(raw);
  if (isNaN(d.getTime())) return 'Tanpa Tenggat';
  const dateStr = d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
  const timeStr = d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  return `${dateStr} • ${timeStr} WIB`;
}

export function getDeadlineCountdown(raw: string | Date | undefined | null) {
  if (!raw) return null;
  const target = new Date(raw).getTime();
  if (isNaN(target)) return null;
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { text: 'Tenggat Terlewat', isOverdue: true, isUrgent: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) {
    return { text: `Sisa ${days} hari ${hours} jam`, isUrgent: days <= 1, isOverdue: false };
  }
  if (hours > 0) {
    return { text: `Sisa ${hours} jam ${minutes} mnt`, isUrgent: true, isOverdue: false };
  }
  return { text: `Sisa ${minutes} menit lagi!`, isUrgent: true, isOverdue: false };
}


export default function StudentTasks({ user, activeMenu = 'Pending Tasks' }: { user: any, activeMenu?: string }) {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<any>(null);

  // ─── Rich Submission States ───
  const [submissionTab, setSubmissionTab] = useState<'FILE' | 'GITHUB' | 'BOTH'>('FILE');
  
  // File Upload State
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileMode, setFileMode] = useState<'LOCAL' | 'CLOUD'>('LOCAL');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileBase64, setFileBase64] = useState<string>('');
  const [fileName, setFileName] = useState<string>('');
  const [fileSizeText, setFileSizeText] = useState<string>('');
  const [existingFileUrl, setExistingFileUrl] = useState<string>('');
  const [cloudUrl, setCloudUrl] = useState<string>('');
  const [dragOver, setDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');

  // GitHub Submission State
  const [githubUrl, setGithubUrl] = useState('');
  const [branch, setBranch] = useState('main');
  const [liveUrl, setLiveUrl] = useState('');

  // General Notes
  const [notes, setNotes] = useState('');
  const [submitLoading, setSubmitLoading] = useState(false);
  const [feedbackSuccess, setFeedbackSuccess] = useState('');

  useEffect(() => {
    fetchTasks();
  }, [user?.id]);

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

  // Open modal & prepopulate if already submitted (for updating)
  const openSubmitModal = (task: any) => {
    setSelectedTask(task);
    setFeedbackSuccess('');
    setUploadError('');
    setIsUploading(false);
    setUploadProgress(0);
    
    if (task.submissions && task.submissions.length > 0) {
      const parsed = parseSubmissionData(task.submissions[0].fileUrl);
      const hasFile = Boolean(parsed.fileUrl || parsed.fileName);
      const hasGithub = Boolean(parsed.githubUrl);

      if (hasFile && hasGithub) {
        setSubmissionTab('BOTH');
      } else if (hasGithub) {
        setSubmissionTab('GITHUB');
      } else {
        setSubmissionTab('FILE');
      }

      if (hasGithub) {
        setGithubUrl(parsed.githubUrl || '');
        setBranch(parsed.branch || 'main');
        setLiveUrl(parsed.liveUrl || '');
      } else {
        setGithubUrl('');
        setBranch('main');
        setLiveUrl('');
      }

      if (hasFile) {
        const url = parsed.fileUrl || '';
        if (url.includes('drive.google.com') || url.includes('dropbox.com') || url.includes('onedrive') || (url.startsWith('http') && !url.includes(':5000/uploads'))) {
          setFileMode('CLOUD');
          setCloudUrl(url);
          setExistingFileUrl(url);
          setFileName(parsed.fileName || 'Tautan Cloud Drive');
        } else {
          setFileMode('LOCAL');
          setExistingFileUrl(url);
          setFileName(parsed.fileName || 'File Tugas Sebelumnya');
          setFileSizeText('Tersimpan di Server');
        }
      } else {
        setFileMode('LOCAL');
        setSelectedFile(null);
        setFileBase64('');
        setFileName('');
        setFileSizeText('');
        setExistingFileUrl('');
        setCloudUrl('');
      }
      setNotes(parsed.notes || '');
    } else {
      setSubmissionTab('FILE');
      setFileMode('LOCAL');
      setSelectedFile(null);
      setFileBase64('');
      setFileName('');
      setFileSizeText('');
      setExistingFileUrl('');
      setCloudUrl('');
      setGithubUrl('');
      setBranch('main');
      setLiveUrl('');
      setNotes('');
    }
  };

  // Handle file selection with immediate upload to server
  const handleFileChange = (file: File) => {
    if (file.size > 50 * 1024 * 1024) {
      alert('Ukuran file melebihi 50MB. Silakan gunakan tab "Link Drive / Cloud" untuk melampirkan tugas melalui Google Drive / Dropbox.');
      return;
    }

    setSelectedFile(file);
    setFileName(file.name);
    setUploadError('');
    setExistingFileUrl('');
    
    // Human readable size
    let formattedSize = '';
    if (file.size < 1024) {
      formattedSize = `${file.size} B`;
    } else if (file.size < 1024 * 1024) {
      formattedSize = `${(file.size / 1024).toFixed(1)} KB`;
    } else {
      formattedSize = `${(file.size / (1024 * 1024)).toFixed(1)} MB`;
    }
    setFileSizeText(formattedSize);

    // Read and immediately upload to server for instant responsiveness
    setIsUploading(true);
    setUploadProgress(20);

    const reader = new FileReader();
    reader.onload = async () => {
      const b64 = reader.result as string;
      setFileBase64(b64);
      setUploadProgress(60);

      try {
        const uploadRes = await fetch('http://localhost:5000/api/submissions/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName: file.name,
            fileData: b64
          })
        });

        if (!uploadRes.ok) {
          throw new Error('Gagal mengunggah file ke server');
        }

        const uploadData = await uploadRes.json();
        setExistingFileUrl(uploadData.fileUrl);
        setUploadProgress(100);
      } catch (err: any) {
        console.error('Upload error:', err);
        setUploadError(err.message || 'Gagal mengunggah file ke server');
      } finally {
        setIsUploading(false);
      }
    };

    reader.onerror = () => {
      setIsUploading(false);
      setUploadError('Gagal membaca file lokal');
    };

    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  // Validate GitHub link
  const isGithubValid = (url: string) => {
    return /^https?:\/\/(www\.)?github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+/.test(url.trim());
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitLoading(true);

    try {
      let finalFileUrl = existingFileUrl;
      let finalFileName = fileName;

      // Handle File Submission (for 'FILE' or 'BOTH')
      if (submissionTab === 'FILE' || submissionTab === 'BOTH') {
        if (fileMode === 'CLOUD') {
          if (!cloudUrl || !/^https?:\/\/.+/.test(cloudUrl.trim())) {
            alert('Silakan masukkan tautan Google Drive / Dropbox / Cloud Storage yang valid!\nContoh: https://drive.google.com/...');
            setSubmitLoading(false);
            return;
          }
          finalFileUrl = cloudUrl.trim();
          finalFileName = finalFileName || 'Tautan Cloud Storage';
        } else {
          if (isUploading) {
            alert('Mohon tunggu sejenak hingga proses pengunggahan file selesai.');
            setSubmitLoading(false);
            return;
          }

          if (!existingFileUrl && !selectedFile) {
            alert('Silakan pilih file tugas (ZIP/PDF/Kode/Dataset) terlebih dahulu!');
            setSubmitLoading(false);
            return;
          }

          // Fallback if not yet uploaded
          if (!existingFileUrl && selectedFile && fileBase64) {
            const uploadRes = await fetch('http://localhost:5000/api/submissions/upload', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                fileName: selectedFile.name,
                fileData: fileBase64
              })
            });

            if (!uploadRes.ok) {
              throw new Error('Gagal mengunggah file ke server');
            }
            const uploadData = await uploadRes.json();
            finalFileUrl = uploadData.fileUrl;
            finalFileName = uploadData.fileName || selectedFile.name;
          }
        }
      }

      // Handle GitHub Submission (for 'GITHUB' or 'BOTH')
      if (submissionTab === 'GITHUB' || submissionTab === 'BOTH') {
        if (!githubUrl || !isGithubValid(githubUrl)) {
          alert('Silakan masukkan tautan repositori GitHub yang valid!\nContoh: https://github.com/username/project');
          setSubmitLoading(false);
          return;
        }
      }

      // Submit payload to backend
      const payload = {
        taskId: selectedTask.id,
        studentId: user.id,
        submissionType: submissionTab,
        fileUrl: (submissionTab === 'FILE' || submissionTab === 'BOTH') ? finalFileUrl : '',
        fileName: (submissionTab === 'FILE' || submissionTab === 'BOTH') ? finalFileName : '',
        githubUrl: (submissionTab === 'GITHUB' || submissionTab === 'BOTH') ? githubUrl.trim() : '',
        branch: (submissionTab === 'GITHUB' || submissionTab === 'BOTH') ? (branch.trim() || 'main') : '',
        liveUrl: (submissionTab === 'GITHUB' || submissionTab === 'BOTH') ? liveUrl.trim() : '',
        notes: notes.trim()
      };

      const res = await fetch('http://localhost:5000/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setFeedbackSuccess('Tugas berhasil dikumpulkan dan siap diperiksa instruktur!');
        setTimeout(() => {
          setSelectedTask(null);
          fetchTasks();
        }, 1200);
      } else {
        const errData = await res.json();
        alert('Gagal mengumpulkan tugas: ' + (errData?.message || 'Terjadi kesalahan'));
      }
    } catch (err: any) {
      alert('Terjadi kesalahan: ' + (err?.message || err));
    } finally {
      setSubmitLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="w-10 h-10 border-4 border-indigo-200 border-t-indigo-600 dark:border-t-indigo-400 rounded-full animate-spin" />
      </div>
    );
  }

  const pendingTasks = tasks.filter(t => !t.submissions || t.submissions.length === 0);
  const submittedTasks = tasks.filter(t => t.submissions && t.submissions.length > 0 && t.submissions[0].status !== 'GRADED');
  const gradedTasks = tasks.filter(t => t.submissions && t.submissions.length > 0 && t.submissions[0].status === 'GRADED');

  return (
    <div className="max-w-7xl mx-auto space-y-6">

      {/* ─── TAB 1: PENDING TASKS ─── */}
      {activeMenu === 'Pending Tasks' && (
        <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 transition-colors duration-300">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center shadow-inner">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white">Tugas Belum Dikerjakan</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {pendingTasks.length} tugas aktif menunggu pengumpulan Anda
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50">
              {pendingTasks.length} Tertunda
            </span>
          </div>

          {pendingTasks.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <p className="text-lg font-black text-slate-800 dark:text-white">Semua Tugas Sudah Selesai!</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Luar biasa! Tidak ada tugas yang tertunda. Pantau tab Tugas Sedang Diperiksa untuk melihat penilaian instruktur. 🎉
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pendingTasks.map(task => (
                <div
                  key={task.id}
                  className="border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-indigo-400 dark:hover:border-indigo-500/50 hover:shadow-xl dark:hover:shadow-indigo-950/20 transition-all flex flex-col justify-between bg-white dark:bg-[#0e1222]"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3 gap-2">
                      <span className="px-3 py-1 bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 rounded-lg text-[10px] font-black uppercase tracking-wider border border-amber-200/50 dark:border-amber-800/40">
                        Menunggu Pengumpulan
                      </span>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <div className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 bg-slate-100 dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-800">
                          <Clock className="w-3.5 h-3.5 text-indigo-500" />
                          <span>{formatDeadlineDateTime(task.deadline)}</span>
                        </div>
                        {task.deadline && (() => {
                          const cd = getDeadlineCountdown(task.deadline);
                          if (!cd) return null;
                          return (
                            <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${
                              cd.isOverdue
                                ? 'bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900/50'
                                : cd.isUrgent
                                ? 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-900/50 animate-pulse'
                                : 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-900/50'
                            }`}>
                              {cd.text}
                            </span>
                          );
                        })()}
                      </div>
                    </div>

                    <h4 className="text-lg font-black text-slate-800 dark:text-white mb-1 line-clamp-1">{task.title}</h4>
                    <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-4">{task.module?.title}</p>
                    
                    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-4 mb-6 border border-slate-100 dark:border-slate-800">
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                        {task.description}
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => openSubmitModal(task)}
                    className="w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-sm rounded-xl transition-all shadow-md shadow-indigo-600/25 flex items-center justify-center gap-2 group"
                  >
                    <UploadCloud className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Kumpulkan Tugas (File / GitHub)</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ─── TAB 2: SUBMITTED TASKS ─── */}
      {activeMenu === 'Submitted' && (
        <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 transition-colors duration-300">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center shadow-inner">
                <CheckSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white">Tugas Sedang Diperiksa</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {submittedTasks.length} tugas berhasil dikirimkan dan menunggu review instruktur
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50">
              {submittedTasks.length} Dalam Review
            </span>
          </div>

          {submittedTasks.length === 0 ? (
            <div className="text-center py-16 text-slate-400 dark:text-slate-500 text-sm font-semibold">
              Belum ada tugas yang sedang dalam tahap pemeriksaan instruktur.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5">
              {submittedTasks.map(task => {
                const sub = task.submissions[0];
                const parsed = parseSubmissionData(sub.fileUrl);

                return (
                  <div
                    key={task.id}
                    className="border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 bg-slate-50/70 dark:bg-[#0e1222] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-indigo-300 dark:hover:border-indigo-800 transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-2 flex-wrap">
                        <h4 className="text-lg font-black text-slate-800 dark:text-white truncate max-w-md">
                          {task.title}
                        </h4>
                        
                        {/* Format Badges */}
                        {parsed.submissionType === 'BOTH' || (parsed.fileUrl && parsed.githubUrl) ? (
                          <span className="px-2.5 py-0.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg text-xs font-black flex items-center gap-1.5 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-amber-300" /> File + GitHub Repo
                          </span>
                        ) : parsed.submissionType === 'GITHUB' || parsed.githubUrl ? (
                          <span className="px-2.5 py-0.5 bg-slate-800 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm">
                            <GithubIcon className="w-3.5 h-3.5" /> GitHub Repo
                          </span>
                        ) : (
                          <span className="px-2.5 py-0.5 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-indigo-200 dark:border-indigo-800">
                            <FolderArchive className="w-3.5 h-3.5" /> File Upload
                          </span>
                        )}

                        <span className="px-2.5 py-0.5 bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 rounded-lg text-xs font-bold flex items-center gap-1.5 border border-amber-200 dark:border-amber-800/40">
                          <Clock className="w-3 h-3 animate-pulse" /> Menunggu Penilaian
                        </span>
                      </div>

                      <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                        {task.module?.title}
                      </p>

                      {/* Display Deliverables Preview (File Card & GitHub Card) */}
                      <div className="space-y-2 mt-3 text-xs">
                        {Boolean(parsed.fileUrl || parsed.fileName) && (() => {
                          const isLocal = isLocalSubmissionFile(parsed.fileUrl);
                          const isDrive = isGoogleDriveUrl(parsed.fileUrl);
                          const downloadLink = getDirectDownloadUrl(parsed.fileUrl, parsed.fileName);

                          return (
                            <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                              <div className="flex items-center gap-2.5 min-w-0">
                                <FolderArchive className="w-4 h-4 text-indigo-500 shrink-0" />
                                <div className="min-w-0">
                                  <span className="font-bold text-slate-800 dark:text-white truncate block max-w-xs sm:max-w-sm" title={parsed.fileName}>
                                    {parsed.fileName || 'File Lampiran Tugas'}
                                  </span>
                                  <span className="text-[10px] text-slate-400">
                                    {isLocal ? '📁 Tersimpan di Server DevGrow' : isDrive ? '☁️ Google Drive' : '☁️ Cloud'}
                                  </span>
                                </div>
                              </div>

                              <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                                {downloadLink && (
                                  <a
                                    href={downloadLink}
                                    download={parsed.fileName || 'tugas_terkirim'}
                                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-black shadow-sm shadow-emerald-600/20 cursor-pointer"
                                    title="Unduh langsung file tugas ke laptop/komputer Anda"
                                  >
                                    <Download className="w-3.5 h-3.5" />
                                    <span>Unduh File Langsung</span>
                                  </a>
                                )}
                                {parsed.fileUrl && (
                                  <a
                                    href={parsed.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700"
                                  >
                                    {isDrive ? <HardDrive className="w-3.5 h-3.5 text-indigo-500" /> : <Eye className="w-3.5 h-3.5" />}
                                    <span>{isDrive ? 'Buka Drive' : 'Pratinjau'}</span>
                                    <ExternalLink className="w-3 h-3 opacity-60" />
                                  </a>
                                )}
                              </div>
                            </div>
                          );
                        })()}

                        {Boolean(parsed.githubUrl) && (
                          <div className="p-3 bg-slate-900 dark:bg-[#070913] text-white rounded-xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <GithubIcon className="w-4 h-4 text-white shrink-0" />
                              <div className="min-w-0">
                                <span className="font-mono font-bold truncate text-white block max-w-xs sm:max-w-sm">
                                  {parsed.githubUrl?.replace('https://github.com/', '')}
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">
                                  branch: {parsed.branch || 'main'}
                                </span>
                              </div>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0">
                              <a
                                href={parsed.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-slate-950 hover:bg-slate-200 rounded-xl text-xs font-black"
                              >
                                <span>Buka Repo</span>
                                <ArrowUpRight className="w-3 h-3" />
                              </a>
                              {parsed.liveUrl && (
                                <a
                                  href={parsed.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold"
                                >
                                  <span>Demo</span>
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Student Notes display */}
                      {parsed.notes && (
                        <div className="mt-3 p-3 bg-white dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 italic">
                          <span className="font-bold not-italic text-slate-500 dark:text-slate-400 mr-1.5">Catatan Anda:</span>
                          &quot;{parsed.notes}&quot;
                        </div>
                      )}
                    </div>

                    <div className="shrink-0 flex items-center gap-2.5 w-full md:w-auto">
                      <button
                        onClick={() => openSubmitModal(task)}
                        className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold rounded-xl transition-all shadow-sm text-xs"
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        <span>Kirim Ulang / Edit</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ─── TAB 3: GRADES & FEEDBACK ─── */}
      {activeMenu === 'Grades & Feedback' && (
        <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 transition-colors duration-300">
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-800/80">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center shadow-inner">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white">Nilai & Umpan Balik Instruktur</h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {gradedTasks.length} tugas telah dinilai dan diverifikasi
                </p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50">
              {gradedTasks.length} Dinilai
            </span>
          </div>

          {gradedTasks.length === 0 ? (
            <div className="text-center py-16 text-slate-400 dark:text-slate-500 text-sm font-semibold">
              Belum ada tugas yang selesai dinilai oleh instruktur.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {gradedTasks.map(task => {
                const sub = task.submissions[0];
                const score = sub.score || 0;
                const isPerfect = score >= 85;
                const parsed = parseSubmissionData(sub.fileUrl);
                
                return (
                  <div
                    key={task.id}
                    className="border border-slate-200 dark:border-slate-800 rounded-3xl p-6 bg-white dark:bg-[#0e1222] relative overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-5 gap-4">
                        <div className="pr-4 min-w-0">
                          <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            {task.module?.title}
                          </span>
                          <h4 className="text-xl font-black text-slate-800 dark:text-white mt-1 leading-snug">
                            {task.title}
                          </h4>
                        </div>
                        <div className="text-right shrink-0 bg-slate-50 dark:bg-slate-900 rounded-2xl p-3 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center min-w-[85px]">
                          <span className={`text-3xl font-black ${isPerfect ? 'text-emerald-500' : 'text-indigo-600 dark:text-indigo-400'}`}>
                            {score}
                          </span>
                          <span className="text-[10px] font-extrabold uppercase text-slate-400 dark:text-slate-500">
                            / 100 POIN
                          </span>
                        </div>
                      </div>
                      
                      {/* Feedback Box */}
                      <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-4 sm:p-5 border border-slate-100 dark:border-slate-800 mb-4">
                        <div className="flex items-start gap-3.5">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold overflow-hidden ${
                            isPerfect
                              ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400'
                              : 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400'
                          }`}>
                            {task.module?.instructor?.profilePicture ? (
                              <img src={task.module.instructor.profilePicture} alt="Instructor" className="w-full h-full object-cover" />
                            ) : (
                              task.module?.instructor?.name?.charAt(0) || 'I'
                            )}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                              Ulasan & Umpan Balik Instruktur
                            </p>
                            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic">
                              &quot;{sub.feedback || 'Tugas telah dikerjakan dengan baik dan memenuhi kriteria kelulusan.'}&quot;
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom actions & deliverables preview */}
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2 text-xs">
                      {Boolean(parsed.fileUrl || parsed.fileName) && (() => {
                        const isLocal = isLocalSubmissionFile(parsed.fileUrl);
                        const isDrive = isGoogleDriveUrl(parsed.fileUrl);
                        const downloadLink = getDirectDownloadUrl(parsed.fileUrl, parsed.fileName);

                        return (
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-slate-50 dark:bg-slate-900/80 rounded-xl border border-slate-200/60 dark:border-slate-800">
                            <div className="flex items-center gap-2 min-w-0">
                              <FolderArchive className="w-4 h-4 text-indigo-500 shrink-0" />
                              <span className="font-bold text-slate-800 dark:text-white truncate block max-w-xs" title={parsed.fileName}>
                                {parsed.fileName || 'File Tugas'}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {downloadLink && (
                                <a
                                  href={downloadLink}
                                  download={parsed.fileName || 'tugas_terkirim'}
                                  className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-sm"
                                  title="Unduh langsung file tugas Anda"
                                >
                                  <Download className="w-3.5 h-3.5" />
                                  <span>Unduh File</span>
                                </a>
                              )}
                              {parsed.fileUrl && (
                                <a
                                  href={parsed.fileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 px-2.5 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-medium border border-slate-200 dark:border-slate-700"
                                >
                                  {isDrive ? <HardDrive className="w-3.5 h-3.5 text-blue-500" /> : <Eye className="w-3.5 h-3.5" />}
                                  <span>{isDrive ? 'Buka Drive' : 'Pratinjau'}</span>
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })()}

                      {Boolean(parsed.githubUrl) && (
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2.5 bg-slate-900 dark:bg-[#070913] text-white rounded-xl border border-slate-800">
                          <div className="flex items-center gap-2 min-w-0">
                            <GithubIcon className="w-4 h-4 text-white shrink-0" />
                            <span className="font-mono font-bold truncate text-white block max-w-xs">
                              {parsed.githubUrl?.replace('https://github.com/', '')}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <a
                              href={parsed.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1 bg-white text-slate-950 rounded-lg text-xs font-bold"
                            >
                              <span>Buka Repo</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                            {parsed.liveUrl && (
                              <a
                                href={parsed.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold"
                              >
                                <span>Demo</span>
                              </a>
                            )}
                          </div>
                        </div>
                      )}

                      <button
                        onClick={() => openSubmitModal(task)}
                        className="text-xs font-bold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 underline"
                      >
                        Kirim Revisi
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════
          MODAL PENGUMPULAN TUGAS CANGGIH (FILE & GITHUB)
      ══════════════════════════════════════════════════════ */}
      {selectedTask && (
        <div className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white dark:bg-[#0f111e] rounded-3xl w-full max-w-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8 animate-fadeIn">
            
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800/80 flex items-center justify-between bg-slate-50/70 dark:bg-slate-900/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/30">
                  <UploadCloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-800 dark:text-white">
                    Kumpulkan Tugas Pembelajaran
                  </h3>
                  <p className="text-xs text-slate-400">Pilih metode pengumpulan file atau repositori GitHub</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTask(null)}
                className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6">
              
              {/* Task Details Header Card */}
              <div className="mb-6 p-4 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40">
                <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-600 text-white">
                  {selectedTask.module?.title || 'Modul Pembelajaran'}
                </span>
                <h4 className="font-black text-slate-900 dark:text-white text-lg mt-2 mb-1">
                  {selectedTask.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                  {selectedTask.description}
                </p>
                {selectedTask.deadline && (() => {
                  const cd = getDeadlineCountdown(selectedTask.deadline);
                  return (
                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 rounded-xl text-xs font-bold border border-amber-200/60 dark:border-amber-900/40">
                        <Clock className="w-3.5 h-3.5" />
                        <span>
                          Tenggat Waktu: {new Date(selectedTask.deadline).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}, Pukul {new Date(selectedTask.deadline).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })} WIB
                        </span>
                      </div>
                      {cd && (
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg border ${
                          cd.isOverdue
                            ? 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-300 dark:border-rose-800'
                            : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800'
                        }`}>
                          {cd.text}
                        </span>
                      )}
                    </div>
                  );
                })()}
              </div>

              {/* Success Notification */}
              {feedbackSuccess && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <span className="text-xs font-bold">{feedbackSuccess}</span>
                </div>
              )}

              {/* Mode Switcher Tabs (File vs GitHub vs Both) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5 rounded-2xl p-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mb-6">
                <button
                  type="button"
                  onClick={() => setSubmissionTab('FILE')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                    submissionTab === 'FILE'
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <FolderArchive className="w-4 h-4" />
                  <span>Upload File Saja</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubmissionTab('GITHUB')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                    submissionTab === 'GITHUB'
                      ? 'bg-slate-900 dark:bg-slate-800 text-white shadow-md'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repo Saja</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSubmissionTab('BOTH')}
                  className={`py-2.5 px-2 rounded-xl text-xs font-black transition-all flex items-center justify-center gap-1.5 ${
                    submissionTab === 'BOTH'
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  <span>Keduanya (File + GitHub)</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* ─── OPTION 1: FILE UPLOAD DRAG & DROP ZONE & CLOUD LINK ─── */}
                {(submissionTab === 'FILE' || submissionTab === 'BOTH') && (
                  <div className="space-y-4">
                    {/* Mode Sub-Tabs */}
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        <FolderArchive className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                        <span>Lampiran File Tugas</span>
                      </label>

                      {/* Mini Switcher */}
                      <div className="flex bg-slate-100 dark:bg-slate-900 rounded-xl p-0.5 border border-slate-200 dark:border-slate-800 text-[11px] font-bold">
                        <button
                          type="button"
                          onClick={() => setFileMode('LOCAL')}
                          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                            fileMode === 'LOCAL'
                              ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm'
                              : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                          }`}
                        >
                          <UploadCloud className="w-3.5 h-3.5" />
                          <span>Unggah Komputer (Utama)</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => setFileMode('CLOUD')}
                          className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                            fileMode === 'CLOUD'
                              ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm'
                              : 'text-slate-500 hover:text-slate-800 dark:hover:text-white'
                          }`}
                        >
                          <HardDrive className="w-3.5 h-3.5" />
                          <span>Link Drive (Opsi Cadangan)</span>
                        </button>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800 flex items-center gap-2">
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 shrink-0">💡 Prioritas:</span>
                      <span>
                        Pilih <strong>Unggah Komputer</strong> agar file langsung tersimpan di server dan instruktur dapat mengunduhnya dengan 1-klik. Gunakan <strong>Link Drive</strong> hanya jika file Anda bermasalah atau berukuran sangat besar (&gt; 50MB).
                      </span>
                    </div>

                    {/* SUB-OPTION A: LOCAL FILE UPLOAD (CLICKABLE & DRAGGABLE) */}
                    {fileMode === 'LOCAL' && (
                      <div className="space-y-3">
                        {/* Hidden Native File Input */}
                        <input
                          ref={fileInputRef}
                          type="file"
                          id="task-file-input"
                          onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
                          className="hidden"
                          accept=".zip,.rar,.7z,.tar,.gz,.pdf,.png,.jpg,.jpeg,.py,.js,.ts,.jsx,.tsx,.php,.html,.css,.doc,.docx,.xlsx,.sql,.json,.txt"
                        />

                        {/* Interactive Drag & Drop Box */}
                        {!existingFileUrl && !isUploading && (
                          <div
                            onClick={() => fileInputRef.current?.click()}
                            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                            onDragLeave={() => setDragOver(false)}
                            onDrop={handleDrop}
                            className={`cursor-pointer group relative border-2 border-dashed rounded-3xl p-7 text-center transition-all duration-200 select-none ${
                              dragOver
                                ? 'border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/40 scale-[1.01] shadow-lg shadow-indigo-500/10'
                                : 'border-slate-300 dark:border-slate-700/80 bg-slate-50/50 dark:bg-[#0c0e18] hover:border-indigo-500 dark:hover:border-indigo-400 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20'
                            }`}
                          >
                            <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-3.5 shadow-sm group-hover:scale-110 transition-transform">
                              <UploadCloud className="w-7 h-7" />
                            </div>

                            <p className="text-sm font-bold text-slate-800 dark:text-white">
                              Tarik & Lepaskan file tugas ke sini, atau{' '}
                              <span className="text-indigo-600 dark:text-indigo-400 group-hover:underline">
                                Klik untuk Jelajahi File
                              </span>
                            </p>
                            
                            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-2">
                              Mendukung ZIP, PDF, Gambar, Dokumen, atau Source Code (Maksimal 50MB)
                            </p>
                          </div>
                        )}

                        {/* Uploading Progress Indicator */}
                        {isUploading && (
                          <div className="p-6 rounded-3xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 text-center animate-fadeIn">
                            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-3 animate-spin">
                              <RefreshCw className="w-5 h-5" />
                            </div>
                            <p className="text-xs font-black text-slate-800 dark:text-white">
                              Mengunggah file ke server DevGrow... {uploadProgress}%
                            </p>
                            <div className="w-full bg-slate-200 dark:bg-slate-800 rounded-full h-2 mt-3 overflow-hidden">
                              <div
                                className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                                style={{ width: `${uploadProgress}%` }}
                              />
                            </div>
                            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
                              {fileName} ({fileSizeText})
                            </p>
                          </div>
                        )}

                        {/* Upload Error Banner */}
                        {uploadError && (
                          <div className="p-3.5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2.5">
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            <span>{uploadError}</span>
                          </div>
                        )}

                        {/* Uploaded File Card with Actions */}
                        {existingFileUrl && !isUploading && (() => {
                          const badge = getFileBadgeInfo(fileName || 'file');
                          const BadgeIcon = badge.icon;
                          return (
                            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between gap-3 animate-fadeIn">
                              <div className="flex items-center gap-3.5 min-w-0">
                                <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                                  <BadgeIcon className="w-5 h-5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-2">
                                    <p className="text-xs sm:text-sm font-black text-slate-900 dark:text-white truncate">
                                      {fileName || 'File Tugas'}
                                    </p>
                                    <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-[10px] font-black uppercase tracking-wider">
                                      {fileSizeText || badge.label}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">
                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                    <span>File tersimpan di server & siap dikumpulkan</span>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-2 shrink-0">
                                <a
                                  href={existingFileUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  download
                                  className="px-3 py-1.5 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
                                  title="Pratinjau / Unduh File"
                                >
                                  <Eye className="w-3.5 h-3.5" />
                                  <span className="hidden sm:inline">Pratinjau</span>
                                </a>

                                <button
                                  type="button"
                                  onClick={() => fileInputRef.current?.click()}
                                  className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl transition-colors text-xs font-bold"
                                  title="Ganti File"
                                >
                                  <RefreshCw className="w-4 h-4" />
                                </button>

                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedFile(null);
                                    setFileBase64('');
                                    setExistingFileUrl('');
                                    setFileName('');
                                    setFileSizeText('');
                                  }}
                                  className="p-2 hover:bg-rose-100 dark:hover:bg-rose-950/40 text-rose-500 rounded-xl transition-colors"
                                  title="Hapus file"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}

                    {/* SUB-OPTION B: CLOUD DRIVE LINK */}
                    {fileMode === 'CLOUD' && (
                      <div className="space-y-3 p-4 rounded-2xl bg-slate-50 dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 animate-fadeIn">
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
                          Tautan Google Drive / Dropbox / OneDrive *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Link2 className="w-4 h-4" />
                          </div>
                          <input
                            type="url"
                            value={cloudUrl}
                            onChange={(e) => setCloudUrl(e.target.value)}
                            placeholder="https://drive.google.com/file/d/... atau https://dropbox.com/..."
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
                          />
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          💡 <strong>Petunjuk:</strong> Pastikan setelan berbagi (share settings) di Google Drive disetel ke <em>&quot;Siapa saja yang memiliki tautan (Anyone with the link)&quot;</em> agar instruktur dapat mengakses tugas Anda.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* ─── DIVIDER FOR BOTH MODE ─── */}
                {submissionTab === 'BOTH' && (
                  <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-slate-200 dark:border-slate-800" />
                    </div>
                    <div className="relative flex justify-center">
                      <span className="bg-white dark:bg-[#0f111a] px-3.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-800 text-[11px] font-black uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 shadow-xs">
                        <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Lampiran Repositori GitHub
                      </span>
                    </div>
                  </div>
                )}

                {/* ─── OPTION 2: GITHUB REPOSITORY ─── */}
                {(submissionTab === 'GITHUB' || submissionTab === 'BOTH') && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        URL Repositori GitHub *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <GithubIcon className="w-4 h-4" />
                        </div>
                        <input
                          type="url"
                          required
                          value={githubUrl}
                          onChange={(e) => setGithubUrl(e.target.value)}
                          placeholder="https://github.com/username/project-repo"
                          className="w-full pl-10 pr-10 py-3 bg-slate-50 dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm font-mono text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
                        />
                        {githubUrl && isGithubValid(githubUrl) && (
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-emerald-500">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-1 font-medium">
                        Pastikan repositori disetel sebagai <strong>Public</strong> agar instruktur dapat mereview kode Anda.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Nama Branch
                        </label>
                        <input
                          type="text"
                          value={branch}
                          onChange={(e) => setBranch(e.target.value)}
                          placeholder="main"
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-mono text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                          Live Demo URL (Opsional)
                        </label>
                        <input
                          type="url"
                          value={liveUrl}
                          onChange={(e) => setLiveUrl(e.target.value)}
                          placeholder="https://myapp.vercel.app"
                          className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ─── GENERAL NOTES / CATATAN MAHASISWA ─── */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                    Catatan untuk Instruktur (Opsional)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tuliskan catatan teknis, kendala yang dihadapi, atau petunjuk cara menjalankan tugas..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-xl text-xs sm:text-sm text-slate-800 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-4 flex gap-3 border-t border-slate-100 dark:border-slate-800/80">
                  <button
                    type="button"
                    onClick={() => setSelectedTask(null)}
                    className="flex-1 py-3 px-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold rounded-xl transition-all text-xs sm:text-sm"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={submitLoading}
                    className="flex-1 py-3 px-4 bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 hover:from-indigo-500 hover:to-violet-600 disabled:opacity-50 text-white font-black rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    {submitLoading ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Mengirimkan Tugas...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Kirim Tugas Sekarang</span>
                      </>
                    )}
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
