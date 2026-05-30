'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Mail, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function VerifyEmailPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailParam = searchParams.get('email') || '';
  
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!emailParam) {
      router.push('/login');
    }
  }, [emailParam, router]);

  const handleChange = (index: number, value: string) => {
    if (!/^[0-9]*$/.test(value)) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    setError('');

    // Auto focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6).replace(/[^0-9]/g, '');
    if (pastedData) {
      const newCode = [...code];
      for (let i = 0; i < pastedData.length; i++) {
        newCode[i] = pastedData[i];
      }
      setCode(newCode);
      if (pastedData.length < 6) {
        inputRefs.current[pastedData.length]?.focus();
      } else {
        inputRefs.current[5]?.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = code.join('');
    
    if (verificationCode.length < 6) {
      setError('Harap masukkan 6 digit kode verifikasi.');
      return;
    }

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/verify-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailParam, code: verificationCode }),
      });
      const data = await res.json();
      
      if (!res.ok) { 
        setError(data.message || 'Verifikasi gagal. Kode mungkin salah atau kadaluarsa.'); 
        setIsLoading(false); 
        return; 
      }
      
      setSuccess(true);
      if (data.user) {
        localStorage.setItem('lms_user', JSON.stringify(data.user));
        localStorage.setItem('lms_token', data.token || '');
      }
      setTimeout(() => router.push('/dashboard'), 2000);
    } catch {
      setError('Tidak dapat terhubung ke server.');
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    setError('');
    setMessage('');
    
    try {
      const res = await fetch('http://localhost:5000/api/auth/resend-verification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: emailParam }),
      });
      const data = await res.json();
      
      if (!res.ok) { 
        setError(data.message || 'Gagal mengirim ulang kode.'); 
        setIsResending(false); 
        return; 
      }
      
      setMessage('Kode verifikasi baru telah dikirim ke email Anda.');
      setCode(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    } catch {
      setError('Tidak dapat terhubung ke server.');
    } finally {
      setIsResending(false);
    }
  };

  if (!emailParam) return null;

  return (
    <div className="min-h-screen bg-[#F0F4FF] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-200/60 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-violet-200/50 rounded-full blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.35]"
          style={{ backgroundImage: 'radial-gradient(circle, #a5b4fc 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      {/* Card */}
      <div className="relative w-full max-w-[440px]">
        <div className="absolute -inset-1 bg-gradient-to-br from-indigo-400/30 via-violet-300/20 to-blue-400/30 rounded-3xl blur-xl" />
        
        <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-indigo-200/50 border border-white/60 overflow-hidden">
          <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500" />

          <div className="p-8 pt-10">
            {success ? (
              <div className="text-center py-6">
                <div className="relative w-20 h-20 mx-auto mb-5">
                  <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-30" />
                  <div className="relative w-20 h-20 bg-emerald-50 border-2 border-emerald-200 rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-10 h-10 text-emerald-500" />
                  </div>
                </div>
                <h2 className="text-2xl font-black text-slate-900 mb-2">Email Terverifikasi!</h2>
                <p className="text-slate-500 text-sm">Akun Anda sudah aktif. Mengalihkan ke halaman login...</p>
              </div>
            ) : (
              <>
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center shadow-inner border border-indigo-100">
                    <Mail className="w-8 h-8 text-indigo-500" />
                  </div>
                </div>

                <div className="text-center mb-8">
                  <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-2">Periksa Email Anda</h1>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Kami telah mengirimkan 6 digit kode verifikasi ke <br/>
                    <span className="font-bold text-slate-700">{emailParam}</span>
                  </p>
                </div>

                {error && (
                  <div className="mb-5 p-3 bg-red-50 border border-red-200 rounded-xl text-center">
                    <p className="text-red-600 text-sm font-medium">{error}</p>
                  </div>
                )}

                {message && (
                  <div className="mb-5 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
                    <p className="text-emerald-600 text-sm font-medium">{message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex justify-between gap-2" onPaste={handlePaste}>
                    {code.map((digit, idx) => (
                      <input
                        key={idx}
                        ref={(el) => { inputRefs.current[idx] = el; }}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        className={`w-12 h-14 text-center text-xl font-black rounded-xl border-2 transition-all duration-200 focus:outline-none ${
                          digit 
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-700 shadow-[0_0_0_4px_rgba(99,102,241,0.1)]' 
                            : 'border-slate-200 bg-slate-50 text-slate-900 hover:border-slate-300 focus:border-indigo-400 focus:bg-white'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    type="submit" disabled={isLoading || code.join('').length < 6}
                    className="w-full relative overflow-hidden bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-indigo-300/60 hover:shadow-indigo-400/70 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed text-sm group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative flex items-center gap-2">
                      {isLoading ? (
                        <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Memverifikasi...</>
                      ) : (
                        <>Verifikasi Kode <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></>
                      )}
                    </span>
                  </button>
                </form>

                <div className="mt-8 text-center flex flex-col items-center gap-3">
                  <p className="text-slate-500 text-sm">
                    Belum menerima email?
                  </p>
                  <button 
                    onClick={handleResend} 
                    disabled={isResending}
                    className="flex items-center gap-1.5 text-indigo-600 font-bold hover:text-indigo-700 transition-colors text-sm disabled:opacity-50"
                  >
                    <RefreshCw className={`w-4 h-4 ${isResending ? 'animate-spin' : ''}`} />
                    Kirim Ulang Kode
                  </button>
                  
                  <Link href="/login" className="text-slate-400 hover:text-slate-600 text-xs font-medium mt-4 underline underline-offset-2">
                    Kembali ke Login
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
