import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { RESEARCH_INTERNSHIP_PROGRAMS } from '@/lib/courses';
import { RESEARCH_INTERNSHIP_PHASES, RESEARCH_INTERNSHIP_GAINS, formatINR, PRICING_TIERS } from '@/lib/pricing';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EnrollButton } from '@/components/site/enroll-button';
import {
  Rocket,
  ArrowRight,
  FlaskConical,
  CheckCircle2,
  Clock,
  Users,
  GraduationCap,
  ArrowDown,
  Cpu,
  Wrench,
  Monitor,
  Search,
  FileText,
  Award,
  Briefcase,
  School,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Research Internship | Aeroin EduTech',
  description:
    '3-month research internship programs in aerospace and space technology. Theory, design, simulation, research, and paper publication guidance.',
};

const ELIGIBILITY_LIST = [
  'Undergraduate students',
  'Postgraduate students',
  'Engineering students',
  'Aerospace enthusiasts',
  'Final-year project students',
  'Students interested in research',
  'Students planning higher studies',
  'Students interested in aerospace/space-tech careers',
  'Students interested in developing research papers',
];

const RECOMMENDED_BACKGROUNDS = [
  'Aerospace / Aeronautical',
  'Mechanical',
  'Electrical / Electronics',
  'Robotics / Mechatronics',
  'Computer Science',
  'Physics',
  'Mathematics',
  'Related Technical Fields',
];

const GAIN_ICONS: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
  Monitor: <Monitor className="h-6 w-6" />,
  Search: <Search className="h-6 w-6" />,
  FileText: <FileText className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
};

export default function ResearchInternshipPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="research_int_bg.jpg"
            alt="Planetary surface exploration research"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/85 via-[hsl(222_47%_7%)]/80 to-[hsl(222_47%_7%)]" />
          <div className="absolute inset-0 bg-stars" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-blue-300/10 px-4 py-1.5 text-sm text-orange-600 animate-fade-in-up">
            <FlaskConical className="h-4 w-4" /> Research Internship
          </div>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            Research Internship in{' '}
            <span className="text-gradient">Aerospace &amp; Space Technology</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 animate-fade-in-up">
            Go beyond learning. Explore, design, simulate, research, and publish.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-up">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500 glow-blue">
              <a href="#research-programs">
                Explore Research Programs <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-orange-600 text-white hover:bg-orange-500 glow-orange">
              <a href="#apply">
                Apply for Research Internship <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* RESEARCH PROGRAM LISTING */}
      <section id="research-programs" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-2 flex items-center justify-center gap-2 text-sm text-blue-400">
              <FlaskConical className="h-4 w-4" />
              3-Month Research Internship Programs
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Research Internship Programs</h2>
            <p className="mt-4 text-slate-400">
              Each program follows a structured 6-phase pathway: Theory → Design → Simulation → Research → Research Paper → Publication Guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_INTERNSHIP_PROGRAMS.map((program) => (
              <ResearchProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH PROCESS / PHASES */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Research Internship Structure</h2>
            <p className="mt-4 text-slate-400">
              A 6-phase pathway from foundational theory to research paper publication.
            </p>
          </div>

          <div className="space-y-4">
            {RESEARCH_INTERNSHIP_PHASES.map((phase, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-sm font-bold text-blue-400">
                  {i + 1}
                </span>
                <div className="flex-1">
                  <p className="text-xs font-medium text-blue-300">{phase.phase}</p>
                  <h3 className="text-lg font-bold text-white">{phase.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
            <p className="text-sm text-amber-300">
              Note: Guidance for research paper preparation and publication submission is provided.
              Publication acceptance is not guaranteed and depends on the review process of the target journal or conference.
            </p>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Who Is This For?</h2>
            <p className="mt-4 text-slate-400">
              The Research Internship pathway is suitable for:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ELIGIBILITY_LIST.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">Recommended Background</h3>
            <div className="flex flex-wrap gap-2">
              {RECOMMENDED_BACKGROUNDS.map((bg, i) => (
                <span key={i} className="rounded-lg border border-blue-500/20 bg-blue-600/10 px-3 py-1.5 text-sm text-blue-300">
                  {bg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GAIN */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">What You&apos;ll Gain</h2>
            <p className="mt-4 text-slate-400">
              Build technical expertise, research skills, and a strong academic portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {RESEARCH_INTERNSHIP_GAINS.map((gain, i) => (
              <div key={i} className="rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/30">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  {GAIN_ICONS[gain.icon] || <Award className="h-6 w-6" />}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{gain.title}</h3>
                <p className="text-sm text-slate-400">{gain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY CTA */}
      <section id="apply" className="relative overflow-hidden border-t border-white/10 py-20">
        <div className="absolute inset-0">
          <Image
            src="resarcg_ft_bg.jpg"
            alt="Team collaborating in a workshop"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_7%)] via-[hsl(222_47%_7%)]/85 to-[hsl(222_47%_7%)]/50" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Apply for Research Internship
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-100">
            Take the next step in your aerospace and space-technology research journey.
            Enroll in a 3-month Research Internship program today.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500 glow-blue">
              <Link href="#research-programs">
                Explore Research Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              <Link href="/contact">
                Contact for Details
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function ResearchProgramCard({ program }: { program: import('@/lib/courses').Program }) {
  const includes = ['Theory', 'Design', 'Simulation', 'Research', 'Research Paper Development', 'Publication Guidance'];

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/20">
      <Link href={`/programs/${program.slug}`} className="relative block h-44 overflow-hidden">
        <Image
          src={program.image}
          alt={program.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_7%)] via-transparent to-transparent" />
        <div className="absolute left-3 top-3 flex gap-2">
          <Badge className="bg-blue-600/90 text-white hover:bg-blue-600">
            <FlaskConical className="mr-1 h-3 w-3" /> Deep Research
          </Badge>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-medium text-amber-300">5.0</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-slate-400">
            <Monitor className="h-3.5 w-3.5" /> Online / Offline
          </span>
        </div>

        <h3 className="mb-2 text-base font-bold leading-snug text-white">
          <Link href={`/programs/${program.slug}`} className="transition-colors hover:text-blue-400">
            {program.name}
          </Link>
        </h3>

        <div className="mb-3 space-y-1.5">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Clock className="h-3.5 w-3.5 text-blue-400" /> Duration: 3 Months
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <GraduationCap className="h-3.5 w-3.5 text-blue-400" /> Level: Deep Research
          </div>
        </div>

        {program.internshipFocus && (
          <p className="mb-3 line-clamp-2 text-sm text-slate-400">{program.internshipFocus}</p>
        )}

        <div className="mb-4 space-y-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Includes</p>
          <div className="flex flex-wrap gap-1.5">
            {includes.map((item) => (
              <span key={item} className="rounded-md bg-blue-600/10 px-2 py-0.5 text-[11px] text-blue-300">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-2 border-t border-white/5 pt-3">
          <Button asChild variant="outline" size="sm" className="flex-1 border-white/20 text-slate-200 hover:bg-white/10 hover:text-white">
            <Link href={`/programs/${program.slug}`}>View Program</Link>
          </Button>
          {program.paymentLink ? (
            <Button asChild size="sm" className="bg-blue-600 text-white hover:bg-blue-500">
              <a href={program.paymentLink} target="_blank" rel="noopener noreferrer">
                Apply
              </a>
            </Button>
          ) : (
            <EnrollButton
              courseId={program.slug}
              courseName={program.name}
              duration="3 Months"
              amount={PRICING_TIERS[4].paise}
              size="sm"
              label="Apply"
            />
          )}
        </div>
      </div>
    </div>
  );
}
