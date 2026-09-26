'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen, Calendar, Clock, CheckCircle2, AlertCircle, Sparkles,
  TrendingUp, Award, FileText, Download, ChevronRight, MessageSquare,
  ArrowRight, Search, Mic, Send, Bot, Check, Star, DollarSign,
  BarChart2, Zap, Play, HelpCircle, Layers, Shield, Cpu, RefreshCw
} from 'lucide-react';

interface StudentDashboardViewProps {
  user: any;
  modules: any[];
  enrollments: any[];
}

export default function StudentDashboardView({ user, modules, enrollments }: StudentDashboardViewProps) {
  const router = useRouter();
  const userName = user?.name?.split(' ')[0] || 'Aarav';
  const userFullName = user?.name || 'Aarav Sharma';
  const userAvatar = user?.profilePicture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=140&q=80';

  // AI Prompt State
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiThinking, setIsAiThinking] = useState(false);

  const handleAiAsk = (promptText?: string) => {
    const query = promptText || aiQuery;
    if (!query.trim()) return;
    setIsAiThinking(true);
    setAiResponse(null);

    setTimeout(() => {
      setIsAiThinking(false);
      setAiResponse(`EduNova AI: Berikut penjelasan ringkas untuk "${query}". Materi ini berfokus pada konsep dasar, implementasi praktis, dan tips pengerjaan ujian kuis. Simpan ringkasan ini ke catatan belajar Anda.`);
    }, 1000);
  };

  // Subjects Data
  const subjects = [
    { name: 'Physics', teacher: 'Mr. R. Mehta', grade: 'A', score: 88, icon: '⚛️', color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800' },
    { name: 'Chemistry', teacher: 'Ms. P. Sharma', grade: 'A-', score: 85, icon: '🧪', color: 'text-sky-600 bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-800' },
    { name: 'Mathematics', teacher: 'Mr. V. Verma', grade: 'A', score: 90, icon: 'π', color: 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800' },
    { name: 'Biology', teacher: 'Ms. K. Nair', grade: 'B+', score: 78, icon: '🧬', color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800' },
    { name: 'English', teacher: 'Ms. S. Kapoor', grade: 'A-', score: 84, icon: '📖', color: 'text-pink-600 bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-800' },
    { name: 'Computer Sci', teacher: 'Mr. A. Khan', grade: 'A', score: 91, icon: '</>', color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/40 border-teal-200 dark:border-teal-800' },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-[1680px] mx-auto text-slate-800 dark:text-slate-100 font-sans">
      
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── 1. TOP HERO GREETING BANNER & AI PROMPT ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left: Greeting Card with 3D Character */}
        <div className="lg:col-span-7 bg-gradient-to-r from-[#EBF5FB] via-[#F0F8FF] to-[#EBF3FB] dark:from-[#111A2E] dark:via-[#131D33] dark:to-[#17233D] rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-3 max-w-md z-10 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Good morning, {userName}! 🖐️
            </h1>
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Learn today. Lead tomorrow.
            </p>
            
            <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-200/60 dark:border-slate-800 text-xs italic text-slate-600 dark:text-slate-300 relative shadow-sm">
              <span className="text-xl text-teal-600 font-serif leading-none mr-1">&ldquo;</span>
              The beautiful thing about learning is that no one can take it away from you.
              <span className="text-xl text-teal-600 font-serif leading-none ml-1">&rdquo;</span>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-1">
              <span className="px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 text-xs font-bold border border-teal-200 dark:border-teal-800">
                12 subjects
              </span>
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 text-xs font-bold border border-rose-200 dark:border-rose-800">
                5 assignments due
              </span>
            </div>
          </div>

          {/* 3D Student Character Illustration */}
          <div className="relative w-44 h-44 sm:w-52 sm:h-52 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-teal-400/20 rounded-full blur-2xl pointer-events-none" />
            <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-xl" fill="none">
              <circle cx="100" cy="100" r="85" fill="#E0F2FE" />
              {/* Character Body & Hoodie */}
              <path d="M50 170 C50 135 70 125 100 125 C130 125 150 135 150 170 Z" fill="#0284C7" />
              <path d="M85 125 L100 145 L115 125 Z" fill="#FFFFFF" />
              {/* Head */}
              <circle cx="100" cy="85" r="32" fill="#FDE68A" />
              {/* Hair */}
              <path d="M70 75 C70 55 90 45 115 50 C130 55 132 70 130 80 C125 65 110 58 95 62 C80 66 75 75 70 75 Z" fill="#1E293B" />
              {/* Smile & Eyes */}
              <circle cx="90" cy="85" r="3.5" fill="#1E293B" />
              <circle cx="110" cy="85" r="3.5" fill="#1E293B" />
              <path d="M92 98 Q100 106 108 98" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              {/* Binder / Book */}
              <rect x="65" y="135" width="30" height="40" rx="4" fill="#0F172A" transform="rotate(-15 65 135)" />
              <line x1="72" y1="145" x2="88" y2="140" stroke="#38BDF8" strokeWidth="2" />
              {/* Thumbs Up Hand */}
              <circle cx="142" cy="125" r="9" fill="#FDE68A" />
              <rect x="140" y="115" width="5" height="12" rx="2.5" fill="#FDE68A" />
            </svg>
          </div>
        </div>

        {/* Right: Ask EduNova AI Assistant Box */}
        <div className="lg:col-span-5 bg-white dark:bg-[#131827] rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20 flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                Ask EduNova AI <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">Your personal AI study assistant</p>
            </div>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Get instant help with doubts, explanations, summaries, and exam practice.
          </p>

          {/* Search/Ask Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Ask anything..."
              value={aiQuery}
              onChange={(e) => setAiQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAiAsk()}
              className="w-full pl-4 pr-20 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs font-semibold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <button className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg">
                <Mic className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleAiAsk()}
                className="p-1.5 bg-[#0E7A81] hover:bg-[#0B656B] text-white rounded-xl shadow transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* AI Response Bubble */}
          {isAiThinking && (
            <div className="p-3 bg-teal-50 dark:bg-teal-950/30 rounded-2xl text-xs text-teal-700 dark:text-teal-300 font-medium flex items-center gap-2 animate-pulse">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" /> EduNova AI sedang menyusun jawaban...
            </div>
          )}
          {aiResponse && !isAiThinking && (
            <div className="p-3.5 bg-slate-50 dark:bg-slate-900/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 leading-relaxed animate-fadeIn">
              {aiResponse}
            </div>
          )}

          {/* Quick Action Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <button
              onClick={() => handleAiAsk('Explain Physics Chapter 5')}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-[11px] font-bold text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1"
            >
              💡 Explain a topic
            </button>
            <button
              onClick={() => handleAiAsk('Summarize Chemistry Notes')}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-[11px] font-bold text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1"
            >
              📝 Summarize notes
            </button>
            <button
              onClick={() => handleAiAsk('Solve Quadratic Equation')}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-50 dark:hover:bg-teal-950/40 text-[11px] font-bold text-slate-600 dark:text-slate-300 transition-colors flex items-center gap-1"
            >
              ❓ Solve question
            </button>
          </div>
        </div>

      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── 2. TOP 5 KPI METRIC CARDS ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Card 1: Today's Timetable */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Today&apos;s Timetable</span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">6</h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Classes Today</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[10px] font-bold text-blue-600 dark:text-blue-400">
            <span>Next: Physics • 10:30 AM</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Card 2: Attendance */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Attendance</span>
            <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">92%</h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Present Rate</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> This Month ⬆ 4%
          </div>
        </div>

        {/* Card 3: Overall Grade */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Overall Grade</span>
            <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-purple-600 dark:text-purple-400 leading-none">A-</h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Excellent</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-slate-400">
            CGPA: 8.6 / 10.0
          </div>
        </div>

        {/* Card 4: Class Rank */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">Class Rank</span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">3 <span className="text-sm text-slate-400 font-bold">/ 35</span></h3>
            <p className="text-[11px] font-bold text-slate-400 mt-1">Top 10% ⭐</p>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-amber-500">
            Peringkat 3 Kelas 10A
          </div>
        </div>

        {/* Card 5: GPA with Sparkline */}
        <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3 col-span-2 sm:col-span-1">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider">GPA</span>
            <div className="w-8 h-8 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 flex items-center justify-center">
              <BarChart2 className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-none">8.6</h3>
              <p className="text-[10px] font-bold text-slate-400 mt-1">Out of 10</p>
            </div>
            {/* Sparkline Curve */}
            <svg viewBox="0 0 70 30" className="w-16 h-8 text-teal-500 stroke-current fill-none">
              <path d="M 0 25 Q 20 20, 35 12 T 70 5" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] font-bold text-teal-600 dark:text-teal-400">
            Performa Stabil
          </div>
        </div>

      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── 3. "MY SUBJECTS" HORIZONTAL CARDS ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">My Subjects</h2>
          <button className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer">
            View All ({subjects.length})
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
          {subjects.map((sub, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#131827] rounded-3xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-3 hover:scale-[1.02] transition-transform"
            >
              <div className="flex items-start justify-between">
                <div className={`w-9 h-9 rounded-2xl flex items-center justify-center font-bold text-sm border ${sub.color}`}>
                  {sub.icon}
                </div>
                <span className="text-xs font-black text-slate-900 dark:text-white px-2 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800">
                  {sub.grade}
                </span>
              </div>

              <div>
                <h4 className="font-extrabold text-xs text-slate-900 dark:text-white truncate">{sub.name}</h4>
                <p className="text-[10px] text-slate-400 font-medium truncate mt-0.5">{sub.teacher}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mr-2">
                  <div className="bg-teal-500 h-full rounded-full" style={{ width: `${sub.score}%` }} />
                </div>
                <span className="text-[10px] font-black text-teal-600 dark:text-teal-400">{sub.score}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── 4. MAIN CONTENT & RIGHT SIDEBAR GRID ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        
        {/* ── LEFT & CENTER MAIN BODY (8.5/12 COLS) ── */}
        <div className="xl:col-span-8 2xl:col-span-9 space-y-6">
          
          {/* Row A: Homework Donut, Exam Schedule, Study Materials, Fee Reminder */}
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
            
            {/* Homework Overview (Donut Chart) */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider">Homework Overview</h3>
                <span className="text-[10px] text-teal-600 font-bold">View All</span>
              </div>

              <div className="flex items-center justify-center gap-4 py-2">
                {/* SVG Donut Chart */}
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" strokeWidth="4" className="dark:stroke-slate-800" />
                    {/* Completed: 8/14 = 57% (Green) */}
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10B981" strokeWidth="4" strokeDasharray="57, 100" />
                    {/* Pending: 4/14 = 28% (Yellow) */}
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="28, 100" strokeDashoffset="-57" />
                    {/* Overdue: 2/14 = 15% (Red) */}
                    <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#EF4444" strokeWidth="4" strokeDasharray="15, 100" strokeDashoffset="-85" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-black text-slate-900 dark:text-white leading-none">14</span>
                    <span className="text-[9px] text-slate-400 font-bold">Total</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-slate-500 font-semibold">Completed</span>
                    <span className="font-black text-slate-900 dark:text-white ml-auto">8</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="text-slate-500 font-semibold">Pending</span>
                    <span className="font-black text-slate-900 dark:text-white ml-auto">4</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="text-slate-500 font-semibold">Overdue</span>
                    <span className="font-black text-slate-900 dark:text-white ml-auto">2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exam Schedule */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider">Exam Schedule</h3>
                <span className="text-[10px] text-teal-600 font-bold">View Calendar</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { month: 'MAY', day: '24', title: 'Physics Unit Test', time: '10:00 AM - 12:00 PM', room: 'Room 204' },
                  { month: 'MAY', day: '27', title: 'Chemistry Unit Test', time: '10:00 AM - 12:00 PM', room: 'Lab 2' },
                  { month: 'MAY', day: '30', title: 'Maths Unit Test', time: '10:00 AM - 12:00 PM', room: 'Room 205' },
                ].map((ex, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 font-black flex flex-col items-center justify-center shrink-0 border border-blue-100 dark:border-blue-900/40">
                      <span className="text-[8px] leading-none uppercase">{ex.month}</span>
                      <span className="text-sm leading-tight">{ex.day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{ex.title}</h4>
                      <p className="text-[10px] text-slate-400">{ex.time}</p>
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                      {ex.room}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Study Materials */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider">Study Materials</h3>
                <span className="text-[10px] text-teal-600 font-bold">View All</span>
              </div>

              <div className="space-y-2">
                {[
                  { name: 'Physics - Chapter 5 Notes', size: 'PDF • 2.4 MB', color: 'text-rose-500' },
                  { name: 'Maths - Quadratic Equations', size: 'PDF • 1.8 MB', color: 'text-indigo-500' },
                  { name: 'Chemistry - Chemical Bonds', size: 'PDF • 2.1 MB', color: 'text-sky-500' },
                ].map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <FileText className={`w-4 h-4 ${doc.color} shrink-0`} />
                      <div className="truncate">
                        <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 truncate">{doc.name}</h4>
                        <span className="text-[9px] text-slate-400 font-medium">{doc.size}</span>
                      </div>
                    </div>
                    <button className="p-1.5 text-slate-400 hover:text-teal-600 rounded-lg">
                      <Download className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <button className="w-full py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold text-[11px] rounded-xl transition-colors flex items-center justify-center gap-1 cursor-pointer">
                📂 Browse All Materials
              </button>
            </div>

            {/* Fee Reminder Card */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider">Fee Reminder</h3>
                <span className="px-2 py-0.5 bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 text-[9px] font-black rounded-md">
                  5 Days Left
                </span>
              </div>

              <div className="p-4 bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 rounded-2xl space-y-1">
                <span className="text-[10px] text-amber-700 dark:text-amber-400 font-bold uppercase">Term Fee - Q2</span>
                <div className="text-2xl font-black text-slate-900 dark:text-white">₹12,500</div>
                <p className="text-[10px] text-slate-400 font-medium">Due on May 31, 2026</p>
              </div>

              <button className="w-full py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-black text-xs rounded-xl shadow transition-all cursor-pointer">
                Pay Now
              </button>
            </div>

          </div>

          {/* Row B: Announcements, Upcoming Tasks & Monthly Progress Curve */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Announcements & Tasks (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Teacher Announcements */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider">Teacher Announcements</h3>
                  <span className="text-[10px] text-teal-600 font-bold">View All</span>
                </div>

                <div className="space-y-3">
                  {[
                    { teacher: 'Ms. P. Sharma', sub: 'Chemistry', time: '2 hours ago', msg: "Don't forget to submit Lab Record by May 25." },
                    { teacher: 'Mr. V. Verma', sub: 'Mathematics', time: '5 hours ago', msg: 'Extra doubt session on Quadratic Equations tomorrow at 4 PM in Room 205.' },
                    { teacher: 'Ms. S. Kapoor', sub: 'English', time: '1 day ago', msg: 'Bring your novels for the next class discussion.' }
                  ].map((ann, i) => (
                    <div key={i} className="flex items-start gap-3 p-2.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                      <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 font-black flex items-center justify-center text-xs shrink-0">
                        {ann.teacher.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-bold text-slate-900 dark:text-white">{ann.teacher}</span>
                            <span className="text-[9px] px-1.5 py-0.2 bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 rounded font-bold">{ann.sub}</span>
                          </div>
                          <span className="text-[9px] text-slate-400">{ann.time}</span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-snug">{ann.msg}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Tasks */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider">Upcoming Tasks</h3>
                  <span className="text-[10px] text-teal-600 font-bold">View All</span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { title: 'Physics Assignment', desc: 'Chapter 5: Work, Energy & Power', due: 'May 24', prio: 'High', prioColor: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' },
                    { title: 'Maths Problem Set', desc: 'Quadratic Equations (Set 2)', due: 'May 25', prio: 'Medium', prioColor: 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' },
                    { title: 'Chemistry Lab Record', desc: 'Chemical Reactions', due: 'May 26', prio: 'High', prioColor: 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300' },
                    { title: 'English Essay', desc: 'Essay on "My Vision for Tech"', due: 'May 27', prio: 'Low', prioColor: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300' }
                  ].map((task, i) => (
                    <div key={i} className="flex items-center justify-between p-2.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">{task.title}</h4>
                        <p className="text-[10px] text-slate-400">{task.desc}</p>
                      </div>
                      <div className="flex items-center gap-2 text-right">
                        <span className="text-[10px] font-bold text-slate-400">{task.due}</span>
                        <span className={`text-[9px] font-black px-2 py-0.5 rounded-md ${task.prioColor}`}>
                          {task.prio}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Progress Overview Multi-line Chart (6 cols) */}
            <div className="lg:col-span-6 bg-white dark:bg-[#131827] rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Progress Overview</h3>
                  <p className="text-[11px] text-slate-400">Monthly score progression by subject</p>
                </div>
                <span className="text-xs font-bold text-slate-400 px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  This Month ▾
                </span>
              </div>

              {/* Multi-Line Chart SVG */}
              <div className="relative w-full h-56 pt-2">
                <svg viewBox="0 0 500 200" className="w-full h-full">
                  {/* Grid Lines */}
                  <line x1="40" y1="20" x2="480" y2="20" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3" className="dark:stroke-slate-800" />
                  <line x1="40" y1="60" x2="480" y2="60" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3" className="dark:stroke-slate-800" />
                  <line x1="40" y1="100" x2="480" y2="100" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3" className="dark:stroke-slate-800" />
                  <line x1="40" y1="140" x2="480" y2="140" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3" className="dark:stroke-slate-800" />
                  <line x1="40" y1="180" x2="480" y2="180" stroke="#E2E8F0" strokeWidth="1" className="dark:stroke-slate-800" />

                  {/* Y Axis Labels */}
                  <text x="25" y="24" fill="#94A3B8" fontSize="10" textAnchor="end">100</text>
                  <text x="25" y="64" fill="#94A3B8" fontSize="10" textAnchor="end">80</text>
                  <text x="25" y="104" fill="#94A3B8" fontSize="10" textAnchor="end">60</text>
                  <text x="25" y="144" fill="#94A3B8" fontSize="10" textAnchor="end">40</text>

                  {/* Physics Line (Blue) */}
                  <path d="M 60 120 Q 160 80, 260 110 T 460 70" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" />
                  {/* Maths Line (Green) */}
                  <path d="M 60 80 Q 160 40, 260 90 T 460 50" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round" />
                  {/* Chemistry Line (Purple) */}
                  <path d="M 60 140 Q 160 110, 260 130 T 460 90" fill="none" stroke="#8B5CF6" strokeWidth="3" strokeLinecap="round" />
                  {/* Biology Line (Yellow) */}
                  <path d="M 60 160 Q 160 130, 260 140 T 460 100" fill="none" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />

                  {/* X Axis Labels */}
                  <text x="60" y="196" fill="#94A3B8" fontSize="10" textAnchor="middle">May 1</text>
                  <text x="160" y="196" fill="#94A3B8" fontSize="10" textAnchor="middle">May 8</text>
                  <text x="260" y="196" fill="#94A3B8" fontSize="10" textAnchor="middle">May 15</text>
                  <text x="360" y="196" fill="#94A3B8" fontSize="10" textAnchor="middle">May 22</text>
                  <text x="460" y="196" fill="#94A3B8" fontSize="10" textAnchor="middle">May 29</text>
                </svg>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Physics</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Maths</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-purple-500" /> Chemistry</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500" /> Biology</span>
              </div>
            </div>

          </div>

          {/* Row C: AI Recommended Practice Tests & Weak Topic Suggestions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* AI Practice Tests */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-600" /> AI Recommended Practice Tests
                </h3>
                <span className="text-[10px] text-teal-600 font-bold">View All</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { sub: 'Physics', title: 'Work, Energy', count: '20 Qs', icon: '⚛️' },
                  { sub: 'Mathematics', title: 'Quadratic Eq.', count: '25 Qs', icon: 'π' },
                  { sub: 'Chemistry', title: 'Chemical React.', count: '20 Qs', icon: '🧪' }
                ].map((test, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 flex flex-col justify-between space-y-2 text-center">
                    <span className="text-2xl">{test.icon}</span>
                    <div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">{test.sub}</h4>
                      <p className="text-[10px] text-slate-400">{test.count}</p>
                    </div>
                    <button
                      onClick={() => router.push('/dashboard?view=quizizz')}
                      className="w-full py-1.5 bg-[#0E7A81] hover:bg-[#0B656B] text-white text-[10px] font-black rounded-xl shadow cursor-pointer"
                    >
                      Start Test
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Weak Topic Suggestions */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-xs text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-500" /> Weak Topic Suggestions
                </h3>
                <span className="text-[10px] text-teal-600 font-bold">View All</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { sub: 'Physics', topic: 'Rotational Motion', acc: '45%' },
                  { sub: 'Mathematics', topic: 'Quadratic Ineq.', acc: '50%' },
                  { sub: 'Chemistry', topic: 'Stoichiometry', acc: '48%' }
                ].map((weak, i) => (
                  <div key={i} className="p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/30 flex flex-col justify-between space-y-2 text-center">
                    <div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white">{weak.sub}</h4>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold">{weak.topic}</p>
                      <span className="text-[9px] font-black text-rose-600 dark:text-rose-400">Accuracy: {weak.acc}</span>
                    </div>
                    <button
                      onClick={() => handleAiAsk(`Bantu review materi ${weak.sub}: ${weak.topic}`)}
                      className="w-full py-1.5 bg-white dark:bg-slate-800 hover:bg-rose-50 text-rose-700 dark:text-rose-300 text-[10px] font-black rounded-xl border border-rose-200 dark:border-rose-800 shadow-sm cursor-pointer"
                    >
                      Review Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* ── RIGHT SIDEBAR (3.5/12 COLS) ── */}
        <div className="xl:col-span-4 2xl:col-span-3 space-y-6">
          
          {/* 1. Today's Timetable Widget */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Today&apos;s Timetable</h3>
              <span className="text-[11px] font-bold text-teal-600 cursor-pointer">View Full</span>
            </div>

            <div className="space-y-3 relative before:absolute before:left-3.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
              {[
                { time: '08:30 AM', sub: 'Physics', room: 'Room 204', status: 'Completed', color: 'bg-emerald-500' },
                { time: '09:30 AM', sub: 'Mathematics', room: 'Room 205', status: 'Completed', color: 'bg-emerald-500' },
                { time: '10:30 AM', sub: 'Chemistry', room: 'Lab 2', status: 'Now', color: 'bg-blue-600' },
                { time: '11:30 AM', sub: 'English', room: 'Room 203', status: '', color: 'bg-slate-300 dark:bg-slate-700' },
                { time: '12:30 PM', sub: 'Computer Science', room: 'Lab 1', status: '', color: 'bg-slate-300 dark:bg-slate-700' },
                { time: '01:30 PM', sub: 'Biology', room: 'Room 206', status: '', color: 'bg-slate-300 dark:bg-slate-700' },
              ].map((slot, i) => (
                <div key={i} className="flex items-center justify-between pl-8 relative">
                  <div className={`w-2.5 h-2.5 rounded-full ${slot.color} absolute left-2.5`} />
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold block">{slot.time}</span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white">{slot.sub}</h4>
                    <span className="text-[10px] text-slate-400">{slot.room}</span>
                  </div>
                  {slot.status === 'Completed' && (
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">
                      Completed
                    </span>
                  )}
                  {slot.status === 'Now' && (
                    <span className="text-[9px] font-bold text-white bg-blue-600 px-2.5 py-0.5 rounded-md shadow animate-pulse">
                      Now
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 2. My Study Plan Gauge Card */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">My Study Plan</h3>
              <span className="text-[11px] font-bold text-teal-600 cursor-pointer">View Plan</span>
            </div>

            <div className="flex items-center gap-4">
              {/* Circular Gauge */}
              <div className="relative w-16 h-16 shrink-0">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#E2E8F0" strokeWidth="4" className="dark:stroke-slate-800" />
                  <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#0E7A81" strokeWidth="4" strokeDasharray="72, 100" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-black text-xs text-slate-900 dark:text-white">
                  72%
                </div>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Weekly Goal</span>
                <h4 className="text-sm font-black text-slate-900 dark:text-white">18 / 25 hours</h4>
                <p className="text-[10px] text-slate-400">3 days left this week</p>
              </div>
            </div>

            {/* Subject Hour Progress Bars */}
            <div className="space-y-2.5 pt-2 border-t border-slate-100 dark:border-slate-800">
              {[
                { name: 'Study Physics', cur: 6, max: 8, color: 'bg-blue-500' },
                { name: 'Practice Maths', cur: 5, max: 6, color: 'bg-emerald-500' },
                { name: 'Chemistry Revision', cur: 4, max: 5, color: 'bg-purple-500' },
                { name: 'Read English', cur: 3, max: 3, color: 'bg-teal-500' },
              ].map((plan, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-[10px] font-bold text-slate-500">
                    <span>{plan.name}</span>
                    <span>{plan.cur} / {plan.max} hrs</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div className={`${plan.color} h-full rounded-full`} style={{ width: `${(plan.cur / plan.max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. AI Study Assistant Mascot Card */}
          <div className="bg-gradient-to-br from-[#1E1B4B] via-[#1E1435] to-[#2E1065] text-white rounded-3xl p-6 shadow-xl relative overflow-hidden space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <span className="px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 text-[10px] font-black uppercase">
                  AI Study Assistant
                </span>
                <h4 className="font-extrabold text-sm text-white mt-1">Hi {userName}!</h4>
                <p className="text-[11px] text-purple-200/80">I&apos;m here to help you learn better every day.</p>
              </div>

              {/* 3D Robot Mascot */}
              <div className="w-14 h-14 shrink-0">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow animate-bounce">
                  <rect x="25" y="25" width="50" height="42" rx="14" fill="#FFFFFF" />
                  <rect x="33" y="35" width="34" height="22" rx="8" fill="#0F172A" />
                  <circle cx="43" cy="46" r="3.5" fill="#38BDF8" />
                  <circle cx="57" cy="46" r="3.5" fill="#38BDF8" />
                  <line x1="50" y1="12" x2="50" y2="25" stroke="#94A3B8" strokeWidth="3" />
                  <circle cx="50" cy="10" r="4" fill="#F43F5E" />
                </svg>
              </div>
            </div>

            <p className="text-xs text-purple-200/90 leading-snug">
              What would you like to do right now?
            </p>

            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <button onClick={() => handleAiAsk('Explain a Concept')} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-left font-bold transition-colors cursor-pointer">
                💡 Explain a concept
              </button>
              <button onClick={() => handleAiAsk('Solve a Question')} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-left font-bold transition-colors cursor-pointer">
                ✍️ Solve a question
              </button>
              <button onClick={() => handleAiAsk('Create Study Notes')} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-left font-bold transition-colors cursor-pointer">
                📋 Create study notes
              </button>
              <button onClick={() => router.push('/dashboard?view=quizizz')} className="p-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-left font-bold transition-colors cursor-pointer">
                🎯 Quiz me on a topic
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
