'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks';
import { LINKS } from '@/constants';
import { Button } from './ui/button';

export function Navigation() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push(LINKS.HOME);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="container-lg h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href={LINKS.HOME} className="text-2xl font-bold gradient-text">
          HH Connect
        </Link>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href={LINKS.HOME} className="text-sm font-medium hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href={LINKS.JOBS} className="text-sm font-medium hover:text-blue-600 transition-colors">
            Jobs
          </Link>
          <Link href={LINKS.COMPANIES} className="text-sm font-medium hover:text-blue-600 transition-colors">
            Companies
          </Link>
          <Link href={LINKS.FREELANCERS} className="text-sm font-medium hover:text-blue-600 transition-colors">
            Freelancers
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link href={LINKS.DASHBOARD}>
                <Button variant="ghost" size="sm">
                  Dashboard
                </Button>
              </Link>
              <Button variant="secondary" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link href={LINKS.LOGIN}>
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link href={LINKS.REGISTER}>
                <Button variant="primary" size="sm">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
