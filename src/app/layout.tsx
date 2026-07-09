import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: 'HH Connect | Professional Networking & Job Platform',
  description: 'Connect with professionals, find jobs, build portfolios, and collaborate on projects.',
  keywords: ['jobs', 'portfolio', 'freelance', 'networking', 'careers'],
  openGraph: {
    title: 'HH Connect',
    description: 'Professional Networking & Job Platform',
    url: 'https://hhconnect.com',
    siteName: 'HH Connect',
    images: [
      {
        url: 'https://hhconnect.com/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HH Connect',
    description: 'Professional Networking & Job Platform',
    images: ['https://hhconnect.com/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
