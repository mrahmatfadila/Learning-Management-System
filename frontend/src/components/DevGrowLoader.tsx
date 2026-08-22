'use client';

import React, { useEffect, useState } from 'react';
import { Code2, Sparkles, Zap, Terminal, Laptop, Cpu } from 'lucide-react';

interface DevGrowLoaderProps {
  message?: string;
  subtitle?: string;
  fullScreen?: boolean;
}

export default function DevGrowLoader({
  message = 'Memuat materi pembelajaran...',
  subtitle = 'Menyiapkan lingkungan belajar & Live Code Sandbox',
  fullScreen = true
}: DevGrowLoaderProps) {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const tips = [
    'Menghubungkan ke server DevGrow...',
    'Menyiapkan kurikulum interaktif & materi...',
    'Mengaktifkan Live Code Sandbox & Runtime...',
    'Memvalidasi data progress belajar...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTipIndex((prev) => (prev + 1) % tips.length);
    }, 2200);
    return () => clearInterval(interval);
  }, [tips.length]);

  const content = (
    <div className="relative flex flex-col items-center justify-center p-8 text-center max-w-md w-full">
      {/* Background Ambient Glow Lights */}
      <div className="absolute -top-16 -left-16 w-56 h-56 bg-indigo-500/20 dark:bg-indigo-500/25 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-cyan-500/20 dark:bg-cyan-500/25 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/15 dark:bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Logo & Animated Ring Container */}
      <div className="relative mb-6">
        {/* Outer Orbiting Dashed Ring */}
        <div className="absolute -inset-4 rounded-full border-2 border-dashed border-indigo-400/40 dark:border-indigo-400/30 animate-spin" style={{ animationDuration: '14s' }} />
        
        {/* Middle Glowing Pulse Ring */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-cyan-400 opacity-60 blur-md animate-pulse" style={{ animationDuration: '2.5s' }} />

        {/* Central Logo Box */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-indigo-400/40 shadow-2xl flex items-center justify-center overflow-hidden group">
          {/* Inner Shimmering Shine */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]" />

          {/* DevGrow Icon */}
          <div className="relative flex items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-0.5 shadow-lg shadow-indigo-500/40 flex items-center justify-center transform group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950/80 backdrop-blur-sm rounded-[14px] flex items-center justify-center">
                <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
              </div>
            </div>
            {/* Sparkle badge floating */}
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-300 text-slate-950 flex items-center justify-center shadow-md animate-bounce" style={{ animationDuration: '2s' }}>
              <Sparkles className="w-3.5 h-3.5 fill-current" />
            </div>
          </div>
        </div>
      </div>

      {/* Brand Title with Gradient Typography */}
      <div className="space-y-1.5 mb-5 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 mb-1">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-[10px] font-black tracking-widest text-indigo-600 dark:text-indigo-400 uppercase">
            DevGrow Learning Platform
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-500 dark:from-indigo-400 dark:via-purple-300 dark:to-cyan-400">
          DevGrow<span className="text-cyan-500 dark:text-cyan-400">.</span>
        </h3>

        <p className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200">
          {message}
        </p>
      </div>

      {/* Sleek Gradient Progress Bar */}
      <div className="w-full max-w-xs bg-slate-200/80 dark:bg-slate-800/80 rounded-full h-1.5 overflow-hidden p-0.5 mb-4 shadow-inner">
        <div 
          className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-[indeterminateProgress_1.8s_infinite_linear]"
          style={{ width: '45%' }}
        />
      </div>

      {/* Dynamic Cycling Tip Text */}
      <div className="h-5 flex items-center justify-center">
        <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-400 transition-all duration-300 animate-fadeIn">
          {tips[currentTipIndex]}
        </p>
      </div>

      {/* Tech Feature Micro-badges */}
      <div className="flex items-center gap-2 mt-6 flex-wrap justify-center">
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-xl shadow-2xs">
          <Zap className="w-3 h-3 text-amber-500" /> Interactive Coding
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-xl shadow-2xs">
          <Terminal className="w-3 h-3 text-indigo-500" /> Live Sandbox
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-xl shadow-2xs">
          <Cpu className="w-3 h-3 text-cyan-500" /> AI Code Assistant
        </span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50/95 dark:bg-[#0b0f19]/95 backdrop-blur-xl transition-all duration-300">
        {content}
      </div>
    );
  }

  return (
    <div className="w-full min-h-[360px] flex items-center justify-center bg-slate-50/50 dark:bg-slate-950/30 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 my-6 backdrop-blur-sm">
      {content}
    </div>
  );
}
