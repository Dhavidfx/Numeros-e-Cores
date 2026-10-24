import React from 'react';
import { Heart, Sparkles, Clock, Palette, UserCheck, ArrowRight } from 'lucide-react';
import { ProductConfig } from '../config/product';
import { motion } from 'motion/react';

interface AudienceSectionProps {
  config: ProductConfig;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ config }) => {
  const audiencePoints = [
    {
      icon: Heart,
      title: "Amas dibujar y colorear",
      desc: "Para quienes disfrutan ver cómo los colores cobran vida en el papel y desean nuevas ilustraciones de alta calidad.",
    },
    {
      icon: Sparkles,
      title: "No quieres empezar de cero",
      desc: "Para crear arte sin la frustración de calcular proporciones, perspectivas complejas o bocetos iniciales.",
    },
    {
      icon: Clock,
      title: "Buscas pausas tranquilas",
      desc: "Para llenar ratos libres, pausas del día o fines de semana de forma serena, ligera y sin estrés.",
    },
    {
      icon: Palette,
      title: "Quieres probar el método",
      desc: "Para quienes tienen curiosidad de experimentar el coloreado por números y ver cómo funcionan las paletas cromáticas.",
    },
    {
      icon: UserCheck,
      title: "Cualquier nivel de experiencia",
      desc: "Desde quien nunca ha tomado un lápiz de color hasta el entusiasta que desea practicar degradados y sombras.",
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-[#FAF9F6] border-b border-stone-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado con animación */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800">
            Identificación
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Este Material Es Para Ti Si...
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Si te identificas con uno o más de estos deseos, este libro digital fue creado especialmente para ti.
          </p>
        </motion.div>

        {/* Cuadrícula de 5 puntos con tarjeta destacada */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {audiencePoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
                className="bg-white p-4.5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-emerald-700/40 hover:shadow-xs transition-all"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}

          {/* Tarjeta de Llamada Directa en el Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="bg-emerald-800 text-white p-4.5 sm:p-6 rounded-2xl shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300">
                Solo {config.currencySymbol} {config.promoPrice.toFixed(2)}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mt-1 mb-1.5 sm:mb-2">
                Comienza a colorear hoy mismo
              </h3>
              <p className="text-xs text-stone-200 leading-relaxed">
                Aprovecha el acceso de por vida a las {config.illustrationCount} en PDF con entrega inmediata.
              </p>
            </div>
            <a
              href="#oferta"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors"
            >
              <span>Aprovechar Oferta Especial</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
