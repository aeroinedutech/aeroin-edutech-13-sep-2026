import type { MetadataRoute } from 'next';
import { ALL_PROGRAMS_WITH_RESEARCH } from '@/lib/courses';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aeroinedutech.in';
  const staticPages = [
    '',
    '/programs',
    '/research-internship',
    '/boot-camps',
    '/ideation-workshops',
    '/faculty-development',
    '/value-added-programs',
    '/space-lab',
    '/about',
    '/careers',
    '/contact',
    '/terms',
    '/privacy',
    '/refund',
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.8,
  }));

  const programEntries = ALL_PROGRAMS_WITH_RESEARCH.map((program) => ({
    url: `${baseUrl}/programs/${program.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...programEntries];
}
