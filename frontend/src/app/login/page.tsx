'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, ArrowRight, Zap } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ email: '', password: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) { 
        setError(data.message || 'Login gagal. Coba lagi.');
        if (data.isVerified === false && data.email) {
          setTimeout(() => router.push(`/verify-email?email=${encodeURIComponent(data.email)}`), 1500);
        }
        setIsLoading(false); 
        return; 
      }
      localStorage.setItem('lms_token', data.token);
      localStorage.setItem('lms_user', JSON.stringify(data.user));
      document.cookie = `lms_token=${data.token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
      router.push('/dashboard');
    } catch {
      setError('Tidak dapat terhubung ke server.');
      setIsLoading(false);
    }
  };

  const demoLogin = async (role: string) => {
    const demos: Record<string, { email: string; password: string }> = {
      student: { email: 'student@lms.test', password: 'password123' },
      instructor: { email: 'bagus@lms.test', password: 'password123' },
      admin: { email: 'admin@lms.test', password: 'admin123' },
    };
    const creds = demos[role] || demos.student;
    setForm(creds);
    setError('');
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(creds),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.message || 'Demo login gagal.'); setIsLoading(false); return; }
      localStorage.setItem('lms_token', data.token);
      localStorage.setItem('lms_user', JSON.stringify(data.user));
      document.cookie = `lms_token=${data.token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
      router.push('/dashboard');
    } catch {
      setError('Tidak dapat terhubung ke server.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex items-center justify-center p-4 relative overflow-hidden">

      {/* ── Background decoration ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* large blobs */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-200/60 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-violet-200/50 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-100/80 rounded-full blur-[80px]" />
        {/* floating shapes */}
        <div className="absolute top-16 right-[15%] w-16 h-16 bg-indigo-400/20 rounded-2xl rotate-12 blur-sm" />
        <div className="absolute bottom-24 left-[12%] w-12 h-12 bg-violet-400/25 rounded-xl rotate-[-15deg] blur-sm" />
        <div className="absolute top-1/3 left-[8%] w-8 h-8 bg-blue-400/30 rounded-lg rotate-45 blur-[2px]" />
        <div className="absolute bottom-1/3 right-[10%] w-10 h-10 bg-indigo-300/30 rounded-xl rotate-[-20deg] blur-sm" />
        {/* dot grid */}
        <div className="absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(circle, #a5b4fc 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* ── Card ── */}
      <div className="relative w-full max-w-[440px]">

        {/* glow behind card */}
        <div className="absolute -inset-1 bg-gradient-to-br from-indigo-400/30 via-violet-300/20 to-blue-400/30 rounded-3xl blur-xl" />

        <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-indigo-200/50 border border-white/60 overflow-hidden">

          {/* top accent bar */}
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500" />

          <div className="p-8 pt-7">

            {/* Logo + brand */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-300/50">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div>
                <div className="font-black text-slate-900 text-lg leading-none tracking-tight">
                  DevGrow<span className="text-indigo-500">.</span>
                </div>
                <div className="text-[10px] text-slate-400 font-medium tracking-widest uppercase mt-0.5">Learning Platform</div>
              </div>
            </div>

            {/* Heading */}
            <div className="mb-7">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Masuk ke akun</h1>
              <p className="text-slate-500 text-sm">Lanjutkan perjalanan belajarmu hari ini.</p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-5 flex items-center gap-2.5 px-4 py-3 bg-red-50 border border-red-200 rounded-2xl">
                <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                  <span className="text-white text-[10px] font-black">!</span>
                </div>
                <p className="text-red-600 text-sm font-medium">{error}</p>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">

              {/* Email */}
              <div className="group">
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Email</label>
                <div className={`relative flex items-center rounded-2xl border-2 transition-all duration-200 ${
                  focused === 'email'
                    ? 'border-indigo-400 bg-indigo-50/80 shadow-[0_0_0_4px_rgba(99,102,241,0.1)]'
                    : 'border-slate-200/80 bg-slate-50/80 hover:border-slate-300'
                }`}>
                  <svg className={`absolute left-4 w-4 h-4 transition-colors duration-200 ${focused === 'email' ? 'text-indigo-500' : 'text-slate-400'}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                    placeholder="nama@email.com" required
                    className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Password</label>
                <div className={`relative flex items-center rounded-2xl border-2 transition-all duration-200 ${
                  focused === 'password'
                    ? 'border-indigo-400 bg-indigo-50/80 shadow-[0_0_0_4px_rgba(99,102,241,0.1)]'
                    : 'border-slate-200/80 bg-slate-50/80 hover:border-slate-300'
                }`}>
                  <svg className={`absolute left-4 w-4 h-4 transition-colors duration-200 ${focused === 'password' ? 'text-indigo-500' : 'text-slate-400'}`}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                  <input
                    type={showPassword ? 'text' : 'password'} name="password" value={form.password} onChange={handleChange}
                    onFocus={() => setFocused('password')} onBlur={() => setFocused(null)}
                    placeholder="Masukkan password" required
                    className="w-full bg-transparent text-slate-900 placeholder:text-slate-400 pl-11 pr-12 py-3.5 text-sm font-medium focus:outline-none"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-slate-400 hover:text-slate-600 transition-colors">
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit" disabled={isLoading}
                className="w-full mt-1 relative overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-300/60 hover:shadow-indigo-400/70 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed text-sm group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  {isLoading ? (
                    <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Memverifikasi...</>
                  ) : (
                    <>Masuk ke Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                  )}
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-slate-400 text-[11px] font-semibold tracking-wider uppercase">Demo Login</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            {/* Demo buttons */}
            <div className="grid grid-cols-3 gap-2">
              {[
                { role: 'student', label: '🎓 Student', cls: 'bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100 hover:border-blue-300' },
                { role: 'instructor', label: '👨‍💻 Instructor', cls: 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100 hover:border-emerald-300' },
                { role: 'admin', label: '⚙️ Admin', cls: 'bg-violet-50 border-violet-200 text-violet-700 hover:bg-violet-100 hover:border-violet-300' },
              ].map(({ role, label, cls }) => (
                <button key={role} type="button" onClick={() => demoLogin(role)}
                  className={`py-2.5 rounded-xl border text-[11px] font-bold transition-all duration-200 hover:-translate-y-0.5 ${cls}`}>
                  {label}
                </button>
              ))}
            </div>

            {/* Footer */}
            <p className="text-slate-500 text-sm text-center mt-6">
              Belum punya akun?{' '}
              <Link href="/register" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors underline underline-offset-2 decoration-indigo-300">
                Daftar gratis
              </Link>
            </p>
          </div>
        </div>

        {/* bottom badge */}
        <div className="flex items-center justify-center gap-4 mt-6">
          {['1,200+ Pelajar', '50+ Modul', 'Gratis Daftar'].map((t) => (
            <div key={t} className="flex items-center gap-1.5 text-slate-500 text-xs font-medium">
              <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
