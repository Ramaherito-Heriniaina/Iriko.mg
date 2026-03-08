'use client';
import { useState } from 'react';
import { Beef, MapPin, Sprout, UtensilsCrossed, Store } from 'lucide-react';
import { useDictionary } from '@/hooks/use-dictionary';
import { Dictionary } from '@/i18n/dictionaries/fr';
import Image from 'next/image';

const ICONS = [Beef, MapPin, Sprout, UtensilsCrossed, Store];

const SERVICE_IMAGES = [
    "/image/porcine-power.png",
    "/image/tag-discovery.png",
    "/image/local_product.png",
    "/image/transformation.png",
    "/image/meat.png",
];

export function AgrobusinessSection() {
    const { dictionary } = useDictionary<Dictionary>();

    const DEFAULT_IMAGE = "/image/iriko_logo-removebg-preview.png";
    const [activeImage, setActiveImage] = useState(DEFAULT_IMAGE);

    if (!dictionary) return null;

    const services = Object.values(dictionary.agrobusiness.services);

    const isDefault = activeImage === DEFAULT_IMAGE;

    return (
        <section className="py-24 px-6 max-w-7xl mx-auto">

            <div className="text-center mb-32 px-4">
                <h2 className="text-5xl md:text-4xl font-extrabold text-black tracking-tight mb-6">
                    {dictionary.agrobusiness.title}
                </h2>

                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
                    {dictionary.agrobusiness.description}
                </p>

                <div className="w-24 h-1.5 bg-black mx-auto mt-8 rounded-full"></div>
            </div>

            <div className="relative flex justify-center items-center h-[1000px]">

                <div className="relative w-96 h-96 rounded-full overflow-hidden border-[8px] border-white shadow-2xl z-10 bg-white flex justify-center items-center">
                    <Image
                        key={activeImage}
                        src={activeImage}
                        fill
                        className={`transition-all duration-500 animate-in fade-in zoom-in 
                            ${isDefault ? 'object-contain p-16' : 'object-cover p-0'}`}
                        style={{ animation: 'imageTransition 0.6s ease-out' }}
                        alt="Iriko Content"
                    />

                    <style jsx>{`
                        @keyframes imageTransition {
                            from { opacity: 0; transform: scale(0.9) rotate(-3deg); }
                            to { opacity: 1; transform: scale(1) rotate(0deg); }
                        }
                    `}</style>
                </div>

                {services.map((service, i) => {
                    const angle = (i * (360 / 5) - 90) * (Math.PI / 180);
                    const radius = 400;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const Icon = ICONS[i];

                    return (
                        <div
                            key={i}
                            className="absolute transition-all duration-500 hover:scale-110 w-80 text-center group cursor-pointer"
                            style={{ transform: `translate(${x}px, ${y}px)` }}
                            onMouseEnter={() => setActiveImage(SERVICE_IMAGES[i] ?? "")}
                            onMouseLeave={() => setActiveImage(DEFAULT_IMAGE)}
                        >

                            {Icon ? (
                                <Icon className="w-9 h-9 text-gray-800 group-hover:text-green-700 transition-transform group-hover:rotate-12" />
                            ) : (
                                <div className="w-9 h-9" />
                            )}

                            <h4 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors">
                                {service.title}
                            </h4>
                            <p className="text-base text-gray-600 mt-3 leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                {service.desc}
                            </p>
                        </div>
                    );
                })}

            </div>
        </section>
    );
}