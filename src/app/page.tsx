import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { LINKS } from '@/constants';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />

        <div className="container-lg relative z-10 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h1 className="h1 leading-tight">
                Connect, Grow, and <span className="gradient-text">Succeed</span> Together
              </h1>
              <p className="body-lg max-w-lg">
                HH Connect is your all-in-one platform for professional networking, job hunting, portfolio building, and project collaboration.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href={LINKS.REGISTER}>
                  <Button size="lg" variant="primary">
                    Get Started Free
                  </Button>
                </Link>
                <Link href={LINKS.JOBS}>
                  <Button size="lg" variant="outline">
                    Browse Jobs
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Active Users</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">5K+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Jobs Posted</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">500+</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Companies</p>
                </div>
              </div>
            </div>

            {/* Visual */}
            <div className="relative h-96 md:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-md" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-white dark:bg-slate-900">
        <div className="container-lg">
          <div className="text-center mb-16">
            <h2 className="h2 mb-4">Why Choose HH Connect?</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Everything you need to advance your career or grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '💼',
                title: 'Job Opportunities',
                description: 'Browse thousands of curated job listings from top companies worldwide.',
              },
              {
                icon: '🎨',
                title: 'Portfolio Builder',
                description: 'Showcase your work with our beautiful, customizable portfolio templates.',
              },
              {
                icon: '🤝',
                title: 'Networking',
                description: 'Connect with professionals, recruiters, and like-minded individuals.',
              },
              {
                icon: '💻',
                title: 'Freelance Projects',
                description: 'Find and bid on exciting projects from clients around the globe.',
              },
              {
                icon: '📊',
                title: 'Analytics',
                description: 'Track your profile views, applications, and career progress in real-time.',
              },
              {
                icon: '🔒',
                title: 'Secure Platform',
                description: 'Your data is protected with enterprise-grade security measures.',
              },
            ].map((feature, i) => (
              <div key={i} className="card p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="h4 mb-2">{feature.title}</h3>
                <p className="body-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="container-lg text-center">
          <h2 className="h2 mb-4">Ready to Transform Your Career?</h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
            Join thousands of professionals already using HH Connect to achieve their goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={LINKS.REGISTER}>
              <Button size="lg" variant="secondary">
                Create Free Account
              </Button>
            </Link>
            <Link href={LINKS.CONTACT}>
              <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
