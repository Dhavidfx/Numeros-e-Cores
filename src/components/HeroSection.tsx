import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Eye } from 'lucide-react';
import { ProductConfig } from '../config/product';
import { motion } from 'motion/react';

interface HeroSectionProps {
  config: ProductConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-10 sm:pt-12 sm:pb-16 border-b border-stone-200/60">
      {/* Fondo suave con textura de papel y halo luminoso */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-[#FAF9F6] to-stone-100/40 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-72 bg-emerald-100/25 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Columna de Texto Limpia y Enfocada */}
          <motion.div 
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left"
          >
            
            {/* Título Principal Limpio */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-snug sm:leading-[1.18] text-balance">
              Transforma Ilustraciones en Obras de Arte, <span className="text-emerald-800">¡Un Color a la Vez!</span>
            </h1>

            {/* Párrafo Descriptivo Breve */}
            <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Descubre el placer de pintar con láminas numeradas y paletas de color integradas al pie de página. Relájate, desconecta del estrés y crea cuadros increíbles en casa sin necesidad de saber dibujar.
            </p>

            {/* Botón Principal con Animación Pulsante Elegante */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#oferta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-extrabold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.98] rounded-xl shadow-md transition-all animate-pulse-emerald group cursor-pointer"
              >
                <span>VER OPCIONES Y OFERTAS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#o-que-recebe"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs sm:text-sm font-bold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 rounded-xl border border-stone-200/90 shadow-2xs transition-all cursor-pointer"
              >
                <Eye className="w-4 h-4 text-emerald-700" />
                <span>Ver Muestras del Libro</span>
              </a>
            </div>

            {/* Micro-garantías discretas */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-500">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Entrega inmediata por correo</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Listo para imprimir en A4</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                <span>Pago 100% Seguro</span>
              </span>
            </div>

          </motion.div>

          {/* Columna Visual: Mockup con Espacio Limpio y Protagónico */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[260px] sm:max-w-sm lg:max-w-md group">
              {/* Sombra ambiental artística */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-emerald-600/20 to-amber-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all opacity-75" />
              
              <div className="relative bg-white p-2.5 sm:p-3 rounded-2xl border border-stone-200/90 shadow-xl overflow-hidden">
                <img
                  src={config.images.coverMockup}
                  alt={`Portada oficial del libro digital ${config.productName}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xl shadow-xs transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="eager"
                  decoding="async"
                />
                
                {/* Rótulo de visualización de formato */}
                <div className="mt-2.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] sm:text-xs text-stone-500">
                  <span className="font-medium text-stone-700">Edición Digital para Descarga</span>
                  <span className="font-mono text-emerald-800 font-bold">PDF A4 · 300 DPI</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
