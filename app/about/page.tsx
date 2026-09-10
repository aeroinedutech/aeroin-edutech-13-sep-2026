import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import {
  Rocket,
  Wrench,
  Briefcase,
  Users,
  Target,
  Zap,
  Award,
  Plane,
  Cpu,
  Bot,
  Globe2,
  Telescope,
  Satellite,
  ArrowRight,
  GraduationCap,
  School,
  ShieldCheck,
  FlaskConical,
  BookOpen,
  Building2,
  Lightbulb,
  Orbit,
  Wind,
  Handshake,
  Sparkles,
  SatelliteDish,
  Cog,
  Brain,
  Microscope,
  Mountain,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Aeroin EduTech',
  description:
    'Aeroin EduTech is the education division of Aeroin SpaceTech Pvt. Ltd., focused on practical, project-based and industry-oriented learning in space technology and aerospace engineering.',
};

const MISSION_POINTS = [
  'Make aerospace and space technology education accessible.',
  'Provide practical and project-based learning experiences.',
  'Connect learners with industry-oriented knowledge.',
  'Encourage innovation and technical problem-solving.',
  'Develop research capabilities among students.',
  'Introduce learners to emerging space technologies.',
  'Create opportunities for internships and technical projects.',
  'Support institutions in building stronger aerospace and STEM ecosystems.',
  'Prepare students for future opportunities in the space industry.',
];

const WHAT_WE_DO = [
  { icon: <Rocket />, title: 'Space Technology Education', desc: 'Provide structured learning opportunities in aerospace and space technology.' },
  { icon: <Wrench />, title: 'Practical Project-Based Learning', desc: 'Enable students to work on hands-on technical projects and engineering applications.' },
  { icon: <FlaskConical />, title: 'Research & Innovation', desc: 'Provide opportunities for learners to explore research problems and develop technical solutions.' },
  { icon: <GraduationCap />, title: 'Technical Training', desc: 'Conduct expert-led technical sessions, workshops, boot camps, and specialized programs.' },
  { icon: <Briefcase />, title: 'Internships', desc: 'Provide practical exposure through space-tech internships and research-oriented learning.' },
  { icon: <Building2 />, title: 'Institutional Programs', desc: 'Work with schools, colleges, universities, and institutions to deliver customized aerospace and STEM learning programs.' },
];

const LEARNING_STAGES = [
  { num: '01', icon: <BookOpen />, title: 'LEARN', desc: 'Build strong theoretical foundations in aerospace and space technology.' },
  { num: '02', icon: <Wrench />, title: 'BUILD', desc: 'Apply knowledge through practical activities, engineering design, simulations, and projects.' },
  { num: '03', icon: <FlaskConical />, title: 'RESEARCH', desc: 'Explore real-world technical problems through research-oriented learning and expert guidance.' },
  { num: '04', icon: <Lightbulb />, title: 'INNOVATE', desc: 'Transform knowledge and research into innovative solutions and future-ready technologies.' },
];

const PROGRAMS = [
  { icon: <Rocket />, title: 'Skilling Programs', desc: 'Structured aerospace and space-technology learning programs for students, graduates, and professionals.', href: '/programs' },
  { icon: <Zap />, title: 'Boot Camps', desc: 'Intensive practical and project-oriented learning experiences.', href: '/boot-camps' },
  { icon: <Lightbulb />, title: 'Ideation Workshops', desc: 'Innovation-focused workshops designed to convert ideas into technical concepts and projects.', href: '/ideation-workshops' },
  { icon: <GraduationCap />, title: 'Faculty Development Programs', desc: 'Specialized training for educators and faculty members.', href: '/faculty-development' },
  { icon: <BookOpen />, title: 'Value Added Programs', desc: 'Additional technical learning opportunities designed to complement academic education.', href: '/value-added-programs' },
  { icon: <FlaskConical />, title: 'Research Internship', desc: 'Advanced research-oriented learning involving theory, design, simulation, research, and research-paper development.', href: '/research-internship' },
];

