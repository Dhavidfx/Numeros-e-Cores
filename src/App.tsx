import React, { useState, useEffect } from 'react';
import { initialProductConfig, ProductConfig } from './config/product';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { BenefitsSection } from './components/BenefitsSection';
import { OfferSection } from './components/OfferSection';
import { AudienceSection } from './components/AudienceSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { LegalModal, LegalModalType } from './components/LegalModal';
import { QuickSettingsModal } from './components/QuickSettingsModal';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  // Configuración con persistencia en localStorage para facilitar pruebas del administrador
  const [config, setConfig] = useState<ProductConfig>(() => {
    try {
      const saved = localStorage.getItem('ebook_product_config_v8');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.images?.coverMockup || parsed.images.coverMockup.includes('_50_IMAGENS_PARA_COLORIR_a8c24b9c') || parsed.images.coverMockup.includes('ebook_cover_mockup')) {
          parsed.images = { ...parsed.images, coverMockup: initialProductConfig.images.coverMockup };
        }
        if (!parsed.checkoutUrl || parsed.checkoutUrl.includes('pay.exemplo.com.br')) {
          parsed.checkoutUrl = initialProductConfig.checkoutUrl;
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return initialProductConfig;
  });

  const [legalModal, setLegalModal] = useState<LegalModalType>(null);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [showMobileStickyBar, setShowMobileStickyBar] = useState(false);

  // Monitorear desplazamiento para mostrar barra fija en móvil tras pasar el hero
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 480) {
        setShowMobileStickyBar(true);
      } else {
        setShowMobileStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSaveConfig = (newConfig: ProductConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('ebook_product_config_v8', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
    setIsSettingsOpen(false);
  };

  const handleResetConfig = () => {
    setConfig(initialProductConfig);
    try {
      localStorage.removeItem('ebook_product_config_v8');
      localStorage.removeItem('ebook_product_config_v7');
      localStorage.removeItem('ebook_product_config_v6');
      localStorage.removeItem('ebook_product_config_v5');
      localStorage.removeItem('ebook_product_config_v4');
      localStorage.removeItem('ebook_product_config_v3');
      localStorage.removeItem('ebook_product_config_v2');
      localStorage.removeItem('ebook_product_config_v1');
    } catch {
      // ignore
    }
    setIsSettingsOpen(false);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#FAF9F6] text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      
      {/* Barra de Navegación Superior */}
      <TopBar 
        config={config} 
        onOpenSettings={() => setIsSettingsOpen(true)} 
      />

      {/* Contenido Principal con las Secciones */}
      <main className="flex-1 w-full pb-14 md:pb-0">
        {/* Sección 1: Hero con Propuesta de Valor y CTA */}
        <HeroSection config={config} />

        {/* Sección 2: Lo Que Vas a Recibir + Muestra del Archivo con Carrusel Horizontal */}
        <WhatYouGetSection config={config} />

        {/* Sección 3: Por Qué Elegir Este Material (Beneficios) */}
        <BenefitsSection />

        {/* Sección 4: Oferta Especial con Contador de 15 Minutos */}
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

      {/* Barra Fija Móvil con CTA Aprovechar Oferta */}
      {showMobileStickyBar && (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-stone-200 py-2.5 px-4 flex items-center justify-between gap-3 shadow-lg">
          <div className="flex flex-col">
            <span className="text-[10px] text-stone-500 uppercase tracking-wider font-semibold">Oferta Especial</span>
            <span className="text-base font-extrabold text-stone-900 leading-none">
              {config.currencySymbol} {config.promoPrice.toFixed(2)}
            </span>
          </div>
          <a
            href="#oferta"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold rounded-lg shadow-sm whitespace-nowrap"
          >
            <span>Aprovechar Oferta</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Modal de Información Legal (Privacidad, Términos, Soporte) */}
      <LegalModal 
        type={legalModal} 
        onClose={() => setLegalModal(null)} 
        config={config} 
      />

      {/* Modal de Configuración Rápida del Administrador */}
      <QuickSettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />

    </div>
  );
}
