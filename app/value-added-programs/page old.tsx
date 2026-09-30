import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Rocket,
  Satellite,
  Cpu,
  Bot,
  Plane,
  Clock,
  Users,
  CheckCircle2,
  BookOpen,
  Wrench,
  Target,
  GraduationCap,
} from 'lucide-react';
import { EnquiryButtons } from '@/components/site/enquiry-buttons';

export const metadata: Metadata = {
  title: 'Value Added Programs | Aeroin EduTech',
  description:
    'Specialized short-term technical learning opportunities that complement students\' academic education with practical exposure to aerospace, space technology, engineering, simulation, robotics, UAVs, and emerging technologies.',
};

const VALUE_ADDED_AREAS = [
  'Aerospace Engineering',
  'Space Technology',
  'CubeSat Technology',
  'Rocket Propulsion',
  'UAV & Drone Technology',
  'Space Robotics',
  'Orbital Mechanics',
  'Aerodynamics',
  'Engineering Design',
  'Simulation',
  'AI Applications',
  'Research Fundamentals',
];

const PROGRAMS = [
  {
    title: 'Design & Simulation for Aerospace',
    duration: 'Short-term',
    audience: 'College Students',
    mode: 'Online / Offline',
    description: 'A value-added program covering core aerospace Design & Simulation concepts with practical exposure.',
    outcomes: ['Aerospace design', 'Aerodynamics simulation', 'Structural analysis', 'Design awareness'],
  },
  {
    title: 'CubeSat Technology Program',
    duration: 'Short-term',
    audience: 'College Students',
    mode: 'Online / Offline',
    description: 'Learn CubeSat subsystems and satellite technology through practical learning modules.',
    outcomes: ['Satellite subsystems', 'CubeSat design', 'Communication systems', 'Mission awareness'],
  },
  {
    title: 'Rocket Propulsion Program',
    duration: 'Short-term',
    audience: 'College Students',
    mode: 'Online / Offline',
    description: 'Understand rocket propulsion fundamentals and nozzle design through structured learning.',
    outcomes: ['Propulsion fundamentals', 'Nozzle theory', 'Propellant basics', 'Performance analysis'],
  },
  {
    title: 'Drone & UAV Technology Program',
    duration: 'Short-term',
    audience: 'College Students',
    mode: 'Online / Offline',
    description: 'Explore UAV technology, drone design, and autonomous programming through practical activities.',
    outcomes: ['UAV fundamentals', 'Drone design', 'Programming basics', 'Mission planning'],
  },
];

export default function ValueAddedProgramsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="vac_bg.jpg"
            alt="Value added technical learning"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/80 via-[hsl(222_47%_7%)]/70 to-[hsl(222_47%_7%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-600/30 bg-blue-900/10 px-4 py-1.5 text-sm text-white-300">
            <BookOpen className="h-4 w-4" /> Value Added Programs
          </div>
          <h1 className="text-4xl font-extrabold text-blue-500 sm:text-5xl">Value Added Programs</h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-white-300">
            Specialized short-term technical learning opportunities that complement students&apos;
            academic education with practical exposure to aerospace, space technology, engineering,
            simulation, robotics, UAVs, and emerging technologies.
          </p>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Areas We Cover</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {VALUE_ADDED_AREAS.map((area) => (
              <span key={area} className="rounded-lg border border-white/10 bg-[hsl(222_40%_10%)] px-4 py-2 text-sm text-slate-300">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Programs</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PROGRAMS.map((vp) => (
              <div key={vp.title} className="rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/30">
                <h3 className="text-xl font-bold text-white">{vp.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{vp.description}</p>
                <div className="mb-4 mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span>{vp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span>{vp.audience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <GraduationCap className="h-4 w-4 text-blue-400" />
                    <span>{vp.mode}</span>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Learning Outcomes</p>
                  <ul className="space-y-1.5">
                    {vp.outcomes.map((o) => (
                      <li key={o} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
                <EnquiryButtons
                  itemName={`Value Added Program – ${vp.title}`}
                  emailSubject={`Enquiry – Value Added Program – ${vp.title}`}
                  whatsappMessage={`Hello Aeroin EduTech, I am interested in the Value Added Program: ${vp.title}. I would like to know more about the schedule, fees, and registration process.`}
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
            <h2 className="text-3xl font-bold text-white">Interested in a Value Added Program?</h2>
            <p className="mt-4 text-slate-300">
              Reach out to our team to learn more about schedules, fees, and registration.
            </p>
            <div className="mt-8 flex justify-center">
              <EnquiryButtons
                itemName="Value Added Programs"
                emailSubject="Enquiry – Value Added Programs"
                whatsappMessage="Hello Aeroin EduTech, I am interested in your Value Added Programs. I would like to know more about the schedule, fees, and registration process."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