const DOMAINS = [
  { icon: <Rocket />, label: 'Rocket Propulsion' },
  { icon: <SatelliteDish />, label: 'CubeSat Technology' },
  { icon: <Satellite />, label: 'Satellite Systems' },
  { icon: <Orbit />, label: 'Orbital Mechanics' },
  { icon: <Plane />, label: 'Aerospace Structures' },
  { icon: <Wind />, label: 'Aerodynamics' },
  { icon: <Bot />, label: 'Drones & UAVs' },
  { icon: <Cog />, label: 'Space Robotics' },
  { icon: <Wrench />, label: 'Engineering Design & Simulation' },
  { icon: <Brain />, label: 'AI & Emerging Technologies' },
  { icon: <Microscope />, label: 'Research & Innovation' },
  { icon: <Mountain />, label: 'Planetary Exploration' },
];

const STATS = [
  { value: '7,000+', label: 'Space Tech Learners', icon: <Users /> },
  { value: '100+', label: 'Space Tech Internships', icon: <Briefcase /> },
  { value: '15+', label: 'Expert Aerospace Mentors', icon: <Award /> },
  { value: '75+', label: 'Space Tech Talks Delivered', icon: <Telescope /> },
];

const IA_INITIATIVES = [
  'Industry-oriented technical programs',
  'Hands-on workshops',
  'Faculty development',
  'Student projects',
  'Research internships',
  'Technical talks',
  'Innovation programs',
  'Aerospace project development',
  'Institutional collaborations',
  'Space technology awareness',
];

const PARTNERS = [
  {
    name: 'ISRO Registered Space Tutor',
    src: '/images/partners/image-removebg-preview_(1).png',
  },
  {
    name: 'Sivamurugan Auto Components Private Limited',
    src: '/images/partners/image.png',
  },
  {
    name: 'Cosmobuzz',
    src: '/images/partners/image-removebg-preview_(2).png',
  },
  {
    name: 'CR partner logo',
    src: '/images/partners/image copy.png',
  },
  {
    name: 'Rocket Factory India',
    src: '/images/partners/image copy 2.png',
  },
  {
    name: 'Indian Planetary Space Vault and Research',
    src: '/images/partners/image copy 3.png',
  },
];

const INDUSTRY_ACADEMIA = [
  {
    name: 'Cochin University of Science and Technology',
    src: '/images/partners/image copy 4.png',
  },
  {
    name: 'Hindusthan College of Engineering and Technology',
    src: '/images/partners/image copy 5.png',
  },
  {
    name: 'Chandigarh University',
    src: '/images/partners/image copy 6.png',
  },
  {
    name: 'Dr M.G.R. Educational and Research Institute',
    src: '/images/partners/image copy 7.png',
  },
  {
    name: 'Lovely Professional University',
    src: '/images/partners/image copy 8.png',
  },
  {
    name: 'Vellore Institute of Technology',
    src: '/images/partners/image copy 9.png',
  },
  {
    name: 'Kumaraguru College of Technology',
    src: '/images/partners/image copy 10.png',
  },
  {
    name: 'Nehru Group of Institutions',
    src: '/images/partners/image-removebg-preview_(4).png',
  },
];

const WHY_AEROIN = [
  { icon: <Wrench />, title: 'Practical Learning', desc: 'Move beyond textbooks through hands-on technical activities.' },
  { icon: <Briefcase />, title: 'Industry-Oriented Knowledge', desc: 'Learn concepts aligned with real-world aerospace applications.' },
  { icon: <Users />, title: 'Expert Mentorship', desc: 'Learn from professionals and technical mentors.' },
  { icon: <FlaskConical />, title: 'Research Exposure', desc: 'Explore research problems and technical innovation.' },
  { icon: <Target />, title: 'Project-Based Education', desc: 'Build and work on practical aerospace projects.' },
  { icon: <Globe2 />, title: 'Space-Tech Ecosystem', desc: 'Become part of a learning environment focused on aerospace and emerging space technologies.' },
];

