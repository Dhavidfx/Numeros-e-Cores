import React, { useState, useEffect } from 'react';
import { initialProductConfig, ProductConfig } from './config/product';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { BenefitsSection } from './components/BenefitsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { OfferSection } from './components/OfferSection';
import { AudienceSection } from './components/AudienceSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { ArrowUpRight, Zap, Check } from 'lucide-react';

export default function App() {
  // Configuración con persistencia sincronizada
  const [config, setConfig] = useState<ProductConfig>(() => {
    try {
      const saved = localStorage.getItem('ebook_product_config_v13');
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.brandName = initialProductConfig.brandName;
        if (!parsed.images?.coverMockup || parsed.images.coverMockup.includes('.png') || parsed.images.coverMockup.includes('.jpg')) {
          parsed.images = initialProductConfig.images;
        }
        if (!parsed.checkoutUrl || !parsed.checkoutUrl.includes('checkoutMode=10')) {
          parsed.checkoutUrl = initialProductConfig.checkoutUrl;
        }
        if (!parsed.upsell || !parsed.upsell.checkoutUrl?.includes('R108183160I') || parsed.upsell.coverImage?.includes('.png')) {
          parsed.upsell = initialProductConfig.upsell;
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return initialProductConfig;
  });

  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);
  const [mobileEdition, setMobileEdition] = useState<'complete' | 'essential'>('complete');

  // Monitorear desplazamiento para mostrar barra fija en móvil tras pasar el hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 420) {
        setShowMobileStickyBar(true);
      } else {
        setShowMobileStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determinar link y precio activo para la barra mobile
  const activeCheckoutUrl = mobileEdition === 'complete' 
    ? (config.upsell?.checkoutUrl || "https://pay.hotmart.com/R108183160I?checkoutMode=10")
    : config.checkoutUrl;

  const activePrice = mobileEdition === 'complete' 
    ? (config.upsell?.promoPrice || 8.50).toFixed(2)
    : config.promoPrice.toFixed(2);

  const activeLabel = mobileEdition === 'complete'
    ? '+80 Ilustraciones (Fauna + Paisajes)'
    : '+50 Ilustraciones (Fauna Marina)';

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#FAF9F6] text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Barra de Navegación Superior */}
      <TopBar config={config} />

      {/* Contenido Principal con las Secciones */}
      <main className="flex-1 w-full pb-24 md:pb-0">
        {/* Sección 1: Hero con Propuesta de Valor, Precio y CTAs directos */}
        <HeroSection config={config} />

        {/* Sección 2: Lo Que Vas a Recibir + Muestra del Archivo con Carrusel Horizontal WebP */}
        <WhatYouGetSection config={config} />

        {/* Sección 3: Por Qué Elegir Este Material (Beneficios) */}
        <BenefitsSection />

        {/* Sección Social Proof: Opiniones Reales de Compradores (4.9/5 estrellas) */}
        <ReviewsSection />

        {/* Sección 4: Oferta Especial Comparativa ($5.00 vs $8.50) */}
        <OfferSection config={config} />

        {/* Sección 5: ¿Para Quién Es Este Libro Digital? */}
        <AudienceSection config={config} />

        {/* Sección 6: Preguntas Frecuentes (10 Preguntas en Acordeón) */}
        <FAQSection config={config} />
      </main>

      {/* Pie de Página con Soporte Exclusivo por Instagram @numericpaint */}
      <Footer 
        config={config} 
        onOpenLegal={(type) => setLegalModal(type)} 
      />

      {/* Barra Fija Móvil con Alternador de Versiones ($8.50 / $5.00) y Botón de Checkout Directo */}
      {showMobileStickyBar && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-stone-900/98 backdrop-blur-md border-t border-stone-750 px-3 py-2 shadow-2xl flex flex-col gap-1.5 transition-all">
          {/* Alternador / Toggle entre Edición Completa y Edición Esencial */}
          <div className="flex items-center justify-between gap-1 bg-stone-800/90 p-0.5 rounded-lg border border-stone-700/80">
            <button
              type="button"
              onClick={() => setMobileEdition('complete')}
              className={`flex-1 py-1 px-2 rounded-md text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                mobileEdition === 'complete'
                  ? 'bg-amber-400 text-stone-950 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <span>+80 Completa ($8.50)</span>
              {mobileEdition === 'complete' && <span className="text-[9px] bg-stone-900 text-amber-300 px-1 rounded font-black">TOP</span>}
            </button>
            <button
              type="button"
              onClick={() => setMobileEdition('essential')}
              className={`flex-1 py-1 px-2 rounded-md text-[11px] font-bold transition-all flex items-center justify-center gap-1 cursor-pointer ${
                mobileEdition === 'essential'
                  ? 'bg-stone-200 text-stone-950 shadow-xs'
                  : 'text-stone-300 hover:text-white'
              }`}
            >
              <span>+50 Esencial ($5.00)</span>
            </button>
          </div>

          {/* Fila del Botón de Compra Directa */}
          <div className="flex items-center justify-between gap-2.5">
            <div className="flex flex-col">
              <span className="text-[10px] text-stone-300 truncate max-w-[140px] font-medium">
                {activeLabel}
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-amber-400">{config.currencySymbol}</span>
                <span className="text-lg font-black text-white leading-none">
                  {activePrice}
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-0.5 ml-1">
                  <Zap className="w-2.5 h-2.5 fill-emerald-400" /> Inmediato
                </span>
              </div>
            </div>

            <a
              href={activeCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-black rounded-xl shadow-md transition-all active:scale-[0.98] whitespace-nowrap cursor-pointer ${
                mobileEdition === 'complete'
                  ? 'bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 text-stone-950 animate-pulse-gold'
                  : 'bg-emerald-700 hover:bg-emerald-600 text-white animate-pulse-emerald'
              }`}
            >
              <span>Comprar Ahora</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Modal de Información Legal (Privacidad, Términos, Soporte) */}
      <LegalModal 
        type={legalModal} 
        onClose={() => setLegalModal(null)} 
        config={config} 
      />

    </div>
  );
}
