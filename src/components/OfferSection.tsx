import React, { useState, useEffect } from 'react';
import { ProductConfig } from '../config/product';
import { 
  Check, 
  Clock, 
  Lock, 
  Zap, 
  CreditCard, 
  ArrowRight,
  Sparkles,
  Download
} from 'lucide-react';
import { motion } from 'motion/react';

interface OfferSectionProps {
  config: ProductConfig;
}

export const OfferSection: React.FC<OfferSectionProps> = ({ config }) => {
  // Estado del temporizador en segundos con persistencia en localStorage
  const [secondsLeft, setSecondsLeft] = useState<number>(() => {
    try {
      const STORAGE_KEY = 'coloring_book_offer_expiry_v2';
      const storedExpiry = localStorage.getItem(STORAGE_KEY);
      const now = Date.now();

      if (storedExpiry) {
        const expiryTime = parseInt(storedExpiry, 10);
        const remaining = Math.max(0, Math.floor((expiryTime - now) / 1000));
        return remaining;
      } else {
        const expiryTime = now + config.countdownMinutes * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, expiryTime.toString());
        return config.countdownMinutes * 60;
      }
    } catch {
      return config.countdownMinutes * 60;
    }
  });

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  // Formato de minutos y segundos
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isExpired = secondsLeft === 0;

  // Cálculo de ahorro
  const savings = config.originalPrice > config.promoPrice 
    ? (config.originalPrice - config.promoPrice).toFixed(2)
    : null;
  const discountPercent = config.originalPrice > config.promoPrice 
    ? Math.round(((config.originalPrice - config.promoPrice) / config.originalPrice) * 100)
    : null;

  return (
    <section id="oferta" className="py-12 lg:py-20 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Luz ambiental */}
      <div className="absolute top-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-3.5 sm:px-6 relative z-10">
        
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
            ¡Asegura Tu Acceso al Libro Digital!
          </h2>

          <p className="text-xs sm:text-base text-stone-300 leading-relaxed max-w-xl mx-auto">
            Comienza a transformar tus ilustraciones en dibujos coloridos y aprovecha hoy mismo la experiencia de colorear por números.
          </p>
        </motion.div>

        {/* Tarjeta Principal de la Oferta */}
        <motion.div 
          initial={{ opacity: 0, y: 24, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="bg-stone-800/95 backdrop-blur-md rounded-2xl sm:rounded-3xl border border-stone-700/80 shadow-2xl overflow-hidden"
        >
          
          {/* Barra del Contador */}
          <div className="bg-gradient-to-r from-emerald-950 via-stone-800 to-amber-950/60 p-3 sm:p-4 border-b border-stone-700 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin-slow" />
              </div>
              <div>
                <p className="text-[11px] sm:text-xs uppercase tracking-wider text-amber-400 font-bold leading-tight">
                  {isExpired ? "Plazo Especial Prorrogado" : "Precio Promocional por Tiempo Limitado"}
                </p>
                <p className="text-[10px] sm:text-xs text-stone-300">
                  {isExpired 
                    ? "Últimos accesos disponibles con valor de lanzamiento." 
                    : "Aprovecha esta condición antes de que expire el contador:"}
                </p>
              </div>
            </div>

            {/* Display del Contador */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-xs text-stone-400 uppercase tracking-widest font-mono">Quedan</span>
              <div className="bg-stone-900 border border-amber-500/40 px-3 py-1 rounded-lg font-mono text-lg sm:text-2xl font-extrabold text-amber-400 tabular-nums shadow-inner">
                {formattedTime}
              </div>
            </div>
          </div>

          {/* Contenido en 2 Columnas */}
          <div className="p-4 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Columna Izquierda: Portada & Elementos Incluidos */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <div className="flex items-center gap-3.5 sm:gap-5 pb-4 sm:pb-6 border-b border-stone-700/80">
                <img
                  src={config.images.coverMockup}
                  alt={config.productName}
                  referrerPolicy="no-referrer"
                  className="w-16 sm:w-24 h-auto object-cover rounded-lg shadow-md border border-stone-600 shrink-0"
                />
                <div className="text-left">
                  <h3 className="text-base sm:text-xl font-bold text-white mb-0.5 sm:mb-1">
                    {config.productName}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-400">
                    {config.illustrationCount} · {config.fileFormat}
                  </p>
                  <p className="text-[11px] sm:text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1">
                    <Download className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                    <span>Descarga instantánea + Acceso de por vida</span>
                  </p>
                </div>
              </div>

              {/* Lista de lo que incluye */}
              <div className="space-y-2 sm:space-y-3">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-stone-400">
                  Lo que incluye tu compra:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>50 Ilustraciones Numeradas</strong> de fauna marina, corales y criaturas oceánicas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Paletas de Colores</strong> con numeración correspondiente para cada dibujo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Archivo PDF en 300 DPI</strong> listo para imprimir en hojas A4 estándar o de arte.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Guía de Combinaciones de Colores</strong> y armonías cromáticas incluidas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Soporte Directo por Instagram</strong> en nuestra cuenta oficial @numericpaint.</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Columna Derecha: Precio y Botón de Pago */}
            <div className="lg:col-span-5 bg-stone-900/90 p-5 sm:p-7 rounded-2xl border border-stone-700/80 text-center flex flex-col justify-between space-y-4 sm:space-y-6">
              
              <div className="space-y-1 sm:space-y-2">
                {config.originalPrice > config.promoPrice && (
                  <div className="text-xs sm:text-sm text-stone-400 line-through">
                    Antes {config.currencySymbol} {config.originalPrice.toFixed(2)}
                  </div>
                )}
                
                <div className="text-[11px] sm:text-xs uppercase tracking-wider text-emerald-400 font-bold">
                  Por solo un pago único de:
                </div>

                <div className="flex items-baseline justify-center gap-1 text-white">
                  <span className="text-xl sm:text-2xl font-bold">{config.currencySymbol}</span>
                  <span className="text-4xl sm:text-6xl font-extrabold tracking-tight tabular-nums text-white">
                    {config.promoPrice.toFixed(2)}
                  </span>
                </div>

                {savings && discountPercent && (
                  <div className="inline-block bg-emerald-950 border border-emerald-500/40 text-emerald-300 text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    Ahorras {config.currencySymbol} {savings} ({discountPercent}% OFF)
                  </div>
                )}
              </div>

              {/* Botón de Checkout Real */}
              <div className="space-y-2.5">
                <a
                  href={config.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 h-12 sm:h-13 px-4 py-2.5 sm:px-6 text-sm sm:text-base font-extrabold text-stone-950 bg-amber-400 hover:bg-amber-300 active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>APROVECHAR OFERTA</span>
                  <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>Pago 100% Criptografiado & Seguro</span>
                </div>
              </div>

              {/* Sellos de Métodos de Pago y Entrega */}
              <div className="pt-3 border-t border-stone-800 space-y-2 text-[10px] sm:text-[11px] text-stone-300">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <span className="flex items-center gap-1"><CreditCard className="w-3 h-3 text-emerald-400" /> Tarjeta de Crédito / Débito</span>
                  <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-amber-400" /> Pago Seguro en Línea</span>
                </div>
                <div className="p-2 bg-emerald-950/60 rounded-lg border border-emerald-500/30 text-emerald-300 flex items-center justify-center gap-1.5 text-xs font-semibold">
                  <Download className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>Acceso Inmediato: Descarga tus archivos directamente en tu correo</span>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