const GALLERY_IMAGES = [
  { src: '/images/gallery/Aeroin_Team.JPG', alt: 'Aeroin Team' },
  { src: '/images/gallery/Aeromodelling_Bootcamp_For_School_Students.jpg', alt: 'Aeromodelling Bootcamp For School Students' },
  { src: '/images/gallery/Bootcamp_For_School_Students.jpg', alt: 'Bootcamp For School Students' },
  { src: '/images/gallery/CSR_Activity_for_Schools.jpg', alt: 'CSR Activity for Schools' },
  { src: '/images/gallery/Expo_&_Stall_-_Ulagam_Ungal_Kayyil.jpg', alt: 'Expo & Stall - Ulagam Ungal Kayyil' },
  { src: '/images/gallery/Guest_Lecture_For_School_Students.jpg', alt: 'Guest Lecture For School Students' },
  { src: '/images/gallery/Guest_Lecture.JPG', alt: 'Guest Lecture' },
  { src: '/images/gallery/Guest_Speaker_-_HR_NEXUS_2026.jpg', alt: 'Guest Speaker - HR NEXUS 2026' },
  { src: '/images/gallery/Guest_Speaker_at_FounderX.jpeg', alt: 'Guest Speaker at FounderX' },
  { src: '/images/gallery/Guest_Speaker_for_College_Event.jpg', alt: 'Guest Speaker for College Event' },
  { src: '/images/gallery/Hands-on_Training_for_School_students.jpg', alt: 'Hands-on Training for School Students' },
  { src: '/images/gallery/Ideation_Workshop.jpg', alt: 'Ideation Workshop' },
  { src: '/images/gallery/MoU_Signed_with_MH_Cockpit.jpg', alt: 'MoU Signed with MH Cockpit' },
  { src: '/images/gallery/MoU_Signed_with_SNS_Institutions.png', alt: 'MoU Signed with SNS Institutions' },
  { src: '/images/gallery/Offline_Interinship_Completion.JPG', alt: 'Offline Internship Completion' },
  { src: '/images/gallery/Rocketry_workshop.jpg', alt: 'Rocketry Workshop' },
  { src: '/images/gallery/SPACE_5.0_-National_Seminar_Oragnizer_in_Association_with_Dr.M.G.R_University.jpeg', alt: 'SPACE 5.0 - National Seminar Organizer in Association with Dr. M.G.R University' },
  { src: '/images/gallery/Space_Club_Inaguration_-_Chandigarh_University.jpeg', alt: 'Space Club Inauguration - Chandigarh University' },
  { src: '/images/gallery/Technical_Workshop_-_Vels_University.JPG', alt: 'Technical Workshop - Vels University' },
  { src: '/images/gallery/Technical_Workshop_for_College_Students.jpg', alt: 'Technical Workshop for College Students' },
];

const LEARNER_JOURNEY = ['Curiosity', 'Knowledge', 'Skills', 'Projects', 'Research', 'Innovation'];

