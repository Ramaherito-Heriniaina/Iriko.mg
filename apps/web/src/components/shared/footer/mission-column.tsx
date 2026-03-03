import { Dictionary } from '@/i18n/dictionaries/fr';

function Divider() {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div
        className="h-px w-6"
        style={{ background: 'linear-gradient(to right, transparent, var(--footer-divider))' }}
      />
      <div className="h-1.5 w-1.5 rounded-full border" style={{ borderColor: 'var(--footer-divider)' }} />
      <div
        className="h-px w-6"
        style={{ background: 'linear-gradient(to left, transparent, var(--footer-divider))' }}
      />
    </div>
  );
}

interface MissionColumnProps {
  footer: Dictionary['footer'];
}

export function MissionColumn({ footer }: Readonly<MissionColumnProps>) {
  return (
    <div className="order-2 flex flex-col items-center">
      <Divider />
      <p
        className="max-w-sm text-center text-sm leading-relaxed font-light tracking-wide italic md:text-base"
        style={{ color: 'var(--footer-body)' }}
      >
        {footer.mission}
      </p>
      <Divider />
    </div>
  );
}
