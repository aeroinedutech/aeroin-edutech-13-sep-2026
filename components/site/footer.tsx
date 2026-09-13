import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';
import {
  PROFESSIONAL_FOOTER_LINKS,
  SCHOOL_FOOTER_LINKS,
  RESEARCH_FOOTER_LINKS,
} from '@/lib/courses';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[hsl(222_47%_5%)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/image-removebg-preview.png"
                alt="Aeroin EduTech"
                width={180}
                height={56}
                priority
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400">
              Learn Space Technology. Build the Future.
            </p>
            <p className="text-xs text-slate-500">
              Education division of Aeroin SpaceTech Pvt. Ltd.
            </p>
            <div className="flex flex-col gap-2 pt-2">
              <a
                href="mailto:info@aeroinedutech.in"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400"
              >
                <Mail className="h-4 w-4" />
                info@aeroinedutech.in
              </a>
              <a
                href="tel:+919176209914"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400"
              >
                <Phone className="h-4 w-4" />
                +91 9176209914
              </a>
              <a
                href="https://wa.me/919176209914"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>

              <a
                href="https://maps.app.goo.gl/gqC77wQVMfURMApt6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  2nd Floor, Kasturi Towers, Pearl Chambers,
                  <br />
                  21, Rukmani Nagar, Perumbakkam,
                  <br />
                  Tamil Nadu 600100
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><FooterLink href="/">Home</FooterLink></li>
              <li><FooterLink href="/programs">Programs</FooterLink></li>
              <li><FooterLink href="/boot-camps">Boot Camps</FooterLink></li>
              <li><FooterLink href="/ideation-workshops">Ideation Workshops</FooterLink></li>
              <li><FooterLink href="/faculty-development">Faculty Development</FooterLink></li>
              <li><FooterLink href="/value-added-programs">Value Added Programs</FooterLink></li>
              <li><FooterLink href="/space-lab">Space Lab Setup</FooterLink></li>
              <li><FooterLink href="/research-internship">Research Internship</FooterLink></li>
              <li><FooterLink href="/about">About</FooterLink></li>
              <li><FooterLink href="/careers">Careers</FooterLink></li>
              <li><FooterLink href="/contact">Contact</FooterLink></li>
            </ul>
          </div>

          {/* Professional Programs */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Professional Programs
            </h3>
            <ul className="space-y-2">
              {PROFESSIONAL_FOOTER_LINKS.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <FooterLink href={`/programs/${c.slug}`}>{c.name}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Research + School */}
          <div>
            <h3 className="mb-4 flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-white">
              Research Internships
            </h3>
            <ul className="space-y-2">
              {RESEARCH_FOOTER_LINKS.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <FooterLink href={`/programs/${c.slug}`}>
                    {c.name.replace(' — Research Internship', '')}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* School + Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              School Programs
            </h3>
            <ul className="space-y-2">
              {SCHOOL_FOOTER_LINKS.map((c) => (
                <li key={c.slug}>
                  <FooterLink href={`/programs/${c.slug}`}>{c.name}</FooterLink>
                </li>
              ))}
            </ul>
            <h3 className="mb-4 mt-6 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="space-y-2">
              <li><FooterLink href="/terms">Terms &amp; Conditions</FooterLink></li>
              <li><FooterLink href="/privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="/refund">Refund Policy</FooterLink></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Aeroin EduTech, a division of Aeroin SpaceTech Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-slate-400 transition-colors hover:text-blue-400">
      {children}
    </Link>
  );
}
