'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { BookOpen, CheckCircle, ChevronRight, ArrowRight, Sparkles, Users, Clock, Lock } from 'lucide-react';

const CATEGORY_GRADIENTS: Record<string, string> = {
  'Programming': 'from-blue-500 to-indigo-600',
  'Jaringan': 'from-emerald-500 to-teal-600',
  'IT Support': 'from-orange-500 to-amber-600',
  'Skripsi': 'from-purple-500 to-violet-600',
  'Database': 'from-cyan-500 to-blue-600',
  'Design': 'from-pink-500 to-rose-600',
  'Mobile': 'from-indigo-500 to-purple-600',
  'Web': 'from-violet-500 to-purple-600',
  'Lainnya': 'from-slate-500 to-slate-600',
};

export default function OnboardingPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('lms_user');
    if (!stored) { router.push('/login'); return; }
    const u = JSON.parse(stored);
    if (u.role?.toUpperCase() !== 'STUDENT') { router.push('/dashboard'); return; }
    setUser(u);

    const fetchModules = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/modules');
        if (res.ok) setModules(await res.json());
      } catch {}
      setLoading(false);
    };
    fetchModules();
  }, []);

  const toggleModule = (id: string) => {
    setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSubmit = async () => {
    if (selected.size === 0 || !user || submitting) return;
    setSubmitting(true);

    // Send enrollment requests for each selected module
    const promises = Array.from(selected).map(moduleId =>
      fetch('http://localhost:5000/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: user.id, moduleId })
      })
    );

    await Promise.allSettled(promises);
    setDone(true);
    setTimeout(() => router.push('/dashboard'), 3000);
  };

  const handleSkip = () => router.push('/dashboard');

  if (done) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-emerald-400/20 rounded-full animate-ping" />
            <div className="relative w-24 h-24 bg-emerald-500/10 border-2 border-emerald-400/50 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-3xl font-black text-white mb-3">Permintaan Terkirim! 🎉</h1>
          <p className="text-slate-300 text-base leading-relaxed mb-2">
            <span className="font-bold text-white">{selected.size} modul</span> telah kamu pilih.
          </p>
          <p className="text-slate-400 text-sm">
            Admin akan segera mereview dan menyetujui aksesmu. Kamu akan mendapat notifikasi setelah disetujui.
          </p>
          <p className="text-slate-500 text-xs mt-6">Mengalihkan ke dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-400/20 rounded-full text-indigo-300 text-sm font-bold mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Selamat Datang di DevGrow Academy
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Pilih Modul <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">yang Ingin Kamu Pelajari</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Hai <span className="text-white font-bold">{user?.name?.split(' ')[0] || 'Kamu'}</span>! Pilih modul yang ingin dipelajari. 
            Admin akan mereview dan menyetujui akses kamu dalam waktu singkat.
          </p>

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center"><CheckCircle className="w-4 h-4 text-white" /></div>
              <span className="text-emerald-400 text-sm font-bold">Daftar</span>
            </div>
            <div className="w-8 h-px bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-emerald-500 flex items-center justify-center"><CheckCircle className="w-4 h-4 text-white" /></div>
              <span className="text-emerald-400 text-sm font-bold">Verifikasi</span>
            </div>
            <div className="w-8 h-px bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-black">3</div>
              <span className="text-indigo-300 text-sm font-bold">Pilih Modul</span>
            </div>
            <div className="w-8 h-px bg-slate-600" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 text-xs font-black">4</div>
              <span className="text-slate-500 text-sm font-bold">Mulai Belajar</span>
            </div>
          </div>
        </div>

        {/* Module Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-6 animate-pulse h-52" />
            ))}
          </div>
        ) : modules.length === 0 ? (
          <div className="text-center py-20">
            <BookOpen className="w-16 h-16 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-400">Belum ada modul tersedia saat ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod: any) => {
              const isSelected = selected.has(mod.id);
              const gradient = CATEGORY_GRADIENTS[mod.category] || 'from-slate-500 to-slate-600';
              return (
                <button
                  key={mod.id}
                  onClick={() => toggleModule(mod.id)}
                  className={`relative text-left rounded-3xl border transition-all duration-300 overflow-hidden group ${
                    isSelected
                      ? 'border-indigo-400/60 shadow-2xl shadow-indigo-500/20 scale-[1.02]'
                      : 'border-white/10 hover:border-white/25 hover:scale-[1.01]'
                  }`}
                >
                  {/* Card background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-${isSelected ? '20' : '8'} transition-opacity duration-300`} />
                  <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />

                  {/* Selected indicator */}
                  {isSelected && (
                    <div className="absolute top-4 right-4 w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center z-10 shadow-lg shadow-indigo-500/30">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div className="relative p-6 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className={`px-2.5 py-1 rounded-lg text-xs font-extrabold bg-gradient-to-r ${gradient} text-white shadow-sm`}>
                        {mod.category}
                      </div>
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-base font-extrabold text-white leading-tight mb-1.5 line-clamp-2">{mod.title}</h3>
                      {mod.description && (
                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">{mod.description}</p>
                      )}
                    </div>

                    {/* Instructor */}
                    {mod.instructor && (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-[10px] font-black text-indigo-300">
                          {mod.instructor.name?.charAt(0)?.toUpperCase() || 'I'}
                        </div>
                        <span className="text-xs text-slate-400 font-medium">{mod.instructor.name}</span>
                      </div>
                    )}

                    {/* Meta */}
                    <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>{mod.lessonsCount || 0} lessons</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-xs">
                        <Users className="w-3.5 h-3.5" />
                        <span>{mod.enr || 0} siswa</span>
                      </div>
                    </div>

                    {/* Select indicator bottom */}
                    <div className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 ${
                      isSelected
                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                        : 'bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white'
                    }`}>
                      {isSelected ? <><CheckCircle className="w-3.5 h-3.5" /> Terpilih</> : <><ChevronRight className="w-3.5 h-3.5" /> Pilih Modul</>}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-slate-950/80 backdrop-blur-xl border-t border-white/5 z-50">
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {selected.size > 0 ? (
                <div className="flex items-center gap-2 px-4 py-2 bg-indigo-500/15 border border-indigo-400/20 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-black">
                    {selected.size}
                  </div>
                  <span className="text-indigo-300 text-sm font-bold">modul dipilih</span>
                </div>
              ) : (
                <span className="text-slate-500 text-sm">Pilih minimal 1 modul untuk melanjutkan</span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleSkip}
                className="px-5 py-2.5 text-slate-400 hover:text-white text-sm font-bold transition-colors"
              >
                Lewati
              </button>
              <button
                onClick={handleSubmit}
                disabled={selected.size === 0 || submitting}
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-extrabold rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm"
              >
                {submitting ? (
                  <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Mengirim...</>
                ) : (
                  <>Kirim Permintaan <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom padding for fixed bar */}
        <div className="h-24" />
      </div>
    </div>
  );
}
