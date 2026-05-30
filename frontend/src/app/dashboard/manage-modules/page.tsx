'use client';
import {
  BookOpen, Plus, Search, Edit2, Trash2, X, CheckCircle, Layers, Clock, Users,
  CheckSquare, XCircle, AlertCircle, User, Mail, BookMarked, ShieldCheck, ShieldX
} from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const CATEGORIES = ['Programming', 'Jaringan', 'IT Support', 'Database', 'Design', 'Mobile', 'Web', 'Skripsi', 'Lainnya'];
const BG_COLORS = ['bg-[#C1A5FF]', 'bg-[#A5D8FF]', 'bg-[#A5FFD8]', 'bg-[#FFD8A5]', 'bg-[#FFA5C1]', 'bg-[#D8FFA5]'];

const getCourseTheme = (title: string) => {
  const t = title?.toLowerCase() || '';
  if (t.includes('html')) return { bg: 'from-orange-500 to-red-600', label: 'HTML', emoji: '🌐', logo: 'HTML5' };
  if (t.includes('css')) return { bg: 'from-blue-500 to-indigo-600', label: 'CSS', emoji: '🎨', logo: 'CSS3' };
  if (t.includes('javascript') || t.includes('js')) return { bg: 'from-yellow-400 to-amber-500', label: 'JS', emoji: '⚡', logo: 'JS' };
  if (t.includes('php')) return { bg: 'from-purple-500 to-violet-600', label: 'PHP', emoji: '🐘', logo: 'PHP' };
  if (t.includes('mysql') || t.includes('sql') || t.includes('database')) return { bg: 'from-sky-500 to-cyan-600', label: 'SQL', emoji: '🗄️', logo: 'SQL' };
  if (t.includes('git')) return { bg: 'from-rose-500 to-pink-600', label: 'GIT', emoji: '🔀', logo: 'GIT' };
  if (t.includes('react') || t.includes('mobile')) return { bg: 'from-cyan-500 to-teal-600', label: 'RN', emoji: '📱', logo: 'React' };
  if (t.includes('cisco') || t.includes('jaringan') || t.includes('network') || t.includes('packet')) return { bg: 'from-emerald-500 to-green-600', label: 'NET', emoji: '🌐', logo: 'CISCO' };
  if (t.includes('python')) return { bg: 'from-green-500 to-emerald-600', label: 'PY', emoji: '🐍', logo: 'PYTHON' };
  if (t.includes('ui') || t.includes('ux') || t.includes('design')) return { bg: 'from-fuchsia-500 to-pink-600', label: 'UI', emoji: '🎭', logo: 'UI/UX' };
  return { bg: 'from-slate-500 to-slate-700', label: '📘', emoji: '📘', logo: 'BOOK' };
};

