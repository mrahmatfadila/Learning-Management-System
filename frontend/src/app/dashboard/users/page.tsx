'use client';
import { useEffect, useState, useMemo } from 'react';
import {
  Plus, Search, Edit2, Trash2, Mail, Shield, User, X, CheckCircle, GraduationCap,
  Users, CheckSquare, XCircle, AlertCircle, ShieldCheck, ShieldX, Key, Download,
  LayoutGrid, List, Filter, ChevronRight, Eye, RefreshCw, Sparkles, Activity,
  Lock, Check, FileText, Phone, Award, BookOpen, UserCheck, UserX, Copy,
  ArrowUpDown, MoreHorizontal, ExternalLink, ShieldAlert, Zap, Layers,
  Calendar, CheckCircle2, ChevronDown, LogIn
} from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function UsersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Current logged in admin
  const [currentUser, setCurrentUser] = useState<any>(null);

  // Active filters from URL
  const roleFilter = searchParams.get('role');
  const activeTab = searchParams.get('tab') || (roleFilter ? `role_${roleFilter}` : 'all');

  // Users data & state
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [verificationFilter, setVerificationFilter] = useState<'ALL' | 'VERIFIED' | 'UNVERIFIED'>('ALL');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'name_asc' | 'name_desc' | 'role'>('newest');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Multi-select for bulk actions
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [bulkLoading, setBulkLoading] = useState(false);

  // Toast notification state
  const [toastMessage, setToastMessage] = useState<{ title: string; desc?: string; type: 'success' | 'info' | 'error' } | null>(null);

  const showToast = (title: string, desc?: string, type: 'success' | 'info' | 'error' = 'success') => {
    setToastMessage({ title, desc, type });
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Create / Edit User Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STUDENT',
    specialty: '',
    phone: '',
    bio: '',
    isVerified: true
  });
  const [formError, setFormError] = useState('');
  const [saving, setSaving] = useState(false);

  // Reset Password Modal state
  const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
  const [resetTargetUser, setResetTargetUser] = useState<any>(null);
  const [newPassword, setNewPassword] = useState('');
  const [resettingPassword, setResettingPassword] = useState(false);
  const [copiedPassword, setCopiedPassword] = useState(false);

  // View User Details Modal state
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailUser, setDetailUser] = useState<any>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  // Bulk Role Modal state
  const [isBulkRoleModalOpen, setIsBulkRoleModalOpen] = useState(false);
  const [bulkTargetRole, setBulkTargetRole] = useState('STUDENT');

  // Fetch Users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/users');
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error('Failed to fetch users', err);
      showToast('Gagal memuat pengguna', 'Periksa koneksi backend', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const stored = localStorage.getItem('lms_user');
    if (stored) {
      try {
        const u = JSON.parse(stored);
        if (u?.role?.toUpperCase() !== 'ADMIN') {
          router.replace('/dashboard');
          return;
        }
        setCurrentUser(u);
        fetchUsers();
      } catch {}
    } else {
      router.replace('/login');
    }
  }, []);

  // Filtered & Sorted list
  const filteredUsers = useMemo(() => {
    let result = users.filter(u => {
      const matchSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase()) ||
        u.role.toLowerCase().includes(search.toLowerCase()) ||
        (u.specialty && u.specialty.toLowerCase().includes(search.toLowerCase())) ||
        (u.phone && u.phone.toLowerCase().includes(search.toLowerCase()));

      const matchRole = roleFilter ? u.role.toUpperCase() === roleFilter.toUpperCase() : true;

      const matchVerify =
        verificationFilter === 'ALL' ? true :
        verificationFilter === 'VERIFIED' ? u.isVerified : !u.isVerified;

      return matchSearch && matchRole && matchVerify;
    });

    // Sorting
    result.sort((a, b) => {
      if (sortBy === 'newest') return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
      if (sortBy === 'oldest') return new Date(a.createdAt || 0).getTime() - new Date(b.createdAt || 0).getTime();
      if (sortBy === 'name_asc') return a.name.localeCompare(b.name);
      if (sortBy === 'name_desc') return b.name.localeCompare(a.name);
      if (sortBy === 'role') return a.role.localeCompare(b.role);
      return 0;
    });

    return result;
  }, [users, search, roleFilter, verificationFilter, sortBy]);

  // Key stats
  const stats = useMemo(() => {
    const total = users.length;
    const admins = users.filter(u => u.role === 'ADMIN').length;
    const instructors = users.filter(u => u.role === 'INSTRUCTOR').length;
    const students = users.filter(u => u.role === 'STUDENT').length;
    const verified = users.filter(u => u.isVerified).length;
    const unverified = users.filter(u => !u.isVerified).length;

    return { total, admins, instructors, students, verified, unverified };
  }, [users]);

  // Modal actions
  const handleOpenModal = (mode: 'create' | 'edit', userToEdit?: any) => {
    setModalMode(mode);
    setFormError('');
    if (mode === 'edit' && userToEdit) {
      setSelectedUser(userToEdit);
      setFormData({
        name: userToEdit.name || '',
        email: userToEdit.email || '',
        password: '',
        role: userToEdit.role || 'STUDENT',
        specialty: userToEdit.specialty || '',
        phone: userToEdit.phone || '',
        bio: userToEdit.bio || '',
        isVerified: userToEdit.isVerified !== undefined ? userToEdit.isVerified : true
      });
    } else {
      setSelectedUser(null);
      setFormData({
        name: '',
        email: '',
        password: '',
        role: roleFilter || 'STUDENT',
        specialty: '',
        phone: '',
        bio: '',
        isVerified: true
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setSaving(true);

    try {
      const url = modalMode === 'create'
        ? 'http://localhost:5000/api/users'
        : `http://localhost:5000/api/users/${selectedUser.id}`;

      const method = modalMode === 'create' ? 'POST' : 'PUT';
      const payload: any = { ...formData };
      if (modalMode === 'edit' && !payload.password) {
        delete payload.password;
      }

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Gagal menyimpan data pengguna');

      handleCloseModal();
      fetchUsers();
      showToast(
        modalMode === 'create' ? 'Pengguna Berhasil Dibuat' : 'Data Pengguna Diperbarui',
        `${formData.name} (${formData.role}) siap digunakan`
      );
    } catch (err: any) {
      setFormError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (!confirm(`Hapus permanen akun pengguna "${name}"? Semua riwayat tugas dan pendaftaran juga akan dibersihkan.`)) return;
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchUsers();
        setSelectedIds(prev => prev.filter(i => i !== id));
        showToast('Pengguna Dihapus', `Akun ${name} telah dihapus permanen`, 'info');
      } else {
        const data = await res.json();
        showToast('Gagal Menghapus', data.message || 'Terjadi kesalahan', 'error');
      }
    } catch (err) {
      showToast('Error', 'Kesalahan jaringan', 'error');
    }
  };

  // Instant 1-Click Role Switcher
  const handleQuickRoleChange = async (userToUpdate: any, newRole: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/users/${userToUpdate.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: newRole })
      });
      if (res.ok) {
        fetchUsers();
        showToast('Role Diubah', `${userToUpdate.name} sekarang berstatus ${newRole}`);
      } else {
        showToast('Gagal Mengubah Role', 'Terjadi kesalahan pada server', 'error');
      }
    } catch {
      showToast('Error', 'Terjadi kesalahan jaringan', 'error');
    }
  };

  // Instant 1-Click Verification Toggle
  const handleToggleVerify = async (userToUpdate: any) => {
    const newStatus = !userToUpdate.isVerified;
    try {
      const res = await fetch(`http://localhost:5000/api/users/${userToUpdate.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isVerified: newStatus })
      });
      if (res.ok) {
        fetchUsers();
        showToast(
          newStatus ? 'Akun Terverifikasi' : 'Verifikasi Dibatalkan',
          `${userToUpdate.name} status: ${newStatus ? 'Verified' : 'Unverified'}`
        );
      } else {
        showToast('Gagal', 'Tidak dapat memperbarui status verifikasi', 'error');
      }
    } catch {
      showToast('Error', 'Terjadi kesalahan jaringan', 'error');
    }
  };

  // Impersonate / Switch to User view
  const handleImpersonate = (userToImpersonate: any) => {
    if (!confirm(`Masuk sebagai "${userToImpersonate.name}" (${userToImpersonate.role})? Anda akan dialihkan ke dashboard dengan hak akses akun tersebut.`)) return;
    
    // Save current admin info for restore
    localStorage.setItem('lms_impersonator', JSON.stringify(currentUser));
    localStorage.setItem('lms_user', JSON.stringify({
      id: userToImpersonate.id,
      name: userToImpersonate.name,
      email: userToImpersonate.email,
      role: userToImpersonate.role,
      specialty: userToImpersonate.specialty || '',
      isVerified: userToImpersonate.isVerified
    }));
    
    showToast('Beralih Akun', `Login sebagai ${userToImpersonate.name}...`);
    setTimeout(() => {
      window.location.href = '/dashboard';
    }, 600);
  };

  // Reset Password Action
  const handleOpenResetPassword = (userToReset: any) => {
    setResetTargetUser(userToReset);
    setNewPassword('');
    setCopiedPassword(false);
    setIsResetPasswordOpen(true);
  };

  const handleConfirmResetPassword = async () => {
    if (!newPassword || newPassword.length < 6) {
      showToast('Password Kurang Panjang', 'Password baru minimal 6 karakter', 'error');
      return;
    }
    setResettingPassword(true);
    try {
      const res = await fetch(`http://localhost:5000/api/users/${resetTargetUser.id}/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ newPassword })
      });
      if (res.ok) {
        showToast('Password Berhasil Direset', `Password baru telah aktif untuk ${resetTargetUser.name}`);
        setIsResetPasswordOpen(false);
      } else {
        const d = await res.json();
        showToast('Gagal Mereset Password', d.message || 'Coba lagi nanti', 'error');
      }
    } catch {
      showToast('Error', 'Terjadi kesalahan jaringan', 'error');
    } finally {
      setResettingPassword(false);
    }
  };

  const handleGenerateRandomPassword = () => {
    const upper = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
    const lower = 'abcdefghijkmnopqrstuvwxyz';
    const numbers = '23456789';
    const special = '!@#$%&*';
    let pass = '';
    pass += upper.charAt(Math.floor(Math.random() * upper.length));
    pass += lower.charAt(Math.floor(Math.random() * lower.length));
    pass += numbers.charAt(Math.floor(Math.random() * numbers.length));
    pass += special.charAt(Math.floor(Math.random() * special.length));
    const all = upper + lower + numbers + special;
    for (let i = 4; i < 10; i++) {
      pass += all.charAt(Math.floor(Math.random() * all.length));
    }
    // Shuffle
    pass = pass.split('').sort(() => 0.5 - Math.random()).join('');
    setNewPassword(pass);
  };

  // View User Details
  const handleOpenDetail = async (userToView: any) => {
    setDetailLoading(true);
    setIsDetailModalOpen(true);
    try {
      const res = await fetch(`http://localhost:5000/api/users/${userToView.id}`);
      if (res.ok) {
        setDetailUser(await res.json());
      } else {
        setDetailUser(userToView);
      }
    } catch {
      setDetailUser(userToView);
    } finally {
      setDetailLoading(false);
    }
  };

  // Bulk Multi-Select actions
  const handleSelectAll = () => {
    if (selectedIds.length === filteredUsers.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredUsers.map(u => u.id));
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
    setBulkLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/users/bulk-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds, isVerified })
      });
      if (res.ok) {
        fetchUsers();
        showToast('Verifikasi Massal Berhasil', `${selectedIds.length} akun telah diperbarui statusnya`);
        setSelectedIds([]);
      } else {
        showToast('Gagal', 'Terjadi kesalahan saat memproses verifikasi massal', 'error');
      }
    } catch {
      showToast('Error', 'Kesalahan jaringan', 'error');
    } finally {
      setBulkLoading(false);
    }
  };

  const handleConfirmBulkRole = async () => {
    if (selectedIds.length === 0) return;
    setBulkLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/users/bulk-role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds, role: bulkTargetRole })
      });
      if (res.ok) {
        fetchUsers();
        showToast('Role Massal Berhasil', `${selectedIds.length} akun diubah menjadi ${bulkTargetRole}`);
        setSelectedIds([]);
        setIsBulkRoleModalOpen(false);
      } else {
        showToast('Gagal', 'Gagal memperbarui role massal', 'error');
      }
    } catch {
      showToast('Error', 'Kesalahan jaringan', 'error');
    } finally {
      setBulkLoading(false);
    }
  };

  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;
    if (!confirm(`PERINGATAN: Yakin ingin menghapus ${selectedIds.length} pengguna yang dipilih secara permanen? Data tidak dapat dikembalikan.`)) return;
    setBulkLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/users/bulk-delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: selectedIds })
      });
      if (res.ok) {
        fetchUsers();
        showToast('Hapus Massal Selesai', `${selectedIds.length} akun berhasil dihapus`);
        setSelectedIds([]);
      } else {
        showToast('Gagal', 'Gagal menghapus beberapa akun', 'error');
      }
    } catch {
      showToast('Error', 'Kesalahan jaringan', 'error');
    } finally {
      setBulkLoading(false);
    }
  };

  const handleExportUsers = (format: 'json' | 'csv' = 'json') => {
    if (format === 'csv') {
      const headers = ['ID', 'Nama', 'Email', 'Role', 'Spesialisasi', 'Telepon', 'Status Verifikasi', 'Tanggal Daftar'];
      const rows = users.map(u => [
        `"${u.id}"`,
        `"${(u.name || '').replace(/"/g, '""')}"`,
        `"${u.email}"`,
        `"${u.role}"`,
        `"${(u.specialty || '').replace(/"/g, '""')}"`,
        `"${u.phone || ''}"`,
        `"${u.isVerified ? 'Verified' : 'Unverified'}"`,
        `"${u.createdAt || ''}"`
      ]);
      const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `lms-users-export-${new Date().toISOString().slice(0, 10)}.csv`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Ekspor CSV Berhasil', `${users.length} pengguna diekspor ke format CSV`);
    } else {
      const dataToExport = users.map(u => ({
        id: u.id,
        name: u.name,
        email: u.email,
        role: u.role,
        specialty: u.specialty || '',
        phone: u.phone || '',
        isVerified: u.isVerified,
        createdAt: u.createdAt
      }));
      const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `lms-users-export-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast('Ekspor JSON Berhasil', `${users.length} pengguna diekspor`);
    }
  };

  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case 'ADMIN':
        return 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60';
      case 'INSTRUCTOR':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
      default:
        return 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60';
    }
  };

  const getAvatarGradient = (name: string) => {
    const gradients = [
      'from-indigo-500 to-purple-600',
      'from-emerald-500 to-teal-600',
      'from-blue-500 to-cyan-600',
      'from-rose-500 to-pink-600',
      'from-amber-500 to-orange-600',
      'from-violet-500 to-indigo-600',
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    const index = Math.abs(hash) % gradients.length;
    return gradients[index];
  };

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
      {/* ── TOAST NOTIFICATION ── */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-short">
          <div className={`px-5 py-3.5 rounded-2xl shadow-2xl border flex items-center gap-3 backdrop-blur-md ${
            toastMessage.type === 'error'
              ? 'bg-rose-900/90 text-white border-rose-700'
              : toastMessage.type === 'info'
              ? 'bg-slate-900/90 text-white border-slate-700'
              : 'bg-emerald-900/90 text-white border-emerald-700'
          }`}>
            {toastMessage.type === 'error' ? (
              <XCircle className="w-5 h-5 text-rose-300 shrink-0" />
            ) : (
              <CheckCircle2 className="w-5 h-5 text-emerald-300 shrink-0" />
            )}
            <div>
              <div className="text-xs font-black">{toastMessage.title}</div>
              {toastMessage.desc && <div className="text-[11px] text-slate-200 opacity-90">{toastMessage.desc}</div>}
            </div>
          </div>
        </div>
      )}

      {/* ── TOP HEADER HERO ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 md:p-8 text-white shadow-xl border border-indigo-900/40">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-2 flex-wrap">
              <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-black rounded-full border border-indigo-500/30 flex items-center gap-1.5 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" /> Admin Command Center
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-full border border-emerald-500/30">
                ● {stats.total} Akun Terdaftar
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-2.5">
              User Management & Access Control
            </h1>
            <p className="text-xs md:text-sm text-indigo-200/80 mt-1 max-w-2xl leading-relaxed">
              Kelola otorisasi akun, reset password instan, kontrol verifikasi keamanan, dan uji hak akses dengan fitur impersonate.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-wrap self-stretch sm:self-auto">
            <div className="relative group">
              <button
                onClick={() => handleExportUsers('csv')}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold rounded-2xl text-xs transition-all backdrop-blur-md shadow-sm"
                title="Ekspor CSV"
              >
                <Download className="w-4 h-4 text-indigo-300" /> Ekspor CSV
              </button>
            </div>
            <button
              onClick={() => handleOpenModal('create')}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-indigo-500/30 text-xs md:text-sm hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" /> Tambah Pengguna Baru
            </button>
          </div>
        </div>
      </div>

      {/* ── METRICS SUMMARY CARDS ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {/* Card 1: Total Users */}
        <div
          onClick={() => router.push('/dashboard/users')}
          className={`p-4 md:p-5 rounded-2xl border transition-all cursor-pointer group ${
            !roleFilter && activeTab === 'all'
              ? 'bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/40 dark:to-[#0c0e18] border-indigo-300 dark:border-indigo-800 shadow-md'
              : 'bg-white dark:bg-[#0c0e18] border-slate-200 dark:border-slate-800 hover:border-indigo-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Total Pengguna</span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-xs">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mt-2 group-hover:text-indigo-600 transition-colors">
            {stats.total}
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-indigo-600 dark:text-indigo-400 font-bold">
            <span>Semua Akun Sistem</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Card 2: Admins */}
        <div
          onClick={() => router.push('/dashboard/users?role=ADMIN')}
          className={`p-4 md:p-5 rounded-2xl border transition-all cursor-pointer group ${
            roleFilter === 'ADMIN'
              ? 'bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/40 dark:to-[#0c0e18] border-purple-300 dark:border-purple-800 shadow-md'
              : 'bg-white dark:bg-[#0c0e18] border-slate-200 dark:border-slate-800 hover:border-purple-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Super Admin</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center font-black text-xs">
              <Shield className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-black text-purple-600 dark:text-purple-400 mt-2">
            {stats.admins}
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-purple-600 dark:text-purple-400 font-bold">
            <span>Full Otoritas</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Card 3: Instructors */}
        <div
          onClick={() => router.push('/dashboard/users?role=INSTRUCTOR')}
          className={`p-4 md:p-5 rounded-2xl border transition-all cursor-pointer group ${
            roleFilter === 'INSTRUCTOR'
              ? 'bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/40 dark:to-[#0c0e18] border-emerald-300 dark:border-emerald-800 shadow-md'
              : 'bg-white dark:bg-[#0c0e18] border-slate-200 dark:border-slate-800 hover:border-emerald-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Instruktur</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-black text-xs">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-2">
            {stats.instructors}
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
            <span>Pembuat Modul</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Card 4: Students */}
        <div
          onClick={() => router.push('/dashboard/users?role=STUDENT')}
          className={`p-4 md:p-5 rounded-2xl border transition-all cursor-pointer group ${
            roleFilter === 'STUDENT'
              ? 'bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/40 dark:to-[#0c0e18] border-blue-300 dark:border-blue-800 shadow-md'
              : 'bg-white dark:bg-[#0c0e18] border-slate-200 dark:border-slate-800 hover:border-blue-200'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Siswa Aktif</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-black text-xs">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl md:text-3xl font-black text-blue-600 dark:text-blue-400 mt-2">
            {stats.students}
          </div>
          <div className="flex items-center gap-1.5 mt-2 text-[11px] text-blue-600 dark:text-blue-400 font-bold">
            <span>{stats.verified} Verified</span>
            <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </div>

      {/* ── SUB-MENU NAVIGATION TABS ── */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 overflow-x-auto scrollbar-hide">
        {[
          { id: 'all', label: 'Semua Pengguna', icon: Users, count: stats.total, href: '/dashboard/users' },
          { id: 'role_ADMIN', label: 'Administrator', icon: Shield, count: stats.admins, href: '/dashboard/users?role=ADMIN' },
          { id: 'role_INSTRUCTOR', label: 'Instruktur', icon: FileText, count: stats.instructors, href: '/dashboard/users?role=INSTRUCTOR' },
          { id: 'role_STUDENT', label: 'Siswa / Mahasiswa', icon: GraduationCap, count: stats.students, href: '/dashboard/users?role=STUDENT' },
          { id: 'roles', label: 'Matriks Roles & Permissions', icon: ShieldCheck, href: '/dashboard/users?tab=roles' },
          { id: 'security', label: 'Security & Audit Verifikasi', icon: Activity, count: stats.unverified > 0 ? stats.unverified : undefined, badgeColor: 'bg-amber-500 text-white', href: '/dashboard/users?tab=security' },
        ].map(tab => {
          const isActive =
            tab.id === 'all' ? (!roleFilter && !searchParams.get('tab')) :
            tab.id.startsWith('role_') ? roleFilter === tab.id.replace('role_', '') :
            searchParams.get('tab') === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => router.push(tab.href)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-black transition-all shrink-0 cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none'
                  : 'bg-white dark:bg-[#0c0e18] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-indigo-300'
              }`}
            >
              <tab.icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={`px-2 py-0.5 rounded-lg text-[10px] font-black ${tab.badgeColor || (isActive ? 'bg-indigo-800/80 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300')}`}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── TAB VIEW: ROLES & PERMISSIONS MATRIX ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {activeTab === 'roles' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                role: 'ADMIN',
                title: 'Administrator (Super Admin)',
                color: 'from-purple-600 to-indigo-700',
                badge: 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
                count: stats.admins,
                desc: 'Akses tanpa batas ke seluruh modul, manajemen user, keuangan, pengaturan sistem, dan database.',
                perms: [
                  'Kelola Semua User, Role & Password',
                  'Course Management, Kategori & Approval',
                  'Verifikasi & Kloning Modul Instruktur',
                  'Akses Security, Audit Log & Laporan',
                  'Impersonate Akun Siswa & Instruktur'
                ]
              },
              {
                role: 'INSTRUCTOR',
                title: 'Instruktur / Dosen Pengampu',
                color: 'from-emerald-600 to-teal-700',
                badge: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
                count: stats.instructors,
                desc: 'Membuat kursus, mengedit pelajaran, memeriksa tugas siswa, menyetujui pendaftaran, dan forum Q&A.',
                perms: [
                  'Buat & Kelola Modul Pembelajaran Sendiri',
                  'Lesson Editor (Code Sandbox, Teori, Quiz)',
                  'Pemeriksaan Tugas Siswa & Grading',
                  'Atur Jadwal Offline & Live Session',
                  'Interaksi Diskusi Forum & Tanya Jawab'
                ]
              },
              {
                role: 'STUDENT',
                title: 'Siswa / Mahasiswa',
                color: 'from-blue-600 to-indigo-700',
                badge: 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
                count: stats.students,
                desc: 'Mendaftar kursus, menjalankan live preview coding, mengumpulkan tugas, dan mendapatkan sertifikat.',
                perms: [
                  'Explore Katalog & Pendaftaran Kursus',
                  'Interactive Code Sandbox Preview',
                  'Kuis Mandiri & Pengumpulan Tugas',
                  'Leaderboard Poin & Gamification',
                  'Unduh Sertifikat Kelulusan Resmi'
                ]
              }
            ].map(r => (
              <div key={r.role} className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-black border ${r.badge}`}>
                      {r.role}
                    </span>
                    <span className="text-xl font-black text-slate-800 dark:text-white">{r.count} Pengguna</span>
                  </div>
                  <h3 className="text-base font-black text-slate-800 dark:text-white mb-2">{r.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{r.desc}</p>
                  
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 dark:border-slate-800 mb-6">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-wider mb-2">Hak Akses Utama:</div>
                    {r.perms.map((p, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-700 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => router.push(`/dashboard/users?role=${r.role}`)}
                  className="w-full py-2.5 bg-slate-50 dark:bg-slate-900/80 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-slate-700 dark:text-slate-300 hover:text-indigo-600 rounded-2xl text-xs font-black transition-all border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-1.5"
                >
                  Lihat Semua {r.title} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : activeTab === 'security' ? (
        /* ────────────────────────────────────────────────────────────────────────── */
        /* ── TAB VIEW: SECURITY & AUDIT ── */
        /* ────────────────────────────────────────────────────────────────────────── */
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase">Akun Tertahan (Unverified)</div>
              <div className="text-3xl font-black text-amber-600 dark:text-amber-400 mt-1">{stats.unverified}</div>
              <div className="text-xs text-slate-500 mt-1">Perlu review & verifikasi akses</div>
            </div>
            <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase">Rasio Akun Terverifikasi</div>
              <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                {stats.total > 0 ? Math.round((stats.verified / stats.total) * 100) : 0}%
              </div>
              <div className="text-xs text-slate-500 mt-1">{stats.verified} dari {stats.total} akun aktif</div>
            </div>
            <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 p-5 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase">Super Admin Active</div>
              <div className="text-3xl font-black text-purple-600 dark:text-purple-400 mt-1">{stats.admins}</div>
              <div className="text-xs text-purple-500 font-bold mt-1">Memiliki izin master</div>
            </div>
          </div>

          {/* Unverified Accounts Queue */}
          <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
              <div>
                <h3 className="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-500" /> Antrean Akun Belum Diverifikasi
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Verifikasi akun siswa atau instruktur agar mereka dapat mengakses fitur modul penuh.
                </p>
              </div>
              {stats.unverified > 0 && (
                <button
                  onClick={async () => {
                    const unverifiedIds = users.filter(u => !u.isVerified).map(u => u.id);
                    if (!confirm(`Verifikasi seluruh ${unverifiedIds.length} akun sekaligus?`)) return;
                    await fetch('http://localhost:5000/api/users/bulk-verify', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ ids: unverifiedIds, isVerified: true })
                    });
                    fetchUsers();
                    showToast('Verifikasi Selesai', `Semua ${unverifiedIds.length} akun berhasil diverifikasi`);
                  }}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
                >
                  <ShieldCheck className="w-4 h-4" /> Verifikasi Semua ({stats.unverified})
                </button>
              )}
            </div>

            {stats.unverified === 0 ? (
              <div className="py-12 text-center text-slate-400">
                <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3 animate-pulse" />
                <p className="text-sm font-black text-slate-800 dark:text-slate-200">Semua Akun Sudah Terverifikasi!</p>
                <p className="text-xs text-slate-400 mt-1">Tidak ada akun yang tertahan saat ini.</p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {users.filter(u => !u.isVerified).map(unv => (
                  <div key={unv.id} className="py-3.5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-xs">
                        {unv.name?.slice(0, 2) || 'US'}
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-slate-800 dark:text-white">{unv.name}</div>
                        <div className="text-xs text-slate-400">{unv.email} • Role: {unv.role}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleToggleVerify(unv)}
                        className="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-xs font-black transition-all flex items-center gap-1.5 shadow-sm"
                      >
                        <ShieldCheck className="w-3.5 h-3.5" /> Verifikasi Sekarang
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* ────────────────────────────────────────────────────────────────────────── */
        /* ── TAB VIEW: USERS LIST & DIRECTORY ── */
        /* ────────────────────────────────────────────────────────────────────────── */
        <div className="space-y-4">
          {/* ── FLOATING BULK ACTIONS BAR ── */}
          {selectedIds.length > 0 && (
            <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex flex-wrap items-center justify-between gap-3 border border-slate-700 animate-slideDown">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 bg-indigo-600 text-white rounded-lg flex items-center justify-center font-black text-xs shadow-md">
                  {selectedIds.length}
                </span>
                <span className="font-black text-xs md:text-sm">Pengguna Terpilih</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setIsBulkRoleModalOpen(true)}
                  disabled={bulkLoading}
                  className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Shield className="w-3.5 h-3.5" /> Ubah Role
                </button>
                <button
                  onClick={() => handleBulkVerify(true)}
                  disabled={bulkLoading}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Verifikasi
                </button>
                <button
                  onClick={() => handleBulkVerify(false)}
                  disabled={bulkLoading}
                  className="px-3.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <ShieldX className="w-3.5 h-3.5" /> Unverify
                </button>
                <button
                  onClick={handleBulkDelete}
                  disabled={bulkLoading}
                  className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Hapus
                </button>
                <button
                  onClick={() => setSelectedIds([])}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg transition-colors ml-2"
                  title="Batalkan Pilihan"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Search, Filters, Sorting, and View Mode */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3 bg-white dark:bg-[#0c0e18] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1">
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari nama, email, role, spesialisasi, telepon..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              <select
                value={verificationFilter}
                onChange={(e: any) => setVerificationFilter(e.target.value)}
                className="px-3 py-2 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="ALL">🛡️ Status: Semua</option>
                <option value="VERIFIED">✅ Verified ({stats.verified})</option>
                <option value="UNVERIFIED">⏳ Unverified ({stats.unverified})</option>
              </select>

              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 focus:outline-none cursor-pointer"
              >
                <option value="newest">Terbaru Terdaftar</option>
                <option value="oldest">Terlama Terdaftar</option>
                <option value="name_asc">Nama (A - Z)</option>
                <option value="name_desc">Nama (Z - A)</option>
                <option value="role">Berdasarkan Role</option>
              </select>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={handleSelectAll}
                className="px-3 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 rounded-xl text-xs font-black transition-colors"
              >
                {selectedIds.length === filteredUsers.length && filteredUsers.length > 0 ? 'Batal Pilih' : 'Pilih Semua'}
              </button>
              <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === 'table' ? 'bg-white dark:bg-[#0c0e18] text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                  title="Tampilan Tabel"
                >
                  <List className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-white dark:bg-[#0c0e18] text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                  title="Tampilan Kartu Grid"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* ── TABLE VIEW ── */}
          {loading ? (
            <div className="flex flex-col items-center justify-center py-24 bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-3" />
              <p className="text-xs text-slate-400 font-bold">Memuat data pengguna...</p>
            </div>
          ) : filteredUsers.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800">
              <div className="w-16 h-16 bg-indigo-50 dark:bg-indigo-950/20 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-indigo-400" />
              </div>
              <h3 className="text-base font-black text-slate-800 dark:text-slate-200 mb-1">Tidak Ada Pengguna Ditemukan</h3>
              <p className="text-xs text-slate-400 max-w-sm mb-4">Coba ganti kata kunci pencarian atau ubah filter role.</p>
              <button
                onClick={() => { setSearch(''); setVerificationFilter('ALL'); }}
                className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-bold"
              >
                Reset Filter
              </button>
            </div>
          ) : viewMode === 'table' ? (
            <div className="bg-white dark:bg-[#0c0e18] border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="p-4 w-10">
                        <input
                          type="checkbox"
                          checked={selectedIds.length === filteredUsers.length && filteredUsers.length > 0}
                          onChange={handleSelectAll}
                          className="rounded cursor-pointer"
                        />
                      </th>
                      <th className="p-4">Pengguna</th>
                      <th className="p-4">Role & Otoritas</th>
                      <th className="p-4">Keahlian & Kontak</th>
                      <th className="p-4">Status Akun</th>
                      <th className="p-4 text-right">Aksi Admin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                    {filteredUsers.map(u => {
                      const isSelected = selectedIds.includes(u.id);
                      return (
                        <tr
                          key={u.id}
                          className={`hover:bg-slate-50/80 dark:hover:bg-slate-900/40 transition-colors ${
                            isSelected ? 'bg-indigo-50/50 dark:bg-indigo-950/20' : ''
                          }`}
                        >
                          <td className="p-4">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={() => handleToggleSelect(u.id)}
                              className="rounded cursor-pointer"
                            />
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              {u.profilePicture ? (
                                <img
                                  src={u.profilePicture}
                                  alt={u.name}
                                  className="w-9 h-9 rounded-xl object-cover shrink-0 shadow-sm border border-slate-200 dark:border-slate-800"
                                />
                              ) : (
                                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${getAvatarGradient(u.name)} text-white flex items-center justify-center font-black text-xs uppercase shrink-0 shadow-sm`}>
                                  {u.name?.slice(0, 2) || 'US'}
                                </div>
                              )}
                              <div className="min-w-0">
                                <div className="font-extrabold text-slate-800 dark:text-white text-xs truncate flex items-center gap-1.5">
                                  {u.name}
                                  {u.id === currentUser?.id && (
                                    <span className="text-[9px] bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 px-1.5 py-0.2 rounded font-black border border-purple-200 dark:border-purple-800">
                                      Anda
                                    </span>
                                  )}
                                </div>
                                <div className="text-[11px] text-slate-400 flex items-center gap-1 truncate mt-0.5">
                                  <Mail className="w-3 h-3 shrink-0" /> {u.email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            {/* 1-Click Role Switcher */}
                            <select
                              value={u.role}
                              onChange={(e) => handleQuickRoleChange(u, e.target.value)}
                              className={`px-2.5 py-1 rounded-xl text-[11px] font-black border cursor-pointer focus:outline-none transition-colors ${getRoleBadgeStyle(u.role)}`}
                            >
                              <option value="ADMIN">🛡️ ADMIN</option>
                              <option value="INSTRUCTOR">👨‍🏫 INSTRUCTOR</option>
                              <option value="STUDENT">🎓 STUDENT</option>
                            </select>
                          </td>
                          <td className="p-4 text-xs">
                            {u.specialty ? (
                              <span className="font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded-lg text-[11px]">
                                {u.specialty}
                              </span>
                            ) : u.phone ? (
                              <span className="text-slate-500 dark:text-slate-400 text-[11px] flex items-center gap-1">
                                <Phone className="w-3 h-3" /> {u.phone}
                              </span>
                            ) : (
                              <span className="text-slate-400 text-[11px]">-</span>
                            )}
                          </td>
                          <td className="p-4">
                            <button
                              onClick={() => handleToggleVerify(u)}
                              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-black border transition-all ${
                                u.isVerified
                                  ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/40 hover:bg-rose-50 hover:text-rose-600'
                                  : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/40 hover:bg-emerald-50 hover:text-emerald-700'
                              }`}
                              title="Klik untuk ubah status verifikasi"
                            >
                              {u.isVerified ? <ShieldCheck className="w-3 h-3" /> : <ShieldX className="w-3 h-3" />}
                              {u.isVerified ? 'Verified' : 'Unverified'}
                            </button>
                          </td>
                          <td className="p-4 text-right">
                            <div className="flex items-center justify-end gap-1">
                              {/* Impersonate */}
                              {u.id !== currentUser?.id && (
                                <button
                                  onClick={() => handleImpersonate(u)}
                                  className="p-1.5 text-slate-400 hover:text-purple-600 transition-colors rounded-lg hover:bg-purple-50 dark:hover:bg-purple-950/30"
                                  title="Masuk sebagai akun ini (Impersonate)"
                                >
                                  <LogIn className="w-3.5 h-3.5" />
                                </button>
                              )}
                              <button
                                onClick={() => handleOpenDetail(u)}
                                className="p-1.5 text-slate-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
                                title="Lihat Profil Lengkap"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleOpenResetPassword(u)}
                                className="p-1.5 text-slate-400 hover:text-amber-600 transition-colors rounded-lg hover:bg-amber-50 dark:hover:bg-amber-950/30"
                                title="Reset Password"
                              >
                                <Key className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleOpenModal('edit', u)}
                                className="p-1.5 text-slate-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
                                title="Edit Data"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              {u.id !== currentUser?.id && (
                                <button
                                  onClick={() => handleDelete(u.id, u.name)}
                                  className="p-1.5 text-slate-400 hover:text-rose-500 transition-colors rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30"
                                  title="Hapus Akun"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* ── GRID VIEW (Cards) ── */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredUsers.map(u => {
                const isSelected = selectedIds.includes(u.id);
                return (
                  <div
                    key={u.id}
                    className={`bg-white dark:bg-[#0c0e18] border rounded-3xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative ${
                      isSelected
                        ? 'border-indigo-600 ring-2 ring-indigo-500/30'
                        : 'border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleToggleSelect(u.id)}
                            className="rounded cursor-pointer"
                          />
                          {u.profilePicture ? (
                            <img
                              src={u.profilePicture}
                              alt={u.name}
                              className="w-11 h-11 rounded-2xl object-cover shrink-0 shadow-md border border-slate-200 dark:border-slate-800"
                            />
                          ) : (
                            <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${getAvatarGradient(u.name)} text-white flex items-center justify-center font-black text-sm uppercase shrink-0 shadow-md`}>
                              {u.name?.slice(0, 2) || 'US'}
                            </div>
                          )}
                          <div className="min-w-0">
                            <h3 className="font-black text-slate-800 dark:text-white text-xs truncate flex items-center gap-1">
                              {u.name}
                              {u.id === currentUser?.id && (
                                <span className="text-[9px] bg-purple-100 text-purple-700 px-1.5 py-0.2 rounded font-black">Anda</span>
                              )}
                            </h3>
                            <p className="text-[11px] text-slate-400 truncate">{u.email}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <select
                          value={u.role}
                          onChange={(e) => handleQuickRoleChange(u, e.target.value)}
                          className={`px-2.5 py-1 rounded-xl text-[11px] font-black border cursor-pointer ${getRoleBadgeStyle(u.role)}`}
                        >
                          <option value="ADMIN">🛡️ ADMIN</option>
                          <option value="INSTRUCTOR">👨‍🏫 INSTRUCTOR</option>
                          <option value="STUDENT">🎓 STUDENT</option>
                        </select>

                        <button
                          onClick={() => handleToggleVerify(u)}
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[10px] font-black border ${
                            u.isVerified
                              ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200'
                              : 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200'
                          }`}
                        >
                          {u.isVerified ? <ShieldCheck className="w-3 h-3" /> : <ShieldX className="w-3 h-3" />}
                          {u.isVerified ? 'Verified' : 'Unverified'}
                        </button>
                      </div>

                      {u.specialty && (
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-2 rounded-xl mb-3 border border-slate-100 dark:border-slate-800 truncate">
                          <span className="font-bold text-slate-700 dark:text-slate-300">Spesialisasi:</span> {u.specialty}
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleOpenDetail(u)}
                        className="text-xs font-black text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                      >
                        <Eye className="w-3.5 h-3.5" /> Detail Profil
                      </button>
                      <div className="flex items-center gap-1">
                        {u.id !== currentUser?.id && (
                          <button
                            onClick={() => handleImpersonate(u)}
                            className="p-1.5 text-slate-400 hover:text-purple-600 rounded-lg transition-colors"
                            title="Masuk sebagai akun ini (Impersonate)"
                          >
                            <LogIn className="w-3.5 h-3.5" />
                          </button>
                        )}
                        <button
                          onClick={() => handleOpenResetPassword(u)}
                          className="p-1.5 text-slate-400 hover:text-amber-600 rounded-lg transition-colors"
                          title="Reset Password"
                        >
                          <Key className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleOpenModal('edit', u)}
                          className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        {u.id !== currentUser?.id && (
                          <button
                            onClick={() => handleDelete(u.id, u.name)}
                            className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg transition-colors"
                            title="Hapus"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 1: CREATE / EDIT USER ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-600 font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-black text-slate-800 dark:text-white">
                    {modalMode === 'create' ? 'Tambah Pengguna Baru' : 'Edit Data Pengguna'}
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {modalMode === 'create' ? 'Buat akun dengan hak akses tertentu.' : `Edit profil: ${selectedUser?.name}`}
                  </p>
                </div>
              </div>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600 p-2 rounded-xl">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {formError && (
                <div className="p-3 bg-rose-50 dark:bg-rose-950/20 text-rose-600 text-xs rounded-xl border border-rose-100 flex items-center gap-2">
                  <X className="w-4 h-4 shrink-0" /> <span>{formError}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Nama Lengkap <span className="text-rose-500">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                  placeholder="Contoh: Muhammad Rahmat"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Email Akun <span className="text-rose-500">*</span></label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                  placeholder="nama@domain.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Password {modalMode === 'edit' && <span className="text-slate-400 font-normal">(Kosongkan jika tidak diubah)</span>}
                </label>
                <input
                  type="password"
                  required={modalMode === 'create'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500"
                  placeholder="Minimal 6 karakter"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Role Otorisasi</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
                  >
                    <option value="STUDENT">🎓 STUDENT (Siswa)</option>
                    <option value="INSTRUCTOR">👨‍🏫 INSTRUCTOR (Guru)</option>
                    <option value="ADMIN">🛡️ ADMIN (Super Admin)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Status Verifikasi</label>
                  <select
                    value={formData.isVerified ? 'true' : 'false'}
                    onChange={(e) => setFormData({ ...formData, isVerified: e.target.value === 'true' })}
                    className="w-full px-3 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
                  >
                    <option value="true">✅ Verified (Aktif)</option>
                    <option value="false">⏳ Unverified (Tertahan)</option>
                  </select>
                </div>
              </div>

              {formData.role === 'INSTRUCTOR' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Spesialisasi Mengajar</label>
                  <input
                    type="text"
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
                    placeholder="Contoh: Web Developer & Database Expert"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">Nomor Telepon / WA <span className="text-slate-400 font-normal">(Opsional)</span></label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
                  placeholder="081234567890"
                />
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2.5">
                <button type="button" onClick={handleCloseModal} className="px-4 py-2 text-xs font-bold text-slate-500">Batal</button>
                <button type="submit" disabled={saving} className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-black shadow-md disabled:opacity-60">
                  {saving ? 'Menyimpan...' : modalMode === 'create' ? 'Buat Pengguna' : 'Simpan Perubahan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 2: RESET PASSWORD (Admin Instant Control) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {isResetPasswordOpen && resetTargetUser && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
                <Key className="w-5 h-5 text-amber-500" /> Reset Password Pengguna
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Atur password baru langsung untuk <strong>{resetTargetUser.name}</strong> ({resetTargetUser.email}).
              </p>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">Password Baru:</label>
                  <button
                    type="button"
                    onClick={handleGenerateRandomPassword}
                    className="text-[11px] font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
                  >
                    <Sparkles className="w-3 h-3" /> Acak Password
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Masukkan password baru minimal 6 karakter..."
                    className="w-full pl-4 pr-10 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
                  />
                  {newPassword && (
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(newPassword);
                        setCopiedPassword(true);
                        setTimeout(() => setCopiedPassword(false), 2000);
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                      title="Salin password"
                    >
                      {copiedPassword ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6 pt-0 flex justify-end gap-2.5">
              <button onClick={() => setIsResetPasswordOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-500">Batal</button>
              <button
                onClick={handleConfirmResetPassword}
                disabled={!newPassword || newPassword.length < 6 || resettingPassword}
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-black shadow-md disabled:opacity-60"
              >
                {resettingPassword ? 'Mereset...' : 'Terapkan Password'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 3: BULK ROLE UPDATE ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {isBulkRoleModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-md overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-base font-black text-slate-800 dark:text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-600" /> Ubah Role {selectedIds.length} Pengguna
              </h2>
              <p className="text-xs text-slate-500 mt-1">Pilih role baru untuk seluruh akun yang telah dipilih.</p>
            </div>
            <div className="p-6 space-y-4">
              <select
                value={bulkTargetRole}
                onChange={(e) => setBulkTargetRole(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-bold text-slate-800 dark:text-white focus:outline-none"
              >
                <option value="STUDENT">🎓 STUDENT (Siswa / Mahasiswa)</option>
                <option value="INSTRUCTOR">👨‍🏫 INSTRUCTOR (Guru / Dosen)</option>
                <option value="ADMIN">🛡️ ADMIN (Administrator)</option>
              </select>
            </div>
            <div className="p-6 pt-0 flex justify-end gap-2.5">
              <button onClick={() => setIsBulkRoleModalOpen(false)} className="px-4 py-2 text-xs font-bold text-slate-500">Batal</button>
              <button
                onClick={handleConfirmBulkRole}
                disabled={bulkLoading}
                className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-black shadow-md disabled:opacity-60"
              >
                Terapkan Role
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL 4: USER DETAILS ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {isDetailModalOpen && detailUser && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-100 dark:border-slate-800 animate-scaleIn">
            <div className="p-6 pb-4 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-950/40">
              <div className="flex items-center gap-3">
                {detailUser.profilePicture ? (
                  <img
                    src={detailUser.profilePicture}
                    alt={detailUser.name}
                    className="w-12 h-12 rounded-2xl object-cover shrink-0 shadow-md border border-slate-200 dark:border-slate-800"
                  />
                ) : (
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${getAvatarGradient(detailUser.name)} text-white font-black text-base flex items-center justify-center uppercase shadow-md`}>
                    {detailUser.name?.slice(0, 2) || 'US'}
                  </div>
                )}
                <div>
                  <h2 className="text-base font-black text-slate-800 dark:text-white">{detailUser.name}</h2>
                  <p className="text-xs text-slate-400">{detailUser.email}</p>
                </div>
              </div>
              <button onClick={() => setIsDetailModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-2 rounded-xl">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Role Otorisasi</div>
                  <div className="font-black text-slate-800 dark:text-white mt-0.5">{detailUser.role}</div>
                </div>
                <div className="bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Status Akun</div>
                  <div className="font-black text-emerald-600 dark:text-emerald-400 mt-0.5">
                    {detailUser.isVerified ? '✅ Terverifikasi' : '⏳ Belum Verifikasi'}
                  </div>
                </div>
                <div className="bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Telepon / Kontak</div>
                  <div className="font-black text-slate-800 dark:text-white mt-0.5">{detailUser.phone || '-'}</div>
                </div>
                <div className="bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Tanggal Terdaftar</div>
                  <div className="font-black text-slate-800 dark:text-white mt-0.5">
                    {detailUser.createdAt ? new Date(detailUser.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) : '-'}
                  </div>
                </div>
              </div>

              {detailUser.specialty && (
                <div className="bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
                  <div className="text-slate-400 font-bold uppercase text-[10px] mb-1">Spesialisasi</div>
                  <div className="font-bold text-slate-800 dark:text-white">{detailUser.specialty}</div>
                </div>
              )}

              {detailUser.bio && (
                <div className="bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
                  <div className="text-slate-400 font-bold uppercase text-[10px] mb-1">Biografi</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{detailUser.bio}</p>
                </div>
              )}

              {detailUser.modules && detailUser.modules.length > 0 && (
                <div className="bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
                  <div className="text-slate-400 font-bold uppercase text-[10px] mb-2">Modul yang Dikelola ({detailUser.modules.length})</div>
                  <div className="space-y-1.5">
                    {detailUser.modules.map((m: any) => (
                      <div key={m.id} className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                        <span className="truncate">{m.title}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-bold">{m.category}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {detailUser.enrollments && detailUser.enrollments.length > 0 && (
                <div className="bg-slate-50 dark:bg-[#0d101d] p-3 rounded-2xl border border-slate-100 dark:border-slate-800 text-xs">
                  <div className="text-slate-400 font-bold uppercase text-[10px] mb-2">Kursus Diikuti ({detailUser.enrollments.length})</div>
                  <div className="space-y-1.5">
                    {detailUser.enrollments.map((enr: any) => (
                      <div key={enr.id} className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                        <span className="truncate">{enr.module?.title || 'Modul Kursus'}</span>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                          enr.status === 'APPROVED' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>{enr.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 pt-0 flex justify-between items-center">
              {detailUser.id !== currentUser?.id ? (
                <button
                  onClick={() => handleImpersonate(detailUser)}
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors"
                >
                  <LogIn className="w-3.5 h-3.5" /> Masuk Sebagai Akun Ini
                </button>
              ) : <div />}
              <button
                onClick={() => setIsDetailModalOpen(false)}
                className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs hover:bg-slate-200 transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
