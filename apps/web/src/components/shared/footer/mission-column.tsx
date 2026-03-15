import { Dictionary } from '@/i18n/dictionaries/fr';

export function MissionColumn({ footer }: Readonly<{ footer: Dictionary['footer'] }>) {
  return (
    <div className="flex flex-col items-center justify-center px-4 animate-fade-in [animation-delay:200ms]">
      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent mb-6" />
      <p className="max-w-md text-center text-sm md:text-base leading-relaxed text-slate-300 font-light italic">
        {footer.mission}
      </p>
      <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-green-500 to-transparent mt-6" />
    </div>
  );
}