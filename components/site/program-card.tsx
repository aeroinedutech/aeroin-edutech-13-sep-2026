import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, GraduationCap, Clock, IndianRupee, FlaskConical, Star, Monitor, Sparkles } from 'lucide-react';
import type { Program } from '@/lib/courses';
import { STARTING_FEE, formatINR } from '@/lib/pricing';

interface ProgramCardProps {
  program: Program;
}

function StarRating() {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
      <span className="text-xs font-medium text-amber-300">5.0</span>
    </div>
  );
}

export function ProgramCard({ program }: ProgramCardProps) {
  const isSchool = program.learnerCategory === 'school';
  const isResearch = program.learnerCategory === 'research';
  const modeLabel = isResearch ? 'Online / Offline' : 'Online';

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/20">
      <Link href={`/programs/${program.slug}`} className="relative block h-44 overflow-hidden">
        <Image
          src={program.image}
          alt={program.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_7%)] via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          <Badge
            className={
              isResearch
                ? 'bg-blue-600/90 text-white hover:bg-blue-600'
                : isSchool
                  ? 'bg-emerald-500/90 text-white hover:bg-emerald-500'
                  : 'bg-blue-600/90 text-white hover:bg-blue-600'
            }
          >
            {isResearch ? (
              <><FlaskConical className="mr-1 h-3 w-3" /> Research</>
            ) : isSchool ? (
              'School'
            ) : (
              'Professional'
            )}
          </Badge>
          <Badge variant="secondary" className="bg-black/60 text-slate-200 backdrop-glow-sm">
            {program.level}
          </Badge>
          {program.isNew && (
            <Badge className="bg-amber-500/90 text-white hover:bg-amber-500">
              <Sparkles className="mr-1 h-3 w-3" /> New Program
            </Badge>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <StarRating />
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Monitor className="h-3.5 w-3.5" /> {modeLabel}
          </span>
        </div>

        <h3 className="mb-2 text-base font-bold leading-snug text-white">
          <Link href={`/programs/${program.slug}`} className="transition-colors hover:text-blue-400">
            {program.name}
          </Link>
        </h3>
        <p className="mb-3 line-clamp-3 text-sm text-slate-400">{program.shortDescription}</p>

        {isSchool && program.recommendedAge && (
          <p className="mb-2 text-xs text-emerald-300/80">Recommended: {program.recommendedAge}</p>
        )}

        <div className="mb-3 flex flex-wrap gap-1.5">
          {program.subjectCategories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-slate-300"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-3">
          <div>
            <p className="text-[11px] text-slate-500">
              {program.customPricing ? 'Program Fee' : 'Starting from'}
            </p>
            <p className="flex items-center font-bold text-white">
              <IndianRupee className="h-3.5 w-3.5" />
              {(program.customPricing?.amount ?? STARTING_FEE).toLocaleString('en-IN')}
            </p>
          </div>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm" className="border-white/20 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href={`/programs/${program.slug}`}>View</Link>
            </Button>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-500">
              <Link href={`/programs/${program.slug}`}>
                Enroll <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { GraduationCap, Clock };
