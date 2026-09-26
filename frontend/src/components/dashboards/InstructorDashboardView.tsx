'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Users, BookOpen, Calendar as CalendarIcon, Clock, CheckCircle2,
  AlertTriangle, Sparkles, FileText, ChevronRight, ArrowRight,
  TrendingUp, BarChart2, Bell, CheckSquare, Plus, Award,
  ChevronLeft, Bot, Zap, MessageSquare, Play, RefreshCw, Shield,
  Layers, Search, ChevronDown, Check, UserCheck, ShieldCheck
} from 'lucide-react';

interface InstructorDashboardViewProps {
  user: any;
  modules?: any[];
  enrollments?: any[];
}

export default function InstructorDashboardView({ user }: InstructorDashboardViewProps) {
  const router = useRouter();
  const userName = user?.name?.split(' ')[0] || 'Ms. Ria';

  // Calendar Date State for May 2026 (Selected Day 20)
  const [selectedDay, setSelectedDay] = useState(20);

  // 7 Quick Links matching screenshot
  const quickLinks = [
    { name: 'Class Roster', icon: Users, color: 'text-blue-600 bg-blue-50/80 border-blue-100' },
    { name: 'Timetable', icon: CalendarIcon, color: 'text-indigo-600 bg-indigo-50/80 border-indigo-100' },
    { name: 'Lesson Plans', icon: BookOpen, color: 'text-emerald-600 bg-emerald-50/80 border-emerald-100' },
    { name: 'Attendance', icon: ShieldCheck, color: 'text-cyan-600 bg-cyan-50/80 border-cyan-100' },
    { name: 'Assignments', icon: FileText, color: 'text-amber-600 bg-amber-50/80 border-amber-100' },
    { name: 'Results', icon: BarChart2, color: 'text-teal-600 bg-teal-50/80 border-teal-100' },
    { name: 'AI Quiz Builder', icon: Bot, color: 'text-purple-600 bg-purple-50/80 border-purple-100', href: '/dashboard?view=quizizz' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 p-4 sm:p-6 lg:p-7 space-y-6 max-w-[1780px] mx-auto font-sans">
      
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── HEADER TITLE ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Teacher Dashboard
        </h1>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MAIN 2-COLUMN OVERALL GRID (LEFT AREA + RIGHT SIDEBAR) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        
        {/* ════════════════════════════════════════════════════════════════════════ */}
        {/* ── LEFT MAIN AREA (9 / 12 COLS) ── */}
        {/* ════════════════════════════════════════════════════════════════════════ */}
        <div className="xl:col-span-9 space-y-6">
          
          {/* ── ROW 1: TOP HERO BANNER & 2 AI CARDS ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Left: Hero Banner (Ms. Ria) ~ 62% */}
            <div className="lg:col-span-8 bg-gradient-to-r from-[#EEF6FF] via-[#F4F9FF] to-[#E9F3FF] dark:from-[#131E36] dark:via-[#16223D] dark:to-[#182645] rounded-3xl p-6 sm:p-7 border border-blue-100/80 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
              
              {/* Subtle Background Watermarks */}
              <div className="absolute right-20 top-2 text-blue-200/25 dark:text-blue-900/15 select-none pointer-events-none text-9xl font-serif">
                🎓
              </div>

              {/* Teacher Portrait Illustration */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-300/20 rounded-full blur-2xl pointer-events-none" />
                <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" fill="none">
                  <circle cx="100" cy="100" r="85" fill="#E0F2FE" />
                  {/* Suit / Blazer */}
                  <path d="M48 175 C48 135 70 120 100 120 C130 120 152 135 152 175 Z" fill="#2563EB" />
                  {/* White Shirt Collar */}
                  <path d="M85 120 L100 150 L115 120 Z" fill="#FFFFFF" />
                  <path d="M96 150 L100 175 L104 150 Z" fill="#E2E8F0" />
                  {/* Head & Neck */}
                  <circle cx="100" cy="80" r="28" fill="#FDE68A" />
                  {/* Glasses */}
                  <rect x="82" y="74" width="15" height="11" rx="3" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                  <rect x="103" y="74" width="15" height="11" rx="3" stroke="#1E293B" strokeWidth="2.5" fill="none" />
                  <line x1="97" y1="79" x2="103" y2="79" stroke="#1E293B" strokeWidth="2" />
                  {/* Hair */}
                  <path d="M68 85 C64 55 80 35 105 38 C128 40 138 58 134 85 C126 95 120 68 115 62 C100 58 85 68 80 85 Z" fill="#334155" />
                  {/* Smile & Eyes */}
                  <circle cx="89" cy="79" r="2" fill="#1E293B" />
                  <circle cx="111" cy="79" r="2" fill="#1E293B" />
                  <path d="M94 92 Q100 97 106 92" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  {/* Binder */}
                  <rect x="62" y="130" width="34" height="42" rx="4" fill="#0F172A" transform="rotate(-12 62 130)" />
                  <line x1="68" y1="140" x2="86" y2="136" stroke="#38BDF8" strokeWidth="2" />
                  {/* Waving Hand */}
                  <circle cx="140" cy="115" r="7" fill="#FDE68A" />
                  <rect x="138" y="105" width="4" height="12" rx="2" fill="#FDE68A" />
                </svg>
              </div>

              {/* Greeting Text & Call to Action */}
              <div className="space-y-2.5 max-w-md z-10 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight flex items-center justify-center sm:justify-start gap-2">
                  Good morning, {userName}! <span className="inline-block animate-bounce">👋</span>
                </h2>
                
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 leading-relaxed">
                  Empower minds. Inspire futures.
                </p>
                
                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  You have <strong className="text-slate-900 dark:text-white font-bold">3 classes today</strong> and{' '}
                  <button 
                    onClick={() => router.push('/dashboard?view=manage-tasks')}
                    className="text-[#1D64F2] dark:text-blue-400 font-bold hover:underline cursor-pointer"
                  >
                    12 pending tasks
                  </button>.
                </p>

                <div className="pt-1.5">
                  <button
                    onClick={() => router.push('/dashboard?view=enrolled-students')}
                    className="px-6 py-2.5 rounded-xl bg-[#1D64F2] hover:bg-[#1554D1] active:scale-95 text-white font-bold text-xs shadow-md shadow-blue-500/20 transition-all cursor-pointer flex items-center gap-2 mx-auto sm:mx-0"
                  >
                    View My Classes <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* Right: 2 Stacked AI Cards ~ 38% */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              
              {/* Tool 1: AI Lesson Planner */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between flex-1 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border border-purple-100 dark:border-purple-900/30 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">AI Lesson Planner</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      Create smart lesson plans in seconds with AI.
                    </p>
                  </div>
                </div>
                <div>
                  <button className="w-full py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-blue-200 dark:border-blue-900/40 text-[#1D64F2] dark:text-blue-400 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1">
                    Create Lesson Plan <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Tool 2: AI Content Generator */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between flex-1 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">AI Content Generator</h3>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                      Generate worksheets, quizzes and study materials instantly.
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => router.push('/dashboard?view=quizizz')}
                    className="w-full py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border border-blue-200 dark:border-blue-900/40 text-[#1D64F2] dark:text-blue-400 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-1"
                  >
                    Generate Content <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* ── ROW 2: 4 KPI METRIC STAT CARDS (WITH SPARKLINES) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Card 1: Today's Classes */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Today&apos;s Classes</span>
                <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-[#1D64F2] flex items-center justify-center">
                  <CalendarIcon className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">3</h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Next: Physics - 10A</p>
                <p className="text-[10px] text-slate-400">09:30 AM - 10:15 AM</p>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-blue-500 stroke-current fill-none">
                <path d="M 0 15 Q 25 5, 50 12 T 100 8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Card 2: Student Count */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Student Count</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">128</h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Across 4 Classes</p>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-emerald-500 stroke-current fill-none">
                <path d="M 0 16 Q 30 18, 60 8 T 100 4" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Card 3: Assignments to Grade */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Assignments to Grade</span>
                <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">12</h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Due within 3 days</p>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-purple-500 stroke-current fill-none">
                <path d="M 0 10 Q 20 18, 40 10 T 70 14 T 100 8" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* Card 4: Pending Leave Requests */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Pending Leave Requests</span>
                <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">2</h3>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Requires your approval</p>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-amber-500 stroke-current fill-none">
                <path d="M 0 18 Q 30 12, 60 16 T 100 6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

          </div>

          {/* ── ROW 3: QUICK LINKS BAR ── */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">Quick Links</h3>
              <button className="text-xs font-bold text-[#1D64F2] hover:underline flex items-center gap-1 cursor-pointer">
                Customize ⚙
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {quickLinks.map((ql, idx) => (
                <button
                  key={idx}
                  onClick={() => ql.href ? router.push(ql.href) : null}
                  className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all flex flex-col items-center justify-center text-center space-y-2 cursor-pointer group"
                >
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${ql.color} group-hover:scale-105 transition-transform`}>
                    <ql.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-[#1D64F2] dark:group-hover:text-blue-400 transition-colors truncate w-full">
                    {ql.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── ROW 4: BOTTOM 3-COLUMN BALANCED & FLUSH LAYOUT ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            
            {/* Column 1: Upcoming Activities (Left) */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Upcoming Activities</h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="space-y-3.5 mt-3">
                  {[
                    { month: 'MAY', day: '21', title: 'Physics Practical - Lab Session', info: 'Class 10A • 09:30 AM - 11:00 AM', badgeBg: 'bg-purple-50 dark:bg-purple-950/40 text-purple-600' },
                    { month: 'MAY', day: '22', title: 'Chemistry Quiz', info: 'Class 11B • 10:30 AM - 11:00 AM', badgeBg: 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600' },
                    { month: 'MAY', day: '23', title: 'Maths Worksheet Discussion', info: 'Class 9C • 11:15 AM - 12:00 PM', badgeBg: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600' },
                    { month: 'MAY', day: '24', title: 'Parent-Teacher Meeting', info: 'Virtual • 04:00 PM - 06:00 PM', badgeBg: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600' },
                  ].map((act, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl ${act.badgeBg} font-black flex flex-col items-center justify-center shrink-0 border border-slate-100 dark:border-slate-800`}>
                        <span className="text-[8px] leading-none uppercase">{act.month}</span>
                        <span className="text-sm leading-tight">{act.day}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{act.title}</h4>
                        <p className="text-[10px] text-slate-400 truncate">{act.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button className="w-full py-2.5 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                  <CalendarIcon className="w-3.5 h-3.5 text-[#1D64F2]" /> View Full Calendar
                </button>
              </div>
            </div>

            {/* Column 2: Stack of Homework Submissions + AI Risk Alerts (Middle) */}
            <div className="space-y-5 flex flex-col justify-between">
              
              {/* Homework Submissions */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3.5 flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Homework Submissions</h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="flex items-center justify-between gap-4 py-1 px-1">
                  {/* Donut Chart */}
                  <div className="relative w-28 h-28 shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F1F5F9" strokeWidth="3.8" className="dark:stroke-slate-800" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1D64F2" strokeWidth="3.8" strokeDasharray="76, 100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-black text-slate-900 dark:text-white leading-none">76%</span>
                      <span className="text-[9px] text-slate-400 font-bold mt-0.5">Submitted</span>
                    </div>
                  </div>

                  {/* Submission Breakdown Metrics */}
                  <div className="space-y-1.5 text-xs flex-1">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-xs font-medium">Total Assigned</span>
                      <span className="font-bold text-slate-900 dark:text-white text-xs">34</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-xs font-medium">Submitted</span>
                      <span className="font-bold text-emerald-500 text-xs">26</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-xs font-medium">Pending</span>
                      <span className="font-bold text-rose-500 text-xs">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-xs font-medium">Overdue</span>
                      <span className="font-bold text-rose-500 text-xs">3</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Student Risk Alerts */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-rose-500" /> AI Student Risk Alerts
                  </h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="space-y-2 mt-1">
                  {[
                    { name: 'Rohan Mehta (10A)', risk: 'High Risk', reason: 'Declining in Physics & Maths', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80', badge: 'text-rose-600 bg-rose-50 border-rose-200' },
                    { name: 'Aisha Khan (11B)', risk: 'Medium Risk', reason: 'Low assignment submission', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80', badge: 'text-amber-600 bg-amber-50 border-amber-200' },
                    { name: 'Karan Verma (9C)', risk: 'Low Risk', reason: 'Needs improvement in Tests', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80', badge: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
                  ].map((st, i) => (
                    <div key={i} className="flex items-center justify-between p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <img src={st.avatar} alt="" className="w-8 h-8 rounded-full object-cover shrink-0" />
                        <div className="min-w-0 truncate">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{st.name}</h4>
                          <p className="text-[10px] text-slate-400 truncate">{st.reason}</p>
                        </div>
                      </div>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border shrink-0 ${st.badge}`}>
                        {st.risk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Column 3: Stack of Student Performance + Notifications (Right) */}
            <div className="space-y-5 flex flex-col justify-between">
              
              {/* Student Performance Overview */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Student Performance</h3>
                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-0.5 cursor-pointer">
                      This Month <ChevronDown className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Bar Chart */}
                  <div className="h-28 flex items-end justify-between gap-2 pt-2 px-1">
                    {[
                      { class: '10A', avg: 72, top: 96 },
                      { class: '10B', avg: 68, top: 92 },
                      { class: '11A', avg: 81, top: 98 },
                      { class: '11B', avg: 75, top: 94 },
                      { class: '12A', avg: 85, top: 100 },
                    ].map((c, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div className="flex items-end gap-1 w-full justify-center h-20">
                          <div className="w-2.5 bg-[#1D64F2] rounded-t-sm" style={{ height: `${c.avg}%` }} />
                          <div className="w-2.5 bg-[#60A5FA] rounded-t-sm" style={{ height: `${c.top}%` }} />
                        </div>
                        <span className="text-[9px] font-bold text-slate-400">{c.class}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center justify-center gap-4 text-[9px] font-bold text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#1D64F2]" /> Class Average %</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-sm bg-[#60A5FA]" /> Top Score %</span>
                </div>
              </div>

              {/* Notifications */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Notifications</h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="space-y-2 mt-1">
                  {[
                    { icon: FileText, iconColor: 'text-blue-600 bg-blue-50', title: 'New assignment submitted', desc: 'Arjun Singh submitted Physics Worksheet', time: '10 min ago', unread: true },
                    { icon: Users, iconColor: 'text-teal-600 bg-teal-50', title: 'Leave request received', desc: '2 leave requests need your approval', time: '1 hr ago', unread: true },
                    { icon: Award, iconColor: 'text-purple-600 bg-purple-50', title: 'Grades are ready to publish', desc: 'Chemistry Quiz results are ready', time: '2 hr ago', unread: false },
                    { icon: CalendarIcon, iconColor: 'text-emerald-600 bg-emerald-50', title: 'Timetable updated', desc: 'New schedule published for Class 10A', time: '3 hr ago', unread: false },
                  ].map((notif, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-1 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <div className={`w-7 h-7 rounded-lg ${notif.iconColor} flex items-center justify-center shrink-0`}>
                        <notif.icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-[11px] font-bold text-slate-900 dark:text-white truncate">{notif.title}</h4>
                          <div className="flex items-center gap-1 shrink-0">
                            <span className="text-[9px] text-slate-400">{notif.time}</span>
                            {notif.unread && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{notif.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════════ */}
        {/* ── RIGHT COLUMN CONTAINER (3 / 12 COLS) ── */}
        {/* ════════════════════════════════════════════════════════════════════════ */}
        <div className="xl:col-span-3 space-y-5">
          
          {/* 1. Interactive Calendar Widget (May 2026) */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Calendar</h3>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200">
                <ChevronLeft className="w-4 h-4 cursor-pointer text-slate-400 hover:text-slate-800" />
                <span>May 2026</span>
                <ChevronRight className="w-4 h-4 cursor-pointer text-slate-400 hover:text-slate-800" />
              </div>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400">
              <span>SUN</span><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 text-center text-xs font-bold gap-y-1.5">
              {[26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1].map((d, i) => {
                const isCurrentMonth = i >= 5 && i <= 35;
                const isSelected = isCurrentMonth && d === selectedDay;
                const hasDot = isCurrentMonth && [21, 22, 23, 24].includes(d);

                return (
                  <div key={i} className="flex flex-col items-center justify-center">
                    <button
                      onClick={() => isCurrentMonth && setSelectedDay(d)}
                      className={`h-7 w-7 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-[#1D64F2] text-white shadow-sm font-black'
                          : isCurrentMonth
                          ? 'text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                          : 'text-slate-300 dark:text-slate-700 pointer-events-none'
                      }`}
                    >
                      {d}
                    </button>
                    {hasDot && !isSelected && (
                      <span className="w-1 h-1 rounded-full bg-blue-500 mt-0.5" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Today's Schedule Timeline */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Today&apos;s Schedule</h3>
              <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View Timetable</span>
            </div>

            <div className="space-y-3">
              {[
                { time: '08:30 AM\n09:15 AM', class: 'Class 9C - Physics', room: 'Room 204', status: '', activeBorder: false },
                { time: '09:30 AM\n10:15 AM', class: 'Class 10A - Physics', room: 'Room 205', status: 'Now', activeBorder: true },
                { time: '11:15 AM\n12:00 PM', class: 'Class 11B - Physics', room: 'Lab 1', status: '', activeBorder: false },
                { time: '02:00 PM\n02:45 PM', class: 'Class 12A - Physics', room: 'Room 206', status: '', activeBorder: false },
              ].map((s, i) => (
                <div 
                  key={i} 
                  className={`p-3 rounded-2xl flex items-center justify-between transition-all ${
                    s.activeBorder
                      ? 'bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 shadow-sm'
                      : 'bg-slate-50/60 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-8 rounded-full ${s.activeBorder ? 'bg-[#1D64F2]' : 'bg-slate-300 dark:bg-slate-700'}`} />
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block whitespace-pre-line leading-tight">{s.time}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{s.class}</h4>
                      <span className="text-[10px] text-slate-400">{s.room}</span>
                    </div>
                  </div>
                  {s.status === 'Now' && (
                    <span className="px-2.5 py-0.5 bg-[#1D64F2] text-white text-[10px] font-black rounded-lg shadow animate-pulse">
                      Now
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 3. Smart Reminders */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Smart Reminders</h3>
            </div>

            <div className="space-y-2.5">
              {[
                { title: 'Upcoming Lecture', desc: 'Class 10A - Physics in 15 mins', icon: Clock, color: 'text-purple-600 bg-purple-50' },
                { title: 'Pending Evaluations', desc: '12 assignments to grade', icon: FileText, color: 'text-amber-600 bg-amber-50' },
                { title: 'Next Free Slot', desc: 'Today 12:00 PM - 02:00 PM', icon: ShieldCheck, color: 'text-emerald-600 bg-emerald-50' },
              ].map((rem, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${rem.color}`}>
                      <rem.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white">{rem.title}</h4>
                      <p className="text-[10px] text-slate-400">{rem.desc}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </div>
              ))}
            </div>

            <button className="w-full py-2 text-center text-xs font-bold text-[#1D64F2] hover:underline pt-1 cursor-pointer">
              View All Reminders
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
