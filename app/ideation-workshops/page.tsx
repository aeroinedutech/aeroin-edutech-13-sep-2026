import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Lightbulb,
  Rocket,
  Cpu,
  Bot,
  Plane,
  Satellite,
  Telescope,
  Target,
  Users,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import { EnquiryButtons } from '@/components/site/enquiry-buttons';

export const metadata: Metadata = {
  title: 'Ideation Workshops | Aeroin EduTech',
  description:
    'Aeroin EduTech Ideation Workshops help students and institutions transform innovative ideas into structured technical concepts, projects, and potential solutions.',
};

const KEY_AREAS = [
  { icon: <Target />, label: 'Problem Identification' },
  { icon: <Lightbulb />, label: 'Design Thinking' },
  { icon: <Rocket />, label: 'Innovation & Ideation' },
  { icon: <Plane />, label: 'Aerospace Applications' },
  { icon: <Satellite />, label: 'Space Technology' },
  { icon: <Bot />, label: 'Robotics' },
  { icon: <Cpu />, label: 'UAV & Drone Applications' },
  { icon: <Telescope />, label: 'Satellite Applications' },
  { icon: <CheckCircle2 />, label: 'Project Concept Development' },
  { icon: <Wrench />, label: 'Prototype Planning' },
  { icon: <Cpu />, label: 'Technical Feasibility' },
];

const WORKSHOPS = [
  {
    title: 'Aerospace Innovation Workshop',
    description:
      'A hands-on ideation workshop focused on aerospace problem-solving, from identifying real-world challenges to developing technical concepts and prototype plans.',
    duration: '1–2 Days',
    audience: 'College Students & Professionals',
    outcomes: ['Problem identification', 'Concept development', 'Prototype plan', 'Feasibility analysis'],
  },
  {
    title: 'Space Technology Ideation Workshop',
    description:
      'Explore space technology challenges and develop innovative solutions through structured ideation, design thinking, and technical feasibility analysis.',
    duration: '1–2 Days',
    audience: 'College Students & Professionals',
    outcomes: ['Space tech problem framing', 'Solution design', 'Mission concept', 'Technical roadmap'],
  },
  {
    title: 'Robotics & UAV Ideation Workshop',
    description:
      'Brainstorm and develop robotics and drone-based solutions for real-world applications through guided ideation and project concept development.',
    duration: '1–2 Days',
    audience: 'School & College Students',
    outcomes: ['Robotics/UAV problem identification', 'Solution concept', 'Prototype plan', 'Application mapping'],
  },
  {
    title: 'Student Innovation & Project Ideation Workshop',
    description:
      'Help students transform their ideas into structured technical projects with clear objectives, methodology, and feasibility assessment.',
    duration: '1–2 Days',
    audience: 'School & College Students',
    outcomes: ['Idea structuring', 'Project definition', 'Methodology', 'Feasibility assessment'],
  },
];

export default function IdeationWorkshopsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/image copy 8.png"
            alt="Team ideation workshop"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/80 via-[hsl(222_47%_7%)]/70 to-[hsl(222_47%_7%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
            <Lightbulb className="h-4 w-4" /> Ideation Workshops
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Ideation Workshops</h1>
          <p className="mt-2 text-xl text-blue-300">From Ideas to Innovation</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Aeroin EduTech Ideation Workshops help students and institutions transform innovative
            ideas into structured technical concepts, projects, and potential solutions.
          </p>
        </div>
      </section>

      {/* KEY AREAS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Key Areas</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {KEY_AREAS.map((area) => (
              <div key={area.label} className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-5 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  {area.icon}
                </div>
                <span className="text-sm font-medium text-slate-300">{area.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKSHOPS */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Our Workshops</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {WORKSHOPS.map((ws) => (
              <div key={ws.title} className="rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/30">
                <h3 className="text-xl font-bold text-white">{ws.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{ws.description}</p>
                <div className="mb-4 mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span>{ws.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span>{ws.audience}</span>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Key Outcomes</p>
                  <ul className="space-y-1.5">
                    {ws.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <EnquiryButtons
                  itemName={`Ideation Workshop – ${ws.title}`}
                  emailSubject={`Enquiry – Ideation Workshop – ${ws.title}`}
                  whatsappMessage={`Hello Aeroin EduTech, I am interested in the Ideation Workshop: ${ws.title}. I would like to know more about the schedule, fees, and registration process.`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-[hsl(222_40%_10%)] p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white">Have an Idea? Let&apos;s Build It.</h2>
            <p className="mt-4 text-slate-300">
              Reach out to our team to organize or participate in an Ideation Workshop.
            </p>
            <div className="mt-8 flex justify-center">
              <EnquiryButtons
                itemName="Ideation Workshops"
                emailSubject="Enquiry – Ideation Workshops"
                whatsappMessage="Hello Aeroin EduTech, I am interested in your Ideation Workshops. I would like to know more about the schedule, fees, and registration process."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Wrench() {
  return <span className="text-xs">🔧</span>;
}
