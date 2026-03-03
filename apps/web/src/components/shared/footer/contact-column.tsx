import { ReactNode } from 'react';

import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';

import { Dictionary } from '@/i18n/dictionaries/fr';

interface ContactColumnProps {
  footer: Dictionary['footer'];
}

const CONTACT_INFO = {
  phones: [
    { display: '+261 34 913 7059', href: 'tel:+261349137059' },
    { display: '+261 34 385 8543', href: 'tel:+261343858543' },
  ],
  email: {
    display: 'irikomg@iriko.org',
    href: 'mailto:irikomg@iriko.org',
  },
} as const;

const hoverHandlers = {
  onMouseEnter: (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.background = 'var(--footer-hover-bg)'),
  onMouseLeave: (e: React.MouseEvent<HTMLElement>) => (e.currentTarget.style.background = 'transparent'),
};

const contactRowClass =
  'group flex items-center gap-4 rounded-xl border border-transparent p-3 transition-all duration-500';

interface IconBadgeProps {
  children: ReactNode;
}

interface ContactRowProps {
  icon: ReactNode;
  children: ReactNode;
}

function IconBadge({ children }: Readonly<IconBadgeProps>) {
  return (
    <div
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border"
      style={{
        background: 'var(--footer-icon-bg)',
        borderColor: 'var(--footer-icon-border)',
      }}
    >
      {children}
    </div>
  );
}

function ContactRow({ icon, children }: Readonly<ContactRowProps>) {
  return (
    <div className={contactRowClass} {...hoverHandlers}>
      <IconBadge>{icon}</IconBadge>
      {children}
    </div>
  );
}

export function ContactColumn({ footer }: Readonly<ContactColumnProps>) {
  const iconColor = { color: 'var(--footer-icon-color)' };
  const contactTextColor = { color: 'var(--footer-contact-text)' };

  return (
    <div className="order-3 flex flex-col items-center gap-4 lg:items-end">
      <div className="w-full max-w-70 space-y-3">
        <ContactRow icon={<MapPin size={16} style={iconColor} />}>
          <address className="text-[12px] leading-tight tracking-wide not-italic" style={contactTextColor}>
            {footer.address.street}
            <br />
            <span className="mt-0.5 block text-[9px] font-bold tracking-widest uppercase" style={iconColor}>
              {footer.address.city}
            </span>
          </address>
        </ContactRow>
        <ContactRow icon={<Phone size={16} style={iconColor} />}>
          <div className="flex flex-col text-[12px] font-semibold" style={contactTextColor}>
            {CONTACT_INFO.phones.map(({ display, href }) => (
              <a key={href} href={href} className="transition-colors hover:text-(--footer-icon-color)">
                {display}
              </a>
            ))}
          </div>
        </ContactRow>
        <a href={CONTACT_INFO.email.href} className={contactRowClass} {...hoverHandlers}>
          <IconBadge>
            <Mail size={16} style={iconColor} />
          </IconBadge>
          <div className="flex items-center gap-2">
            <span
              className="border-b text-[12px] font-semibold transition-all"
              style={{ borderColor: 'var(--footer-border)', ...contactTextColor }}
            >
              {CONTACT_INFO.email.display}
            </span>
            <ArrowUpRight size={12} className="opacity-0 transition-all group-hover:opacity-100" style={iconColor} />
          </div>
        </a>
      </div>
    </div>
  );
}
