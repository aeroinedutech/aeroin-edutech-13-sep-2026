'use client';

import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/lib/enquiry';
import { EmailLink } from '@/components/site/email-link';
import { cn } from '@/lib/utils';

interface EnquiryButtonsProps {
  itemName: string;
  emailSubject?: string;
  emailBody?: string;
  whatsappMessage?: string;
  className?: string;
  align?: 'row' | 'col';
}

export function EnquiryButtons({
  itemName,
  emailSubject,
  emailBody,
  whatsappMessage,
  className,
  align = 'row',
}: EnquiryButtonsProps) {
  const waMsg =
    whatsappMessage ||
    `Hello Aeroin EduTech, I am interested in the ${itemName}. I would like to know more about the schedule, fees, and registration process.`;

  const subj = emailSubject || `Enquiry – ${itemName}`;
  const body =
    emailBody ||
    `Hello Aeroin EduTech Team,\n\nI am interested in the ${itemName}.\n\nI would like to know more about the schedule, duration, fees, eligibility, and registration process.\n\nThank you.`;

  return (
    <div className={cn('flex gap-3', align === 'row' ? 'flex-row' : 'flex-col', className)}>
      <Button asChild size="sm" className="bg-emerald-600 text-white hover:bg-emerald-500">
        <a href={whatsappLink(waMsg)} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 h-4 w-4" /> Enquire on WhatsApp
        </a>
      </Button>
      <EmailLink
        to="info@aeroinedutech.in"
        subject={subj}
        body={body}
        label="Enquire via Email"
        variant="outline"
        size="sm"
      />
    </div>
  );
}
