'use client';

import React, { useState } from 'react';
import { Shield, CheckCircle, Upload } from 'lucide-react';

export default function ProfileSettings({ user, setUser }: { user: any, setUser: (u: any) => void }) {
  const [loading, setLoading] = useState(false);
  const [saveMsg, setSaveMsg] = useState<{type: 'ok'|'err'; text: string}|null>(null);
  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    bio: user?.bio || '',
    password: '',
    profilePicture: user?.profilePicture || '',
    emailNotifications: user?.emailNotifications ?? true,
    darkMode: user?.darkMode ?? false,
  });

  const fileInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      if (!user?.id) return;
      try {
        const res = await fetch(`http://localhost:5000/api/users/${user.id}`);
        if (res.ok) {
          const data = await res.json();
          setForm({
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || '',
            bio: data.bio || '',
            password: '',
            profilePicture: data.profilePicture || '',
            emailNotifications: data.emailNotifications ?? true,
            darkMode: data.darkMode ?? false,
          });
        }
      } catch (err) {
        console.error('Error fetching user profile:', err);
      }
    };
    fetchUser();
  }, [user?.id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm({ ...form, [name]: checked });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert('Ukuran file maksimal 2MB');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        setForm({ ...form, profilePicture: event.target.result.toString() });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    setSaveMsg(null);
    try {
      const payload = { ...form };
      const res = await fetch(`http://localhost:5000/api/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        // Update local state and localStorage
        const updatedUser = { ...user, ...data.user };
        setUser(updatedUser);
        localStorage.setItem('lms_user', JSON.stringify(updatedUser));
        setForm({ ...form, password: '' });
        setSaveMsg({ type: 'ok', text: 'Profil berhasil diperbarui!' });
        setTimeout(() => setSaveMsg(null), 3000);
      } else {
        const error = await res.json();
        setSaveMsg({ type: 'err', text: error.message || 'Gagal menyimpan' });
      }
    } catch (error) {
      setSaveMsg({ type: 'err', text: 'Terjadi kesalahan jaringan.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-slate-100 pb-8 mb-8">
          <div className="w-24 h-24 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-4xl font-black shadow-inner border-4 border-white outline outline-1 outline-slate-200 overflow-hidden shrink-0">
            {form.profilePicture ? (
              <img src={form.profilePicture} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              user?.name?.charAt(0)?.toUpperCase() || 'U'
            )}
          </div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold text-slate-800 mb-1">{user?.name || 'User Profile'}</h2>
            <p className="text-slate-500 font-medium">{user?.email || 'user@example.com'}</p>
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-black uppercase tracking-wider rounded-lg border border-indigo-100">
              <Shield className="w-3.5 h-3.5" /> {user?.role || 'STUDENT'}
            </div>
          </div>
          <div className="sm:ml-auto">
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
            />
            <button onClick={() => fileInputRef.current?.click()} className="px-4 py-2 bg-white border border-slate-200 text-slate-600 font-bold text-xs rounded-xl hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2">
              <Upload className="w-3.5 h-3.5" /> Upload Photo
            </button>
            {form.profilePicture && (
              <button onClick={() => setForm({ ...form, profilePicture: '' })} className="mt-2 text-xs text-red-500 font-bold hover:underline w-full text-center">
                Hapus Foto
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-800">Personal Information</h3>
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
              <input name="email" value={form.email} onChange={handleChange} type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
              <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+62 812 3456 7890" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm" />
            </div>
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">Bio / Description</label>
              <textarea name="bio" value={form.bio} onChange={handleChange} rows={3} placeholder="Tell us about yourself..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm"></textarea>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-extrabold text-slate-800">Security Settings</h3>
            <div>
              <label className="block text-[11px] font-black text-slate-500 uppercase tracking-wider mb-2">New Password</label>
              <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Leave blank to keep current" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all shadow-sm" />
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-extrabold text-slate-800 mb-4">Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="text-sm font-semibold text-slate-700">Email Notifications</span>
                  <input name="emailNotifications" checked={form.emailNotifications} onChange={handleChange} type="checkbox" className="w-5 h-5 accent-indigo-600 rounded focus:ring-indigo-500" />
                </label>
                <label className="flex items-center justify-between p-3 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <span className="text-sm font-semibold text-slate-700">Dark Mode</span>
                  <input name="darkMode" checked={form.darkMode} onChange={handleChange} type="checkbox" className="w-5 h-5 accent-indigo-600 rounded focus:ring-indigo-500" />
                </label>
              </div>
            </div>
          </div>
        </div>

        {saveMsg && (
          <div className={`mt-4 px-4 py-3 rounded-xl text-sm font-bold flex items-center gap-2 ${
            saveMsg.type === 'ok' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            <CheckCircle className="w-4 h-4 shrink-0" />
            {saveMsg.text}
          </div>
        )}
        <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col-reverse sm:flex-row justify-end gap-3">
          <button onClick={() => window.location.reload()} className="px-5 py-2.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors">Cancel</button>
          <button onClick={handleSubmit} disabled={loading} className="px-6 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 shadow-md shadow-indigo-500/20 rounded-xl transition-colors flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4" /> {loading ? 'Menyimpan...' : 'Save Changes'}
          </button>
        </div>
      </div>
    </div>
  );
}
