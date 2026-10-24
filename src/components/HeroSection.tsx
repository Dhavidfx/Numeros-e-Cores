import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Download } from 'lucide-react';
import { ProductConfig } from '../config/product';
import { motion } from 'motion/react';

interface HeroSectionProps {
  config: ProductConfig;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ config }) => {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-12 sm:pb-20 border-b border-stone-200/60">
      {/* Fondo suave con textura de papel y luz artística contenida */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-[#FAF9F6] to-stone-100/50 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-72 bg-emerald-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Columna de Texto con fade-in y slide-up */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left"
          >
            
            {/* Metadatos limpios */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-emerald-800">
              <span>Archivo Digital en PDF</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>{config.illustrationCount}</span>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <span>Guía de Colores Completa</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-snug sm:leading-[1.15] text-balance">
              Transforma Ilustraciones en Obras de Arte, <span className="text-emerald-800 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-4">¡Un Color a la Vez!</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Descubre el placer de pintar con ilustraciones numeradas que te guían paso a paso para elegir los colores correctos y crear dibujos increíbles, sin necesidad de experiencia artística previa.
            </p>

            {/* Micro-beneficios con checkmarks sutis y compactos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1 pb-1 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 bg-white/80 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-stone-200/70 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span>Guía de colores número por número</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 bg-white/80 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-stone-200/70 shadow-2xs">
                <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span>Listo para imprimir en hoja A4</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-stone-700 bg-white/80 backdrop-blur-xs p-2 sm:p-2.5 rounded-lg border border-stone-200/70 shadow-2xs">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-700 shrink-0" />
                <span>Acceso inmediato en tu correo</span>
              </div>
            </div>

            {/* Llamada a la Acción Principal */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <a
                href="#oferta"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 text-sm sm:text-base font-bold text-white bg-emerald-800 hover:bg-emerald-900 active:scale-[0.99] rounded-xl shadow-md hover:shadow-lg transition-all group"
              >
                <span>APROVECHAR OFERTA</span>
                <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:translate-x-1 transition-transform" />
              </a>

              <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-stone-600 bg-emerald-50/80 px-2.5 py-1.5 rounded-lg border border-emerald-200/60">
                <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Descarga Inmediata · Compra 100% Segura</span>
              </div>
            </div>

          </motion.div>

          {/* Columna Visual (Mockup del Libro Digital de Alta Definición) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[270px] sm:max-w-sm lg:max-w-md group">
              {/* Sombra suave y atmósfera */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-600/15 to-amber-500/15 rounded-2xl blur-md group-hover:blur-lg transition-all opacity-80" />
              
              <div className="relative bg-white p-2.5 sm:p-3 rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
                <img
                  src={config.images.coverMockup}
                  alt={`Portada oficial del libro digital ${config.productName}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover rounded-xl shadow-xs transform hover:scale-[1.01] transition-transform duration-300"
                  loading="eager"
                />
                
                {/* Rótulo de visualización de formato */}
                <div className="mt-2.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-[11px] sm:text-xs text-stone-500">
                  <span className="font-medium text-stone-700">Edición Digital para Descarga</span>
                  <span>PDF A4 · 300 DPI</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
