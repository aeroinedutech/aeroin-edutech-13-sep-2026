import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ProgramCard } from '@/components/site/program-card';
import { WhatWeOffer } from '@/components/site/what-we-offer';
import {
  PROFESSIONAL_PROGRAMS,
  SCHOOL_PROGRAMS,
  RESEARCH_INTERNSHIP_PROGRAMS,
} from '@/lib/courses';
import { LEARNING_PATHS } from '@/lib/pricing';
import {
  Rocket,
  Satellite,
  Cpu,
  Bot,
  Globe2,
  Telescope,
  Plane,
  ArrowRight,
  GraduationCap,
  School,
  Wrench,
  Briefcase,
  Users,
  Target,
  Award,
  Zap,
  Clock,
  ShieldCheck,
  FlaskConical,
  BookOpen,
} from 'lucide-react';

const PATH_ICONS: Record<string, React.ReactNode> = {
  Zap: <Zap className="h-6 w-6" />,
  BookOpen: <BookOpen className="h-6 w-6" />,
  Wrench: <Wrench className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  FlaskConical: <FlaskConical className="h-6 w-6" />,
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[hsl(222_47%_7%)]">
        {/* Layer 1 — Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2538107/pexels-photo-2538107.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Milky Way galaxy over the night sky"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Layer 2 — Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/70 via-[hsl(222_47%_7%)]/50 to-[hsl(222_47%_7%)]/90" />

        {/* Layer 3 — Hero Content */}
        <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">

          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div className="max-w-3xl animate-fade-in-up">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl">
                Empowering Space EduTech
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
               India's Leading Aerospace Edutech Company with Practical, industry-aligned education in space technology, aerospace, AI, robotics and satellite systems led by experts and designed for the next generation of space innovators.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500">
                  <Link href="/programs">
                    Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 hover:text-white">
                  <Link href="/research-internship">
                    Research Internship <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="animate-fade-in-up lg:pt-0">
              <div className="mb-4 flex justify-end">
                <div className="flex flex-col items-center rounded-2xl border border-orange-500/30 bg-black/50 px-5 py-3">
                  <Image
                    src="/images/isro-logo.png"
                    alt="ISRO"
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                  <span className="mt-1 text-sm font-medium text-orange-400">
                    Registered Space Tutor
                  </span>
                </div>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/20 bg-black/30 shadow-2xl shadow-blue-950/40">
                <Image
                  src="/images/hero/IMG_5507.jpg"
                  alt="Aeroin EduTech learners exploring aerospace technology"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(222_47%_7%)]/60 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <WhatWeOffer />

      {/* LEARNING PATHS PROGRESSION */}
      <section id="paths" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Choose Your Learning Path</h2>
            <p className="mt-4 text-slate-400">
              From a 3-day Masterclass to a 3-month Deep Research Program — find the path that fits your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {LEARNING_PATHS.map((path, i) => (
              <div
                key={path.number}
                className={`relative rounded-xl border p-5 transition-all hover:border-blue-500/40 ${
                  path.isResearch
                    ? 'border-blue-500/30 bg-blue-600/5'
                    : 'border-white/10 bg-[hsl(222_40%_10%)]'
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-2xl font-black text-white-300/30">{path.number}</span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-orange-400">
                    {PATH_ICONS[path.icon]}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-white">{path.label}</h3>
                <p className="mt-1 text-xs text-orange-300">{path.duration}</p>
                <p className="mt-2 text-xs text-slate-200">{path.description}</p>
                {path.isResearch && (
                  <Link
                    href="/research-internship"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:gap-2 transition-all"
                  >
                    Explore <ArrowRight className="h-3 w-3" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNER CATEGORIES */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Professional */}
            <Link
              href="/programs?category=professional"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/40 to-[hsl(222_40%_10%)] p-8 transition-all hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-900/20"
            >
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/20">
                  <Briefcase className="h-7 w-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">College Students &amp; Working Professionals</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Advance your technical skills with industry-oriented programs in aerospace,
                  space technology, AI, robotics, satellite systems and mission design.
                </p>
                <div className="mt-6 flex items-center gap-2 font-medium text-blue-400 group-hover:gap-3 transition-all">
                  Explore Professional Programs
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* School */}
            <Link
              href="/programs?category=school"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-900/30 to-[hsl(222_40%_10%)] p-8 transition-all hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-900/20"
            >
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-emerald-600/10 blur-3xl" />
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-600/20">
                  <School className="h-7 w-7 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">School Students</h3>
                <p className="mt-3 text-sm text-slate-400">
                  Discover space, rockets, satellites, drones, robotics and astronomy through
                  engaging practical learning programs designed for young learners.
                </p>
                <div className="mt-6 flex items-center gap-2 font-medium text-emerald-400 group-hover:gap-3 transition-all">
                  Explore School Programs
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>

            {/* Research Internship */}
            <Link
              href="/research-internship"
              className="group relative overflow-hidden rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-900/50 to-[hsl(222_40%_10%)] p-8 transition-all hover:border-blue-500/60 hover:shadow-xl hover:shadow-orange-900/30"
            >
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-orange-500/15 blur-3xl" />
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-600/25">
                  <FlaskConical className="h-7 w-7 text-orange-300" />
                </div>
                <h3 className="text-xl font-bold text-white">Research Internship</h3>
                <p className="mt-3 text-sm text-slate-400">
                  3-month deep research programs with theory, design, simulation, research
                  execution, and research paper publication guidance.
                </p>
                <div className="mt-6 flex items-center gap-2 font-medium text-blue-400 group-hover:gap-3 transition-all">
                  Explore Research Internships
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED PROFESSIONAL PROGRAMS */}
      <section id="programs" className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-blue-400">
                <Briefcase className="h-4 w-4" />
                For College Students &amp; Working Professionals
              </div>
              <h2 className="text-3xl font-bold text-white">Featured Professional Programs</h2>
            </div>
            <Button asChild variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href="/programs?category=professional">
                View All Professional Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PROFESSIONAL_PROGRAMS.slice(0, 8).map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH INTERNSHIP HIGHLIGHT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-[hsl(222_40%_10%)] p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
                  <FlaskConical className="h-4 w-4" /> Research Internship
                </div>
                <h2 className="text-3xl font-bold text-white">Go Beyond Learning. Research &amp; Publish.</h2>
                <p className="mt-4 text-slate-300">
                  Our 3-month Research Internship programs take you through theory, design,
                  simulation, research methodology, and research paper development — with
                  guidance for publication.
                </p>
                <Button asChild className="mt-6 bg-blue-600 text-white hover:bg-blue-500">
                  <Link href="/research-internship">
                    Explore Research Internships <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {RESEARCH_INTERNSHIP_PROGRAMS.slice(0, 4).map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/programs/${rp.slug}`}
                    className="rounded-lg border border-white/10 bg-white/5 p-4 transition-all hover:border-blue-500/40"
                  >
                    <p className="text-sm font-medium text-white">{rp.name.replace(' — Research Internship', '')}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHOOL PROGRAMS */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm text-emerald-400">
                <School className="h-4 w-4" />
                For School Students
              </div>
              <h2 className="text-3xl font-bold text-white">School Programs</h2>
            </div>
            <Button asChild variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href="/programs?category=school">
                View All School Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {SCHOOL_PROGRAMS.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY AEROIN */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Aeroin?</h2>
            <p className="mt-4 text-slate-400">
              Practical, industry-aligned space technology education.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <WhyCard icon={<Wrench />} title="Practical Learning" desc="Learn through projects and simulations." />
            <WhyCard icon={<Briefcase />} title="Industry-Oriented" desc="Curriculum aligned with real aerospace and space technology applications." />
            <WhyCard icon={<Users />} title="Expert-Led" desc="Learn from professionals and technical mentors." />
            <WhyCard icon={<Target />} title="Project-Based" desc="Build practical engineering and technology projects." />
            <WhyCard icon={<Zap />} title="Future Skills" desc="AI, robotics, autonomous systems and space technology." />
            <WhyCard icon={<Clock />} title="Flexible Programs" desc="Multiple duration options from 3 days to 3 months." />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-slate-400">Get from program discovery to enrollment in four simple steps.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <StepCard number="01" icon={<Rocket />} title="Explore" desc="Browse available programs." />
            <StepCard number="02" icon={<GraduationCap />} title="Select" desc="Choose your program and duration." />
            <StepCard number="03" icon={<ShieldCheck />} title="Pay" desc="Complete secure payment through Razorpay." />
            <StepCard number="04" icon={<Zap />} title="Start Learning" desc="Receive further program instructions through the applicable communication channel." />
          </div>
        </div>
      </section>

      {/* DOMAINS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Domains We Cover</h2>
            <p className="mt-4 text-slate-400">Comprehensive learning across space technology disciplines.</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
            <DomainPill icon={<Rocket />} label="Space Technology" />
            <DomainPill icon={<Plane />} label="Aerospace Engineering" />
            <DomainPill icon={<Cpu />} label="Artificial Intelligence" />
            <DomainPill icon={<Bot />} label="Robotics" />
            <DomainPill icon={<Globe2 />} label="Earth Observation" />
            <DomainPill icon={<Telescope />} label="Astronomy" />
            <DomainPill icon={<Satellite />} label="Satellite Technology" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/7327336/pexels-photo-7327336.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Rocket launch"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_7%)] via-[hsl(222_47%_7%)]/85 to-[hsl(222_47%_7%)]/50" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Start Your Space Journey?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Explore our programs and enroll today. Choose your program duration, pay securely,
            and take the first step toward building the future of space technology.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500 glow-blue">
              <Link href="/programs">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              <Link href="/about">Learn About Aeroin</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function WhyCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/30">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  );
}

function StepCard({ number, icon, title, desc }: { number: string; icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6">
      <span className="absolute right-4 top-4 text-3xl font-black text-white-300/20">{number}</span>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-slate-400">{desc}</p>
    </div>
  );
}

function DomainPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-4 text-center transition-all hover:border-blue-500/30">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
        {icon}
      </div>
      <span className="text-xs font-medium text-slate-300">{label}</span>
    </div>
  );
}
