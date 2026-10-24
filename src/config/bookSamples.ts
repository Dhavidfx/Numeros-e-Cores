export interface BookSampleItem {
  id: string;
  animal: string;
  type: 'mold' | 'finished';
  typeLabel: string;
  badge: string;
  badgeColor: string;
  image: string;
  description: string;
  pageNumber: number;
  highlightText: string;
  pairId: string;
}

export const BOOK_SAMPLES: BookSampleItem[] = [
  {
    id: 'lontra-molde',
    pairId: 'lontra',
    animal: 'Nutria Marina',
    type: 'mold',
    typeLabel: 'Molde Numerado B&N (A4)',
    badge: 'Molde 300 DPI c/ Paleta',
    badgeColor: 'bg-emerald-800 text-amber-200',
    image: '/assets/aistudio/Uma_lontra_marinha_molde_maxima_qualidade_300dpi_aa9aaee7.png',
    description: 'Líneas nítidas con áreas numeradas y paleta cromática al pie de página, lista para imprimir en papel A4.',
    pageNumber: 12,
    highlightText: 'Áreas numeradas del 1 al 12 con trazo anti-manchas',
  },
  {
    id: 'lontra-colorida',
    pairId: 'lontra',
    animal: 'Nutria Marina',
    type: 'finished',
    typeLabel: 'Arte Coloreada Terminada',
    badge: 'Resultado Final y Guía',
    badgeColor: 'bg-amber-600 text-white',
    image: '/assets/aistudio/Uma_lontra_marinha_original_maxima_qualidade_6bc4316b.jpg',
    description: 'Resultado final armonioso pintado siguiendo fielmente la numeración recomendada del libro.',
    pageNumber: 13,
    highlightText: 'Degradados suaves logrados con lápices de colores escolares comunes',
  },
  {
    id: 'caranguejo-molde',
    pairId: 'caranguejo',
    animal: 'Cangrejo Imponente',
    type: 'mold',
    typeLabel: 'Molde Numerado B&N (A4)',
    badge: 'Molde 300 DPI c/ Paleta',
    badgeColor: 'bg-emerald-800 text-amber-200',
    image: '/assets/aistudio/Um_imponente_caran_molde_maxima_qualidade_300dpi_ad482950.png',
    description: 'Geometría detallada de pinzas y caparazón con paleta de tonos cálidos y carmín.',
    pageNumber: 18,
    highlightText: 'Excelente para ejercitar el enfoque, la relajación y la motricidad fina',
  },
  {
    id: 'caranguejo-colorido',
    pairId: 'caranguejo',
    animal: 'Cangrejo Imponente',
    type: 'finished',
    typeLabel: 'Arte Coloreada Terminada',
    badge: 'Resultado Final y Guía',
    badgeColor: 'bg-amber-600 text-white',
    image: '/assets/aistudio/Um_imponente_caran_original_maxima_qualidade_13d7deae.jpg',
    description: 'Ilustración coloreada de gran impacto visual, profundidad oceánica y acabado artístico.',
    pageNumber: 19,
    highlightText: 'Combinación equilibrada entre tonos cálidos y fondo marino',
  },
  {
    id: 'estrela-molde',
    pairId: 'estrela',
    animal: 'Estrella de Mar Oceánica',
    type: 'mold',
    typeLabel: 'Molde Numerado B&N (A4)',
    badge: 'Molde 300 DPI c/ Paleta',
    badgeColor: 'bg-emerald-800 text-amber-200',
    image: '/assets/aistudio/Uma_estrela_do_mar_molde_maxima_qualidade_300dpi_25ee8c10.png',
    description: 'Texturas orgánicas y corales con números claramente legibles y paleta de tonalidades solares.',
    pageNumber: 24,
    highlightText: 'Diseño agradable con lectura fácil incluso con iluminación tenue',
  },
  {
    id: 'estrela-colorida',
    pairId: 'estrela',
    animal: 'Estrella de Mar Oceánica',
    type: 'finished',
    typeLabel: 'Arte Coloreada Terminada',
    badge: 'Resultado Final y Guía',
    badgeColor: 'bg-amber-600 text-white',
    image: '/assets/aistudio/Uma_estrela_do_mar_original_maxima_qualidade_c225436b.jpg',
    description: 'Armonía cromática tropical en tonos anaranjados, turquesa y dorado suave.',
    pageNumber: 25,
    highlightText: 'Acabado profesional sin requerir técnicas artísticas avanzadas',
  },
  {
    id: 'peixe-molde',
    pairId: 'peixe',
    animal: 'Pez Mariposa Tropical',
    type: 'mold',
    typeLabel: 'Molde Numerado B&N (A4)',
    badge: 'Molde 300 DPI c/ Paleta',
    badgeColor: 'bg-emerald-800 text-amber-200',
    image: '/assets/aistudio/Um_peixe_borboleta_molde_maxima_qualidade_300dpi_eba2960e.png',
    description: 'Trazo elegante con numeración clara para una sesión de pintura cómoda sin cansar la vista.',
    pageNumber: 30,
    highlightText: 'Ideal para sesiones rápidas de relajación y descompresión diaria',
  },
  {
    id: 'peixe-colorido',
    pairId: 'peixe',
    animal: 'Pez Mariposa Tropical',
    type: 'finished',
    typeLabel: 'Arte Coloreada Terminada',
    badge: 'Resultado Final y Guía',
    badgeColor: 'bg-amber-600 text-white',
    image: '/assets/aistudio/Um_peixe_borboleta_original_maxima_qualidade_19b9da70.jpg',
    description: 'Ejemplo de acabado vibrante con franjas contrastantes y brillo acuático envolvente.',
    pageNumber: 31,
    highlightText: 'Sensación inmediata de satisfacción y belleza al completar',
  },
];
