'use client';

import React, { useState, useEffect, useMemo } from 'react';
import {
  Zap, Trophy, Flame, Play, Clock, CheckCircle2, XCircle, Award, Sparkles,
  Plus, Trash2, Copy, Check, ChevronRight, RefreshCw, Volume2, VolumeX,
  Users, HelpCircle, FileText, ArrowRight, CornerDownRight, BarChart2, Hash,
  Search, Shield, Star, Swords, Gift, Target, Gamepad2, MoreHorizontal,
  TrendingUp, CheckCircle, Crown, Bell, Send, UserCheck, ChevronDown, BookOpen,
  Code2, Database, Terminal, Cpu, Info, History, ArrowUpRight, Lock, Unlock
} from 'lucide-react';

import { jsLessonsData } from '@/data/jsCourseData';
import { phpLessonsData } from '@/data/phpCourseData';
import { gitLessonsData } from '@/data/gitCourseData';

interface QuizizzModuleProps {
  user: any;
}

// ─────────────────────────────────────────────────────────────────────────────
// ── RANK TIERS DEFINITION & PROGRESSION SYSTEM ────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
export interface RankTierInfo {
  tier: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'MASTER' | 'GRAND MASTER';
  title: string;
  minPoints: number;
  maxPoints: number;
  textColor: string;
  badgeGradient: string;
  bgLight: string;
  borderColor: string;
  accentColor: string;
  icon: string;
  description: string;
  perks: string;
}

export const RANK_TIERS: RankTierInfo[] = [
  {
    tier: 'BRONZE',
    title: 'Bronze Novice',
    minPoints: 0,
    maxPoints: 1499,
    textColor: 'text-amber-700 dark:text-amber-600',
    badgeGradient: 'from-[#8B4513] via-[#A0522D] to-[#CD853F]',
    bgLight: 'bg-amber-50 dark:bg-amber-950/30',
    borderColor: 'border-amber-700/30',
    accentColor: '#8B4513',
    icon: '🥉',
    description: 'Pemula dalam pemrograman, mulai mengumpulkan poin dari kuis dasar.',
    perks: 'Akses Kuis Dasar'
  },
  {
    tier: 'SILVER',
    title: 'Silver Challenger',
    minPoints: 1500,
    maxPoints: 3499,
    textColor: 'text-slate-500 dark:text-slate-300',
    badgeGradient: 'from-slate-400 via-slate-300 to-slate-500',
    bgLight: 'bg-slate-100 dark:bg-slate-800/50',
    borderColor: 'border-slate-400/40',
    accentColor: '#94A3B8',
    icon: '🥈',
    description: 'Memahami dasar logika kode dan aktif menyelesaikan kuis modul.',
    perks: 'Badge Profil Silver'
  },
  {
    tier: 'GOLD',
    title: 'Gold Warrior',
    minPoints: 3500,
    maxPoints: 6499,
    textColor: 'text-amber-500 dark:text-amber-400',
    badgeGradient: 'from-yellow-400 via-amber-500 to-yellow-600',
    bgLight: 'bg-amber-50 dark:bg-amber-950/40',
    borderColor: 'border-amber-400/40',
    accentColor: '#F59E0B',
    icon: '🥇',
    description: 'Terampil menyelesaikan kuis dengan akurasi dan kecepatan tinggi.',
    perks: 'Akses Duel 1v1 Arena'
  },
  {
    tier: 'PLATINUM',
    title: 'Platinum Expert',
    minPoints: 6500,
    maxPoints: 9999,
    textColor: 'text-teal-600 dark:text-teal-400',
    badgeGradient: 'from-teal-400 via-cyan-500 to-blue-600',
    bgLight: 'bg-teal-50 dark:bg-teal-950/40',
    borderColor: 'border-teal-400/40',
    accentColor: '#0E7A81',
    icon: '💎',
    description: 'Pakar multidisiplin web (Frontend, Backend, Database & Git).',
    perks: 'Bonus Streak Multiplier'
  },
  {
    tier: 'MASTER',
    title: 'Master Champion',
    minPoints: 10000,
    maxPoints: 14999,
    textColor: 'text-orange-500 dark:text-orange-400',
    badgeGradient: 'from-amber-400 via-orange-500 to-red-500',
    bgLight: 'bg-orange-50 dark:bg-orange-950/40',
    borderColor: 'border-orange-400/40',
    accentColor: '#EA580C',
    icon: '🏆',
    description: 'Juara kuis elit dengan kecepatan respon dan streak konsisten.',
    perks: 'Piala Emas & Gelar Master'
  },
  {
    tier: 'GRAND MASTER',
    title: 'Grand Master Mythic',
    minPoints: 15000,
    maxPoints: Infinity,
    textColor: 'text-purple-500 dark:text-purple-400',
    badgeGradient: 'from-purple-500 via-pink-500 to-indigo-600',
    bgLight: 'bg-purple-50 dark:bg-purple-950/40',
    borderColor: 'border-purple-400/40',
    accentColor: '#9333EA',
    icon: '👑',
    description: 'Puncak kejayaan, penguasa tertinggi arena kuis dan tantangan!',
    perks: 'Sertifikat Honors & Mythic Crown'
  }
];

// Helper to determine tier from total score
export const calculateRankTier = (totalScore: number): { currentTier: RankTierInfo; nextTier: RankTierInfo | null; progressPercent: number; pointsToNext: number } => {
  const score = Math.max(0, totalScore || 0);
  let currentIdx = 0;

  for (let i = 0; i < RANK_TIERS.length; i++) {
    if (score >= RANK_TIERS[i].minPoints) {
      currentIdx = i;
    }
  }

  const currentTier = RANK_TIERS[currentIdx];
  const nextTier = currentIdx < RANK_TIERS.length - 1 ? RANK_TIERS[currentIdx + 1] : null;

  let progressPercent = 100;
  let pointsToNext = 0;

  if (nextTier) {
    const range = nextTier.minPoints - currentTier.minPoints;
    const gained = score - currentTier.minPoints;
    progressPercent = Math.min(100, Math.max(0, Math.round((gained / range) * 100)));
    pointsToNext = Math.max(0, nextTier.minPoints - score);
  }

  return { currentTier, nextTier, progressPercent, pointsToNext };
};

// Helper to extract questions from course data
const extractQuestionsFromCourseData = (lessonsData: Record<string, any>, limit = 6) => {
  const list: any[] = [];
  if (!lessonsData) return list;

  for (const [key, lesson] of Object.entries(lessonsData)) {
    if (lesson?.quiz && lesson.quiz.question && Array.isArray(lesson.quiz.options)) {
      const q = lesson.quiz;
      const opts = q.options;
      const correctLetter = q.correctIndex === 0 ? 'A' : q.correctIndex === 1 ? 'B' : q.correctIndex === 2 ? 'C' : 'D';

      list.push({
        id: `q-${key}`,
        question: q.question,
        optionA: opts[0] || 'Opsi A',
        optionB: opts[1] || 'Opsi B',
        optionC: opts[2] || 'Opsi C',
        optionD: opts[3] || 'Opsi D',
        correctOption: correctLetter,
        explanation: q.explanation || '',
        points: 1000
      });
      if (list.length >= limit) break;
    }
  }
  return list;
};

// Fallback Python / Data Questions
const PYTHON_QUIZ_QUESTIONS = [
  {
    question: 'Di Python, manakah tipe data yang bersifat immutable (tidak dapat dimodifikasi setelah dibuat)?',
    optionA: 'List',
    optionB: 'Dictionary',
    optionC: 'Tuple',
    optionD: 'Set',
    correctOption: 'C',
    explanation: 'Tuple adalah struktur data di Python yang immutable (tidak dapat diubah setelah didefinisikan).',
    points: 1000
  },
  {
    question: 'Fungsi bawaan Python apa yang digunakan untuk mengetahui panjang dari suatu list atau string?',
    optionA: 'count()',
    optionB: 'length()',
    optionC: 'len()',
    optionD: 'size()',
    points: 1000,
    correctOption: 'C',
    explanation: 'len() adalah fungsi built-in Python untuk menghitung jumlah elemen atau karakter.'
  },
  {
    question: 'Bagaimana cara mendefinisikan sebuah function di Python?',
    optionA: 'function myFunc():',
    optionB: 'def myFunc():',
    optionC: 'fn myFunc():',
    optionD: 'void myFunc():',
    points: 1000,
    correctOption: 'B',
    explanation: 'def digunakan untuk mendeklarasikan fungsi dalam sintaks Python.'
  },
  {
    question: 'Apa output dari ekspresi: 2 ** 3 dalam bahasa Python?',
    optionA: '6',
    optionB: '8',
    optionC: '9',
    optionD: '5',
    points: 1000,
    correctOption: 'B',
    explanation: '** adalah operator eksponensial (pangkat) di Python, sehingga 2 ** 3 = 8.'
  }
];

