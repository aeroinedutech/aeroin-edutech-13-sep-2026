'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ProgramCard } from '@/components/site/program-card';
import { ALL_PROGRAMS, type LearnerCategory, type ProgramLevel, type SubjectCategory } from '@/lib/courses';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, SlidersHorizontal, Briefcase, School, X, FlaskConical, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SUBJECT_CATEGORIES: SubjectCategory[] = [
  'Space Technology',
  'AI & Machine Learning',
  'Robotics',
  'Earth Observation',
  'Aerospace Engineering',
  'UAV & Drones',
  'Astronomy',
];

const LEVELS: ProgramLevel[] = ['Beginner', 'Intermediate', 'Advanced'];

const DURATION_FILTERS = ['3 Days', '15 Days', '4 Weeks', '8 Weeks', '3 Months'] as const;
const LEARNING_LEVEL_FILTERS = ['Foundation', 'Master', 'Innovative', 'Advanced', 'Deep Research'] as const;

function ProgramsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState('');
  const [learnerCategory, setLearnerCategory] = useState<LearnerCategory | 'all'>(
    (searchParams.get('category') as LearnerCategory) || 'all'
  );
  const [subjectFilter, setSubjectFilter] = useState<SubjectCategory | null>(null);
  const [levelFilter, setLevelFilter] = useState<ProgramLevel | null>(null);
  const [durationFilter, setDurationFilter] = useState<string | null>(null);
  const [learningLevelFilter, setLearningLevelFilter] = useState<string | null>(null);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat === 'professional' || cat === 'school' || cat === 'research') {
      setLearnerCategory(cat);
    } else if (cat === 'all') {
      setLearnerCategory('all');
    }
  }, [searchParams]);
  
  useEffect(() => {
    const alreadyShown = sessionStorage.getItem('aeroin_program_popup');

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPromo(true);
        sessionStorage.setItem('aeroin_program_popup', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const filtered = useMemo(() => {
    return ALL_PROGRAMS.filter((program) => {
      if (learnerCategory !== 'all' && program.learnerCategory !== learnerCategory) return false;
      if (subjectFilter && !program.subjectCategories.includes(subjectFilter)) return false;
      if (levelFilter && program.level !== levelFilter) return false;
      if (search) {
        const q = search.toLowerCase();
        if (
          !program.name.toLowerCase().includes(q) &&
          !program.shortDescription.toLowerCase().includes(q) &&
          !program.topics.join(' ').toLowerCase().includes(q)
        )
          return false;
      }
      return true;
    });
  }, [search, learnerCategory, subjectFilter, levelFilter]);

  function updateCategory(cat: LearnerCategory | 'all') {
    setLearnerCategory(cat);
    const params = new URLSearchParams(searchParams.toString());
    if (cat === 'all') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    router.replace(`/programs${params.toString() ? `?${params.toString()}` : ''}`);
  }

  function clearFilters() {
    setSearch('');
    setSubjectFilter(null);
    setLevelFilter(null);
    setLearnerCategory('all');
    setDurationFilter(null);
    setLearningLevelFilter(null);
    router.replace('/programs');
  }

  const hasActiveFilters = search || subjectFilter || levelFilter || learnerCategory !== 'all' || durationFilter || learningLevelFilter;

  return (
  <>
    {showPromo && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
        <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-blue-500/30 bg-[hsl(222_47%_8%)] shadow-2xl">

          {/* Close button */}
          <button
            onClick={() => setShowPromo(false)}
            className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 text-slate-400 transition hover:bg-white/20 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Top glow */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-600/20 to-transparent" />

          <div className="relative px-6 py-8 text-center sm:px-10 sm:py-10">

            {/* Admissions badge */}
            <div className="mx-auto mb-5 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-400">
              🚀 Admissions Open
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Start Your Journey Into
              <span className="block text-blue-400">
                Space Technology
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
              Explore industry-focused programs in Space Technology,
              Aerospace, AI, Robotics, Satellites and more.
            </p>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-3 gap-3">

              <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
                <div className="text-xl">🛰️</div>
                <p className="mt-1 text-xs text-slate-300">
                  Practical
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
                <div className="text-xl">🎓</div>
                <p className="mt-1 text-xs text-slate-300">
                  Industry Focus
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-2 py-3">
                <div className="text-xl">🚀</div>
                <p className="mt-1 text-xs text-slate-300">
                  Expert Led
                </p>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <Button
                onClick={() => setShowPromo(false)}
                className="flex-1 bg-blue-600 text-white hover:bg-blue-500"
              >
                Explore Programs
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  window.open(
                    'https://wa.me/919176209914',
                    '_blank'
                  );
                }}
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Talk to Us
              </Button>

            </div>

            {/* Bottom text */}
            <p className="mt-5 text-xs text-slate-500">
              Limited seats available for upcoming batches
            </p>

          </div>
        </div>
      </div>
    )}

    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-white sm:text-5xl">Explore Our Programs</h1>
        <p className="mt-4 text-lg text-slate-400">
          Choose a learning path based on your academic level and career goals.
        </p>
      </div>

      {/* Research Internship banner */}
      <Link
        href="/research-internship"
        className="group mb-8 flex items-center justify-between rounded-2xl border border-blue-500/30 bg-gradient-to-r from-blue-900/30 to-[hsl(222_40%_10%)] p-5 transition-all hover:border-blue-500/50"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
            <FlaskConical className="h-6 w-6 text-blue-400" />
          </div>
          <div>
            <p className="font-bold text-white">Research Internship — 3-Month Programs</p>
            <p className="text-sm text-slate-400">Theory + Design + Simulation + Research + Paper Publication</p>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-blue-400 transition-transform group-hover:translate-x-1" />
      </Link>

      {/* Category tabs */}
      <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <div className="inline-flex rounded-lg border border-white/10 bg-[hsl(222_40%_10%)] p-1">
          <CategoryTab
            active={learnerCategory === 'all'}
            onClick={() => updateCategory('all')}
            label="All Programs"
          />
          <CategoryTab
            active={learnerCategory === 'professional'}
            onClick={() => updateCategory('professional')}
            label="Professional"
            icon={<Briefcase className="h-4 w-4" />}
          />
          <CategoryTab
            active={learnerCategory === 'school'}
            onClick={() => updateCategory('school')}
            label="School"
            icon={<School className="h-4 w-4" />}
          />
        </div>
      </div>

      {/* Search + Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
          <Input
            placeholder="Search programs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-white/10 bg-[hsl(222_40%_10%)] pl-12 text-white placeholder:text-slate-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <SlidersHorizontal className="h-4 w-4" /> Filters:
          </div>

          <FilterDropdown
            label="Category"
            value={subjectFilter}
            options={SUBJECT_CATEGORIES}
            onChange={(v) => setSubjectFilter(v as SubjectCategory | null)}
          />

          <FilterDropdown
            label="Level"
            value={levelFilter}
            options={LEVELS}
            onChange={(v) => setLevelFilter(v as ProgramLevel | null)}
          />

          <FilterDropdown
            label="Duration"
            value={durationFilter}
            options={[...DURATION_FILTERS]}
            onChange={(v) => setDurationFilter(v)}
          />

          <FilterDropdown
            label="Learning Level"
            value={learningLevelFilter}
            options={[...LEARNING_LEVEL_FILTERS]}
            onChange={(v) => setLearningLevelFilter(v)}
          />

          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="text-slate-400 hover:text-white"
            >
              <X className="mr-1 h-4 w-4" /> Clear
            </Button>
          )}
        </div>

        <p className="text-sm text-slate-500">
          Showing {filtered.length} program{filtered.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Program Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((program) => (
            <ProgramCard key={program.slug} program={program} showEnroll={true} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] py-20 text-center">
          <p className="text-lg text-slate-400">No programs match your filters.</p>
          <Button onClick={clearFilters} variant="outline" className="mt-4 border-white/20 text-slate-200 hover:bg-white/10">
            Clear Filters
          </Button>
        </div>
      )}
    </div>
   </> 
  );
}

function CategoryTab({
  active,
  onClick,
  label,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all',
        active
          ? 'bg-blue-600 text-white'
          : 'text-slate-400 hover:text-white'
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string | null;
  options: string[];
  onChange: (v: string | null) => void;
}) {
  return (
    <select
      value={value || ''}
      onChange={(e) => onChange(e.target.value || null)}
      className="rounded-lg border border-white/10 bg-[hsl(222_40%_10%)] px-3 py-2 text-sm text-white outline-none transition-colors hover:border-blue-500/40 focus:border-blue-500"
    >
      <option value="">{label}: All</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export default function ProgramsPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-20 text-center text-slate-400">Loading programs...</div>}>
      <ProgramsContent />
    </Suspense>
  );
}
