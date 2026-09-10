import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export interface OfferCategory {
  title: string;
  description: string;
  image: string;
  href: string;
  ctaLabel: string;
  badge?: string;
}

export const OFFER_CATEGORIES: OfferCategory[] = [
  {
    title: 'Skilling Programs',
    description:
      'Build practical skills in aerospace, space technology, engineering, and emerging technologies.',
    image: '/images/hero/image copy 6.png',
    href: '/programs',
    ctaLabel: 'Explore Programs',
    badge: 'LEARN',
  },
  {
    title: 'Boot Camps',
    description:
      'Intensive hands-on learning experiences designed around practical aerospace and technology projects.',
    image: '/images/hero/image copy 7.png',
    href: '/boot-camps',
    ctaLabel: 'Explore Boot Camps',
    badge: 'EXPERIENCE',
  },
  {
    title: 'Ideation Workshops',
    description:
      'Transform ideas into innovative technical concepts, projects, and solutions.',
    image: '/images/hero/image copy 8.png',
    href: '/ideation-workshops',
    ctaLabel: 'Explore Workshops',
    badge: 'EXPERIENCE',
  },
  {
    title: 'Faculty Development Programs',
    description:
      'Upskill educators with emerging aerospace, space technology, and modern STEM education practices.',
    image: '/images/hero/image copy 9.png',
    href: '/faculty-development',
    ctaLabel: 'Explore FDPs',
    badge: 'ENABLE',
  },
  {
    title: 'Value Added Programs',
    description:
      'Specialized technical learning programs designed to complement academic education.',
    image: '/images/hero/image copy 10.png',
    href: '/value-added-programs',
    ctaLabel: 'Explore Programs',
    badge: 'ENABLE',
  },
  {
    title: 'Space Lab Setup',
    description:
      'Create a practical aerospace and space-technology learning environment for your institution.',
    image: '/images/hero/image copy 11.png',
    href: '/space-lab',
    ctaLabel: 'Explore Space Labs',
    badge: 'ENABLE',
  },
];

export function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="py-20 bg-[hsl(222_47%_5%)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
            What We Offer
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Explore Aerospace Learning, Innovation &amp; Institutional Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-400">
            Explore our range of aerospace learning, innovation, training, and institutional solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {OFFER_CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 transition-all hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-900/20"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_7%)] via-[hsl(222_47%_7%)]/50 to-transparent" />
                {cat.badge && (
                  <span className="absolute left-4 top-4 rounded-full border border-blue-400/30 bg-blue-600/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-blue-300 backdrop-blur-sm">
                    {cat.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="relative -mt-16 px-5 pb-5 pt-2">
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{cat.description}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-all group-hover:gap-3">
                  {cat.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
