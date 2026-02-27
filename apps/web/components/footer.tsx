import React from "react";
import { Phone, Mail, MapPin, Leaf } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 mt-20">
      <div className="container mx-auto px-6 py-8">
        
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-lg font-bold">
            <Leaf className="text-green-400" size={20} />
            <span>IRIKO.MG</span>
          </div>

          {/* Contact rapide */}
          <div className="flex flex-col md:flex-row gap-4 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-green-400" />
              <span>Antananarivo, Madagascar</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-green-400" />
              <span>+261 34 913 7059 / </span>
              <span>+261 34 385 8543</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-green-400" />
              <a
                href="mailto:irikomg@iriko.org"
                className="hover:text-white transition"
              >
                irikomg@iriko.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-800 mt-6 pt-4 text-center text-xs text-green-400">
          © {new Date().getFullYear()} IRiKO.MG — Développement durable & écotourisme responsable
        </div>
      </div>
    </footer>
  );
}