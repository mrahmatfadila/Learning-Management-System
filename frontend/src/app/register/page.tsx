'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight, Zap, CheckCircle, Check, GraduationCap } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '', role: 'STUDENT', specialty: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    if (form.password !== form.confirmPassword) { setError('Password dan konfirmasi tidak sama!'); setIsLoading(false); return; }
    if (form.password.length < 6) { setError('Password minimal 6 karakter.'); setIsLoading(false); return; }
    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password, role: form.role, specialty: form.specialty }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || 'Registrasi gagal. Coba lagi.'); setIsLoading(false); return; }
      setSuccess(true);
      setTimeout(() => router.push(`/verify-email?email=${encodeURIComponent(form.email)}`), 2500);
    } catch {
      setError('Tidak dapat terhubung ke server.');
      setIsLoading(false);
    }
  };

  const passwordStrength = () => {
    const p = form.password;
    if (!p) return null;
    if (p.length < 6) return { level: 1, label: 'Lemah', bar: 'bg-red-400', text: 'text-red-500' };
    if (p.length < 10) return { level: 2, label: 'Sedang', bar: 'bg-amber-400', text: 'text-amber-500' };
    return { level: 3, label: 'Kuat', bar: 'bg-emerald-500', text: 'text-emerald-600' };
  };
  const strength = passwordStrength();

  const inputCls = (name: string) =>
    `relative flex items-center rounded-2xl border-2 transition-all duration-200 ${
      focused === name
        ? 'border-violet-400 bg-violet-50/80 shadow-[0_0_0_4px_rgba(139,92,246,0.1)]'
        : 'border-slate-200/80 bg-slate-50/80 hover:border-slate-300'
    }`;

  const iconCls = (name: string) =>
    `absolute left-4 w-4 h-4 transition-colors duration-200 ${focused === name ? 'text-violet-500' : 'text-slate-400'}`;

  return (
    <div className="min-h-screen bg-[#F5F0FF] flex items-center justify-center p-4 relative overflow-hidden">

      {/* ── Background decoration ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-violet-200/60 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-200/50 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-100/80 rounded-full blur-[80px]" />
        <div className="absolute top-20 left-[15%] w-14 h-14 bg-violet-400/20 rounded-2xl rotate-12 blur-sm" />
        <div className="absolute bottom-28 right-[12%] w-10 h-10 bg-indigo-400/25 rounded-xl rotate-[-15deg] blur-sm" />
        <div className="absolute top-1/3 right-[8%] w-8 h-8 bg-purple-400/30 rounded-lg rotate-45 blur-[2px]" />
        <div className="absolute bottom-1/3 left-[10%] w-12 h-12 bg-violet-300/25 rounded-xl rotate-[-20deg] blur-sm" />
        <div className="absolute inset-0 opacity-[0.3]"
          style={{ backgroundImage: 'radial-gradient(circle, #c4b5fd 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* ── Card ── */}
      <div className="relative w-full max-w-[460px]">

        <div className="absolute -inset-1 bg-gradient-to-br from-violet-400/30 via-purple-300/20 to-indigo-400/30 rounded-3xl blur-xl" />

        <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-violet-200/50 border border-white/60 overflow-hidden">

          {/* top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500" />

          <div className="p-8 pt-7">

            {/* Logo */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-300/50">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg leading-none tracking-tight">
                  DevGrow<span className="text-violet-500">.</span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">Learning Platform</div>
              </div>
            </div>

            {/* Success state */}
            {success ? (
              <div className="text-center py-10">
                <div className="relative w-20 h-20 mx-auto mb-5">
                  <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-30" />
                  <div className="relative w-20 h-20 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-emerald-500" />
                  </div>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Akun berhasil dibuat! 🎉</h2>
                <p className="text-slate-500 text-sm">Mengalihkan ke halaman login...</p>
                <div className="mt-5 w-40 h-1.5 bg-slate-100 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full"
                    style={{ animation: 'slideIn 2.5s linear forwards' }} />
                </div>
                <style>{`@keyframes slideIn { from { width: 0% } to { width: 100% } }`}</style>
              </div>
            ) : (
              <>
                {/* Heading */}
                <div className="mb-6">
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Buat akun baru ✨</h1>
                  <p className="text-slate-500 text-sm">Gratis selamanya. Mulai belajar dalam 1 menit.</p>
                </div>

                {/* Error */}
                {error && (
                  <div className="mb-4 flex items-center gap-2.5 px-4 py-3 bg-red-50 border border-red-200 rounded-2xl">
                    <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                      <span className="text-white text-[10px] font-black">!</span>
                    </div>
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-3.5">

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Nama Lengkap</label>
                    <div className={inputCls('name')}>
                      <svg className={iconCls('name')} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                      </svg>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                        placeholder="Nama lengkap kamu" required
                        className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none" />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                    <div className={inputCls('email')}>
                      <svg className={iconCls('email')} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                        placeholder="nama@email.com" required
                        className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none" />
                    </div>
                  </div>

                  {/* Role */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Daftar Sebagai</label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {[
                        { value: 'STUDENT', label: 'Student', desc: 'Saya ingin belajar', icon: '🎓' },
                        { value: 'INSTRUCTOR', label: 'Instructor', desc: 'Saya ingin mengajar', icon: '👨‍💻' },
                      ].map((r) => (
                        <button key={r.value} type="button" onClick={() => setForm({ ...form, role: r.value })}
                          className={`flex flex-col items-start p-3.5 rounded-2xl border-2 transition-all duration-200 text-left ${
                            form.role === r.value
                              ? 'border-violet-400 bg-violet-50 shadow-[0_0_0_4px_rgba(139,92,246,0.1)]'
                              : 'border-slate-200/80 bg-slate-50/80 hover:border-slate-300'
                          }`}>
                          <div className="flex items-center justify-between w-full mb-2">
                            <span className="text-xl">{r.icon}</span>
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all ${
                              form.role === r.value ? 'border-violet-500 bg-violet-500' : 'border-slate-300'
                            }`}>
                              {form.role === r.value && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                            </div>
                          </div>
                          <div className={`text-sm font-bold leading-none mb-0.5 ${form.role === r.value ? 'text-violet-700' : 'text-slate-700'}`}>{r.label}</div>
                          <div className="text-slate-400 text-xs">{r.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Specialty (Only for Instructors) */}
                  {form.role === 'INSTRUCTOR' && (
                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                      <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Bidang Keahlian <span className="text-[10px] lowercase normal-case font-medium text-slate-400 ml-1">(Opsional)</span></label>
                      <div className={inputCls('specialty')}>
                        <GraduationCap className={iconCls('specialty')} />
                        <input type="text" name="specialty" value={form.specialty} onChange={handleChange}
                          onFocus={() => setFocused('specialty')} onBlur={() => setFocused(null)}
                          placeholder="Contoh: Programming, Desain, dll" 
                          className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none" />
                      </div>
                    </div>
                  )}

                  {/* Password */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Password</label>
                    <div className={inputCls('password')}>
                      <svg className={iconCls('password')} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <input type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange}
                        onFocus={() => setFocused('password')} onBlur={() => setFocused(null)}
                        placeholder="Minimal 6 karakter" required
                        className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 pl-11 pr-12 py-3.5 text-sm font-medium focus:outline-none" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors">
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {strength && (
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex gap-1 flex-1">
                          {[1, 2, 3].map((l) => (
                            <div key={l} className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${l <= strength.level ? strength.bar : 'bg-slate-200'}`} />
                          ))}
                        </div>
                        <span className={`text-xs font-bold ${strength.text}`}>{strength.label}</span>
                      </div>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Konfirmasi Password</label>
                    <div className={`relative flex items-center rounded-2xl border-2 transition-all duration-200 ${
                      form.confirmPassword && form.password !== form.confirmPassword
                        ? 'border-red-400 bg-red-50/80'
                        : focused === 'confirm'
                        ? 'border-violet-400 bg-violet-50/80 shadow-[0_0_0_4px_rgba(139,92,246,0.1)]'
                        : 'border-slate-200/80 bg-slate-50/80 hover:border-slate-300'
                    }`}>
                      <svg className={`absolute left-4 w-4 h-4 transition-colors duration-200 ${
                        form.confirmPassword && form.password !== form.confirmPassword ? 'text-red-400' : focused === 'confirm' ? 'text-violet-500' : 'text-slate-400'
                      }`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      <input type={showConfirm ? 'text' : 'password'} name="confirmPassword" value={form.confirmPassword} onChange={handleChange}
                        onFocus={() => setFocused('confirm')} onBlur={() => setFocused(null)}
                        placeholder="Ulangi password" required
                        className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 pl-11 pr-12 py-3.5 text-sm font-medium focus:outline-none" />
                      <button type="button" onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors">
                        {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    {form.confirmPassword && form.password !== form.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1.5 ml-1 font-medium">Password tidak cocok</p>
                    )}
                    {form.confirmPassword && form.password === form.confirmPassword && form.confirmPassword.length > 0 && (
                      <p className="text-emerald-600 text-xs mt-1.5 ml-1 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3" /> Password cocok
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <button type="submit" disabled={isLoading}
                    className="w-full mt-1 relative overflow-hidden bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-violet-300/60 hover:shadow-violet-400/70 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed text-sm group">
                    <span className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      {isLoading ? (
                        <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Membuat akun...</>
                      ) : (
                        <>Buat Akun Sekarang <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                      )}
                    </span>
                  </button>
                </form>

                {/* Footer */}
                <p className="text-slate-500 text-sm text-center mt-6">
                  Sudah punya akun?{' '}
                  <Link href="/login" className="text-violet-600 hover:text-violet-700 font-bold transition-colors underline underline-offset-2 decoration-violet-300">
                    Masuk di sini
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>

        {/* bottom badge */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {['Gratis Selamanya', 'Data Terenkripsi', 'Tanpa Kartu Kredit'].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
              <div className="w-1.5 h-1.5 bg-violet-400 rounded-full" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
