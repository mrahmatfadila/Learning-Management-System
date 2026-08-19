'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Zap, Trophy, Flame, Play, Clock, CheckCircle2, XCircle, Award, Sparkles,
  Plus, Trash2, Copy, Check, ChevronRight, RefreshCw, Volume2, VolumeX,
  Users, HelpCircle, FileText, ArrowRight, CornerDownRight, BarChart2, Hash
} from 'lucide-react';

interface QuizizzModuleProps {
  user: any;
}

export default function QuizizzModule({ user }: QuizizzModuleProps) {
  const isInstructor = user?.role?.toUpperCase() === 'INSTRUCTOR' || user?.role?.toUpperCase() === 'ADMIN';

  const [modules, setModules] = useState<any[]>([]);
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [pinInput, setPinInput] = useState('');

  // Instructor Create Quiz Modal
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [quizForm, setQuizForm] = useState({
    title: '',
    description: '',
    moduleId: '',
    timePerQuestion: '20'
  });
  const [questionsForm, setQuestionsForm] = useState<any[]>([
    {
      question: '',
      optionA: '',
      optionB: '',
      optionC: '',
      optionD: '',
      correctOption: 'A',
      explanation: '',
      points: '1000'
    }
  ]);
  const [isSubmittingQuiz, setIsSubmittingQuiz] = useState(false);

  // Instructor Leaderboard Modal
  const [selectedLeaderboardQuiz, setSelectedLeaderboardQuiz] = useState<any>(null);

  // Student Arena Game State
  const [activeQuiz, setActiveQuiz] = useState<any>(null);
  const [gameStep, setGameStep] = useState<'LOBBY' | 'PLAYING' | 'SUMMARY'>('LOBBY');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [timeSpentTotal, setTimeSpentTotal] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Toast / Copy notification
  const [copiedPin, setCopiedPin] = useState<string | null>(null);

  // Fetch quizzes and modules
  const fetchQuizzes = async () => {
    setLoading(true);
    try {
      const [qRes, mRes] = await Promise.all([
        fetch('http://localhost:5000/api/quizizz').catch(() => null),
        fetch('http://localhost:5000/api/modules').catch(() => null)
      ]);
      if (qRes?.ok) setQuizzes(await qRes.json());
      if (mRes?.ok) setModules(await mRes.json());
    } catch (err) {
      console.error('Error fetching Quizizz data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuizzes();
  }, []);

  // Timer Effect for Gameplay Arena
  useEffect(() => {
    let timer: any;
    if (gameStep === 'PLAYING' && !isAnswered && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [gameStep, isAnswered, timeLeft]);

  // Handle Question Time Up
  const handleTimeUp = () => {
    setIsAnswered(true);
    setSelectedOption(null);
    setStreak(0);
  };

  // Instructor: Add Question Field
  const handleAddQuestionField = () => {
    setQuestionsForm([
      ...questionsForm,
      {
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctOption: 'A',
        explanation: '',
        points: '1000'
      }
    ]);
  };

  // Instructor: Remove Question Field
  const handleRemoveQuestionField = (idx: number) => {
    if (questionsForm.length <= 1) return alert('Kuis minimal harus memiliki 1 pertanyaan');
    setQuestionsForm(questionsForm.filter((_, i) => i !== idx));
  };

  // Instructor: Submit New Quiz
  const handleCreateQuiz = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quizForm.title.trim()) return alert('Judul kuis tidak boleh kosong');
    setIsSubmittingQuiz(true);
    try {
      const payload = {
        title: quizForm.title,
        description: quizForm.description,
        moduleId: quizForm.moduleId || null,
        creatorId: user.id,
        timePerQuestion: Number(quizForm.timePerQuestion) || 20,
        questions: questionsForm
      };

      const res = await fetch('http://localhost:5000/api/quizizz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setShowCreateModal(false);
        setQuizForm({ title: '', description: '', moduleId: '', timePerQuestion: '20' });
        setQuestionsForm([{ question: '', optionA: '', optionB: '', optionC: '', optionD: '', correctOption: 'A', explanation: '', points: '1000' }]);
        fetchQuizzes();
      } else {
        const data = await res.json();
        alert(data.message || 'Gagal membuat Quizizz');
      }
    } catch (err) {
      alert('Terjadi kesalahan jaringan');
    } finally {
      setIsSubmittingQuiz(false);
    }
  };

  // Instructor: Delete Quiz
  const handleDeleteQuiz = async (quizId: string) => {
    if (!confirm('Yakin ingin menghapus Quizizz ini beserta seluruh peringkatnya?')) return;
    try {
      const res = await fetch(`http://localhost:5000/api/quizizz/${quizId}`, { method: 'DELETE' });
      if (res.ok) fetchQuizzes();
    } catch (err) {
      alert('Gagal menghapus Quizizz');
    }
  };

  // Copy PIN Code
  const handleCopyPin = (pin: string) => {
    navigator.clipboard.writeText(pin);
    setCopiedPin(pin);
    setTimeout(() => setCopiedPin(null), 2000);
  };

  // Student: Join Quiz by PIN or Card
  const handleStartQuiz = async (quiz: any) => {
    try {
      // Fetch fresh quiz questions
      const res = await fetch(`http://localhost:5000/api/quizizz/${quiz.id}`).catch(() => null);
      if (res?.ok) {
        const freshQuiz = await res.json();
        if (!freshQuiz.questions || freshQuiz.questions.length === 0) {
          return alert('Quizizz ini belum memiliki pertanyaan.');
        }
        setActiveQuiz(freshQuiz);
        setCurrentQuestionIdx(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setTimeLeft(freshQuiz.timePerQuestion || 20);
        setScore(0);
        setStreak(0);
        setMaxStreak(0);
        setCorrectAnswersCount(0);
        setTimeSpentTotal(0);
        setGameStep('PLAYING');
      }
    } catch (err) {
      alert('Gagal memulai Quizizz');
    }
  };

  // Student Join by PIN Input
  const handleOpenLeaderboard = async (quiz: any) => {
    try {
      const res = await fetch(`http://localhost:5000/api/quizizz/${quiz.id}`).catch(() => null);
      if (res?.ok) {
        const fullQuiz = await res.json();
        setSelectedLeaderboardQuiz(fullQuiz);
      } else {
        setSelectedLeaderboardQuiz(quiz);
      }
    } catch (err) {
      setSelectedLeaderboardQuiz(quiz);
    }
  };

  // Student Join by PIN Input
  const handleJoinByPin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pinInput.trim().toUpperCase();
    const found = quizzes.find(q => q.pinCode.toUpperCase() === cleanPin || q.pinCode.replace('QZ-', '') === cleanPin);
    if (!found) {
      return alert('Kode PIN Quizizz tidak ditemukan. Periksa kembali PIN Anda.');
    }
    handleStartQuiz(found);
  };

  // Student: Select Answer Choice
  const handleAnswerOption = (option: 'A' | 'B' | 'C' | 'D') => {
    if (isAnswered) return;
    setSelectedOption(option);
    setIsAnswered(true);

    const currentQ = activeQuiz.questions[currentQuestionIdx];
    const isCorrect = option === currentQ.correctOption;
    const timeSpentOnQuestion = (activeQuiz.timePerQuestion || 20) - timeLeft;
    setTimeSpentTotal(prev => prev + timeSpentOnQuestion);

    if (isCorrect) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak > maxStreak) setMaxStreak(newStreak);
      setCorrectAnswersCount(prev => prev + 1);

      // Calculate speed score: Base Points + Speed Bonus + Streak Bonus
      const totalTime = activeQuiz.timePerQuestion || 20;
      const speedBonus = Math.floor((timeLeft / totalTime) * 500);
      const streakBonus = newStreak * 100;
      const earned = (currentQ.points || 1000) + speedBonus + streakBonus;

      setScore(prev => prev + earned);
    } else {
      setStreak(0);
    }
  };

  // Student: Next Question or Finish
  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 < activeQuiz.questions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(activeQuiz.timePerQuestion || 20);
    } else {
      // Quiz Finished! Submit results to backend
      finishQuizGame();
    }
  };

  // Finish Game & Post Attempt to Server
  const finishQuizGame = async () => {
    const totalQ = activeQuiz.questions.length;
    const accuracyPct = Math.round((correctAnswersCount / totalQ) * 100);
    const avgTimeSec = Math.round((timeSpentTotal / totalQ) * 10) / 10;

    try {
      await fetch('http://localhost:5000/api/quizizz/attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quizizzId: activeQuiz.id,
          studentId: user.id,
          totalScore: score,
          correctCount: correctAnswersCount,
          totalQuestions: totalQ,
          accuracyPct,
          maxStreak,
          avgTimeSeconds: avgTimeSec
        })
      });
    } catch (err) {
      console.error('Error submitting quizizz attempt', err);
    }

    setGameStep('SUMMARY');
  };

  // ──────────────────────────────────────────────────────────────────────────
  // ── RENDER 1: GAME PLAYING ARENA ──
  // ──────────────────────────────────────────────────────────────────────────
  if (gameStep === 'PLAYING' && activeQuiz) {
    const currentQ = activeQuiz.questions[currentQuestionIdx];
    const totalQ = activeQuiz.questions.length;
    const progressPct = ((currentQuestionIdx + 1) / totalQ) * 100;
    const timeTotal = activeQuiz.timePerQuestion || 20;
    const timePct = (timeLeft / timeTotal) * 100;

    const optionConfig = [
      { key: 'A', text: currentQ.optionA, bg: 'bg-rose-500 hover:bg-rose-600 border-rose-600', textCol: 'text-white' },
      { key: 'B', text: currentQ.optionB, bg: 'bg-sky-500 hover:bg-sky-600 border-sky-600', textCol: 'text-white' },
      { key: 'C', text: currentQ.optionC, bg: 'bg-amber-500 hover:bg-amber-600 border-amber-600', textCol: 'text-white' },
      { key: 'D', text: currentQ.optionD, bg: 'bg-emerald-500 hover:bg-emerald-600 border-emerald-600', textCol: 'text-white' }
    ];

    return (
      <div className="min-h-screen bg-[#2c0e29] text-white flex flex-col justify-between p-4 md:p-8 relative overflow-hidden font-sans">
        {/* Background glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Arena Header Bar */}
        <div className="relative z-10 flex items-center justify-between bg-[#3d1436]/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-purple-500/20 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-black rounded-xl border border-purple-500/30">
              Soal {currentQuestionIdx + 1} / {totalQ}
            </span>
            <div className="w-32 bg-purple-950 rounded-full h-2 overflow-hidden hidden sm:block">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 h-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Streak Counter */}
            {streak > 0 && (
              <div className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-xl text-xs font-black animate-bounce">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{streak}x Streak!</span>
              </div>
            )}

            {/* Current Score Display */}
            <div className="bg-purple-900/60 px-4 py-1.5 rounded-xl border border-purple-500/30 text-right">
              <span className="text-[10px] text-purple-300 uppercase font-black tracking-wider block leading-none">Skor</span>
              <span className="text-lg font-black text-amber-400 tracking-tight">{score} Pts</span>
            </div>

            <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 bg-purple-900/50 hover:bg-purple-800/60 rounded-xl text-purple-300">
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Question & Timer Bar */}
        <div className="relative z-10 max-w-4xl mx-auto w-full my-auto py-6 space-y-6">
          {/* Animated Time Bar */}
          <div className="w-full bg-purple-950/80 rounded-full h-3 p-0.5 border border-purple-500/30 overflow-hidden shadow-inner">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                timeLeft <= 5 ? 'bg-rose-500 animate-pulse' : 'bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400'
              }`}
              style={{ width: `${timePct}%` }}
            />
          </div>

          {/* Question Text Box */}
          <div className="bg-[#3d1436]/90 border border-purple-500/30 rounded-3xl p-6 md:p-10 shadow-2xl text-center backdrop-blur-md relative group">
            <span className="text-xs font-black text-purple-300 uppercase tracking-widest bg-purple-900/50 px-3 py-1 rounded-full border border-purple-500/30 mb-4 inline-block">
              {activeQuiz.title}
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white leading-relaxed tracking-tight">
              {currentQ.question}
            </h2>
          </div>

          {/* Answer Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {optionConfig.map(opt => {
              const isThisSelected = selectedOption === opt.key;
              const isCorrectAnswer = opt.key === currentQ.correctOption;

              let buttonStyle = `${opt.bg} border-b-4 text-white shadow-lg transform active:scale-95 transition-all`;
              if (isAnswered) {
                if (isCorrectAnswer) {
                  buttonStyle = 'bg-emerald-600 border-emerald-700 text-white ring-4 ring-emerald-400/50 scale-[1.02] shadow-xl';
                } else if (isThisSelected && !isCorrectAnswer) {
                  buttonStyle = 'bg-rose-600 border-rose-700 text-white opacity-90 scale-95';
                } else {
                  buttonStyle = 'bg-purple-950/40 border-purple-900 text-purple-400 opacity-40 cursor-not-allowed';
                }
              }

              return (
                <button
                  key={opt.key}
                  disabled={isAnswered}
                  onClick={() => handleAnswerOption(opt.key as any)}
                  className={`p-5 rounded-2xl flex items-center gap-4 text-left cursor-pointer text-sm font-black transition-all ${buttonStyle}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-sm font-black shrink-0">
                    {opt.key}
                  </div>
                  <span className="flex-1 text-sm md:text-base leading-snug">{opt.text}</span>
                  {isAnswered && isCorrectAnswer && <CheckCircle2 className="w-6 h-6 text-white shrink-0 animate-bounce" />}
                  {isAnswered && isThisSelected && !isCorrectAnswer && <XCircle className="w-6 h-6 text-white shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Feedback & Next Button Footer */}
          {isAnswered && (
            <div className="mt-6 p-5 bg-[#3d1436] rounded-2xl border border-purple-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 animate-scaleIn">
              <div className="flex items-center gap-3">
                {selectedOption === currentQ.correctOption ? (
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center">
                    <XCircle className="w-6 h-6" />
                  </div>
                )}
                <div>
                  <h4 className="font-black text-sm text-white">
                    {selectedOption === currentQ.correctOption ? 'Jawaban Benar! 🎉' : 'Jawaban Kurang Tepat!'}
                  </h4>
                  <p className="text-xs text-purple-300 mt-0.5">
                    {currentQ.explanation || (selectedOption === currentQ.correctOption ? 'Bagus sekali, pertahankan kecepatannya!' : `Jawaban yang benar adalah Opsi ${currentQ.correctOption}`)}
                  </p>
                </div>
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
              >
                {currentQuestionIdx + 1 < totalQ ? 'Soal Berikutnya →' : 'Lihat Peringkat Akhir 🏆'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // ── RENDER 2: POST-GAME LEADERBOARD SUMMARY PODIUM ──
  // ──────────────────────────────────────────────────────────────────────────
  if (gameStep === 'SUMMARY' && activeQuiz) {
    const totalQ = activeQuiz.questions.length;
    const accuracyPct = Math.round((correctAnswersCount / totalQ) * 100);

    return (
      <div className="min-h-screen bg-[#2c0e29] text-white p-4 md:p-8 flex flex-col justify-center items-center relative overflow-hidden font-sans">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-2xl w-full bg-[#3d1436]/90 border border-purple-500/30 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-md text-center space-y-6 relative z-10 animate-scaleIn">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30 animate-bounce">
            <Trophy className="w-10 h-10 text-slate-900" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-white">Quizizz Selesai! 🎉</h1>
            <p className="text-purple-300 text-xs mt-1">{activeQuiz.title}</p>
          </div>

          {/* Score Podium Card */}
          <div className="bg-purple-950/60 rounded-2xl p-6 border border-purple-500/30 grid grid-cols-3 gap-4">
            <div>
              <span className="text-[10px] text-purple-300 uppercase font-black block">Total Skor</span>
              <span className="text-2xl font-black text-amber-400 mt-1 block">{score}</span>
            </div>
            <div>
              <span className="text-[10px] text-purple-300 uppercase font-black block">Akurasi</span>
              <span className="text-2xl font-black text-emerald-400 mt-1 block">{accuracyPct}%</span>
            </div>
            <div>
              <span className="text-[10px] text-purple-300 uppercase font-black block">Max Streak</span>
              <span className="text-2xl font-black text-pink-400 mt-1 block">🔥 {maxStreak}x</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setGameStep('LOBBY')}
              className="flex-1 py-3 bg-purple-900/60 hover:bg-purple-800/80 text-white font-black rounded-xl text-xs border border-purple-500/30 transition-all cursor-pointer"
            >
              Kembali ke Lobby
            </button>
            <button
              onClick={() => handleStartQuiz(activeQuiz)}
              className="flex-1 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black rounded-xl text-xs shadow-lg transition-all cursor-pointer"
            >
              Main Lagi 🔄
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // ── RENDER 3: MAIN LOBBY & INSTRUCTOR DASHBOARD ──
  // ──────────────────────────────────────────────────────────────────────────
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans">
      {/* ── TOP HERO BANNER (Quizizz Theme: Deep Purple #3d1436) ── */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2c0e29] via-[#461a42] to-[#1e081c] p-6 md:p-8 text-white shadow-2xl border border-purple-900/40">
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-black rounded-full border border-purple-500/30 flex items-center gap-1.5 backdrop-blur-sm">
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Quizizz Gamified Learning Platform
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white flex items-center gap-2.5">
              Quizizz Arena ⚡
            </h1>
            <p className="text-xs md:text-sm text-purple-200/80 mt-1 max-w-2xl leading-relaxed">
              Jawab soal kuis interaktif dengan skor kecepatan, bonus streak, dan peringkat kelas real-time!
            </p>
          </div>

          {isInstructor && (
            <button
              onClick={() => setShowCreateModal(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-black rounded-2xl transition-all shadow-lg shadow-purple-500/30 text-xs md:text-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" /> Buat Quizizz Baru
            </button>
          )}
        </div>
      </div>

      {/* ── STUDENT QUICK JOIN BY PIN BANNER ── */}
      {!isInstructor && (
        <div className="bg-gradient-to-r from-[#3d1436] to-[#2c0e29] p-6 rounded-3xl border border-purple-500/30 shadow-lg text-white">
          <form onSubmit={handleJoinByPin} className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 text-amber-400 flex items-center justify-center font-black shrink-0">
                <Hash className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-black text-sm text-white">Punya Kode PIN Game?</h3>
                <p className="text-xs text-purple-300">Masukkan 6-digit kode PIN Quizizz yang diberikan instruktur Anda</p>
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <input
                type="text"
                placeholder="Contoh: QZ-8492"
                value={pinInput}
                onChange={e => setPinInput(e.target.value)}
                className="px-4 py-2.5 rounded-xl bg-purple-950/80 border border-purple-500/40 text-white text-xs font-black tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-purple-400 placeholder:text-purple-400/60 uppercase"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600 text-slate-950 font-black rounded-xl text-xs shadow-md shrink-0 cursor-pointer"
              >
                Masuk Arena 🚀
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── QUIZ LIST CARDS ── */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-black text-slate-800 dark:text-white text-lg flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-500 fill-purple-500" /> Daftar Quizizz Aktif
          </h2>
          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
            {quizzes.length} Quizizz
          </span>
        </div>

        {loading ? (
          <div className="py-20 text-center text-slate-400">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-purple-500 mb-2" />
            <p className="text-xs font-bold">Memuat Quizizz...</p>
          </div>
        ) : quizzes.length === 0 ? (
          <div className="bg-white dark:bg-[#0c0e18] p-12 rounded-3xl border border-slate-200 dark:border-slate-800 text-center">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-3" />
            <h3 className="font-black text-slate-800 dark:text-white text-base">Belum Ada Quizizz</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
              {isInstructor ? 'Klik tombol "Buat Quizizz Baru" di atas untuk menambahkan kuis interaktif.' : 'Belum ada kuis yang diterbitkan oleh instruktur.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {quizzes.map((quiz: any) => (
              <div
                key={quiz.id}
                className="bg-white dark:bg-[#0c0e18] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group relative"
              >
                {/* Quiz Header Gradient */}
                <div className="bg-gradient-to-r from-[#2c0e29] to-[#3d1436] p-5 text-white relative">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/30 text-purple-200 text-[10px] font-black tracking-wider uppercase border border-purple-400/30">
                      {quiz.module?.category || 'Umum'}
                    </span>
                    <button
                      onClick={() => handleCopyPin(quiz.pinCode)}
                      className="px-2.5 py-1 bg-white/10 hover:bg-white/20 text-amber-300 rounded-lg text-[11px] font-black flex items-center gap-1 transition-colors"
                      title="Salin Kode PIN"
                    >
                      <Hash className="w-3 h-3" /> {quiz.pinCode}
                      {copiedPin === quiz.pinCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  <h3 className="font-black text-white text-base leading-snug line-clamp-1">{quiz.title}</h3>
                  <p className="text-purple-200/80 text-xs mt-1 line-clamp-2">{quiz.description || 'Kuis interaktif Quizizz.'}</p>
                </div>

                {/* Body Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-500 dark:text-slate-400">
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-purple-500" />
                      <span>{quiz._count?.questions || quiz.questions?.length || 0} Soal</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-900/60 p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span>{quiz.timePerQuestion || 20} Detik/Soal</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                      <Users className="w-3.5 h-3.5 text-indigo-500" />
                      <span className="font-semibold">{quiz._count?.attempts || 0} Kali Dimainkan</span>
                    </div>

                    {isInstructor && (
                      <button
                        onClick={() => handleDeleteQuiz(quiz.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 rounded-lg transition-colors"
                        title="Hapus Quizizz"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {/* Play / Leaderboard Action Button */}
                  {!isInstructor ? (
                    <button
                      onClick={() => handleStartQuiz(quiz)}
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black rounded-xl text-xs shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <Play className="w-4 h-4 fill-white" /> Mainkan Sekarang
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOpenLeaderboard(quiz)}
                      className="w-full py-2.5 bg-slate-100 dark:bg-slate-800 hover:bg-purple-50 dark:hover:bg-purple-950/40 text-purple-600 dark:text-purple-400 font-extrabold rounded-xl text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Trophy className="w-4 h-4" /> Lihat Peringkat Siswa
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL: CREATE QUIZIZZ (INSTRUCTOR) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/70 dark:bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-3xl shadow-2xl border border-slate-100 dark:border-purple-900/40 overflow-hidden animate-scaleIn flex flex-col max-h-[90vh]">
            {/* Modal Header */}
            <div className="p-6 border-b border-purple-900/30 flex items-center justify-between bg-gradient-to-r from-[#2c0e29] via-[#3d1436] to-[#1e081c] text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center font-black shadow-lg">
                  <Zap className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Studio Pembuat Quizizz ⚡</h3>
                  <p className="text-xs text-purple-200/80 mt-0.5">Susun kuis interaktif pilihan ganda dengan skor kecepatan & streak</p>
                </div>
              </div>
              <button onClick={() => setShowCreateModal(false)} className="p-2 hover:bg-white/10 text-purple-300 hover:text-white rounded-xl transition-colors cursor-pointer">
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateQuiz} className="p-6 space-y-5 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-[#0d101d] p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div>
                  <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Judul Quizizz</label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: Kuis Kilat HTML5 & Web Fundamentals ⚡"
                    value={quizForm.title}
                    onChange={e => setQuizForm({ ...quizForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-white text-xs font-bold focus:ring-2 focus:ring-purple-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Pilih Modul Pembelajaran</label>
                  <select
                    value={quizForm.moduleId}
                    onChange={e => setQuizForm({ ...quizForm, moduleId: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-white text-xs font-bold focus:ring-2 focus:ring-purple-500 focus:outline-none cursor-pointer"
                  >
                    <option value="" className="bg-white dark:bg-[#0c0e18]">-- Semua Modul / Kuis Umum --</option>
                    {modules.map(m => (
                      <option key={m.id} value={m.id} className="bg-white dark:bg-[#0c0e18]">
                        {m.title} ({m.category || 'General'})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div>
                    <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Waktu Per Soal (Timer)</label>
                    <select
                      value={quizForm.timePerQuestion}
                      onChange={e => setQuizForm({ ...quizForm, timePerQuestion: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-white text-xs font-bold focus:ring-2 focus:ring-purple-500 focus:outline-none cursor-pointer"
                    >
                      <option value="10">⚡ 10 Detik (Super Cepat & Menantang)</option>
                      <option value="15">⏱️ 15 Detik (Cepat & Fokus)</option>
                      <option value="20">⏱️ 20 Detik (Standar Rekomendasi)</option>
                      <option value="30">⏳ 30 Detik (Sedang)</option>
                      <option value="60">🐢 60 Detik (Santai)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Deskripsi / Petunjuk Kuis</label>
                    <input
                      type="text"
                      placeholder="Contoh: Uji wawasan HTML5 dan elemen semantic..."
                      value={quizForm.description}
                      onChange={e => setQuizForm({ ...quizForm, description: e.target.value })}
                      className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-white text-xs font-bold focus:ring-2 focus:ring-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Questions List Builder */}
              <div className="space-y-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-xs text-purple-600 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
                    <HelpCircle className="w-4 h-4" /> Daftar Soal Kuis ({questionsForm.length})
                  </h4>
                  <button
                    type="button"
                    onClick={handleAddQuestionField}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl text-xs font-black transition-all shadow-md flex items-center gap-1.5 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" /> Tambah Soal Baru
                  </button>
                </div>

                {questionsForm.map((q, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 dark:bg-[#0d101d] rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm relative">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                      <span className="text-xs font-black text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/60 px-3 py-1 rounded-full uppercase tracking-wider border border-purple-200 dark:border-purple-900/40">
                        Pertanyaan #{idx + 1}
                      </span>
                      {questionsForm.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveQuestionField(idx)}
                          className="text-xs font-bold text-rose-500 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 px-2.5 py-1 rounded-lg transition-colors"
                        >
                          ✕ Hapus Soal Ini
                        </button>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Teks Pertanyaan</label>
                      <textarea
                        required
                        rows={2}
                        placeholder="Contoh: Tag manakah yang digunakan untuk mendefinisikan judul utama paling penting dalam HTML?"
                        value={q.question}
                        onChange={e => {
                          const updated = [...questionsForm];
                          updated[idx].question = e.target.value;
                          setQuestionsForm(updated);
                        }}
                        className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-[#0c0e18] text-xs font-bold text-slate-800 dark:text-white focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none"
                      />
                    </div>

                    {/* 4 Quizizz Color Option Input Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Opsi A - Red */}
                      <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-2xl">
                        <span className="text-[10px] font-black text-rose-500 uppercase tracking-wider block mb-1">Opsi A (Merah)</span>
                        <input
                          required
                          type="text"
                          placeholder="Pilihan A"
                          value={q.optionA}
                          onChange={e => { const u = [...questionsForm]; u[idx].optionA = e.target.value; setQuestionsForm(u); }}
                          className="w-full px-3 py-2 border border-rose-200 dark:border-rose-900/50 rounded-xl bg-white dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-white"
                        />
                      </div>

                      {/* Opsi B - Sky Blue */}
                      <div className="p-3 bg-sky-500/10 border border-sky-500/30 rounded-2xl">
                        <span className="text-[10px] font-black text-sky-500 uppercase tracking-wider block mb-1">Opsi B (Biru)</span>
                        <input
                          required
                          type="text"
                          placeholder="Pilihan B"
                          value={q.optionB}
                          onChange={e => { const u = [...questionsForm]; u[idx].optionB = e.target.value; setQuestionsForm(u); }}
                          className="w-full px-3 py-2 border border-sky-200 dark:border-sky-900/50 rounded-xl bg-white dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-white"
                        />
                      </div>

                      {/* Opsi C - Amber Yellow */}
                      <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-2xl">
                        <span className="text-[10px] font-black text-amber-500 uppercase tracking-wider block mb-1">Opsi C (Kuning)</span>
                        <input
                          required
                          type="text"
                          placeholder="Pilihan C"
                          value={q.optionC}
                          onChange={e => { const u = [...questionsForm]; u[idx].optionC = e.target.value; setQuestionsForm(u); }}
                          className="w-full px-3 py-2 border border-amber-200 dark:border-amber-900/50 rounded-xl bg-white dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-white"
                        />
                      </div>

                      {/* Opsi D - Emerald Green */}
                      <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl">
                        <span className="text-[10px] font-black text-emerald-500 uppercase tracking-wider block mb-1">Opsi D (Hijau)</span>
                        <input
                          required
                          type="text"
                          placeholder="Pilihan D"
                          value={q.optionD}
                          onChange={e => { const u = [...questionsForm]; u[idx].optionD = e.target.value; setQuestionsForm(u); }}
                          className="w-full px-3 py-2 border border-emerald-200 dark:border-emerald-900/50 rounded-xl bg-white dark:bg-slate-900 text-xs font-bold text-slate-800 dark:text-white"
                        />
                      </div>
                    </div>

                    {/* Correct Option Selector */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-black text-slate-700 dark:text-slate-300">Pilih Jawaban Benar:</span>
                        <div className="flex items-center gap-1.5">
                          {['A', 'B', 'C', 'D'].map(optKey => (
                            <button
                              key={optKey}
                              type="button"
                              onClick={() => { const u = [...questionsForm]; u[idx].correctOption = optKey; setQuestionsForm(u); }}
                              className={`w-9 h-9 rounded-xl text-xs font-black transition-all cursor-pointer ${
                                q.correctOption === optKey
                                  ? optKey === 'A' ? 'bg-rose-500 text-white ring-2 ring-rose-400 shadow-md scale-105'
                                  : optKey === 'B' ? 'bg-sky-500 text-white ring-2 ring-sky-400 shadow-md scale-105'
                                  : optKey === 'C' ? 'bg-amber-500 text-white ring-2 ring-amber-400 shadow-md scale-105'
                                  : 'bg-emerald-500 text-white ring-2 ring-emerald-400 shadow-md scale-105'
                                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white'
                              }`}
                            >
                              {optKey}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
                <button type="button" onClick={() => setShowCreateModal(false)} className="px-5 py-2.5 text-xs font-bold text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">Batal</button>
                <button
                  type="submit"
                  disabled={isSubmittingQuiz}
                  className="px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 hover:from-purple-700 hover:to-amber-600 text-white rounded-xl text-xs font-black shadow-lg shadow-purple-500/30 disabled:opacity-60 cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  {isSubmittingQuiz ? 'Menerbitkan...' : 'Terbitkan Quizizz Sekarang 🚀'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL: INSTRUCTOR LEADERBOARD MONITOR ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {selectedLeaderboardQuiz && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-scaleIn">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-gradient-to-r from-purple-900 to-pink-900 text-white">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-white">Peringkat Siswa — {selectedLeaderboardQuiz.title}</h3>
                  <p className="text-xs text-purple-200/80">Kode PIN: {selectedLeaderboardQuiz.pinCode}</p>
                </div>
              </div>
              <button onClick={() => setSelectedLeaderboardQuiz(null)} className="p-2 text-white/80 hover:text-white rounded-xl">
                ✕
              </button>
            </div>

            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-3">
              {(!selectedLeaderboardQuiz.attempts || selectedLeaderboardQuiz.attempts.length === 0) ? (
                <div className="text-center py-8 text-slate-400 text-xs font-bold">
                  Belum ada siswa yang memainkan Quizizz ini.
                </div>
              ) : (
                selectedLeaderboardQuiz.attempts.map((att: any, idx: number) => {
                  const studentUser = att.student || {};
                  return (
                    <div key={att.id || idx} className="flex items-center justify-between p-3.5 bg-slate-50 dark:bg-[#0d101d] rounded-2xl border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${
                          idx === 0 ? 'bg-amber-400 text-slate-950 shadow-md' :
                          idx === 1 ? 'bg-slate-300 text-slate-900' :
                          idx === 2 ? 'bg-amber-700 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          #{idx + 1}
                        </div>
                        <div>
                          <div className="font-extrabold text-xs text-slate-800 dark:text-white">
                            {studentUser.name || 'Siswa'}
                          </div>
                          <div className="text-[11px] text-slate-400">Akurasi: {att.accuracyPct}% • Streak: {att.maxStreak}x</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-black text-amber-600 dark:text-amber-400 block">{att.totalScore} Pts</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
              <button onClick={() => setSelectedLeaderboardQuiz(null)} className="px-5 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl text-xs">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
