import { Dictionary } from '@/i18n/dictionaries/fr';

interface FooterBottomProps {
  footer: Dictionary['footer'];
}

export function FooterBottom({ footer }: Readonly<FooterBottomProps>) {
  const fullYear = new Date().getFullYear();

  return (
    <div
      className="mt-12 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row"
      style={{ borderColor: 'var(--footer-border)' }}
    >
      <p className="text-[9px] font-bold tracking-[0.3em] uppercase" style={{ color: 'var(--footer-tagline)' }}>
        © {fullYear} IRiKO.MG — Excellence & Durabilité
      </p>
      <div
        className="flex gap-6 text-[9px] font-black tracking-[0.2em] uppercase"
        style={{ color: 'var(--footer-tagline)' }}
      >
        {footer.tags.map((tag) => (
          <span key={tag} className="cursor-pointer transition-colors hover:text-(--footer-icon-color)">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
