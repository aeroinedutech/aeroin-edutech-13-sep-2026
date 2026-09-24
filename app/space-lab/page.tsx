import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Rocket,
  Satellite,
  Cpu,
  Bot,
  Wrench,
  Printer,
  Radio,
  Telescope,
  Target,
  BookOpen,
  GraduationCap,
  Server,
  FlaskConical,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { EnquiryButtons } from '@/components/site/enquiry-buttons';
import { whatsappLink, emailLink } from '@/lib/enquiry';

export const metadata: Metadata = {
  title: 'Space Lab Setup | Aeroin EduTech',
  description:
    'Aeroin EduTech provides customized Space Lab setup solutions designed to create practical aerospace and space-technology learning environments for educational institutions.',
};

const WHAT_WE_PROVIDE = [
  { icon: <Cpu />, label: 'Space Technology Learning Kits' },
  { icon: <Satellite />, label: 'CubeSat Development Kits' },
  { icon: <Rocket />, label: 'Rocketry Kits' },
  { icon: <Bot />, label: 'UAV & Drone Kits' },
  { icon: <Bot />, label: 'Robotics Kits' },
  { icon: <Cpu />, label: 'Electronics & Sensor Kits' },
  { icon: <Printer />, label: '3D Printing & Prototyping' },
  { icon: <Radio />, label: 'Ground Station Demonstration Systems' },
  { icon: <Telescope />, label: 'Space Science Equipment' },
  { icon: <Server />, label: 'Simulation & Design Tools' },
  { icon: <Target />, label: 'Student Project Support' },
  { icon: <GraduationCap />, label: 'Faculty Training' },
  { icon: <BookOpen />, label: 'Curriculum Support' },
];

const LAB_PACKAGES = [
  {
    name: 'Basic Space Lab',
    description: 'An entry-level space technology lab setup with essential kits and learning resources for schools and colleges.',
    features: ['Basic space technology kits', 'Rocketry basics', 'Introduction to satellites', 'Curriculum support'],
    icon: <Rocket />,
  },
  {
    name: 'Advanced Space Lab',
    description: 'An enhanced lab setup with advanced kits, simulation tools, and project support for deeper technical learning.',
    features: ['Advanced CubeSat kits', 'UAV & drone kits', 'Simulation tools', 'Robotics kits', 'Faculty training'],
    icon: <Satellite />,
  },
  {
    name: 'Complete Space Technology Lab',
    description: 'A comprehensive space technology learning lab with full equipment, ground station systems, and end-to-end support.',
    features: ['Full CubeSat development kits', 'Ground station demo systems', '3D printing & prototyping', 'Advanced simulation tools', 'Robotics & electronics kits', 'Faculty training & curriculum support'],
    icon: <FlaskConical />,
  },
  {
    name: 'Customized Institutional Space Lab',
    description: 'A fully customized space lab solution tailored to your institution\'s specific requirements, budget, and academic goals.',
    features: ['Customized equipment selection', 'Tailored curriculum integration', 'Flexible scope & budget', 'Dedicated training & support', 'Long-term partnership'],
    icon: <Building2 />,
  },
];

export default function SpaceLabPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="space_lab.png"
            alt="Space technology lab"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/80 via-[hsl(222_47%_7%)]/70 to-[hsl(222_47%_7%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-darkblue-300">
            <Building2 className="h-4 w-4" /> Space Lab Setup
          </div>
          <h1 className="text-4xl font-extrabold text-white-300 sm:text-5xl">
            Build Your Own Space Technology Learning Lab
          </h1>
          <p className="mt-2 text-xl font-bold text-white -300">Complete Space Lab Solutions for Schools &amp; Colleges</p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
            Aeroin EduTech provides customized Space Lab setup solutions designed to create practical
            aerospace and space-technology learning environments for educational institutions.
          </p>
        </div>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">What We Provide</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {WHAT_WE_PROVIDE.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-5 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LAB PACKAGES */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">Space Lab Solutions</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {LAB_PACKAGES.map((pkg) => (
              <div key={pkg.name} className="rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/30">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400">
                  {pkg.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{pkg.name}</h3>
                <p className="mt-3 text-sm text-slate-400">{pkg.description}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <EnquiryButtons
                    itemName={`Space Lab Setup – ${pkg.name}`}
                    emailSubject={`Enquiry – Space Lab Setup – ${pkg.name}`}
                    whatsappMessage={`Hello Aeroin EduTech Team, I am interested in the ${pkg.name} for our institution. I would like to know more about the available packages, equipment, customization options, training, and pricing.`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED ENQUIRY CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-900/30 to-[hsl(222_40%_10%)] p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-white text-center">Enquire for Space Lab Setup</h2>
            <p className="mt-4 text-center text-slate-300">
              Reach out to our team to discuss your institution&apos;s requirements. We&apos;ll help
              you choose the right lab package, equipment, and training.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={whatsappLink('Hello Aeroin EduTech Team, I am interested in setting up a Space Lab at our institution. I would like to know more about the available packages, equipment, customization options, training, and pricing.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-500"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.001-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.001 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Enquire on WhatsApp
              </a>
              <a
                href={emailLink(
                  'Enquiry – Space Lab Setup',
                  `Hello Aeroin EduTech Team,

I am interested in setting up a Space Lab at our institution.

Institution Name:
Contact Person:
City:
School / College:
Approximate Student Strength:
Required Lab Type:
Requirements / Areas of Interest:

Thank you.`
                )}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Enquire via Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
