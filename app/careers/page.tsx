import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { EmailLink } from '@/components/site/email-link';
import {
  Rocket,
  Mail,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Wrench,
  Users,
  ClipboardList,
  Lightbulb,
  Briefcase,
  ArrowDown,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | Aeroin EduTech',
  description:
    'Build your career in aerospace and space technology education. Explore current openings at Aeroin EduTech for Technical Trainers, Tutors, and Project Associates.',
};

const RECRUITMENT_EMAIL = 'info@aeroinedutech.in';

interface JobOpening {
  id: string;
  number: string;
  title: string;
  role: string;
  about: string;
  responsibilities: string[];
  preferredBackground: string[];
  subjectFormat: string;
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'technical-trainer',
    number: '01',
    title: 'Technical Trainer',
    role: 'Technical Trainer – Aerospace & STEM Education',
    about:
      'We are looking for passionate Technical Trainers who can deliver engaging technical training programs for school students, college students, and working professionals. The role involves conducting aerospace, space technology, engineering, robotics, UAV, satellite, and STEM-based training programs, workshops, and practical learning sessions.',
    responsibilities: [
      'Conduct technical training sessions.',
      'Deliver practical workshops and hands-on activities.',
      'Explain complex technical concepts in a simple and engaging manner.',
      'Guide students during technical and engineering projects.',
      'Conduct workshops, seminars, bootcamps, and institutional programs.',
      'Prepare training materials, presentations, and practical activities.',
      'Mentor students in aerospace and STEM projects.',
      "Support Aeroin EduTech's academic and technical programs.",
    ],
    preferredBackground: [
      'Aerospace / Aeronautical Engineering',
      'Mechanical Engineering',
      'Electronics / Electrical Engineering',
      'Robotics / Mechatronics',
      'Space Technology',
      'Physics',
      'Other relevant technical fields',
    ],
    subjectFormat: 'Application – Technical Trainer – [Your Name]',
  },
  {
    id: 'tutor',
    number: '02',
    title: 'Tutor',
    role: 'Tutor – Aerospace & STEM Education',
    about:
      'Aeroin EduTech is looking for enthusiastic Tutors and Mentors who can guide students through aerospace, space technology, STEM, engineering, and project-based learning programs. The role focuses on helping students understand technical concepts, complete projects, solve problems, and develop their technical knowledge.',
    responsibilities: [
      'Conduct online and offline tutoring sessions.',
      'Mentor students throughout their learning journey.',
      'Explain technical concepts clearly.',
      'Assist students with assignments and projects.',
      'Conduct doubt-clearing sessions.',
      'Monitor student learning progress.',
      'Provide technical guidance and feedback.',
      'Support workshops and educational programs.',
      'Encourage students to explore aerospace and STEM careers.',
    ],
    preferredBackground: [
      'Aerospace / Aeronautical Engineering',
      'Mechanical Engineering',
      'Electrical / Electronics Engineering',
      'Robotics / Mechatronics',
      'Physics',
      'Mathematics',
      'Computer Science',
      'Other relevant technical or STEM backgrounds',
    ],
    subjectFormat: 'Application – Tutor – [Your Name]',
  },
  {
    id: 'project-associate',
    number: '03',
    title: 'Project Associate',
    role: 'Project Associate – Aerospace & EduTech Projects',
    about:
      'We are looking for a motivated Project Associate to support the planning, coordination, and execution of aerospace education programs, technical projects, student projects, workshops, and institutional activities. This position is suitable for candidates who enjoy working across technical development, project execution, documentation, coordination, and problem-solving.',
    responsibilities: [
      'Support aerospace and STEM project execution.',
      'Coordinate student technical projects.',
      'Assist in workshops and technical programs.',
      'Support aerospace, robotics, UAV, satellite, and engineering projects.',
      'Prepare project documentation and reports.',
      'Coordinate with trainers, tutors, students, and institutions.',
      'Track project activities and deliverables.',
      'Assist with technical research and project development.',
      'Support prototype development, testing, and demonstrations.',
      'Contribute to the development of new educational and technical programs.',
    ],
    preferredBackground: [
      'Aerospace / Aeronautical Engineering',
      'Mechanical Engineering',
      'Electrical / Electronics Engineering',
      'Robotics / Mechatronics',
      'Space Technology',
      'Computer Science',
      'Other engineering or technical fields',
    ],
    subjectFormat: 'Application – Project Associate – [Your Name]',
  },
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <Image
            src="carrier_page _top.jpg"
            alt="Engineering team collaborating on a technical prototype"
            fill
            priority
            sizes="75vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(222_47%_7%)]/85 via-[hsl(222_47%_7%)]/80 to-[hsl(222_47%_7%)]" />
          <div className="absolute inset-0 bg-stars" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black-500/30 bg-orange-600/10 px-3 py-1.5 text-xs text-white-300 sm:text-sm animate-fade-in-up">
            <Rocket className="h-4 w-4" /> Careers at Aeroin EduTech
          </div>
          <h1 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl animate-fade-in-up">
            Build Your Career in{' '}
            <span className="text-gradient">Aerospace &amp; Space Technology</span>
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base text-slate-100 sm:text-lg animate-fade-in-up">
            Join Aeroin EduTech and help shape the next generation of aerospace, space
            technology, and STEM professionals.
          </p>
          <p className="mt-3 max-w-2xl mx-auto text-black-300 sm text-slate-800 animate-fade-in-up">
            Aeroin EduTech is looking for passionate and talented individuals who are
            interested in aerospace education, engineering, space technology, technical
            training, student mentoring, and project development. If you are passionate
            about technology and education and would like to be part of our growing team,
            explore our current openings below.
          </p>
          <div className="mt-6 sm:mt-8 animate-fade-in-up">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500 glow-blue">
              <a href="#openings">
                View Open Positions <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CURRENT OPENINGS */}
      <section id="openings" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:mb-12">
            <div className="mb-2 flex items-center justify-center gap-2 text-sm text-blue-400">
              <Briefcase className="h-4 w-4" />
              We&apos;re Hiring
            </div>
            <h2 className="text-2xl font-bold text-white sm:text-4xl">Current Openings</h2>
            <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base">
              We are currently looking for motivated individuals for the following positions.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {JOB_OPENINGS.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="py-14 bg-[hsl(222_47%_5%)] sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 sm:p-8 lg:p-12">
            <div className="mb-6 text-center">
              <h2 className="text-xl font-bold text-white sm:text-3xl">
                Interested in Joining Aeroin EduTech?
              </h2>
              <p className="mt-3 text-sm text-slate-400 sm:mt-4 sm:text-base">
                If you are passionate about aerospace, space technology, engineering, STEM
                education, teaching, or technical projects, we would be happy to hear from you.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="mb-3 text-base font-semibold text-white sm:text-lg">Application Instructions</h3>
              <p className="mb-3 text-sm text-slate-400">
                Please send the following to our recruitment email:
              </p>
              <ul className="space-y-2">
                {[
                  'Updated CV / Resume',
                  'Position you are applying for',
                  'Short introduction about yourself',
                  'Relevant project / internship / work experience',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-blue-600/20 text-xs font-bold text-blue-400">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
              <p className="mb-1 text-sm font-medium text-slate-300">Email Subject Format</p>
              <p className="font-mono text-xs text-blue-300 sm:text-sm">
                Application – [Position Name] – [Your Name]
              </p>
            </div>

            <div className="mb-8 flex flex-col items-center justify-center gap-3 rounded-xl border border-blue-500/20 bg-blue-600/10 p-4 sm:flex-row sm:p-5">
              <Mail className="h-5 w-5 shrink-0 text-blue-400" />
              <div className="text-center">
                <p className="text-xs text-slate-400">Recruitment Email</p>
                <a
                  href={`mailto:${RECRUITMENT_EMAIL}`}
                  className="text-base font-semibold text-white hover:text-blue-400 sm:text-lg"
                >
                  {RECRUITMENT_EMAIL}
                </a>
              </div>
            </div>

            <div className="text-center">
              <EmailLink
                to={RECRUITMENT_EMAIL}
                subject="Application – [Position Name] – [Your Name]"
                label="Send Your Application"
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-500 glow-blue"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GENERAL OPPORTUNITIES */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-blue-900/20 to-[hsl(222_40%_10%)] p-6 text-center sm:p-8 lg:p-12">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600/20 mx-auto">
              <Lightbulb className="h-7 w-7 text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-white sm:text-3xl">
              Don&apos;t See a Suitable Opening?
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-400 sm:mt-4 sm:text-base">
              We are always interested in connecting with talented individuals who are
              passionate about aerospace engineering, space technology, STEM education,
              research, innovation, and student development. Even if your specific profile
              does not match the current openings, you can still share your CV with us for
              future opportunities.
            </p>
            <div className="mt-6 sm:mt-8">
              <EmailLink
                to={RECRUITMENT_EMAIL}
                subject="Future Opportunity – [Your Name]"
                label="Send Your CV"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden border-t border-white/10 py-14 sm:py-20">
        <div className="absolute inset-0">
          <Image
            src="carrier_bg.jpg"
            alt="Team collaborating in a workshop"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222_47%_7%)] via-[hsl(222_47%_7%)]/85 to-[hsl(222_47%_7%)]/50" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-4xl">
            Be Part of the Future of Aerospace Education
          </h2>
          <p className="mt-3 text-base text-blue-300 sm:mt-4 sm:text-lg">Learn. Build. Innovate. Inspire.</p>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-300 sm:mt-4 sm:text-base">
            Join Aeroin EduTech and contribute to creating practical, accessible, and
            industry-oriented aerospace and STEM learning experiences.
          </p>
          <div className="mt-6 sm:mt-8">
            <Button asChild size="lg" className="bg-blue-600 text-white hover:bg-blue-500 glow-blue">
              <a href="#openings">
                Explore Open Positions <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function JobCard({ job }: { job: JobOpening }) {
  const icons: Record<string, React.ReactNode> = {
    'technical-trainer': <GraduationCap className="h-6 w-6" />,
    tutor: <BookOpen className="h-6 w-6" />,
    'project-associate': <ClipboardList className="h-6 w-6" />,
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[hsl(222_40%_10%)] transition-all hover:border-blue-500/30">
      {/* Card header */}
      <div className="flex flex-col gap-4 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-start gap-3 sm:gap-4">
          <span className="text-2xl font-black text-white-300/30 sm:text-3xl">{job.number}</span>
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/15 text-blue-400 sm:h-11 sm:w-11">
              {icons[job.id]}
            </div>
            <h3 className="text-lg font-bold text-white sm:text-2xl">{job.title}</h3>
            <p className="mt-1 text-xs text-blue-300 sm:text-sm">{job.role}</p>
          </div>
        </div>
        <EmailLink
          to={RECRUITMENT_EMAIL}
          subject={job.subjectFormat}
          label="Email Your CV"
          className="shrink-0 bg-blue-600 text-white hover:bg-blue-500 sm:hidden"
          fullWidth
        />
        <EmailLink
          to={RECRUITMENT_EMAIL}
          subject={job.subjectFormat}
          label="Email Your CV"
          className="shrink-0 bg-blue-600 text-white hover:bg-blue-500 hidden sm:inline-flex"
        />
      </div>

      {/* Card body */}
      <div className="grid grid-cols-1 gap-5 p-5 sm:gap-6 sm:p-8 lg:grid-cols-3">
        {/* About + Responsibilities */}
        <div className="space-y-5 lg:col-span-2">
          <div>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
              About the Role
            </h4>
            <p className="text-sm leading-relaxed text-slate-300">{job.about}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Key Responsibilities
            </h4>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {job.responsibilities.map((resp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Preferred Background + Apply */}
        <div className="space-y-5">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-400">
              <Users className="h-4 w-4 text-blue-400" /> Preferred Background
            </h4>
            <ul className="space-y-2">
              {job.preferredBackground.map((bg, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                  <Wrench className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400/70" />
                  {bg}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-blue-500/20 bg-blue-600/10 p-4 sm:p-5">
            <h4 className="mb-2 text-sm font-semibold text-white">How to Apply</h4>
            <p className="mb-3 text-sm text-slate-300">
              Send your updated CV/resume with the subject:
            </p>
            <p className="mb-4 font-mono text-xs text-blue-300">{job.subjectFormat}</p>
            <EmailLink
              to={RECRUITMENT_EMAIL}
              subject={job.subjectFormat}
              label="Email Your CV"
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}
