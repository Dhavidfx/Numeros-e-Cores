import React from 'react';
import { Compass, Smile, Coffee, Award, Smartphone, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Compass,
      title: "Fácil de Empezar",
      description: "La numeración clara indica exactamente qué colores aplicar en cada sector, eliminando la indecisión y facilitando los primeros trazos.",
    },
    {
      icon: Smile,
      title: "No Necesitas Ser Artista",
      description: "No requieres dominar anatomía, perspectiva ni bocetos. El método guiado hace que el arte sea accesible para cualquier persona.",
    },
    {
      icon: Coffee,
      title: "Momento de Desconexión",
      description: "Una pausa reparadora lejos de las pantallas y notificaciones. Dedica unos minutos de tu día a una actividad creativa, tranquila y manual.",
    },
    {
      icon: Award,
      title: "Satisfacción al Terminar",
      description: "Siente la alegría de ver cómo una página en blanco y negro cobra vida y profundidad hasta convertirse en una lámina digna de enmarcar.",
    },
    {
      icon: Smartphone,
      title: "Práctica Digital Cómoda",
      description: "El archivo PDF siempre estará contigo. Guárdalo en tu teléfono, computadora o tablet e imprime copias nuevas cada vez que quieras practicar.",
    },
    {
      icon: Sparkles,
      title: "Creatividad en tu Rutina",
      description: "Transforma tus ratos libres y fines de semana en momentos de expresión artística y serenidad desde la comodidad de tu hogar.",
    },
  ];

  return (
    <section id="beneficios" className="py-12 lg:py-20 bg-[#FAF9F6] border-b border-stone-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado con animación */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800">
            Beneficios Reales
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Más Que Colorear: ¡Un Momento Para Ti!
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Una experiencia artística accesible, relajante y gratificante, diseñada para calmar la mente y despertar el placer de crear con tus propias manos.
          </p>
        </motion.div>

        {/* Cuadrícula de 6 Beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: (index % 3) * 0.08 }}
                className="bg-white p-4.5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-emerald-700/50 hover:shadow-xs transition-all flex flex-col justify-start"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-100 flex items-center justify-center mb-3 sm:mb-4 shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1.5 sm:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
