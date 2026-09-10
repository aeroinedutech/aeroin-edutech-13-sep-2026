'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { Metadata } from 'next';
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  MapPin,
  Rocket,
  Loader2,
  CheckCircle2,
  Copy,
} from 'lucide-react';
import { EmailLink } from '@/components/site/email-link';

// Note: Metadata export doesn't work in client components in Next 13 app router.
// We'll set it via the parent or use a separate layout. For simplicity, we handle
// the page as client for form interactivity and accept no metadata here.

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    // Use mailto to send the form without a database or backend storage.
    // This opens the user's email client pre-filled with the form data.
    const subject = encodeURIComponent(`Program Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    const mailtoLink = `mailto:info@aeroinedutech.in?subject=${subject}&body=${body}`;

    setTimeout(() => {
      const prevLocation = window.location.href;
      window.location.href = mailtoLink;
      setTimeout(() => {
        if (window.location.href === prevLocation || document.hidden) {
          navigator.clipboard?.writeText('info@aeroinedutech.in').catch(() => {});
        }
        setStatus('sent');
      }, 1200);
    }, 500);
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-white/10 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-600/10 px-4 py-1.5 text-sm text-blue-300">
            <Rocket className="h-4 w-4" /> Aeroin EduTech
          </div>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-400">
            Have questions about our programs? We&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6">
                <h2 className="mb-4 text-lg font-bold text-white">Aeroin EduTech</h2>
                <p className="mb-4 text-sm text-slate-400">
                  Education division of Aeroin SpaceTech Pvt. Ltd.
                </p>
                <div className="space-y-4">
                  <ContactItem
                    icon={<Mail className="h-5 w-5" />}
                    label="Email"
                    value="info@aeroinedutech.in"
                    href="mailto:info@aeroinedutech.in"
                  />
                  <ContactItem
                    icon={<Phone className="h-5 w-5" />}
                    label="Phone"
                    value="+91 9176209914"
                    href="tel:+919176209914"
                  />
                  <ContactItem
                    icon={<MessageCircle className="h-5 w-5" />}
                    label="WhatsApp"
                    value="Chat with us"
                    href="https://wa.me/919176209914"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <EmailLink
                  to="info@aeroinedutech.in"
                  label="Email Us"
                  fullWidth
                />
                <Button asChild variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10">
                  <a href="https://wa.me/919176209914" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="rounded-xl border border-white/10 bg-[hsl(222_40%_10%)] p-6 sm:p-8">
                <h2 className="mb-6 text-xl font-bold text-white">Send Us a Message</h2>

                {status === 'sent' ? (
                  <div className="flex flex-col items-center py-12 text-center">
                    <CheckCircle2 className="mb-4 h-12 w-12 text-emerald-400" />
                    <p className="text-lg font-medium text-white">Message Ready!</p>
                    <p className="mt-2 text-sm text-slate-400">
                      Your email client should have opened with your message pre-filled.
                      If it didn&apos;t, please email us directly at info@aeroinedutech.in
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3">
                      <span className="text-sm text-slate-300">info@aeroinedutech.in</span>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-white/20 text-slate-200 hover:bg-white/10"
                        onClick={() => {
                          navigator.clipboard?.writeText('info@aeroinedutech.in').then(() => {});
                        }}
                      >
                        <Copy className="mr-1 h-3.5 w-3.5" /> Copy
                      </Button>
                    </div>
                    <Button
                      onClick={() => {
                        setStatus('idle');
                        setName('');
                        setEmail('');
                        setPhone('');
                        setMessage('');
                      }}
                      variant="outline"
                      className="mt-6 border-white/20 text-slate-200 hover:bg-white/10"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-200">Name</Label>
                        <Input
                          id="name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-200">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@example.com"
                          className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-200">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 ..."
                        className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-slate-200">Message</Label>
                      <Textarea
                        id="message"
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your inquiry..."
                        rows={5}
                        className="border-white/10 bg-white/5 text-white placeholder:text-slate-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-blue-600 text-white hover:bg-blue-500 glow-blue"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-slate-500">
                      This form does not store any data. It opens your email client with the message pre-filled.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/5 p-3 transition-colors hover:border-blue-500/30"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/15 text-blue-400">
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-400">{label}</p>
        <p className="text-sm font-medium text-white">{value}</p>
      </div>
    </a>
  );
}
