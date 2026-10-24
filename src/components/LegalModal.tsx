import React from 'react';
import { X, Shield, FileText, Download } from 'lucide-react';
import { ProductConfig } from '../config/product';

export type LegalModalType = 'privacy' | 'terms' | 'refund' | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
  config: ProductConfig;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose, config }) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl border border-stone-200 p-4 sm:p-8 space-y-4 sm:space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-stone-100">
          <div className="flex items-center gap-2 text-stone-900 font-bold text-lg">
            {type === 'privacy' && <Shield className="w-5 h-5 text-emerald-700" />}
            {type === 'terms' && <FileText className="w-5 h-5 text-emerald-700" />}
            {type === 'refund' && <Download className="w-5 h-5 text-emerald-700" />}
            <span>
              {type === 'privacy' && 'Política de Privacidad'}
              {type === 'terms' && 'Términos de Uso del Material Digital'}
              {type === 'refund' && 'Política de Entrega y Soporte Digital'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="text-sm text-stone-600 space-y-4 leading-relaxed">
          {type === 'privacy' && (
            <>
              <p>
                Tu privacidad es una prioridad absoluta para <strong>{config.brandName}</strong>. Esta política detalla cómo se gestionan los datos ingresados al momento de realizar la compra.
              </p>
              <h4 className="font-bold text-stone-900">1. Recopilación de Información</h4>
              <p>
                Únicamente se solicitan los datos indispensables para el procesamiento de la transacción y el envío automático del archivo digital: nombre completo y dirección de correo electrónico, procesados bajo estrictos estándares de seguridad bancaria por la plataforma Hotmart.
              </p>
              <h4 className="font-bold text-stone-900">2. Seguridad y Confidencialidad</h4>
              <p>
                Tus datos jamás serán vendidos, alquilados ni compartidos con terceros para fines publicitarios. Se resguardan en servidores seguros con encriptación de extremo a extremo y se usan exclusivamente para brindarte acceso al libro digital y soporte si lo requieres.
              </p>
              <h4 className="font-bold text-stone-900">3. Contacto y Atención</h4>
              <p>
                Para cualquier consulta referente a tus datos o soporte técnico, puedes escribirnos directamente por mensaje directo en nuestro canal oficial de Instagram: <strong>{config.supportInstagram}</strong>.
              </p>
            </>
          )}

          {type === 'terms' && (
            <>
              <p>
                Al adquirir el libro digital <strong>{config.productName}</strong>, aceptas las siguientes condiciones de uso personal:
              </p>
              <h4 className="font-bold text-stone-900">1. Licencia de Uso Personal</h4>
              <p>
                La compra otorga una licencia personal, no exclusiva e intransferible para descargar, visualizar e imprimir las ilustraciones tantas veces como desees para tu recreación personal o familiar.
              </p>
              <h4 className="font-bold text-stone-900">2. Restricciones de Distribución</h4>
              <p>
                Queda estrictamente prohibida la reventa, redistribución pública en redes sociales o páginas web, sublicenciamiento o utilización de las ilustraciones originales con fines comerciales sin la autorización previa por escrito del autor.
              </p>
              <h4 className="font-bold text-stone-900">3. Formato y Compatibilidad</h4>
              <p>
                El material se suministra en formato digital PDF estándar (300 DPI, tamaño A4). Es responsabilidad del comprador disponer de un lector de archivos PDF compatible y, en caso de pintar físicamente, de impresora y materiales de colorear.
              </p>
            </>
          )}

          {type === 'refund' && (
            <>
              <p>
                Compromiso total con la calidad, nitidez y entrega inmediata de tus archivos digitales.
              </p>
              <h4 className="font-bold text-stone-900">1. Entrega Inmediata y Acceso Vitalicio</h4>
              <p>
                El archivo PDF se envía de forma automatizada e inmediata a tu correo electrónico al confirmarse el pago. Cuentas con acceso de por vida para descargarlo, guardarlo e imprimirlo en cualquier momento.
              </p>
              <h4 className="font-bold text-stone-900">2. Canal de Soporte</h4>
              <p>
                Si tienes cualquier inconveniente al recibir el enlace de descarga, al abrir el archivo en tu dispositivo o al imprimir las páginas, nuestro equipo está a tu entera disposición para ayudarte de forma personalizada a través de nuestro Instagram oficial <strong>{config.supportInstagram}</strong>.
              </p>
            </>
          )}
        </div>

        <div className="pt-4 border-t border-stone-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold text-stone-800 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
          >
            Entendido y Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
