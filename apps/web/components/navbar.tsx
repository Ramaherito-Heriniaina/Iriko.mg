"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf } from "lucide-react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Formation & Animation", href: "/services" },
  { label: "Agrobusiness & Agrotourisme", href: "/agrobusiness" },
  { label: "RSE Iriko", href: "/rse" },
  { label: "LEMA", href: "/lema" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6 animate-fadeInDown">
      <div className="mx-auto max-w-7xl">
        <div
          className="
            flex items-center justify-between
            bg-green-900/85 backdrop-blur-lg
            border border-green-800/60
            rounded-2xl shadow-xl shadow-black/10
            py-3.5 px-6 md:px-8
          "
        >
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="
                bg-green-700/80 p-2.5 rounded-xl
                transition-all duration-300
                group-hover:bg-green-600 group-hover:rotate-6 group-hover:scale-105
              "
            >
              <Leaf className="text-green-200" size={24} strokeWidth={2.2} />
            </div>
            <span
              className="
                text-2xl font-black tracking-tight
                text-green-100 group-hover:text-white
                transition-colors duration-300
              "
            >
              IRIKO
            </span>
          </Link>

          {/* MENU */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={`
                      text-base font-semibold tracking-wide
                      transition-all duration-300
                      ${
                        isActive
                          ? "text-white"
                          : "text-green-200 hover:text-green-50"
                      }
                    `}
                  >
                    {item.label}
                  </Link>

                  <span
                    className=
                              {`
                                absolute -bottom-1.5 left-0 h-[2.5px] bg-green-400 rounded-full
                                transition-all duration-400 ease-out
                                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                              `}
                  />
                </li>
                
              );
            })}
          </ul>

       
          <div className="lg:hidden">
            <span className="text-green-200 text-sm">Menu</span>
          </div>

          
          <div className="hidden lg:block">
            <Link
              href="/devis"
              className="
                bg-green-600 hover:bg-green-500
                text-white text-sm font-semibold
                px-6 py-2.5 rounded-xl
                transition-all duration-300
                hover:shadow-lg hover:shadow-green-700/30
                hover:-translate-y-0.5
                active:scale-95
              "
            >
              Demander un devis
            </Link>
          </div>


        </div>
      </div>
    </nav>
  );
}