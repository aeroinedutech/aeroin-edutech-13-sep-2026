'use client';

import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Copy, Check, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EmailLinkProps {
  to: string;
  subject?: string;
  body?: string;
  label: string;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  fullWidth?: boolean;
}

export function EmailLink({
  to,
  subject,
  body,
  label,
  variant = 'default',
  size = 'default',
  className,
  fullWidth,
}: EmailLinkProps) {
  const [copied, setCopied] = useState(false);
  const [trying, setTrying] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setTrying(true);

      const params = new URLSearchParams();
      if (subject) params.set('subject', subject);
      if (body) params.set('body', body);
      const mailto = `mailto:${to}?${params.toString()}`;

      const prevLocation = window.location.href;
      window.location.href = mailto;

      const timeout = setTimeout(() => {
        if (window.location.href === prevLocation || document.hidden) {
          navigator.clipboard
            .writeText(to)
            .then(() => {
              setCopied(true);
              setTrying(false);
              setTimeout(() => setCopied(false), 2500);
            })
            .catch(() => {
              setTrying(false);
            });
        } else {
          setTrying(false);
        }
      }, 1200);

      return () => clearTimeout(timeout);
    },
    [to, subject, body]
  );

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={cn(
        variant === 'default' && 'bg-blue-600 text-white hover:bg-blue-500',
        variant === 'outline' && 'border-white/20 text-white hover:bg-white/10',
        fullWidth && 'w-full',
        className
      )}
    >
      {trying ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Opening...
        </>
      ) : copied ? (
        <>
          <Check className="mr-2 h-4 w-4" /> Email copied!
        </>
      ) : (
        <>
          <Mail className="mr-2 h-4 w-4" /> {label}
        </>
      )}
    </Button>
  );
}

export { Copy };
