import React from 'react';
import { Palette, Sparkles } from 'lucide-react';
import { ProductConfig } from '../config/product';

interface TopBarProps {
  config: ProductConfig;
  onOpenSettings?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ config, onOpenSettings }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-stone-900 font-bold tracking-tight text-sm sm:text-base lg:text-lg font-display whitespace-nowrap shrink min-w-0 hover:opacity-90 transition-opacity"
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-800 text-amber-200 flex items-center justify-center shadow-xs shrink-0">
            <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <span className="truncate">{config.brandName}</span>
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#o-que-recebe" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            Muestra del Archivo
          </a>
          <a href="#beneficios" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            Beneficios
          </a>
          <a href="#faq" className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0">
            Preguntas Frecuentes
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          {onOpenSettings && (
            <button
              onClick={onOpenSettings}
              title="Ajustar configuración de precio y enlace"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 text-xs text-stone-500 hover:text-stone-800 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Configurar</span>
            </button>
          )}
          <a
            href="#oferta"
            className="inline-flex items-center justify-center px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0"
          >
            Aprovechar Oferta
          </a>
        </div>
      </div>
    </header>
  );
};
