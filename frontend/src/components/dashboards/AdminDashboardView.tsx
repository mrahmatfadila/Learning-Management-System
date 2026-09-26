'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Users, UserPlus, BookOpen, Sparkles, TrendingUp, TrendingDown,
  CheckCircle2, ShieldCheck, Database, Server, Plus, ArrowRight,
  BarChart2, Calendar, Clock, FileText, Bot, PhoneCall, Send,
  Mail, Check, Layers, UserCheck, AlertTriangle, MessageSquare,
  Shield, CheckSquare, ChevronRight, ChevronDown, Bell, CreditCard,
  Building, RefreshCw
} from 'lucide-react';

interface AdminDashboardViewProps {
  user: any;
  modules?: any[];
}

export default function AdminDashboardView({ user, modules = [] }: AdminDashboardViewProps) {
  const router = useRouter();

  // 6 Quick Actions
  const quickActions = [
    { name: 'Add Student', icon: UserPlus, color: 'text-blue-600 bg-blue-50/80 border-blue-100' },
    { name: 'Add Teacher', icon: UserCheck, color: 'text-emerald-600 bg-emerald-50/80 border-emerald-100' },
    { name: 'Create Batch', icon: Users, color: 'text-purple-600 bg-purple-50/80 border-purple-100' },
    { name: 'Manage Courses', icon: BookOpen, color: 'text-amber-600 bg-amber-50/80 border-amber-100', href: '/dashboard/manage-modules' },
    { name: 'Generate Report', icon: FileText, color: 'text-cyan-600 bg-cyan-50/80 border-cyan-100' },
    { name: 'AI Insights', icon: Sparkles, color: 'text-indigo-600 bg-indigo-50/80 border-indigo-100' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 p-4 sm:p-6 lg:p-7 space-y-6 max-w-[1780px] mx-auto font-sans">
      
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── HEADER TITLE ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
          Admin Dashboard
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
          
          {/* ── ROW 1: 5 KEY METRIC KPI CARDS (WITH SPARKLINES) ── */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* 1. Total Students */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Students</span>
                <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">1,248</h3>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  <span>↑ 8.4%</span> <span className="text-slate-400 font-normal">this month</span>
                </div>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-blue-500 stroke-current fill-none">
                <path d="M 0 18 Q 25 15, 50 8 T 100 3" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* 2. Total Teachers */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Total Teachers</span>
                <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">86</h3>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  <span>↑ 6.1%</span> <span className="text-slate-400 font-normal">this month</span>
                </div>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-emerald-500 stroke-current fill-none">
                <path d="M 0 16 Q 30 18, 60 9 T 100 4" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* 3. New Admissions */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">New Admissions</span>
                <div className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 flex items-center justify-center">
                  <UserPlus className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">58</h3>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  <span>↑ 12.3%</span> <span className="text-slate-400 font-normal">this month</span>
                </div>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-purple-500 stroke-current fill-none">
                <path d="M 0 18 Q 30 14, 60 16 T 100 6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* 4. Fee Collection (May) */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Fee Collection (May)</span>
                <div className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 flex items-center justify-center">
                  <CreditCard className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">₹18.75L</h3>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  <span>↑ 15.6%</span> <span className="text-slate-400 font-normal">vs Apr</span>
                </div>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-amber-500 stroke-current fill-none">
                <path d="M 0 17 Q 35 15, 65 6 T 100 2" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

            {/* 5. Pending Fees */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Pending Fees</span>
                <div className="w-8 h-8 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-600 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-none">₹6.42L</h3>
                <div className="flex items-center gap-1 text-[10px] font-bold text-rose-500 mt-1">
                  <span>↓ 5.2%</span> <span className="text-slate-400 font-normal">vs Apr</span>
                </div>
              </div>
              <svg viewBox="0 0 100 20" className="w-full h-5 text-rose-500 stroke-current fill-none">
                <path d="M 0 8 Q 30 12, 60 16 T 100 18" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>

          </div>

          {/* ── ROW 2: QUICK ACTIONS BAR ── */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">Quick Actions</h3>
              <button className="text-xs font-bold text-[#1D64F2] hover:underline flex items-center gap-1 cursor-pointer">
                Customize ⚙
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {quickActions.map((qa, idx) => (
                <button
                  key={idx}
                  onClick={() => qa.href ? router.push(qa.href) : null}
                  className="p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/40 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-all flex flex-col items-center justify-center text-center space-y-2 cursor-pointer group"
                >
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${qa.color} group-hover:scale-105 transition-transform`}>
                    <qa.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200 group-hover:text-[#1D64F2] dark:group-hover:text-blue-400 transition-colors truncate w-full">
                    {qa.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── ROW 3: BATCH MANAGEMENT | COURSE MANAGEMENT | ATTENDANCE & INQUIRIES ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            
            {/* Card 1: Batch Management Overview (4 / 12 Cols) */}
            <div className="lg:col-span-4 bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Batch Management Overview</h3>
                
                {/* Legend */}
                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500 mt-2">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[#1D64F2]" /> Active</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[#38BDF8]" /> Completed</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-sm bg-[#C7D2FE]" /> Upcoming</span>
                </div>

                {/* Grouped Bar Chart */}
                <div className="h-40 flex items-end justify-between gap-2 pt-4 px-1">
                  {[
                    { level: 'Nursery', active: 30, comp: 42, up: 18 },
                    { level: 'Primary', active: 48, comp: 35, up: 22 },
                    { level: 'Middle', active: 42, comp: 38, up: 20 },
                    { level: 'High School', active: 55, comp: 45, up: 28 },
                    { level: 'Senior', active: 50, comp: 38, up: 25 },
                  ].map((b, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className="flex items-end gap-0.5 w-full justify-center h-32">
                        <div className="w-2 bg-[#1D64F2] rounded-t-sm" style={{ height: `${b.active}%` }} />
                        <div className="w-2 bg-[#38BDF8] rounded-t-sm" style={{ height: `${b.comp}%` }} />
                        <div className="w-2 bg-[#C7D2FE] rounded-t-sm" style={{ height: `${b.up}%` }} />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 text-center truncate w-full">{b.level}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Batch Stats */}
              <div className="grid grid-cols-4 gap-1 text-center pt-3 border-t border-slate-100 dark:border-slate-800 text-[10px]">
                <div>
                  <span className="text-slate-400 block text-[9px]">Total</span>
                  <span className="font-black text-slate-900 dark:text-white">42</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">Active</span>
                  <span className="font-black text-slate-900 dark:text-white">28</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">Upcoming</span>
                  <span className="font-black text-slate-900 dark:text-white">8</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[9px]">Completed</span>
                  <span className="font-black text-slate-900 dark:text-white">6</span>
                </div>
              </div>
            </div>

            {/* Card 2: Course Management Table (5 / 12 Cols) */}
            <div className="lg:col-span-5 bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-1">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Course Management</h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="text-[10px] font-extrabold text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-2">
                        <th className="pb-2">Course Name</th>
                        <th className="pb-2">Code</th>
                        <th className="pb-2 text-center">Batches</th>
                        <th className="pb-2 text-center">Students</th>
                        <th className="pb-2 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100/80 dark:divide-slate-800/80">
                      {[
                        { name: 'Mathematics', code: 'MATH101', batches: 6, students: 186, status: 'Active' },
                        { name: 'Physics', code: 'PHYS102', batches: 5, students: 158, status: 'Active' },
                        { name: 'Chemistry', code: 'CHEM103', batches: 4, students: 132, status: 'Active' },
                        { name: 'Biology', code: 'BIO104', batches: 5, students: 143, status: 'Active' },
                        { name: 'English Literature', code: 'ENG105', batches: 4, students: 121, status: 'Active' },
                      ].map((c, i) => (
                        <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                          <td className="py-2.5 font-bold text-slate-900 dark:text-white">{c.name}</td>
                          <td className="py-2.5 text-[10px] font-bold text-slate-400 uppercase">{c.code}</td>
                          <td className="py-2.5 text-center font-bold text-slate-600 dark:text-slate-300">{c.batches}</td>
                          <td className="py-2.5 text-center font-bold text-slate-600 dark:text-slate-300">{c.students}</td>
                          <td className="py-2.5 text-right">
                            <span className="text-[9px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                              {c.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-2 text-center border-t border-slate-100 dark:border-slate-800">
                <button 
                  onClick={() => router.push('/dashboard/manage-modules')}
                  className="text-xs font-bold text-[#1D64F2] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  Manage All Courses <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Card 3: Stack of Staff Attendance & Inquiry/Leads (3 / 12 Cols) */}
            <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
              
              {/* Staff Attendance Overview */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Staff Attendance Overview</h3>
                </div>

                <div className="flex items-center justify-between gap-4 py-1">
                  <div className="relative w-20 h-20 shrink-0">
                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F1F5F9" strokeWidth="4" className="dark:stroke-slate-800" />
                      <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1D64F2" strokeWidth="4" strokeDasharray="92, 100" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-lg font-black text-slate-900 dark:text-white leading-none">92%</span>
                      <span className="text-[8px] text-slate-400 font-bold mt-0.5">Present</span>
                    </div>
                  </div>

                  <div className="space-y-1 text-[11px] font-semibold text-slate-500 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#1D64F2]" /> Present</span>
                      <span className="font-bold text-slate-900 dark:text-white">79 (92%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-slate-300" /> Absent</span>
                      <span className="font-bold text-slate-900 dark:text-white">5 (6%)</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> On Leave</span>
                      <span className="font-bold text-slate-900 dark:text-white">2 (2%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry / Leads Overview */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Inquiry / Leads Overview</h3>
                </div>

                <div className="flex items-center gap-3 text-[10px] font-bold text-slate-500">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#1D64F2]" /> New Inquiries</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Converted</span>
                </div>

                <svg viewBox="0 0 120 40" className="w-full h-10 stroke-current fill-none">
                  {/* Wave 1: New Inquiries */}
                  <path d="M 0 30 Q 20 10, 40 25 T 80 15 T 120 12" stroke="#1D64F2" strokeWidth="2.2" strokeLinecap="round" />
                  {/* Wave 2: Converted */}
                  <path d="M 0 35 Q 20 25, 40 32 T 80 26 T 120 22" stroke="#10B981" strokeWidth="2.2" strokeLinecap="round" />
                </svg>

                <div className="flex justify-between text-[8px] font-bold text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800">
                  <span>19 May</span><span>20 May</span><span>21 May</span><span>22 May</span><span>23 May</span><span>24 May</span><span>25 May</span>
                </div>
              </div>

            </div>

          </div>

          {/* ── ROW 4: AI ADMISSION PREDICTION | AI RISK ALERTS | AI FOLLOW-UP SUGGESTIONS ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
            
            {/* Card 1: AI Admission Prediction */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3.5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">AI Admission Prediction</h3>
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-0.5 cursor-pointer">
                    This Month <ChevronDown className="w-3 h-3" />
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <div>
                    <h4 className="text-3xl font-black text-[#1D64F2] leading-none">72%</h4>
                    <p className="text-[10px] font-bold text-slate-600 dark:text-slate-300 mt-1">High Probability</p>
                    <p className="text-[9px] text-slate-400">Conversion Rate</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-slate-400 block">Predicted Admissions</span>
                    <span className="text-xl font-black text-slate-900 dark:text-white">84</span>
                    <span className="text-[9px] font-bold text-emerald-500 block mt-0.5">● Confidence: High</span>
                  </div>
                </div>

                <p className="text-[10px] text-slate-400 leading-snug mt-3">
                  Based on inquiry trends, follow-ups, and historical conversion data.
                </p>
              </div>

              <button className="w-full py-2 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition-colors cursor-pointer mt-2">
                View Full Prediction Report
              </button>
            </div>

            {/* Card 2: AI Fee Defaulter Risk Alerts */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-rose-500" /> AI Fee Defaulter Risk Alerts
                  </h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="space-y-2 mt-2">
                  {[
                    { name: 'Rohan Kapoor (10B)', risk: 'High Risk', score: '84%', badge: 'text-rose-600 bg-rose-50 border-rose-200', initial: 'RK' },
                    { name: 'Priya Sharma (9A)', risk: 'Medium Risk', score: '67%', badge: 'text-amber-600 bg-amber-50 border-amber-200', initial: 'PS' },
                    { name: 'Arjun Mehta (11A)', risk: 'Medium Risk', score: '56%', badge: 'text-amber-600 bg-amber-50 border-amber-200', initial: 'AM' },
                    { name: 'Sneha Nair (8B)', risk: 'Low Risk', score: '42%', badge: 'text-emerald-600 bg-emerald-50 border-emerald-200', initial: 'SN' },
                  ].map((st, i) => (
                    <div key={i} className="flex items-center justify-between p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-[10px] flex items-center justify-center shrink-0">
                          {st.initial}
                        </div>
                        <div className="min-w-0 truncate">
                          <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{st.name}</h4>
                          <p className="text-[9px] text-slate-400">Risk Score: {st.score}</p>
                        </div>
                      </div>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border shrink-0 ${st.badge}`}>
                        {st.risk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-2 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition-colors cursor-pointer mt-2">
                View All Defaulters
              </button>
            </div>

            {/* Card 3: AI-powered Inquiry Follow-up Suggestions */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">AI-powered Inquiry Follow-up</h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="space-y-2 mt-2">
                  {[
                    { title: 'Call back to Parent of Aarav Singh', desc: 'High priority inquiry', tag: 'Today', tagColor: 'text-amber-700 bg-amber-50 border-amber-200' },
                    { title: 'Send course brochure to Neha Verma', desc: 'Interested in Science stream', tag: 'Today', tagColor: 'text-amber-700 bg-amber-50 border-amber-200' },
                    { title: 'Follow up with Amit Kumar', desc: 'Requested fee details', tag: 'Tomorrow', tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
                    { title: 'Schedule campus visit with Riya Patel', desc: 'Showed interest in admission', tag: 'Tomorrow', tagColor: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-1.5 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                      <div className="flex-1 min-w-0 pr-2">
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{item.title}</h4>
                        <p className="text-[9px] text-slate-400 truncate">{item.desc}</p>
                      </div>
                      <span className={`text-[9px] font-black px-2 py-0.5 rounded-md border shrink-0 ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-2 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition-colors cursor-pointer mt-2">
                Go to AI Follow-up Center
              </button>
            </div>

          </div>

          {/* ── ROW 5: 4-COLUMN BOTTOM GRID (NOTIFS | RECENT ACTIVITY | PARENT COMM | AUTOMATION) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
            
            {/* Card 1: Alerts & Notifications */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Alerts &amp; Notifications</h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="space-y-2.5 mt-2">
                  {[
                    { text: 'Fee payment pending for 42 students', time: '2 min ago', icon: AlertTriangle, iconColor: 'text-rose-500' },
                    { text: '5 inquiries need follow-up today', time: '15 min ago', icon: Clock, iconColor: 'text-amber-500' },
                    { text: 'Exam schedule published for Class 10', time: '1 hour ago', icon: Calendar, iconColor: 'text-indigo-500' },
                    { text: 'Server backup completed successfully', time: '2 hours ago', icon: ShieldCheck, iconColor: 'text-emerald-500' },
                  ].map((n, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <n.icon className={`w-4 h-4 ${n.iconColor} shrink-0 mt-0.5`} />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-900 dark:text-white truncate">{n.text}</p>
                        <span className="text-[9px] text-slate-400">{n.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: Recent Activity */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Recent Activity</h3>
                  <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View All</span>
                </div>

                <div className="space-y-2.5 mt-2">
                  {[
                    { text: 'New student Aarav Singh admitted in Class 6A', author: 'by Ms. Ria • 10 min ago' },
                    { text: 'Fee payment of ₹12,500 received from Priya Sharma', author: 'by System • 25 min ago' },
                    { text: 'Batch 10A timetable updated', author: 'by Mr. John • 1 hour ago' },
                    { text: 'New inquiry received from Neha Verma', author: 'by System • 2 hours ago' },
                  ].map((act, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs">
                      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 font-black text-[9px] flex items-center justify-center shrink-0">
                        ✓
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-slate-900 dark:text-white truncate">{act.text}</p>
                        <span className="text-[9px] text-slate-400">{act.author}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Parent Communication Summary */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Parent Communication</h3>
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-0.5 cursor-pointer">
                    This Month <ChevronDown className="w-3 h-3" />
                  </span>
                </div>

                <div className="space-y-2 text-xs mt-2">
                  {[
                    { label: 'Messages Sent', value: '256', growth: '↑ 18%', color: 'text-blue-600' },
                    { label: 'Messages Delivered', value: '248', growth: '↑ 17%', color: 'text-teal-600' },
                    { label: 'Messages Read', value: '189', growth: '↑ 21%', color: 'text-purple-600' },
                    { label: 'Response Rate', value: '74%', growth: '↑ 12%', color: 'text-amber-600' },
                  ].map((m, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">{m.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-black text-slate-900 dark:text-white">{m.value}</span>
                        <span className="text-[10px] font-bold text-emerald-500">{m.growth}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: Smart Automation Status */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Smart Automation Status</h3>
                </div>

                <div className="space-y-2 mt-2">
                  {[
                    { title: 'AI Attendance Monitoring', desc: 'All systems normal', status: 'Active' },
                    { title: 'AI Fee Reminder', desc: 'Next reminder in 2 hours', status: 'Active' },
                    { title: 'AI Report Generation', desc: 'Reports generated: 12', status: 'Active' },
                    { title: 'AI Chat Assistant', desc: 'Last active: 2 min ago', status: 'Active' },
                  ].map((auto, i) => (
                    <div key={i} className="flex items-center justify-between text-xs">
                      <div className="min-w-0 pr-2">
                        <h4 className="font-bold text-slate-900 dark:text-white truncate">{auto.title}</h4>
                        <span className="text-[9px] text-slate-400 truncate block">{auto.desc}</span>
                      </div>
                      <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full shrink-0">
                        {auto.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="w-full py-1 text-center text-xs font-bold text-[#1D64F2] hover:underline pt-2 cursor-pointer border-t border-slate-100 dark:border-slate-800 mt-1">
                View All Automation Logs
              </button>
            </div>

          </div>

        </div>

        {/* ════════════════════════════════════════════════════════════════════════ */}
        {/* ── RIGHT COLUMN CONTAINER (3 / 12 COLS) ── */}
        {/* ════════════════════════════════════════════════════════════════════════ */}
        <div className="xl:col-span-3 space-y-5">
          
          {/* 1. Today's Schedule Timeline */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">Today&apos;s Schedule</h3>
              <span className="text-xs font-bold text-[#1D64F2] cursor-pointer hover:underline">View Timetable</span>
            </div>

            <div className="space-y-2.5">
              {[
                { time: '08:00 AM', title: 'Class 10A - Mathematics', loc: 'Room 205' },
                { time: '09:00 AM', title: 'Staff Meeting', loc: 'Conference Room' },
                { time: '10:30 AM', title: 'Class 8B - Science', loc: 'Lab 2' },
                { time: '12:00 PM', title: 'Lunch Break', loc: 'Cafeteria' },
                { time: '01:00 PM', title: 'Class 9A - English', loc: 'Room 102' },
                { time: '02:30 PM', title: 'Parent Meeting', loc: 'Admin Office' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-3 p-2 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                  <div className="w-16 shrink-0">
                    <span className="text-[10px] font-extrabold text-slate-400 block">{s.time}</span>
                  </div>
                  <div className="flex-1 min-w-0 border-l-2 border-blue-500 pl-3">
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate">{s.title}</h4>
                    <p className="text-[10px] text-slate-400 truncate">{s.loc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-2.5 bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 text-slate-700 dark:text-slate-300 font-bold text-xs rounded-xl transition-colors flex items-center justify-center cursor-pointer">
              Go to Full Timetable
            </button>
          </div>

          {/* 2. AI Insights of the Day */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-600" /> AI Insights of the Day
              </h3>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              Student performance in Mathematics has improved by <strong className="text-blue-600 font-bold">14%</strong> compared to last month.
            </p>

            <button className="w-full py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 border border-blue-200 text-[#1D64F2] text-xs font-bold rounded-xl transition-colors cursor-pointer">
              View Detailed Insights
            </button>
          </div>

          {/* 3. System Health Widget */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3.5">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-sm text-slate-900 dark:text-white">System Health</h3>
            </div>

            <div className="space-y-3 text-xs">
              {[
                { title: 'Server Status', desc: 'All systems operational', icon: Server, color: 'text-emerald-500' },
                { title: 'Database', desc: 'Optimized', icon: Database, color: 'text-emerald-500' },
                { title: 'Backup', desc: 'Last backup: 02:00 AM', icon: RefreshCw, color: 'text-emerald-500' },
                { title: 'Security', desc: 'No threats detected', icon: ShieldCheck, color: 'text-emerald-500' },
              ].map((sys, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <sys.icon className="w-4 h-4 text-slate-400" />
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-xs">{sys.title}</h4>
                      <p className="text-[10px] text-slate-400">{sys.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black">
                    ✓
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-2 text-center text-xs font-bold text-[#1D64F2] hover:underline pt-1 cursor-pointer">
              View System Status
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