export default function ManageModulesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<{ id: string; name: string; role: string; email: string } | null>(null);
  const [modules, setModules] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Approvals state
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loadingEnrollments, setLoadingEnrollments] = useState(false);
  const [processingId, setProcessingId] = useState<string | null>(null);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedModule, setSelectedModule] = useState<any>(null);
  const [formData, setFormData] = useState({ title: '', category: 'Programming', description: '' });
  const [formError, setFormError] = useState('');
  const [saving, setSaving] = useState(false);

  const isApprovalsView = searchParams.get('view') === 'approvals';

  const role = user?.role?.toUpperCase() || 'STUDENT';
  const canManage = role === 'ADMIN' || role === 'INSTRUCTOR';


  const fetchModules = async (currentUser: any) => {
    try {
      const res = await fetch('http://localhost:5000/api/modules');
      if (res.ok) {
        const data = await res.json();
        const r = currentUser?.role?.toUpperCase();
        if (r === 'INSTRUCTOR') {
          setModules(data.filter((m: any) => m.instructor?.id === currentUser.id));
        } else {
          setModules(data);
        }
      }
    } catch (err) {
      console.error('Failed to fetch modules', err);
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

  const handleApprove = async (enrollmentId: string) => {
    setProcessingId(enrollmentId);
    try {
      const res = await fetch(`http://localhost:5000/api/enrollments/${enrollmentId}/approve`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) });
      if (res.ok) setEnrollments(prev => prev.filter(e => e.id !== enrollmentId));
      else alert('Gagal menyetujui permintaan');
    } catch { alert('Terjadi kesalahan'); }
    finally { setProcessingId(null); }
  };

  const handleReject = async (enrollmentId: string) => {
    setProcessingId(enrollmentId);
    try {
      const res = await fetch(`http://localhost:5000/api/enrollments/${enrollmentId}/reject`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ note: 'Permintaan ditolak oleh instruktur.' }) });
      if (res.ok) setEnrollments(prev => prev.filter(e => e.id !== enrollmentId));
      else alert('Gagal menolak permintaan');
    } catch { alert('Terjadi kesalahan'); }
    finally { setProcessingId(null); }
  };

  useEffect(() => {
    const stored = localStorage.getItem('lms_user');
    if (stored) {
      try {
        const u = JSON.parse(stored);
        setUser(u);
        fetchModules(u);
        fetchEnrollments(u);
      } catch { }
    }
  }, []);

  useEffect(() => {
    const action = searchParams.get('action');
    if (action === 'create') {
      handleOpenModal('create');
      router.replace('/dashboard/manage-modules');
    }
  }, [searchParams, router]);

  const handleOpenModal = (mode: 'create' | 'edit', mod?: any) => {
    setModalMode(mode);
    setFormError('');
    if (mode === 'edit' && mod) {
      setSelectedModule(mod);
      setFormData({ title: mod.title, category: mod.category, description: mod.description || '' });
    } else {
      setSelectedModule(null);
      setFormData({ title: '', category: 'Programming', description: '' });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => { setIsModalOpen(false); setFormError(''); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) { setFormError('Judul modul wajib diisi!'); return; }
    setSaving(true);
    try {
      const url = modalMode === 'create'
        ? 'http://localhost:5000/api/modules'
        : `http://localhost:5000/api/modules/${selectedModule.id}`;
      const method = modalMode === 'create' ? 'POST' : 'PUT';
      const body = modalMode === 'create' ? { ...formData, instructorId: user?.id || '' } : formData;
      const res = await fetch(url, { method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      if (res.ok) { fetchModules(user); handleCloseModal(); }
      else { const d = await res.json(); setFormError(d.message || 'Gagal menyimpan modul'); }
    } catch { setFormError('Terjadi kesalahan jaringan'); }
    finally { setSaving(false); }
  };

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm('Yakin ingin menghapus modul ini beserta seluruh isinya?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/modules/${id}`, { method: 'DELETE' });
      if (res.ok) fetchModules(user);
      else alert('Gagal menghapus modul');
    } catch { alert('Terjadi kesalahan jaringan'); }
  };

  const handleToggleVerify = async (mod: any, e: React.MouseEvent) => {
    e.stopPropagation();
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

  const categories = ['All', ...CATEGORIES.filter(c => modules.some(m => m.category === c))];
  const filtered = modules.filter(m => {
    const matchSearch = m.title?.toLowerCase().includes(search.toLowerCase()) || m.category?.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || m.category === activeCategory;
    return matchSearch && matchCat;
  });

  // ── APPROVALS VIEW ──
  if (isApprovalsView) {
    return (
      <div className="p-6 md:p-10 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">Persetujuan Pendaftaran</h1>
            <p className="text-sm text-slate-505 dark:text-slate-400 mt-1">Tinjau dan kelola permintaan akses modul dari siswa.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 rounded-xl">
            <AlertCircle className="w-4 h-4 text-amber-500 dark:text-amber-400" />
            <span className="text-sm font-bold text-amber-700 dark:text-amber-350">{enrollments.length} permintaan menunggu</span>
          </div>
        </div>

        {loadingEnrollments ? (
          <div className="flex items-center justify-center py-24 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-8 h-8 border-4 border-indigo-600 dark:border-indigo-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : enrollments.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-950/20 rounded-full flex items-center justify-center mb-5">
              <CheckCircle className="w-10 h-10 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Semua Bersih!</h3>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm text-center">Tidak ada permintaan pendaftaran yang menunggu persetujuan saat ini.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {enrollments.map((enr: any) => (
              <div key={enr.id} className="bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Student info */}
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-indigo-100 dark:bg-indigo-950/40 flex items-center justify-center font-black text-indigo-700 dark:text-indigo-300 text-sm shrink-0 uppercase">
                    {enr.studentName?.slice(0, 2) || 'ST'}
                  </div>
                  <div className="min-w-0">
                    <div className="font-bold text-slate-800 dark:text-slate-200 text-sm truncate">{enr.studentName}</div>
                    <div className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400 truncate">
                      <Mail className="w-3 h-3 shrink-0" />{enr.studentEmail}
                    </div>
                  </div>
                </div>

                {/* Module info */}
                <div className="flex items-center gap-3 px-4 py-2.5 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-850 flex-1 min-w-0">
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
                    className="flex items-center gap-1.5 px-4 py-2 bg-red-500 hover:bg-red-655 text-white dark:bg-red-950/20 dark:hover:bg-red-900/40 dark:text-red-400 text-xs font-bold rounded-xl transition-colors border border-red-200 dark:border-red-900/40 disabled:opacity-60"
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
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800 dark:text-white">
            {role === 'ADMIN' ? 'Semua Modul Pembelajaran' : 'Studio Modul Saya'}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {role === 'ADMIN' ? 'Kelola seluruh modul dari semua instruktur.' : 'Buat dan kelola konten pembelajaran Anda.'}
          </p>
        </div>
        {canManage && (
          <button
            onClick={() => handleOpenModal('create')}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 text-sm shrink-0"
          >
            <Plus className="w-4 h-4" /> Buat Modul Baru
          </button>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: 'Total Modul', value: modules.length, icon: BookOpen, color: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-405' },
          { label: 'Kategori', value: categories.length - 1, icon: Layers, color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400' },
          { label: role === 'ADMIN' ? 'Instruktur Aktif' : 'Total Siswa', value: role === 'ADMIN' ? new Set(modules.map(m => m.instructor?.id)).size : modules.reduce((a, m) => a + (m.enr || 0), 0), icon: Users, color: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400' },
          { label: role === 'ADMIN' ? 'Modul Terverifikasi' : 'Tugas Aktif', value: role === 'ADMIN' ? modules.filter(m => m.isVerified).length : modules.reduce((a, m) => a + (m.tasksCount || 0), 0), icon: role === 'ADMIN' ? ShieldCheck : Clock, color: role === 'ADMIN' ? 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400' : 'bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400' },
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

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
          <input
            type="text"
            placeholder="Cari modul..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-850 rounded-xl text-sm font-medium text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${activeCategory === cat ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white dark:bg-[#0c0e18] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:text-indigo-600 dark:hover:text-indigo-400'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Module Grid */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center bg-white dark:bg-[#0c0e18] rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="w-20 h-20 bg-indigo-50 dark:bg-indigo-950/20 rounded-full flex items-center justify-center mb-5">
            <BookOpen className="w-10 h-10 text-indigo-300 dark:text-indigo-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Belum Ada Modul</h3>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
            {role === 'INSTRUCTOR' ? 'Mulai buat modul pembelajaran pertama Anda!' : 'Belum ada modul yang dibuat.'}
          </p>
          {canManage && (
            <button onClick={() => handleOpenModal('create')} className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200">
              <Plus className="w-5 h-5" /> Buat Modul Pertama
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map((mod: any, i: number) => (
            <div
              key={mod.id}
              onClick={() => router.push(`/dashboard/modules/${mod.id}`)}
              className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 hover:dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-lg dark:shadow-black/20 hover:dark:shadow-indigo-950/10 transition-all duration-200 relative group flex flex-col cursor-pointer overflow-hidden"
            >
              {/* Thumbnail */}
              {(() => {
                const theme = getCourseTheme(mod.title);
                return (
                  <div className={`w-full h-36 bg-gradient-to-br ${theme.bg} flex items-center justify-center relative overflow-hidden group`}>
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] font-black tracking-wider text-slate-700 shadow-sm uppercase z-10">
                      {mod.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#2d2a6e]/85 px-2.5 py-1 rounded-lg text-[10px] font-black text-white tracking-wide shadow-sm z-10">
                      {mod.enr || 0} siswa
                    </div>
                    
                    {/* Visual Glassmorphic Logo Block */}
                    <div className="w-[140px] h-20 bg-white/10 rounded-2xl rotate-[-4deg] absolute border border-white/20 backdrop-blur-sm flex items-center justify-between px-4 shadow-xl shadow-black/10 group-hover:scale-105 group-hover:rotate-0 transition-all duration-500">
                      <span className="text-4xl drop-shadow-md select-none group-hover:scale-110 transition-transform duration-500">{theme.emoji}</span>
                      <div className="text-right select-none">
                        <p className="text-[10px] font-black text-white/50 tracking-widest uppercase leading-none">Module</p>
                        <p className="text-lg font-black text-white leading-tight mt-0.5 tracking-tight">{theme.logo}</p>
                      </div>
                    </div>

                    {/* Small floating bottom accent */}
                    <div className="w-10 h-10 bg-white rounded-xl rotate-[12deg] absolute right-4 bottom-4 shadow-lg flex items-center justify-center group-hover:rotate-[-6deg] group-hover:scale-105 transition-all duration-500">
                      <BookOpen className="w-4 h-4 text-indigo-600" />
                    </div>
                    
                    {/* Edit/Delete overlay */}
                    {canManage && (
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 z-20">
                        <button onClick={(e) => { e.stopPropagation(); handleOpenModal('edit', mod); }}
                           className="p-2.5 bg-white text-indigo-600 rounded-xl hover:bg-indigo-50 transition-colors shadow-md" title="Edit">
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button onClick={(e) => handleDelete(mod.id, e)}
                          className="p-2.5 bg-white text-red-500 rounded-xl hover:bg-red-50 transition-colors shadow-md" title="Hapus">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })()}

              {/* Card body */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-tight line-clamp-2 flex-1">{mod.title}</h3>
                  {/* Verification badge */}
                  {mod.isVerified ? (
                    <span className="shrink-0 flex items-center gap-1 text-[10px] font-black text-emerald-705 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/30 px-2 py-1 rounded-lg">
                      <ShieldCheck className="w-3 h-3" /> Verified
                    </span>
                  ) : (
                    <span className="shrink-0 flex items-center gap-1 text-[10px] font-black text-slate-400 dark:text-slate-500 bg-slate-105 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 px-2 py-1 rounded-lg">
                      <ShieldX className="w-3 h-3" /> Unverified
                    </span>
                  )}
                </div>
                {mod.description && <p className="text-xs text-slate-505 dark:text-slate-400 line-clamp-2 mb-3 leading-relaxed">{mod.description}</p>}

                {/* Admin: show instructor attribution */}
                {role === 'ADMIN' && mod.instructor && (
                  <p className="text-[11px] text-slate-400 dark:text-slate-500 font-medium mb-2 flex items-center gap-1">
                    <User className="w-3 h-3" /> {mod.instructor.name}
                  </p>
                )}

                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-auto pt-3 border-t border-slate-100 dark:border-slate-850 flex-wrap">
                  <div className="flex items-center gap-1"><Layers className="w-3.5 h-3.5" /> {mod.lessonsCount || 0} lessons</div>
                  <div className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {mod.tasksCount || 0} tugas</div>
                  <div className="ml-auto flex items-center gap-1.5">
                    {/* Admin verify/unverify button */}
                    {role === 'ADMIN' && (
                      <button
                        onClick={(e) => handleToggleVerify(mod, e)}
                        className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-colors border ${
                          mod.isVerified
                            ? 'bg-rose-50 hover:bg-rose-100 text-rose-605 dark:bg-rose-950/20 dark:border-rose-900/50 dark:text-rose-400 border-rose-200'
                            : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:border-emerald-900/50 dark:text-emerald-400 border-emerald-200'
                        }`}
                        title={mod.isVerified ? 'Batalkan Verifikasi' : 'Verifikasi Modul'}
                      >
                        {mod.isVerified ? <ShieldX className="w-3 h-3" /> : <ShieldCheck className="w-3 h-3" />}
                        {mod.isVerified ? 'Batalkan' : 'Verifikasi'}
                      </button>
                    )}
                    {canManage && (
                      <button onClick={(e) => { e.stopPropagation(); handleOpenModal('edit', mod); }}
                        className="flex items-center gap-1 px-2.5 py-1 bg-indigo-55 dark:bg-indigo-950/30 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 rounded-lg text-[11px] font-bold transition-colors border border-indigo-100 dark:border-indigo-900/30">
                        <Edit2 className="w-3 h-3" /> Edit
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-5 border-b border-slate-100 dark:border-slate-850 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-800 dark:text-white">{modalMode === 'create' ? 'Buat Modul Baru' : 'Edit Modul'}</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{modalMode === 'create' ? 'Isi data modul pembelajaran.' : `Edit: ${selectedModule?.title}`}</p>
                </div>
              </div>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 p-2 rounded-xl transition-colors">
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
                  <input type="text" required value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm font-bold text-slate-850 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all placeholder:text-slate-400"
                    placeholder="Contoh: Belajar React dari Nol" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Kategori</label>
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                      <button key={cat} type="button" onClick={() => setFormData({ ...formData, category: cat })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${formData.category === cat ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white dark:bg-[#0c0e18] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-indigo-300 hover:text-indigo-600'}`}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Deskripsi <span className="text-slate-400 font-normal text-xs">(Opsional)</span></label>
                  <textarea rows={3} value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-900 transition-all resize-none placeholder:text-slate-400"
                    placeholder="Deskripsi singkat tentang modul ini..." />
                </div>
              </div>
              <div className="mt-8 flex items-center justify-end gap-3 pt-5 border-t border-slate-100 dark:border-slate-850">
                <button type="button" onClick={handleCloseModal} className="px-5 py-2.5 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">Batal</button>
                <button type="submit" disabled={saving} className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 flex items-center gap-2 disabled:opacity-60">
                  <CheckCircle className="w-4 h-4" />
                  {saving ? 'Menyimpan...' : modalMode === 'create' ? 'Buat Modul' : 'Simpan Perubahan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