export default function AboutPage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2538107/pexels-photo-2538107.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Milky Way galaxy"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/80 via-[hsl(222_47%_7%)]/60 to-[hsl(222_47%_7%)]" />
        </div>
        <div className="relative mx-auto w-full max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300 animate-fade-in-up">
            <Rocket className="h-4 w-4" /> Aeroin SpaceTech Pvt. Ltd.
          </div>
          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            About Aeroin EduTech
          </h1>
          <p className="mt-4 text-xl font-medium text-blue-300 animate-fade-in-up">
            Empowering the Next Generation Through Space Technology Education
          </p>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 animate-fade-in-up">
            Aeroin EduTech is the dedicated education and learning division of Aeroin SpaceTech
            Pvt. Ltd., focused on making aerospace and space technology education practical,
            accessible, and industry-oriented. We combine theoretical knowledge with hands-on
            learning, technical projects, research opportunities, expert-led sessions, and
            real-world aerospace applications to prepare students and aspiring professionals for
            the rapidly evolving space industry.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in-up">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500 glow-blue">
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
      </section>

      {/* ============ WHO WE ARE ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
              <Building2 className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Who We Are</h2>
          </div>
          <div className="space-y-4 text-base leading-relaxed text-slate-300">
            <p>
              Aeroin EduTech is the dedicated learning division of Aeroin SpaceTech Pvt. Ltd.,
              created to bridge the gap between academic education and real-world aerospace and
              space technology experience.
            </p>
            <p>
              Our focus is to provide learners with opportunities to understand, explore, design,
              simulate, build, and research technologies relevant to the aerospace and space
              industry.
            </p>
            <p>
              Through structured programs, practical projects, technical workshops, internships,
              expert interactions, and research-oriented learning, Aeroin EduTech aims to develop
              the technical capabilities and problem-solving mindset required by the next
              generation of engineers, researchers, innovators, and space professionals.
            </p>
          </div>
        </div>
      </section>

      {/* ============ OUR VISION ============ */}
      <section className="relative overflow-hidden py-20 bg-[hsl(222_47%_5%)]">
        <div className="absolute inset-0 bg-stars opacity-40" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
            <Telescope className="h-4 w-4" /> Our Vision
          </div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            To inspire, educate, and empower the next generation of aerospace and
            space-technology professionals.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
            Aeroin EduTech envisions a future where students and aspiring engineers have access
            to practical, research-driven, and industry-relevant space technology education from
            an early stage of their academic journey.
          </p>
        </div>
      </section>

      {/* ============ OUR MISSION ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
              <Target className="h-4 w-4" /> Our Mission
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              To bridge the gap between academic learning and real-world aerospace experience.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {MISSION_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-4 transition-all hover:border-blue-500/30"
              >
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-blue-400">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
                <span className="text-sm text-slate-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO ============ */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">What We Do</h2>
            <p className="mt-4 text-slate-400">
              Comprehensive learning experiences across space technology and aerospace engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHAT_WE_DO.map((item, i) => (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <span className="absolute right-4 top-4 text-3xl font-black text-blue-600/20">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LEARNING APPROACH ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Learn. Build. Research. Innovate.
            </h2>
            <p className="mt-4 text-slate-400">
              Our four-stage learning approach takes you from foundational knowledge to innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LEARNING_STAGES.map((stage, i) => (
              <div key={stage.num} className="relative">
                {/* Connector line */}
                {i < LEARNING_STAGES.length - 1 && (
                  <div className="absolute left-full top-12 hidden h-0.5 w-full bg-gradient-to-r from-blue-500/40 to-transparent lg:block" />
                )}
                <div className="relative rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 text-center transition-all hover:border-blue-500/40">
                  <span className="text-2xl font-black text-blue-600/30">{stage.num}</span>
                  <div className="mx-auto mb-4 mt-2 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
                    {stage.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{stage.title}</h3>
                  <p className="text-sm text-slate-400">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR PROGRAMS ============ */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Learning Opportunities at Aeroin EduTech
            </h2>
            <p className="mt-4 text-slate-400">
              Programs designed for every stage of your space technology journey.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((prog) => (
              <Link
                key={prog.title}
                href={prog.href}
                className="group rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400 transition-transform group-hover:scale-110">
                  {prog.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{prog.title}</h3>
                <p className="text-sm text-slate-400">{prog.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-blue-400 transition-all group-hover:gap-3">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TECHNOLOGY & LEARNING DOMAINS ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Explore Space Technology With Us
            </h2>
            <p className="mt-4 text-slate-400">
              Comprehensive learning across aerospace and space technology disciplines.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {DOMAINS.map((domain) => (
              <div
                key={domain.label}
                className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-5 text-center transition-all hover:border-blue-500/30 hover:bg-blue-600/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  {domain.icon}
                </div>
                <span className="text-sm font-medium text-slate-200">{domain.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR IMPACT ============ */}
      <section className="relative overflow-hidden py-20 bg-[hsl(222_47%_5%)]">
        <div className="absolute inset-0 bg-stars opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Impact</h2>
            <p className="mt-4 text-slate-400">
              Measurable outcomes from our space technology education initiatives.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 text-center transition-all hover:border-blue-500/30"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400">
                  {stat.icon}
                </div>
                <div className="text-4xl font-black text-white sm:text-5xl">{stat.value}</div>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
              <Sparkles className="h-4 w-4" /> Gallery
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Moments at Aeroin EduTech</h2>
            <p className="mt-4 text-slate-400">
              A glimpse into our workshops, boot camps, guest lectures, collaborations, and events.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {GALLERY_IMAGES.map((img) => (
              <div
                key={img.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 transition-all hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[hsl(222_47%_7%)] via-[hsl(222_47%_7%)]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="p-4 text-sm font-medium text-white">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRY-ACADEMIA CONNECT ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
              <Handshake className="h-4 w-4" /> Industry–Academia Connect
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Bridging Education, Industry &amp; Innovation
            </h2>
          </div>
          <div className="mx-auto mb-10 max-w-4xl">
            <p className="text-center text-base leading-relaxed text-slate-300">
              Aeroin EduTech works to bridge the gap between academic education and the practical
              requirements of the aerospace and space-technology industry. Through collaborations
              with educational institutions, industry professionals, technical experts, and
              innovation ecosystems, we create opportunities for students and educators to gain
              exposure to practical engineering, emerging technologies, research, and
              industry-oriented learning.
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-blue-400">
              Our Industry–Academia Initiatives
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {IA_INITIATIVES.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-[hsl(222_40%_10%)] px-4 py-3 text-sm text-slate-300 transition-all hover:border-blue-500/30"
                >
                  <Sparkles className="h-4 w-4 shrink-0 text-blue-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ ESTEEMED PARTNERS & COLLABORATIONS ============ */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Esteemed Partners &amp; Collaborations
            </h2>
            <p className="mt-4 text-slate-400">
              Organizations we proudly collaborate with across the space and technology ecosystem.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.src}
                className="flex min-h-36 items-center justify-center rounded-xl border border-navy blue /10 bg-black p-5 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={240}
                  height={140}
                  className="h-24 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRY–ACADEMIA ============ */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-400">
              <ShieldCheck className="h-4 w-4" /> Industry–Academia
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Industry–Academia</h2>
            <p className="mt-4 text-slate-400">
              Connecting learners and educators with leading academic institutions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRY_ACADEMIA.map((institution) => (
              <div
                key={institution.src}
                className="flex min-h-36 items-center justify-center rounded-xl border border-navy blue/10 bg-black p-5 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20"
              >
                <Image
                  src={institution.src}
                  alt={institution.name}
                  width={240}
                  height={140}
                  className="h-24 w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY AEROIN EDUTECH ============ */}
      <section className="py-20 bg-[hsl(222_47%_5%)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Why Choose Aeroin EduTech?</h2>
            <p className="mt-4 text-slate-400">
              What sets our space technology education apart.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_AEROIN.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 transition-all hover:border-blue-500/30"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OUR LEARNERS ============ */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/38825274/pexels-photo-38825274.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Ringed planet floating in deep space"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_7%)] via-[hsl(222_47%_7%)]/85 to-[hsl(222_47%_7%)]/50" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Empowering the Next Generation of Space Innovators
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
              From school students exploring their first aerospace concepts to engineering students
              working on advanced projects and research, Aeroin EduTech provides learning
              opportunities designed to grow with the learner.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {LEARNER_JOURNEY.map((step, i) => (
              <div key={step} className="flex items-center gap-2 sm:gap-3">
                <span className="rounded-full border border-orange-500/30 bg-navy blue-600/15 px-5 py-2 text-sm font-semibold text-white-300">
                  {step}
                </span>
                {i < LEARNER_JOURNEY.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-white-500/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/30596239/pexels-photo-30596239.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Earth from space at night"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)] via-[hsl(222_47%_7%)]/85 to-[hsl(222_47%_7%)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Start Your Journey Into Space Technology
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300">
            Whether you are a student, educator, researcher, institution, or aspiring space
            professional, Aeroin EduTech provides opportunities to learn, build, research, and
            innovate in aerospace and space technology.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500 glow-blue">
              <Link href="/programs">
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href="/research-internship">
                Research Internship <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 hover:text-white">
              <Link href="/contact">
                Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
