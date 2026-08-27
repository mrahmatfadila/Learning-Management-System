'use client';
import {
  BookOpen, Plus, Search, Edit2, Trash2, X, CheckCircle, Layers, Clock, Users,
  CheckSquare, XCircle, AlertCircle, User, Mail, BookMarked, ShieldCheck, ShieldX,
  Copy, Folder, BarChart, ArrowRightLeft, Download, Eye, LayoutGrid, List,
  TrendingUp, Sparkles, Filter, Check, ArrowUpDown, ChevronRight, Shield, Heart, Settings
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';

const DEFAULT_CATEGORIES = ['Programming', 'Jaringan', 'IT Support', 'Database', 'Design', 'Mobile', 'Web', 'Skripsi', 'Lainnya'];

const getCourseTheme = (title: string) => {
  const t = title?.toLowerCase() || '';
  if (t.includes('html')) return { bg: 'from-orange-500 to-red-600', label: 'HTML', emoji: 'HTML', logo: 'HTML5' };
  if (t.includes('css')) return { bg: 'from-blue-500 to-indigo-600', label: 'CSS', emoji: 'CSS', logo: 'CSS3' };
  if (t.includes('javascript') || t.includes('js')) return { bg: 'from-yellow-400 to-amber-500', label: 'JS', emoji: 'JS', logo: 'JS' };
  if (t.includes('php')) return { bg: 'from-purple-500 to-violet-600', label: 'PHP', emoji: 'PHP', logo: 'PHP' };
  if (t.includes('mysql') || t.includes('sql') || t.includes('database')) return { bg: 'from-sky-500 to-cyan-600', label: 'SQL', emoji: 'SQL', logo: 'SQL' };
  if (t.includes('git')) return { bg: 'from-rose-500 to-pink-600', label: 'GIT', emoji: 'GIT', logo: 'GIT' };
  if (t.includes('react') || t.includes('mobile')) return { bg: 'from-cyan-500 to-teal-600', label: 'RN', emoji: 'RN', logo: 'React' };
  if (t.includes('cisco') || t.includes('jaringan') || t.includes('network') || t.includes('packet')) return { bg: 'from-emerald-500 to-green-600', label: 'NET', emoji: 'NET', logo: 'CISCO' };
  if (t.includes('python')) return { bg: 'from-green-500 to-emerald-600', label: 'PY', emoji: 'PY', logo: 'PYTHON' };
  if (t.includes('ui') || t.includes('ux') || t.includes('design')) return { bg: 'from-fuchsia-500 to-pink-600', label: 'UI', emoji: 'UI', logo: 'UI/UX' };
  if (t.includes('java')) return { bg: 'from-red-500 to-orange-600', label: 'JV', emoji: 'JV', logo: 'JAVA' };
  if (t.includes('node') || t.includes('express')) return { bg: 'from-lime-500 to-green-600', label: 'NODE', emoji: 'NODE', logo: 'NODE' };
  if (t.includes('typescript') || t.includes('ts')) return { bg: 'from-blue-600 to-indigo-700', label: 'TS', emoji: 'TS', logo: 'TS' };
  if (t.includes('figma') || t.includes('wireframe')) return { bg: 'from-purple-400 to-pink-500', label: 'FIG', emoji: 'FIG', logo: 'FIGMA' };
  if (t.includes('security') || t.includes('cyber')) return { bg: 'from-red-600 to-rose-800', label: 'SEC', emoji: 'SEC', logo: 'SEC' };
  return { bg: 'from-indigo-500 to-purple-600', label: 'LMS', emoji: 'LMS', logo: 'BOOK' };
};

const getDifficulty = (m: any) => {
  const t = (m?.title || '').toLowerCase();
  if (t.includes('dasar') || t.includes('basic') || t.includes('intro') || t.includes('pemula')) return { label: 'Pemula', color: 'text-emerald-600 bg-emerald-50 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30' };
  if (t.includes('lanjut') || t.includes('advanced') || t.includes('expert')) return { label: 'Mahir', color: 'text-red-600 bg-red-50 border-red-200 dark:bg-red-950/20 dark:text-red-400 dark:border-red-900/30' };
  return { label: 'Menengah', color: 'text-amber-600 bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30' };
};

const getSkillTags = (m: any): string[] => {
  const t = ((m?.title || '') + ' ' + (m?.description || '')).toLowerCase();
  const tags: string[] = [];
  if (t.includes('html')) tags.push('HTML');
  if (t.includes('css')) tags.push('CSS');
  if (t.includes('javascript') || t.includes('js')) tags.push('JavaScript');
  if (t.includes('php')) tags.push('PHP');
  if (t.includes('mysql') || t.includes('database') || t.includes('sql')) tags.push('Database');
  if (t.includes('git')) tags.push('Git');
  if (t.includes('ui') || t.includes('ux') || t.includes('design')) tags.push('UI/UX');
  if (t.includes('mobile') || t.includes('android')) tags.push('Mobile');
  if (t.includes('cisco') || t.includes('network')) tags.push('Network');
  return tags.length > 0 ? tags : ['Web Dev', 'Coding'];
};

export default function ManageModulesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // User & role
  const [user, setUser] = useState<{ id: string; name: string; role: string; email: string } | null>(null);
  const role = user?.role?.toUpperCase() || 'STUDENT';
  const isAdmin = role === 'ADMIN';
  const canManage = role === 'ADMIN' || role === 'INSTRUCTOR';

  // Data states
  const [modules, setModules] = useState<any[]>([]);
  const [instructors, setInstructors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Filter & search states
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedInstructorFilter, setSelectedInstructorFilter] = useState<string>('ALL');
  const [verificationFilter, setVerificationFilter] = useState<'ALL' | 'VERIFIED' | 'UNVERIFIED'>('ALL');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Multi-select bulk actions
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkActionLoading, setBulkActionLoading] = useState(false);

  // Custom categories state
  const [customCategories, setCustomCategories] = useState<string[]>(DEFAULT_CATEGORIES);
  const [newCatInput, setNewCatInput] = useState('');

  // Approvals state
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loadingEnrollments, setLoadingEnrollments] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);

  // Create / Edit modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedModule, setSelectedModule] = useState<any>(null);
  const [formData, setFormData] = useState({ title: '', category: 'Programming', description: '', instructorId: '', thumbnail: '' });
  const [thumbnailPreview, setThumbnailPreview] = useState<string>('');
  const [formError, setFormError] = useState('');
  const [saving, setSaving] = useState(false);

  // Duplicate modal state
  const [isDuplicateModalOpen, setIsDuplicateModalOpen] = useState(false);
  const [duplicateTargetModule, setDuplicateTargetModule] = useState<any>(null);
  const [duplicateTargetInstructorId, setDuplicateTargetInstructorId] = useState('');
  const [duplicating, setDuplicating] = useState(false);

  // Bulk Reassign modal state
  const [isBulkReassignOpen, setIsBulkReassignOpen] = useState(false);
  const [bulkTargetInstructorId, setBulkTargetInstructorId] = useState('');

  // Instructor Transfer modal state
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [transferFromId, setTransferFromId] = useState('');
  const [transferToId, setTransferToId] = useState('');
  const [transferring, setTransferring] = useState(false);

  // Active view tab from query param
  const view = searchParams.get('view') || 'all';

  // Fetch data
  const fetchInstructors = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users');
      if (res.ok) {
        const data = await res.json();
        const eligible = data.filter((u: any) => u.role === 'INSTRUCTOR' || u.role === 'ADMIN');
        setInstructors(eligible);
      }
    } catch (err) {
      console.error('Failed to fetch instructors', err);
    }
  };

  const fetchModules = async (currentUser: any) => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/modules');
      if (res.ok) {
        const data = await res.json();
        const r = currentUser?.role?.toUpperCase();
        if (r === 'INSTRUCTOR') {
          setModules(data.filter((m: any) => 
            m.instructor?.id === currentUser.id ||
            m.instructorId === currentUser.id ||
            (m.instructor?.email && currentUser?.email && m.instructor.email.toLowerCase() === currentUser.email.toLowerCase())
          ));
        } else {
          setModules(data);
        }
      }
    } catch (err) {
      console.error('Failed to fetch modules', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchEnrollments = async (currentUser: any) => {
    setLoadingEnrollments(true);
    try {
      const r = currentUser?.role?.toUpperCase();
      const url = r === 'INSTRUCTOR'
        ? `http://localhost:5000/api/enrollments/pending?instructorId=${currentUser.id}`
        : `http://localhost:5000/api/enrollments/pending`;
      const res = await fetch(url);
      if (res.ok) setEnrollments(await res.json());
    } catch (err) {
      console.error('Failed to fetch enrollments', err);
    } finally {
      setLoadingEnrollments(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('lms_user');
    if (stored) {
      try {
        const u = JSON.parse(stored);
        const r = u?.role?.toUpperCase();
        if (r === 'STUDENT') {
          router.replace('/dashboard');
          return;
        }
        setUser(u);
        fetchModules(u);
        fetchEnrollments(u);
        if (r === 'ADMIN') {
          fetchInstructors();
        }
      } catch {}
    } else {
      router.replace('/login');
    }
  }, []);

  useEffect(() => {
    const action = searchParams.get('action');
    if (action === 'create') {
      handleOpenModal('create');
      router.replace('/dashboard/manage-modules');
    }
  }, [searchParams, router]);

  // Modals handlers
  const handleOpenModal = (mode: 'create' | 'edit', mod?: any) => {
    setModalMode(mode);
    setFormError('');
    if (mode === 'edit' && mod) {
      setSelectedModule(mod);
      setFormData({
        title: mod.title,
        category: mod.category,
        description: mod.description || '',
        instructorId: mod.instructorId || mod.instructor?.id || user?.id || '',
        thumbnail: mod.thumbnail || ''
      });
      setThumbnailPreview(mod.thumbnail || '');
    } else {
      setSelectedModule(null);
      setFormData({
        title: '',
        category: customCategories[0] || 'Programming',
        description: '',
        instructorId: user?.id || (instructors[0]?.id || ''),
        thumbnail: ''
      });
      setThumbnailPreview('');
    }
    setIsModalOpen(true);
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setFormError('Ukuran gambar maksimal 5MB.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setThumbnailPreview(dataUrl);
      setFormData(prev => ({ ...prev, thumbnail: dataUrl }));
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveThumbnail = () => {
    setThumbnailPreview('');
    setFormData(prev => ({ ...prev, thumbnail: '' }));
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormError('');
    setThumbnailPreview('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) { setFormError('Judul modul wajib diisi!'); return; }
    setSaving(true);
    try {
      const url = modalMode === 'create'
        ? 'http://localhost:5000/api/modules'
        : `http://localhost:5000/api/modules/${selectedModule.id}`;
      const method = modalMode === 'create' ? 'POST' : 'PUT';
      const assignedInstructorId = isAdmin
        ? (formData.instructorId || user?.id || '')
        : (user?.id || '');

      const body = {
        title: formData.title,
        category: formData.category,
        description: formData.description,
        instructorId: assignedInstructorId,
        thumbnail: formData.thumbnail || null
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (res.ok) {
        fetchModules(user);
        handleCloseModal();
      } else {
        const d = await res.json();
        setFormError(d.message || 'Gagal menyimpan modul');
      }
    } catch {
      setFormError('Terjadi kesalahan jaringan');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!confirm('Yakin ingin menghapus modul ini beserta seluruh bab dan pelajarannya?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchModules(user);
        setSelectedIds(prev => prev.filter(item => item !== id));
      } else alert('Gagal menghapus modul');
    } catch { alert('Terjadi kesalahan jaringan'); }
  };

  const handleToggleVerify = async (mod: any, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const newStatus = !mod.isVerified;
    const action = newStatus ? 'memverifikasi' : 'membatalkan verifikasi';
    if (!confirm(`Yakin ingin ${action} modul "${mod.title}"?`)) return;
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${mod.id}/verify`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isVerified: newStatus })
      });
      if (res.ok) fetchModules(user);
      else alert('Gagal memperbarui status verifikasi');
    } catch { alert('Terjadi kesalahan jaringan'); }
  };

  // Duplicate action
  const handleOpenDuplicate = (mod: any, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setDuplicateTargetModule(mod);
    setDuplicateTargetInstructorId(mod.instructor?.id || user?.id || '');
    setIsDuplicateModalOpen(true);
  };

  const handleConfirmDuplicate = async () => {
    if (!duplicateTargetModule) return;
    setDuplicating(true);
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${duplicateTargetModule.id}/duplicate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ targetInstructorId: duplicateTargetInstructorId })
      });
      if (res.ok) {
        fetchModules(user);
        setIsDuplicateModalOpen(false);
      } else {
        alert('Gagal menduplikasi modul');
      }
    } catch {
      alert('Terjadi kesalahan');
    } finally {
      setDuplicating(false);
    }
  };

  // Bulk actions
  const handleSelectAll = () => {
    if (selectedIds.length === filtered.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filtered.map(m => m.id));
    }
  };

  const handleToggleSelect = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleBulkVerify = async (isVerified: boolean) => {
    if (selectedIds.length === 0) return;
    const action = isVerified ? 'memverifikasi' : 'membatalkan verifikasi';
    if (!confirm(`Yakin ingin ${action} ${selectedIds.length} modul yang dipilih?`)) return;
    setBulkActionLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/modules/bulk-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds, isVerified })
      });
      if (res.ok) {
        fetchModules(user);
        setSelectedIds([]);
      } else alert('Gagal memproses aksi massal');
    } catch { alert('Terjadi kesalahan'); }
    finally { setBulkActionLoading(false); }
  };

  const handleConfirmBulkReassign = async () => {
    if (!bulkTargetInstructorId || selectedIds.length === 0) return;
    setBulkActionLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/modules/bulk-reassign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds, instructorId: bulkTargetInstructorId })
      });
      if (res.ok) {
        fetchModules(user);
        setSelectedIds([]);
        setIsBulkReassignOpen(false);
      } else alert('Gagal memindahkan modul');
    } catch { alert('Terjadi kesalahan'); }
    finally { setBulkActionLoading(false); }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!confirm(`PERINGATAN: Yakin ingin MENGHAPUS PERMANEN ${selectedIds.length} modul yang dipilih beserta seluruh isinya?`)) return;
    setBulkActionLoading(true);
    try {
      for (const id of selectedIds) {
        await fetch(`http://localhost:5000/api/modules/${id}`, { method: 'DELETE' });
      }
      fetchModules(user);
      setSelectedIds([]);
    } catch { alert('Terjadi kesalahan'); }
    finally { setBulkActionLoading(false); }
  };

  const handleExportData = () => {
    const dataToExport = modules.map(m => ({
      id: m.id,
      title: m.title,
      category: m.category,
      instructor: m.instructor?.name || 'Unassigned',
      instructorEmail: m.instructor?.email || '',
      enrolledStudents: m.enr || 0,
      lessonsCount: m.lessonsCount || 0,
      tasksCount: m.tasksCount || 0,
      isVerified: m.isVerified
    }));
    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lms-courses-export-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Transfer all instructor courses
  const handleConfirmTransfer = async () => {
    if (!transferFromId || !transferToId || transferFromId === transferToId) {
      alert('Pilih instruktur asal dan tujuan yang berbeda');
      return;
    }
    setTransferring(true);
    try {
      const res = await fetch('http://localhost:5000/api/modules/reassign-instructor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fromInstructorId: transferFromId, toInstructorId: transferToId })
      });
      if (res.ok) {
        fetchModules(user);
        setIsTransferModalOpen(false);
        alert('Semua modul berhasil dipindahkan!');
      } else alert('Gagal mentransfer modul');
    } catch { alert('Terjadi kesalahan'); }
    finally { setTransferring(false); }
  };

  // Approvals actions
  const handleApprove = async (enrollmentId: string) => {
    setProcessingId(enrollmentId);
    try {
      const res = await fetch(`http://localhost:5000/api/enrollments/${enrollmentId}/approve`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });
      if (res.ok) setEnrollments(prev => prev.filter(e => e.id !== enrollmentId));
      else alert('Gagal menyetujui permintaan');
    } catch { alert('Terjadi kesalahan'); }
    finally { setProcessingId(null); }
  };

  const handleReject = async (enrollmentId: string) => {
    setProcessingId(enrollmentId);
    try {
      const res = await fetch(`http://localhost:5000/api/enrollments/${enrollmentId}/reject`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note: 'Permintaan ditolak.' })
      });
      if (res.ok) setEnrollments(prev => prev.filter(e => e.id !== enrollmentId));
      else alert('Gagal menolak permintaan');
    } catch { alert('Terjadi kesalahan'); }
    finally { setProcessingId(null); }
  };

  const handleApproveAll = async () => {
    if (enrollments.length === 0) return;
    if (!confirm(`Setujui seluruh ${enrollments.length} permintaan pendaftaran sekaligus?`)) return;
    for (const enr of enrollments) {
      await handleApprove(enr.id);
    }
  };

  // Categories helper
  const allCategories = useMemo(() => {
    const fromModules = modules.map(m => m.category).filter(Boolean);
    return Array.from(new Set([...customCategories, ...fromModules]));
  }, [modules, customCategories]);

  const handleAddCategory = () => {
    const trim = newCatInput.trim();
    if (!trim) return;
    if (allCategories.includes(trim)) { alert('Kategori sudah ada'); return; }
    setCustomCategories(prev => [...prev, trim]);
    setNewCatInput('');
  };

  // Filtered modules list
  const filtered = useMemo(() => {
    return modules.filter(m => {
      const matchSearch =
        m.title?.toLowerCase().includes(search.toLowerCase()) ||
        m.category?.toLowerCase().includes(search.toLowerCase()) ||
        (m.instructor?.name && m.instructor.name.toLowerCase().includes(search.toLowerCase()));
      const matchCat = activeCategory === 'All' || m.category === activeCategory;
      const matchInstructor = selectedInstructorFilter === 'ALL' || m.instructor?.id === selectedInstructorFilter;
      const matchVerify =
        verificationFilter === 'ALL' ? true :
        verificationFilter === 'VERIFIED' ? m.isVerified : !m.isVerified;

      return matchSearch && matchCat && matchInstructor && matchVerify;
    });
  }, [modules, search, activeCategory, selectedInstructorFilter, verificationFilter]);

  // Analytics Stats Calculations
  const stats = useMemo(() => {
    const totalCourses = modules.length;
    const verifiedCourses = modules.filter(m => m.isVerified).length;
    const totalStudentsEnrolled = modules.reduce((sum, m) => sum + (m.enr || 0), 0);
    const totalLessons = modules.reduce((sum, m) => sum + (m.lessonsCount || 0), 0);
    const emptyCourses = modules.filter(m => !m.lessonsCount || m.lessonsCount === 0);
    const unverifiedCourses = modules.filter(m => !m.isVerified);
    const activeInstructorsCount = new Set(modules.map(m => m.instructor?.id).filter(Boolean)).size;

    return {
      totalCourses,
      verifiedCourses,
      unverifiedCourses,
      totalStudentsEnrolled,
      totalLessons,
      emptyCourses,
      activeInstructorsCount,
      verificationRate: totalCourses > 0 ? Math.round((verifiedCourses / totalCourses) * 100) : 0
    };
  }, [modules]);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-[1550px] w-full mx-auto space-y-6">
      {/* ── TOP HEADER ── */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-black text-slate-800 dark:text-white">
              {isAdmin ? 'Course Management' : 'Studio Modul Saya'}
            </h1>
            {isAdmin && (
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-black rounded-full border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" /> Admin Command Center
              </span>
            )}
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {isAdmin
              ? 'Pusat kontrol penuh seluruh katalog pembelajaran, distribusi instruktur, dan persetujuan siswa.'
              : 'Buat, perbarui, dan kelola modul pembelajaran Anda sendiri.'}
          </p>
        </div>

        {canManage && (
          <div className="flex items-center gap-2 flex-wrap">
            {isAdmin && (
              <button
                onClick={handleExportData}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold rounded-xl text-xs transition-colors shadow-sm"
                title="Ekspor Data Modul (JSON)"
              >
                <Download className="w-4 h-4" /> Ekspor Data
              </button>
            )}
            <button
              onClick={() => handleOpenModal('create')}
              className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 text-sm shrink-0"
            >
              <Plus className="w-4 h-4" /> {isAdmin ? 'Tambah Kursus Baru' : 'Buat Modul Baru'}
            </button>
          </div>
        )}
      </div>

      {/* ── NAVIGATION TABS (Admin & Instructor) ── */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 overflow-x-auto scrollbar-hide">
        {(isAdmin ? [
          { id: 'all', label: 'Semua Kursus', icon: BookOpen, count: modules.length, href: '/dashboard/manage-modules' },
          { id: 'categories', label: 'Kategori & Tag', icon: Folder, count: allCategories.length, href: '/dashboard/manage-modules?view=categories' },
          { id: 'approvals', label: 'Persetujuan Pendaftaran', icon: CheckCircle, count: enrollments.length, badgeColor: enrollments.length > 0 ? 'bg-amber-500 text-white' : undefined, href: '/dashboard/manage-modules?view=approvals' },
          { id: 'instructors', label: 'Distribusi Instruktur', icon: Users, count: instructors.length, href: '/dashboard/manage-modules?view=instructors' },
          { id: 'analytics', label: 'Analitik & Health Check', icon: BarChart, href: '/dashboard/manage-modules?view=analytics' },
        ] : [
          { id: 'all', label: 'Modul Saya', icon: BookOpen, count: modules.length, href: '/dashboard/manage-modules' },
          { id: 'approvals', label: 'Persetujuan Pendaftaran', icon: CheckCircle, count: enrollments.length, badgeColor: enrollments.length > 0 ? 'bg-amber-500 text-white animate-pulse' : undefined, href: '/dashboard/manage-modules?view=approvals' },
        ]).map(tab => {
          const isActive = view === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => router.push(tab.href)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none'
                  : 'bg-white dark:bg-[#0c0e18] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${tab.badgeColor || (isActive ? 'bg-indigo-800/60 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300')}`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── VIEW 1: CATEGORIES MANAGEMENT (Admin Only) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {view === 'categories' && isAdmin && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-800 dark:text-white mb-2">Tambah Kategori Baru</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Buat kategori spesifik untuk memudahkan siswa memfilter katalog kursus.</p>
            <div className="flex gap-3 max-w-md">
              <input
                type="text"
                placeholder="Nama kategori baru (contoh: DevOps, Cloud, AI)..."
                value={newCatInput}
                onChange={(e) => setNewCatInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleAddCategory(); }}
                className="flex-1 px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
              />
              <button
                onClick={handleAddCategory}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-extrabold rounded-xl transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Plus className="w-4 h-4" /> Tambah
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allCategories.map(cat => {
              const catModules = modules.filter(m => m.category === cat);
              const catStudents = catModules.reduce((s, m) => s + (m.enr || 0), 0);
              const catLessons = catModules.reduce((s, m) => s + (m.lessonsCount || 0), 0);

              return (
                <div key={cat} className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm hover:border-indigo-300 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-black text-xs">
                        <Folder className="w-4 h-4" />
                      </div>
                      <span className="font-black text-slate-800 dark:text-white text-base">{cat}</span>
                    </div>
                    <span className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-bold">
                      {catModules.length} Modul
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <div>👥 {catStudents} Siswa</div>
                    <div>📖 {catLessons} Pelajaran</div>
                  </div>
                  <button
                    onClick={() => {
                      setActiveCategory(cat);
                      router.push('/dashboard/manage-modules');
                    }}
                    className="w-full mt-4 py-2 bg-slate-50 dark:bg-slate-900/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-xl text-xs font-bold transition-colors border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1"
                  >
                    Lihat Modul Kategori Ini <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── VIEW 2: INSTRUCTOR ASSIGNMENT & WORKLOAD (Admin Only) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {view === 'instructors' && isAdmin && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-6 text-white shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h2 className="text-xl font-black mb-1 flex items-center gap-2">
                <Users className="w-5 h-5" /> Distribusi & Beban Mengajar Instruktur
              </h2>
              <p className="text-xs text-indigo-200">
                Kelola penugasan kursus ke instruktur, pantau performa, dan transfer modul massal.
              </p>
            </div>
            <button
              onClick={() => setIsTransferModalOpen(true)}
              className="px-5 py-2.5 bg-white text-indigo-900 hover:bg-indigo-50 font-black rounded-xl text-xs transition-colors shadow-md flex items-center gap-2 shrink-0"
            >
              <ArrowRightLeft className="w-4 h-4" /> Transfer Modul Antar Instruktur
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {instructors.map(ins => {
              const insModules = modules.filter(m => m.instructor?.id === ins.id);
              const insStudents = insModules.reduce((s, m) => s + (m.enr || 0), 0);
              const insVerified = insModules.filter(m => m.isVerified).length;

              return (
                <div key={ins.id} className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {ins.profilePicture ? (
                        <img
                          src={ins.profilePicture}
                          alt={ins.name}
                          className="w-12 h-12 rounded-2xl object-cover shadow-md shrink-0 border border-slate-200 dark:border-slate-800"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white font-black text-sm flex items-center justify-center uppercase shadow-md shrink-0">
                          {ins.name?.slice(0, 2) || 'IN'}
                        </div>
                      )}
                      <div className="min-w-0">
                        <h3 className="font-extrabold text-slate-800 dark:text-white text-sm truncate">{ins.name}</h3>
                        <p className="text-xs text-slate-400 dark:text-slate-500 truncate">{ins.email}</p>
                        {ins.specialty && (
                          <span className="inline-block mt-1 text-[10px] font-black text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 px-2 py-0.5 rounded">
                            {ins.specialty}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-100 dark:border-slate-800 text-center mb-4">
                      <div>
                        <div className="text-base font-black text-slate-800 dark:text-white">{insModules.length}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Kursus</div>
                      </div>
                      <div>
                        <div className="text-base font-black text-emerald-600 dark:text-emerald-400">{insStudents}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Siswa</div>
                      </div>
                      <div>
                        <div className="text-base font-black text-purple-600 dark:text-purple-400">{insVerified}</div>
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Terverifikasi</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <button
                      onClick={() => {
                        setSelectedInstructorFilter(ins.id);
                        router.push('/dashboard/manage-modules');
                      }}
                      className="w-full py-2 bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950/30 dark:hover:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1"
                    >
                      Filter Kursus Milik {ins.name.split(' ')[0]} <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── VIEW 3: ANALYTICS & HEALTH CHECK (Admin Only) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {view === 'analytics' && isAdmin && (
        <div className="space-y-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase">Total Kursus</div>
              <div className="text-2xl font-black text-slate-800 dark:text-white mt-1">{stats.totalCourses}</div>
              <div className="text-[11px] text-emerald-600 font-bold mt-1">
                {stats.verifiedCourses} Terverifikasi ({stats.verificationRate}%)
              </div>
            </div>
            <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase">Total Pelajaran (Lessons)</div>
              <div className="text-2xl font-black text-slate-800 dark:text-white mt-1">{stats.totalLessons}</div>
              <div className="text-[11px] text-slate-400 mt-1">Rata-rata {(stats.totalLessons / (stats.totalCourses || 1)).toFixed(1)} / modul</div>
            </div>
            <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase">Siswa Terdaftar</div>
              <div className="text-2xl font-black text-slate-800 dark:text-white mt-1">{stats.totalStudentsEnrolled}</div>
              <div className="text-[11px] text-indigo-600 font-bold mt-1">Di seluruh katalog kursus</div>
            </div>
            <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase">Instruktur Pengampu</div>
              <div className="text-2xl font-black text-slate-800 dark:text-white mt-1">{stats.activeInstructorsCount}</div>
              <div className="text-[11px] text-purple-600 font-bold mt-1">Aktif memiliki modul</div>
            </div>
          </div>

          {/* Health Check Alerts */}
          <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-black text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> Audit & Health Check Kursus
            </h3>
            <div className="space-y-3">
              {stats.emptyCourses.length > 0 && (
                <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-2xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-extrabold text-amber-800 dark:text-amber-300 text-sm">
                      {stats.emptyCourses.length} Modul Belum Memiliki Pelajaran (0 Lessons)
                    </div>
                    <p className="text-xs text-amber-700 dark:text-amber-400 mt-0.5">
                      Modul berikut masih kosong: {stats.emptyCourses.map(m => m.title).join(', ')}.
                    </p>
                  </div>
                </div>
              )}

              {stats.unverifiedCourses.length > 0 && (
                <div className="p-4 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/50 rounded-2xl flex items-start gap-3">
                  <ShieldX className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-extrabold text-purple-800 dark:text-purple-300 text-sm">
                      {stats.unverifiedCourses.length} Modul Menunggu Verifikasi Admin
                    </div>
                    <p className="text-xs text-purple-700 dark:text-purple-400 mt-0.5">
                      Tinjau modul ini dan beri tanda Verified agar siswa lebih yakin saat mendaftar.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setVerificationFilter('UNVERIFIED');
                      router.push('/dashboard/manage-modules');
                    }}
                    className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold transition-colors"
                  >
                    Tinjau
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── VIEW 4: APPROVALS (Persetujuan Pendaftaran) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {view === 'approvals' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 p-6 rounded-3xl shadow-sm">
            <div>
              <h2 className="text-lg font-black text-slate-800 dark:text-white">Persetujuan Pendaftaran Siswa</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {isAdmin
                  ? 'Tinjau permintaan akses modul dari seluruh siswa di semua kursus.'
                  : 'Tinjau permintaan akses modul untuk kelas yang Anda ampu.'}
              </p>
            </div>
            {enrollments.length > 0 && (
              <button
                onClick={handleApproveAll}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm flex items-center gap-2"
              >
                <CheckSquare className="w-4 h-4" /> Setujui Semua ({enrollments.length})
              </button>
            )}
          </div>

          {loadingEnrollments ? (
            <div className="flex items-center justify-center py-24 bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : enrollments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
              <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950/20 rounded-full flex items-center justify-center mb-5">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Semua Bersih!</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm">Tidak ada permintaan pendaftaran yang menunggu persetujuan saat ini.</p>
            </div>
          ) : (
            <div className="space-y-3">
              {enrollments.map((enr: any) => (
                <div key={enr.id} className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Student info */}
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    {enr.studentProfilePicture ? (
                      <img
                        src={enr.studentProfilePicture}
                        alt={enr.studentName}
                        className="w-11 h-11 rounded-xl object-cover shrink-0 shadow-sm border border-slate-200 dark:border-slate-800"
                      />
                    ) : (
                      <div className="w-11 h-11 rounded-xl bg-indigo-100 dark:bg-indigo-950/40 flex items-center justify-center font-black text-indigo-700 dark:text-indigo-300 text-sm shrink-0 uppercase">
                        {enr.studentName?.slice(0, 2) || 'ST'}
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="font-bold text-slate-800 dark:text-slate-200 text-sm truncate">{enr.studentName}</div>
                      <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 truncate">
                        <Mail className="w-3 h-3 shrink-0" />{enr.studentEmail}
                      </div>
                    </div>
                  </div>

                  {/* Module info */}
                  <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800 flex-1 min-w-0">
                    <BookMarked className="w-4 h-4 text-indigo-400 shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-300 truncate">{enr.moduleTitle}</div>
                      <div className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">{enr.moduleCategory}</div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="text-xs text-slate-400 dark:text-slate-500 font-medium shrink-0">
                    {new Date(enr.enrolledAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleApprove(enr.id)}
                      disabled={processingId === enr.id}
                      className="flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors shadow-sm disabled:opacity-60"
                    >
                      <CheckSquare className="w-3.5 h-3.5" />
                      {processingId === enr.id ? '...' : 'Setujui'}
                    </button>
                    <button
                      onClick={() => handleReject(enr.id)}
                      disabled={processingId === enr.id}
                      className="flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-bold rounded-xl transition-colors disabled:opacity-60"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      {processingId === enr.id ? '...' : 'Tolak'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── VIEW 5: ALL COURSES (Catalog & Bulk Operations) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {view === 'all' && (
        <div className="space-y-6">
          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Kursus', value: modules.length, icon: BookOpen, color: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400' },
              { label: 'Kategori', value: allCategories.length, icon: Layers, color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400' },
              { label: isAdmin ? 'Instruktur Aktif' : 'Total Siswa', value: isAdmin ? stats.activeInstructorsCount : modules.reduce((a, m) => a + (m.enr ?? (m.enrollments ? m.enrollments.filter((e: any) => e.status === 'APPROVED').length || m.enrollments.length : 0)), 0), icon: Users, color: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' },
              { label: isAdmin ? 'Modul Terverifikasi' : 'Tugas Aktif', value: isAdmin ? stats.verifiedCourses : modules.reduce((a, m) => a + (m.tasksCount ?? (m.tasks ? m.tasks.length : 0)), 0), icon: isAdmin ? ShieldCheck : Clock, color: isAdmin ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400' : 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400' },
            ].map(stat => (
              <div key={stat.label} className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-sm flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color} shrink-0`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-slate-800 dark:text-slate-100">{stat.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── BULK ACTION FLOATING BAR (Admin Only) ── */}
          {isAdmin && selectedIds.length > 0 && (
            <div className="bg-indigo-900 text-white p-4 rounded-2xl shadow-xl flex flex-wrap items-center justify-between gap-3 animate-slideDown">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-white text-indigo-900 rounded-lg flex items-center justify-center font-black text-xs">
                  {selectedIds.length}
                </span>
                <span className="font-bold text-sm">Modul Terpilih</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => handleBulkVerify(true)}
                  disabled={bulkActionLoading}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Verifikasi Massal
                </button>
                <button
                  onClick={() => handleBulkVerify(false)}
                  disabled={bulkActionLoading}
                  className="px-3.5 py-1.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <ShieldX className="w-3.5 h-3.5" /> Unverify
                </button>
                <button
                  onClick={() => setIsBulkReassignOpen(true)}
                  disabled={bulkActionLoading}
                  className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5" /> Pindahkan Instruktur
                </button>
                <button
                  onClick={handleBulkDelete}
                  disabled={bulkActionLoading}
                  className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Hapus Massal
                </button>
                <button
                  onClick={() => setSelectedIds([])}
                  className="p-1.5 text-indigo-300 hover:text-white rounded-lg transition-colors ml-2"
                  title="Batalkan Pilihan"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Search, Filters, and View Mode */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-white dark:bg-[#0c0e18] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
              {/* Search Box */}
              <div className="relative flex-1 max-w-sm">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari judul, kategori, instruktur..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              {/* Admin: Filter by Instructor */}
              {isAdmin && instructors.length > 0 && (
                <select
                  value={selectedInstructorFilter}
                  onChange={(e) => setSelectedInstructorFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
                >
                  <option value="ALL">👥 Semua Instruktur ({modules.length})</option>
                  {instructors.map(ins => (
                    <option key={ins.id} value={ins.id}>
                      👨‍🏫 {ins.name} ({modules.filter(m => m.instructor?.id === ins.id).length})
                    </option>
                  ))}
                </select>
              )}

              {/* Verification Status Filter */}
              {isAdmin && (
                <select
                  value={verificationFilter}
                  onChange={(e: any) => setVerificationFilter(e.target.value)}
                  className="px-3 py-2 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
                >
                  <option value="ALL">🛡️ Semua Status Verifikasi</option>
                  <option value="VERIFIED">✅ Terverifikasi Saja ({stats.verifiedCourses})</option>
                  <option value="UNVERIFIED">⏳ Belum Diverifikasi ({stats.unverifiedCourses.length})</option>
                </select>
              )}
            </div>

            {/* View Mode Toggle & Select All */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              {isAdmin && (
                <button
                  onClick={handleSelectAll}
                  className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 rounded-xl text-xs font-bold transition-colors"
                >
                  {selectedIds.length === filtered.length && filtered.length > 0 ? 'Batal Pilih Semua' : 'Pilih Semua'}
                </button>
              )}
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-[#0c0e18] text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                  title="Tampilan Grid"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-white dark:bg-[#0c0e18] text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                  title="Tampilan Tabel"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 flex-wrap items-center">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Kategori:
            </span>
            {['All', ...allCategories].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all border ${activeCategory === cat ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white dark:bg-[#0c0e18] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-300'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── COURSE LIST / GRID ── */}
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/20 rounded-full flex items-center justify-center mb-5">
                <BookOpen className="w-10 h-10 text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Tidak Ada Modul Ditemukan</h3>
              <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">Coba ubah kata kunci pencarian atau reset filter.</p>
            </div>
          ) : viewMode === 'grid' ? (
            /* ── BALANCED GRID CARD VIEW (Instructor / Admin) ── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3.5">
              {filtered.map((mod: any) => {
                const isSelected = selectedIds.includes(mod.id);
                const theme = getCourseTheme(mod.title);
                const difficulty = getDifficulty(mod);
                const skillTags = getSkillTags(mod);
                const hasCustomThumb = !!mod.thumbnail;

                return (
                  <div
                    key={mod.id}
                    className={`bg-white dark:bg-[#0d1117] rounded-2xl border transition-[border-color,box-shadow] duration-200 relative group flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md ${
                      isSelected
                        ? 'border-indigo-600 ring-2 ring-indigo-500/30'
                        : 'border-slate-200/90 dark:border-slate-800/90 hover:border-indigo-400/60 dark:hover:border-indigo-500/50'
                    }`}
                  >
                    {/* Top Thumbnail Section (Compact 16:8.5) */}
                    <div className="relative">
                      <div
                        onClick={() => router.push(`/dashboard/modules/${mod.id}`)}
                        className={`w-full aspect-[16/8.5] ${hasCustomThumb ? 'bg-slate-950' : `bg-gradient-to-br ${theme.bg}`} flex items-center justify-center relative overflow-hidden cursor-pointer group/thumb`}
                      >
                        {hasCustomThumb ? (
                          <>
                            <img
                              src={mod.thumbnail}
                              alt={mod.title}
                              loading="lazy"
                              decoding="async"
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                          </>
                        ) : (
                          <div className="relative z-10 flex flex-col items-center justify-center text-center p-2">
                            <div className="w-9 h-9 rounded-xl bg-white/20 border border-white/25 flex items-center justify-center shadow group-hover:scale-110 transition-transform duration-200 mb-1">
                              <span className="text-lg drop-shadow">{theme.emoji}</span>
                            </div>
                            <span className="text-[10px] font-black text-white/90 uppercase tracking-wider">{theme.logo}</span>
                          </div>
                        )}

                        {/* Top-Left: Selection Checkbox (Admin) + Category Pill */}
                        <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5">
                          {isAdmin && (
                            <button
                              onClick={(e) => handleToggleSelect(mod.id, e)}
                              className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors shadow ${
                                isSelected
                                  ? 'bg-indigo-600 text-white shadow-indigo-600/30'
                                  : 'bg-slate-900/80 hover:bg-slate-900 text-white/90 border border-white/20'
                              }`}
                              title="Pilih Modul"
                            >
                              {isSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <div className="w-2.5 h-2.5 rounded-sm border border-white/50" />}
                            </button>
                          )}
                          <span className="bg-slate-900/90 text-white border border-white/10 px-2 py-0.5 rounded-md text-[9px] font-black tracking-wide uppercase shadow-sm">
                            {mod.category || 'General'}
                          </span>
                        </div>

                        {/* Top-Right: Likes Pill */}
                        <div className="absolute top-2 right-2 z-20 flex items-center gap-1">
                          <div className="bg-slate-900/80 text-white px-2 py-0.5 rounded-md text-[9px] font-black shadow-sm flex items-center gap-1 border border-white/10">
                            <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                            <span>{mod.likesCount ?? mod.likes?.length ?? 0}</span>
                          </div>
                        </div>

                        {/* Bottom-Left: Verification Status Badge */}
                        <div className="absolute bottom-2 left-2 z-20">
                          {mod.isVerified ? (
                            <span className="bg-emerald-600/95 text-white font-black text-[9px] tracking-wide px-2 py-0.5 rounded-md shadow flex items-center gap-1 border border-emerald-400/40">
                              <ShieldCheck className="w-3 h-3 text-emerald-200" />
                              <span>Verified</span>
                            </span>
                          ) : (
                            <span className="bg-slate-900/90 text-slate-300 font-black text-[9px] tracking-wide px-2 py-0.5 rounded-md shadow flex items-center gap-1 border border-slate-700/60">
                              <ShieldX className="w-3 h-3 text-slate-400" />
                              <span>Draft</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Card Content & Information Body (Compact) */}
                    <div className="p-3.5 flex-1 flex flex-col justify-between gap-2.5">
                      <div>
                        {/* Meta Header: Difficulty & Instructor */}
                        <div className="flex items-center justify-between gap-1.5 mb-1.5">
                          <span className={`text-[9px] font-black px-2 py-0.5 rounded-full border ${difficulty.color}`}>
                            {difficulty.label}
                          </span>
                          {mod.instructor ? (
                            <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-500 dark:text-slate-400 truncate max-w-[130px]" title={mod.instructor.name}>
                              {mod.instructor.profilePicture ? (
                                <img
                                  src={mod.instructor.profilePicture}
                                  alt={mod.instructor.name}
                                  className="w-3.5 h-3.5 rounded-full object-cover shrink-0 border border-indigo-200 dark:border-indigo-800"
                                />
                              ) : (
                                <div className="w-3.5 h-3.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[8px] font-black shrink-0">
                                  {mod.instructor.name.charAt(0)}
                                </div>
                              )}
                              <span className="truncate">👤 {mod.instructor.name}</span>
                            </div>
                          ) : (
                            <span className="text-[10px] text-slate-400 font-medium">Instruktur LMS</span>
                          )}
                        </div>

                        {/* Title */}
                        <h3
                          onClick={() => router.push(`/dashboard/modules/${mod.id}`)}
                          className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm leading-snug mb-0.5 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer"
                        >
                          {mod.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[11px] text-slate-400 dark:text-slate-500 line-clamp-1 mb-2">
                          {mod.description || 'Kelola silabus, kurikulum, dan materi pembelajaran praktis.'}
                        </p>

                        {/* Skill Tags */}
                        {skillTags.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {skillTags.slice(0, 3).map((tag: string) => (
                              <span key={tag} className="text-[9px] font-bold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Footer: Stats & Admin Control Actions */}
                      <div>
                        {/* Stats Row */}
                        <div className="flex items-center justify-between text-[10px] text-slate-400 dark:text-slate-500 font-medium py-2 border-t border-slate-100 dark:border-slate-800/80">
                          <div className="flex items-center gap-1">
                            <Users className="w-3 h-3 text-slate-400" />
                            <span className="font-semibold text-slate-600 dark:text-slate-300">
                              {mod.enr ?? (mod.enrollments ? mod.enrollments.filter((e: any) => e.status === 'APPROVED').length || mod.enrollments.length : 0)}
                            </span> siswa
                          </div>
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-3 h-3 text-slate-400" />
                            <span className="font-semibold text-slate-600 dark:text-slate-300">
                              {mod.lessonsCount ?? (mod.lessons ? mod.lessons.length : 0)}
                            </span> materi
                          </div>
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                          <div className="flex items-center gap-0.5 text-amber-500 font-bold">
                            <span>★ {mod.avgRating > 0 ? Number(mod.avgRating).toFixed(1) : '–'}</span>
                          </div>
                        </div>

                        {/* Admin Action Toolbar */}
                        <div className="flex items-center gap-1.5 pt-1">
                          {/* Primary CTA: Edit / Manage Syllabus */}
                          <button
                            onClick={() => router.push(`/dashboard/modules/${mod.id}`)}
                            className="flex-1 py-1.5 bg-indigo-50 dark:bg-indigo-950/40 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-indigo-600 dark:text-indigo-400 font-bold rounded-xl text-[11px] transition-all flex items-center justify-center gap-1 border border-indigo-200/80 dark:border-indigo-800/50 shadow-sm group/btn"
                          >
                            <Edit2 className="w-3 h-3" /> Kelola Modul
                          </button>

                          {/* Quick Edit Modal */}
                          <button
                            onClick={(e) => { e.stopPropagation(); handleOpenModal('edit', mod); }}
                            className="w-7 h-7 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 text-slate-500 hover:text-indigo-600 rounded-xl transition-colors flex items-center justify-center shadow-sm shrink-0"
                            title="Edit Pengaturan Modul"
                          >
                            <Settings className="w-3 h-3" />
                          </button>

                          {/* Duplicate */}
                          {canManage && (
                            <button
                              onClick={(e) => handleOpenDuplicate(mod, e)}
                              className="w-7 h-7 bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-900/40 hover:bg-purple-100 text-purple-600 dark:text-purple-400 rounded-xl transition-colors flex items-center justify-center shadow-sm shrink-0"
                              title="Duplikasi / Kloning Modul"
                            >
                              <Copy className="w-3 h-3" />
                            </button>
                          )}

                          {/* Toggle Verify (Admin) */}
                          {isAdmin && (
                            <button
                              onClick={(e) => handleToggleVerify(mod, e)}
                              className={`w-7 h-7 rounded-xl border transition-colors flex items-center justify-center shadow-sm shrink-0 ${
                                mod.isVerified
                                  ? 'bg-amber-50 text-amber-600 border-amber-200 dark:bg-amber-950/20 dark:border-amber-900/40 hover:bg-amber-100'
                                  : 'bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-900/40 hover:bg-emerald-100'
                              }`}
                              title={mod.isVerified ? 'Batalkan Verifikasi' : 'Verifikasi Modul'}
                            >
                              {mod.isVerified ? <ShieldX className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
                            </button>
                          )}

                          {/* Delete Modul */}
                          <button
                            onClick={(e) => handleDelete(mod.id, e)}
                            className="w-7 h-7 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 hover:bg-rose-100 text-rose-500 hover:text-rose-600 rounded-xl transition-colors flex items-center justify-center shadow-sm shrink-0"
                            title="Hapus Modul"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            /* ── TABLE VIEW (Admin Power List) ── */
            <div className="bg-white dark:bg-[#0d1117] border border-slate-200/90 dark:border-slate-800/90 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <tr>
                      {isAdmin && (
                        <th className="p-3.5 w-10">
                          <input
                            type="checkbox"
                            checked={selectedIds.length === filtered.length && filtered.length > 0}
                            onChange={handleSelectAll}
                            className="rounded cursor-pointer"
                          />
                        </th>
                      )}
                      <th className="p-3.5">Modul</th>
                      <th className="p-3.5">Kategori</th>
                      <th className="p-3.5">Instruktur</th>
                      <th className="p-3.5">Statistik</th>
                      <th className="p-3.5">Rating</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5 text-right">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {filtered.map(mod => {
                      const isSelected = selectedIds.includes(mod.id);
                      const difficulty = getDifficulty(mod);
                      return (
                        <tr
                          key={mod.id}
                          onClick={() => router.push(`/dashboard/modules/${mod.id}`)}
                          className={`hover:bg-slate-50/80 dark:hover:bg-slate-900/40 cursor-pointer transition-colors ${
                            isSelected ? 'bg-indigo-50/50 dark:bg-indigo-950/20' : ''
                          }`}
                        >
                          {isAdmin && (
                            <td className="p-3.5" onClick={(e) => e.stopPropagation()}>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => handleToggleSelect(mod.id)}
                                className="rounded cursor-pointer"
                              />
                            </td>
                          )}
                          <td className="p-3.5 font-bold text-slate-800 dark:text-white max-w-xs">
                            <div className="flex items-center gap-2">
                              <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full border ${difficulty.color}`}>
                                {difficulty.label}
                              </span>
                              <span className="truncate">{mod.title}</span>
                            </div>
                          </td>
                          <td className="p-3.5 text-xs font-bold text-slate-500">
                            <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md text-[10px] font-bold uppercase">
                              {mod.category}
                            </span>
                          </td>
                          <td className="p-3.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
                            👤 {mod.instructor?.name || '-'}
                          </td>
                          <td className="p-3.5 text-[11px] text-slate-500">
                            {mod.enr || 0} Siswa • {mod.lessonsCount || 0} Materi • ❤️ {mod.likesCount ?? mod.likes?.length ?? 0}
                          </td>
                          <td className="p-3.5 text-xs font-bold text-amber-500">
                            ★ {mod.avgRating > 0 ? Number(mod.avgRating).toFixed(1) : '–'}
                          </td>
                          <td className="p-3.5">
                            {mod.isVerified ? (
                              <span className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-md border border-emerald-200 dark:border-emerald-800/40">
                                <ShieldCheck className="w-3 h-3" /> Verified
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] font-black text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                                <ShieldX className="w-3 h-3" /> Draft
                              </span>
                            )}
                          </td>
                          <td className="p-3.5 text-right" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-end gap-1.5">
                              {isAdmin && (
                                <button
                                  onClick={() => handleToggleVerify(mod)}
                                  className={`p-1.5 rounded-lg border transition-colors ${
                                    mod.isVerified
                                      ? 'text-amber-600 border-amber-200 hover:bg-amber-50'
                                      : 'text-emerald-600 border-emerald-200 hover:bg-emerald-50'
                                  }`}
                                  title={mod.isVerified ? 'Batalkan Verifikasi' : 'Verifikasi'}
                                >
                                  {mod.isVerified ? <ShieldX className="w-3.5 h-3.5" /> : <ShieldCheck className="w-3.5 h-3.5" />}
                                </button>
                              )}
                              {canManage && (
                                <button
                                  onClick={() => handleOpenDuplicate(mod)}
                                  className="p-1.5 text-purple-600 border border-purple-200 rounded-lg hover:bg-purple-50 transition-colors"
                                  title="Kloning Modul"
                                >
                                  <Copy className="w-3.5 h-3.5" />
                                </button>
                              )}
                              <button
                                onClick={() => handleOpenModal('edit', mod)}
                                className="p-1.5 text-slate-500 border border-slate-200 dark:border-slate-800 rounded-lg hover:text-indigo-600 hover:border-indigo-300 transition-colors"
                                title="Edit Pengaturan"
                              >
                                <Settings className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDelete(mod.id)}
                                className="p-1.5 text-rose-500 border border-rose-200 rounded-lg hover:bg-rose-50 transition-colors"
                                title="Hapus"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 1: CREATE / EDIT COURSE ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-5 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">
                    {modalMode === 'create' ? 'Buat Modul Baru' : 'Edit Modul'}
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {modalMode === 'create' ? 'Isi data modul pembelajaran.' : `Edit: ${selectedModule?.title}`}
                  </p>
                </div>
              </div>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600 dark:hover:text-white p-2 rounded-xl transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="p-6">
              {formError && (
                <div className="mb-5 p-4 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 text-sm rounded-xl border border-red-100 dark:border-red-900/50 flex items-center gap-3">
                  <X className="w-4 h-4 shrink-0" /><span className="font-medium">{formError}</span>
                </div>
              )}
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Judul Modul <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                    placeholder="Contoh: Belajar React dari Nol"
                  />
                </div>

                {/* Admin Exclusive: Assign Instructor */}
                {isAdmin && (
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                      <User className="w-4 h-4 text-indigo-500" />
                      Instruktur Pengampu <span className="text-indigo-600 text-xs font-normal">(Admin Control)</span>
                    </label>
                    <select
                      value={formData.instructorId}
                      onChange={(e) => setFormData({ ...formData, instructorId: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                    >
                      <option value={user?.id}>Saya Sendiri ({user?.name || 'Admin'})</option>
                      {instructors.filter(ins => ins.id !== user?.id).map(ins => (
                        <option key={ins.id} value={ins.id}>
                          {ins.name} ({ins.email}) {ins.role === 'ADMIN' ? '[Admin]' : '[Instruktur]'}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Kategori</label>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map(cat => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFormData({ ...formData, category: cat })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${
                          formData.category === cat
                            ? 'bg-indigo-600 text-white border-indigo-600'
                            : 'bg-white dark:bg-[#0c0e18] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-300'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Deskripsi <span className="text-slate-400 font-normal text-xs">(Opsional)</span></label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 resize-none"
                    placeholder="Deskripsi singkat tentang modul ini..."
                  />
                </div>

                {/* Thumbnail Upload */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-indigo-500" />
                    Thumbnail / Cover Modul <span className="text-slate-400 font-normal text-xs">(Opsional, maks. 5MB)</span>
                  </label>

                  {thumbnailPreview ? (
                    <div className="relative w-full h-44 rounded-2xl overflow-hidden border-2 border-indigo-400/50 shadow-md group">
                      <img
                        src={thumbnailPreview}
                        alt="Preview thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                          <label
                            htmlFor="thumbnail-upload-input"
                            className="px-3 py-2 bg-white text-indigo-600 text-xs font-bold rounded-xl cursor-pointer hover:bg-indigo-50 transition-colors shadow flex items-center gap-1.5"
                          >
                            <Edit2 className="w-3.5 h-3.5" /> Ganti
                          </label>
                          <button
                            type="button"
                            onClick={handleRemoveThumbnail}
                            className="px-3 py-2 bg-white text-red-500 text-xs font-bold rounded-xl hover:bg-red-50 transition-colors shadow flex items-center gap-1.5"
                          >
                            <X className="w-3.5 h-3.5" /> Hapus
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <label
                      htmlFor="thumbnail-upload-input"
                      className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl cursor-pointer bg-slate-50 dark:bg-[#0d101d] hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 hover:border-indigo-400 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-bold text-slate-500 dark:text-slate-400 group-hover:text-indigo-600 transition-colors">Klik untuk upload gambar</p>
                      <p className="text-xs text-slate-400 dark:text-slate-600 mt-1">PNG, JPG, WEBP — Maks. 5MB</p>
                    </label>
                  )}

                  <input
                    id="thumbnail-upload-input"
                    type="file"
                    accept="image/png,image/jpeg,image/webp,image/gif"
                    className="hidden"
                    onChange={handleThumbnailChange}
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end gap-3 pt-5 border-t border-slate-100 dark:border-slate-800">
                <button type="button" onClick={handleCloseModal} className="px-5 py-2.5 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-xl transition-colors">Batal</button>
                <button type="submit" disabled={saving} className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md flex items-center gap-2 disabled:opacity-60">
                  <CheckCircle className="w-4 h-4" />
                  {saving ? 'Menyimpan...' : modalMode === 'create' ? 'Buat Modul' : 'Simpan Perubahan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 2: DUPLICATE COURSE (Admin Exclusive) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {isDuplicateModalOpen && duplicateTargetModule && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
                <Copy className="w-5 h-5 text-purple-600" /> Kloning / Duplikasi Modul
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Seluruh bab dan pelajaran dari <strong>"{duplicateTargetModule.title}"</strong> akan disalin ke modul baru.
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Tetapkan Instruktur untuk Modul Hasil Kloning:
                </label>
                <select
                  value={duplicateTargetInstructorId}
                  onChange={(e) => setDuplicateTargetInstructorId(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-800 dark:text-white focus:outline-none"
                >
                  <option value={user?.id}>Saya Sendiri ({user?.name})</option>
                  {instructors.map(ins => (
                    <option key={ins.id} value={ins.id}>
                      {ins.name} ({ins.email})
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-end gap-3">
              <button
                onClick={() => setIsDuplicateModalOpen(false)}
                className="px-4 py-2 text-xs font-bold text-slate-500 hover:text-slate-700"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmDuplicate}
                disabled={duplicating}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors disabled:opacity-60 flex items-center gap-1.5"
              >
                <Copy className="w-3.5 h-3.5" />
                {duplicating ? 'Menduplikasi...' : 'Duplikasi Sekarang'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 3: BULK REASSIGN INSTRUCTOR (Admin Exclusive) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {isBulkReassignOpen && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" /> Pindahkan {selectedIds.length} Modul
              </h2>
              <p className="text-xs text-slate-500 mt-1">Pilih instruktur baru yang akan mengampu seluruh modul terpilih.</p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Instruktur Baru:</label>
                <select
                  value={bulkTargetInstructorId}
                  onChange={(e) => setBulkTargetInstructorId(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-800 dark:text-white focus:outline-none"
                >
                  <option value="">-- Pilih Instruktur Tujuan --</option>
                  <option value={user?.id}>Saya Sendiri ({user?.name || 'Admin'})</option>
                  {instructors.filter(ins => ins.id !== user?.id).map(ins => (
                    <option key={ins.id} value={ins.id}>{ins.name} ({ins.email})</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-end gap-3">
              <button onClick={() => setIsBulkReassignOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-500">Batal</button>
              <button
                onClick={handleConfirmBulkReassign}
                disabled={!bulkTargetInstructorId || bulkActionLoading}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors disabled:opacity-60"
              >
                Pindahkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 4: INSTRUCTOR TRANSFER ALL (Admin Exclusive) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {isTransferModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800 bg-indigo-50/50 dark:bg-indigo-950/20">
              <h2 className="text-lg font-black text-slate-800 dark:text-white flex items-center gap-2">
                <ArrowRightLeft className="w-5 h-5 text-indigo-600" /> Transfer Seluruh Modul Antar Instruktur
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Pindahkan seluruh kursus dari satu instruktur ke instruktur lain (berguna saat pergantian guru/dosen).
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Dari Instruktur (Asal):</label>
                <select
                  value={transferFromId}
                  onChange={(e) => setTransferFromId(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-800 dark:text-white"
                >
                  <option value="">-- Pilih Instruktur Asal --</option>
                  {instructors.map(ins => {
                    const count = modules.filter(m => m.instructor?.id === ins.id).length;
                    return (
                      <option key={ins.id} value={ins.id}>{ins.name} ({count} modul)</option>
                    );
                  })}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">Ke Instruktur (Tujuan):</label>
                <select
                  value={transferToId}
                  onChange={(e) => setTransferToId(e.target.value)}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-800 dark:text-white"
                >
                  <option value="">-- Pilih Instruktur Tujuan --</option>
                  <option value={user?.id}>Saya Sendiri ({user?.name})</option>
                  {instructors.filter(ins => ins.id !== transferFromId).map(ins => (
                    <option key={ins.id} value={ins.id}>{ins.name} ({ins.email})</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-end gap-3">
              <button onClick={() => setIsTransferModalOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-500">Batal</button>
              <button
                onClick={handleConfirmTransfer}
                disabled={!transferFromId || !transferToId || transferring}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors disabled:opacity-60 flex items-center gap-1.5"
              >
                <ArrowRightLeft className="w-4 h-4" />
                {transferring ? 'Memindahkan...' : 'Konfirmasi Transfer'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
