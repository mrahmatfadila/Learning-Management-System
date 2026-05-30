'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import DashboardSidebar from '@/components/DashboardSidebar';
import DashboardNavbar from '@/components/DashboardNavbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Pages that fully manage their own layout (no wrapper needed)
  const isLessonPage = pathname.includes('/lesson/');
  const isMainDashboard = pathname === '/dashboard';
  const isQuizEditor = pathname.includes('/quiz/') && pathname.includes('/edit');

  if (isLessonPage || isMainDashboard || isQuizEditor) {
    return <>{children}</>;
  }

  // All other dashboard pages get navbar + sidebar
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-slate-50 dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors duration-300">
      <DashboardNavbar />
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />
        <main className="flex-1 overflow-y-auto bg-[#F4F5F7] dark:bg-[#0f111a] pb-28 md:pb-0 transition-colors duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}

