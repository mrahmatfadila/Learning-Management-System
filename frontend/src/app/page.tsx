'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { Zap, ArrowRight, Play, Star, Users, BookOpen, Award, Code2, Globe, Shield, Check, Sparkles, TrendingUp, Clock, Trophy, Menu, X, ChevronRight, Monitor, Cpu, Network, Database, Wrench, FileText } from 'lucide-react';

/* ─── tiny counter hook ─── */
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const students = useCounter(1247, 2000, statsVisible);
  const courses  = useCounter(52,   1500, statsVisible);
  const rating   = useCounter(98,   1800, statsVisible);
  const mentors  = useCounter(18,   1600, statsVisible);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const courses_data = [
    { icon: Code2,    color: 'from-blue-500 to-indigo-600',   bg: 'bg-blue-50',    badge: 'Terlaris',    title: 'HTML, CSS & JavaScript',       level: 'Pemula',       lessons: 24, price: 'Rp 299.000', original: 'Rp 599.000', students: 412 },
    { icon: Monitor,  color: 'from-violet-500 to-purple-600', bg: 'bg-violet-50',  badge: 'Terbaru',     title: 'React & Next.js Modern',        level: 'Menengah',     lessons: 32, price: 'Rp 399.000', original: 'Rp 799.000', students: 287 },
    { icon: Database, color: 'from-emerald-500 to-teal-600',  bg: 'bg-emerald-50', badge: 'Populer',     title: 'Database & SQL Mastery',        level: 'Pemula',       lessons: 20, price: 'Rp 249.000', original: 'Rp 499.000', students: 198 },
    { icon: Network,  color: 'from-orange-500 to-red-500',    bg: 'bg-orange-50',  badge: 'Hot 🔥',      title: 'Networking & Mikrotik',         level: 'Semua Level',  lessons: 18, price: 'Rp 349.000', original: 'Rp 699.000', students: 156 },
    { icon: Cpu,      color: 'from-pink-500 to-rose-600',     bg: 'bg-pink-50',    badge: 'Rekomendasi', title: 'Backend Node.js & Express',     level: 'Menengah',     lessons: 28, price: 'Rp 449.000', original: 'Rp 899.000', students: 134 },
    { icon: Wrench,   color: 'from-amber-500 to-yellow-500',  bg: 'bg-amber-50',   badge: '',            title: 'IT Support & Troubleshooting',  level: 'Semua Level',  lessons: 15, price: 'Rp 199.000', original: 'Rp 399.000', students: 221 },
  ];

  const features = [
    { icon: Code2,      color: 'bg-indigo-100 text-indigo-600', title: 'Live Code Editor',       desc: 'Praktek coding langsung di browser tanpa install apapun. Lihat hasilnya secara real-time.' },
    { icon: Sparkles,   color: 'bg-violet-100 text-violet-600', title: 'AI Learning Assistant',  desc: 'Tanya AI kapan saja saat belajar. Dapat penjelasan, hint, dan review kode otomatis.' },
    { icon: Award,      color: 'bg-amber-100 text-amber-600',   title: 'Sertifikat Digital',     desc: 'Sertifikat resmi setelah lulus ujian. Bisa langsung dibagikan ke LinkedIn.' },
    { icon: Users,      color: 'bg-emerald-100 text-emerald-600', title: 'Mentor Berpengalaman', desc: 'Review tugas langsung oleh mentor industri. Feedback personal untuk setiap pelajar.' },
    { icon: TrendingUp, color: 'bg-blue-100 text-blue-600',     title: 'Progress Tracking',      desc: 'Pantau perkembangan belajarmu setiap hari. Streak, XP, dan leaderboard yang seru.' },
    { icon: Globe,      color: 'bg-rose-100 text-rose-600',     title: 'Akses Seumur Hidup',     desc: 'Bayar sekali, akses selamanya. Update materi gratis tanpa biaya tambahan.' },
  ];

  const testimonials = [
    { name: 'Arif Rahmat',    role: 'Frontend Dev @ Tokopedia',  avatar: 'AR', color: 'from-indigo-400 to-blue-500',   stars: 5, text: '"Dalam 3 bulan belajar di DevGrow, saya berhasil dapat kerja sebagai frontend developer. Materi HTML & CSS-nya sangat lengkap dan live editor-nya bikin belajar jadi jauh lebih mudah!"' },
    { name: 'Siti Nurhaliza', role: 'Backend Dev @ Gojek',       avatar: 'SN', color: 'from-violet-400 to-purple-500', stars: 5, text: '"AI Assistant-nya luar biasa! Setiap kali stuck, tinggal tanya dan langsung dapat penjelasan yang mudah dipahami. Mentor-nya juga responsif banget."' },
    { name: 'Budi Santoso',   role: 'Network Eng @ Telkom',      avatar: 'BS', color: 'from-emerald-400 to-teal-500',  stars: 5, text: '"Kursus Networking & Mikrotik-nya sangat praktis. Langsung bisa diterapkan di pekerjaan. Worth every penny! Sudah rekomendasiin ke 5 teman saya."' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">

      {/* ══════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════ */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-200/50 border-b border-slate-100' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-300/40">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <span className="font-black text-xl text-slate-900 tracking-tight">DevGrow<span className="text-indigo-500">.</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[['#fitur', 'Fitur'], ['#kursus', 'Kursus'], ['#testimoni', 'Testimoni'], ['#harga', 'Harga']].map(([href, label]) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">{label}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors px-4 py-2">Masuk</Link>
            <Link href="/register" className="text-sm font-bold bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5">
              Mulai Gratis →
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-slate-700">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 space-y-3">
            {[['#fitur', 'Fitur'], ['#kursus', 'Kursus'], ['#testimoni', 'Testimoni']].map(([href, label]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block text-sm font-semibold text-slate-700 py-2">{label}</a>
            ))}
            <div className="flex gap-3 pt-2">
              <Link href="/login" className="flex-1 text-center text-sm font-semibold border border-slate-200 text-slate-700 py-2.5 rounded-xl">Masuk</Link>
              <Link href="/register" className="flex-1 text-center text-sm font-bold bg-indigo-600 text-white py-2.5 rounded-xl">Daftar Gratis</Link>
            </div>
          </div>
        )}
      </header>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-indigo-50/40 to-violet-50/30">
        {/* bg blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-indigo-200/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[100px]" />
          {/* dot grid */}
          <div className="absolute inset-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(circle, #a5b4fc 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full mb-8">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-indigo-700 text-sm font-bold">🚀 Platform Belajar IT #1 di Indonesia</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
              Kuasai{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Coding</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-indigo-200/60 rounded-full -z-0" />
              </span>
              ,<br />Raih Karir<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-pink-600">Impianmu.</span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
              Dari HTML dasar hingga backend profesional. Belajar dengan <strong className="text-slate-700">live code editor</strong>, <strong className="text-slate-700">AI assistant</strong>, dan <strong className="text-slate-700">mentor berpengalaman</strong> — kapan saja, di mana saja.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <Link href="/register" className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-7 py-4 rounded-2xl transition-all shadow-xl shadow-indigo-300/50 hover:shadow-indigo-400/60 hover:-translate-y-0.5 text-base">
                Mulai Belajar Gratis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#kursus" className="flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-bold px-7 py-4 rounded-2xl border-2 border-slate-200 hover:border-slate-300 transition-all text-base">
                <Play className="w-4 h-4 text-indigo-500 fill-indigo-500" />
                Lihat Kursus
              </a>
            </div>

            {/* social proof */}
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {['AR','SN','BS','DK','RF'].map((i, idx) => (
                  <div key={idx} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-black shadow-md ${['bg-indigo-500','bg-violet-500','bg-emerald-500','bg-pink-500','bg-amber-500'][idx]}`}>{i}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  <span className="text-sm font-bold text-slate-800 ml-1">4.9</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">dari <strong className="text-slate-700">1,200+</strong> pelajar aktif</p>
              </div>
            </div>
          </div>

          {/* right — floating UI mockup */}
          <div className="relative hidden lg:block">
            {/* main card */}
            <div className="relative bg-white rounded-3xl shadow-2xl shadow-indigo-200/60 border border-slate-100 overflow-hidden">
              {/* editor header */}
              <div className="bg-slate-900 px-5 py-3.5 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 bg-slate-800 rounded-md px-3 py-1 text-slate-400 text-xs font-mono">index.html</div>
              </div>
              {/* code */}
              <div className="bg-[#1e1e2e] px-6 py-5 font-mono text-sm leading-relaxed">
                <div><span className="text-slate-500">1  </span><span className="text-blue-400">{'<'}h1</span> <span className="text-emerald-400">class</span><span className="text-white">=</span><span className="text-amber-300">"hero"</span><span className="text-blue-400">{'>'}</span></div>
                <div><span className="text-slate-500">2  </span><span className="text-white pl-6">Hello, World! 🚀</span></div>
                <div><span className="text-slate-500">3  </span><span className="text-blue-400">{'</'}h1{'>'}</span></div>
                <div className="mt-2"><span className="text-slate-500">4  </span><span className="text-blue-400">{'<'}p</span> <span className="text-emerald-400">class</span><span className="text-white">=</span><span className="text-amber-300">"desc"</span><span className="text-blue-400">{'>'}</span></div>
                <div><span className="text-slate-500">5  </span><span className="text-white pl-6">Belajar coding itu seru!</span></div>
                <div><span className="text-slate-500">6  </span><span className="text-blue-400">{'</'}p{'>'}</span></div>
                <div className="mt-2 flex items-center gap-1"><span className="text-slate-500">7  </span><span className="w-2 h-4 bg-indigo-400 animate-pulse rounded-sm" /></div>
              </div>
              {/* preview */}
              <div className="bg-white px-6 py-4 border-t border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Live Preview</div>
                <h2 className="text-xl font-black text-slate-900">Hello, World! 🚀</h2>
                <p className="text-slate-500 text-sm">Belajar coding itu seru!</p>
              </div>
            </div>

            {/* floating badges */}
            <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                <Trophy className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">Kamu naik level!</div>
                <div className="text-[10px] text-slate-400">+150 XP diperoleh</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 px-4 py-3 flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800">AI Assistant</div>
                <div className="text-[10px] text-slate-400">Siap membantu 24/7</div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-8 -translate-y-1/2 bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 px-4 py-3">
              <div className="text-[10px] font-bold text-slate-400 mb-1">Progress Hari Ini</div>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[72%] bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
                </div>
                <span className="text-xs font-black text-indigo-600">72%</span>
              </div>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="text-xs text-slate-400 font-medium">Scroll ke bawah</div>
          <div className="w-5 h-8 border-2 border-slate-300 rounded-full flex items-start justify-center pt-1.5">
            <div className="w-1 h-2 bg-slate-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS COUNTER
      ══════════════════════════════════════ */}
      <section ref={statsRef} className="py-16 bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: students, suffix: '+', label: 'Pelajar Aktif', icon: '👨‍💻' },
            { value: courses,  suffix: '+', label: 'Modul Kursus',  icon: '📚' },
            { value: rating,   suffix: '%', label: 'Kepuasan',      icon: '⭐' },
            { value: mentors,  suffix: '+', label: 'Mentor Expert', icon: '🏆' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl mb-1">{s.icon}</div>
              <div className="text-4xl font-black text-white mb-1">{s.value.toLocaleString()}{s.suffix}</div>
              <div className="text-indigo-200 text-sm font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURES
      ══════════════════════════════════════ */}
      <section id="fitur" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-5">
              <Sparkles className="w-4 h-4 text-indigo-500" />
              <span className="text-indigo-600 text-sm font-bold">Kenapa DevGrow?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Semua yang kamu butuhkan<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">ada di sini.</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Platform belajar yang dirancang untuk hasil nyata — bukan sekadar nonton video.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border-2 border-slate-100 hover:border-indigo-200 bg-white hover:bg-indigo-50/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-100/50">
                <div className={`w-12 h-12 ${f.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <f.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COURSES
      ══════════════════════════════════════ */}
      <section id="kursus" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-5 shadow-sm">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <span className="text-slate-700 text-sm font-bold">Kursus Pilihan</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
                Mulai dari mana saja,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">capai tujuanmu.</span>
              </h2>
            </div>
            <Link href="/register" className="shrink-0 flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
              Lihat semua kursus <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses_data.map((c, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 hover:-translate-y-1.5 transition-all duration-300">
                {/* card top */}
                <div className={`h-36 bg-gradient-to-br ${c.color} relative overflow-hidden flex items-center justify-center`}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <c.icon className="w-16 h-16 text-white/30 absolute -right-4 -bottom-4 rotate-12" />
                  <div className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <c.icon className="w-7 h-7 text-slate-700" />
                  </div>
                  {c.badge && (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-slate-800 text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm">{c.badge}</div>
                  )}
                </div>
                {/* card body */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-wide">{c.level}</span>
                    <span className="text-[10px] text-slate-400">• {c.lessons} Materi</span>
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-3 group-hover:text-indigo-600 transition-colors leading-snug">{c.title}</h3>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                    <span className="text-xs text-slate-500 ml-1">{c.students} pelajar</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-lg font-black text-slate-900">{c.price}</div>
                      <div className="text-xs text-slate-400 line-through">{c.original}</div>
                    </div>
                    <Link href="/register" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5">
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Mulai dalam <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">3 langkah</span>
            </h2>
            <p className="text-slate-500 text-lg">Tidak perlu pengalaman sebelumnya. Kami panduan kamu dari nol.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-0.5 bg-gradient-to-r from-indigo-200 via-violet-200 to-indigo-200" />

            {[
              { step: '01', icon: '🎯', title: 'Pilih Kursus', desc: 'Temukan kursus yang sesuai dengan tujuan karirmu. Dari pemula hingga profesional.' },
              { step: '02', icon: '💻', title: 'Belajar & Praktek', desc: 'Ikuti materi interaktif dengan live code editor dan AI assistant yang siap membantu.' },
              { step: '03', icon: '🏆', title: 'Raih Sertifikat', desc: 'Selesaikan ujian dan dapatkan sertifikat resmi yang diakui industri.' },
            ].map((s, i) => (
              <div key={i} className="relative text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-50 to-violet-50 border-2 border-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg shadow-indigo-100/50">
                  <span className="text-3xl">{s.icon}</span>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center z-20">
                  <span className="text-white text-[9px] font-black">{s.step}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════ */}
      <section id="testimoni" className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full mb-5 shadow-sm">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="text-slate-700 text-sm font-bold">Kata Mereka</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              1,200+ pelajar sudah<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">membuktikannya.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-lg shadow-slate-100/60 hover:-translate-y-1 transition-all duration-300">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black shadow-md`}>{t.avatar}</div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRICING
      ══════════════════════════════════════ */}
      <section id="harga" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Investasi terbaik untuk<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">masa depanmu.</span>
            </h2>
            <p className="text-slate-500 text-lg">Bayar sekali, akses selamanya. Tanpa biaya tersembunyi.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* free */}
            <div className="bg-slate-50 rounded-3xl p-8 border-2 border-slate-200">
              <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-3">Gratis</div>
              <div className="text-5xl font-black text-slate-900 mb-1">Rp 0</div>
              <div className="text-slate-400 text-sm mb-6">Selamanya gratis</div>
              <ul className="space-y-3 mb-8">
                {['Akses 5 modul gratis', 'Live code editor', 'Forum komunitas', 'Progress tracking'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-slate-600">
                    <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-slate-600" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="block text-center font-bold text-slate-700 border-2 border-slate-300 hover:border-slate-400 py-3.5 rounded-2xl transition-all hover:bg-slate-100">
                Mulai Gratis
              </Link>
            </div>

            {/* pro */}
            <div className="relative bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 border-2 border-indigo-500 shadow-2xl shadow-indigo-300/40">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg">
                ⚡ PALING POPULER
              </div>
              <div className="text-sm font-bold text-indigo-200 uppercase tracking-widest mb-3">Pro</div>
              <div className="flex items-end gap-2 mb-1">
                <div className="text-5xl font-black text-white">Rp 299k</div>
                <div className="text-indigo-300 text-sm mb-2 line-through">Rp 599k</div>
              </div>
              <div className="text-indigo-200 text-sm mb-6">per kursus • akses selamanya</div>
              <ul className="space-y-3 mb-8">
                {['Semua modul lengkap', 'AI Learning Assistant', 'Review tugas oleh mentor', 'Sertifikat digital resmi', 'Update materi gratis', 'Akses komunitas premium'].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-indigo-100">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/register" className="block text-center font-black text-indigo-700 bg-white hover:bg-indigo-50 py-3.5 rounded-2xl transition-all shadow-lg hover:-translate-y-0.5">
                Mulai Belajar Sekarang →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-indigo-700 to-violet-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="text-5xl mb-6">🚀</div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            Jangan tunda lagi.<br />Mulai hari ini!
          </h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            Ribuan pelajar sudah memulai perjalanan mereka. Giliran kamu sekarang — daftar gratis, tidak perlu kartu kredit.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/register" className="group flex items-center gap-2 bg-white text-indigo-700 font-black px-8 py-4 rounded-2xl hover:bg-indigo-50 transition-all shadow-2xl shadow-indigo-900/30 hover:-translate-y-0.5 text-base">
              Daftar Gratis Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/login" className="flex items-center gap-2 text-white font-bold border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-2xl transition-all text-base">
              Sudah punya akun? Masuk
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-8">
            {['✅ Gratis daftar', '✅ Tanpa kartu kredit', '✅ Akses langsung'].map((t) => (
              <span key={t} className="text-indigo-200 text-sm font-medium">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FOOTER
      ══════════════════════════════════════ */}
      <footer className="bg-slate-950 text-slate-400 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="font-black text-xl text-white">DevGrow<span className="text-indigo-400">.</span></span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">Platform belajar IT modern untuk generasi berikutnya. Dari pemula hingga profesional.</p>
            </div>
            <div>
              <div className="text-white font-bold text-sm mb-4">Platform</div>
              <ul className="space-y-2.5">
                {['Kursus', 'Mentor', 'Sertifikat', 'Komunitas'].map((l) => (
                  <li key={l}><a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-white font-bold text-sm mb-4">Perusahaan</div>
              <ul className="space-y-2.5">
                {['Tentang Kami', 'Blog', 'Karir', 'Kontak'].map((l) => (
                  <li key={l}><a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-600 text-sm">© {new Date().getFullYear()} DevGrow Academy by Muhamad Rahmat Fadila. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-slate-600" />
              <span className="text-slate-600 text-xs">SSL Secured • Data Terenkripsi</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
