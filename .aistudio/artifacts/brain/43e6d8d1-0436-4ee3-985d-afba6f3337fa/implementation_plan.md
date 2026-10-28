# Otimização de Conversão (CRO) e Aceleração de Carregamento (WebP)

Plano estratégico para eliminar os gargalos de conversão de anúncios, acelerar o carregamento em dispositivos móveis convertendo imagens para WebP e aumentar a taxa de início de compra (checkout) dos visitantes.

---

## Decisões Confirmadas com o Usuário

> [!IMPORTANT]
> **Respostas confirmadas na Etapa 1:**
> - **Preço e Ação no Hero**: Exibir o preço promocional diretamente no topo da página (Hero) com botão de compra imediata, reduzindo o atrito para quem vem dos anúncios.
> - **Conversão para WebP**: Converter 100% das imagens (capas e todas as amostras de moldes e artes coloridas) para o formato moderno `.webp`, preservando alta resolução (300 DPI) com redução drástica de peso (~80% a 90% mais leves).
> - **Barra Fixa Mobile Inteligente**: Implementar na barra inferior do celular um botão direto para a **Edição Completa ($8.50)** com alternador rápido para a **Edição Esencial ($5.00)**.

---

## 1. Visão Geral & Diagnóstico dos Gargalos

### Diagnóstico de Desempenho e Tráfego
1. **Peso Excessivo das Imagens (20 MB)**:
   - Atualmente, a pasta de imagens soma **mais de 20 MB** em arquivos `.png` e `.jpg` pesados (vários arquivos individuais têm entre 1.5MB e 2.1MB).
   - Em redes móveis 4G/3G, essa carga gera tempos de espera de 5 a 8 segundos para renderizar o carrossel e as capas, provocando abandono antes de o visitante ver o produto.
2. **Falta de Preço Acima da Dobra (Hero)**:
   - Quem clica no anúncio espera ver imediatamente quanto custa e o que recebe. Ter que rolar a página inteira até a Seção 4 para descobrir o valor esfria o impulso de compra.
3. **Barra Fixa Mobile sem Seleção Direta de Produto**:
   - No celular, o usuário precisa de um caminho sem fricção: tocar no botão e ir direto para o checkout com o produto certo selecionado.

---

## 2. Experiência do Usuário & Melhorias Visuais

```
┌─────────────────────────────────────────────────────────────┐
│ 1. HERO COM HOOK DE PREÇO & CTA DIRETO                     │
│    • Selo: "+80 & +50 Ilustrações em PDF A4 (300 DPI)"      │
│    • Preço em destaque: A partir de $ 5.00 (ou $ 8.50)       │
│    • Botões: "Comprar Agora" e "Ver Amostras do Livro"      │
│    • Badges: Acesso Imediato · Pagamento 100% Seguro        │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. MOSTRA REAL ULTRARRÁPIDA (WEBP OTIMIZADO)                │
│    • Carregamento instantâneo com imagens WebP              │
│    • Filtros: Todas, Moldes B&N, Coloridas, Paisagens +80   │
│    • Zoom e alternância "Molde ↔ Colorida" com zero atraso │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. PROVA SOCIAL & DEPOIMENTOS DE CLIENTES                   │
│    • Avaliação 4.9/5 estrelas de compradores                │
│    • Relatos de facilidade para imprimir e relaxar pintando │
│    • Garantia incondicional de suporte e satisfação         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 4. OFERTAS COMPARATIVAS CLARAS                              │
│    • Edição Esencial (+50 Imagens): $ 5.00                  │
│    • Edição Completa (+80 Imagens - Destaque): $ 8.50       │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 5. BARRA FIXA MOBILE COM SELETOR DE OFERTA                  │
│    • Padrão ativo: Edição Completa ($ 8.50)                 │
│    • Alternador rápido (Toggle): 80 imgs ($8.50) / 50 ($5)  │
│    • Botão direto para o checkout correto da Hotmart        │
└─────────────────────────────────────────────────────────────┘
```

---

## 3. Plano Técnico de Execução

### A. Conversão e Otimização para WebP
- Converter via script automatizado todos os arquivos `.png` e `.jpg` da pasta `/public/assets/aistudio/`:
  - Capas do produto: `_50_IMAGENS_PARA_COLORIR__1__dbe30bbe.webp` e `C_pia_de__80_IMAGENS_PARA_COLORIR_51f5aee6.webp`.
  - Todas as 8 ilustrações de moldes (300 DPI).
  - Todas as 8 ilustrações coloridas finalizadas.
- Reduzir o peso total de **20MB para ~2MB**, mantendo 100% da nitidez das linhas e paletas numeradas.
- Atualizar as referências em `src/config/product.ts` e `src/config/bookSamples.ts`.
- Adicionar atributos `loading="lazy"`, `decoding="async"` e proporções explícitas de aspecto para evitar Cumulative Layout Shift (CLS).

### B. Otimização do Hero Section
- Adicionar no Hero um box compacto de preço promocional (*"Por solo $5.00 / Colección Completa $8.50"*).
- Incluir dois botões primários:
  1. **Comprar Agora** (leva à oferta destacada ou abre o seletor).
  2. **Ver Amostras Reais** (rola suavemente até o catálogo de páginas).
- Micro-provas visuais de confiança: "Envio instantâneo para seu e-mail", "Arquivos em alta definição 300 DPI prontos para imprimir".

### C. Seção de Avaliações e Prova Social
- Incluir um bloco moderno de avaliações de compradores verificados (4.9/5 estrelas) destacando:
  - Facilidade de pintar seguindo os números.
  - Impressão perfeita em folha A4 comum e papel canson/mais grosso.
  - Terapia antiestresse e relaxamento após o trabalho.

### D. Barra Fixa Mobile Otimizada
- No celular, a barra inferior fixa exibirá:
  - Seletor de versão rápido em abas ou chave:
    - **Completa (+80 imgs) — $ 8.50** (selecionada por padrão).
    - **Esencial (+50 imgs) — $ 5.00**.
  - Botão de compra que direciona diretamente para o link de checkout correspondente na Hotmart (`https://pay.hotmart.com/R108183160I?checkoutMode=10` para $8.50 e `https://pay.hotmart.com/M108179634I?checkoutMode=10` para $5.00).

---

## 4. Verificação e Testes
- Testar build de produção (`npm run build`).
- Validar tempos de carregamento e redução de tamanho dos assets.
- Testar funcionamento dos links de checkout nos botões desktop e mobile.
- Garantir 0 erros de compilação e TypeScript (`tsc --noEmit`).