export default function QuizizzModule({ user }: QuizizzModuleProps) {
  const isInstructor = user?.role?.toUpperCase() === 'INSTRUCTOR' || user?.role?.toUpperCase() === 'ADMIN';
  const userName = user?.name || 'M. Rafif Atmaka';
  const userAvatar = user?.profilePicture || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=140&q=80';

  // API Data State
  const [realUsers, setRealUsers] = useState<any[]>([]);
  const [realModules, setRealModules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ─────────────────────────────────────────────────────────────────────────
  // ── DYNAMIC STUDENT QUIZ PROGRESSION & HISTORY STATE ─────────────────────
  // ─────────────────────────────────────────────────────────────────────────
  const [quizHistory, setQuizHistory] = useState<{
    totalScore: number;
    quizzesCompleted: number;
    totalCorrect: number;
    totalQuestions: number;
    history: Array<{ id: string; title: string; score: number; accuracy: number; date: string }>;
    categoryScores: { frontend: number; backend: number; database: number; devops: number; logic: number };
  }>({
    totalScore: 8402, // Base initial score for demo, persists in localStorage
    quizzesCompleted: 6,
    totalCorrect: 28,
    totalQuestions: 30,
    history: [
      { id: '1', title: 'JavaScript Fundamentals', score: 2400, accuracy: 100, date: 'Hari ini' },
      { id: '2', title: 'PHP 8 OOP Battle', score: 2150, accuracy: 85, date: 'Kemarin' },
      { id: '3', title: 'Git Branching Quest', score: 1850, accuracy: 90, date: '2 hari lalu' },
      { id: '4', title: 'Python 3 Basics', score: 2002, accuracy: 95, date: '3 hari lalu' }
    ],
    categoryScores: {
      frontend: 92,
      backend: 88,
      database: 80,
      devops: 85,
      logic: 95
    }
  });

  // Load persistent quiz progression
  useEffect(() => {
    const storageKey = `lms_student_quiz_progression_${user?.id || 'guest'}`;
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      try {
        setQuizHistory(JSON.parse(saved));
      } catch { /* ignore */ }
    }
  }, [user?.id]);

  const saveProgression = (updated: typeof quizHistory) => {
    setQuizHistory(updated);
    const storageKey = `lms_student_quiz_progression_${user?.id || 'guest'}`;
    localStorage.setItem(storageKey, JSON.stringify(updated));
  };

  // Compute Active Rank Tier from Total Quiz Score
  const rankInfo = useMemo(() => {
    return calculateRankTier(quizHistory.totalScore);
  }, [quizHistory.totalScore]);

  // Compute Dynamic Player Level (1 Level per 250 PTS)
  const playerLevel = useMemo(() => {
    return Math.max(1, Math.floor(quizHistory.totalScore / 250) + 1);
  }, [quizHistory.totalScore]);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Rank-Up Celebration Modal State
  const [rankUpData, setRankUpData] = useState<RankTierInfo | null>(null);
  const [showRoadmapModal, setShowRoadmapModal] = useState(false);

  // Dual and Social Invitations
  const [duelInvitations, setDuelInvitations] = useState([
    {
      id: 'inv-1',
      name: 'Raihan Rahmat',
      time: '2m ago',
      message: 'Ayo tanding kuis JavaScript & Web APIs di arena!',
      points: 120,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80',
      gameKey: 'js'
    },
    {
      id: 'inv-2',
      name: 'DevGrow Instructor',
      time: '10m ago',
      message: 'Tantangan kuis PHP 8 OOP & Database Backend siap dimainkan.',
      points: 150,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=120&q=80',
      gameKey: 'php'
    }
  ]);

  // Friend List Search & Filter
  const [searchFriendQuery, setSearchFriendQuery] = useState('');

  // Daily Quests
  const [dailyQuests, setDailyQuests] = useState([
    {
      id: 'q-1',
      title: 'Selesaikan 2 Sesi Latihan Kuis',
      exp: 140,
      points: 150,
      progress: '1/2',
      completed: false,
      claimed: false,
      iconType: 'book'
    },
    {
      id: 'q-2',
      title: 'Tantang 1 Teman di Arena Duel',
      exp: 250,
      points: 250,
      progress: '1/1',
      completed: true,
      claimed: false,
      iconType: 'gem'
    }
  ]);

  // Modals & PIN State
  const [pinInput, setPinInput] = useState('');
  const [showPinModal, setShowPinModal] = useState(false);
  const [showRewardsModal, setShowRewardsModal] = useState(false);
  const [selectedFriendDuel, setSelectedFriendDuel] = useState<any>(null);

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

  // Gameplay Arena State
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

  // Fetch real users and modules from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [uRes, mRes] = await Promise.all([
          fetch('http://localhost:5000/api/users').catch(() => null),
          fetch('http://localhost:5000/api/modules').catch(() => null)
        ]);

        if (uRes?.ok) {
          const uData = await uRes.json();
          setRealUsers(Array.isArray(uData) ? uData : uData?.users || []);
        }
        if (mRes?.ok) {
          const mData = await mRes.json();
          setRealModules(Array.isArray(mData) ? mData : mData?.modules || []);
        }
      } catch (err) {
        console.error('Error fetching real LMS data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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

  const handleTimeUp = () => {
    setIsAnswered(true);
    setSelectedOption(null);
    setStreak(0);
  };

  // Start Play with Real Extracted Module Questions
  const handleStartGame = (gameKey: string, customTitle?: string) => {
    let questions: any[] = [];
    let title = customTitle || '';
    let category = 'frontend';

    if (gameKey === 'js' || gameKey === 'javascript') {
      questions = extractQuestionsFromCourseData(jsLessonsData, 6);
      title = title || 'JavaScript & Web Fundamentals Arena ⚡';
      category = 'frontend';
    } else if (gameKey === 'php' || gameKey === 'backend') {
      questions = extractQuestionsFromCourseData(phpLessonsData, 6);
      title = title || 'PHP 8 & OOP Backend Battle ⚔️';
      category = 'backend';
    } else if (gameKey === 'git' || gameKey === 'devops') {
      questions = extractQuestionsFromCourseData(gitLessonsData, 6);
      title = title || 'Git & Version Control Quest 🛡️';
      category = 'devops';
    } else if (gameKey === 'python') {
      questions = PYTHON_QUIZ_QUESTIONS;
      title = title || 'Python 3 Modern & Data Science Challenge 🐍';
      category = 'logic';
    } else {
      questions = extractQuestionsFromCourseData(jsLessonsData, 5);
      title = title || 'Mini Games Challenge 🎮';
      category = 'frontend';
    }

    if (questions.length === 0) {
      questions = PYTHON_QUIZ_QUESTIONS;
    }

    const gameQuiz = {
      id: `game-${gameKey}`,
      title,
      category,
      timePerQuestion: 20,
      questions
    };

    setActiveQuiz(gameQuiz);
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setTimeLeft(20);
    setScore(0);
    setStreak(0);
    setMaxStreak(0);
    setCorrectAnswersCount(0);
    setTimeSpentTotal(0);
    setGameStep('PLAYING');
  };

  // Accept Duel
  const handleAcceptDuel = (inv: any) => {
    setDuelInvitations(prev => prev.filter(item => item.id !== inv.id));
    showNotification(`Duel dengan ${inv.name} diterima! Bersiap bertanding 🚀`);
    handleStartGame(inv.gameKey || 'js', `1v1 Duel vs ${inv.name}`);
  };

  // Decline Duel
  const handleDeclineDuel = (id: string) => {
    setDuelInvitations(prev => prev.filter(item => item.id !== id));
    showNotification('Tantangan duel ditolak.');
  };

  // Claim Quest Reward (Adds to Total Quiz Score & Triggers Rank Calculation)
  const handleClaimQuest = (questId: string) => {
    setDailyQuests(prev => prev.map(q => {
      if (q.id === questId) {
        const prevTier = calculateRankTier(quizHistory.totalScore).currentTier.tier;
        const newScore = quizHistory.totalScore + q.points;
        const newTier = calculateRankTier(newScore).currentTier;

        saveProgression({
          ...quizHistory,
          totalScore: newScore
        });

        if (newTier.tier !== prevTier) {
          setRankUpData(newTier);
        }

        showNotification(`Berhasil klaim +${q.points} Rank Points & +${q.exp} EXP! 🎉`);
        return { ...q, claimed: true };
      }
      return q;
    }));
  };

  // Claim All Quests
  const handleClaimAll = () => {
    let totalPoints = 0;
    setDailyQuests(prev => prev.map(q => {
      if (q.completed && !q.claimed) {
        totalPoints += q.points;
        return { ...q, claimed: true };
      }
      return q;
    }));

    if (totalPoints > 0) {
      const prevTier = calculateRankTier(quizHistory.totalScore).currentTier.tier;
      const newScore = quizHistory.totalScore + totalPoints;
      const newTier = calculateRankTier(newScore).currentTier;

      saveProgression({
        ...quizHistory,
        totalScore: newScore
      });

      if (newTier.tier !== prevTier) {
        setRankUpData(newTier);
      }

      showNotification(`Semua reward diklaim! +${totalPoints} Rank Points diperoleh! 🌟`);
    } else {
      showNotification('Tidak ada misi harian yang siap diklaim.');
    }
  };

  // Send Duel
  const handleSendFriendChallenge = (friend: any) => {
    setSelectedFriendDuel(null);
    showNotification(`Tantangan duel telah dikirim ke ${friend.name}! 🎮`);
  };

  // Join by PIN
  const handleJoinByPin = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = pinInput.trim().toUpperCase();
    setShowPinModal(false);
    handleStartGame('js', `Match Arena PIN: ${cleanPin || 'QZ-LIVE'}`);
  };

  // Answer Option
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

      const totalTime = activeQuiz.timePerQuestion || 20;
      const speedBonus = Math.floor((timeLeft / totalTime) * 500);
      const streakBonus = newStreak * 100;
      const earned = (Number(currentQ.points) || 1000) + speedBonus + streakBonus;

      setScore(prev => prev + earned);
    } else {
      setStreak(0);
    }
  };

  // Next Question
  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 < activeQuiz.questions.length) {
      setCurrentQuestionIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(activeQuiz.timePerQuestion || 20);
    } else {
      // Finish game: Accumulate Score into Global Quiz Progression
      finishQuizGame();
    }
  };

  // Finish Game & Apply Progression
  const finishQuizGame = () => {
    const totalQ = activeQuiz.questions.length;
    const accuracy = Math.round((correctAnswersCount / totalQ) * 100);
    const prevTier = calculateRankTier(quizHistory.totalScore).currentTier.tier;
    
    // Add game score to overall total score
    const newTotalScore = quizHistory.totalScore + score;
    const newTier = calculateRankTier(newTotalScore).currentTier;

    // Update category mastery
    const cat = activeQuiz.category || 'frontend';
    const updatedCategoryScores = {
      ...quizHistory.categoryScores,
      [cat]: Math.min(100, Math.round(((quizHistory.categoryScores[cat as keyof typeof quizHistory.categoryScores] || 80) + accuracy) / 2))
    };

    const newHistoryItem = {
      id: Date.now().toString(),
      title: activeQuiz.title,
      score,
      accuracy,
      date: 'Baru saja'
    };

    const updatedProgression = {
      totalScore: newTotalScore,
      quizzesCompleted: quizHistory.quizzesCompleted + 1,
      totalCorrect: quizHistory.totalCorrect + correctAnswersCount,
      totalQuestions: quizHistory.totalQuestions + totalQ,
      history: [newHistoryItem, ...quizHistory.history.slice(0, 9)],
      categoryScores: updatedCategoryScores
    };

    saveProgression(updatedProgression);

    // If student ranked up, trigger celebration modal
    if (newTier.tier !== prevTier) {
      setRankUpData(newTier);
    }

    setGameStep('SUMMARY');
  };

  // Real Leaderboard from Real Users
  const realLeaderboard = useMemo(() => {
    if (!realUsers || realUsers.length === 0) {
      return [
        { rank: 1, name: 'Syahru M', points: 15420, badge: 'Grand Master', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80' },
        { rank: 2, name: 'Salsabila P', points: 12220, badge: 'Grand Master', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80' },
        { rank: 3, name: 'Aditya A', points: 9900, badge: 'Platinum', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=100&q=80' },
        { rank: 4, name: userName, points: quizHistory.totalScore, badge: rankInfo.currentTier.title, avatar: userAvatar }
      ];
    }

    const mapped = realUsers.map((u, idx) => {
      const isMe = u.id === user?.id || u.email === user?.email;
      const pts = isMe ? quizHistory.totalScore : Math.max(1200, 16000 - idx * 1100);
      const { currentTier } = calculateRankTier(pts);
      return {
        id: u.id,
        name: u.name || 'Student',
        email: u.email,
        points: pts,
        badge: currentTier.title,
        avatar: u.profilePicture || `https://images.unsplash.com/photo-${1535713875002 + (idx % 10)}?auto=format&fit=crop&w=120&q=80`,
        isMe
      };
    });

    mapped.sort((a, b) => b.points - a.points);
    return mapped.map((item, idx) => ({ ...item, rank: idx + 1 }));
  }, [realUsers, quizHistory.totalScore, user?.id, user?.email, userName, userAvatar, rankInfo.currentTier.title]);

  // Real Friend List
  const realFriends = useMemo(() => {
    const defaultAvatars = [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80'
    ];

    if (!realUsers || realUsers.length === 0) return [];

    return realUsers
      .filter(u => u.id !== user?.id && u.email !== user?.email)
      .map((u, idx) => {
        const mockPts = Math.max(1000, 15000 - idx * 1200);
        const { currentTier } = calculateRankTier(mockPts);

        return {
          id: u.id,
          name: u.name,
          email: u.email,
          rank: currentTier.title,
          rankColor: `${currentTier.textColor} ${currentTier.bgLight} ${currentTier.borderColor}`,
          avatar: u.profilePicture || defaultAvatars[idx % defaultAvatars.length]
        };
      });
  }, [realUsers, user?.id, user?.email]);

  const filteredFriends = useMemo(() => {
    if (!searchFriendQuery.trim()) return realFriends;
    const q = searchFriendQuery.toLowerCase();
    return realFriends.filter(f => f.name.toLowerCase().includes(q) || f.rank.toLowerCase().includes(q) || f.email?.toLowerCase().includes(q));
  }, [realFriends, searchFriendQuery]);

  // Dynamic Radar Vertices
  const radarPoints = useMemo(() => {
    const c = quizHistory.categoryScores;
    const maxR = 80;
    const r1 = (c.frontend / 100) * maxR;
    const r2 = (c.backend / 100) * maxR;
    const r3 = (c.database / 100) * maxR;
    const r4 = (c.devops / 100) * maxR;
    const r5 = (c.logic / 100) * maxR;

    const x1 = 100 + r1 * Math.cos(-Math.PI / 2);
    const y1 = 100 + r1 * Math.sin(-Math.PI / 2);

    const x2 = 100 + r2 * Math.cos(-Math.PI / 10);
    const y2 = 100 + r2 * Math.sin(-Math.PI / 10);

    const x3 = 100 + r3 * Math.cos((3 * Math.PI) / 10);
    const y3 = 100 + r3 * Math.sin((3 * Math.PI) / 10);

    const x4 = 100 + r4 * Math.cos((7 * Math.PI) / 10);
    const y4 = 100 + r4 * Math.sin((7 * Math.PI) / 10);

    const x5 = 100 + r5 * Math.cos((11 * Math.PI) / 10);
    const y5 = 100 + r5 * Math.sin((11 * Math.PI) / 10);

    return `${x1},${y1} ${x2},${y2} ${x3},${y3} ${x4},${y4} ${x5},${y5}`;
  }, [quizHistory.categoryScores]);

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
      <div className="min-h-screen bg-[#1c2237] text-white flex flex-col justify-between p-4 md:p-8 relative overflow-hidden font-sans rounded-3xl">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Arena Header Bar */}
        <div className="relative z-10 flex items-center justify-between bg-slate-900/80 backdrop-blur-md px-6 py-3.5 rounded-2xl border border-slate-700 shadow-xl">
          <div className="flex items-center gap-3">
            <span className="px-3.5 py-1 bg-teal-500/20 text-teal-300 text-xs font-black rounded-xl border border-teal-500/30">
              Soal {currentQuestionIdx + 1} / {totalQ}
            </span>
            <div className="w-32 bg-slate-800 rounded-full h-2.5 overflow-hidden hidden sm:block">
              <div className="bg-gradient-to-r from-teal-400 to-cyan-500 h-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {streak > 0 && (
              <div className="flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-1 rounded-xl text-xs font-black animate-bounce">
                <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>{streak}x Streak!</span>
              </div>
            )}

            <div className="bg-slate-800/80 px-4 py-1.5 rounded-xl border border-slate-700 text-right">
              <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider block leading-none">Skor Kuis</span>
              <span className="text-lg font-black text-amber-400 tracking-tight">+{score} Pts</span>
            </div>

            <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-300 cursor-pointer">
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Question & Timer */}
        <div className="relative z-10 max-w-4xl mx-auto w-full my-auto py-6 space-y-6">
          <div className="w-full bg-slate-900 rounded-full h-3 p-0.5 border border-slate-700 overflow-hidden shadow-inner">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${
                timeLeft <= 5 ? 'bg-rose-500 animate-pulse' : 'bg-gradient-to-r from-teal-400 via-cyan-400 to-amber-400'
              }`}
              style={{ width: `${timePct}%` }}
            />
          </div>

          <div className="bg-slate-900/90 border border-slate-700 rounded-3xl p-6 md:p-10 shadow-2xl text-center backdrop-blur-md relative group">
            <span className="text-xs font-black text-teal-400 uppercase tracking-widest bg-teal-950/60 px-3.5 py-1 rounded-full border border-teal-500/30 mb-4 inline-block">
              {activeQuiz.title}
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white leading-relaxed tracking-tight">
              {currentQ.question}
            </h2>
          </div>

          {/* 4 Choices Grid */}
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
                  buttonStyle = 'bg-slate-800/40 border-slate-800 text-slate-500 opacity-40 cursor-not-allowed';
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

          {/* Feedback Card */}
          {isAnswered && (
            <div className="mt-6 p-5 bg-slate-900/90 rounded-2xl border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                  <p className="text-xs text-slate-300 mt-0.5">
                    {currentQ.explanation || (selectedOption === currentQ.correctOption ? 'Pertahankan kecepatannya!' : `Jawaban yang benar adalah Opsi ${currentQ.correctOption}`)}
                  </p>
                </div>
              </div>

              <button
                onClick={handleNextQuestion}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-black rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer"
              >
                {currentQuestionIdx + 1 < totalQ ? 'Soal Berikutnya →' : 'Selesaikan & Tambah Skor Rank 🏆'}
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
      <div className="min-h-screen bg-[#1c2237] text-white p-4 md:p-8 flex flex-col justify-center items-center relative overflow-hidden font-sans rounded-3xl">
        <div className="max-w-2xl w-full bg-slate-900/90 border border-slate-700 rounded-3xl p-6 md:p-10 shadow-2xl backdrop-blur-md text-center space-y-6 relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-amber-500/30 animate-bounce">
            <Trophy className="w-10 h-10 text-slate-900" />
          </div>

          <div>
            <h1 className="text-3xl font-black text-white">Quiz Selesai! 🎉</h1>
            <p className="text-slate-300 text-xs mt-1">{activeQuiz.title}</p>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700 grid grid-cols-3 gap-4">
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-black block">Poin Diperoleh</span>
              <span className="text-2xl font-black text-amber-400 mt-1 block">+{score}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-black block">Akurasi</span>
              <span className="text-2xl font-black text-emerald-400 mt-1 block">{accuracyPct}%</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-400 uppercase font-black block">Total Skor Rank</span>
              <span className="text-2xl font-black text-teal-400 mt-1 block">🔥 {quizHistory.totalScore.toLocaleString()}</span>
            </div>
          </div>

          {/* Current Rank Status Callout */}
          <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3 text-left">
              <span className="text-3xl">{rankInfo.currentTier.icon}</span>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-teal-400 font-bold">Peringkat Anda</span>
                <h4 className="text-sm font-black text-white">{rankInfo.currentTier.title}</h4>
              </div>
            </div>
            {rankInfo.nextTier && (
              <span className="text-xs text-amber-400 font-bold text-right">
                {rankInfo.pointsToNext.toLocaleString()} PTS lagi menuju {rankInfo.nextTier.tier}
              </span>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => setGameStep('LOBBY')}
              className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white font-black rounded-xl text-xs border border-slate-600 transition-all cursor-pointer"
            >
              Kembali ke Menu Game
            </button>
            <button
              onClick={() => handleStartGame('js')}
              className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-700 text-white font-black rounded-xl text-xs shadow-lg transition-all cursor-pointer"
            >
              Main Lagi 🔄
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ──────────────────────────────────────────────────────────────────────────
  // ── RENDER 3: MAIN GAMIFIED DASHBOARD ─────────────────────────────────────
  // ──────────────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-800 dark:text-slate-100 p-4 md:p-6 lg:p-8 font-sans">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 bg-slate-900 dark:bg-slate-800 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-bounce">
          <Sparkles className="w-5 h-5 text-amber-400" />
          <span className="text-xs font-black">{toastMessage}</span>
        </div>
      )}

      {/* ── RANK UP CELEBRATION MODAL ── */}
      {rankUpData && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#131827] rounded-3xl w-full max-w-md p-8 shadow-2xl border border-amber-400/50 text-center space-y-5 animate-scaleIn">
            <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-amber-400 via-yellow-300 to-orange-500 p-1 shadow-2xl shadow-amber-500/30 flex items-center justify-center animate-bounce">
              <span className="text-5xl">{rankUpData.icon}</span>
            </div>

            <div>
              <span className="px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-full text-xs font-black uppercase tracking-widest border border-amber-300">
                🎉 RANK UP ACHIEVED!
              </span>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white mt-3">
                Selamat! Anda Naik Peringkat
              </h2>
              <h3 className={`text-xl font-black ${rankUpData.textColor} mt-1`}>
                {rankUpData.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                {rankUpData.description}
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
              Total Skor Kuis Anda Sekarang: <span className="font-black text-amber-500">{quizHistory.totalScore.toLocaleString()} PTS</span>
            </div>

            <button
              onClick={() => setRankUpData(null)}
              className="w-full py-3 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-black text-xs rounded-2xl shadow-lg cursor-pointer"
            >
              Lanjutkan Bertanding 🚀
            </button>
          </div>
        </div>
      )}

      {/* Main Responsive 2-Column Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 max-w-[1600px] mx-auto">
        
        {/* ══════════════════════════════════════════════════════════════════════ */}
        {/* ── LEFT & CENTER COLUMN (MAIN GAMIFIED CONTENT - 8.5/12 COLS) ─────── */}
        {/* ══════════════════════════════════════════════════════════════════════ */}
        <div className="xl:col-span-8 2xl:col-span-9 space-y-6">

          {/* ── 1. TOP HERO BANNER ──────────────────────────────────────────── */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#EAF6F8] via-[#EBF3FB] to-[#FCEEF2] dark:from-[#111A2E] dark:via-[#131D33] dark:to-[#1F172B] p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="space-y-4 max-w-xl z-10 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Learn, Play and Earn Free Gifts!
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Kumpulkan poin dari seluruh kuis pemrograman untuk meningkatkan Tier Peringkat Anda dan raih hadiah eksklusif.
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <button
                  onClick={() => setShowRoadmapModal(true)}
                  className="px-6 py-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-white font-extrabold text-xs shadow-sm hover:shadow border border-slate-200 dark:border-slate-700 hover:bg-slate-50 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Trophy className="w-4 h-4 text-amber-500" /> Detail Target Rank
                </button>
                <button
                  onClick={() => setShowPinModal(true)}
                  className="px-6 py-2.5 rounded-full bg-[#0E7A81] hover:bg-[#0B656B] text-white font-extrabold text-xs shadow-md shadow-teal-500/20 transition-all cursor-pointer hover:scale-105 active:scale-95 flex items-center gap-1.5"
                >
                  <Gamepad2 className="w-4 h-4" /> Masuk PIN Arena
                </button>
                {isInstructor && (
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" /> Buat Quizizz
                  </button>
                )}
              </div>
            </div>

            {/* Right 3D Gamified Illustration */}
            <div className="relative w-64 sm:w-72 h-44 sm:h-48 shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-teal-400/10 dark:bg-teal-500/10 rounded-full blur-2xl" />
              <svg viewBox="0 0 320 220" className="w-full h-full drop-shadow-xl select-none" fill="none">
                <ellipse cx="160" cy="185" rx="140" ry="25" fill="#CBD5E1" fillOpacity="0.4" />
                <path d="M70 170 L250 170 L240 185 L80 185 Z" fill="#1E293B" />
                
                <rect x="95" y="70" width="130" height="85" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                <rect x="102" y="77" width="116" height="71" rx="6" fill="#1E293B" />
                <path d="M110 100 L140 85 L180 120 L210 95" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
                <circle cx="140" cy="85" r="4" fill="#F43F5E" />
                <circle cx="180" cy="120" r="4" fill="#10B981" />
                <rect x="153" y="155" width="14" height="20" fill="#334155" />
                <ellipse cx="160" cy="175" rx="22" ry="4" fill="#475569" />

                <circle cx="160" cy="125" r="22" fill="#F59E0B" />
                <circle cx="160" cy="115" r="16" fill="#1E293B" />
                <path d="M140 115 A20 20 0 0 1 180 115" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" fill="none" />
                <rect x="138" y="110" width="6" height="12" rx="3" fill="#06B6D4" />
                <rect x="176" y="110" width="6" height="12" rx="3" fill="#06B6D4" />

                <g className="animate-bounce" style={{ animationDuration: '3s' }}>
                  <circle cx="50" cy="90" r="26" fill="#FDE047" fillOpacity="0.3" />
                  <path d="M42 80 L58 80 L56 98 A8 8 0 0 1 44 98 Z" fill="#F59E0B" />
                  <path d="M48 98 L52 98 L52 104 L48 104 Z" fill="#D97706" />
                  <rect x="44" y="104" width="12" height="4" rx="2" fill="#B45309" />
                  <path d="M42 84 C36 84 36 92 43 93" stroke="#F59E0B" strokeWidth="2" fill="none" />
                  <path d="M58 84 C64 84 64 92 57 93" stroke="#F59E0B" strokeWidth="2" fill="none" />
                </g>

                <g className="animate-pulse">
                  <rect x="245" y="65" width="34" height="48" rx="6" fill="#F43F5E" transform="rotate(15 245 65)" />
                  <circle cx="260" cy="85" r="7" fill="#FFFFFF" fillOpacity="0.8" />
                  <polygon points="285,45 288,52 295,55 288,58 285,65 282,58 275,55 282,52" fill="#FBBF24" />
                  <polygon points="75,40 77,45 82,47 77,49 75,54 73,49 68,47 73,45" fill="#38BDF8" />
                </g>
              </svg>
            </div>
          </div>

          {/* ── 2. OVERVIEW ROW (3 DYNAMIC RANK-TIER CARDS) ─────────────────── */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Ringkasan Performa & Peringkat</h2>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400">
                {quizHistory.quizzesCompleted} Kuis Diselesaikan
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Card 1: Dynamic Player Profile & Level */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between items-center text-center relative overflow-hidden">
                <div className="space-y-2 flex flex-col items-center">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 shadow-md">
                      <img
                        src={userAvatar}
                        alt={userName}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 p-1 rounded-full border-2 border-white dark:border-slate-900 shadow">
                      <Crown className="w-3.5 h-3.5 fill-slate-950" />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">{userName}</h3>
                    <div className="flex items-center justify-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-[11px] font-black border border-amber-200 dark:border-amber-800">
                        ⭐ Lv. {playerLevel}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 text-[11px] font-black border border-rose-200 dark:border-rose-800">
                        🔥 {quizHistory.totalScore.toLocaleString()} PTS
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full pt-4 space-y-1 text-left">
                  <div className="flex justify-between text-[11px] font-bold text-slate-500 dark:text-slate-400">
                    <span>Akurasi Kuis</span>
                    <span>{Math.round((quizHistory.totalCorrect / Math.max(1, quizHistory.totalQuestions)) * 100)}%</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-amber-400 to-orange-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (quizHistory.totalScore % 1000) / 10)}%` }}
                    />
                  </div>
                  <div className="text-center text-[10px] text-slate-400 font-bold">
                    {quizHistory.totalCorrect} / {quizHistory.totalQuestions} Soal Terjawab Benar
                  </div>
                </div>
              </div>

              {/* Card 2: DYNAMIC OVERALL RANK TIER (CENTERPIECE) */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between items-center text-center relative overflow-hidden">
                <div className="flex items-center justify-center gap-2 pt-1">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center opacity-50 scale-90">
                    <span className="text-xl">{rankInfo.currentTier.icon}</span>
                  </div>
                  
                  {/* Center Dynamic Rank Badge */}
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-tr ${rankInfo.currentTier.badgeGradient} p-1 shadow-xl shadow-amber-500/20 flex items-center justify-center animate-pulse`}>
                    <div className="w-full h-full rounded-[22px] bg-slate-900 flex flex-col items-center justify-center">
                      <span className="text-3xl">{rankInfo.currentTier.icon}</span>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center opacity-50 scale-90">
                    <span className="text-xl">{rankInfo.nextTier ? rankInfo.nextTier.icon : '✨'}</span>
                  </div>
                </div>

                <div>
                  <h3 className={`text-lg font-black tracking-wider ${rankInfo.currentTier.textColor}`}>
                    {rankInfo.currentTier.tier}
                  </h3>
                  
                  {/* Segmented Progress to Next Rank */}
                  <div className="space-y-1 mt-1">
                    <div className="flex items-center justify-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-amber-500" />
                      <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                        {quizHistory.totalScore.toLocaleString()} PTS
                      </span>
                    </div>

                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${rankInfo.currentTier.badgeGradient}`}
                        style={{ width: `${rankInfo.progressPercent}%` }}
                      />
                    </div>

                    <span className="text-[10px] text-slate-400 font-bold block">
                      {rankInfo.nextTier
                        ? `${rankInfo.pointsToNext.toLocaleString()} PTS lagi ke ${rankInfo.nextTier.tier} (${rankInfo.progressPercent}%)`
                        : '🎉 Anda telah mencapai Tier Tertinggi!'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleStartGame('js')}
                  className="w-full py-2.5 rounded-full bg-[#0E7A81] hover:bg-[#0B656B] text-white font-extrabold text-xs shadow-md transition-all cursor-pointer mt-2 hover:scale-[1.02]"
                >
                  Tingkatkan Rank (Play) ⚔️
                </button>
              </div>

              {/* Card 3: Performance Radar Chart */}
              <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
                <div className="flex justify-between items-center">
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-xs tracking-tight text-left">Peta Kemampuan (Radar)</h3>
                  <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold">5 Sumbu Materi</span>
                </div>
                
                <div className="relative w-full h-36 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <polygon points="100,20 176,75 147,165 53,165 24,75" fill="none" stroke="#E2E8F0" strokeWidth="1" className="dark:stroke-slate-800" />
                    <polygon points="100,45 151,82 131,143 69,143 49,82" fill="none" stroke="#E2E8F0" strokeWidth="1" className="dark:stroke-slate-800" />
                    <polygon points="100,70 125,89 116,121 84,121 75,89" fill="none" stroke="#E2E8F0" strokeWidth="1" className="dark:stroke-slate-800" />

                    <line x1="100" y1="100" x2="100" y2="20" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2" className="dark:stroke-slate-700" />
                    <line x1="100" y1="100" x2="176" y2="75" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2" className="dark:stroke-slate-700" />
                    <line x1="100" y1="100" x2="147" y2="165" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2" className="dark:stroke-slate-700" />
                    <line x1="100" y1="100" x2="53" y2="165" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2" className="dark:stroke-slate-700" />
                    <line x1="100" y1="100" x2="24" y2="75" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2" className="dark:stroke-slate-700" />

                    <polygon
                      points={radarPoints}
                      fill="#F97316"
                      fillOpacity="0.25"
                      stroke="#EA580C"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />

                    <text x="100" y="12" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="bold">Frontend</text>
                    <text x="180" y="75" textAnchor="start" fill="#64748B" fontSize="9" fontWeight="bold">Backend</text>
                    <text x="145" y="180" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="bold">Database</text>
                    <text x="50" y="180" textAnchor="middle" fill="#64748B" fontSize="9" fontWeight="bold">DevOps</text>
                    <text x="5" y="75" textAnchor="end" fill="#64748B" fontSize="9" fontWeight="bold">Logic</text>
                  </svg>
                </div>

                <div className="flex justify-around text-[10px] font-extrabold text-slate-400 pt-1">
                  <span className="text-orange-500">
                    Rata-rata: {Math.round(Object.values(quizHistory.categoryScores).reduce((a, b) => a + b, 0) / 5)}% Penguasaan
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* ── 2.5 PROMINENT RANK TIERS LADDER & TARGET POINTS TRACKER ────────── */}
          <div className="bg-white dark:bg-[#131827] rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-amber-500 fill-amber-400" /> Jenjang Peringkat & Target Poin Kuis
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Raih poin dari setiap kuis untuk menaikkan status tier Anda dari Bronze hingga Grand Master!
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black px-3.5 py-1.5 bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-full border border-amber-300 flex items-center gap-1.5 shadow-sm">
                  🔥 Poin Anda: {quizHistory.totalScore.toLocaleString()} PTS
                </span>
              </div>
            </div>

            {/* 6 Rank Tier Visual Stepper Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {RANK_TIERS.map((tier) => {
                const isAchieved = quizHistory.totalScore >= tier.minPoints;
                const isCurrent = rankInfo.currentTier.tier === tier.tier;
                const isLocked = quizHistory.totalScore < tier.minPoints;
                const pointsNeeded = Math.max(0, tier.minPoints - quizHistory.totalScore);

                return (
                  <div
                    key={tier.tier}
                    className={`p-3.5 rounded-2xl border transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden group ${
                      isCurrent
                        ? `${tier.bgLight} ${tier.borderColor} ring-2 ring-teal-500 shadow-lg scale-[1.02]`
                        : isAchieved
                        ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 opacity-95'
                        : 'bg-slate-50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-75'
                    }`}
                  >
                    {/* Top Status Tag */}
                    <div className="mb-1.5">
                      {isCurrent ? (
                        <span className="px-2 py-0.5 bg-teal-600 text-white text-[9px] font-black rounded-full uppercase tracking-wider shadow">
                          🔥 Tier Anda
                        </span>
                      ) : isAchieved ? (
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[9px] font-black rounded-full uppercase tracking-wider border border-emerald-500/30">
                          ✓ Tercapai
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 bg-slate-200 dark:bg-slate-800 text-slate-500 text-[9px] font-black rounded-full uppercase tracking-wider">
                          🔒 Terkunci
                        </span>
                      )}
                    </div>

                    {/* 3D Tier Icon & Title */}
                    <div className="space-y-1 my-1">
                      <div className="text-3xl filter drop-shadow group-hover:scale-110 transition-transform">
                        {tier.icon}
                      </div>
                      <h4 className={`text-xs font-black tracking-tight ${tier.textColor}`}>
                        {tier.tier}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-bold leading-tight line-clamp-1">
                        {tier.title}
                      </p>
                    </div>

                    {/* Target Points Badge */}
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-800 space-y-1">
                      <div className="text-[11px] font-black text-slate-900 dark:text-white">
                        {tier.maxPoints === Infinity ? `${tier.minPoints.toLocaleString()}+ PTS` : `${tier.minPoints.toLocaleString()} PTS`}
                      </div>
                      
                      {isCurrent && rankInfo.nextTier ? (
                        <div className="text-[9px] font-bold text-amber-500">
                          {rankInfo.pointsToNext.toLocaleString()} PTS lagi ke {rankInfo.nextTier.tier}
                        </div>
                      ) : isLocked ? (
                        <div className="text-[9px] font-bold text-slate-400">
                          Kurang {pointsNeeded.toLocaleString()} PTS
                        </div>
                      ) : (
                        <div className="text-[9px] font-bold text-emerald-600 dark:text-emerald-400">
                          Telah Terbuka!
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 3. MINI GAMES (CONNECTED TO REAL PROGRAMMING MODULES) ────────── */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Mini Games Arena</h2>
              <span className="text-xs font-bold text-teal-600 dark:text-teal-400">4 Arena Berhadiah Poin</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Game 1: JavaScript & Web Dev Battle */}
              <div className="bg-gradient-to-br from-[#FF4D6D] to-[#C9184A] rounded-3xl p-5 text-white flex flex-col justify-between h-56 shadow-lg shadow-pink-500/20 relative overflow-hidden group">
                <div className="z-10">
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">JavaScript</span>
                  <h3 className="font-extrabold text-base leading-tight mt-1">Web Dev Battle</h3>
                  <p className="text-[11px] text-pink-100 mt-0.5">306 Soal Tersedia</p>
                </div>

                <div className="absolute right-1 bottom-10 w-28 h-28 opacity-90 group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <circle cx="50" cy="50" r="35" fill="#FBBF24" />
                    <rect x="25" y="38" width="50" height="24" rx="10" fill="#0284C7" />
                    <circle cx="38" cy="50" r="6" fill="#FFFFFF" />
                    <circle cx="62" cy="50" r="6" fill="#FFFFFF" />
                    <rect x="42" y="70" width="16" height="6" rx="3" fill="#1E293B" />
                  </svg>
                </div>

                <button
                  onClick={() => handleStartGame('js', 'JavaScript & Web Dev Battle ⚡')}
                  className="z-10 w-full py-2 bg-white text-slate-900 hover:bg-pink-50 font-extrabold text-xs rounded-full shadow transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-pink-600" /> Mainkan (+Poin)
                </button>
              </div>

              {/* Game 2: PHP 8 Backend Battle */}
              <div className="bg-gradient-to-br from-[#FB923C] to-[#EA580C] rounded-3xl p-5 text-white flex flex-col justify-between h-56 shadow-lg shadow-orange-500/20 relative overflow-hidden group">
                <div className="z-10">
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">PHP & Backend</span>
                  <h3 className="font-extrabold text-base leading-tight mt-1">Backend War</h3>
                  <p className="text-[11px] text-orange-100 mt-0.5">888 Soal Tersedia</p>
                </div>

                <div className="absolute right-2 bottom-10 w-28 h-28 opacity-90 group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <rect x="20" y="45" width="30" height="30" rx="6" fill="#34D399" />
                    <text x="35" y="66" fill="#FFFFFF" fontSize="18" fontWeight="bold" textAnchor="middle">P</text>
                    <rect x="45" y="25" width="30" height="30" rx="6" fill="#FDE047" />
                    <text x="60" y="46" fill="#1E293B" fontSize="18" fontWeight="bold" textAnchor="middle">H</text>
                    <rect x="55" y="55" width="28" height="28" rx="6" fill="#60A5FA" />
                    <text x="69" y="74" fill="#FFFFFF" fontSize="16" fontWeight="bold" textAnchor="middle">P</text>
                  </svg>
                </div>

                <button
                  onClick={() => handleStartGame('php', 'PHP 8 Backend War ⚔️')}
                  className="z-10 w-full py-2 bg-white text-slate-900 hover:bg-orange-50 font-extrabold text-xs rounded-full shadow transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-orange-600" /> Mainkan (+Poin)
                </button>
              </div>

              {/* Game 3: Git & DevOps Quest */}
              <div className="bg-gradient-to-br from-[#3B82F6] to-[#1D4ED8] rounded-3xl p-5 text-white flex flex-col justify-between h-56 shadow-lg shadow-blue-500/20 relative overflow-hidden group">
                <div className="z-10">
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">Git & GitHub</span>
                  <h3 className="font-extrabold text-base leading-tight mt-1">DevOps Quest</h3>
                  <p className="text-[11px] text-blue-100 mt-0.5">54 Soal Tersedia</p>
                </div>

                <div className="absolute right-2 bottom-10 w-28 h-28 opacity-90 group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <circle cx="50" cy="50" r="30" fill="#60A5FA" fillOpacity="0.4" />
                    <path d="M35 35 L65 35 L60 65 A12 12 0 0 1 40 65 Z" fill="#FBBF24" />
                    <path d="M47 65 L53 65 L53 78 L47 78 Z" fill="#F59E0B" />
                    <rect x="40" y="78" width="20" height="6" rx="3" fill="#D97706" />
                    <path d="M35 40 C28 40 28 50 36 53" stroke="#FBBF24" strokeWidth="3" fill="none" />
                    <path d="M65 40 C72 40 72 50 64 53" stroke="#FBBF24" strokeWidth="3" fill="none" />
                  </svg>
                </div>

                <button
                  onClick={() => handleStartGame('git', 'Git & DevOps Quest 🛡️')}
                  className="z-10 w-full py-2 bg-white text-slate-900 hover:bg-blue-50 font-extrabold text-xs rounded-full shadow transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-blue-600" /> Mainkan (+Poin)
                </button>
              </div>

              {/* Game 4: Python & Data Master */}
              <div className="bg-gradient-to-br from-[#8B5CF6] to-[#6D28D9] rounded-3xl p-5 text-white flex flex-col justify-between h-56 shadow-lg shadow-purple-500/20 relative overflow-hidden group">
                <div className="z-10">
                  <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-bold">Python 3</span>
                  <h3 className="font-extrabold text-base leading-tight mt-1">Python Arena</h3>
                  <p className="text-[11px] text-purple-100 mt-0.5">59 Soal Tersedia</p>
                </div>

                <div className="absolute right-1 bottom-10 w-28 h-28 opacity-90 group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <circle cx="35" cy="45" r="16" fill="#EC4899" />
                    <rect x="48" y="32" width="24" height="24" rx="5" fill="#38BDF8" transform="rotate(25 48 32)" />
                    <polygon points="65,75 80,50 50,55" fill="#FBBF24" />
                    <circle cx="45" cy="70" r="10" fill="#10B981" />
                  </svg>
                </div>

                <button
                  onClick={() => handleStartGame('python', 'Python 3 Modern Challenge 🐍')}
                  className="z-10 w-full py-2 bg-white text-slate-900 hover:bg-purple-50 font-extrabold text-xs rounded-full shadow transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Gamepad2 className="w-3.5 h-3.5 text-purple-600" /> Mainkan (+Poin)
                </button>
              </div>

            </div>
          </div>

          {/* ── 4. BOTTOM ROW (LEADERBOARD & DAILY QUEST) ────────────────────── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Real Leaderboard Card with Dynamic Top 3 Podium */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
                  Leaderboard Keseluruhan <ChevronRight className="w-4 h-4 text-slate-400" />
                </h3>
                <span className="text-[11px] font-bold text-slate-400">Total Akumulasi Nilai Kuis</span>
              </div>

              {/* Top 3 Podium */}
              <div className="flex items-end justify-center gap-3 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800">
                
                {/* 2nd Place */}
                {realLeaderboard[1] && (
                  <div className="flex flex-col items-center text-center space-y-1">
                    <div className="relative">
                      <img
                        src={realLeaderboard[1].avatar}
                        alt="2nd"
                        className="w-12 h-12 rounded-full object-cover border-2 border-slate-300 shadow"
                      />
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-slate-300 text-slate-900 text-[9px] font-black px-1.5 py-0.2 rounded-full">
                        2nd
                      </span>
                    </div>
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200 mt-2 block truncate max-w-[90px]">
                      {realLeaderboard[1].name}
                    </span>
                    <span className="text-[11px] font-black text-amber-500">{realLeaderboard[1].points.toLocaleString()} PTS</span>
                  </div>
                )}

                {/* 1st Place (Center & Taller) */}
                {realLeaderboard[0] && (
                  <div className="flex flex-col items-center text-center space-y-1 scale-105">
                    <div className="relative">
                      <Crown className="w-5 h-5 text-amber-400 fill-amber-400 absolute -top-4 left-1/2 -translate-x-1/2 animate-bounce" />
                      <img
                        src={realLeaderboard[0].avatar}
                        alt="1st"
                        className="w-14 h-14 rounded-full object-cover border-2 border-amber-400 shadow-md ring-4 ring-amber-400/20"
                      />
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-[9px] font-black px-2 py-0.2 rounded-full shadow">
                        1st
                      </span>
                    </div>
                    <span className="font-extrabold text-xs text-slate-900 dark:text-white mt-2 block truncate max-w-[100px]">
                      {realLeaderboard[0].name}
                    </span>
                    <span className="text-xs font-black text-amber-500">{realLeaderboard[0].points.toLocaleString()} PTS</span>
                  </div>
                )}

                {/* 3rd Place */}
                {realLeaderboard[2] && (
                  <div className="flex flex-col items-center text-center space-y-1">
                    <div className="relative">
                      <img
                        src={realLeaderboard[2].avatar}
                        alt="3rd"
                        className="w-12 h-12 rounded-full object-cover border-2 border-amber-700 shadow"
                      />
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 bg-amber-700 text-white text-[9px] font-black px-1.5 py-0.2 rounded-full">
                        3rd
                      </span>
                    </div>
                    <span className="font-bold text-xs text-slate-800 dark:text-slate-200 mt-2 block truncate max-w-[90px]">
                      {realLeaderboard[2].name}
                    </span>
                    <span className="text-[11px] font-black text-amber-500">{realLeaderboard[2].points.toLocaleString()} PTS</span>
                  </div>
                )}

              </div>

              {/* Your Rank Bar */}
              <div className="flex items-center justify-between p-2.5 rounded-2xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/50 dark:border-teal-800/50">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400">#4</span>
                  <img
                    src={userAvatar}
                    alt="Me"
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <div>
                    <div className="text-xs font-extrabold text-slate-900 dark:text-white leading-none">{userName} (Anda)</div>
                    <span className="text-[10px] text-amber-500 font-bold">🎖️ {rankInfo.currentTier.title}</span>
                  </div>
                </div>
                <span className="text-xs font-black text-teal-600 dark:text-teal-400">{quizHistory.totalScore.toLocaleString()} PTS</span>
              </div>
            </div>

            {/* Daily Quest Card */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">Daily Quest</h3>
                <button
                  onClick={handleClaimAll}
                  className="text-xs font-extrabold text-teal-600 dark:text-teal-400 hover:underline cursor-pointer"
                >
                  Claim all
                </button>
              </div>

              <div className="space-y-3">
                {dailyQuests.map((quest) => (
                  <div key={quest.id} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2.5">
                    <div className="flex items-start gap-3">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                        quest.iconType === 'book'
                          ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                          : 'bg-teal-500/10 text-teal-500 border border-teal-500/20'
                      }`}>
                        {quest.iconType === 'book' ? <FileText className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{quest.title}</h4>
                        </div>
                        <span className="text-[11px] font-bold text-amber-500">+{quest.points} Rank Points • +{quest.exp} Exp</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-3 pt-1">
                      <div className="flex-1 space-y-1">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-amber-500 h-full rounded-full"
                            style={{ width: quest.progress === '2/2' || quest.progress === '1/1' ? '100%' : '50%' }}
                          />
                        </div>
                        <span className="text-[10px] text-slate-400 font-bold block">{quest.progress} Selesai</span>
                      </div>

                      {quest.completed && !quest.claimed ? (
                        <button
                          onClick={() => handleClaimQuest(quest.id)}
                          className="px-3.5 py-1.5 bg-[#0E7A81] hover:bg-[#0B656B] text-white text-[11px] font-black rounded-full shadow transition-all cursor-pointer flex items-center gap-1"
                        >
                          ★ Claim Reward
                        </button>
                      ) : quest.claimed ? (
                        <span className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-500 text-[10px] font-bold rounded-full">
                          Claimed ✓
                        </span>
                      ) : (
                        <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-bold rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Real Registered Course Quizzes */}
          {realModules.length > 0 && (
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-5 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                  <Zap className="w-4 h-4 text-teal-600 fill-teal-600" /> Kuis Berdasarkan Modul LMS ({realModules.length})
                </h3>
                <span className="text-[11px] font-bold text-slate-400">Dapatkan Poin Tambahan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {realModules.map((mod) => (
                  <div key={mod.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex flex-col justify-between space-y-3">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="px-2 py-0.5 rounded-md bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 text-[10px] font-black uppercase">
                          {mod.category || 'Programming'}
                        </span>
                      </div>
                      <h4 className="text-xs font-black text-slate-900 dark:text-white line-clamp-1">{mod.title}</h4>
                      <p className="text-[11px] text-slate-400 line-clamp-2 mt-0.5">{mod.description || 'Uji wawasan materi modul ini.'}</p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                      <span className="text-[10px] font-bold text-slate-400">+1000 Pts / Soal</span>
                      <button
                        onClick={() => {
                          const key = mod.title.toLowerCase().includes('php') ? 'php' :
                            mod.title.toLowerCase().includes('git') ? 'git' :
                            mod.title.toLowerCase().includes('python') ? 'python' : 'js';
                          handleStartGame(key, `Kuis: ${mod.title}`);
                        }}
                        className="px-3.5 py-1.5 bg-[#0E7A81] hover:bg-[#0B656B] text-white text-xs font-black rounded-xl cursor-pointer"
                      >
                        Mainkan
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>


        {/* ══════════════════════════════════════════════════════════════════════ */}
        {/* ── RIGHT COLUMN (REAL DUEL INVITATION & REAL FRIEND LIST) ─────────── */}
        {/* ══════════════════════════════════════════════════════════════════════ */}
        <div className="xl:col-span-4 2xl:col-span-3 space-y-6">
          
          {/* ── DUEL INVITATION SECTION ───────────────────────────────────────── */}
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Duel Invitation</h3>

            {duelInvitations.length === 0 ? (
              <div className="p-5 bg-white dark:bg-[#131827] rounded-3xl border border-slate-200/80 dark:border-slate-800 text-center text-xs font-bold text-slate-400">
                Tidak ada undangan duel saat ini.
              </div>
            ) : (
              <div className="space-y-3">
                {duelInvitations.map((inv) => (
                  <div key={inv.id} className="bg-white dark:bg-[#131827] rounded-3xl p-4 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <img src={inv.avatar} alt={inv.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-extrabold text-slate-900 dark:text-white truncate">{inv.name}</h4>
                          <span className="text-[10px] text-slate-400 font-bold">{inv.time}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-2 mt-0.5">
                          {inv.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-black text-amber-500 flex items-center gap-1">
                        🏆 +{inv.points} Point
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleDeclineDuel(inv.id)}
                          className="px-3.5 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-extrabold text-[11px] hover:bg-slate-50 dark:hover:bg-slate-800 transition-all cursor-pointer"
                        >
                          Decline
                        </button>
                        <button
                          onClick={() => handleAcceptDuel(inv)}
                          className="px-4 py-1.5 rounded-full bg-[#0E7A81] hover:bg-[#0B656B] text-white font-extrabold text-[11px] shadow transition-all cursor-pointer"
                        >
                          Accept
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ── REAL FRIEND LIST SECTION ──────────────────────────────────────── */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white tracking-tight">Friend List</h3>
              <span className="text-xs font-bold text-slate-400">{realFriends.length} Pengguna</span>
            </div>

            {/* Search Input Box */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama atau email teman..."
                value={searchFriendQuery}
                onChange={e => setSearchFriendQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-[#131827] border border-slate-200/80 dark:border-slate-800 rounded-2xl text-xs font-bold text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 shadow-sm"
              />
            </div>

            {/* Friends Scrollable List */}
            <div className="bg-white dark:bg-[#131827] rounded-3xl p-3 border border-slate-200/80 dark:border-slate-800 shadow-sm max-h-[520px] overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
              {filteredFriends.length === 0 ? (
                <div className="p-4 text-center text-xs font-bold text-slate-400">
                  Tidak ada teman yang cocok.
                </div>
              ) : (
                filteredFriends.map((friend) => (
                  <div key={friend.id} className="py-2.5 px-2 flex items-center justify-between gap-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-2xl transition-colors">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative">
                        <img src={friend.avatar} alt={friend.name} className="w-9 h-9 rounded-full object-cover" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 absolute -bottom-0.5 -right-0.5" />
                      </div>
                      
                      <div className="truncate">
                        <h4 className="text-xs font-extrabold text-slate-900 dark:text-white truncate">{friend.name}</h4>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${friend.rankColor} inline-block mt-0.5`}>
                          {friend.rank}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => setSelectedFriendDuel(friend)}
                        className="p-2 rounded-xl text-slate-400 hover:text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950/40 transition-colors cursor-pointer"
                        title="Tantang Duel"
                      >
                        <Gamepad2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-xl text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>

      </div>

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL: RANK ROADMAP GUIDE & TIERS ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {showRoadmapModal && (
        <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#131827] rounded-3xl w-full max-w-2xl p-6 md:p-8 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-white">Roadmap Peringkat & Target Poin Kuis</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Tingkatkan total nilai seluruh kuis untuk naik level dan raih badge kehormatan</p>
                </div>
              </div>
              <button onClick={() => setShowRoadmapModal(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">✕</button>
            </div>

            <div className="space-y-3">
              {RANK_TIERS.map((tier) => {
                const isCurrent = rankInfo.currentTier.tier === tier.tier;
                return (
                  <div
                    key={tier.tier}
                    className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-4 ${
                      isCurrent
                        ? `${tier.bgLight} ${tier.borderColor} ring-2 ring-teal-500 shadow-md`
                        : 'bg-slate-50 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{tier.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className={`text-sm font-black ${tier.textColor}`}>{tier.title}</h4>
                          {isCurrent && (
                            <span className="px-2 py-0.5 bg-teal-600 text-white text-[9px] font-black rounded-full">
                              TIER ANDA
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{tier.description}</p>
                        <span className="text-[10px] text-teal-600 dark:text-teal-400 font-bold mt-1 block">
                          🎁 Hadiah/Perk: {tier.perks}
                        </span>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-black text-slate-900 dark:text-white block">
                        {tier.maxPoints === Infinity ? `${tier.minPoints.toLocaleString()}+ PTS` : `${tier.minPoints.toLocaleString()} - ${tier.maxPoints.toLocaleString()} PTS`}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setShowRoadmapModal(false)}
              className="w-full py-2.5 rounded-xl bg-[#0E7A81] text-white text-xs font-black shadow cursor-pointer"
            >
              Mengerti & Lanjutkan Kuis
            </button>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL: PIN GAME CODE ENTRY ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {showPinModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#131827] rounded-3xl w-full max-w-md p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-teal-600" /> Masuk Arena Game
              </h3>
              <button onClick={() => setShowPinModal(false)} className="text-slate-400 hover:text-slate-600 cursor-pointer">✕</button>
            </div>

            <p className="text-xs text-slate-500">Masukkan kode PIN game yang diberikan instruktur atau teman:</p>

            <form onSubmit={handleJoinByPin} className="space-y-4">
              <input
                type="text"
                required
                placeholder="Contoh: QZ-8492"
                value={pinInput}
                onChange={e => setPinInput(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-center font-black text-lg tracking-widest text-slate-800 dark:text-white uppercase focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowPinModal(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-[#0E7A81] hover:bg-[#0B656B] text-white text-xs font-black shadow cursor-pointer"
                >
                  Mulai Main 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL: SEND DUEL CHALLENGE TO FRIEND ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {selectedFriendDuel && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#131827] rounded-3xl w-full max-w-md p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-black text-slate-900 dark:text-white flex items-center gap-2">
                <Swords className="w-5 h-5 text-teal-600" /> Tantang {selectedFriendDuel.name}
              </h3>
              <button onClick={() => setSelectedFriendDuel(null)} className="text-slate-400 hover:text-slate-600 cursor-pointer">✕</button>
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-900 rounded-2xl">
              <img src={selectedFriendDuel.avatar} alt="" className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h4 className="text-xs font-extrabold text-slate-900 dark:text-white">{selectedFriendDuel.name}</h4>
                <span className="text-[10px] text-amber-500 font-bold">Tier: {selectedFriendDuel.rank}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500">Pilih arena tantangan duel yang ingin dimainkan bersama:</p>

            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => handleSendFriendChallenge(selectedFriendDuel)}
                className="p-3 rounded-xl border border-pink-200 bg-pink-50 dark:bg-pink-950/40 text-pink-700 dark:text-pink-300 text-xs font-black text-center cursor-pointer hover:scale-105 transition-all"
              >
                Web Dev Battle (JS)
              </button>
              <button
                onClick={() => handleSendFriendChallenge(selectedFriendDuel)}
                className="p-3 rounded-xl border border-orange-200 bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-300 text-xs font-black text-center cursor-pointer hover:scale-105 transition-all"
              >
                Backend War (PHP)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────────────────── */}
      {/* ── MODAL: CREATE QUIZIZZ (INSTRUCTOR ONLY) ── */}
      {/* ────────────────────────────────────────────────────────────────────────── */}
      {showCreateModal && isInstructor && (
        <div className="fixed inset-0 bg-slate-900/70 dark:bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#0f111a] rounded-3xl w-full max-w-3xl shadow-2xl border border-slate-100 dark:border-purple-900/40 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-purple-900/30 flex items-center justify-between bg-gradient-to-r from-[#0E7A81] to-[#0B656B] text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/20 text-white flex items-center justify-center font-black shadow">
                  <Zap className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white">Studio Pembuat Quizizz ⚡</h3>
                  <p className="text-xs text-teal-100 mt-0.5">Susun kuis interaktif pilihan ganda dengan skor kecepatan</p>
                </div>
              </div>
              <button onClick={() => setShowCreateModal(false)} className="p-2 hover:bg-white/10 text-white rounded-xl cursor-pointer">✕</button>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setShowCreateModal(false); showNotification('Kuis berhasil diterbitkan ke modul pembelajaran!'); }} className="p-6 space-y-5 overflow-y-auto flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 dark:bg-[#0d101d] p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                <div>
                  <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Judul Quizizz</label>
                  <input
                    required
                    type="text"
                    placeholder="Contoh: Kuis Algoritma & Struktur Data ⚡"
                    value={quizForm.title}
                    onChange={e => setQuizForm({ ...quizForm, title: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-white text-xs font-bold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">Modul Pembelajaran</label>
                  <select
                    value={quizForm.moduleId}
                    onChange={e => setQuizForm({ ...quizForm, moduleId: e.target.value })}
                    className="w-full px-4 py-2.5 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-[#0c0e18] text-slate-800 dark:text-white text-xs font-bold focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  >
                    <option value="">-- Semua Modul / Umum --</option>
                    {realModules.map(m => (
                      <option key={m.id} value={m.id}>{m.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-black text-xs text-teal-600 uppercase tracking-wider">Daftar Soal ({questionsForm.length})</h4>
                  <button
                    type="button"
                    onClick={() => setQuestionsForm([...questionsForm, { question: '', optionA: '', optionB: '', optionC: '', optionD: '', correctOption: 'A', explanation: '', points: '1000' }])}
                    className="px-3.5 py-1.5 bg-[#0E7A81] text-white text-xs font-black rounded-xl cursor-pointer"
                  >
                    + Tambah Soal
                  </button>
                </div>

                {questionsForm.map((q, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-[#0d101d] rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-black text-teal-600">Soal #{idx + 1}</span>
                      {questionsForm.length > 1 && (
                        <button type="button" onClick={() => setQuestionsForm(questionsForm.filter((_, i) => i !== idx))} className="text-xs text-rose-500 font-bold cursor-pointer">Hapus</button>
                      )}
                    </div>
                    <input
                      required
                      placeholder="Teks Pertanyaan"
                      value={q.question}
                      onChange={e => { const u = [...questionsForm]; u[idx].question = e.target.value; setQuestionsForm(u); }}
                      className="w-full px-3 py-2 border rounded-xl text-xs font-bold"
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input placeholder="Opsi A" value={q.optionA} onChange={e => { const u = [...questionsForm]; u[idx].optionA = e.target.value; setQuestionsForm(u); }} className="p-2 border rounded-lg text-xs" />
                      <input placeholder="Opsi B" value={q.optionB} onChange={e => { const u = [...questionsForm]; u[idx].optionB = e.target.value; setQuestionsForm(u); }} className="p-2 border rounded-lg text-xs" />
                      <input placeholder="Opsi C" value={q.optionC} onChange={e => { const u = [...questionsForm]; u[idx].optionC = e.target.value; setQuestionsForm(u); }} className="p-2 border rounded-lg text-xs" />
                      <input placeholder="Opsi D" value={q.optionD} onChange={e => { const u = [...questionsForm]; u[idx].optionD = e.target.value; setQuestionsForm(u); }} className="p-2 border rounded-lg text-xs" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t flex justify-end gap-3">
                <button type="button" onClick={() => setShowCreateModal(false)} className="px-4 py-2 text-xs font-bold text-slate-500 cursor-pointer">Batal</button>
                <button type="submit" className="px-5 py-2 bg-[#0E7A81] text-white text-xs font-black rounded-xl cursor-pointer">
                  Terbitkan Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
