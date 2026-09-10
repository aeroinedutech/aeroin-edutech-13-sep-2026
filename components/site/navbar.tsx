'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Rocket, ChevronDown, Briefcase, FlaskConical, Lightbulb, GraduationCap, BookOpen, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/research-internship', label: 'Research Internship' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const offerLinks = [
  { href: '/programs', label: 'Programs', icon: <Briefcase className="h-4 w-4" /> },
  { href: '/boot-camps', label: 'Boot Camps', icon: <Rocket className="h-4 w-4" /> },
  { href: '/ideation-workshops', label: 'Ideation Workshops', icon: <Lightbulb className="h-4 w-4" /> },
  { href: '/faculty-development', label: 'Faculty Development Programs', icon: <GraduationCap className="h-4 w-4" /> },
  { href: '/value-added-programs', label: 'Value Added Programs', icon: <BookOpen className="h-4 w-4" /> },
  { href: '/space-lab', label: 'Space Lab Setup', icon: <Building2 className="h-4 w-4" /> },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  const isOfferActive = offerLinks.some((l) => pathname === l.href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[hsl(222_47%_7%)]/90 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/image-removebg-preview.png"
            alt="Aeroin EduTech"
            width={180}
            height={56}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            if (link.href === '/programs') {
              return (
                <div
                  key="offer-dropdown"
                  className="relative"
                  onMouseEnter={() => setOfferOpen(true)}
                  onMouseLeave={() => setOfferOpen(false)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors',
                      isOfferActive ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                    )}
                  >
                    What We Offer
                    <ChevronDown className={cn('h-3.5 w-3.5 transition-transform', offerOpen && 'rotate-180')} />
                  </button>
                  {offerOpen && (
                    <div className="absolute left-0 top-full w-64 rounded-lg border border-white/10 bg-[hsl(222_47%_7%)] p-2 shadow-xl">
                      {offerLinks.map((ol) => (
                        <Link
                          key={ol.href}
                          href={ol.href}
                          className={cn(
                            'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors',
                            pathname === ol.href
                              ? 'bg-blue-600/20 text-blue-400'
                              : 'text-slate-300 hover:bg-white/5 hover:text-white'
                          )}
                        >
                          <span className="text-blue-400">{ol.icon}</span>
                          {ol.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-md px-4 py-2 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-blue-400'
                    : 'text-slate-300 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button asChild className="bg-blue-600 hover:bg-blue-500">
            <Link href="/programs">Explore Programs</Link>
          </Button>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-200 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[hsl(222_47%_7%)] md:hidden">
          <div className="space-y-1 px-4 py-4">
            {/* What We Offer section */}
            <p className="px-4 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              What We Offer
            </p>
            {offerLinks.map((ol) => (
              <Link
                key={ol.href}
                href={ol.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-md px-4 py-2.5 text-sm font-medium transition-colors',
                  pathname === ol.href
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                )}
              >
                <span className="text-blue-400">{ol.icon}</span>
                {ol.label}
              </Link>
            ))}
            <div className="my-2 border-t border-white/10" />
            {navLinks.filter((l) => l.href !== '/programs').map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  'block rounded-md px-4 py-2.5 text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'bg-blue-600/20 text-blue-400'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full bg-blue-600 hover:bg-blue-500">
              <Link href="/programs" onClick={() => setOpen(false)}>
                Explore Programs
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
