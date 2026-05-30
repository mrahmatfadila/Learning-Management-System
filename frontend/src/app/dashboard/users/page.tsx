'use client';
import { useEffect, useState } from 'react';
import { Plus, Search, Edit2, Trash2, Mail, Shield, User, X, CheckCircle, GraduationCap } from 'lucide-react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function UsersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleFilter = searchParams.get('role');
  
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'STUDENT',
    specialty: ''
  });
  const [formError, setFormError] = useState('');

  // Specialty Modal State
  const [isSpecialtyModalOpen, setIsSpecialtyModalOpen] = useState(false);
  const [specialtyFormData, setSpecialtyFormData] = useState({ specialty: '' });
  const [specialtyFormError, setSpecialtyFormError] = useState('');

  const fetchUsers = async (role?: string | null) => {
    try {
      setLoading(true);
      const url = role ? `http://localhost:5000/api/users?role=${role}` : 'http://localhost:5000/api/users';
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error('Failed to fetch users', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(roleFilter);
  }, [roleFilter]);

  const handleOpenModal = (mode: 'create' | 'edit', user?: any) => {
    setModalMode(mode);
    setFormError('');
    if (mode === 'edit' && user) {
      setSelectedUser(user);
      setFormData({
        name: user?.name || '',
        email: user?.email || '',
        password: '',
        role: user?.role || 'STUDENT',
        specialty: user?.specialty || ''
      });
    } else {
      setSelectedUser(null);
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'STUDENT',
        specialty: ''
      });
    }
    setIsModalOpen(true);
  };

  const handleOpenSpecialtyModal = (user: any) => {
    setSelectedUser(user);
    setSpecialtyFormData({ specialty: user.specialty || '' });
    setSpecialtyFormError('');
    setIsSpecialtyModalOpen(true);
  };

  const handleCloseSpecialtyModal = () => setIsSpecialtyModalOpen(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    try {
      console.log('Submitting form for mode:', modalMode);
      console.log('Selected user ID:', selectedUser?.id);
      
      const url = modalMode === 'create' 
        ? 'http://localhost:5000/api/users'
        : `http://localhost:5000/api/users/${selectedUser.id}`;
      
      const method = modalMode === 'create' ? 'POST' : 'PUT';
      
      const payload = { ...formData };
      if (modalMode === 'edit' && !payload.password) {
        delete (payload as any).password;
      }
      
      console.log('Payload being sent:', payload);

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();
      console.log('Response from server:', data);

      if (!res.ok) {
        throw new Error(data.message || 'Terjadi kesalahan');
      }

      handleCloseModal();
      fetchUsers(roleFilter);
    } catch (err: any) {
      console.error('Submit error:', err);
      setFormError(err.message);
    }
  };

  const handleSpecialtySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSpecialtyFormError('');
    try {
      const res = await fetch(`http://localhost:5000/api/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ specialty: specialtyFormData.specialty })
      });
      if (res.ok) {
        handleCloseSpecialtyModal();
        fetchUsers(roleFilter);
      } else {
        const data = await res.json();
        throw new Error(data.message || 'Gagal mengubah spesialisasi');
      }
    } catch (err: any) {
      setSpecialtyFormError(err.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) return;
    
    try {
      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        fetchUsers(roleFilter);
      } else {
        const data = await res.json();
        alert(data.message || 'Gagal menghapus pengguna');
      }
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase()) || 
    u.email.toLowerCase().includes(search.toLowerCase()) ||
    u.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleChangeRole = async (userToUpdate: any, newRole: string) => {
    if (!confirm(`Ubah role ${userToUpdate.name} menjadi ${newRole}?`)) return;
    try {
      const res = await fetch(`http://localhost:5000/api/users/${userToUpdate.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          name: userToUpdate.name, 
          email: userToUpdate.email, 
          role: newRole 
        })
      });
      if (res.ok) {
        fetchUsers(roleFilter);
      } else {
        const data = await res.json();
        alert(data.message || 'Gagal mengubah role');
      }
    } catch (err) {
      console.error('Error changing role:', err);
    }
  };

  const tab = searchParams.get('tab');

  if (tab === 'roles') {
    const roleStats = [
      { name: 'ADMIN', color: 'bg-purple-100 text-purple-700', icon: Shield, desc: 'Full access to all system settings, user management, and financial data.' },
      { name: 'INSTRUCTOR', color: 'bg-emerald-100 text-emerald-700', icon: User, desc: 'Can create courses, manage students, grade tasks, and host live sessions.' },
      { name: 'STUDENT', color: 'bg-blue-100 text-blue-700', icon: User, desc: 'Can enroll in courses, view lessons, submit tasks, and interact in community.' },
    ].map(role => ({
      ...role,
      count: users.filter(u => u.role === role.name).length
    }));

    return (
      <div className="p-6 md:p-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Roles & Permissions</h1>
            <p className="text-sm text-slate-500 mt-1">Sistem ini memiliki 3 level otorisasi utama berdasarkan database.</p>
          </div>
          <button onClick={() => router.push('/dashboard/users')} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 transition-colors shadow-sm">
            Kembali ke Daftar User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {roleStats.map((role) => (
            <div key={role.name} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${role.color} bg-opacity-50`}>
                  <role.icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-black text-slate-800">{role.count}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pengguna</div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 h-full flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${role.color}`}>{role.name}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {role.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <button onClick={() => router.push(`/dashboard/users?role=${role.name}`)} className="text-indigo-600 text-sm font-bold hover:text-indigo-700 flex items-center gap-1 transition-colors">
                    Lihat semua {role.name.toLowerCase()} <Plus className="w-4 h-4 rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-800">Assign Roles (Quick Edit)</h2>
              <p className="text-sm text-slate-500">Ubah hak akses pengguna secara langsung dari tabel ini.</p>
            </div>
            <div className="relative w-full max-w-xs">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Cari pengguna..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                  <th className="p-4">User</th>
                  <th className="p-4">Current Role</th>
                  <th className="p-4">Assign New Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center font-bold text-slate-700 shrink-0">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{user.name}</p>
                          <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                            <Mail className="w-3 h-3" /> {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                        user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' :
                        user.role === 'INSTRUCTOR' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      <select 
                        value={user.role}
                        onChange={(e) => handleChangeRole(user, e.target.value)}
                        className="px-3 py-1.5 bg-white border border-slate-300 text-slate-700 text-sm rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 shadow-sm cursor-pointer"
                      >
                        <option value="STUDENT">STUDENT</option>
                        <option value="INSTRUCTOR">INSTRUCTOR</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            {roleFilter ? `${roleFilter.charAt(0) + roleFilter.slice(1).toLowerCase()}s` : 'User Management'}
          </h1>
          <p className="text-sm text-slate-500 mt-1">Manage platform {roleFilter ? roleFilter.toLowerCase() + 's' : 'users, roles, and access'}.</p>
        </div>
        <button 
          onClick={() => handleOpenModal('create')}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <Plus className="w-4 h-4" /> Add New User
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="relative w-full max-w-sm">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search users..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
          <div className="text-sm text-slate-500 font-medium">
            Total: {filteredUsers.length} users
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500 font-bold">
                <th className="p-4">User</th>
                <th className="p-4">Role</th>
                <th className="p-4">Keahlian</th>
                <th className="p-4">Joined Date</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">Loading users...</td>
                </tr>
              ) : filteredUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">No users found.</td>
                </tr>
              ) : (
                filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200 flex items-center justify-center font-bold text-indigo-700 shrink-0">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-semibold text-slate-800 text-sm">{user.name}</p>
                          <div className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                            <Mail className="w-3 h-3" /> {user.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                        user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' :
                        user.role === 'INSTRUCTOR' ? 'bg-emerald-100 text-emerald-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {user.role === 'ADMIN' ? <Shield className="w-3 h-3" /> : user.role === 'INSTRUCTOR' ? <User className="w-3 h-3" /> : <User className="w-3 h-3" />}
                        {user.role}
                      </span>
                    </td>
                    <td className="p-4">
                      {user.role === 'INSTRUCTOR' ? (
                        user.specialty ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                            🎓 {user.specialty}
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 italic">Belum diatur</span>
                        )
                      ) : (
                        <span className="text-slate-300">-</span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-slate-600">
                      {new Date(user.createdAt).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {user.role === 'INSTRUCTOR' && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleOpenSpecialtyModal(user);
                              }}
                              className="p-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 hover:text-emerald-700 rounded-lg transition-colors shadow-sm"
                              title="Set Specialty"
                            >
                              <GraduationCap className="w-4 h-4" />
                            </button>
                        )}
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Edit clicked for user:', user);
                            handleOpenModal('edit', user);
                          }}
                          className="p-2 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700 rounded-lg transition-colors shadow-sm"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button 
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDelete(user.id);
                          }}
                          className="p-2 text-red-500 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded-lg transition-colors shadow-sm"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
            {/* Header */}
            <div className={`p-6 pb-5 border-b border-slate-100 flex items-start justify-between ${modalMode === 'edit' ? 'bg-slate-50/50' : ''}`}>
              <div className="flex items-center gap-4">
                {modalMode === 'edit' ? (
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200 flex items-center justify-center font-black text-indigo-700 text-2xl shadow-sm">
                    {formData.name.charAt(0).toUpperCase() || 'U'}
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-2">
                    <User className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <h2 className="text-xl font-extrabold text-slate-800">
                    {modalMode === 'create' ? 'Tambahkan User' : 'Edit Profil User'}
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-0.5">
                    {modalMode === 'create' ? 'Buat akun pengguna baru di sistem.' : `Perbarui data untuk ${formData.name}.`}
                  </p>
                </div>
              </div>
              <button onClick={handleCloseModal} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-xl transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6">
              {formError && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 flex items-start gap-3">
                  <div className="p-1 bg-red-100 rounded-lg text-red-600 mt-0.5 shrink-0"><X className="w-3 h-3" /></div>
                  <span className="font-medium leading-relaxed">{formError}</span>
                </div>
              )}
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nama Lengkap</label>
                  <div className="relative">
                    <User className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
                      placeholder="Contoh: Budi Santoso"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
                      placeholder="email@contoh.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center justify-between text-sm font-bold text-slate-700 mb-2">
                    Password 
                    {modalMode === 'edit' && <span className="text-xs text-slate-400 font-medium px-2 py-0.5 bg-slate-100 rounded-md">Opsional</span>}
                  </label>
                  <div className="relative">
                    <Shield className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="password" 
                      required={modalMode === 'create'}
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
                      placeholder={modalMode === 'edit' ? 'Biarkan kosong jika tidak diubah' : 'Buat password yang kuat'}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Role Akses</label>
                  <div className="relative">
                    <Shield className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                    <select 
                      value={formData.role}
                      onChange={(e) => setFormData({...formData, role: e.target.value})}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:bg-white transition-all text-slate-700 appearance-none cursor-pointer"
                    >
                      <option value="STUDENT">STUDENT (Siswa Umum)</option>
                      <option value="INSTRUCTOR">INSTRUCTOR (Pengajar)</option>
                      <option value="ADMIN">ADMIN (Super User)</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <Plus className="w-4 h-4 rotate-45" />
                    </div>
                  </div>
                </div>

                {formData.role === 'INSTRUCTOR' && (
                  <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Bidang Keahlian</label>
                    <div className="relative">
                      <GraduationCap className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        value={formData.specialty}
                        onChange={(e) => setFormData({...formData, specialty: e.target.value})}
                        className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:bg-white transition-all placeholder:text-slate-400"
                        placeholder="Contoh: Programming, Desain Grafis"
                      />
                    </div>
                    <p className="mt-2 text-xs text-slate-500 font-medium">Opsional. Dapat diatur nanti melalui tabel.</p>
                  </div>
                )}
              </div>
              
              <div className="mt-8 flex items-center justify-end gap-3 pt-5 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={handleCloseModal}
                  className="px-5 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200 flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  {modalMode === 'create' ? 'Buat Akun' : 'Simpan Perubahan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Specialty Modal */}
      {isSpecialtyModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">
            <div className="p-6 pb-5 border-b border-slate-100 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-slate-800">Bidang Keahlian</h2>
                  <p className="text-sm text-slate-500 font-medium mt-0.5">Atur mata pelajaran untuk instruktur {selectedUser.name}</p>
                </div>
              </div>
              <button onClick={handleCloseSpecialtyModal} className="text-slate-400 hover:text-slate-600 hover:bg-slate-100 p-2 rounded-xl transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleSpecialtySubmit} className="p-6">
              {specialtyFormError && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 flex items-start gap-3">
                  <div className="p-1 bg-red-100 rounded-lg text-red-600 mt-0.5 shrink-0"><X className="w-3 h-3" /></div>
                  <span className="font-medium leading-relaxed">{specialtyFormError}</span>
                </div>
              )}
              
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl mb-6">
                <p className="text-xs text-emerald-600 mb-3">Pilih dari daftar atau ketik bidang keahlian baru secara manual.</p>
                
                {/* List of default options */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Programming', 'Jaringan', 'IT Support', 'Database', 'Design', 'Mobile', 'Web', 'Skripsi'].map(spec => (
                    <button
                      key={spec}
                      type="button"
                      onClick={() => setSpecialtyFormData({ specialty: spec })}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors border ${
                        specialtyFormData.specialty === spec
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-400 hover:text-emerald-700'
                      }`}
                    >
                      {spec}
                    </button>
                  ))}
                </div>

                {/* Manual input field */}
                <div className="mt-2">
                  <label className="block text-xs font-bold text-emerald-800 mb-1">Keahlian (Custom)</label>
                  <input
                    type="text"
                    value={specialtyFormData.specialty}
                    onChange={(e) => setSpecialtyFormData({ specialty: e.target.value })}
                    placeholder="Ketik keahlian manual di sini..."
                    className="w-full px-4 py-2.5 bg-white border border-emerald-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>
              
              <div className="mt-8 flex items-center justify-end gap-3 pt-5 border-t border-slate-100">
                <button type="button" onClick={handleCloseSpecialtyModal} className="px-5 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">Batal</button>
                <button type="submit" className="px-6 py-2.5 bg-emerald-600 text-white text-sm font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-200 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Simpan Keahlian
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
