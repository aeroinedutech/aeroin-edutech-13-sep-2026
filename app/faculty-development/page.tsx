import type { Metadata } from 'next';
import Image from 'next/image';
import {
  GraduationCap,
  Rocket,
  Satellite,
  Cpu,
  Bot,
  Plane,
  Wrench,
  BookOpen,
  FlaskConical,
  Lightbulb,
  Users,
  School,
  Briefcase,
  Award,
  Target,
} from 'lucide-react';
import { EnquiryButtons } from '@/components/site/enquiry-buttons';

export const metadata: Metadata = {
  title: 'Faculty Development Programs | Aeroin EduTech',
  description:
    'Aeroin EduTech Faculty Development Programs equip faculty members and educators with practical knowledge of aerospace engineering, space technology, emerging technologies, and modern technical education methodologies.',
};

const PROGRAM_AREAS = [
  { icon: <Plane />, label: 'Aerospace Engineering' },
  { icon: <Rocket />, label: 'Space Technology' },
  { icon: <Satellite />, label: 'CubeSat Technology' },
  { icon: <Rocket />, label: 'Rocket Technology' },
  { icon: <Cpu />, label: 'UAV & Drone Technology' },
  { icon: <Bot />, label: 'Space Robotics' },
  { icon: <Cpu />, label: 'AI & Emerging Technologies' },
  { icon: <Wrench />, label: 'Engineering Design & Simulation' },
  { icon: <School />, label: 'STEM Education' },
  { icon: <Target />, label: 'Project-Based Learning' },
  { icon: <FlaskConical />, label: 'Research Methodology' },
  { icon: <Lightbulb />, label: 'Innovation & Entrepreneurship' },
];

const PARTICIPANTS = [
  { icon: <School />, label: 'School Teachers' },
  { icon: <GraduationCap />, label: 'College Faculty' },
  { icon: <Award />, label: 'Professors' },
  { icon: <BookOpen />, label: 'STEM Educators' },
  { icon: <Users />, label: 'Academic Coordinators' },
  { icon: <Briefcase />, label: 'Technical Faculty' },
];

export default function FacultyDevelopmentPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/image copy 9.png"
            alt="Faculty development program"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/80 via-[hsl(222_47%_7%)]/70 to-[hsl(222_47%_7%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
            <GraduationCap className="h-4 w-4" /> Faculty Development Programs
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">Faculty Development Programs</h1>
          <p className="mt-2 text-xl text-blue-300">Empowering Educators With Emerging Aerospace &amp; Technology Skills</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Aeroin EduTech Faculty Development Programs are designed to equip faculty members and
            educators with practical knowledge of aerospace engineering, space technology, emerging
            technologies, project-based learning, and modern technical education methodologies.
          </p>
        </div>
      </section>

      {/* PROGRAM AREAS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Program Areas</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {PROGRAM_AREAS.map((area) => (
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

      {/* WHO CAN PARTICIPATE */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Who Can Participate?</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PARTICIPANTS.map((p) => (
              <div key={p.label} className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-5 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  {p.icon}
                </div>
                <span className="text-sm font-medium text-slate-300">{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-[hsl(222_40%_10%)] p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white">Interested in a Faculty Development Program?</h2>
            <p className="mt-4 text-slate-300">
              Reach out to our team to learn more about available programs, duration, schedule, and fees.
            </p>
            <div className="mt-8 flex justify-center">
              <EnquiryButtons
                itemName="Faculty Development Program"
                emailSubject="Enquiry – Faculty Development Program"
                whatsappMessage="Hello Aeroin EduTech Team, I am interested in the Faculty Development Program. I would like to know more about the available programs, duration, schedule, and fees."
                emailBody="Hello Aeroin EduTech Team,\n\nI am interested in the Faculty Development Program.\n\nI would like to know more about the available programs, duration, schedule, and fees.\n\nThank you."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
