import React from 'react';
import { ProductConfig } from '../config/product';
import { 
  Check, 
  Lock, 
  Zap, 
  CreditCard, 
  ArrowRight,
  Sparkles,
  Download,
  Flame,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

interface OfferSectionProps {
  config: ProductConfig;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ config }) => {
  // Cálculos para la Edición Esencial (50 imágenes)
  const essentialSavings = config.originalPrice > config.promoPrice 
    ? (config.originalPrice - config.promoPrice).toFixed(2)
    : null;
  const essentialDiscount = config.originalPrice > config.promoPrice 
    ? Math.round(((config.originalPrice - config.promoPrice) / config.originalPrice) * 100)
    : null;

  // Cálculos para la Edición Completa / Upsell (80 imágenes)
  const upsell = config.upsell;
  const upsellSavings = upsell.originalPrice > upsell.promoPrice
    ? (upsell.originalPrice - upsell.promoPrice).toFixed(2)
    : null;
  const upsellDiscount = upsell.originalPrice > upsell.promoPrice
    ? Math.round(((upsell.originalPrice - upsell.promoPrice) / upsell.originalPrice) * 100)
    : null;

  return (
    <section id="oferta" className="py-12 lg:py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Luz ambiental */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3.5 sm:px-6 relative z-10">
        
        {/* Encabezado de la Oferta */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Condición Promocional Exclusiva</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
            Elige Tu Versión y Comienza Hoy
          </h2>

          <p className="text-xs sm:text-base text-stone-300 leading-relaxed max-w-xl mx-auto">
            Descarga inmediata en tu correo de los archivos digitales en formato PDF de 300 DPI listos para imprimir y disfrutar.
          </p>
        </motion.div>

        {/* =========================================================================
            COMPARATIVA DE OFERTAS: EDICIÓN ESENCIAL vs EDICIÓN COMPLETA (UPSELL)
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* =====================================================================
              CARD 1: EDICIÓN ESENCIAL (+50 ILUSTRACIONES)
              ===================================================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 bg-stone-850/90 backdrop-blur-md rounded-3xl border border-stone-700/80 p-5 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div>
              {/* Badge del plan */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-stone-800 text-stone-300 rounded-full border border-stone-700">
                  Edición Esencial
                </span>
                <span className="text-xs text-stone-400 font-mono">50 Láminas</span>
              </div>

              {/* Portada & Título */}
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-stone-700/60">
                <img
                  src={config.images.coverMockup}
                  alt={config.productName}
                  referrerPolicy="no-referrer"
                  className="w-16 sm:w-20 h-auto object-cover rounded-xl shadow-md border border-stone-600 shrink-0"
                />
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                    {config.productName}
                  </h3>
                  <p className="text-xs text-stone-400 mt-1">
                    Fauna Marina · PDF Digital 300 DPI
                  </p>
                </div>
              </div>

              {/* Precio */}
              <div className="mb-6 p-4 bg-stone-900/80 rounded-2xl border border-stone-750 text-center">
                {config.originalPrice > config.promoPrice && (
                  <div className="text-xs text-stone-400 line-through mb-0.5">
                    Antes {config.currencySymbol} {config.originalPrice.toFixed(2)}
                  </div>
                )}
                <div className="flex items-baseline justify-center gap-1 text-white">
                  <span className="text-lg sm:text-xl font-bold">{config.currencySymbol}</span>
                  <span className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums text-white">
                    {config.promoPrice.toFixed(2)}
                  </span>
                </div>
                {essentialSavings && essentialDiscount && (
                  <div className="mt-1.5 inline-block bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                    Ahorras {config.currencySymbol} {essentialSavings} ({essentialDiscount}% OFF)
                  </div>
                )}
              </div>

              {/* Lo que incluye */}
              <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-stone-200">
                <div className="text-[11px] font-bold uppercase tracking-wider text-stone-400 mb-2">
                  Incluido en esta versión:
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>50 Ilustraciones Numeradas</strong> de animales marinos (nutrias, peces, cangrejos, estrellas).</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Paletas de Colores Oficiales</strong> al pie de cada dibujo numerado.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Archivo PDF en 300 DPI</strong> listo para imprimir en hojas A4 estándar o de arte.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Guía de Combinaciones y Armonías</strong> cromáticas básicas.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Acceso de por vida</strong> + Soporte por Instagram @numericpaint.</span>
                </div>
              </div>
            </div>

            {/* Botón CTA Esencial */}
            <div className="pt-2">
              <a
                href={config.checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-12 px-4 py-2.5 text-sm font-bold text-white bg-stone-700 hover:bg-stone-600 active:scale-[0.98] rounded-xl shadow-md transition-all cursor-pointer group"
              >
                <span>APROVECHAR ESENCIAL (${config.promoPrice.toFixed(2)})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="text-[10px] text-center text-stone-400 mt-2">
                Descarga inmediata · Pago único seguro
              </p>
            </div>
          </motion.div>

          {/* =====================================================================
              CARD 2: EDICIÓN COMPLETA (+80 ILUSTRACIONES - UPSELL RECOMENDADO)
              ===================================================================== */}
          <motion.div 
            initial={{ opacity: 0, y: 24, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-7 bg-gradient-to-b from-stone-800 to-stone-850 backdrop-blur-md rounded-3xl border-2 border-amber-400/80 p-5 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden ring-4 ring-amber-400/10"
          >
            {/* Cinta Superior de Upsell / Más Popular */}
            <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 to-amber-400 text-stone-950 font-extrabold text-[11px] sm:text-xs uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-md flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-stone-950 fill-stone-950" />
              <span>{upsell.badge}</span>
            </div>

            <div>
              {/* Badge del plan */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full border border-amber-400/40 flex items-center gap-1">
                  <Star className="w-3 h-3 fill-amber-300" />
                  <span>Colección Completa y Definitiva</span>
                </span>
              </div>

              {/* Portada & Título */}
              <div className="flex items-center gap-4 sm:gap-5 mb-5 pb-5 border-b border-stone-700/80">
                <div className="relative shrink-0">
                  <img
                    src={upsell.coverImage}
                    alt={upsell.name}
                    referrerPolicy="no-referrer"
                    className="w-20 sm:w-28 h-auto object-cover rounded-xl shadow-lg border-2 border-amber-400/60"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-amber-400 text-stone-950 text-[10px] font-black px-1.5 py-0.5 rounded-md shadow-xs">
                    +80 LÁMINAS
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                    {upsell.name || "+80 Imágenes para Colorear — Animales y Paisajes Marinos"}
                  </h3>
                  <p className="text-xs sm:text-sm text-amber-300 font-medium mt-1">
                    {upsell.tagline}
                  </p>
                </div>
              </div>

              {/* Cuadro de Precio Destacado */}
              <div className="mb-6 p-4 sm:p-5 bg-gradient-to-r from-stone-900 via-emerald-950/60 to-stone-900 rounded-2xl border border-amber-400/40 text-center relative">
                <div className="text-[11px] uppercase tracking-wider text-amber-300 font-bold mb-1">
                  Oferta Especial — Por solo:
                </div>
                {upsell.originalPrice > upsell.promoPrice && (
                  <div className="text-xs sm:text-sm text-stone-400 line-through">
                    Antes {upsell.currencySymbol} {upsell.originalPrice.toFixed(2)}
                  </div>
                )}
                <div className="flex items-baseline justify-center gap-1 text-white my-1">
                  <span className="text-2xl sm:text-3xl font-bold text-amber-300">{upsell.currencySymbol}</span>
                  <span className="text-5xl sm:text-6xl font-extrabold tracking-tight tabular-nums text-white">
                    {upsell.promoPrice.toFixed(2)}
                  </span>
                </div>
                {upsellSavings && upsellDiscount && (
                  <div className="inline-block bg-amber-400 text-stone-950 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                    ¡Ahorras {upsell.currencySymbol} {upsellSavings} ({upsellDiscount}% OFF)!
                  </div>
                )}
              </div>

              {/* Lista de lo que incluye la Edición Completa */}
              <div className="space-y-2.5 mb-6 text-xs sm:text-sm text-stone-100">
                <div className="text-[11px] font-bold uppercase tracking-wider text-amber-300 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Todo lo que incluye el PDF completo:</span>
                </div>
                {upsell.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/40">
                      <Check className="w-3 h-3 text-amber-300 font-bold" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón CTA Destacado Upsell */}
            <div className="pt-2">
              <a
                href={upsell.checkoutUrl || "https://pay.hotmart.com/R108183160I?checkoutMode=10"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-14 px-6 text-base sm:text-lg font-black text-stone-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 active:scale-[0.98] rounded-2xl shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
              >
                <span>LLEVAR EDICIÓN COMPLETA (${upsell.promoPrice.toFixed(2)})</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <div className="flex items-center justify-center gap-3 text-[11px] text-stone-300 mt-2.5">
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <Download className="w-3.5 h-3.5" /> Descarga Instantánea
                </span>
                <span>·</span>
                <span className="flex items-center gap-1 text-amber-300 font-medium">
                  <Star className="w-3.5 h-3.5 fill-amber-300" /> Elección de más del 85% de los clientes
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Sellos de Seguridad & Métodos de Pago */}
        <div className="mt-10 pt-6 border-t border-stone-800 text-center space-y-3">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-stone-300">
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Pago 100% Criptografiado & Seguro</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>Tarjetas de Crédito / Débito y Medios Locales</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Aprobación y Entrega Inmediata por Correo</span>
            </span>
          </div>

          <div className="text-[11px] text-stone-400">
            ¿Dudas sobre tu compra o necesitas ayuda con la descarga? Escríbenos directamente en Instagram a <a href={config.supportInstagramUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-bold">{config.supportInstagram}</a>
          </div>
        </div>

      </div>
    </section>
  );
};
