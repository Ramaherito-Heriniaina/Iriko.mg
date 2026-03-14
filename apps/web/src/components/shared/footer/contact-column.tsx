import { Mail, MapPin, Phone } from 'lucide-react';
import { Dictionary } from '@/i18n/dictionaries/fr';

export function ContactColumn({ footer }: Readonly<{ footer: Dictionary['footer'] }>) {
  return (
    <div className="flex flex-col gap-4 text-slate-300 animate-fade-in [animation-delay:400ms]">
      <div className="flex flex-col gap-3">

        <div className="flex items-start gap-3 group cursor-pointer">
          <MapPin className="w-4 h-4 text-green-600 mt-0.5 group-hover:text-green-400 transition-colors" />
          <p className="text-xs text-slate-400">
            <span className="block text-slate-200 font-semibold">Lot A 17 F, Ambohitrarahaba</span>
            ANTANANARIVO 103
          </p>
        </div>

        <div className="flex items-start gap-3">
          <Phone className="w-4 h-4 text-green-600 mt-0.5" />
          <div className="flex flex-col gap-1">
            <a href="tel:+261349137059" className="text-xs text-slate-400 hover:text-green-400 transition-colors">+261 34 913 7059</a>
            <a href="tel:+26132xxxxxxx" className="text-xs text-slate-400 hover:text-green-400 transition-colors">+261 32 XX XXX XX</a>
          </div>
        </div>
      </div>

      <a href="mailto:irikomg@iriko.org" className="flex items-center gap-4 hover:text-green-400 transition-colors">
        <Mail className="w-5 h-5 text-green-500" />
        <span className="text-xs border-b border-transparent hover:border-green-500 transition-all">irikomg@iriko.org</span>
      </a>
    </div>
  );
}