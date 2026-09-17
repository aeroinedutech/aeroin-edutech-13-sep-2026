import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Rocket,
  Wrench,
  Users,
  Target,
  Zap,
  Clock,
  GraduationCap,
  Briefcase,
  Plane,
  Cpu,
  Bot,
  Satellite,
  ArrowRight,
} from 'lucide-react';
import { EnquiryButtons } from '@/components/site/enquiry-buttons';

export const metadata: Metadata = {
  title: 'Boot Camps | Aeroin EduTech',
  description:
    'Intensive, hands-on learning experiences designed to help students and participants explore aerospace engineering, space technology, robotics, UAVs, satellites, rockets, and emerging technologies through practical activities and project-based learning.',
};

const BOOT_CAMPS = [
  {
    name: 'Aerospace Boot Camp',
    duration: '3–5 Days',
    audience: 'School & College Students',
    mode: 'Online / Offline',
    topics: ['Aerodynamics', 'Flight Mechanics', 'Aircraft Design', 'Wind Tunnel Testing'],
    description:
      'A practical introduction to aerospace engineering covering aerodynamics, flight mechanics, and aircraft design through hands-on activities.',
  },
  {
    name: 'Rocket & Propulsion Boot Camp',
    duration: '3–5 Days',
    audience: 'School & College Students',
    mode: 'Online / Offline',
    topics: ['Rocket Propulsion', 'Nozzle Design', 'Model Rocket Building', 'Launch Activities'],
    description:
      'Explore rocket science through practical activities — learn propulsion, build model rockets, and understand launch dynamics.',
  },
  {
    name: 'CubeSat & Satellite Boot Camp',
    duration: '3–5 Days',
    audience: 'College Students & Professionals',
    mode: 'Online / Offline',
    topics: ['Satellite Systems', 'CubeSat Design', 'Communication', 'Mission Planning'],
    description:
      'Learn satellite technology through a structured boot camp covering CubeSat subsystems, design, and mission planning.',
  },
  {
    name: 'Drone & UAV Boot Camp',
    duration: '3–5 Days',
    audience: 'School & College Students',
    mode: 'Online / Offline',
    topics: ['Drone Design', 'Flight Dynamics', 'Programming', 'Autonomous Missions'],
    description:
      'Build and program drones while learning UAV technology, flight dynamics, and autonomous mission planning.',
  },
  {
    name: 'Space Robotics Boot Camp',
    duration: '3–5 Days',
    audience: 'School & College Students',
    mode: 'Online / Offline',
    topics: ['Robotics Fundamentals', 'Rover Design', 'Sensor Integration', 'Autonomous Navigation'],
    description:
      'Explore space robotics through hands-on rover building, sensor integration, and autonomous navigation challenges.',
  },
  {
    name: 'AI for Space Technology Boot Camp',
    duration: '5 Days',
    audience: 'College Students & Professionals',
    mode: 'Online / Offline',
    topics: ['AI Fundamentals', 'Space Mission AI', 'Data Analysis', 'ML Projects'],
    description:
      'Discover how AI is transforming space technology through practical ML projects applied to space mission scenarios.',
  },
];

const KEY_FEATURES = [
  { icon: <Wrench />, title: 'Hands-on Learning', desc: 'Practical activities and real-world projects.' },
  { icon: <Zap />, title: 'Technical Demonstrations', desc: 'Live demonstrations of aerospace systems and technologies.' },
  { icon: <Users />, title: 'Team-Based Activities', desc: 'Collaborative learning through group projects and challenges.' },
  { icon: <Target />, title: 'Practical Projects', desc: 'Build real technical projects during the boot camp.' },
  { icon: <Briefcase />, title: 'Industry-Oriented Exposure', desc: 'Learn with industry-relevant tools and methodologies.' },
  { icon: <GraduationCap />, title: 'Expert-Led Sessions', desc: 'Sessions conducted by aerospace and technology professionals.' },
  { icon: <Cpu />, title: 'Problem-Solving Activities', desc: 'Develop analytical thinking through technical challenges.' },
];

export default function BootCampsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/image copy 7.png"
            alt="Hands-on aerospace boot camp"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/80 via-[hsl(222_47%_7%)]/70 to-[hsl(222_47%_7%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
            <Rocket className="h-4 w-4" /> Boot Camps
          </div>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
            Aerospace &amp; Space Technology Boot Camps
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Intensive, hands-on learning experiences designed to help students and participants
            explore aerospace engineering, space technology, robotics, UAVs, satellites, rockets,
            and other emerging technologies through practical activities and project-based learning.
          </p>
        </div>
      </section>

      {/* WHAT ARE OUR BOOT CAMPS */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">What Are Our Boot Camps?</h2>
          <p className="mt-4 text-slate-400">
            Aeroin EduTech Boot Camps are short, intensive, practical learning experiences that
            immerse participants in aerospace and space technology through hands-on activities,
            technical demonstrations, and project-based learning. Designed to be engaging and
            outcome-oriented, our boot camps help participants quickly gain practical exposure
            to key aerospace and technology domains.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-12 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Key Features</h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {KEY_FEATURES.map((f) => (
              <div key={f.title} className="rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOT CAMP CATEGORIES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Boot Camp Categories</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {BOOT_CAMPS.map((bc) => (
              <div key={bc.name} className="rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/30">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-white">{bc.name}</h3>
                </div>
                <p className="mb-4 text-sm text-slate-400">{bc.description}</p>
                <div className="mb-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2 text-slate-300">
                    <Clock className="h-4 w-4 text-blue-400" />
                    <span>{bc.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Users className="h-4 w-4 text-blue-400" />
                    <span>{bc.audience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Satellite className="h-4 w-4 text-blue-400" />
                    <span>{bc.mode}</span>
                  </div>
                </div>
                <div className="mb-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Key Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {bc.topics.map((t) => (
                      <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <EnquiryButtons itemName={bc.name} emailSubject={`Enquiry – ${bc.name}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/image copy 7.png"
            alt="Rocket launch"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_7%)] via-[hsl(222_47%_7%)]/85 to-[hsl(222_47%_7%)]/50" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">Interested in a Boot Camp?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Reach out to our team to learn more about schedules, fees, and registration.
          </p>
          <div className="mt-8 flex justify-center">
            <EnquiryButtons
              itemName="Aeroin EduTech Boot Camps"
              emailSubject="Enquiry – Boot Camps"
              whatsappMessage="Hello Aeroin EduTech, I am interested in your Boot Camps. I would like to know more about the schedule, fees, and registration process."
              align="row"
            />
          </div>
        </div>
      </section>
    </>
  );
}
