import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aeroinedutech.in'),
  title: {
  default: 'Aeroin EduTech | Aerospace, Space Technology & STEM Education',
  template: '%s | Aeroin EduTech',
},
  description:
    description:
  'Explore aerospace engineering, space technology, AI, robotics and satellite systems through practical learning programs, school STEM education and research internships at Aeroin EduTech.',
  keywords: [
    'space technology',
    'aerospace engineering',
    'AI programs',
    'robotics',
    'CubeSat',
    'rocket propulsion',
    'earth observation',
    'planetary exploration',
    'research internship',
    'Aeroin EduTech',
  ],
  openGraph: {
    title: 'Aeroin EduTech | Space Technology & Aerospace Programs',
    description:
      'Learn space technology, aerospace engineering, AI, robotics, satellite technology and planetary exploration with Aeroin EduTech.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
