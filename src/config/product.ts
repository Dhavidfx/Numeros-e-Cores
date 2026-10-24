/**
 * Configuración Central del Producto - Libro Digital para Colorear por Números
 * Toda la información comercial, precios, enlaces de pago y detalles
 * de soporte están centralizados aquí para fácil mantenimiento.
 */

export interface ProductConfig {
  productName: string;
  productSubtitle: string;
  brandName: string;
  brandSlogan: string;
  illustrationCount: string;
  fileFormat: string;
  originalPrice: number;
  promoPrice: number;
  currencySymbol: string;
  countdownMinutes: number;
  checkoutUrl: string;
  deliveryMethod: string;
  accessTime: string;
  guaranteePolicy: string;
  guaranteeDays: number;
  supportInstagram: string;
  supportInstagramUrl: string;
  hasBonuses: boolean;
  bonuses: Array<{
    id: string;
    title: string;
    tagline: string;
    description: string;
    estimatedValue: string;
    included: boolean;
  }>;
  images: {
    coverMockup: string;
    step1Numbered: string;
    step2Progress: string;
    step3Finished: string;
    bonusGuide: string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const initialProductConfig: ProductConfig = {
  productName: "+50 Imágenes para Colorear — Animales Marinos",
  productSubtitle: "Descubre el fascinante universo de los animales marinos con ilustraciones geométricas y numeradas para colorear, relajarte y despertar tu creatividad.",
  brandName: "Dhavidfx",
  brandSlogan: "Ilustraciones de autor y momentos de tranquilidad en formato digital",
  illustrationCount: "+50 Ilustraciones Exclusivas",
  fileFormat: "PDF Digital en Alta Resolución (300 DPI - Estándar A4)",
  originalPrice: 19.90,
  promoPrice: 5.00,
  currencySymbol: "$",
  countdownMinutes: 15,
  checkoutUrl: "https://pay.hotmart.com/M108179634I",
  deliveryMethod: "Envío inmediato a tu correo electrónico registrado justo después de confirmarse el pago",
  accessTime: "Acceso de por vida al archivo para descargarlo, guardarlo e imprimirlo cuando desees",
  guaranteePolicy: "Soporte dedicado y entrega inmediata de archivos digitales de alta resolución en formato PDF",
  guaranteeDays: 0,
  supportInstagram: "@numericpaint",
  supportInstagramUrl: "https://instagram.com/numericpaint",
  hasBonuses: false,
  bonuses: [
    {
      id: "bonus-palette",
      title: "Guía Práctica de Combinaciones y Paletas Naturales",
      tagline: "Manual con paletas cromáticas armoniosas inspiradas en la fauna oceánica",
      description: "Aprende a realizar transiciones suaves, sombras delicadas y realces luminosos con lápices de colores comunes.",
      estimatedValue: "$ 19.90",
      included: true,
    },
    {
      id: "bonus-swatches",
      title: "Fichas de Muestra de Color para Impresión",
      tagline: "Plantillas numeradas para probar tus lápices antes de pintar",
      description: "Hojas dedicadas para registrar tus tonos preferidos y catalogar tu colección de lápices o rotuladores.",
      estimatedValue: "$ 14.90",
      included: true,
    },
    {
      id: "bonus-decompress",
      title: "Checklist de Descompresión y Pintura Consciente",
      tagline: "Consejos para crear tu rutina diaria de relajación y calma",
      description: "Pequeños rituales de respiración y presencia para aprovechar al máximo tus momentos con el arte.",
      estimatedValue: "$ 12.00",
      included: true,
    },
  ],
  images: {
    coverMockup: "/assets/aistudio/_50_IMAGENS_PARA_COLORIR__1__dbe30bbe.png",
    step1Numbered: "/assets/aistudio/Uma_lontra_marinha_molde_maxima_qualidade_300dpi_aa9aaee7.png",
    step2Progress: "/assets/aistudio/Um_peixe_borboleta_molde_maxima_qualidade_300dpi_eba2960e.png",
    step3Finished: "/assets/aistudio/Uma_lontra_marinha_original_maxima_qualidade_6bc4316b.jpg",
    bonusGuide: "/assets/aistudio/_50_IMAGENS_PARA_COLORIR__1__dbe30bbe.png",
  },
  faq: [
    {
      question: "1. ¿Cómo funciona el libro para colorear por números?",
      answer: "Cada ilustración del libro está dividida en pequeñas áreas delimitadas por líneas finas que contienen números impresos. Una guía visual al pie de cada página indica exactamente qué color corresponde a cada número. Simplemente asocia el número con tu lápiz o rotulador y llena los espacios para ver nacer la obra con perfecta armonía.",
    },
    {
      question: "2. ¿El producto es físico o digital?",
      answer: "El producto es 100% digital. Recibes el archivo en formato PDF de altísima definición (300 DPI), listo para ser impreso en hojas sueltas en tu impresora doméstica o para abrirse en aplicaciones de dibujo en tablets y iPads.",
    },
    {
      question: "3. ¿Cómo voy a recibir el material?",
      answer: "Tan pronto como tu compra sea confirmada en la plataforma de pago de Hotmart, el enlace oficial para descargar el libro se envía de inmediato a la dirección de correo electrónico indicada en el checkout. La liberación del acceso toma menos de 2 minutos.",
    },
    {
      question: "4. ¿Necesito saber dibujar para disfrutar este libro?",
      answer: "¡Para nada! Ese es uno de los mayores beneficios de colorear por números: no necesitas ninguna experiencia previa con dibujo, proporciones o teoría del color. Las formas ya están creadas con precisión y la numeración te guía en la elección de tonos, permitiendo que cualquier persona cree cuadros con un acabado profesional.",
    },
    {
      question: "5. ¿Puedo imprimir las ilustraciones?",
      answer: "Sí, absolutamente. El material fue diagramado en el estándar internacional A4 con márgenes seguros para encuadernar o usar en tablero. Puedes imprimir el libro completo o solo las páginas que desees pintar ese día, incluso en papeles de mayor gramaje (como 120g o 180g) para técnicas especiales.",
    },
    {
      question: "6. ¿En qué dispositivos puedo abrir el archivo?",
      answer: "El archivo es compatible con cualquier dispositivo capaz de visualizar documentos PDF: computadoras (Windows y Mac), laptops, teléfonos inteligentes Android y iPhone, así como tablets (iPad, Samsung Galaxy Tab, etc.).",
    },
    {
      question: "7. ¿Cómo funciona el pago?",
      answer: "El pago se procesa en el entorno seguro de Hotmart con encriptación bancaria de alta seguridad. Puedes pagar con tarjeta de crédito, débito, PayPal y métodos locales disponibles en tu país.",
    },
    {
      question: "8. ¿Por cuánto tiempo tendré acceso al material?",
      answer: "Tu acceso es de por vida. Una vez adquirido, el archivo es tuyo: puedes guardarlo en tu computadora, Google Drive, nube personal o memoria USB y utilizarlo tantas veces como quieras a lo largo de los años, sin mensualidades ni cargos adicionales.",
    },
    {
      question: "9. ¿Puedo solicitar soporte si tengo alguna duda?",
      answer: "¡Sí! Nuestro canal oficial y exclusivo de atención y soporte es por Instagram a través de nuestra cuenta oficial @numericpaint. Solo envíanos un mensaje directo (DM) y nuestro equipo te responderá con rapidez para resolver cualquier duda sobre la descarga, archivos o impresión.",
    },
    {
      question: "10. ¿Qué materiales de dibujo o pintura puedo usar?",
      answer: "Puedes utilizar lápices de colores convencionales, lápices acuarelables, rotuladores escolares, marcadores a base de agua o alcohol, e incluso plumas de gel. Si prefieres el arte digital, puedes importar las páginas en programas como Procreate, Adobe Fresco o Infinite Painter en tu tablet.",
    },
  ],
};
