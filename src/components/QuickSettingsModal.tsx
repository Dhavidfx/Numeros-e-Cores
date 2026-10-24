import React, { useState } from 'react';
import { ProductConfig } from '../config/product';
import { X, Sliders, RotateCcw, Check, ExternalLink } from 'lucide-react';

interface QuickSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: ProductConfig;
  onSave: (newConfig: ProductConfig) => void;
  onReset: () => void;
}

export const QuickSettingsModal: React.FC<QuickSettingsModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<ProductConfig>({ ...config });
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-stone-200 p-4 sm:p-8 space-y-4 sm:space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
            <Sliders className="w-5 h-5 text-emerald-800" />
            <span>Configuración Comercial del Producto</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-stone-500 leading-relaxed">
          Edita los parámetros de la oferta en tiempo real. Los cambios se reflejan inmediatamente en todas las secciones de la página.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Precio Promocional ($)
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.promoPrice}
                onChange={(e) => setFormData({ ...formData, promoPrice: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Precio Original ($)
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.originalPrice}
                onChange={(e) => setFormData({ ...formData, originalPrice: parseFloat(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-hidden"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-stone-700 mb-1">
              Enlace de Checkout / Pago Real
            </label>
            <div className="flex items-center gap-2">
              <input
                type="url"
                value={formData.checkoutUrl}
                onChange={(e) => setFormData({ ...formData, checkoutUrl: e.target.value })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-hidden text-xs font-mono"
                placeholder="https://pay.hotmart.com/..."
              />
              <a
                href={formData.checkoutUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-stone-100 hover:bg-stone-200 rounded-lg text-stone-600 transition-colors shrink-0"
                title="Probar enlace"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Nombre del Libro Digital
              </label>
              <input
                type="text"
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Nombre de la Marca / Autor
              </label>
              <input
                type="text"
                value={formData.brandName}
                onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Canal de Instagram de Soporte
              </label>
              <input
                type="text"
                value={formData.supportInstagram}
                onChange={(e) => setFormData({ ...formData, supportInstagram: e.target.value })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-hidden font-mono text-xs"
                placeholder="@numericpaint"
              />
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">
                Enlace Directo de Instagram
              </label>
              <input
                type="url"
                value={formData.supportInstagramUrl}
                onChange={(e) => setFormData({ ...formData, supportInstagramUrl: e.target.value })}
                className="w-full px-3 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-700 focus:outline-hidden font-mono text-xs"
                placeholder="https://instagram.com/numericpaint"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restaurar Predeterminado</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              >
                Cancelar
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg shadow-sm transition-all cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-amber-300" /> : null}
                <span>{copied ? '¡Guardado con Éxito!' : 'Guardar Cambios'}</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
