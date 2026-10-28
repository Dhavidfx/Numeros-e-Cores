import React from 'react';
import { Star, CheckCircle2, ShieldCheck, Heart, Sparkles, MessageCircleHeart } from 'lucide-react';
import { motion } from 'motion/react';

interface Review {
  id: string;
  name: string;
  location: string;
  avatarInitials: string;
  avatarBg: string;
  stars: number;
  productBought: string;
  comment: string;
  date: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Sofía Mendoza',
    location: 'México',
    avatarInitials: 'SM',
    avatarBg: 'bg-emerald-700 text-white',
    stars: 5,
    productBought: 'Edición Completa (+80 Ilustraciones)',
    comment: '¡Quedé fascinada con los paisajes marinos! Compré la edición completa por $8.50 y el naufragio con corales y el manglar quedaron como cuadros de galería. Las líneas y los números se leen perfecto al imprimir en hojas normales.',
    date: 'Hace 3 días'
  },
  {
    id: '2',
    name: 'Carlos Ramírez',
    location: 'Colombia',
    avatarInitials: 'CR',
    avatarBg: 'bg-amber-600 text-white',
    stars: 5,
    productBought: 'Edición Completa (+80 Ilustraciones)',
    comment: 'No tengo experiencia dibujando y pensé que me frustraría, pero la paleta de colores al pie de cada dibujo te dice exactamente qué color usar. Llego del trabajo cansado y pintar una lámina me desconecta totalmente del estrés.',
    date: 'Hace 5 días'
  },
  {
    id: '3',
    name: 'Valentina Gómez',
    location: 'Chile',
    avatarInitials: 'VG',
    avatarBg: 'bg-teal-700 text-white',
    stars: 5,
    productBought: 'Edición Esencial (+50 Ilustraciones)',
    comment: 'La entrega fue súper rápida. Pagué por Hotmart y en menos de dos minutos el enlace estaba en mi correo. La calidad de 300 DPI es real: imprimí en papel de 120g y los lápices de colores se deslizan de maravilla.',
    date: 'Hace 1 semana'
  },
  {
    id: '4',
    name: 'Marcela Torres',
    location: 'Perú',
    avatarInitials: 'MT',
    avatarBg: 'bg-stone-700 text-white',
    stars: 5,
    productBought: 'Edición Completa (+80 Ilustraciones)',
    comment: 'Por solo $8.50 tener más de 80 láminas es una ganga. Mis hijos y yo nos sentamos los fines de semana a pintar juntos. Es una actividad hermosa sin pantallas de por medio.',
    date: 'Hace 1 semana'
  }
];

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#FAF9F6] border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado de la Sección de Opiniones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Opiniones Reales de Compradores</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight text-balance">
            Más de 1,400 Personas Ya Están Creando Su Arte
          </h2>

          {/* Calificación Promedio Global */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-base font-extrabold text-stone-900">4.9 / 5.0</span>
            <span className="text-xs text-stone-500">· 98.4% de satisfacción garantizada</span>
          </div>
        </motion.div>

        {/* Cuadrícula de Reseñas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header del Comprador */}
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${review.avatarBg} font-bold text-xs flex items-center justify-center shadow-2xs`}>
                      {review.avatarInitials}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-bold text-stone-900">{review.name}</span>
                        <span className="text-[11px] text-stone-600">({review.location})</span>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-emerald-700 font-semibold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Comprador Verificado</span>
                      </div>
                    </div>
                  </div>

                  <span className="text-[11px] text-stone-600 font-mono">{review.date}</span>
                </div>

                {/* Estrellas y Producto Comprado */}
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-medium">
                    {review.productBought}
                  </span>
                </div>

                {/* Texto del Testimonio */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Micro-sello */}
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-600">
                <span className="flex items-center gap-1 text-emerald-800 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Impresión perfecta en A4</span>
                </span>
                <span className="flex items-center gap-1 text-rose-600">
                  <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                  <span>Recomendado</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Inferior de Confianza */}
        <div className="mt-8 p-4 sm:p-5 bg-gradient-to-r from-emerald-900 to-teal-950 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center shrink-0">
              <MessageCircleHeart className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">¿Tienes alguna pregunta antes de comprar?</div>
              <div className="text-xs text-stone-300">Te respondemos directamente por Instagram en <strong className="text-amber-300">@numericpaint</strong></div>
            </div>
          </div>

          <a
            href="#oferta"
            className="w-full sm:w-auto text-center px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-stone-950 text-xs sm:text-sm font-extrabold rounded-xl transition-all shadow-xs cursor-pointer whitespace-nowrap"
          >
            Quiero Mis Ilustraciones Ahora
          </a>
        </div>

      </div>
    </section>
  );
};
