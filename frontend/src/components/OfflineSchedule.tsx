'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, MapPin, Plus, X, Trash2, BookOpen, 
  Sparkles, Copy, Check, ArrowRight, ExternalLink, RefreshCw 
} from 'lucide-react';

export default function OfflineSchedule({ user }: { user: any }) {
  const [schedules, setSchedules] = useState<any[]>([]);
  const [modules, setModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'past'>('all');
  
  // Real-time ticking state for count-downs and live status evaluations
  const [currentTime, setCurrentTime] = useState(new Date());

  const [form, setForm] = useState({
    title: '',
    description: '',
    date: '',
    startTime: '',
    endTime: '',
    location: '',
    moduleId: ''
  });

  const isInstructor = user?.role?.toUpperCase() === 'INSTRUCTOR';

  useEffect(() => {
    fetchSchedules();
    if (isInstructor) {
      fetchInstructorModules();
    }
  }, [user]);

  // Keep ticking every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const fetchSchedules = async () => {
    setLoading(true);
    try {
      const endpoint = isInstructor 
        ? `http://localhost:5000/api/schedules/instructor/${user.id}`
        : `http://localhost:5000/api/schedules/student/${user.id}`;
      
      const res = await fetch(endpoint);
      if (res.ok) {
        setSchedules(await res.json());
      }
    } catch (error) {
      console.error('Error fetching schedules:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchInstructorModules = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/modules');
      if (res.ok) {
        const data = await res.json();
        setModules(data.filter((m: any) => m.instructorId === user.id || m.instructor?.id === user.id));
      }
    } catch (error) {
      console.error('Error fetching modules:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/schedules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, instructorId: user.id })
      });
      if (res.ok) {
        setShowModal(false);
        setForm({ title: '', description: '', date: '', startTime: '', endTime: '', location: '', moduleId: '' });
        fetchSchedules();
      } else {
        alert('Gagal membuat jadwal');
      }
    } catch (error) {
      alert('Terjadi kesalahan jaringan');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Yakin ingin menghapus jadwal ini?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/schedules/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchSchedules();
      }
    } catch (error) {
      alert('Gagal menghapus jadwal');
    }
  };

  const handleCopyLocation = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper: Date & Time safe local constructor
  const getScheduleTimes = (schedule: any) => {
    const baseDate = new Date(schedule.date);
    const [startH, startM] = (schedule.startTime || '00:00').split(':').map(Number);
    const [endH, endM] = (schedule.endTime || '00:00').split(':').map(Number);
    
    const startTime = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), startH, startM, 0);
    const endTime = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), endH, endM, 0);
    
    return { startTime, endTime };
  };

  // Helper: Evaluate dynamic status of a class schedule
  const getScheduleStatus = (schedule: any, now: Date) => {
    const { startTime, endTime } = getScheduleTimes(schedule);
    
    if (now > endTime) {
      return 'PAST';
    } else if (now >= startTime && now <= endTime) {
      return 'ONGOING';
    } else {
      const diffMs = startTime.getTime() - now.getTime();
      const diffHrs = diffMs / (1000 * 60 * 60);
      if (diffHrs > 0 && diffHrs <= 24) {
        return 'SOON';
      }
      return 'UPCOMING';
    }
  };

  // Helper: Calculate live ticking countdown message
  const getCountdownText = (startTime: Date, now: Date) => {
    const diffMs = startTime.getTime() - now.getTime();
    if (diffMs <= 0) return '';
    
    const diffSecs = Math.floor(diffMs / 1000);
    const diffMins = Math.floor(diffSecs / 60);
    const diffHrs = Math.floor(diffMins / 60);
    const diffDays = Math.floor(diffHrs / 24);
    
    if (diffDays > 0) {
      return `${diffDays} hari, ${diffHrs % 24} jam, ${diffMins % 60} menit`;
    } else if (diffHrs > 0) {
      return `${diffHrs} jam, ${diffMins % 60} menit, ${diffSecs % 60} detik`;
    } else if (diffMins > 0) {
      return `${diffMins} menit, ${diffSecs % 60} detik`;
    } else {
      return `${diffSecs} detik`;
    }
  };

  // Helper: Dynamic pre-filled Google Calendar event creator
  const getGoogleCalendarLink = (schedule: any) => {
    const { startTime, endTime } = getScheduleTimes(schedule);
    
    const formatGCalDate = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };
    
    const dates = `${formatGCalDate(startTime)}/${formatGCalDate(endTime)}`;
    const title = encodeURIComponent(`[LMS] Sesi Offline: ${schedule.title}`);
    const details = encodeURIComponent(
      `${schedule.description || ''}\n\nModul: ${schedule.module?.title || '-'}\nInstruktur: ${schedule.instructor?.name || '-'}\n\nDibuat via LMS Academy`
    );
    const location = encodeURIComponent(schedule.location || '');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  // Filter schedules based on tabs & dynamic computed status
  const analyzedSchedules = schedules.map(s => ({
    ...s,
    computedStatus: getScheduleStatus(s, currentTime),
    times: getScheduleTimes(s)
  }));

  const upcomingSchedules = analyzedSchedules.filter(s => s.computedStatus !== 'PAST');
  const pastSchedules = analyzedSchedules.filter(s => s.computedStatus === 'PAST');

  // Spotlight Next Active: find the closest upcoming/ongoing session
  const spotlightSession = upcomingSchedules.length > 0 
    ? upcomingSchedules.reduce((closest, curr) => {
        if (curr.computedStatus === 'ONGOING') return curr;
        if (closest.computedStatus === 'ONGOING') return closest;
        return curr.times.startTime < closest.times.startTime ? curr : closest;
      })
    : null;

  const filteredSchedules = analyzedSchedules.filter(s => {
    if (activeTab === 'upcoming') return s.computedStatus !== 'PAST';
    if (activeTab === 'past') return s.computedStatus === 'PAST';
    return true; // 'all'
  });

  const getCourseTheme = (title: string) => {
    const t = title?.toLowerCase() || '';
    if (t.includes('html')) return { bg: 'from-orange-500 to-red-600', label: 'HTML', emoji: 'HTML' };
    if (t.includes('css')) return { bg: 'from-blue-500 to-indigo-600', label: 'CSS', emoji: 'CSS' };
    if (t.includes('javascript') || t.includes('js')) return { bg: 'from-yellow-400 to-amber-500', label: 'JS', emoji: 'JS' };
    if (t.includes('php')) return { bg: 'from-purple-500 to-violet-600', label: 'PHP', emoji: 'PHP' };
    if (t.includes('mysql') || t.includes('sql') || t.includes('database')) return { bg: 'from-sky-500 to-cyan-600', label: 'SQL', emoji: 'SQL' };
    if (t.includes('git')) return { bg: 'from-rose-500 to-pink-600', label: 'GIT', emoji: 'GIT' };
    if (t.includes('react') || t.includes('mobile')) return { bg: 'from-cyan-500 to-teal-600', label: 'RN', emoji: 'RN' };
    if (t.includes('python')) return { bg: 'from-green-500 to-emerald-600', label: 'PY', emoji: 'PY' };
    if (t.includes('ui') || t.includes('ux') || t.includes('design')) return { bg: 'from-fuchsia-500 to-pink-600', label: 'UI', emoji: 'UI' };
    return { bg: 'from-indigo-600 to-purple-600', label: 'LMS', emoji: 'LMS' };
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center py-32 gap-4">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
        <p className="text-slate-400 dark:text-slate-500 font-bold text-sm tracking-wide animate-pulse">Menghubungkan ke basis data...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 animate-fadeIn text-slate-800 dark:text-slate-100 transition-colors duration-300">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black text-slate-800 dark:text-white flex items-center gap-3 tracking-tight">
            <div className="p-2.5 bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 rounded-2xl border border-indigo-100/50 dark:border-indigo-900/30 shadow-sm shrink-0 transition-colors">
              <Calendar className="w-8 h-8" />
            </div>
            <span>Jadwal Kelas Offline</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium text-sm md:text-base max-w-2xl leading-relaxed">
            {isInstructor 
              ? 'Atur jadwal tatap muka langsung, sesi praktikum laboratorium, diskusi teknis, dan kelola absensi siswa secara real-time.' 
              : 'Pantau agenda pertemuan fisik Anda. Hadirlah tepat waktu sesuai instruksi persiapan yang tertera.'}
          </p>
        </div>
        
        {isInstructor && (
          <button 
            onClick={() => setShowModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3.5 rounded-2xl font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer select-none"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" /> <span>Buat Jadwal Baru</span>
          </button>
        )}
      </div>

      {/* SPOTLIGHT NEXT SESSION BANNER */}
      {spotlightSession && (
        <div className="mb-10 relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white rounded-3xl p-6 md:p-8 border border-indigo-500/20 shadow-2xl shadow-indigo-950/30 group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_50%)] pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.12),transparent_50%)] pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="bg-indigo-500/25 text-indigo-200 border border-indigo-400/30 px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Sesi Terdekat
                </span>
                {spotlightSession.computedStatus === 'ONGOING' ? (
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-md shadow-emerald-500/20 animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white animate-ping" /> Sedang Berlangsung!
                  </span>
                ) : spotlightSession.computedStatus === 'SOON' ? (
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-md shadow-amber-500/20">
                    <Clock className="w-3.5 h-3.5" /> Segera Mulai
                  </span>
                ) : null}
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight group-hover:text-indigo-200 transition-colors">{spotlightSession.title}</h3>
              {spotlightSession.description && (
                <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed max-w-3xl">{spotlightSession.description}</p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-indigo-300 shrink-0">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-semibold">
                    <p className="text-slate-400 text-[10px] uppercase font-black tracking-wider">Tanggal</p>
                    <p className="truncate">{new Date(spotlightSession.date).toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-indigo-300 shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-semibold">
                    <p className="text-slate-400 text-[10px] uppercase font-black tracking-wider">Waktu Sesi</p>
                    <p>{spotlightSession.startTime} - {spotlightSession.endTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-indigo-300 shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="font-semibold max-w-[200px]">
                    <p className="text-slate-400 text-[10px] uppercase font-black tracking-wider">Lokasi</p>
                    <p className="truncate" title={spotlightSession.location}>{spotlightSession.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden group">
              <div>
                <p className="text-xs font-black text-indigo-300 tracking-widest uppercase mb-3">Countdown Pengingat</p>
                {spotlightSession.computedStatus === 'ONGOING' ? (
                  <div className="text-xl md:text-2xl font-black text-emerald-400 tracking-tight leading-none animate-pulse">
                    Silakan Masuk Ruangan!
                  </div>
                ) : (
                  <div className="text-xl md:text-2xl font-black text-amber-400 tracking-tight leading-none tabular-nums">
                    {getCountdownText(spotlightSession.times.startTime, currentTime) || 'Menghitung mundur...'}
                  </div>
                )}
                
                {spotlightSession.module && (
                  <div className="mt-4 flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-xs font-bold text-indigo-200 self-start">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-300 shrink-0" />
                    <span className="truncate">{spotlightSession.module.title}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-2.5">
                <a 
                  href={getGoogleCalendarLink(spotlightSession)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white text-slate-900 font-bold rounded-xl text-xs hover:bg-slate-100 transition-all shadow-lg shadow-black/10 flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Tambahkan ke Google Calendar
                </a>
                
                {!isInstructor && spotlightSession.instructor && (
                  <p className="text-[10px] text-slate-400 text-center font-bold">
                    Instruktur: <span className="text-white font-black">{spotlightSession.instructor.name}</span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FILTER TABS & SEARCH */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6 border-b border-slate-200 dark:border-slate-800 pb-4 transition-colors duration-300">
        <div className="flex bg-slate-100 dark:bg-[#0c0e18] p-1.5 rounded-2xl border border-slate-200/50 dark:border-slate-800 w-full sm:w-auto transition-colors duration-300">
          {[
            { id: 'all', label: 'Semua Sesi', count: analyzedSchedules.length },
            { id: 'upcoming', label: 'Sesi Mendatang', count: upcomingSchedules.length },
            { id: 'past', label: 'Sesi Selesai', count: pastSchedules.length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 sm:flex-none px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 shadow-md shadow-indigo-600/5'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-900/30'
              }`}
            >
              <span>{tab.label}</span>
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black tracking-wide ${
                activeTab === tab.id ? 'bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-400' : 'bg-slate-200 dark:bg-slate-805 text-slate-600 dark:text-slate-400'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <button 
          onClick={fetchSchedules}
          className="flex items-center gap-1.5 text-xs font-black text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-900/40 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all select-none cursor-pointer self-end sm:self-auto"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Muat Ulang</span>
        </button>
      </div>

      {/* SCHEDULES GRID */}
      {filteredSchedules.length === 0 ? (
        <div className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 p-16 text-center shadow-sm max-w-2xl mx-auto mt-6 transition-colors duration-300">
          <div className="w-16 h-16 rounded-full bg-slate-55 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-8 h-8 text-slate-350 dark:text-slate-650" />
          </div>
          <h3 className="text-xl font-bold text-slate-705 dark:text-white mb-2">Belum ada jadwal kelas offline</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md mx-auto leading-relaxed">
            {isInstructor 
              ? 'Anda belum memiliki jadwal pertemuan tatap muka. Buat jadwal baru untuk mulai mengajar secara luring.' 
              : 'Anda belum memiliki jadwal kelas offline terdekat untuk modul yang Anda ikuti.'}
          </p>
          {isInstructor && (
            <button 
              onClick={() => setShowModal(true)}
              className="mt-6 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition-colors shadow-lg shadow-indigo-600/20 cursor-pointer animate-none"
            >
              Buat Pertemuan Pertama
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSchedules.map(schedule => {
            const status = schedule.computedStatus;
            const theme = schedule.module ? getCourseTheme(schedule.module.title) : null;
            const isCopying = copiedId === schedule.id;

            return (
              <div 
                key={schedule.id} 
                className={`bg-white dark:bg-[#0c0e18] rounded-3xl border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col group relative ${
                  status === 'PAST' 
                    ? 'border-slate-200/80 dark:border-slate-850/80 bg-slate-50/50 dark:bg-slate-950/10 opacity-90' 
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-305 dark:hover:border-slate-750'
                }`}
              >
                {/* Visual Accent Bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${theme ? theme.bg : 'from-indigo-500 to-purple-600'}`} />

                {/* Card Top / Title Area */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-800/80 flex-1 flex flex-col justify-between transition-colors duration-300">
                  <div className="space-y-3.5">
                    {/* Badges row */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      {theme ? (
                        <span className={`inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border bg-gradient-to-r text-white ${theme.bg}`}>
                          <span>{theme.emoji}</span> <span>{theme.label}</span>
                        </span>
                      ) : (
                        <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg tracking-wider uppercase border border-slate-200/60 dark:border-slate-700/65">
                          General
                        </span>
                      )}

                      {/* Dyn Status Badge */}
                      {status === 'ONGOING' ? (
                        <span className="bg-emerald-50 dark:bg-emerald-950/25 text-emerald-705 dark:text-emerald-400 px-2.5 py-1 rounded-lg text-[10px] font-black tracking-wider uppercase border border-emerald-200 dark:border-emerald-900/30 flex items-center gap-1 animate-pulse">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> ONGOING
                        </span>
                      ) : status === 'SOON' ? (
                        <span className="bg-amber-50 dark:bg-amber-950/25 text-amber-705 dark:text-amber-400 px-2.5 py-1 rounded-lg text-[10px] font-black tracking-wider uppercase border border-amber-205 dark:border-amber-900/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" /> SEGERA
                        </span>
                      ) : status === 'PAST' ? (
                        <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-2.5 py-1 rounded-lg text-[10px] font-black tracking-wider uppercase border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                          SELESAI
                        </span>
                      ) : (
                        <span className="bg-indigo-50 dark:bg-indigo-950/25 text-indigo-705 dark:text-indigo-400 px-2.5 py-1 rounded-lg text-[10px] font-black tracking-wider uppercase border border-indigo-100 dark:border-indigo-900/30 flex items-center gap-1">
                          MENDATANG
                        </span>
                      )}
                    </div>

                    <h3 className="font-extrabold text-base md:text-lg text-slate-800 dark:text-white line-clamp-2 leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" title={schedule.title}>
                      {schedule.title}
                    </h3>
                    
                    {schedule.module && (
                      <p className="text-[11px] font-extrabold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-slate-300 dark:text-slate-650" />
                        <span className="truncate max-w-[220px]" title={schedule.module.title}>{schedule.module.title}</span>
                      </p>
                    )}

                    {schedule.description && (
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium line-clamp-3">
                        {schedule.description}
                      </p>
                    )}
                  </div>

                  {/* Instructor detail for students */}
                  {!isInstructor && schedule.instructor && (
                    <div className="mt-4 pt-4 border-t border-slate-105 dark:border-slate-800/80 flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-[10px] font-black uppercase shrink-0 border border-indigo-100/50 dark:border-indigo-900/20">
                        {schedule.instructor.name.substring(0,2)}
                      </div>
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                        Instruktur: <span className="text-slate-800 dark:text-white font-extrabold">{schedule.instructor.name}</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Bottom / Info & Actions */}
                <div className="p-6 bg-slate-50/50 dark:bg-slate-950/20 border-t border-slate-100 dark:border-slate-800/80 space-y-4 transition-colors duration-300">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2.5 text-xs font-bold text-slate-600 dark:text-slate-350">
                      <Calendar className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{new Date(schedule.date).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                    
                    <div className="flex items-center gap-2.5 text-xs font-bold text-slate-600 dark:text-slate-350">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{schedule.startTime} - {schedule.endTime} WIB</span>
                    </div>

                    <div className="flex items-center justify-between gap-3 text-xs font-bold text-slate-600 dark:text-slate-350">
                      <div className="flex items-center gap-2.5 truncate">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                        <span className="truncate" title={schedule.location}>{schedule.location}</span>
                      </div>
                      <button 
                        onClick={() => handleCopyLocation(schedule.location, schedule.id)}
                        className={`p-1.5 rounded-lg border transition-all cursor-pointer ${
                          isCopying 
                            ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-605 dark:text-emerald-400 border-emerald-250 dark:border-emerald-900' 
                            : 'bg-white dark:bg-slate-900 text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-100 dark:hover:border-indigo-900 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 border-slate-202 dark:border-slate-800'
                        }`}
                        title="Salin lokasi"
                      >
                        {isCopying ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  {/* Actions row */}
                  {status !== 'PAST' ? (
                    <div className="pt-2 flex gap-2">
                      <a 
                        href={getGoogleCalendarLink(schedule)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-100 dark:hover:border-indigo-900 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 font-bold rounded-xl text-[11px] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm dark:shadow-none active:scale-[0.98]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Kalender
                      </a>
                      
                      {isInstructor && (
                        <button 
                          onClick={() => handleDelete(schedule.id)} 
                          className="px-3.5 py-2.5 border border-rose-100 dark:border-rose-950/35 text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/20 rounded-xl transition-all cursor-pointer active:scale-[0.95]"
                          title="Hapus Pertemuan"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ) : (
                    isInstructor && (
                      <button 
                        onClick={() => handleDelete(schedule.id)} 
                        className="w-full py-2.5 border border-rose-100 dark:border-rose-950/35 hover:border-rose-200 hover:bg-rose-50 dark:hover:bg-rose-950/20 text-rose-500 font-bold rounded-xl text-[11px] transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Hapus Riwayat Sesi
                      </button>
                    )
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* MODAL BUAT JADWAL */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-205 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200 transition-colors duration-300">
            {/* Modal header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-850 flex items-center justify-between bg-slate-50 dark:bg-slate-950">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white flex items-center gap-2.5">
                <Calendar className="w-5.5 h-5.5 text-indigo-650 dark:text-indigo-400 shrink-0" /> <span>Jadwal Sesi Offline Baru</span>
              </h3>
              <button 
                onClick={() => setShowModal(false)} 
                className="p-1.5 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-full transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Nama Sesi Pertemuan</label>
                <input 
                  required 
                  type="text" 
                  value={form.title} 
                  onChange={e => setForm({...form, title: e.target.value})} 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl focus:ring-2 focus:ring-indigo-500/10 outline-none text-slate-800 dark:text-white font-medium text-sm transition-all shadow-inner" 
                  placeholder="Misal: Praktikum Luring Pertemuan 4" 
                />
              </div>
              
              <div>
                <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Mata Pelajaran Modul</label>
                <select 
                  value={form.moduleId} 
                  onChange={e => setForm({...form, moduleId: e.target.value})} 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-205 dark:border-slate-800 focus:border-indigo-500 rounded-xl focus:ring-2 focus:ring-indigo-500/10 outline-none text-slate-700 dark:text-slate-350 font-medium text-sm transition-all cursor-pointer"
                >
                  <option value="" className="text-slate-705 dark:text-slate-300 bg-white dark:bg-[#0f111a]">Umum (Tidak terikat modul spesifik)</option>
                  {modules.map(m => (
                    <option key={m.id} value={m.id} className="text-slate-705 dark:text-slate-300 bg-white dark:bg-[#0f111a]">{m.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Petunjuk Persiapan & Agenda</label>
                <textarea 
                  rows={3} 
                  value={form.description} 
                  onChange={e => setForm({...form, description: e.target.value})} 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl focus:ring-2 focus:ring-indigo-500/10 outline-none text-slate-800 dark:text-white font-medium text-sm transition-all shadow-inner" 
                  placeholder="Materi yang akan diujikan, berkas yang perlu diunduh, peralatan yang wajib dibawa..." 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Tanggal Sesi</label>
                  <input 
                    required 
                    type="date" 
                    value={form.date} 
                    onChange={e => setForm({...form, date: e.target.value})} 
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl focus:ring-2 focus:ring-indigo-500/10 outline-none text-slate-800 dark:text-white font-medium text-sm transition-all" 
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Jam Mulai</label>
                    <input 
                      required 
                      type="time" 
                      value={form.startTime} 
                      onChange={e => setForm({...form, startTime: e.target.value})} 
                      className="w-full px-2 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl focus:ring-2 focus:ring-indigo-500/10 outline-none text-slate-850 dark:text-white font-medium text-sm transition-all text-center" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Jam Selesai</label>
                    <input 
                      required 
                      type="time" 
                      value={form.endTime} 
                      onChange={e => setForm({...form, endTime: e.target.value})} 
                      className="w-full px-2 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl focus:ring-2 focus:ring-indigo-500/10 outline-none text-slate-855 dark:text-white font-medium text-sm transition-all text-center" 
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5">Ruangan & Lokasi</label>
                <input 
                  required 
                  type="text" 
                  value={form.location} 
                  onChange={e => setForm({...form, location: e.target.value})} 
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-[#0d101d] border border-slate-200 dark:border-slate-800 focus:border-indigo-500 rounded-xl focus:ring-2 focus:ring-indigo-500/10 outline-none text-slate-800 dark:text-white font-medium text-sm transition-all shadow-inner" 
                  placeholder="Misal: Lab Komputer Jaringan, Lt. 3 Gedung Rektorat" 
                />
              </div>

              <div className="pt-4 flex justify-end gap-3 border-t border-slate-100 dark:border-slate-850">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)} 
                  className="px-5 py-3 text-xs font-extrabold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-800 dark:hover:text-white rounded-xl transition-all cursor-pointer select-none"
                >
                  Batal
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-3 text-xs font-extrabold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md shadow-indigo-600/10 cursor-pointer select-none"
                >
                  Simpan Sesi Offline
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
