import { Dictionary } from '@/i18n/dictionaries/fr';

export function FooterBottom({ footer }: Readonly<{ footer: Dictionary['footer'] }>) {
  return (
    <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-500">
        © {new Date().getFullYear()} IRiKO.MG — Excellence & Durabilité
      </p>
      <div className="flex gap-8 text-[9px] font-black tracking-[0.2em] uppercase text-slate-400">
        {footer.tags.map((tag) => (
          <span key={tag} className="hover:text-green-400 cursor-pointer transition-colors">
            {tag}
          </span>
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      `}</style>
    </div>
  );
}