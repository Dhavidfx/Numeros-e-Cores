import React from 'react';
import { ProductConfig } from '../config/product';
import { LegalModalType } from './LegalModal';
import { Instagram, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  config: ProductConfig;
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 text-stone-400 py-10 sm:py-16 border-t border-stone-800 text-xs leading-relaxed">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Bloque Superior: Marca y Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          <div className="md:col-span-5 space-y-3">
            <span className="text-stone-100 font-bold text-lg font-display tracking-tight">
              {config.brandName}
            </span>
            <p className="text-stone-400 max-w-sm">
              {config.brandSlogan}. Contenido digital desarrollado con atención a los detalles para brindar pausas conscientes y momentos creativos.
            </p>
            <div className="flex items-center gap-2 text-stone-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Entorno digital seguro para compra y descarga directa</span>
            </div>
          </div>

          {/* Enlaces Legales */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
              Información Legal
            </span>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('terms')}
                  className="hover:text-stone-200 hover:underline transition-colors cursor-pointer text-left"
                >
                  Términos de Uso de la Licencia Digital
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-stone-200 hover:underline transition-colors cursor-pointer text-left"
                >
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('refund')}
                  className="hover:text-stone-200 hover:underline transition-colors cursor-pointer text-left"
                >
                  Política de Entrega y Soporte Digital
                </button>
              </li>
            </ul>
          </div>

          {/* Atención & Soporte */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-stone-200 font-semibold uppercase tracking-wider text-[11px]">
              Canal de Atención
            </span>
            <p className="text-stone-400">
              ¿Necesitas ayuda con la descarga, visualización de los archivos o dudas generales? Contáctanos directamente por nuestro canal oficial:
            </p>
            <div className="pt-1">
              <a 
                href={config.supportInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 bg-stone-900 hover:bg-stone-850 border border-stone-800 rounded-xl text-stone-200 hover:text-white transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                    Instagram: {config.supportInstagram}
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Envíanos un mensaje directo (DM)
                  </span>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Línea Divisoria */}
        <div className="border-t border-stone-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px] text-center sm:text-left">
          <div>
            © {currentYear} {config.brandName}. Todos los derechos reservados. Material digital protegido por derechos de propiedad intelectual.
          </div>
          <div className="flex items-center gap-1 text-stone-500">
            <span>Creado con dedicación para quienes aprecian el arte</span>
            <Heart className="w-3.5 h-3.5 text-amber-500" />
          </div>
        </div>

      </div>
    </footer>
  );
};
