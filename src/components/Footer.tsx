'use client';

import Link from 'next/link';
import { LINKS } from '@/constants';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-lg py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">HH Connect</h3>
            <p className="text-slate-400 text-sm">
              Connect with professionals, find jobs, build portfolios, and collaborate on projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href={LINKS.HOME} className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href={LINKS.JOBS} className="hover:text-white transition-colors">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href={LINKS.COMPANIES} className="hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href={LINKS.PRICING} className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-8 flex items-center justify-between">
          <p className="text-sm text-slate-400">
            &copy; 2026 HH Connect. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* Social Links */}
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
