import React, { useState, useRef, useEffect } from 'react';
import { 
  Layers, 
  FileText, 
  CheckCircle, 
  Palette, 
  Printer, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  X, 
  ArrowLeftRight,
  Eye,
  SlidersHorizontal
} from 'lucide-react';
import { ProductConfig } from '../config/product';
import { BOOK_SAMPLES, BookSampleItem } from '../config/bookSamples';
import { motion, AnimatePresence } from 'motion/react';

interface WhatYouGetSectionProps {
  config: ProductConfig;
}

export const WhatYouGetSection: React.FC<WhatYouGetSectionProps> = ({ config }) => {
  const [filter, setFilter] = useState<'all' | 'mold' | 'finished' | 'landscape'>('all');
  const [selectedSample, setSelectedSample] = useState<BookSampleItem | null>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState<boolean>(true);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const moldCount = BOOK_SAMPLES.filter(s => s.type === 'mold').length;
  const finishedCount = BOOK_SAMPLES.filter(s => s.type === 'finished').length;
  const landscapeCount = BOOK_SAMPLES.filter(s => s.category === 'landscape').length;

  const filteredSamples = BOOK_SAMPLES.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'landscape') return item.category === 'landscape';
    return item.type === filter;
  });

  // Auto-scroll continuo suave que se pausa al interactuar
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: 320, behavior: 'smooth' });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoScrolling, filteredSamples.length]);

  const handleScroll = (direction: 'left' | 'right') => {
    setIsAutoScrolling(false);
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = direction === 'left' ? -320 : 320;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const findPartnerSample = (item: BookSampleItem) => {
    return BOOK_SAMPLES.find(s => s.pairId === item.pairId && s.id !== item.id);
  };

  return (
    <section id="o-que-recebe" className="py-12 lg:py-20 bg-white border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado de la Sección */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4"
        >
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800">
            Contenido Detallado
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            ¡Mira Todo lo Que Te Espera!
          </h2>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Al adquirir el material, recibes acceso inmediato a un catálogo digital completo y organizado, diseñado para guiar cada trazo con facilidad y disfrute.
          </p>
        </motion.div>

        {/* Cuadrícula de 3 Bloques de Beneficios del Formato */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          
          {/* Card 1: Ilustraciones Numeradas */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-emerald-700/40 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-emerald-800 text-amber-200 flex items-center justify-center">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                {config.illustrationCount}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Dibujos de autor con una fascinante vida marina (nutrias marinas, peces mariposa, estrellas de mar, cangrejos, corales y criaturas oceánicas) listos para recibir tus colores favoritos.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-stone-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Trazos limpios con números claramente visibles</span>
            </div>
          </motion.div>

          {/* Card 2: Guía de Colores */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
            className="bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-emerald-700/40 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center">
                <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                Paleta Cromática Intuitiva
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Cada página incluye al pie de página la paleta oficial con los tonos exactos recomendados. Siempre sabrás qué color colocar en cada espacio numerado sin temor a equivocarte.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-stone-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Colores fáciles de encontrar en lápices comunes</span>
            </div>
          </motion.div>

          {/* Card 3: Formato PDF y Práctica de Impresión */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="bg-[#FAF9F6] p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-2xs hover:border-emerald-700/40 transition-colors flex flex-col justify-between"
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-stone-800 text-stone-100 flex items-center justify-center">
                <Printer className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                Formato A4 en Alta Resolución (300 DPI)
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Archivo digital diseñado específicamente para hojas A4. Imprime en casa, en hojas normales o en papel de mayor gramaje (120g a 180g) para un acabado artístico profesional.
              </p>
            </div>
            <div className="mt-5 pt-3.5 border-t border-stone-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-800">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Imprime tantas veces como quieras</span>
            </div>
          </motion.div>

        </div>

        {/* =========================================================================
            SECCIÓN DE MUESTRA: SCROLL HORIZONTAL DE LAS IMÁGENES
            ========================================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-[#FAF9F6] rounded-2xl sm:rounded-3xl border border-stone-200/90 p-4 sm:p-8 shadow-xs"
        >
          {/* Encabezado de la Muestra */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8 border-b border-stone-200/80 pb-5">
            <div className="space-y-1.5 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Muestra del Archivo Digital</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                Hojea las Páginas Reales del Libro
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Desliza horizontalmente para conocer los moldes numerados de alta resolución con su paleta de colores y sus respectivos resultados terminados.
              </p>
            </div>

            {/* Controles de Filtro y Navegación */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Filtros en pestañas limpias */}
              <div className="flex items-center bg-stone-200/70 p-1 rounded-xl text-xs font-semibold text-stone-600">
                <button
                  type="button"
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    filter === 'all'
                      ? 'bg-white text-stone-900 shadow-2xs'
                      : 'hover:text-stone-900'
                  }`}
                >
                  Todas ({BOOK_SAMPLES.length})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('mold')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    filter === 'mold'
                      ? 'bg-white text-emerald-900 shadow-2xs'
                      : 'hover:text-stone-900'
                  }`}
                >
                  Moldes B&N ({moldCount})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('finished')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    filter === 'finished'
                      ? 'bg-white text-amber-900 shadow-2xs'
                      : 'hover:text-stone-900'
                  }`}
                >
                  Coloreadas ({finishedCount})
                </button>
                <button
                  type="button"
                  onClick={() => setFilter('landscape')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    filter === 'landscape'
                      ? 'bg-white text-teal-900 shadow-2xs'
                      : 'hover:text-stone-900'
                  }`}
                >
                  Paisajes +80 ({landscapeCount})
                </button>
              </div>

              {/* Botones de Anterior y Siguiente */}
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleScroll('left')}
                  className="w-9 h-9 rounded-xl bg-white border border-stone-200/80 hover:bg-stone-50 active:scale-95 flex items-center justify-center text-stone-700 shadow-2xs transition-all cursor-pointer"
                  aria-label="Página anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll('right')}
                  className="w-9 h-9 rounded-xl bg-white border border-stone-200/80 hover:bg-stone-50 active:scale-95 flex items-center justify-center text-stone-700 shadow-2xs transition-all cursor-pointer"
                  aria-label="Próxima página"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicación visual para móvil */}
          <div className="sm:hidden flex items-center justify-between text-[11px] text-stone-500 mb-3 px-1">
            <span className="flex items-center gap-1 font-medium">
              <span className="inline-block animate-pulse">←</span>
              <span>Desliza hacia los lados para hojear</span>
              <span className="inline-block animate-pulse">→</span>
            </span>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => handleScroll('left')}
                className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs"
                aria-label="Retroceder"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll('right')}
                className="w-7 h-7 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-700 shadow-2xs"
                aria-label="Avanzar"
              >
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARRUSEL DE SCROLL HORIZONTAL */}
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsAutoScrolling(false)}
            onTouchStart={() => setIsAutoScrolling(false)}
            className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth focus:outline-none [-webkit-overflow-scrolling:touch]"
            style={{ scrollbarWidth: 'thin' }}
          >
            {filteredSamples.map((sample) => {
              const partner = findPartnerSample(sample);
              return (
                <div
                  key={sample.id}
                  className="flex-none w-[260px] sm:w-[290px] md:w-[320px] snap-start bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {/* Encabezado de la Tarjeta */}
                  <div className="p-3.5 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-stone-200/80 text-stone-700">
                        PÁG {sample.pageNumber.toString().padStart(2, '0')}
                      </span>
                      <span className="text-xs font-bold text-stone-900 truncate max-w-[130px] sm:max-w-[160px]">
                        {sample.animal}
                      </span>
                    </div>

                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${sample.badgeColor}`}>
                      {sample.type === 'mold' ? 'Molde B&N' : 'Coloreada'}
                    </span>
                  </div>

                  {/* Marco de la Imagen con Visualizador en A4 */}
                  <div className="relative p-3 bg-stone-100/40 flex items-center justify-center">
                    <div className="relative w-full aspect-[3/4] bg-white rounded-xl border border-stone-200 shadow-2xs overflow-hidden flex items-center justify-center">
                      <img
                        src={sample.image}
                        alt={`${sample.animal} - ${sample.typeLabel}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-contain p-1.5 transition-transform duration-500 group-hover:scale-102"
                        loading="lazy"
                      />

                      {/* Botón de Zoom / Pantalla completa */}
                      <button
                        type="button"
                        onClick={() => setSelectedSample(sample)}
                        className="absolute bottom-2.5 right-2.5 bg-stone-900/80 hover:bg-stone-900 text-white p-2 rounded-lg backdrop-blur-xs shadow-md transition-all sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer"
                        title="Ver en tamaño ampliado"
                      >
                        <ZoomIn className="w-4 h-4" />
                      </button>

                      {/* Sello de especificación técnica */}
                      <div className="absolute top-2 left-2 pointer-events-none">
                        <span className="bg-stone-900/75 backdrop-blur-xs text-white text-[9px] font-mono font-medium px-2 py-0.5 rounded">
                          300 DPI · A4
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Detalles y Acciones */}
                  <div className="p-3.5 sm:p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-stone-900 leading-snug">
                        {sample.typeLabel}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {sample.description}
                      </p>
                    </div>

                    {/* Acciones Rápidas */}
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedSample(sample)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 py-1 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Ver detalles</span>
                      </button>

                      {partner && (
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedSample(partner);
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-stone-500 hover:text-stone-800 bg-stone-100 hover:bg-stone-200/80 px-2 py-1 rounded-md transition-colors cursor-pointer"
                          title={`Ver ${partner.type === 'mold' ? 'molde para pintar' : 'arte coloreada'}`}
                        >
                          <ArrowLeftRight className="w-3 h-3 text-stone-600" />
                          <span>{partner.type === 'mold' ? 'Ver Molde' : 'Ver Coloreada'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pie Informativo de la Muestra */}
          <div className="mt-6 pt-5 border-t border-stone-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-600">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                Disfruta de <strong>+50 páginas</strong> en la versión esencial o llévate el catálogo definitivo con <strong>+80 páginas</strong> completas de fauna y paisajes marinos.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#oferta"
                className="font-bold text-emerald-800 hover:text-emerald-900 underline underline-offset-4"
              >
                Aprovechar Oferta Especial →
              </a>
            </div>
          </div>
        </motion.div>

        {/* Información de entrega y formato */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs text-stone-600">
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 flex items-center gap-2.5">
            <CheckCircle className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Compatible con teléfonos, tablets y computadoras</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 flex items-center gap-2.5">
            <FileText className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Entrega automática e inmediata por correo</span>
          </div>
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/60 flex items-center gap-2.5 sm:col-span-2 lg:col-span-1">
            <Printer className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Listo para imprimir en casa o imprenta</span>
          </div>
        </div>

      </div>

      {/* =========================================================================
          MODAL LIGHTBOX: VISUALIZADOR AMPLIADO
          ========================================================================= */}
      <AnimatePresence>
        {selectedSample && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSample(null)}
            className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm p-3 sm:p-6 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-stone-300"
            >
              {/* Encabezado del Modal */}
              <div className="p-3.5 sm:p-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono font-bold bg-stone-200 text-stone-800 px-2 py-0.5 rounded">
                    PÁG {selectedSample.pageNumber.toString().padStart(2, '0')}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-stone-900">
                      {selectedSample.animal}
                    </h4>
                    <span className="text-xs text-stone-500">
                      {selectedSample.typeLabel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* Botón de alternar entre Molde y Colorida */}
                  {(() => {
                    const partner = findPartnerSample(selectedSample);
                    if (!partner) return null;
                    return (
                      <button
                        type="button"
                        onClick={() => setSelectedSample(partner)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 transition-colors cursor-pointer"
                      >
                        <ArrowLeftRight className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Cambiar a</span>
                        <span>{partner.type === 'mold' ? 'Molde B&N' : 'Arte Coloreada'}</span>
                      </button>
                    );
                  })()}

                  <button
                    type="button"
                    onClick={() => setSelectedSample(null)}
                    className="w-8 h-8 rounded-lg bg-stone-200/80 hover:bg-stone-300 text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
                    aria-label="Cerrar visor"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Imagen ampliada */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF9F6] flex flex-col items-center justify-center">
                <div className="max-w-xl w-full bg-white rounded-xl shadow-md border border-stone-200 p-2 sm:p-3">
                  <img
                    src={selectedSample.image}
                    alt={`${selectedSample.animal} ampliado`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg mx-auto"
                  />
                </div>

                <div className="mt-4 text-center max-w-md space-y-1">
                  <p className="text-xs sm:text-sm font-semibold text-stone-800">
                    {selectedSample.highlightText}
                  </p>
                  <p className="text-[11px] sm:text-xs text-stone-500">
                    {selectedSample.description}
                  </p>
                </div>
              </div>

              {/* Pie con CTA */}
              <div className="p-3.5 sm:p-4 border-t border-stone-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-stone-500">
                  Resolución máxima 300 DPI · Estándar internacional A4
                </span>
                <a
                  href="#oferta"
                  onClick={() => setSelectedSample(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold rounded-xl shadow-sm transition-all"
                >
                  Aprovechar Oferta
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
