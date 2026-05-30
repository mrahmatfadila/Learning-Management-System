'use client';

import { useEffect, useState } from 'react';
import { BookOpen, CheckCircle, Play, Award, Clock, Star, Zap, Trophy, Code2, MessageSquare, LogIn, Settings, Filter, Search, Calendar } from 'lucide-react';

type Activity = {
  id: number;
  type: 'lesson' | 'quiz' | 'login' | 'achievement' | 'module' | 'comment';
  title: string;
  desc: string;
  time: string;
  xp?: number;
  icon: any;
  color: string;
  bg: string;
};

const MOCK_ACTIVITIES: Activity[] = [
  { id: 1,  type: 'lesson',      title: 'Menyelesaikan Lesson',    desc: 'CSS Flexbox Intro — Modul CSS Styling',         time: '2 menit lalu',    xp: 50,  icon: Play,         color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: 2,  type: 'quiz',        title: 'Quiz Berhasil',           desc: 'CSS Selectors — Skor 100%',                    time: '15 menit lalu',   xp: 30,  icon: CheckCircle,  color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 3,  type: 'achievement', title: 'Badge Diperoleh',         desc: 'CSS Master — Selesaikan 10 lesson CSS',        time: '1 jam lalu',      xp: 100, icon: Trophy,       color: 'text-amber-600', bg: 'bg-amber-50' },
  { id: 4,  type: 'lesson',      title: 'Menyelesaikan Lesson',    desc: 'CSS Grid Container — Modul CSS Styling',       time: '2 jam lalu',      xp: 50,  icon: Play,         color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: 5,  type: 'module',      title: 'Modul Dimulai',           desc: 'JavaScript Dasar: Logika',                     time: '3 jam lalu',      xp: 20,  icon: BookOpen,     color: 'text-violet-600', bg: 'bg-violet-50' },
  { id: 6,  type: 'quiz',        title: 'Quiz Selesai',            desc: 'HTML Forms — Skor 80%',                        time: '5 jam lalu',      xp: 24,  icon: Star,         color: 'text-blue-600', bg: 'bg-blue-50' },
  { id: 7,  type: 'lesson',      title: 'Menyelesaikan Lesson',    desc: 'JS Variables — Modul JavaScript',              time: 'Kemarin, 20:30',  xp: 50,  icon: Code2,        color: 'text-yellow-600', bg: 'bg-yellow-50' },
  { id: 8,  type: 'achievement', title: 'Streak 7 Hari!',          desc: 'Belajar 7 hari berturut-turut',                time: 'Kemarin, 18:00',  xp: 200, icon: Zap,          color: 'text-orange-600', bg: 'bg-orange-50' },
  { id: 9,  type: 'comment',     title: 'Diskusi Diposting',       desc: 'Bertanya di forum HTML Tables',                time: 'Kemarin, 15:45',  xp: 5,   icon: MessageSquare, color: 'text-pink-600', bg: 'bg-pink-50' },
  { id: 10, type: 'lesson',      title: 'Menyelesaikan Lesson',    desc: 'HTML Introduction — Modul HTML Dasar',         time: '2 hari lalu',     xp: 50,  icon: Play,         color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: 11, type: 'login',       title: 'Login ke Platform',       desc: 'Sesi belajar dimulai',                         time: '2 hari lalu',     xp: 5,   icon: LogIn,        color: 'text-slate-600', bg: 'bg-slate-100' },
  { id: 12, type: 'module',      title: 'Modul Selesai',           desc: 'HTML Dasar: Kerangka Web — 100% selesai',      time: '3 hari lalu',     xp: 500, icon: Award,        color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 13, type: 'quiz',        title: 'Quiz Berhasil',           desc: 'JS Loops — Skor 90%',                          time: '4 hari lalu',     xp: 27,  icon: CheckCircle,  color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { id: 14, type: 'lesson',      title: 'Menyelesaikan Lesson',    desc: 'CSS Animations — Modul CSS Advanced',          time: '5 hari lalu',     xp: 50,  icon: Play,         color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { id: 15, type: 'achievement', title: 'Badge Diperoleh',         desc: 'First Quiz — Selesaikan quiz pertama',         time: '1 minggu lalu',   xp: 50,  icon: Trophy,       color: 'text-amber-600', bg: 'bg-amber-50' },
];

const TYPE_LABELS: Record<string, string> = {
  all: 'Semua',
  lesson: 'Lesson',
  quiz: 'Quiz',
  achievement: 'Achievement',
  module: 'Modul',
  comment: 'Diskusi',
  login: 'Login',
};

const STATS = [
  { label: 'Total XP',        value: '2,450',  icon: Zap,         color: 'text-amber-600',   bg: 'bg-amber-50',   border: 'border-amber-200' },
  { label: 'Lesson Selesai',  value: '38',     icon: Play,        color: 'text-indigo-600',  bg: 'bg-indigo-50',  border: 'border-indigo-200' },
  { label: 'Quiz Lulus',      value: '24',     icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  { label: 'Badge Diperoleh', value: '7',      icon: Trophy,      color: 'text-violet-600',  bg: 'bg-violet-50',  border: 'border-violet-200' },
];

export default function ActivityLogPage() {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('lms_user');
    if (stored) { try { setUser(JSON.parse(stored)); } catch {} }
  }, []);

  const filtered = MOCK_ACTIVITIES.filter(a => {
    const matchType = filter === 'all' || a.type === filter;
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
                        a.desc.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const totalXp = MOCK_ACTIVITIES.reduce((s, a) => s + (a.xp || 0), 0);

  return (
    <div className="p-6 md:p-8 max-w-4xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-1">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Clock className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-900">Activity Log</h1>
            <p className="text-slate-500 text-sm">Riwayat aktivitas belajar {user?.name || 'kamu'}</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {STATS.map((s, i) => (
          <div key={i} className={`${s.bg} border ${s.border} rounded-2xl p-4`}>
            <div className={`w-8 h-8 bg-white rounded-xl flex items-center justify-center mb-3 shadow-sm`}>
              <s.icon className={`w-4 h-4 ${s.color}`} />
            </div>
            <div className={`text-2xl font-black ${s.color} mb-0.5`}>{s.value}</div>
            <div className="text-xs font-semibold text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari aktivitas..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
          />
        </div>
        {/* Filter tabs */}
        <div className="flex gap-1.5 flex-wrap">
          {Object.entries(TYPE_LABELS).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                filter === key
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Activity List */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        {filtered.length === 0 ? (
          <div className="py-16 text-center">
            <Clock className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <p className="text-slate-500 font-medium">Tidak ada aktivitas ditemukan</p>
          </div>
        ) : (
          <div className="divide-y divide-slate-100">
            {filtered.map((activity, idx) => (
              <div key={activity.id} className="flex items-start gap-4 px-5 py-4 hover:bg-slate-50 transition-colors">
                {/* Icon */}
                <div className={`w-9 h-9 ${activity.bg} rounded-xl flex items-center justify-center shrink-0 mt-0.5`}>
                  <activity.icon className={`w-4 h-4 ${activity.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-bold text-slate-800">{activity.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5 truncate">{activity.desc}</div>
                    </div>
                    {activity.xp && (
                      <div className="flex items-center gap-1 shrink-0 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                        <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="text-[11px] font-black text-amber-600">+{activity.xp} XP</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span className="text-[11px] text-slate-400">{activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer info */}
      <p className="text-center text-xs text-slate-400 mt-6">
        Menampilkan {filtered.length} dari {MOCK_ACTIVITIES.length} aktivitas
      </p>
    </div>
  );
}
