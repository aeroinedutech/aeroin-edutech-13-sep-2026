import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  ALL_PROGRAMS_WITH_RESEARCH,
  getProgramBySlug,
  PROFESSIONAL_PROGRAMS,
  SCHOOL_PROGRAMS,
  RESEARCH_INTERNSHIP_PROGRAMS,
} from '@/lib/courses';
import { PRICING_TIERS, STARTING_FEE, formatINR, RESEARCH_INTERNSHIP_PHASES } from '@/lib/pricing';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ProgramCard } from '@/components/site/program-card';
import { EnrollButton } from '@/components/site/enroll-button';
import { cn } from '@/lib/utils';
import {
  Clock,
  IndianRupee,
  GraduationCap,
  CheckCircle2,
  Wrench,
  Award,
  Users,
  Zap,
  ArrowLeft,
  Briefcase,
  School,
  Layers,
  FlaskConical,
  FileText,
  Star,
  Monitor,
  Sparkles,
} from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return ALL_PROGRAMS_WITH_RESEARCH.map((program) => ({ slug: program.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const program = getProgramBySlug(params.slug);
  if (!program) {
    return { title: 'Program Not Found | Aeroin EduTech' };
  }
  return {
    title: `${program.name} | Aeroin EduTech`,
    description: program.shortDescription,
  };
}

export default function ProgramDetailPage({ params }: PageProps) {
  const program = getProgramBySlug(params.slug);
  if (!program) notFound();

  const isSchool = program.learnerCategory === 'school';
  const isResearch = program.learnerCategory === 'research';
  const hasCustomPricing = Boolean(program.customPricing);
  const customPricing = program.customPricing;

  const relatedPrograms = (isResearch ? RESEARCH_INTERNSHIP_PROGRAMS : isSchool ? SCHOOL_PROGRAMS : PROFESSIONAL_PROGRAMS)
    .filter((p) => p.slug !== program.slug)
    .slice(0, 4);

  return (
    <>
      {/* PROGRAM HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src={program.image}
            alt={program.name}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/85 via-[hsl(222_47%_7%)]/80 to-[hsl(222_47%_7%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href={isResearch ? '/research-internship' : '/programs'}
            className="mb-6 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-blue-400"
          >
            <ArrowLeft className="h-4 w-4" /> Back to {isResearch ? 'Research Internship' : 'Programs'}
          </Link>

          <div className="mb-4 flex flex-wrap gap-2">
            {isResearch ? (
              <Badge className="bg-blue-600 text-white">
                <FlaskConical className="mr-1 h-3 w-3" /> Research Internship
              </Badge>
            ) : isSchool ? (
              <Badge className="bg-emerald-600 text-white">
                <School className="mr-1 h-3 w-3" /> School Students
              </Badge>
            ) : (
              <Badge className="bg-blue-600 text-white">
                <Briefcase className="mr-1 h-3 w-3" /> College Students &amp; Working Professionals
              </Badge>
            )}
            <Badge variant="outline" className="border-white/20 text-slate-200">
              <GraduationCap className="mr-1 h-3 w-3" /> {program.level}
            </Badge>
            {program.isNew && (
              <Badge className="bg-amber-500 text-white">
                <Sparkles className="mr-1 h-3 w-3" /> New Program
              </Badge>
            )}
            {isSchool && program.recommendedAge && (
              <Badge variant="outline" className="border-white/20 text-slate-200">
                {program.recommendedAge}
              </Badge>
            )}
          </div>

          <h1 className="max-w-3xl text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {program.name}
          </h1>

          <div className="mt-3 flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-medium text-amber-300">5.0 Rating</span>
            </div>
            <span className="flex items-center gap-1 text-sm text-slate-300">
              <Monitor className="h-4 w-4" /> Mode: {isResearch ? 'Online / Offline' : 'Online'}
            </span>
          </div>
          <p className="mt-4 max-w-3xl text-lg text-slate-300">{program.shortDescription}</p>

          <div className="mt-8 flex flex-wrap gap-6">
            {isResearch ? (
              <>
                <InfoPill icon={<Clock className="h-5 w-5" />} label="Duration" value="3 Months" />
                <InfoPill icon={<Layers className="h-5 w-5" />} label="Program Type" value="Deep Research Program" />
                <InfoPill icon={<Monitor className="h-5 w-5" />} label="Mode" value="Online / Offline" />
              </>
            ) : hasCustomPricing && customPricing ? (
              <>
                <InfoPill icon={<Clock className="h-5 w-5" />} label="Duration" value={customPricing.duration} />
                <InfoPill icon={<IndianRupee className="h-5 w-5" />} label="Program Fee" value={formatINR(customPricing.amount)} />
                <InfoPill icon={<Layers className="h-5 w-5" />} label="Schedule" value={customPricing.schedule ?? 'Weekends Only'} />
                <InfoPill icon={<Monitor className="h-5 w-5" />} label="Mode" value="Online" />
                <InfoPill icon={<Layers className="h-5 w-5" />} label="GST" value="Inclusive" />
              </>
            ) : (
              <>
                <InfoPill icon={<Clock className="h-5 w-5" />} label="Duration Options" value="3 Days – 3 Months" />
                <InfoPill icon={<IndianRupee className="h-5 w-5" />} label="Starting Fee" value={formatINR(STARTING_FEE)} />
                <InfoPill icon={<Monitor className="h-5 w-5" />} label="Mode" value="Online" />
                <InfoPill icon={<Layers className="h-5 w-5" />} label="GST" value="Inclusive" />
              </>
            )}
          </div>

          {isResearch && program.internshipFocus && (
            <div className="mt-6 max-w-3xl rounded-xl border border-blue-500/20 bg-blue-600/10 p-5">
              <p className="text-sm font-semibold text-blue-300">Internship Focus</p>
              <p className="mt-1 text-sm text-slate-300">{program.internshipFocus}</p>
            </div>
          )}

          <div className="mt-8">
            <EnrollButton
              courseId={program.slug}
              courseName={program.name}
              duration={isResearch ? '3 Months' : hasCustomPricing && customPricing ? customPricing.duration : PRICING_TIERS[2].duration}
              amount={isResearch ? PRICING_TIERS[4].paise : hasCustomPricing && customPricing ? customPricing.paise : PRICING_TIERS[2].paise}
              size="lg"
              label={isResearch ? 'Apply for Research Internship' : 'Enroll Now'}
              paymentLink={program.paymentLink}
            />
          </div>
        </div>
      </section>

      {/* PROGRAM BODY */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-12 lg:col-span-2">
            {/* Overview */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">Program Overview</h2>
              <p className="leading-relaxed text-slate-300">{program.description}</p>
            </section>

            {/* Research phases */}
            {isResearch && (
              <section>
                <h2 className="mb-4 text-2xl font-bold text-white">Research Internship Structure</h2>
                <div className="space-y-3">
                  {RESEARCH_INTERNSHIP_PHASES.map((phase, i) => (
                    <div key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600/20 text-sm font-bold text-blue-400">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-xs font-medium text-blue-300">{phase.phase}</p>
                        <h3 className="text-base font-bold text-white">{phase.title}</h3>
                        <p className="mt-1 text-sm text-slate-400">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 p-4">
                  <p className="text-sm text-amber-300">
                    Note: Guidance for research paper preparation and publication submission is provided.
                    Publication acceptance is not guaranteed and depends on the review process of the target journal or conference.
                  </p>
                </div>
              </section>
            )}

            {/* What You Will Learn */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">What You Will Learn</h2>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {program.topics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {topic}
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">Curriculum</h2>
              <Accordion type="single" collapsible className="space-y-3">
                {program.curriculum.map((module, i) => (
                  <AccordionItem
                    key={i}
                    value={`module-${i}`}
                    className="overflow-hidden rounded-lg border border-white/10 bg-[hsl(222_40%_10%)] px-4"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center gap-3 text-left">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-600/20 text-xs font-bold text-blue-400">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="font-semibold text-white">{module.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4 pl-11">
                      <ul className="space-y-2">
                        {module.topics.map((topic, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Practical Project */}
            <section>
              <div className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-900/20 to-[hsl(222_40%_10%)] p-6">
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/20 text-blue-400">
                    <Wrench className="h-5 w-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{isResearch ? 'Research Project' : 'Practical Project'}</h2>
                </div>
                <p className="text-slate-300">{program.practicalProject}</p>
              </div>
            </section>

            {/* Who Should Join */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">Who Should Join?</h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {program.whoShouldJoin.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 rounded-lg border border-white/10 bg-[hsl(222_40%_10%)] p-4 text-sm text-slate-300">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="mb-4 text-2xl font-bold text-white">Skills You Will Gain</h2>
              <div className="flex flex-wrap gap-2">
                {program.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-blue-500/20 bg-blue-600/10 px-3 py-1.5 text-sm text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Certification */}
            <section>
              <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6">
                <Award className="mt-0.5 h-6 w-6 shrink-0 text-blue-400" />
                <div>
                  <h2 className="text-xl font-bold text-white">Certification</h2>
                  <p className="mt-2 text-slate-300">{program.certification}</p>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar — Pricing or Research Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {isResearch ? (
                <div className="rounded-2xl border border-blue-500/30 bg-[hsl(222_40%_10%)] p-6">
                  <h2 className="mb-1 text-xl font-bold text-white">Research Internship</h2>
                  <p className="mb-5 text-sm text-slate-400">3-Month Deep Research Program</p>

                  <div className="mb-5 space-y-3">
                    <div className="rounded-xl border border-blue-500/20 bg-blue-600/10 p-4">
                      <p className="font-bold text-white">3 Months</p>
                      <p className="flex items-center text-lg font-extrabold text-white">
                        {formatINR(PRICING_TIERS[4].amount)}
                      </p>
                      <p className="text-xs text-slate-400">Inclusive of GST</p>
                    </div>
                  </div>

                  <div className="mb-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Includes</p>
                    {['Theory', 'Design', 'Simulation', 'Research', 'Research Paper Development', 'Publication Guidance'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-blue-400" /> {item}
                      </div>
                    ))}
                  </div>

                  <EnrollButton
                    courseId={program.slug}
                    courseName={program.name}
                    duration="3 Months"
                    amount={PRICING_TIERS[4].paise}
                    label="Apply for Research Internship"
                    className="w-full"
                    paymentLink={program.paymentLink}
                  />

                  <div className="mt-5 rounded-lg bg-white/5 p-4 text-center">
                    <p className="text-xs text-slate-400">
                      Secure payment powered by Razorpay. No registration required.
                    </p>
                  </div>
                </div>
              ) : hasCustomPricing && customPricing ? (
                <div className="rounded-2xl border border-blue-500/30 bg-[hsl(222_40%_10%)] p-6">
                  <h2 className="mb-1 text-xl font-bold text-white">Program Fee</h2>
                  <p className="mb-5 text-sm text-slate-400">{customPricing.duration} · {customPricing.schedule}</p>

                  <div className="mb-5 space-y-3">
                    <div className="rounded-xl border border-blue-500/20 bg-blue-600/10 p-4">
                      <p className="font-bold text-white">{customPricing.duration}</p>
                      <p className="flex items-center text-lg font-extrabold text-white">
                        {formatINR(customPricing.amount)}
                      </p>
                      <p className="text-xs text-slate-400">Inclusive of GST</p>
                    </div>
                  </div>

                  <div className="mb-5 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Schedule</p>
                    <div className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-blue-400" /> {customPricing.schedule}
                    </div>
                  </div>

                  <EnrollButton
                    courseId={program.slug}
                    courseName={program.name}
                    duration={customPricing.duration}
                    amount={customPricing.paise}
                    label={`Enroll — ${customPricing.duration}`}
                    className="w-full"
                    paymentLink={program.paymentLink}
                  />

                  <div className="mt-5 rounded-lg bg-white/5 p-4 text-center">
                    <p className="text-xs text-slate-400">
                      Secure payment powered by Razorpay. No registration required.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-6">
                  <h2 className="mb-1 text-xl font-bold text-white">Choose Your Program Duration</h2>
                  <p className="mb-5 text-sm text-slate-400">All prices inclusive of GST.</p>

                  <div className="space-y-3">
                    {PRICING_TIERS.map((tier) => (
                      <div
                        key={tier.id}
                        className={cn(
                          'rounded-xl border p-4 transition-all',
                          tier.popular
                            ? 'border-blue-500/50 bg-blue-600/10'
                            : 'border-white/10 bg-white/5 hover:border-blue-500/30'
                        )}
                      >
                        <div className="mb-2 flex items-center justify-between">
                          <div>
                            <p className="text-xs font-medium text-blue-300">{tier.programType}</p>
                            <p className="font-bold text-white">{tier.duration}</p>
                          </div>
                          {tier.popular && (
                            <Badge className="bg-blue-600 text-white">Popular</Badge>
                          )}
                        </div>
                        <p className="flex items-center text-lg font-extrabold text-white">
                          {formatINR(tier.amount)}
                        </p>
                        <p className="mb-3 text-xs text-slate-400">{tier.learningStructure}</p>
                        <EnrollButton
                          courseId={program.slug}
                          courseName={program.name}
                          duration={tier.duration}
                          amount={tier.paise}
                          label={`Enroll — ${tier.duration}`}
                          className="w-full"
                          paymentLink={program.paymentLink}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-lg bg-white/5 p-4 text-center">
                    <p className="text-xs text-slate-400">
                      Secure payment powered by Razorpay. No registration required.
                    </p>
                  </div>
                </div>
              )}

              {/* Learning path sidebar */}
              {!isResearch && !hasCustomPricing && (
                <div className="rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
                    Learning Progression
                  </h3>
                  <div className="space-y-3">
                    {PRICING_TIERS.map((tier, i) => (
                      <div key={tier.id} className="flex items-center gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-xs font-bold text-blue-400">
                          {i + 1}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-white">{tier.programType}</p>
                          <p className="text-xs text-slate-500">{tier.duration} · {tier.learningStructure}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Programs */}
      {relatedPrograms.length > 0 && (
        <section className="border-t border-white/10 bg-[hsl(222_47%_5%)] py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-white">Related Programs</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {relatedPrograms.map((p) => (
                <ProgramCard key={p.slug} program={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function InfoPill({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5">
      <div className="text-blue-400">{icon}</div>
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="text-sm font-semibold text-white">{value}</p>
      </div>
    </div>
  );
}
