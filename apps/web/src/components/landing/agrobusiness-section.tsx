'use client';
import { Beef, MapPin, Sprout, UtensilsCrossed, Store } from 'lucide-react';
import { useDictionary } from '@/hooks/use-dictionary';
import { Dictionary } from '@/i18n/dictionaries/fr';
import Image from 'next/image';

const ICONS = [Beef, MapPin, Sprout, UtensilsCrossed, Store];

export function AgrobusinessSection() {
    const { dictionary } = useDictionary<Dictionary>();
    if (!dictionary) return null;

    const services = Object.values(dictionary.agrobusiness.services);

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">

            <div className="text-center mb-32 px-4">

                <h2 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-500 tracking-tight mb-6">
                    {dictionary.agrobusiness.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                    {dictionary.agrobusiness.description}
                </p>

                <div className="w-24 h-1.5 bg-green-500 mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="relative flex justify-center items-center h-[1000px]">

                <div className="relative w-110 h-110 rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10">
                    <Image
                        src="/image/agrobusiness.png"
                        fill
                        className="object-cover"
                        alt="Agrobusiness"
                    />
                </div>

                {services.map((service, i) => {
                    const angle = (i * (360 / 5) - 90) * (Math.PI / 180);
                    const radius = 420;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const Icon = ICONS[i];

                    return (
                        <div
                            key={i}
                            className="absolute transition-all duration-500 hover:scale-105 w-80 text-center"
                            style={{ transform: `translate(${x}px, ${y}px)` }}
                        >
                            <div className="bg-white p-6 rounded-full shadow-lg inline-block mb-6 border border-green-50">
                                <Icon className="w-10 h-10 text-green-600" />
                            </div>
                            <h4 className="text-3xl font-bold text-gray-900 leading-tight">{service.title}</h4>
                            <p className="text-base text-gray-600 mt-3 leading-relaxed px-4">{service.desc}</p>
                        </div>
                    );
                })}

            </div>

        </section>
    );
}