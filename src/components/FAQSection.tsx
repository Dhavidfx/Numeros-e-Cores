import React, { useState } from 'react';
import { ProductConfig } from '../config/product';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQSectionProps {
  config: ProductConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ config }) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleQuestion = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenIndexes(config.faq.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndexes([]);
  };

  return (
    <section id="faq" className="py-12 lg:py-20 bg-white border-b border-stone-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado con animación */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-8 sm:mb-12 space-y-2.5 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-800" />
            <span>Resuelve Tus Dudas</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Preguntas Frecuentes
          </h2>

          <p className="text-xs sm:text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Transparencia total sobre el formato del archivo, envío, compatibilidad y utilización del material.
          </p>

          {/* Botones para expandir / contraer todas */}
          <div className="flex items-center justify-center gap-4 pt-1 text-[11px] sm:text-xs text-stone-500 font-medium">
            <button
              onClick={expandAll}
              className="hover:text-emerald-800 underline underline-offset-4 cursor-pointer"
            >
              Expandir todas
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={collapseAll}
              className="hover:text-emerald-800 underline underline-offset-4 cursor-pointer"
            >
              Contraer todas
            </button>
          </div>
        </motion.div>

        {/* Acordeón con las 10 Preguntas */}
        <div className="space-y-2.5 sm:space-y-3">
          {config.faq.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.05 }}
                className="bg-[#FAF9F6] rounded-2xl border border-stone-200/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 font-bold text-stone-900 text-sm sm:text-base hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{item.question}</span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-stone-200/60 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'text-stone-600'
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-stone-600 text-xs sm:text-sm leading-relaxed border-t border-stone-200/50 pt-3">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bloque de Soporte por Instagram */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 sm:mt-12 p-4 sm:p-6 bg-emerald-50 rounded-2xl border border-emerald-200/60 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900">¿Aún tienes alguna pregunta?</h4>
              <p className="text-[11px] sm:text-xs text-stone-600">Nuestro canal exclusivo de soporte es a través de Instagram en el perfil <strong>{config.supportInstagram}</strong>.</p>
            </div>
          </div>
          <a
            href={config.supportInstagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 text-xs font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-100 rounded-lg transition-colors whitespace-nowrap shadow-2xs"
          >
            Escribir por Instagram
          </a>
        </motion.div>

      </div>
    </section>
  );
};
