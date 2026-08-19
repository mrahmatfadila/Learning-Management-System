'use client';

import {
  BookOpen, CheckCircle, Clock, Users, Plus, Settings, MessageSquare,
  Home, Compass, CheckSquare, Trophy, Medal, Award, Activity, PlayCircle,
  TrendingUp, Sparkles, BarChart, Code, LogOut, ArrowRight, Star,
  LayoutDashboard, PenTool, MonitorPlay, Inbox, Folder, FileText,
  DollarSign, Shield, Code2, Calendar, Zap
} from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [user, setUser] = useState<{ name: string; role: string; profilePicture?: string } | null>(null);
  const [activeGroup, setActiveGroup] = useState('home');
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  useEffect(() => {
    const loadAndSetUser = () => {
      const stored = localStorage.getItem('lms_user');
      if (stored) {
        try {
          const u = JSON.parse(stored);
          setUser(u);
          return u;
        } catch { /* ignore */ }
      }
      return null;
    };

    let uRole = 'STUDENT';
    const u = loadAndSetUser();
    if (u) uRole = u?.role?.toUpperCase() || 'STUDENT';

    // Poll every 3s to catch profilePicture updates
    const interval = setInterval(() => { loadAndSetUser(); }, 3000);

    const view = searchParams.get('view');
    const tab  = searchParams.get('tab');
    const role = searchParams.get('role');
    const filter = searchParams.get('filter');
    const action = searchParams.get('action');

    // ── Separate route pages (not /dashboard) ─────────────────────────────
    if (pathname.startsWith('/dashboard/activity-log')) {
      setActiveGroup('home');
      setActiveMenu('Activity Log');
      return;
    }
    if (pathname.startsWith('/dashboard/tasks')) {
      setActiveGroup('assignments');
      setActiveMenu('Task & Grading');
      return;
    }
    if (pathname.startsWith('/dashboard/users')) {
      setActiveGroup('users');
      if (searchParams.get('tab') === 'roles')        setActiveMenu('Roles & Permissions');
      else if (searchParams.get('tab') === 'security') setActiveMenu('Security & Audit');
      else if (role === 'ADMIN')                      setActiveMenu('Admins');
      else if (role === 'INSTRUCTOR')                 setActiveMenu('Instructors');
      else if (role === 'STUDENT')                    setActiveMenu('Students');
      else                                            setActiveMenu('All Users');
      return;
    }
    if (pathname.startsWith('/dashboard/manage-modules')) {
      setActiveGroup('courses');
      if (view === 'categories')           setActiveMenu('Categories');
      else if (view === 'approvals')       setActiveMenu('Approvals');
      else if (view === 'instructors')     setActiveMenu('Instructor Assignment');
      else if (view === 'analytics')       setActiveMenu('Course Analytics');
      else if (action === 'create')        setActiveMenu(uRole === 'ADMIN' ? 'Add New Course' : 'Create Course');
      else if (filter === 'drafts')        setActiveMenu('Drafts');
      else                                 setActiveMenu(uRole === 'ADMIN' ? 'All Courses' : 'My Courses');
      return;
    }
    if (pathname.startsWith('/dashboard/modules')) {
      const fromParam = searchParams.get('from');
      if (fromParam === 'in-progress' || fromParam === 'my-courses') {
        setActiveGroup('courses');
        setActiveMenu('In Progress');
      } else if (uRole === 'STUDENT') {
        setActiveGroup('explore');
        setActiveMenu('Browse Courses');
      } else {
        setActiveGroup('courses');
        setActiveMenu(uRole === 'ADMIN' ? 'All Courses' : 'My Courses');
      }
      return;
    }

    // ── Main /dashboard page — resolve by ?view= and ?tab= ────────────────
    if (pathname === '/dashboard') {
      // Instructor-specific
      if (view === 'dashboard-overview')  { setActiveGroup('overview');     setActiveMenu('Dashboard Overview'); return; }
      if (view === 'recent-activity')     { setActiveGroup('overview');     setActiveMenu('Recent Activity');    return; }
      if (view === 'enrolled-students')   { setActiveGroup('students');     setActiveMenu('Manajemen Siswa');    return; }
      if (view === 'progress-tracking')   { setActiveGroup('students');     setActiveMenu('Progress Siswa');     return; }
      if (view === 'discussions')         { setActiveGroup('community'); setActiveMenu(uRole === 'STUDENT' ? 'Discussions' : 'Diskusi & QA'); return; }
      if (view === 'quizizz')             { setActiveGroup('assignments');  setActiveMenu(uRole === 'STUDENT' ? 'Quizizz Arena ⚡' : 'Quizizz Studio ⚡'); return; }
      if (view === 'manage-tasks')        { setActiveGroup('assignments');  setActiveMenu('Task & Grading');     return; }
      // Shared assignment views
      if (view === 'pending-tasks')       { setActiveGroup('assignments');  setActiveMenu('Pending Tasks');      return; }
      if (view === 'submitted')           { setActiveGroup('assignments');  setActiveMenu('Submitted');          return; }
      if (view === 'grades')              { setActiveGroup('assignments');  setActiveMenu('Grades & Feedback');  return; }
      // Schedule / settings
      if (view === 'offline-schedule')    { setActiveGroup('schedule');     setActiveMenu('Jadwal Offline');     return; }
      if (view === 'profile-settings')    { setActiveGroup('settings');     setActiveMenu('Profile Settings');   return; }
      // Approvals (instructor/admin)
      if (view === 'approvals')           { setActiveGroup('courses');      setActiveMenu('Approvals');          return; }
      // Student course tabs
      if (tab === 'browse' || view === 'browse-courses') { setActiveGroup('explore');  setActiveMenu('Browse Courses');    return; }
      if (tab === 'recommended')          { setActiveGroup('explore');      setActiveMenu('Recommended (AI)');   return; }
      if (tab === 'paths')                { setActiveGroup('explore');      setActiveMenu('Learning Paths');     return; }
      if (tab === 'in-progress' || view === 'in-progress') { setActiveGroup('courses'); setActiveMenu('In Progress'); return; }
      if (view === 'completed')           { setActiveGroup('courses');      setActiveMenu('Completed');          return; }
      if (view === 'certificates')        { setActiveGroup('courses');      setActiveMenu('Certificates');       return; }
      // Gamification
      if (view === 'my-badges')           { setActiveGroup('achievements'); setActiveMenu('My Badges');          return; }
      if (view === 'leaderboard')         { setActiveGroup('achievements'); setActiveMenu('Leaderboard');        return; }
      if (view === 'daily-streaks')       { setActiveGroup('achievements'); setActiveMenu('Daily Streaks');      return; }
      // Community
      if (view === 'q-a-forum')           { setActiveGroup('community');    setActiveMenu('Q&A Forum');          return; }

      // Default home
      if (uRole === 'STUDENT') { setActiveGroup('home'); setActiveMenu('Dashboard'); }
      else                     { setActiveGroup('overview'); setActiveMenu('Dashboard Overview'); }
      return;
    }

    // Fallback for any other unmatched route — use first group/menu of the role
    if (uRole === 'STUDENT') { setActiveGroup('home'); setActiveMenu('Dashboard'); }
    else                     { setActiveGroup('overview'); setActiveMenu('Dashboard Overview'); }

    return () => clearInterval(interval);
  }, [pathname, searchParams]);


  const handleLogout = () => {
    localStorage.removeItem('lms_user');
    localStorage.removeItem('lms_token');
    document.cookie = 'lms_token=; path=/; max-age=0';
    window.location.href = '/login';
  };

  const role = user?.role?.toUpperCase() || 'STUDENT';

  const studentPrimaryIcons = [
    { id: 'home', icon: Home, tooltip: 'Dashboard Home', href: '/dashboard' },
    { id: 'explore', icon: Compass, tooltip: 'Explore Courses', href: '/dashboard?tab=browse' },
    { id: 'courses', icon: BookOpen, tooltip: 'My Learning', href: '/dashboard?tab=in-progress' },
    { id: 'assignments', icon: CheckSquare, tooltip: 'Assignments', href: '/dashboard?view=pending-tasks' },
    { id: 'schedule', icon: Calendar, tooltip: 'Schedule', href: '/dashboard?view=offline-schedule' },
    { id: 'community', icon: MessageSquare, tooltip: 'Community', href: '/dashboard?view=discussions' },
  ];

  const instructorPrimaryIcons = [
    { id: 'overview', icon: LayoutDashboard, tooltip: 'Dashboard Overview', href: '/dashboard' },
    { id: 'courses', icon: BookOpen, tooltip: 'Course Management', href: '/dashboard/manage-modules' },
    { id: 'assignments', icon: CheckSquare, tooltip: 'Quizzes & Assignments', href: '/dashboard?view=manage-tasks' },
    { id: 'schedule', icon: Calendar, tooltip: 'Schedule', href: '/dashboard?view=offline-schedule' },
    { id: 'students', icon: Users, tooltip: 'Student Management', href: '/dashboard?view=enrolled-students' },
    { id: 'community', icon: MessageSquare, tooltip: 'Community', href: '/dashboard?view=discussions' },
    { id: 'live', icon: MonitorPlay, tooltip: 'Live Teaching', href: '/dashboard' },
  ];

  const adminPrimaryIcons = [
    { id: 'overview', icon: LayoutDashboard, tooltip: 'Dashboard Overview', href: '/dashboard' },
    { id: 'users', icon: Users, tooltip: 'User Management', href: '/dashboard/users' },
    { id: 'courses', icon: BookOpen, tooltip: 'Course Management', href: '/dashboard/manage-modules' },
    { id: 'community', icon: MessageSquare, tooltip: 'Community', href: '/dashboard?view=discussions' },
    { id: 'finance', icon: DollarSign, tooltip: 'Finance & Payments', href: '/dashboard' },
    { id: 'analytics', icon: BarChart, tooltip: 'Analytics & Reports', href: '/dashboard' },
    { id: 'settings', icon: Settings, tooltip: 'System Settings', href: '/dashboard' },
  ];

  const primaryIcons =
    role === 'INSTRUCTOR' ? instructorPrimaryIcons :
    role === 'ADMIN' ? adminPrimaryIcons :
    studentPrimaryIcons;

  const iconBg =
    role === 'INSTRUCTOR' ? 'bg-emerald-600' :
    role === 'ADMIN' ? 'bg-indigo-900' :
    'bg-[#5A4AF4]';

  const sidebarTitle =
    role === 'INSTRUCTOR' ? 'Instructor Studio' :
    role === 'ADMIN' ? 'Admin Center' :
    'Student Portal';

  const studentSidebarMenus: Record<string, { title: string; menus: { name: string; icon: any; href: string }[] }> = {
    home: {
      title: 'Home',
      menus: [
        { name: 'Dashboard', icon: Home, href: '/dashboard' },
        { name: 'Activity Log', icon: Activity, href: '/dashboard/activity-log' },
      ],
    },
    explore: {
      title: 'Catalog',
      menus: [
        { name: 'Browse Courses', icon: Compass, href: '/dashboard?tab=browse' },
        { name: 'Recommended (AI)', icon: Sparkles, href: '/dashboard?tab=recommended' },
        { name: 'Learning Paths', icon: TrendingUp, href: '/dashboard?tab=paths' },
      ],
    },
    courses: {
      title: 'My Learning',
      menus: [
        { name: 'In Progress', icon: PlayCircle, href: '/dashboard?tab=in-progress' },
        { name: 'Completed', icon: CheckCircle, href: '/dashboard?view=completed' },
        { name: 'Certificates', icon: Award, href: '/dashboard?view=certificates' },
      ],
    },
    assignments: {
      title: 'Assessments',
      menus: [
        { name: 'Quizizz Arena ⚡', icon: Zap, href: '/dashboard?view=quizizz' },
        { name: 'Pending Tasks', icon: Clock, href: '/dashboard?view=pending-tasks' },
        { name: 'Submitted', icon: CheckSquare, href: '/dashboard?view=submitted' },
        { name: 'Grades & Feedback', icon: BarChart, href: '/dashboard?view=grades' },
      ],
    },
    schedule: {
      title: 'Schedule',
      menus: [
        { name: 'Jadwal Offline', icon: Calendar, href: '/dashboard?view=offline-schedule' },
      ],
    },
    community: {
      title: 'Community',
      menus: [
        { name: 'Discussions', icon: MessageSquare, href: '/dashboard?view=discussions' },
        { name: 'Q&A Forum', icon: Users, href: '/dashboard?view=q-a-forum' },
      ],
    },
    achievements: {
      title: 'Gamification',
      menus: [
        { name: 'My Badges', icon: Medal, href: '/dashboard?view=my-badges' },
        { name: 'Leaderboard', icon: Trophy, href: '/dashboard?view=leaderboard' },
        { name: 'Daily Streaks', icon: Activity, href: '/dashboard?view=daily-streaks' },
      ],
    },
  };

  const instructorSidebarMenus: Record<string, { title: string; menus: { name: string; icon: any; href: string }[] }> = {
    overview: { title: 'Overview', menus: [
      { name: 'Dashboard Overview', icon: LayoutDashboard, href: '/dashboard?view=dashboard-overview' },
      { name: 'Recent Activity', icon: Activity, href: '/dashboard?view=recent-activity' }
    ]},
    courses: { title: 'Courses', menus: [
      { name: 'My Courses', icon: BookOpen, href: '/dashboard/manage-modules' },
      { name: 'Create Course', icon: Plus, href: '/dashboard/manage-modules?action=create' },
      { name: 'Drafts', icon: Folder, href: '/dashboard/manage-modules?filter=drafts' },
      { name: 'Approvals', icon: CheckCircle, href: '/dashboard/manage-modules?view=approvals' }
    ]},
    builder: { title: 'Content Builder', menus: [
      { name: 'Lesson Editor', icon: PenTool, href: '/dashboard/manage-modules' },
      { name: 'Code Sandbox', icon: Code, href: '/dashboard?view=code-sandbox' },
      { name: 'Resource Library', icon: Folder, href: '/dashboard?view=resource-library' }
    ]},
    assignments: { title: 'Assessments & Quiz', menus: [
      { name: 'Quizizz Studio ⚡', icon: Zap, href: '/dashboard?view=quizizz' },
      { name: 'Task & Grading', icon: CheckSquare, href: '/dashboard?view=manage-tasks' }
    ]},
    schedule: { title: 'Schedule', menus: [
      { name: 'Jadwal Offline', icon: Calendar, href: '/dashboard?view=offline-schedule' }
    ]},
    students: { title: 'Students', menus: [
      { name: 'Manajemen Siswa', icon: Users, href: '/dashboard?view=enrolled-students' },
      { name: 'Progress Siswa', icon: BarChart, href: '/dashboard?view=progress-tracking' },
      { name: 'Diskusi & QA', icon: MessageSquare, href: '/dashboard?view=discussions' }
    ]},
    community: { title: 'Community', menus: [
      { name: 'Diskusi & QA', icon: MessageSquare, href: '/dashboard?view=discussions' },
      { name: 'Q&A Forum', icon: Users, href: '/dashboard?view=q-a-forum' }
    ]},
    live: { title: 'Live Teaching', menus: [
      { name: 'Presentation Mode', icon: MonitorPlay, href: '/dashboard?view=presentation-mode' },
      { name: 'Q&A Sessions', icon: MessageSquare, href: '/dashboard?view=qa-sessions' }
    ]},
    settings: { title: 'Settings', menus: [
      { name: 'Profile Settings', icon: Settings, href: '/dashboard?view=profile-settings' }
    ]},
  };

  const adminSidebarMenus: Record<string, { title: string; menus: { name: string; icon: any; href: string }[] }> = {
    overview: { title: 'Overview', menus: [
      { name: 'Dashboard Overview', icon: LayoutDashboard, href: '/dashboard?view=dashboard-overview' },
      { name: 'Recent Activities', icon: Activity, href: '/dashboard?view=recent-activity' }
    ]},
    users: { title: 'User Management', menus: [
      { name: 'All Users', icon: Users, href: '/dashboard/users' },
      { name: 'Admins', icon: Shield, href: '/dashboard/users?role=ADMIN' },
      { name: 'Instructors', icon: FileText, href: '/dashboard/users?role=INSTRUCTOR' },
      { name: 'Students', icon: Users, href: '/dashboard/users?role=STUDENT' },
      { name: 'Roles & Permissions', icon: Shield, href: '/dashboard/users?tab=roles' },
      { name: 'Security & Audit', icon: Activity, href: '/dashboard/users?tab=security' }
    ]},
    courses: { title: 'Course Management', menus: [
      { name: 'All Courses', icon: BookOpen, href: '/dashboard/manage-modules' },
      { name: 'Categories', icon: Folder, href: '/dashboard/manage-modules?view=categories' },
      { name: 'Approvals', icon: CheckCircle, href: '/dashboard/manage-modules?view=approvals' },
      { name: 'Instructor Assignment', icon: Users, href: '/dashboard/manage-modules?view=instructors' },
      { name: 'Course Analytics', icon: BarChart, href: '/dashboard/manage-modules?view=analytics' }
    ]},
    community: { title: 'Community', menus: [
      { name: 'Diskusi & QA', icon: MessageSquare, href: '/dashboard?view=discussions' },
      { name: 'Q&A Forum', icon: Users, href: '/dashboard?view=q-a-forum' }
    ]},
    finance: { title: 'Finance & Payments', menus: [
      { name: 'Revenue Dashboard', icon: BarChart, href: '/dashboard?view=revenue-dashboard' },
      { name: 'Transactions', icon: DollarSign, href: '/dashboard?view=transactions' },
      { name: 'Payouts', icon: FileText, href: '/dashboard?view=payouts' }
    ]},
    analytics: { title: 'Analytics & Reports', menus: [
      { name: 'Student Engagement', icon: Activity, href: '/dashboard?view=student-engagement' },
      { name: 'Course Popularity', icon: Star, href: '/dashboard?view=course-popularity' },
      { name: 'Drop-out Risks', icon: TrendingUp, href: '/dashboard?view=drop-out-risks' }
    ]},
    settings: { title: 'System Settings', menus: [
      { name: 'Profile Settings', icon: Settings, href: '/dashboard?view=profile-settings' },
      { name: 'General Settings', icon: Settings, href: '/dashboard?view=general-settings' },
      { name: 'Security & Logs', icon: Shield, href: '/dashboard?view=security-logs' },
      { name: 'Integrations', icon: Compass, href: '/dashboard?view=integrations' }
    ]},
  };

  const sidebarMenus =
    role === 'INSTRUCTOR' ? instructorSidebarMenus :
    role === 'ADMIN' ? adminSidebarMenus :
    studentSidebarMenus;

  const currentGroup = sidebarMenus[activeGroup] || Object.values(sidebarMenus)[0];

  return (
    <>
      {/* LEFT-MOST THIN SIDEBAR */}
      <div className="w-[72px] h-full hidden md:flex flex-col items-center py-6 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0c0e18] z-20 shrink-0 justify-between shadow-sm transition-colors duration-300">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className={`w-10 h-10 ${iconBg} rounded-xl flex items-center justify-center text-white font-bold text-xl mb-2 cursor-pointer shadow-md`}>
            <BookOpen className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-4 w-full items-center">
            {primaryIcons.map((pi) => (
              <Link
                key={pi.id}
                href={pi.href}
                onClick={() => setActiveGroup(pi.id)}
                title={pi.tooltip}
                className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors relative ${
                  activeGroup === pi.id
                    ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 shadow-sm'
                    : 'text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/20'
                }`}
              >
                <pi.icon className="w-5 h-5" />
                {activeGroup === pi.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-600 dark:bg-indigo-500 rounded-r-full" />
                )}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full items-center">
          <button onClick={() => { router.push('/dashboard?view=profile-settings'); }} className="w-10 h-10 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-slate-650 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-10 h-10 flex items-center justify-center text-slate-700 bg-amber-200 rounded-xl font-bold text-sm shadow-sm uppercase overflow-hidden shrink-0">
            {user?.profilePicture ? (
              <img src={user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              user?.name?.slice(0, 2) || 'ME'
            )}
          </div>
          <button
            onClick={handleLogout}
            title="Logout"
            className="w-10 h-10 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-xl transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* INNER SIDEBAR */}
      <div className="w-64 h-full bg-white dark:bg-[#0a0c14] hidden md:flex flex-col border-r border-slate-200 dark:border-slate-800 shrink-0 z-10 shadow-sm transition-colors duration-300">
        <div className="p-6 pb-2 flex items-center justify-between">
          <h2 className="font-bold text-slate-800 dark:text-white text-lg">{sidebarTitle}</h2>
        </div>
        <div className="flex-1 overflow-y-auto px-4 py-2 scrollbar-hide">
          <div className="space-y-1 mb-8 mt-4">
            <div className="px-3 mb-3 text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
              {currentGroup.title}
            </div>
            {currentGroup.menus.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setActiveMenu(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                  activeMenu === item.name
                    ? 'bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                <item.icon className={`w-4 h-4 ${activeMenu === item.name ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500'}`} />
                {item.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
      {/* MOBILE BOTTOM NAVIGATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-[#0c0e18] border-t border-slate-200 dark:border-slate-800 z-[60] px-4 py-2 flex justify-between items-center shadow-[0_-5px_20px_rgba(0,0,0,0.05)] dark:shadow-none pb-safe transition-colors duration-300">
        {primaryIcons.slice(0, 5).map((pi) => (
          <Link
            key={pi.id}
            href={pi.href}
            onClick={() => setActiveGroup(pi.id)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl transition-colors ${activeGroup === pi.id ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-350'}`}
          >
            <pi.icon className="w-5 h-5 mb-1" />
            <span className="text-[9px] font-bold truncate max-w-[60px] text-center">{pi.id.charAt(0).toUpperCase() + pi.id.slice(1)}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
