# GLEMO DESIGN SYSTEM v2.0

**Foundation · Visual Language · Density · Information Hierarchy**

> **Purpose:** estabelecer uma linguagem visual consistente, precisa e institucional para todo o ecossistema GlemO, reduzindo densidade cognitiva sem reduzir a capacidade informacional da plataforma.

---

# 00 — DESIGN PRINCIPLES

## 01. Information First

GlemO é uma plataforma de infraestrutura financeira e distribuição de Real-World Assets (RWA) tokenizados.

A interface deve priorizar:

```text
Informação
↓
Hierarquia
↓
Contexto
↓
Ação
↓
Decoração
```

Elementos visuais nunca devem competir com a informação relevante.

---

## 02. Calm Institutional Density

GlemO apresenta grandes volumes de dados sem parecer visualmente congestionado.

**Densidade ≠ quantidade de informação.**

Densidade cognitiva é determinada pela relação entre:

- quantidade de informação simultânea;
- espaço e respiro (*whitespace*);
- contraste e hierarquia tipográfica;
- agrupamento contextual;
- elementos concorrentes (bordas, sombras, badges);
- complexidade visual.

A interface deve permitir **alta densidade informacional com baixa densidade cognitiva**.

---

## 03. Progressive Disclosure

Não esconder informação necessária para a tomada de decisão. Em vez disso, revelar os dados progressivamente:

```text
Primary Signal (O que preciso saber agora?)
      ↓
Context (O que isso significa?)
      ↓
Details (Quais são os parâmetros?)
      ↓
Evidence (Como isso é comprovado?)
      ↓
Source (Qual documento ou hash valida isso?)
```

O usuário deve receber primeiro aquilo necessário para tomar a próxima decisão. Informações secundárias e evidências técnicas permanecem acessíveis via *drawers*, *expandable rows* ou *modals* sem ocupar permanentemente o viewport.

---

## 04. One Visual Priority

Cada região da interface deve possuir uma prioridade visual dominante.

**Evitar a concorrência simultânea de:**
- 5 KPIs em cards idênticos;
- 6 badges multicoloridos;
- 3 CTAs com o mesmo peso;
- Gráficos e alertas disputando atenção.

**Preferir:**

```text
PRIMARY SIGNAL (Destaque imediato)

Supporting context (Contexto explicativo)
Supporting metrics (Métricas de suporte integradas)

────────────────────────────────────────────

Detailed information / Evidence (Detalhe sob demanda)
```

---

## 05. Structure Over Decoration

O sentimento *Premium* e institucional do GlemO não deve vir de:

- gradientes excessivos ou fundos multicoloridos;
- sombras pesadas acumuladas;
- *glassmorphism* indiscriminado;
- animações decorativas desnecessárias;
- acúmulo de cards com bordas repetitivas.

Deve vir exclusivamente de:

- tipografia impecável e proporção harmônica;
- ritmo vertical e espaçamento modular estrito;
- alinhamento milimétrico de dados e tabelas;
- contraste deliberado e contenção cromática;
- movimento sutil e contextual.

---

## 06. Evidence Is Part of the Product

No GlemO, dado sem evidência é insuficiente. A relação fundamental da plataforma é:

```text
DATA
  ↓
CONTEXT
  ↓
EVIDENCE
  ↓
SOURCE
```

A interface deve facilitar a navegação direta entre esses níveis em 1 clique.

---

# 01 — BRAND DNA

## 1.1 Visual Character

GlemO transmite simultaneamente cinco pilares:

### Institutional
Precisão, governança, estabilidade e conformidade regulatória.

### Financial
Rigor em números, liquidez, spreads, colaterais e transações.

### Technical
Transparência, proveniência criptográfica, validação e integridade de *ledger*.

### Premium
Espaço generoso, hierarquia equilibrada, elegância e sobriedade.

### Modern
Interações contemporâneas, feedback em tempo real e interfaces responsivas.

---

## 1.2 What GlemO Is Not

GlemO **não** deve parecer:

- ERP tradicional ou sistema legado cinzento;
- Dashboard administrativo genérico (*admin template*);
- Terminal de trading cripto com poluição de gráficos de alta frequência;
- Banco de varejo massificado;
- SaaS genérico sem densidade financeira;
- Interface excessivamente futurista ou conceitual sem usabilidade real.

---

# 02 — SPECTRUM LINE & BRAND EXPRESSION

## 2.1 A Spectrum Line

A **Spectrum Line** é a assinatura proprietária contínua da marca GlemO:

```css
height: 3px;
background: linear-gradient(
  90deg,
  #0059FF,
  #00BAFF,
  #00FFA2,
  #CCCF0A,
  #FF9A00,
  #F15C00
);
background-size: 200% 100%;
animation: glemoSpectrumLine 16s linear infinite;
```

## 2.2 Spectrum Rule

O Spectrum representa **exclusivamente a identidade e o ecossistema GlemO**.

> **SPECTRUM ≠ UI COLOR PALETTE**  
> **SPECTRUM = BRAND EXPRESSION**

**Não representa:**
- status operacional da plataforma;
- nível de risco financeiro ou de crédito;
- prioridade de tarefas ou urgência de casos;
- categorias semânticas de tabelas.

Portanto:
- **Spectrum Line = Marca institucional contínua.**
- **Nunca utilizar as cores do Spectrum de forma fragmentada para sinalizar estados do sistema.**

## 2.3 Família de Expressões de Marca

O GlemO reconhece formalmente seis modos de expressão visual:

| Expressão | Composição | Contexto de Uso |
|---|---|---|
| **`expression.spectrum`** | Gradiente completo de 6 cores | Momentos de marca, capa do Data Room, divisores institucionais e assinatura. |
| **`expression.spectrumLoop`**| Spectrum animado contínuo (16s) | Linha de topo (*Spectrum Line*) e barras de carregamento de marca. |
| **`expression.cool`** | `#0059FF` → `#00BAFF` → `#00FFA2` | Dados analíticos, inteligência de mercado, relatórios B2B e infraestrutura. |
| **`expression.warm`** | `#FF9A00` → `#F15C00` | Conversão, fluxo de investimento, liquidação de ativos e ações de alto valor. |
| **`expression.ai`** | `#0059FF` → `#08FE9D` | Produtos com inteligência artificial, agentes autônomos e concierge. |
| **`expression.aurora`** | Gradientes suaves com alta opacidade/blur | Fundos ambientais em páginas de abertura, onboarding e telas de login. |

> **Diretriz de Gradientes:** Os pares de gradientes legados (01 a 07) deixam de ser tokens primários do Design System. Designers e engenheiros devem selecionar exclusivamente entre as seis famílias de expressão acima, eliminando decisões arbitrárias.

---

# 03 — COLOR FOUNDATIONS

## 3.1 Princípio Central da Cor

> **"Reduce visual color density without reducing brand expression."**

O GlemO possui uma identidade cromática vibrante, mas **a interface do dia a dia deve ser predominantemente neutra**, utilizando o azul e o laranja como sinais contextuais precisos, e não como ornamento generalizado.

```text
LEVEL 1 — NEUTRAL (75% a 85% da UI)
Superfícies limpas, tipografia nítida, bordas estruturais e tabelas.

LEVEL 2 — CONTEXT COLOR (10% a 15% da UI)
Blue (B2B / Infraestrutura) OU Orange (B2C / Conversão de Investimento).

LEVEL 3 — SEMANTIC STATUS (3% a 5% da UI)
Success, Warning, Danger, Info e Neutral aplicados estritamente por função.

LEVEL 4 — BRAND EXPRESSION (Puntual / Cirúrgico)
Spectrum Line, aberturas de tela, heróis institucionais e marcos de produto.
```

---

## 3.2 Contextos Cromáticos de Aplicação

O ecossistema GlemO opera em quatro contextos cromáticos formais:

```text
┌───────────────────────────────────┬───────────────────────────────────┐
│ B2B / INFRASTRUCTURE              │ B2C / INVESTMENT / CONVERSION     │
│ Contexto: Blue (#0059FF)          │ Contexto: Orange (#F15C00)        │
│                                   │                                   │
│ • Operações de originadores       │ • Portal do investidor de varejo  │
│ • Validação e auditoria técnica   │ • Vitrine de ativos (Marketplace) │
│ • Clearance, Ledger e Compliance  │ • Simulação de ticket e alocação  │
│ • Navegação estrutural e links    │ • Ações comerciais de alta compra │
├───────────────────────────────────┼───────────────────────────────────┤
│ SYSTEM / DATA / EVIDENCE / FORMS  │ SPECIAL BRAND EXPRESSION          │
│ Contexto: Neutral-First           │ Contexto: Spectrum                │
│                                   │                                   │
│ • Tabelas e relatórios densos     │ • Topbar Spectrum Line contínua   │
│ • Formulários e inputs            │ • Capa do Data Room institucional │
│ • Fichas técnicas de colaterais   │ • Certificados e marcos de emissão│
│ • Metadados e evidências          │ • Estados vazios conceituais (D0) │
└───────────────────────────────────┴───────────────────────────────────┘
```

---

## 3.3 Brand Colors (Primitivos de Marca)

A paleta de primitivos do GlemO é imutável:

| Primitive Token | Hex Value | Papel Oficial no Ecossistema |
|---|---|---|
| `color.brand.blue` | `#0059FF` | Âncora institucional: B2B, infraestrutura, governança, dados, navegação e interações empresariais. |
| `color.brand.lightBlue` | `#00BAFF` | Acento informativo: gráficos analíticos, data visualization, highlights e tags informativas. |
| `color.brand.green` | `#00FFA2` | Vitalidade da marca: assinatura de ecossistema, Spectrum e visualizações especiais de crescimento. |
| `color.brand.yellow` | `#CCCF0A` | Luminosidade da marca: Spectrum, transições cromáticas e acentos visuais especiais. |
| `color.brand.lightOrange`| `#FF9A00` | Calor e transição: variações de hover de conversão, acentos dinâmicos e expressão comercial. |
| `color.brand.orange` | `#F15C00` | Energia comercial: B2C, conversão de investimentos, CTA primário de compra e alocação. |

> **Distinção Fundamental:** `color.brand.green` (`#00FFA2`) e `color.brand.yellow` (`#CCCF0A`) pertencem estritamente à identidade de marca. **NÃO são cores semânticas de sucesso ou aviso**, devendo ser mantidas separadas dos estados operacionais da UI.

---

## 3.4 Neutral Scale (Escala Neutra Oficial)

A escala neutra do GlemO foi calibrada para garantir transições tonais contínuas, alto contraste em fundos claros e suporte a superfícies institucionais escuras:

```text
neutral.0     = #FFFFFF   (Branco puro — superfícies padrão de cards e inputs)
neutral.50    = #F7F8F9   (Canvas principal da aplicação / respiro suave)
neutral.100   = #E9EDEE   (Bordas estruturais sutis e divisores de linha)
neutral.200   = #CCD1D7   (Bordas de controle ativas e separadores médios)
neutral.300   = #AEB6C0   (Contornos de inputs em repouso e ícones desabilitados)
neutral.400   = #929EAC   (Placeholders de formulário e textos desativados)
neutral.500   = #7A8491   (Metadata secundária e timestamps)
neutral.600   = #6F7685   (Labels secundárias e cabeçalhos de tabela)
neutral.700   = #5F657D   (Texto muted de alta legibilidade / descrições)
neutral.800   = #3E4654   (Subtítulos e títulos de menor peso)
neutral.900   = #202634   (Texto primário de leitura / títulos fortes / Ink)
neutral.950   = #0D1624   (Superfícies profundas de contraste e footers escuros)
```

---

# 04 — SEMANTIC COLORS

As cores semânticas são **100% independentes das cores de marca**:

| Semantic Token | Base Hex | Light Surface (Fundo / Texto / Borda) | Dark Surface (Fundo / Texto / Borda) | Significado Funcional |
|---|---|---|---|---|
| **`color.semantic.info`** | `#0059FF` | `#EEF5FF` / `#0059FF` / `#BBD8FF` | `#102A56` / `#60A5FA` / `#1D4ED8` | Informação neutra, processos em andamento, links e dicas. |
| **`color.semantic.success`** | `#087F62` | `#EAF8F1` / `#087F62` / `#B2E7D5` | `#06372B` / `#34D399` / `#059669` | Validação concluída, transação liberada, KYC aprovado. |
| **`color.semantic.warning`** | `#B44400` | `#FFF4EC` / `#B44400` / `#FCD5BC` | `#451A03` / `#FBBF24` / `#D97706` | Standby, pendência documental, risco moderado, revisão. |
| **`color.semantic.danger`** | `#B53C3C` | `#FFF0EE` / `#B53C3C` / `#F9C8C4` | `#450A0A` / `#F87171` / `#DC2626` | Bloqueio de conformidade, falha em rail, erro de transação. |
| **`color.semantic.neutral`** | `#5F657D` | `#F1F4F6` / `#5F657D` / `#DCE2E4` | `#1E293B` / `#94A3B8` / `#334155` | Estado inativo, rascunho, metadado arquivado. |

---

# 05 — SURFACE ARCHITECTURE

## 5.1 Light Surface Architecture (Padrão da Plataforma)

```text
surface.canvas    = #F7F8F9   (Fundo global da aplicação / viewport)
surface.default   = #FFFFFF   (Superfície padrão de cartões, formulários e tabelas)
surface.subtle    = #F1F4F6   (Agrupamentos internos, cabeçalhos de tabela e abas inativas)
surface.elevated  = #FFFFFF + elevation.2 (Modais, menus suspensos e gavetas contextuais)
surface.sunken    = #E9EDEE   (Campos de busca embutidos e áreas de código)
surface.overlay   = rgba(7, 18, 38, 0.45) (Cortina de fundo para modais e drawers)
```

## 5.2 Dark / Institutional Surface Architecture (Data Room & Imersão)

```text
surface.dark.canvas   = #071226   (Fundo profundo do Data Room institucional)
surface.dark.default  = #0D1A31   (Superfície principal de leitura e documentos)
surface.dark.subtle   = #12233E   (Sub-painéis e agrupamentos institucionais)
surface.dark.elevated = #182C4D   (Modais e painéis elevados em modo escuro)
surface.dark.sunken   = #050E1D   (Áreas afundadas e contornos de código)
surface.dark.border   = rgba(255, 255, 255, 0.10) (Divisores de baixa luminância)
```

---

# 06 — INTERACTION COLORS & ACTIONS

```text
B2B / Operational Interactions → color.action.business (#0059FF / Blue)
B2C / Investor Conversions    → color.action.investor (#F15C00 / Orange)
Navigation & Text Links       → color.action.business (#0059FF / Blue)
High-Value Conversion CTA     → color.action.investor (#F15C00 / Orange)
Neutral / Secondary Actions   → color.action.secondary (#FFFFFF / Borda #CCD1D7)
Destructive Actions           → color.action.destructive (#B53C3C)
```

---

# 07 — COLOR DO'S AND DON'TS

- **DO:** Estruturar 80% da tela com a escala neutra; usar Azul para B2B e Laranja para B2C; reservar Spectrum para momentos de marca; garantir contraste WCAG AA/AAA.
- **DON'T:** Usar todas as cores da marca juntas; transformar Spectrum em fundo de componentes comuns; tratar verde (#00FFA2) ou amarelo (#CCCF0A) como status operacional; criar hexadecimais soltos sem token.

---

# 08 — TOKEN ARCHITECTURE & MIGRATION STRATEGY

```text
PRIMITIVE (color.brand.* | color.neutral.*)
  ↓
SEMANTIC (color.surface.* | color.content.* | color.border.* | color.semantic.*)
  ↓
DOMAIN (color.action.investor | color.action.business | color.risk.* | color.evidence.*)
  ↓
COMPONENT (component.button.primary.bg | component.table.header.bg)
```

---

# 09 — TYPOGRAPHY

## 9.1 Font Family

A família tipográfica oficial e única do ecossistema GlemO é:

```text
Open Sans, sans-serif
```

> **Proibição Estrita:** NÃO introduzir outras famílias tipográficas (Inter, Geist, Roboto, SF Pro, IBM Plex).

---

## 9.2 Font Weights

- **300 (Light):** Textos editoriais longos e respiros institucionais.
- **400 (Regular):** Corpo de texto padrão e leitura contínua da plataforma.
- **500 (Medium):** Ênfase sutil, metadados financeiros e números secundários.
- **600 (SemiBold):** Headings, labels importantes, agrupamentos e números principais.
- **700 (Bold):** Ênfase forte, ações primárias (CTAs) e números de alto impacto (*Display*).

```text
PROIBIDOS: 800 (Extra Bold), 850, 900 (Black) e regra universal font-weight: 700 !important
```

---

## 9.3 Typography Scale

### DISPLAY
| Token | Size / Line-Height | Weight | Uso Recomendado |
|---|---|---|---|
| `display.xl` | `48px / 56px` | 600 / 700 | Hero principal de produto e marcos |
| `display.lg` | `40px / 48px` | 600 / 700 | Hero secundário e aberturas |
| `display.md` | `36px / 44px` | 600 | Destaques de entrada de módulo |

### HEADINGS
| Token | Size / Line-Height | Weight | Uso Recomendado |
|---|---|---|---|
| `heading.xl` | `32px / 40px` | 600 | Título de página principal e asset em destaque |
| `heading.lg` | `28px / 36px` | 600 | Grandes seções e títulos de módulos operacionais |
| `heading.md` | `24px / 32px` | 600 | Subseções, cabeçalhos de blocos e diálogos |
| `heading.sm` | `20px / 28px` | 600 | Títulos de painéis, tabelas e cards semânticos |
| `heading.xs` | `18px / 24px` | 600 | Pequenos agrupamentos e títulos de widgets |

### BODY
| Token | Size / Line-Height | Weight | Uso Recomendado |
|---|---|---|---|
| `body.lg` | `16px / 24px` | 400 / 500 | Introduções, parágrafos de abertura e teses |
| `body.md` | `14px / 20px` | 400 / 500 | **DEFAULT DA PLATAFORMA** — Principal leitura |
| `body.sm` | `13px / 18px` | 400 / 500 | Metadata, descrições secundárias e tabelas |

### LABELS, CAPTION & OVERLINE
| Token | Size / Line-Height | Weight | Propriedades / Uso |
|---|---|---|---|
| `label.lg` | `14px / 20px` | 600 | Rótulos de formulário e filtros principais |
| `label.md` | `12px / 16px` | 600 | Cabeçalhos de tabela, sub-labels e categorias |
| `caption` | `11px / 16px` | 500 | Timestamps e notas de rodapé (*nunca informação crítica isolada*) |
| `overline` | `11px / 16px` | 600 | `letter-spacing: 0.06em; text-transform: uppercase;` (Eyebrows) |

---

## 9.4 Numeric Scale (Escala Financeira)

| Token | Size / Line-Height | Weight | Uso Recomendado | Exemplo Prático |
|---|---|---|---|---|
| `numeric.xl` | `36px / 44px` | 600 / 700 | Grandes valores financeiros e yield principal | `12.4% APY`, `US$ 184.7M` |
| `numeric.lg` | `28px / 36px` | 600 | Valor de portfólio, TVL e métricas-chave | `US$ 25,000,000` |
| `numeric.md` | `20px / 28px` | 600 | KPIs de dashboard, tickets e destaques de tabela | `US$ 980,000` |
| `numeric.sm` | `14px / 20px` | 500 / 600 | Valores em tabelas, taxas e metadados financeiros | `R$ 50,000.00`, `118% LMO` |

---

# 10 — SPACING SYSTEM

## 10.1 A Base Modular de 4px

| Token | Valor | Aplicação Específica |
|---|---|---|
| `space.1` | `4px` | Micro-espaçamentos internos, gaps de badges e ícones |
| `space.2` | `8px` | Gaps entre linhas de dados, padding interno compacto |
| `space.3` | `12px` | Padding padrão de botões, inputs e células de tabela |
| `space.4` | `16px` | Padding interno de cards, separação entre campos de form |
| `space.5` | `20px` | Gaps intermediários e espaçamento entre grupos |
| `space.6` | `24px` | Margem interna de painéis e respiro entre blocos |
| `space.7` | `28px` | Separação entre títulos e tabelas |
| `space.8` | `32px` | Gaps estruturais entre seções |
| `space.10` | `40px` | Separação vertical entre módulos operacionais |
| `space.12` | `48px` | Margens de página confortáveis |
| `space.16` | `64px` | Espaçamento de seções em páginas de baixa densidade (D0/D1) |
| `space.20` | `80px` | Respiros amplos em heróis e páginas de tese |
| `space.24` | `96px` | Padding superior e inferior de páginas editoriais (D0) |

> **Proibição Estrita de Valores Arbitrários:** Não utilizar valores avulsos fora da grade modular (`7px`, `9px`, `11px`, `13px`, `15px`, `17px`, `22px`, `26px`, `34px`, `56px`, `68px`, `72px`).

---

# 11 — GEOMETRY FOUNDATIONS & PRINCIPLES

## 11.1 Princípios Centrais de Geometria

O GlemO não deve parecer um dashboard construído a partir de *"cards dentro de cards"* em uma grade repetitiva (*prison grid*).

> **"Not every piece of information needs a container."**  
> **"Structure with hierarchy before structure with borders."**

A geometria dos componentes deve transmitir:
- precisão institucional e alinhamento milimétrico;
- estabilidade e segurança de infraestrutura financeira;
- densidade controlada sem acúmulo de caixas;
- hierarquia espacial imediata.

---

# 12 — RADIUS

## 12.1 Escala Oficial de Radius

A escala de arredondamento do GlemO é deliberada, compacta e hierárquica:

| Token | Valor em Pixels | Uso e Função Estrutural |
|---|---|---|
| `geometry.radius.none` | `0px` | Elementos de corte técnico, tabelas integradas e divisores de extremidade. |
| `geometry.radius.xs`   | `4px` | Controles micro-operacionais, tags embutidas e pequenos indicadores de dados. |
| `geometry.radius.sm`   | `8px` | **Padrão de Controles:** Inputs, selects, botões compactos, abas e containers secundários. |
| `geometry.radius.md`   | `12px`| **Padrão de Containers:** Cards semânticos, painéis principais, drawers e modais. |
| `geometry.radius.lg`   | `16px`| **Superfícies de Destaque:** Módulos de herói, grandes painéis e containers de feature. |
| `geometry.radius.xl`   | `24px`| **Expressão Ampla:** Elementos especiais de apresentação e módulos editoriais (D0). |
| `geometry.radius.full` | `9999px`| **Restrito a Pílulas:** Badges semânticos, status chips, avatares e botões circulares. |

> **Diretriz de Aplicação:** A linguagem do GlemO é predominantemente **SM (8px) + MD (12px)**, com **LG (16px)** reservado estritamente para hierarquia superior. Proibido o uso indiscriminado de cantos vivos pontiagudos ou *"pill-everything"*.

---

## 12.2 Mapeamento de Radius por Componente

| Componente de Interface | Token de Radius | Valor Efetivo | Justificativa de Design |
|---|---|---|---|
| **Button (Padrão & Compacto)** | `geometry.radius.sm` | `8px` | Controle tátil limpo sem formato de pílula. |
| **Input / Select / Textarea** | `geometry.radius.sm` | `8px` | Alinhamento com os botões e consistência de formulário. |
| **Badge / Status Chip** | `geometry.radius.full` | `9999px` | Diferenciação semântica imediata de controles interativos. |
| **Tabs / Segmented Control** | `geometry.radius.sm` | `8px` | Agrupamento coeso dentro de barras de controle. |
| **Card Semântico** | `geometry.radius.md` | `12px` | Contorno suave (*Soft SaaS*) sem ocupar espaço excessivo. |
| **Panel Operacional** | `geometry.radius.md` | `12px` | Estrutura estável para tabelas e formulários complexos. |
| **Drawer Contextual / Dialog** | `geometry.radius.md` | `12px` | Encaixe suave em sobreposições (*overlays*). |
| **Table Container** | `geometry.radius.sm` | `8px` | Moldura discreta que não deforma células de dados. |
| **Data Visualization Box** | `geometry.radius.md` | `12px` | Isolamento visual calmo para gráficos e medidores. |
| **Hero / Feature Surface** | `geometry.radius.lg` | `16px` | Hierarquia visual de grande escala na abertura de páginas. |
| **Avatar / User Circle** | `geometry.radius.full` | `9999px` | Representação humana ou institucional circular. |
| **Tooltip / Floating Label** | `geometry.radius.sm` | `8px` | Leveza em caixas flutuantes de suporte. |

---

# 13 — BORDERS & DIVIDERS

## 13.1 Border Scale & Hierarquia

Bordas não devem ser o mecanismo primário de separação visual. O sistema define cinco níveis estritos:

| Token | Light Surface | Dark Surface | Função e Uso Estrutural |
|---|---|---|---|
| **`geometry.border.none`** | `0px solid transparent` | `0px solid transparent` | Separação obtida exclusivamente por espaçamento e contraste. |
| **`geometry.border.subtle`**| `1px solid #E9EDEE` | `1px solid rgba(255,255,255,0.08)` | Divisores internos sutis de linhas de tabelas e listas. |
| **`geometry.border.default`**| `1px solid #CCD1D7` | `1px solid rgba(255,255,255,0.12)` | Contorno estrutural de inputs, selects e cards essenciais. |
| **`geometry.border.strong`** | `1px solid #AEB6C0` | `1px solid rgba(255,255,255,0.22)` | Contornos onde a delimitação de fronteira precisa ser nítida. |
| **`geometry.border.focus`**  | `2px solid #0059FF` | `2px solid #60A5FA` | Anel de foco interativo e seleção de teclado/clique. |

> **Regra de Ouro da Borda:** Se uma seção ou linha de dados for perfeitamente compreensível através de espaçamento modular (`space.*`), hierarquia tipográfica e contraste de superfície, **NÃO adicionar borda**.

---

## 13.2 Dividers (Separadores Lineares)

Dividers operam com propósito específico e independente das bordas de componentes:

- **`geometry.divider.subtle` (`1px solid #E9EDEE` / Dark: `rgba(255,255,255,0.06)`):**  
  Usado exclusivamente para separar grupos de dados dentro da mesma superfície contínua (ex: entre seções de um formulário).
- **`geometry.divider.default` (`1px solid #CCD1D7` / Dark: `rgba(255,255,255,0.12)`):**  
  Usado para marcar a divisão entre regiões estruturalmente distintas da página (ex: cabeçalho de página e corpo de dados).

### Proibições de Dividers:
- **Proibido:** Inserir divider em cada linha de dados sem necessidade funcional.
- **Proibido:** Combinar divider + borda de card + fundo diferente simultaneamente na mesma linha.

---

# 14 — CARD STRATEGY (4 NÍVEIS DE CONTAINER)

Para eliminar o vício de desenvolvimento *"Card-First"*, o GlemO adota uma **estratégia de 4 níveis de contenção**:

```
┌────────────────────────────────────────────────────────────────────────┐
│ LEVEL 0 — NO CONTAINER (Ponto de Partida Obrigatório)                  │
│ Informação apresentada diretamente sobre surface.canvas.               │
│ • Títulos de página, introduções e filtros inline                      │
│ • KPIs simples com tipografia dominante (numeric.xl)                   │
│ • Listas de dados e tabelas sem molduras externas pesadas              │
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 1 — GROUP (Agrupamento por Espaçamento)                          │
│ Informações agrupadas por proximidade tipográfica e space.*.           │
│ • Sem background adicional e sem borda obrigatória                     │
│ • Blocos de metadados e pares de Label + Valor                         │
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 2 — SURFACE (Container Semântico Estrutural)                     │
│ Usado quando existe necessidade real de delimitar um bloco funcional.  │
│ • Utiliza surface.default + geometry.border.subtle + radius.md         │
│ • Fichas técnicas de ativos, painéis de checkout e caixas de formulário│
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 3 — ELEVATED (Superfície Flutuante Contextual)                   │
│ Usado exclusivamente quando o elemento precisa sobrepor o fluxo.       │
│ • Utiliza surface.elevated + geometry.elevation.2 + radius.md          │
│ • Modais, Drawers de evidência, Menus suspensos e Tooltips             │
└────────────────────────────────────────────────────────────────────────┘
```

> **Regra de Decisão:** Todo desenvolvimento de tela **deve começar no LEVEL 0**. Só avance para o Level 2 ou 3 quando houver necessidade funcional comprovada de isolamento espacial.

---

# 15 — ELEVATION & SHADOWS

O GlemO não utiliza sombras pesadas, coloridas ou decorativas (*glow effects*). A elevação comunica profundidade funcional:

| Token | Sombra Efetiva (CSS) | Aplicação Funcional |
|---|---|---|
| **`geometry.elevation.none`** | `none` | **Padrão:** Tabelas, Level 0, Level 1 e Level 2 em repouso. |
| **`geometry.elevation.1`**    | `0 2px 8px rgba(31, 41, 55, 0.04)` | Cards em estado de *hover* sutil e botões secundários ativos. |
| **`geometry.elevation.2`**    | `0 8px 24px rgba(31, 41, 55, 0.08)` | Dropdowns, popovers, menus de contexto e *drawers* leves. |
| **`geometry.elevation.3`**    | `0 16px 48px rgba(7, 18, 38, 0.16)` | Diálogos modais, caixas de confirmação crítica e gavetas completas. |

```text
RELAÇÃO ELEVATION + SURFACE:
• Level 0 → surface.canvas (elevation.none)
• Level 1 → surface.default (elevation.none)
• Level 2 → surface.default / surface.subtle (elevation.none ou elevation.1 em hover)
• Level 3 → surface.elevated (elevation.2 ou elevation.3 + surface.overlay)
```

> **Aviso de Design:** Elevação não substitui hierarquia. Uma sombra pesada nunca deve ser usada para mascarar a falta de clareza tipográfica de um bloco.

---

# 16 — FOCUS & INTERACTION GEOMETRY

## 16.1 Focus-Visible (Acessibilidade Institucional)
O estado de foco para navegação por teclado e controles interativos é padronizado:

```text
geometry.focus.ring   = 2px solid #0059FF (Dark: 2px solid #60A5FA)
geometry.focus.offset = 2px (Espaçamento entre o componente e o anel)
```

- **Requisitos:** O anel de foco deve ser visível instantaneamente, nunca depender apenas de alteração sutil de cor de fundo e não provocar deslocamento de layout (*zero layout shift*).

## 16.2 Geometria de Interação
Estados de interação (*Hover*, *Active*, *Focus*) **NUNCA devem alterar:**
- `border-radius`;
- `width` / `height` / `padding` (tamanho físico);
- `position` (deslocamentos via transform que quebrem alinhamento de texto).

As transições interativas devem alterar exclusivamente **superfície, cor de borda, cor de texto e elevação**.

---

# 17 — DENSITY & GEOMETRY RELATIONSHIP

A geometria adapta-se diretamente à escala de densidade D0–D4:

```text
D0 — EDITORIAL   → Amplo uso de LEVEL 0 e LEVEL 1, radius.lg/xl em heróis, respiro amplo.
D1 — COMFORTABLE → LEVEL 0 predominante com LEVEL 2 pontual em resumos financeiros.
D2 — STANDARD    → DEFAULT DO PRODUTO: Equilíbrio entre LEVEL 1 e LEVEL 2, radius.sm/md.
D3 — OPERATIONAL → LEVEL 2 compacto, tabelas densas, zero sombras decorativas, radius.sm.
D4 — COMPACT     → Máxima eficiência: LEVEL 0 e linhas diretas de tabela, border.subtle, radius.xs/sm.
```

> **Princípio de Densidade:** Maior densidade **NÃO significa mais bordas**. Maior densidade significa melhor organização espacial, alinhamento preciso de dados e eliminação de containers redundantes.

---

# 18 — DATA ROOM GEOMETRIC ALIGNMENT

O Data Room institucional utiliza a arquitetura escura (`surface.dark.*`), mas **compartilha rigorosamente a mesma geometria da plataforma**:

- **Mesmos raios de curvatura:** `radius.sm (8px)` para controles e `radius.md (12px)` para painéis.
- **Mesma escala de elevação:** `elevation.1`, `elevation.2` e `elevation.3`.
- **Mesma hierarquia de bordas:** `border.subtle`, `border.default`, `border.strong`.

> **Dark Surface ≠ Outro Design System.** É a mesma fundação geométrica operando sobre contraste invertido de alta sofisticação.

---

# 19 — GEOMETRY DO'S AND DON'TS

```
┌────────────────────────────────────────────────────────────────────────┐
│ DO (BOAS PRÁTICAS GEOMÉTRICAS)                                         │
├────────────────────────────────────────────────────────────────────────┤
│ ✓ Começar a estruturação de qualquer tela no LEVEL 0 (No container)    │
│ ✓ Utilizar espaçamento e tipografia antes de adicionar bordas          │
│ ✓ Manter a interface predominantemente em radius.sm (8px) e md (12px)  │
│ ✓ Usar radius.full (pílula) exclusivamente em Badges e Status          │
│ ✓ Alinhar tabelas milimetricamente com bordas sutis internas           │
│ ✓ Aplicar anel de foco padronizado (2px com 2px de offset)             │
└────────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────────┐
│ DON'T (PRÁTICAS PROIBIDAS)                                             │
├────────────────────────────────────────────────────────────────────────┤
│ X Encapsular toda métrica ou parágrafo dentro de um card individual    │
│ X Aninhar cards dentro de cards repetidamente (Carditis)               │
│ X Adicionar divisores e bordas em todas as linhas simultaneamente      │
│ X Utilizar sombras pesadas para simular aparência "premium"            │
│ X Modificar tamanhos ou raios de borda durante o estado de hover       │
│ X Criar valores avulsos de radius fora da escala oficial (ex: 5px, 7px)│
└────────────────────────────────────────────────────────────────────────┘
```

---

# 20 — TOKEN ARCHITECTURE & COMPONENT ALIASES (GEOMETRY)

```text
PRIMITIVE GEOMETRY TOKENS:
├── geometry.radius.none | xs | sm | md | lg | xl | full
├── geometry.border.none | subtle | default | strong | focus
├── geometry.divider.subtle | default
├── geometry.elevation.none | 1 | 2 | 3
└── geometry.focus.ring | offset

COMPONENT ALIASES (Consumo semântico direto):
├── component.button.radius        → geometry.radius.sm (8px)
├── component.input.radius         → geometry.radius.sm (8px)
├── component.badge.radius         → geometry.radius.full (9999px)
├── component.card.radius          → geometry.radius.md (12px)
├── component.panel.radius         → geometry.radius.md (12px)
├── component.drawer.radius        → geometry.radius.md (12px)
├── component.table.border         → geometry.border.subtle
├── component.card.elevation       → geometry.elevation.none (hover: elevation.1)
└── component.modal.elevation      → geometry.elevation.3
```

---

# 21 — GEOMETRY MIGRATION STRATEGY

O processo de migração dos estilos legados para a nova geometria seguirá 3 passos estritos:

1. **Migração de Radius:**  
   Mapear os valores dispersos (`5px`, `6px`, `7px`, `8px`, `10px`, `12px`, `14px`, `16px`) para `radius.sm (8px)` em controles e `radius.md (12px)` em painéis, eliminando classes redundantes.
2. **Migração de Bordas & Dividers:**  
   Identificar containers redundantes (*Level 0 vs Level 2*), removendo bordas desnecessárias em listas e substituindo por `geometry.border.subtle`.
3. **Migração de Elevação:**  
   Substituir sombras pesadas antigas (`--shadow: 0 18px 50px rgba(61,42,21,.08)`) pelos níveis funcionais `elevation.none` a `elevation.3`.

---

# 22 — DENSITY SYSTEM & TYPOGRAPHY GUIDANCE

O GlemO opera em 5 níveis explícitos de densidade:

- **D0 — Editorial:** Spacing amplo (`space.8` a `space.24`), `display.xl/lg/md`, `heading.xl/lg`, `body.lg`, Level 0/1.
- **D1 — Comfortable:** Spacing confortável (`space.4` a `space.8`), `heading.lg/md`, `body.lg/md`, `numeric.lg/md`.
- **D2 — Standard (DEFAULT):** Spacing equilibrado (`space.3` a `space.6`), `heading.md/sm`, `body.md/sm`, `numeric.md/sm`.
- **D3 — Operational:** Spacing compacto (`space.2` a `space.4`), tabelas densas, `heading.sm/xs`, `body.md/sm`, `numeric.md/sm`.
- **D4 — Compact:** Máxima eficiência (`space.1` a `space.3`), `body.sm`, `label.md`, `numeric.sm`, Level 0/linhas diretas.

---

# 23 — INFORMATION HIERARCHY (SIGNAL → CONTEXT → SOURCE)

```
┌────────────────────────────────────────────────────────────────────────┐
│ LEVEL 1 — SIGNAL                                                       │
│ "O que preciso perceber agora?"                                        │
│ Exemplo: 12.4% APY  ·  US$ 2.4M  ·  Status: Standby                   │
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 2 — CONTEXT                                                      │
│ "O que isso significa?"                                                │
│ Exemplo: Crédito Imobiliário · Prazo: 24 meses · LTV: 52% · Atlas Bank │
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 3 — SOURCE                                                       │
│ "De onde veio a evidência?"                                            │
│ Exemplo: Parecer Valida S.A. · Hash no Ledger · Contrato CCB (PDF)     │
└────────────────────────────────────────────────────────────────────────┘
```

---

# 24 — MICRO-INDICATORS & SEMANTIC ROLES
## BADGE · STATUS · TAG · LABEL

Para eliminar a ambiguidade identificada no código legado (onde dados, classes, prazos e estados eram todos tratados genericamente como `.badge`), o GlemO formaliza quatro papéis semânticos e visuais estritamente segregados:

```
┌────────────────────────────────────────────────────────────────────────┐
│ OS 4 PAPÉIS DE MICRO-INDICAÇÃO DO GLEMO                                │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ Conceito          │ Função Semântica  │ Exemplos de Uso                │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ 1. BADGE          │ CLASSIFICAÇÃO     │ Senior, Mezanino, Pool,        │
│                   │ (Categoria/Tipo)  │ Institucional, Varejo, CRI     │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ 2. STATUS         │ ESTADO            │ Verified, Pending, Standby,    │
│                   │ (Ciclo de Vida)   │ Approved, Blocked, Failed      │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ 3. TAG            │ ATRIBUTO          │ São Paulo, 24 meses, LTV 52%,  │
│                   │ (Metadado/Filtro) │ Yield Fixo, Ethereum, Base     │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ 4. LABEL          │ INFORMAÇÃO        │ Origem:, Volume:, Validador:,  │
│                   │ AUXILIAR          │ Ticket Mínimo:, Prazo:         │
└───────────────────┴───────────────────┴────────────────────────────────┘
```

---

### 24.1 BADGE → Classificação
- **Função:** Identificar a categoria estrutural, segmento de audiência ou classificação de risco de um ativo.
- **Geometria:** `geometry.radius.full` (9999px) ou `geometry.radius.sm` (8px).
- **Tratamento Visual:** Fundo sutil neutro ou colorido por contexto (`surface.subtle` ou `color.semantic.info.subtle`), texto `label.md` (Open Sans 600), sem ícone de estado operacional.
- **Exemplos:** `[ Senior Tranche ]`, `[ Institucional ]`, `[ Standalone Asset ]`, `[ Real Estate Credit ]`.

---

### 24.2 STATUS → Estado
- **Função:** Comunicar o estado operacional, conformidade regulatória ou ciclo de vida de uma transação em tempo real.
- **Geometria:** `geometry.radius.full` (9999px).
- **Tratamento Visual:** Combinação obrigatória de **Cor Semântica + Ícone de Estado + Rótulo Textual**.
- **Tokens Semânticos:** Consome estritamente `color.semantic.success`, `color.semantic.warning`, `color.semantic.danger`, `color.semantic.info` ou `color.semantic.neutral`.
- **Exemplos:** `[ ● Verified ]`, `[ ⏸ Standby ]`, `[ ⚑ Review Required ]`, `[ ✕ Blocked ]`.

---

### 24.3 TAG → Atributo
- **Função:** Exibir características técnicas, dimensões contextuais, prazos, colaterais ou filtros ativos de busca.
- **Geometria:** `geometry.radius.sm` (8px) — formato retangular suave (*Soft SaaS*), **nunca pílula de 9999px**.
- **Tratamento Visual:** Fundo neutro discreto (`neutral.100` / `#E9EDEE`), borda `geometry.border.subtle`, texto em `content.secondary` (`#4A5662` ou `neutral.600`), peso 500/600. Não utiliza cores de status chamativas.
- **Exemplos:** `[ 24 meses ]`, `[ LTV: 52% ]`, `[ SP - Brasil ]`, `[ Base Rail ]`.

---

### 24.4 LABEL → Informação Auxiliar
- **Função:** Nomear campos de formulários, colunas de tabelas, eixos de gráficos e dar suporte a valores numéricos.
- **Geometria:** **Nenhum container (Level 0)** — sem caixa, sem borda e sem fundo.
- **Tratamento Visual:** Tipografia direta `label.lg` (14px/20px/600) ou `label.md` (12px/16px/600) na cor `content.tertiary` (`#5F657D` / `neutral.700`) ou `content.secondary`.
- **Exemplos:** `Origem`, `Taxa de Emissão`, `Valor da Cota`, `Data de Vencimento`.

---

### 24.5 Resumo de Aplicação
- **Proibição Estrita:** Nunca encapsular atributos comuns (`Tag`) ou rótulos auxiliares (`Label`) em pílulas coloridas de `Status`.
- **Regra de Ouro:** Se a informação for descritiva, utilize tipografia limpa (`Label` ou `Tag`); se indicar classificação de produto, use `Badge`; se indicar o estado de um processo, use `Status`.

---

# 25 — CORE COMPONENTS ARCHITECTURE & PHILOSOPHY

## 25.1 Informação Antes do Componente (Information-First)
No GlemO Design System v2.0, **o dado e a hierarquia orientam a interface, não o catálogo de componentes**. Os componentes não existem como blocos autônomos decorativos; sua função exclusiva é estruturar a leitura, dar previsibilidade à ação e permitir a navegação de evidências (*Signal → Context → Evidence → Source*) com o menor custo cognitivo possível.

```text
CONCEITO DE DESIGN TRADICIONAL (COMPONENT-FIRST):
  "Temos um card, um badge e um botão. Onde colocamos os dados dentro deles?"
  
CONCEITO GLEMO v2.0 (INFORMATION-FIRST):
  "Qual é o dado principal? Qual o contexto necessário? Qual a próxima ação?
   Qual o menor nível de contenção necessário para estruturar essa decisão?"
```

## 25.2 Princípios de Arquitetura de Componentes
1. **Menos Variantes Semânticas, Maior Hierarquia:** Componentes evitam proliferar variantes visuais sem distinção funcional clara.
2. **Previsibilidade Geométrica:** Todos os controles interativos compartilham tokens de raio (`radius.sm` = 8px) e alturas verticais modulares (32px, 40px, 48px).
3. **Contenção Estrita:** Cards e contêineres só existem para isolar contextos independentes ou empacotar dados heterogêneos.
4. **Sem Layout Shift:** Nenhum estado interativo (hover, active, focus, loading) pode alterar as dimensões de caixa do componente ou deslocar elementos vizinhos.
5. **Acessibilidade Universal:** Contraste mínimo WCAG AA (4.5:1 para texto normal, 3:1 para controles e texto grande), indicadores redundantes de cor + ícone/texto, e anéis de foco nativos visíveis.

---

# 26 — GLOBAL STATES TAXONOMY

Todos os componentes interativos do GlemO implementam uma máquina de estados visual e comportamental padronizada:

```
┌────────────────────────────────────────────────────────────────────────┐
│ TAXONOMIA GLOBAL DE ESTADOS INTERATIVOS                                │
├─────────────────┬──────────────────────────────────────────────────────┤
│ Estado          │ Comportamento Visual & Funcional                     │
├─────────────────┼──────────────────────────────────────────────────────┤
│ default         │ Repouso; contraste de base nítido e estável.        │
│ hover           │ Feedback imediato de cursor; ajuste de brilho/fundo  │
│                 │ sem deslocamento de layout (0px shift).              │
│ active          │ Pressionamento físico; scale suave (0.98) ou fundo   │
│                 │ escurecido em 4%.                                    │
│ focus-visible   │ Anel de foco acessível (2px cor de ação, 2px offset).│
│                 │ Ativado exclusivamente via teclado/a11y.             │
│ selected        │ Indicador persistente de seleção ou filtro ativo.    │
│ disabled        │ Opacidade 0.45, `cursor: not-allowed`, sem hover.    │
│ loading         │ Preservação de dimensões; spinner sutil ou shimmer.  │
│ error           │ Borda e texto semântico de erro (`semantic.danger`). │
│ success         │ Confirmação semântica positiva (`semantic.success`). │
└─────────────────┴──────────────────────────────────────────────────────┘
```

---

# 27 — COMPONENT SPECIFICATIONS (14 CORE COMPONENTS)

---

### 27.1 BUTTON (`component.button`)

#### 1. Purpose / Semantic Role
Disparar uma ação imediata, transição de estado ou submissão no sistema.

#### 2. Anatomy
```text
┌─────────────────────────────────────────────────────────┐
│ [Leading Icon]  ·  Button Label Text  ·  [Trailing Icon] │
│                    (ou Loading Spinner)                 │
└─────────────────────────────────────────────────────────┘
```

#### 3. Variants
- **`primary`:** Ação principal do bloco de decisão. Fundo colorido contextual (Azul B2B `#0059FF` ou Laranja B2C `#F15C00`), texto branco. **Regra de Ouro: Máximo 1 botão primário por viewport/bloco de decisão.**
- **`secondary`:** Ação de suporte ou alternativa neutra. Fundo `surface.subtle` (`#F1F4F6`) ou `surface.default` (`#FFFFFF`) com borda `border.default` (`neutral.200`), texto `content.primary` (`#202634`).
- **`tertiary` (Ghost):** Ação secundária ou utilitária sem ruído visual. Fundo transparente, sem borda, texto `content.secondary` (`#4A5662`). Hover adiciona fundo `surface.subtle`.
- **`destructive`:** Ações irreversíveis (excluir custódia, revogar cotação). Fundo `color.semantic.danger` (`#B53C3C`), texto branco.
- **`icon`:** Botão quadrado (1:1) contendo apenas ícone com `aria-label` obrigatório. Variantes ghost ou secondary.

#### 4. Sizes & Dimensional Tokens
| Tamanho | Altura | Padding Horizontal | Padding Vertical | Tipografia | Ícone |
|---|---|---|---|---|---|
| **`sm`** | 32px | `space.3` (12px) | `space.1` (4px) | `label.md` (12px / 600) | 14px |
| **`md` (Default)** | 40px | `space.4` (16px) | `space.2` (8px) | `body.sm` (13px / 600) | 16px |
| **`lg`** | 48px | `space.6` (24px) | `space.3` (12px) | `body.md` (14px / 600) | 20px |

#### 5. States & Visual Behavior
- **Default:** Cor de base definida pela variante.
- **Hover:** Transição de fundo `150ms ease-in-out`. Primário escurece 6%; Secundário/Ghost ganha fundo `neutral.100`.
- **Active:** Scale sutil `transform: scale(0.98)` para feedback tátil instantâneo.
- **Focus-Visible:** `outline: var(--focus-ring); outline-offset: var(--focus-offset);`.
- **Disabled:** `opacity: 0.45; cursor: not-allowed; pointer-events: none;`.
- **Loading:** Texto oculto ou reduzido, spinner centralizado. A largura do botão é travada para evitar salto visual.

#### 6. Color Behavior
- **B2B / Infraestrutura:** `--button-primary-bg: var(--color-action-business);` (`#0059FF`).
- **B2C / Conversão de Investimento:** `--button-primary-bg: var(--color-action-investor);` (`#F15C00`).

#### 7. Geometry Tokens
- **Radius:** `geometry.radius.sm` (8px). Botões nunca utilizam pílula (9999px) ou cantos vivos (0px).
- **Border:** `none` (primário/destructive/tertiary), `geometry.border.default` (secondary).
- **Elevation:** `elevation.none` (repouso e hover). Sem sombras projetadas decorativas.

#### 8. Typography Tokens
- **Font-Family:** `var(--font-family-sans)`.
- **Weight:** `var(--font-weight-semibold)` (600).

#### 9. Spacing Tokens
- **Gap entre Ícone e Rótulo:** `space.2` (8px).

#### 10. Density Behavior
- **D0/D1:** `size.lg` (48px) ou `size.md` (40px).
- **D2 (Padrão):** `size.md` (40px).
- **D3/D4:** `size.sm` (32px) para barras de ferramentas e ações em linha de tabela.

#### 11. Accessibility (a11y)
- Ratio de contraste >= 4.5:1 em todos os estados.
- Suporte a tecla `Enter` e `Space`.
- Botões de ícone exigem `aria-label` descritivo.
- Botão em loading recebe `aria-busy="true"`.

#### 12. Responsive Behavior
- Em mobile (< 640px), botões em rodapés de formulários expandem para `width: 100%` empilhados verticalmente.

#### 13. When to Use
- Disparar formulários, confirmar transações, abrir modais, navegar fluxos de decisão.

#### 14. When NOT to Use
- Para navegação pura de links externos ou leitura de documentos (usar `Link` ou `tertiary button` com ícone de saída).

#### 15. Anti-Patterns
- ❌ Colocar dois botões primários lado a lado disputando atenção.
- ❌ Usar gradientes Spectrum multicoloridos dentro do botão.
- ❌ Variar a altura do botão fora da grade (ex: 37px ou 45px).

---

### 27.2 INPUT (`component.input`)

#### 1. Purpose / Semantic Role
Permitir a entrada e edição de dados textuais, numéricos e parâmetros financeiros.

#### 2. Anatomy
```text
┌──────────────────────────────────────────────────────────────┐
│ Field Label Text *                       [Optional / Helper] │
├──────────────────────────────────────────────────────────────┤
│ [Leading Addon/Icon]  |  Input Value / Placeholder  | [Trailing Icon]│
├──────────────────────────────────────────────────────────────┤
│ ℹ Helper text / ⚠ Error message description                   │
└──────────────────────────────────────────────────────────────┘
```

#### 3. Hierarchy & Distinction
- **Label:** Identificador formal do dado (Open Sans 600, `content.primary`).
- **Placeholder:** Exemplo transitório de preenchimento (`content.tertiary`), nunca substitui o label.
- **Helper Text:** Orientação preventiva de preenchimento (`content.secondary`).
- **Error Text:** Diagnóstico corretivo imediato (`color.semantic.danger`).

#### 4. Sizes & Dimensional Tokens
| Tamanho | Altura | Padding Horizontal | Tipografia | Altura do Ícone |
|---|---|---|---|---|
| **`sm`** | 32px | `space.2` (8px) | `body.sm` (13px) | 14px |
| **`md` (Default)** | 40px | `space.3` (12px) | `body.md` (14px) | 16px |
| **`lg`** | 48px | `space.4` (16px) | `body.lg` (16px) | 18px |

#### 5. States & Visual Behavior
- **Default:** Fundo `surface.default` (`#FFFFFF`), borda `geometry.border.default` (`neutral.200`).
- **Hover:** Borda transita para `geometry.border.strong` (`neutral.300`).
- **Focus:** Borda ativa `var(--border-focus)` (`#0059FF`) + anel de foco sutil `box-shadow: 0 0 0 3px rgba(0, 89, 255, 0.15)`.
- **Filled:** Texto nítido em `content.primary` (`#202634`).
- **Disabled:** Fundo `surface.sunken` (`#E9EDEE`), texto `content.disabled` (`neutral.400`), borda `border.subtle`.
- **Error:** Borda `var(--color-semantic-danger)` (`#B53C3C`), foco com anel avermelhado (`rgba(181, 60, 60, 0.15)`), mensagem descritiva de erro abaixo.
- **Success:** Borda `var(--color-semantic-success)` (`#087F62`) com ícone de confirmação à direita.

#### 6. Color Behavior
- Fundo padrão sempre neutro limpo (`surface.default`).
- Inputs financeiros (ex: aporte, cotação) utilizam tipografia numérica tabular alinhada à direita quando aplicável.

#### 7. Geometry Tokens
- **Radius:** `geometry.radius.sm` (8px).
- **Border:** `1px solid var(--color-neutral-200)`.

#### 8. Typography Tokens
- **Label:** `label.lg` (14px / 600) ou `label.md` (12px / 600).
- **Input Text:** `body.md` (14px / 400).
- **Helper/Error:** `caption` (11px / 16px / 400).

#### 9. Spacing Tokens
- **Distância Label → Field:** `space.1` (4px).
- **Distância Field → Helper/Error:** `space.1` (4px).

#### 10. Density Behavior
- **D0/D1:** `size.lg` (48px) em fluxos de checkout ou simulação rápida de investimento.
- **D2:** `size.md` (40px) para formulários cadastrais e operações institucionais.
- **D3/D4:** `size.sm` (32px) para filtros em cabeçalho de tabela e parâmetros operacionais.

#### 11. Accessibility (a11y)
- Todo input possui tag `<label>` associada via `id`/`htmlFor`.
- Mensagem de erro vinculada via `aria-describedby` e input sinalizado com `aria-invalid="true"`.

#### 12. Responsive Behavior
- Em mobile, o teclado numérico virtual é acionado via `inputmode="decimal"` ou `inputmode="numeric"`.

#### 13. When to Use
- Captura de strings, números, chaves públicas, endereços de custódia e valores financeiros.

#### 14. When NOT to Use
- Para seleções de opções fechadas predeterminadas (usar `Select` ou `RadioGroup`).

#### 15. Anti-Patterns
- ❌ Omitir o rótulo superior e depender exclusivamente de placeholder.
- ❌ Mudar o tamanho do input durante o foco.
- ❌ Exibir mensagens de erro genéricas sem instrução de correção (ex: apenas "Erro").

---

### 27.3 SELECT (`component.select`)

#### 1. Purpose / Semantic Role
Permitir a seleção de uma ou múltiplas opções a partir de uma lista fechada estruturada.

#### 2. Anatomy
```text
┌──────────────────────────────────────────────────────────────┐
│ Field Label Text                                             │
├──────────────────────────────────────────────────────────────┤
│ [Leading Icon]  |  Selected Option Label         | [Chevron ▼] │
├──────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────────────┐ │
│ │ Option Item 01                                           │ │
│ │ Option Item 02 (Hover / Active)                          │ │
│ │ Option Item 03                                    [✓]    │ │
│ └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

#### 3. Variants
- **`standard`:** Select nativo ou dropdown customizado para formulários institucionais.
- **`filter`:** Select compacto sem borda pesada para cabeçalhos de tabela e barras de busca.

#### 4. Sizes & Dimensional Tokens
- Exatamente equivalentes ao `Input`: `sm` (32px), `md` (40px), `lg` (48px).

#### 5. States & Visual Behavior
- **Closed:** Idêntico ao estado `default` do Input.
- **Open:** Borda de foco ativa, chevron rotacionado em 180 graus (`transform: rotate(180deg)`), menu flutuante ancorado com `elevation.2` e `radius.sm`.
- **Option Item Hover:** Fundo `surface.subtle` (`#F1F4F6`), texto `content.primary`.
- **Option Item Selected:** Fundo `semantic.info.subtle` (`#EEF5FF`), texto `brand.blue`, ícone de check `✓` alinhado à direita.

#### 6. Geometry & Elevation
- **Trigger Radius:** `geometry.radius.sm` (8px).
- **Dropdown Radius:** `geometry.radius.sm` (8px).
- **Dropdown Elevation:** `geometry.elevation.2` (sombra flutuante controlada).

#### 7. Accessibility
- Suporte ARIA `role="listbox"`, `aria-expanded`, navegação completa por setas (`ArrowUp`/`ArrowDown`) e `Enter`/`Escape`.

---

### 27.4 TEXTAREA (`component.textarea`)

#### 1. Purpose / Semantic Role
Entrada de textos extensos multilinhas (ex: parecer jurídico, termos contratuais, notas de auditoria, justificativas de compliance).

#### 2. Anatomy
```text
┌──────────────────────────────────────────────────────────────┐
│ Field Label Text                                             │
├──────────────────────────────────────────────────────────────┤
│ Textarea Content Area (Multi-line)                           │
│                                                              │
│                                             [Resize Handle ◿]│
├──────────────────────────────────────────────────────────────┤
│ ℹ Helper text                            142 / 500 caracteres│
└──────────────────────────────────────────────────────────────┘
```

#### 3. Dimensional Tokens & Rules
- **Padding:** `space.3` (12px).
- **Alturas Mínimas:** `sm` (88px), `md` (120px), `lg` (160px).
- **Resize:** Estritamente `resize: vertical;` (o redimensionamento horizontal é proibido para evitar quebra de layout).

---

### 27.5 TABS (`component.tabs`)

#### 1. Purpose / Semantic Role
Alternar entre visões, dimensões contextuais ou agrupamentos de dados dentro do mesmo nível hierárquico, sem recarregar a página.

#### 2. Anatomy
```text
TAB DEFAULT (Underline):
┌──────────────────────────────────────────────────────────────┐
│  Overview     [ Performance ]     Financials     Ledger Logs │
│  ────────     ═══════════════                                │
└──────────────────────────────────────────────────────────────┘

TAB SEGMENTED (Pill Container):
┌──────────────────────────────────────────────────────────────┐
│ ┌──────────────┬───────────────────┬───────────────────────┐ │
│ │   Overview   │  [ Performance ]  │      Financials       │ │
│ └──────────────┴───────────────────┴───────────────────────┘ │
└──────────────────────────────────────────────────────────────┘
```

#### 3. Variants
- **`tabs.default` (Underline):** Fundo transparente, abas alinhadas em linha. A aba ativa possui indicador inferior de 2px na cor de contexto (`brand.blue` ou `brand.orange`) e texto com peso 600.
- **`tabs.segmented` (Contained):** Contêiner de fundo `surface.subtle` (`#F1F4F6`), com raio `radius.sm`. A aba selecionada possui fundo `surface.default` (`#FFFFFF`), raio `radius.xs`, sombra `elevation.1` e texto `content.primary`.

#### 4. States
- **Default:** Texto `content.secondary` (`#4A5662`), peso 500.
- **Hover:** Texto transita para `content.primary` (`#202634`), fundo ganha microdestaque.
- **Selected:** Indicador visual ativo e peso 600.
- **Focus-Visible:** Anel de foco acessível ao redor da aba selecionada.
- **Disabled:** Opacidade 0.45, clique desabilitado.

#### 5. Rules & Responsive Behavior
- **Proibição de Quebra:** As abas nunca devem quebrar em múltiplas linhas (*multi-row wrap*). Em telas menores ou com excesso de abas, implementar scroll horizontal com máscara de fade lateral ou menu dropdown seletor.
- **Não Substitui Navegação Global:** Tabs são para alternância de conteúdo local, não para rotas de primeiro nível da aplicação.

---

### 27.6 BADGE (`component.badge`)

#### 1. Purpose / Semantic Role
**Classificação e Categorização** estática ou estrutural de um ativo, tranche ou perfil de investidor.

#### 2. Anatomy & Hierarchy
```text
┌────────────────────────────────┐
│ [Badge Category Text]          │  ex: [ Senior Tranche ]
└────────────────────────────────┘
```

#### 3. Visual Treatment & Geometry
- **Formato:** Pílula (`geometry.radius.full`) ou Cantos Suaves (`geometry.radius.sm`).
- **Cores:** Fundo neutro discreto (`surface.subtle` / `neutral.100`) ou sutil contextual (`info.subtle`).
- **Tipografia:** `label.md` (12px / 16px / 600) ou `label.sm` (11px / 16px / 600).
- **Sem Ícones Operacionais:** Badges de classificação não devem conter ícones de estado em tempo real (como spinners ou pontos piscantes).

---

### 27.7 STATUS (`component.status`)

#### 1. Purpose / Semantic Role
Comunicar o **estado de ciclo de vida**, conformidade operacional ou situação em tempo real de uma transação ou ativo.

#### 2. Anatomy
```text
┌────────────────────────────────┐
│ (● Icon/Dot)  Status Label Text │  ex: (● Verified)  (⏸ Standby)
└────────────────────────────────┘
```

#### 3. Mandatory Rule: Triple Channel
O Status deve **sempre combinar três canais perceptivos**:
1. **Cor Semântica** (Verde, Laranja, Vermelho, Azul, Neutro).
2. **Ícone / Glifo de Estado** (Ponto, Check, Pausa, Alerta, Bloqueio).
3. **Rótulo Textual Claro** (Ex: "Verified", "Standby", "Review Required", "Blocked").

#### 4. Semantic Mapping Table
| Status | Cor Semântica | Fundo Sutil | Borda | Ícone | Exemplo de Aplicação |
|---|---|---|---|---|---|
| **Success** | `#087F62` | `#EAF8F1` | `#B2E7D5` | `●` ou `✓` | Verified, Active, Settled, Approved |
| **Warning** | `#B44400` | `#FFF4EC` | `#FCD5BC` | `⏸` ou `⚠` | Standby, Review Required, In Progress |
| **Danger** | `#B53C3C` | `#FFF0EE` | `#F9C8C4` | `✕` ou `⚑` | Blocked, Defaulted, KYC Rejected |
| **Info** | `#0059FF` | `#EEF5FF` | `#BBD8FF` | `ℹ` ou `◌` | Processing, Pending Oracle, Queued |
| **Neutral** | `#5F657D` | `#F1F4F6` | `#DCE2E4` | `○` | Draft, Inactive, Archived |

---

### 27.8 TAG (`component.tag`)

#### 1. Purpose / Semantic Role
Exibir **atributos técnicos, metadados, prazos, colaterais e filtros ativos**.

#### 2. Anatomy
```text
┌──────────────────────────────────────┐
│ Tag Attribute Text     [✕ Dismiss]   │  ex: [ 24 meses ]  [ SP - Brasil ]
└──────────────────────────────────────┘
```

#### 3. Visual Treatment & Geometry
- **Formato:** Retangular com cantos suaves (`geometry.radius.sm` = 8px). **Nunca pílula de 9999px.**
- **Fundo:** `surface.subtle` (`#F1F4F6`) ou `neutral.100` (`#E9EDEE`).
- **Borda:** `geometry.border.subtle` (`1px solid var(--color-neutral-100)`).
- **Tipografia:** `label.md` (12px / 500) em `content.secondary` (`#4A5662`).
- **Ação Opcional:** Ícone de remoção `✕` quando atuar como filtro ativo de busca.

---

### 27.9 LABEL (`component.label`)

#### 1. Purpose / Semantic Role
Identificar campos, títulos de colunas, eixos de gráficos e parâmetros de suporte.

#### 2. Architecture & Geometry
- **Level 0 (Sem Container):** Sem caixa, sem borda, sem fundo e sem raio de curvatura.
- **Tipografia:** `label.lg` (14px / 600), `label.md` (12px / 600) ou `caption` (11px / 500).
- **Cor:** `content.tertiary` (`#5F657D` / `neutral.700`) ou `content.secondary`.
- **Regra de Ouro:** Não encapsular rótulos informativos dentro de caixas cinzas ou badges.

---

### 27.10 TABLE (`component.table`) — FIRST-CLASS INSTITUTIONAL CORE

#### 1. Purpose / Semantic Role
Apresentar grandes volumes de dados tabulares estruturados (ativos, carteiras, ordens, hashes, transações) com precisão financeira, alta densidade e capacidade de auditoria.

#### 2. Anatomy
```text
┌────────────────────────────────────────────────────────────────────────┐
│ TABLE CONTAINER (Level 1 ou Level 2)                                   │
├────────────────────────────────────────────────────────────────────────┤
│ [Header] ATIVO        ORIGEM     TRANCHE   VALOR (US$)    STATUS   AÇÃO│
├────────────────────────────────────────────────────────────────────────┤
│ [Row 1]  CRI Alpha    Atlas SP   Senior    12,450,000.00  ● Active  [⋯]│
│ [Row 2]  Debênture B  Valida     Mezanino   4,120,500.00  ⏸ Standby [⋯]│
│ [Row 3]  Recebível C  FinTech    Senior       850,000.00  ✓ Settled [⋯]│
├────────────────────────────────────────────────────────────────────────┤
│ [Footer / Pagination] Exibindo 1–10 de 142 registros      [<] 1 2 3 [>]│
└────────────────────────────────────────────────────────────────────────┘
```

#### 3. Alignment & Numeric Rules
- **Texto e Categorias:** Alinhamento à **esquerda**.
- **Valores Financeiros, Métricas e Percentuais:** Alinhamento estrito à **direita** com tipografia tabular (`font-variant-numeric: tabular-nums;`).
- **Status e Microindicadores:** Alinhamento à esquerda ou centralizado.
- **Ações Rápidas (menu de contexto, botão de detalhes):** Alinhamento à **direita**.

#### 4. Structural Tokens
- **Header (`th`):** Altura 36px/40px, tipografia `label.md` (12px / 600 / `content.tertiary`), fundo `surface.subtle` ou transparente, divisor inferior `divider.default`.
- **Body Row (`tr`):** Altura 44px (D3/D4) a 52px (D2), divisor entre linhas `divider.subtle`.
- **Hover State:** Fundo da linha inteira transita para `surface.subtle` (`#F1F4F6`), com cursor `pointer` se a linha for navegável.
- **Selected Row:** Fundo `semantic.info.subtle` (`#EEF5FF`) com borda lateral esquerda de 3px `var(--color-brand-blue)`.

#### 5. Table vs. Card Decision Framework
```text
SELECIONE TABLE QUANDO:
  ✓ Houver 3 ou mais registros homogêneos.
  ✓ O usuário precisar comparar valores numéricos verticalmente.
  ✓ Houver necessidade de ordenação por colunas ou exportação de dados.
  ✓ O objetivo for densidade operacional D2, D3 ou D4.

SELECIONE CARDS QUANDO:
  ✓ Houver 1 ou 2 registros de destaque independente (ex: Active Pool Spotlight).
  ✓ Cada item possuir uma estrutura de dados altamente heterogênea.
  ✓ A visualização for puramente promocional ou de onboarding (D0).
```

#### 6. Progressive Disclosure em Tabelas
- **Expandable Sub-rows:** Revelam parâmetros operacionais adicionais sem sair da tabela.
- **Click na Linha:** Dispara um **Drawer** lateral com a árvore completa de evidências e contratos (*Signal → Context → Evidence → Source*).

---

### 27.11 DRAWER / SIDE PANEL (`component.drawer`)

#### 1. Purpose / Semantic Role
**Principal mecanismo de Progressive Disclosure do GlemO.** Permite aprofundamento analítico imediato, auditoria de fontes, inspeção de hashes e leitura de contratos sem remover o usuário do contexto da tela principal.

#### 2. Anatomy
```text
┌───────────────────────────────────────────────────┬──────────────────┐
│ MAIN PAGE VIEWPORT (Contexto Preservado)          │ DRAWER PANEL     │
│                                                   │ ┌──────────────┐ │
│                                                   │ │ Header & ✕   │ │
│                                                   │ ├──────────────┤ │
│                                                   │ │ Context      │ │
│                                                   │ │ Evidence     │ │
│                                                   │ │ Ledger Log   │ │
│                                                   │ │ Document PDF │ │
│                                                   │ ├──────────────┤ │
│                                                   │ │ Action CTA   │ │
│                                                   │ └──────────────┘ │
└───────────────────────────────────────────────────┴──────────────────┘
```

#### 3. Dimensional Tokens & Behavior
- **Larguras Padronizadas:**
  - **`sm` (440px):** Detalhes de transação rápida, resumo de KYC.
  - **`md` (560px - Padrão):** Dossiê de ativo, auditoria de garantias e tranches.
  - **`lg` (720px):** Visualizador de contrato CCB, árvore de ledger completa.
- **Backdrop Overlay:** `surface.overlay` (`rgba(7, 18, 38, 0.45)` com `backdrop-filter: blur(2px)`).
- **Elevation:** `geometry.elevation.3` (painel suspenso de alto nível).
- **Animação de Entrada:** `transform: translateX(0); transition: 250ms cubic-bezier(0.16, 1, 0.3, 1);`.

#### 4. Accessibility
- Foco automático capturado dentro do Drawer ao abrir (`focus trap`).
- Fechamento imediato com tecla `Escape` ou clique no backdrop.

---

### 27.12 DIALOG / MODAL (`component.dialog`)

#### 1. Purpose / Semantic Role
Interrupção deliberada para **confirmações críticas, autorizações financeiras irreversíveis ou autenticação de segurança**.

#### 2. Mandatory Rules
- **Regra de Uso Estrito:** Nunca utilizar Dialog para leitura rotineira de dados ou navegação informativa (usar Drawer).
- **Ações Claras:** O rodapé deve conter no máximo duas ações: `Cancelar` (Secundário/Tertiary) e `Confirmar` (Primário ou Destructive).

#### 3. Dimensional Tokens
- **Larguras:** `sm` (400px), `md` (520px), `lg` (640px).
- **Radius:** `geometry.radius.md` (12px).
- **Elevation:** `geometry.elevation.3`.

---

### 27.13 TOOLTIP (`component.tooltip`)

#### 1. Purpose / Semantic Role
Fornecer **microexplicações contextuais complementares** para termos técnicos, siglas financeiras (ex: LTV, APY, CCB, CRI) ou botões de ícone sem texto.

#### 2. Critical Rule
> **NUNCA posicione informação essencial para a tomada de decisão dentro de um Tooltip.**  
Se o dado for necessário para o investidor decidir, ele deve estar visível na interface ou acessível via Drawer.

#### 3. Visual Treatment
- **Fundo:** Superfície escura institucional `surface.dark.default` (`#0D1A31`).
- **Texto:** Branco `label.md` (12px / 400).
- **Radius:** `geometry.radius.xs` (4px).
- **Elevation:** `geometry.elevation.2`.
- **Largura Máxima:** 280px.

---

### 27.14 SKELETON (`component.skeleton`)

#### 1. Purpose / Semantic Role
Fornecer feedback visual estruturado durante o carregamento assíncrono de dados, eliminando saltos de layout (*CLS*) e evitando bloqueio de tela com preloader global.

#### 2. Variants & Geometry
- **`skeleton.text`:** Linhas de texto com altura de 12px/14px e raio `radius.xs`.
- **`skeleton.metric`:** Bloco de número com altura de 28px/36px e raio `radius.sm`.
- **`skeleton.table-row`:** Linhas tabulares completas simulando a densidade dos dados.
- **`skeleton.card`:** Contêiner Level 1/2 com borda sutil.

#### 3. Animation Token
- Shimmer gradient suave de 1.5s linear e infinito (`linear-gradient(90deg, #E9EDEE 0%, #F7F8F9 50%, #E9EDEE 100%)`).

---

# 28 — COMPONENT COMPOSITION PATTERNS & ANTI-PATTERNS

```
┌────────────────────────────────────────────────────────────────────────┐
│ PADRÕES RECOMENDADOS VS ANTI-PADRÕES                                   │
├────────────────────────────────────┬───────────────────────────────────┤
│ RECOMENDADO (GlemO v2.0)           │ ANTI-PADRÃO (A Ser Eliminado)     │
├────────────────────────────────────┼───────────────────────────────────┤
│ 1 CTA Primário por bloco           │ 3 botões coloridos com mesmo peso │
│ Table para 3+ registros            │ 10 cards repetidos com bordas     │
│ Drawer para detalhe de evidência   │ Modais empilhados no centro       │
│ Status = Cor + Ícone + Texto       │ Apenas uma bolinha colorida solta │
│ Tag = Retangular neutra (radius.sm)│ Tag em pílula de 9999px colorida  │
│ Label = Tipografia direta Level 0  │ Rótulo encapsulado em card        │
│ Skeleton progressivo por bloco     │ Preloader tela inteira travando UI│
│ Tab underline ou segmented contido │ Abas que quebram em 3 linhas      │
└────────────────────────────────────┴───────────────────────────────────┘
```

---

# 29 — INFORMATION DENSITY & INFORMATION ARCHITECTURE

## 29.1 Princípio Central
> **"Do not reduce information capability. Reduce simultaneous cognitive demand."**

O GlemO não deve remover informações necessárias apenas para simular uma interface vazia ou pretensamente "limpa". O investidor institucional e o operador de infraestrutura precisam de dados profundos, parâmetros de crédito, trilhas de auditoria e hashes criptográficos para tomarem decisões de capital.

A estratégia do GlemO v2.0 é:
```text
REDUZIR DENSIDADE COGNITIVA
          sem
REDUZIR CAPACIDADE INFORMACIONAL
```
A interface permite que usuários especialistas acessem a profundidade total do sistema sem obrigar qualquer usuário a processar toda essa profundidade simultaneamente.

---

## 29.2 Information-First Paradigm
O conteúdo e sua prioridade lógica determinam a estrutura visual — nunca o contrário:

```text
MODELO CORRETO (INFORMATION-FIRST):
Information
    ↓
Hierarchy
    ↓
Context
    ↓
Interaction
    ↓
Container (Apenas se estritamente necessário)

ANTI-PADRÃO A SER ELIMINADO (CONTAINER-FIRST):
Container (Card)
    ↓
Container (Nested Card)
    ↓
Container (Border/Badge Box)
    ↓
Information
```

Não utilizar cards, bordas, badges ou backgrounds meramente porque "existe espaço vazio disponível na tela".

---

## 29.3 Global Information Hierarchy (Levels 0 a 3)

Toda a informação no ecossistema GlemO é classificada em quatro camadas hierárquicas funcionais:

```
┌────────────────────────────────────────────────────────────────────────┐
│ OS 4 NÍVEIS GLOBAIS DE HIERARQUIA DA INFORMAÇÃO                        │
├─────────┬──────────┬──────────────────────────┬────────────────────────┤
│ Nível   │ Camada   │ Pergunta Central         │ Exemplos de Dados      │
├─────────┼──────────┼──────────────────────────┼────────────────────────┤
│ LEVEL 0 │ SIGNAL   │ O que preciso saber      │ Yield, Ticket Mínimo,  │
│         │          │ imediatamente?           │ Risco, Status, Prazos  │
├─────────┼──────────┼──────────────────────────┼────────────────────────┤
│ LEVEL 1 │ CONTEXT  │ Por que essa informação  │ Descrição, Emissor,    │
│         │          │ importa?                 │ Tese, Condições-chave  │
├─────────┼──────────┼──────────────────────────┼────────────────────────┤
│ LEVEL 2 │ EVIDENCE │ Como essa informação foi │ Validação, Auditoria,  │
│         │          │ comprovada/verificada?   │ Logs de Ledger, Oráculo│
├─────────┼──────────┼──────────────────────────┼────────────────────────┤
│ LEVEL 3 │ SOURCE   │ Qual é o documento ou    │ Contrato CCB, Laudo,   │
│         │          │ registro de origem?      │ PDF Registrado, Hash   │
└─────────┴──────────┴──────────────────────────┴────────────────────────┘
```

**Regras Normativas de Acesso:**
1. **Signal:** Imediatamente acessível no primeiro impacto visual da tela/tabela.
2. **Context:** Visível na camada primária de leitura ou através de expansão imediata.
3. **Evidence:** Acessível em 1 clique (via *Drawer* ou *Expandable Row*), **sem que o usuário perca o contexto da página principal**.
4. **Source:** Acessível a partir da camada de evidência (visualizador de PDF, explorer de bloco).

---

## 29.4 Padrão Estrutural: SIGNAL → CONTEXT → EVIDENCE → SOURCE

Este fluxo é o padrão arquitetural obrigatório para todas as entidades financeiras do GlemO:

```text
EXEMPLO 01 — RETORNO / PERFORMANCE:
Yield (12.4% a.a.)                  [SIGNAL]
   ↓
Performance Context (Histórico 24m)  [CONTEXT]
   ↓
Validation Evidence (Oracle Report)  [EVIDENCE]
   ↓
Source Document (Contrato CCB PDF)   [SOURCE]

EXEMPLO 02 — CONFORMIDADE / STATUS:
Asset Verified                      [SIGNAL]
   ↓
Verification Context (Valida S.A.)   [CONTEXT]
   ↓
Validation Record (Parecer Técnico)  [EVIDENCE]
   ↓
Audit Document (Hash no Cartório)    [SOURCE]

EXEMPLO 03 — LIQUIDEZ / RESGATE:
Disponibilidade Imediata (US$ 2.4M) [SIGNAL]
   ↓
Liquidity Conditions (Regras Pool)   [CONTEXT]
   ↓
Liquidity Evidence (Custódia Real)   [EVIDENCE]
   ↓
Source Record (Extrato Bancário)     [SOURCE]
```

O usuário **nunca deve precisar procurar manualmente a origem de um dado**. Quando houver evidência disponível, o elo `DATA → CONTEXT → EVIDENCE → SOURCE` deve estar explicitamente conectado na UI.

---

## 29.5 Progressive Disclosure Architecture

Progressive Disclosure é a espinha dorsal de usabilidade do GlemO:

```text
┌────────────────────────────────────────────────────────┐
│ 1. VISIBLE BY DEFAULT                                  │
│ Informação essencial para a decisão imediata.          │
├────────────────────────────────────────────────────────┤
│ 2. AVAILABLE ON DEMAND (Hover / Toggle / Tab)          │
│ Contexto adicional, parâmetros secundários.            │
├────────────────────────────────────────────────────────┤
│ 3. DEEP DETAIL (Drawer / Side Panel)                   │
│ Evidências técnicas, memórias de cálculo, compliance.  │
├────────────────────────────────────────────────────────┤
│ 4. SOURCE (Dedicated Viewer / External Explorer)       │
│ Documentação jurídica original e hashes criptográficos.│
└────────────────────────────────────────────────────────┘
```

> **Diretriz de Design:** A informação deve estar **progressivamente disponível**, nunca *progressivamente inacessível* ou escondida por decisões estéticas arbitrárias.

---

## 29.6 Escala de Densidade de Informação (D0–D4)

```
┌────────────────────────────────────────────────────────────────────────┐
│ MATRIZ DE DENSIDADE D0–D4                                              │
├────┬─────────────┬──────────────────────────┬─────────────────────────┤
│    │ Modo        │ Objetivo de Produto      │ Padrão de Apresentação  │
├────┼─────────────┼──────────────────────────┼─────────────────────────┤
│ D0 │ EDITORIAL   │ Descoberta, apresentação,│ Alto respiro, Display,  │
│    │             │ landing institucional    │ Level 0/1 predominante  │
├────┼─────────────┼──────────────────────────┼─────────────────────────┤
│ D1 │ COMFORTABLE │ Marketplace overview,    │ Signal dominante,       │
│    │             │ descoberta de ativos     │ Context resumido        │
├────┼─────────────┼──────────────────────────┼─────────────────────────┤
│ D2 │ STANDARD    │ Dossiê de ativo,         │ Signal + Context +      │
│    │ (DEFAULT)   │ análise e relatórios     │ Evidence sob demanda    │
├────┼─────────────┼──────────────────────────┼─────────────────────────┤
│ D3 │ OPERATIONAL │ Compliance, validação,   │ Tabelas densas, filtros │
│    │             │ esteira de originação    │ e ações contextuais     │
├────┼─────────────┼──────────────────────────┼─────────────────────────┤
│ D4 │ COMPACT     │ Reconciliação, clearing, │ Máxima eficiência,      │
│    │             │ mesas de custódia        │ foco em comparação pura │
└────┴─────────────┴──────────────────────────┴─────────────────────────┘
```

> **Princípio Fundamental:** D4 **não** significa interface poluída ou caótica.  
> **D4 = High Information Density + Strong Information Hierarchy.**

---

## 29.7 Densidade ≠ Quantidade de Cards
Mais densidade visual **NÃO** significa adicionar mais cards, mais bordas, mais badges coloridos ou mais caixas cinzas.

```text
MAIS DENSIDADE SIGNIFICA:
✔ Mais informação útil e acionável por área útil de tela.
✔ Tipografia nítida com pesos e tamanhos bem proporcionados.
✔ Alinhamento milimétrico em colunas e grids de 4px.
✔ Agrupamento semântico por proximidade (Whitespace).
✔ Progressive disclosure ágil via drawers e tabelas expansíveis.
✔ Eficiência de leitura e comparação rápida.
```

---

## 29.8 Integração dos Container Levels (Geometry Foundation)

```text
LEVEL 0 (Direct Surface)   → Conteúdo repousa diretamente na superfície principal (Default).
LEVEL 1 (Grouped)          → Agrupamento lógico puramente por espaçamento e tipografia.
LEVEL 2 (Surface Container)→ Cartão ou painel com fundo sutil para isolar domínios diferentes.
LEVEL 3 (Elevated Layer)   → Painéis suspensos (Drawer, Modal, Tooltip) com elevação 2/3.
```

**Regra de Ouro:** Comece sempre no **Level 0**. Somente eleve o nível de contenção se houver clara justificativa funcional de separação de contexto.

---

## 29.9 Regra de Acima da Dobra (Above the Fold)

A primeira viewport visível de qualquer página do GlemO deve responder prontamente a 4 perguntas essenciais:
1. **Onde estou?** (Título da página / Migalha de pão institucional).
2. **O que estou vendo?** (Identificação clara do ativo, carteira ou fila de trabalho).
3. **Qual é a informação mais importante?** (Signal Primário dominante).
4. **Qual é a ação principal?** (CTA de decisão em destaque).

> **Proibição:** Não tente espremer todas as respostas e dados do produto dentro do primeiro viewport. Acima da dobra: **SIGNAL FIRST**. Context, Evidence e Source aparecem progressivamente na rolagem ou sob demanda.

---

## 29.10 Hierarquia de KPIs e Métricas

Métricas não são coleções de números idênticos jogados em uma grade. Toda seção analítica possui uma hierarquia explícita:

```text
┌────────────────────────────────────────────────────────┐
│ PRIMARY KPI (Ex: 14.8% APY Líquido)                     │
│ Destaque imediato (numeric.xl / numeric.lg)            │
├────────────────────────────────────────────────────────┤
│ SECONDARY KPI (Ex: Risco A+  ·  Maturidade 24m)        │
│ Contexto imediato de decisão (numeric.md / body.lg)    │
├────────────────────────────────────────────────────────┤
│ SUPPORTING METRICS (Ex: Volume US$ 4.2M · LTV 52%)     │
│ Métricas de suporte integradas em Level 0/1 (body.sm)  │
└────────────────────────────────────────────────────────┘
```

**Veto:** Proibido utilizar grids homogêneos de 4, 6 ou 8 cards de KPI idênticos disputando atenção visual.

---

## 29.11 Agrupamento Semântico de Métricas

Métricas devem ser agrupadas por domínio conceitual de negócio, nunca misturadas por conveniência de layout:

1. **ECONOMICS (Financeiro):** Yield, Ticket Mínimo, Volume Total, Taxa de Emissão, Spread.
2. **RISK (Garantias & Risco):** Classificação de Risco (Rating), LTV, Índice de Cobertura, Concentração.
3. **LIQUIDITY (Liquidez & Ciclo):** Liquidez Disponível, Prazo de Resgate, Demanda de Mercado, Liquidação.

---

## 29.12 Estratégia de Cards (Level 0 Default)

Antes de criar um contêiner ou card, o time deve responder:
> *"Esta informação precisa obrigatoriamente de um container?"*

- Se a resposta for **não**: utilize **Level 0** (texto e dados diretamente na superfície).
- Se precisar apenas de separação lógica: utilize **Level 1** (espaçamento modular `space.6`/`space.8`).
- Se precisar de isolamento entre fluxos concorrentes: utilize **Level 2** (`surface.default` + `border.subtle`).
- Se for sobreposição contextual: utilize **Level 3** (Drawer com `elevation.3`).

---

## 29.13 Framework de Decisão: Table vs. Card vs. Detail

```
┌────────────────────────────────────────────────────────────────────────┐
│ TABLE vs CARD vs DETAIL                                                │
├─────────┬──────────────────────────────────────────────────────────────┤
│ Formato │ Cenário de Uso Recomendado                                   │
├─────────┼──────────────────────────────────────────────────────────────┤
│ TABLE   │ ✔ 3 ou mais registros homogêneos.                            │
│         │ ✔ Comparação vertical de valores e ordenação por colunas.    │
│         │ ✔ Filtros densos e operações em lote.                        │
├─────────┼──────────────────────────────────────────────────────────────┤
│ CARD    │ ✔ Entidade individual em destaque independente (Spotlight).  │
│         │ ✔ Resumo contextual compacto com ação dedicada.              │
│         │ ✔ Estruturas de dados heterogêneas (1 a 2 itens).            │
├─────────┼──────────────────────────────────────────────────────────────┤
│ DETAIL  │ ✔ Investigação aprofundada de um ativo ou transação.         │
│ (Drawer)│ ✔ Navegação pela árvore de evidências e contratos jurídicos. │
│         │ ✔ Auditoria de múltiplos relacionamentos sem perder a tela.  │
└─────────┴──────────────────────────────────────────────────────────────┘
```

---

## 29.14 Arquitetura Estrutural: Page vs. Drawer vs. Dialog

```text
PAGE = CONTEXTO
Uso: Quando o usuário precisa de foco prolongado, navegação própria e fluxo completo.

DRAWER = DETALHE & EVIDÊNCIA
Uso: Quando o usuário precisa manter a página de fundo visível enquanto inspeciona
     evidências, metadados, relatórios ou executa ações contextuais.

DIALOG = INTERRUPÇÃO & CONFIRMAÇÃO
Uso: Exclusivamente para interrupções críticas, confirmações irreversíveis
     e autorizações transacionais de alto impacto.
```

---

## 29.15 Modelo de Informação do Drawer

O Drawer segue o fluxo padrão de progressive disclosure em quatro blocos ordenados:

```text
┌──────────────────────────────────────────────────────────┐
│ DRAWER DE ATIVO / TRANSAÇÃO                              │
├──────────────────────────────────────────────────────────┤
│ 1. SIGNAL   → Nome do Ativo, Yield, Rating, Ticket       │
├──────────────────────────────────────────────────────────┤
│ 2. CONTEXT  → Tese de Investimento, Emissor, Garantias   │
├──────────────────────────────────────────────────────────┤
│ 3. EVIDENCE → Parecer Técnico, Logs de Validação, Oráculo│
├──────────────────────────────────────────────────────────┤
│ 4. SOURCE   → Contrato CCB (PDF), Hash no Ledger, Anexos │
└──────────────────────────────────────────────────────────┘
```

---

## 29.16 Tratamento de Metadados

Metadados técnicos (IDs de transação, hashes de contrato, timestamps, versões, jurisdição) possuem **baixa prioridade visual imediata**:
- Apresentados em tipografia `caption` (11px) ou `label.md` (12px) na cor `content.tertiary` (`#5F657D`).
- Posicionados no rodapé dos blocos em **Level 0**, sem cartões ou bordas decorativas.
- Nunca competem com o título, com o Signal ou com o botão de ação.

---

## 29.17 Distinção Semântica de Microindicadores

```text
BADGE   → Classificação / Categoria (ex: [ Senior Tranche ], [ Institucional ])
STATUS  → Estado Operacional (ex: [ ● Verified ], [ ⏸ Standby ], [ ✕ Blocked ])
TAG     → Atributo / Metadado (ex: [ 24 meses ], [ LTV 52% ], [ Base Rail ])
LABEL   → Informação Auxiliar Level 0 (ex: Origem:, Taxa:, Vencimento:)
```

---

## 29.18 Estratégia de Filtros

Filtros são ferramentas para **reduzir a sobrecarga de informação**, não para competir com os dados:
- Exibir de 3 a 5 filtros essenciais no cabeçalho primário.
- Filtros secundários ou complexos são agrupados em um menu/drawer de *Filtros Avançados*.
- Exibir tags removíveis com o estado ativo dos filtros selecionados e botão `Limpar Filtros`.

---

## 29.19 Papel da Busca (Search)

A busca no GlemO é um mecanismo rápido de navegação e redução de complexidade:
- Não substitui a arquitetura de informação clara da plataforma.
- A busca não deve ser usada como muleta para esconder dados que deveriam ser facilmente descobertos por navegação contextual.

---

## 29.20 Arquitetura de Formulários e Progressão Cognitiva

Formulários institucionais complexos seguem quatro etapas universais:
```text
CONTEXT → INPUT → VALIDATION → CONFIRMATION
```

Grandes formulários monolíticos de uma única página são proibidos. Quando o fluxo envolver múltiplos domínios conceituais, dividir em etapas lógicas lineares:

**Exemplo da Asset Factory (Esteira de Tokenização):**
```text
Etapa 01: IDENTITY      (Identificação básica e emissor)
   ↓
Etapa 02: ECONOMICS     (Parâmetros financeiros, yield, tranches)
   ↓
Etapa 03: LEGAL         (Estrutura jurídica, garantias, CCB)
   ↓
Etapa 04: DOCUMENTATION (Upload de laudos, certidões e anexos)
   ↓
Etapa 05: VALIDATION    (Validação de compliance e parecer técnico)
   ↓
Etapa 06: PUBLICATION   (Revisão final e emissão no ledger)
```
*Regra:* Cada etapa possui cabeçalho de contexto, campos estritos, validação em tempo real e indicador de progresso claro.

---

## 29.21 Progressive Disclosure em Formulários
Campos condicionais ou avançados devem surgir em tela **somente quando o usuário acionar o gatilho lógico correspondente** (ex: ao selecionar "Garantia Imobiliária", surgem os campos de "Matrícula e Cartório"). Evita-se expor formulários com dezenas de campos irrelevantes.

---

## 29.22 Densidade Configurável de Tabelas

Tabelas no GlemO oferecem modos de visualização adequados à tarefa:
- **D2 (Standard):** Linhas de 52px, foco em leitura e análise aprofundada.
- **D3 (Operational):** Linhas de 44px, foco em esteiras operacionais e validação.
- **D4 (Compact):** Linhas de 36px, máxima densidade com tipografia compacta para mesas financeiras.

---

## 29.23 Estratégia de Densidade Mobile

Mobile **não significa** transformar cegamente tabelas em 50 cards empilhados verticalmente.
A interface mobile preserva a hierarquia por meio de:
1. **Priorização de Colunas:** Exibir colunas vitais (Ativo, Signal, Status) e ocultar colunas de contexto.
2. **Scroll Horizontal Fluido:** Manter a estrutura tabular com indicação de rolagem.
3. **Expansão de Linhas (Accordion):** Revelar detalhes secundários sob demanda.
4. **Drawer de Detalhes:** Manter a auditoria completa de evidências ao tocar na linha.

---

## 29.24 Actionable Empty States

Estados vazios devem obrigatoriamente responder:
1. **O que está vazio?** (ex: "Nenhuma ordem de alocação encontrada").
2. **Por que está vazio?** (ex: "Você não possui ordens ativas para os filtros selecionados").
3. **O que posso fazer?** (Botão de ação: "Explorar Marketplace" ou "Limpar Filtros").

---

## 29.25 Actionable Error States

Estados de erro devem obrigatoriamente responder:
1. **O que aconteceu?** (Diagnóstico claro e sem jargões indecifráveis).
2. **Qual é o impacto?** (Explicar se a transação foi retida ou se os dados não foram salvos).
3. **O que o usuário pode fazer para resolver?** (Ação de retry ou contato com o suporte).

> **Veto:** Proibido utilizar mensagens genéricas como *"Something went wrong"* sem contexto e ação.

---

## 29.26 Loading & Progressive Skeleton Hierarchy

O carregamento assíncrono carrega do contêiner mais estável para o mais volátil:
```text
1. Application Shell (Navegação e Estrutura)
       ↓
2. Primary Signal (KPIs mestres e Títulos)
       ↓
3. Secondary Content (Tabelas e Listas estruturadas)
       ↓
4. Deep Evidence (Gráficos complexos e Anexos)
```
Nunca travar o viewport inteiro com tela de carregamento bloqueante enquanto dados parciais já estão disponíveis.

---

## 29.27 Matriz de Prioridade da Informação (Importance vs. Immediacy)

```text
                    ALTA IMPORTÂNCIA
                          ▲
                          │  [SIGNAL]
  ALTA IMEDIATEZ ◄────────┼────────► BAIXA IMEDIATEZ
 (Decisão Agora)          │          (Auditoria / Evidência)
             [CONTEXT]    │  [EVIDENCE]
                          │  [SOURCE]
                          ▼
                    SUPORTE TÉCNICO
```

> **Princípio:** Profundidade informacional **não significa menor importância**. Significa apenas menor necessidade de apresentação simultânea na primeira tela.

---

## 29.28 Arquitetura de Informação: Marketplace

```text
CAMADA 01 (Descoberta & Decisão):
Ativo · Yield · Rating · Ticket Mínimo · Liquidez · Status Operacional

CAMADA 02 (Contexto da Oferta):
Emissor · Tese de Investimento · Estrutura de Tranches · Prazos e Condições

CAMADA 03 (Evidências de Conformidade):
Validação Externa · Score de Crédito · Histórico de Pagamentos

CAMADA 04 (Origem & Jurídico):
Contrato CCB · Hash do Registro · Termo de Emissão (PDF)
```

O Marketplace prioriza discovery e decisão; não deve parecer uma mesa administrativa de operações.

---

## 29.29 Arquitetura de Informação: Asset Fact Sheet (Dossiê do Ativo)

Estrutura formal em 10 blocos ordenados:
```text
01. IDENTITY       → Nome do ativo, ticker, emissor e tranche
02. KEY SIGNALS    → Yield APY, rating de crédito, ticket e status
03. ECONOMICS      → Volume total, taxas, cronograma de amortização
04. RISK           → LTV, índices de cobertura, colateral e garantias
05. LIQUIDITY      → Prazos de resgate, regras de saída do pool
06. STRUCTURE      → Segregação patrimonial, esteira fiduciária
07. VALIDATION     → Pareceres de oráculos e validadores credenciados
08. EVIDENCE       → Logs de conformidade e integridade no ledger
09. SOURCE DOCS    → Contratos CCB assinados, laudos periciais e certidões
10. REPORTING      → Histórico de rentabilidade e relatórios mensais
```

---

## 29.30 Arquitetura de Informação: Asset Factory

Esteira sequencial para originadores de ativos:
- **01 Identity:** Contexto do originador, tipo de ativo e jurisdição.
- **02 Economics:** Parâmetros de cotação, cap rate, taxas e volume alvo.
- **03 Legal:** Estrutura societária, garantias reais e regras fiduciárias.
- **04 Documentation:** Checklist obrigatório de upload e OCR de certidões.
- **05 Validation:** Submissão a validadores e validação de compliance.
- **06 Publication:** Revisão executiva e cunhagem institucional no ledger.

---

## 29.31 Arquitetura de Informação: Data Room Institucional

O Data Room conecta rigorosamente o arquivo documental à sua função de negócio:
```text
ASSET ──► DATA ──► CONTEXT ──► EVIDENCE ──► SOURCE
```
Um documento nunca é exibido como um arquivo isolado em um repositório frio. Cada documento exibe:
- *Por que este documento existe?*
- *Qual métrica ou garantia ele comprova?*
- *Quem é a entidade validadora que assinou o parecer?*

---

## 29.32 Arquitetura de Informação: Governança & Operações

Telas de Governança, Compliance e Backoffice operam em **D3/D4**:
- Foco em tabelas densas, filas de trabalho (*queues*), filtros rápidos e atalhos de teclado.
- Sem heróis de marketing, sem cards decorativos gigantes e sem gradientes ornamentais.
- Ações contextuais de aprovação, auditoria e rejeição executadas diretamente em linha ou via Drawer.

---

## 29.33 Arquitetura de Informação por Perfil de Usuário (Roles)

```text
INVESTIDOR (D0–D2)
Fluxo: Signal → Context → Evidence
Foco em rentabilidade, risco, liquidez e decisão rápida de alocação.

ORIGINADOR (D2–D3)
Fluxo: Asset → Economics → Documentation → Validation
Foco em estruturação, conformidade documental e esteira de emissão.

INVESTIDOR INSTITUCIONAL (D2–D4)
Fluxo: Data → Risk Modeling → Liquidity → Evidence Depth
Foco em diligência profunda, stress test, garantias e auditoria de contratos.

VALIDADOR / AUDITOR (D3–D4)
Fluxo: Queue → Evidence Inspection → Validation Criteria → Decision
Foco em conferência de garantias, laudos periciais e assinatura criptográfica.

COMPLIANCE OFFICER (D3–D4)
Fluxo: Cases → Alerts → Status → KYC/AML Evidence → Enforcement
Foco em mitigação de riscos regulatórios e trilhas de auditoria.

ADMIN / OPERAÇÕES (D3–D4)
Fluxo: Queues → Transactions → Exceptions → Reconciliation Actions
Foco em resolução de pendências, liquidação e integridade sistêmica.
```

---

## 29.34 Anti-Patterns de Densidade e Arquitetura de Informação

```text
❌ Tentar colocar todos os dados possíveis acima da dobra.
❌ Exibir 6+ cards de KPI com o mesmo peso e formato visual.
❌ Encapsular cada linha ou parágrafo dentro de um card individual ("Cardite").
❌ Utilizar badges multicoloridos como ornamentos decorativos.
❌ Esconder dados vitais de investimento dentro de Tooltips.
❌ Usar modais invasivos para exibir relatórios ou leitura de rotina.
❌ Usar drawers para fluxos cadastrais autônomos inteiros.
❌ Converter automaticamente tabelas complexas em dezenas de cards no mobile.
❌ Exibir 20 filtros simultaneamente sem agrupamento ou progressive disclosure.
❌ Apresentar formulários planos com mais de 30 campos sem divisão de contexto.
❌ Misturar Signal, Context e Source no mesmo nível de destaque tipográfico.
❌ Colocar documentação bruta no mesmo peso de métricas primárias de rentabilidade.
❌ Utilizar cores saturadas para resolver problemas de hierarquia que o espaçamento deveria resolver.
```

---

## 29.35 Os 10 Princípios de Arquitetura de Informação do GlemO

1. **SIGNAL BEFORE DETAIL:** O dado essencial de decisão precede a explicação detalhada.
2. **CONTEXT BEFORE EVIDENCE:** O significado do dado precede sua prova técnica.
3. **EVIDENCE BEFORE SOURCE:** A verificação sintetizada precede o documento bruto.
4. **PROGRESSIVE DISCLOSURE BY DEFAULT:** Revele complexidade apenas quando solicitada.
5. **INFORMATION BEFORE CONTAINER:** O conteúdo determina a estrutura visual.
6. **HIERARCHY BEFORE DECORATION:** Clareza tipográfica substitui adereços estéticos.
7. **DENSITY WITHOUT NOISE:** Alta capacidade informacional com baixo esforço cognitivo.
8. **COMPARISON BEFORE CARDS:** Tabelas estruturadas são o padrão para múltiplos registros.
9. **CONTEXTUAL ACTIONS OVER GLOBAL ACTIONS:** Ações próximas do dado ao qual pertencem.
10. **PRESERVE INFORMATION CAPABILITY:** Nunca remova informação necessária para a tomada de decisão.

---

## 29.36 Framework de Decisão para Designers e Engenheiros

Antes de adicionar qualquer elemento, card ou dado em uma tela, faça as 10 perguntas:
```text
01. Qual informação este elemento representa?
02. Qual é a sua prioridade hierárquica no contexto atual?
03. Ele se classifica como Signal, Context, Evidence ou Source?
04. Ele precisa estar visível imediatamente ou deve ser acessado sob demanda?
05. Ele precisa obrigatoriamente de um container (Level 2/3) ou funciona em Level 0/1?
06. Ele pode ser agrupado por proximidade tipográfica e espaçamento?
07. O formato ideal é Table, Card individual, Detail ou Drawer?
08. Qual é o nível de densidade da tela (D0 a D4)?
09. Existe algum outro elemento concorrendo visualmente com ele?
10. É realmente necessário criar um novo componente ou padrão visual?
    ↳ Se a resposta for "não", utilize os componentes e padrões existentes do Design System.
```

---

## 29.37 Checklist de Validação de Telas Futuras

Use este checklist para auditar qualquer novo layout antes da aprovação:
```text
[ ] A primeira viewport possui um Signal claro e dominante.
[ ] Existe uma ação principal (CTA) identificável sem ambiguidade.
[ ] O Contexto dá suporte ao Signal sem competir com ele.
[ ] A Evidência está acessível em 1 clique (Drawer / Sub-row).
[ ] A Fonte documental original está conectada à evidência.
[ ] Nenhuma informação essencial de decisão está oculta em Tooltip.
[ ] Cards são utilizados apenas quando há justificativa funcional estrita.
[ ] Tabelas são empregadas quando há comparação de 3+ registros homogêneos.
[ ] Drawers são utilizados para manter o contexto visual da página de fundo.
[ ] Dialogs/Modais são restritos a interrupções críticas e confirmações irreversíveis.
[ ] KPIs possuem hierarquia visível (Primário, Secundário, Suporte).
[ ] Badges e Status não estão inflacionados na mesma visão.
[ ] Filtros estão organizados com progressive disclosure para casos avançados.
[ ] Formulários possuem divisão cognitiva em etapas lógicas lineares.
[ ] A visão mobile preserva a hierarquia sem gerar acúmulo desordenado de cards.
[ ] O carregamento progressivo (Skeleton) não bloqueia a tela inteira.
[ ] Empty States e Error States são explicativos e oferecem ação de saída.
[ ] O nível de densidade (D0–D4) é coerente com a tarefa e o perfil do usuário.
[ ] Não há contêineres ou bordas redundantes aninhados.
[ ] Não há elementos decorativos disputando atenção com dados financeiros.
```

---

## 29.38 Relação Entre as Camadas de Fundação do GlemO

```text
TYPOGRAPHY             → Define a Hierarquia de Leitura (Display, Headings, Body, Numeric)
    ↓
SPACING (4px Grid)     → Define o Agrupamento Semântico e Ritmo Visual (Whitespace)
    ↓
COLOR FOUNDATION       → Define o Contexto Operacional (B2B Blue, B2C Orange, Neutrals)
    ↓
GEOMETRY FOUNDATION    → Define a Estrutura Física e Contenção (Radius, Borders, Elevation)
    ↓
CORE COMPONENTS        → Define os Padrões de Interação e Controles (Buttons, Inputs, Tables)
    ↓
INFORMATION ARCHITECTURE→ Define O QUE aparece, ONDE aparece e QUANDO aparece
    ↓
DENSITY SYSTEM (D0–D4) → Define QUANTO aparece simultaneamente na tela
```

> **Regra de Coerência Arquitetural:** Nenhuma camada deve tentar resolver o problema de outra.  
> - Não use *cores chamativas* para compensar uma hierarquia tipográfica fraca.  
> - Não use *bordas e linhas* para compensar um agrupamento de espaçamento deficiente.  
> - Não use *cards repetitivos* para compensar uma arquitetura de informação desestruturada.

---

# 30 — TOKEN MIGRATION & IMPLEMENTATION STRATEGY

## 30.1 Princípios de Migração
> **"Migration before replacement. Comprehension before deprecation."**

Nenhum valor legado será substituído de forma cega ou precipitada no código. Todo token, estilo inline, cor e dimensão existente no ecossistema GlemO passará pelo pipeline estrito de 6 estágios:

```text
1. IDENTIFICAÇÃO  → Localização exata de todas as ocorrências e arquivos.
       ↓
2. CLASSIFICAÇÃO  → Determinação da intenção semântica original do elemento.
       ↓
3. MAPEAMENTO     → Vinculação inequívoca ao token correspondente do GlemO v2.0.
       ↓
4. VALIDAÇÃO      → Auditoria visual, contraste WCAG e testes de regressão.
       ↓
5. SUBSTITUIÇÃO   → Refatoração cirúrgica com consumo de tokens CSS/Design System.
       ↓
6. REMOÇÃO        → Eliminação definitiva do valor legado e trava contra reintrodução.
```

---

## 30.2 Inventário da Base de Código (Codebase Discovery)

A auditoria completa da base de código revelou a coexistência de três ecossistemas de interface com decisões estilísticas fragmentadas:

```
┌────────────────────────────────────────────────────────────────────────┐
│ INVENTÁRIO DO ECOSSISTEMA ATUAL                                        │
├───────────────────┬───────────────────┬────────────────────────────────┤
│ Camada            │ Arquivos          │ Padrão de Estilos Dominante    │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ 1. Data Room Dark │ html/style.css,   │ Fundo escuro (#071226),        │
│    Institutional  │ 27 páginas HTML   │ acentos em ouro (#d9b83f) e    │
│                   │                   │ azul (#0e7bff), 632 linhas CSS │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ 2. Prototype Warm │ wireframe_package/│ Fundo quente (#f7f4ef),        │
│    Light Platform │ app.html,         │ superfícies (#fffdfa/#fff7ec), │
│                   │ index.html        │ acentos laranja (#f28c28),     │
│                   │                   │ 7.717 linhas de código/estilos │
├───────────────────┼───────────────────┼────────────────────────────────┤
│ 3. Auth & Gate    │ login.css,        │ Superfície institucional       │
│    Security       │ auth-guard.js     │ escura e cards de login        │
└───────────────────┴───────────────────┴────────────────────────────────┘
```

---

## 30.3 Inventário de Tokens Legados e Mapeamento Direto

```
┌───────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ TABELA DE MAPEAMENTO DE TOKENS LEGADOS                                                                            │
├───────────────────┬──────────────┬─────────────┬───────────────────────────┬──────────────────────┬───────────────┤
│ Valor Legado      │ Tipo         │ Ocorrências │ Significado Original      │ Token GlemO v2.0     │ Confiança/Risk│
├───────────────────┼──────────────┼─────────────┼───────────────────────────┼──────────────────────┼───────────────┤
│ #071226           │ Surface Dark │ 38 arquivos │ Fundo Dark Data Room      │ surface.dark.canvas  │ ALTA / LOW    │
│ #0d1a31           │ Surface Dark │ 32 arquivos │ Painel Dark Data Room     │ surface.dark.default │ ALTA / LOW    │
│ #12233e           │ Surface Dark │ 24 arquivos │ Painel Secundário Dark    │ surface.dark.subtle  │ ALTA / LOW    │
│ #f7f4ef           │ Surface Light│ app.html    │ Fundo Bege Protótipo      │ surface.canvas (#F7) │ ALTA / MEDIUM │
│ #fffdfa           │ Surface Light│ app.html    │ Card Surface Protótipo    │ surface.default (#FF)│ ALTA / LOW    │
│ #fff7ec           │ Surface Light│ app.html    │ Card Soft Alaranjado      │ surface.subtle (#F1) │ ALTA / LOW    │
│ #16212d / #17212c │ Text / Ink   │ app.html    │ Tipografia Principal      │ neutral.900 (#202634)│ ALTA / LOW    │
│ #677381 / #8a95a1 │ Text / Muted │ app.html    │ Tipografia Secundária     │ neutral.600 / 700    │ ALTA / LOW    │
│ #e9eefb           │ Text Dark    │ style.css   │ Texto em Superfície Dark  │ neutral.0 (#FFFFFF)  │ ALTA / LOW    │
│ #aab6cf           │ Text Muted Dk│ style.css   │ Texto Secundário Dark     │ neutral.300 (#AEB6C0)│ ALTA / LOW    │
│ #f28c28           │ Brand Color  │ app.html    │ Laranja CTA Principal     │ brand.orange(#F15C00)│ ALTA / LOW    │
│ #0e7bff / #0059FF │ Brand Color  │ style.css   │ Azul Primário B2B         │ brand.blue (#0059FF) │ ALTA / LOW    │
│ #12845f / #67e69b │ Semantic     │ Geral       │ Sucesso / Verified        │ semantic.success     │ ALTA / LOW    │
│ #b53c3c / #ff6b6b │ Semantic     │ Geral       │ Erro / Perigo             │ semantic.danger      │ ALTA / LOW    │
│ #d9b83f           │ Accent       │ style.css   │ Dourado Institucional     │ expression.spectrum  │ MÉDIA / MEDIUM│
│ radius: 7px       │ Geometry     │ app.html    │ Botões e Inputs           │ radius.sm (8px)      │ ALTA / LOW    │
│ radius: 8px       │ Geometry     │ style.css   │ Cards e Painéis           │ radius.sm / radius.md│ ALTA / LOW    │
│ radius: 999px     │ Geometry     │ app.html    │ Chips / Badges            │ radius.full (9999px) │ ALTA / LOW    │
│ shadow 0 18px 50px│ Elevation    │ app.html    │ Sombra Pesada de Cards    │ elevation.none / 1   │ ALTA / MEDIUM │
└───────────────────┴──────────────┴─────────────┴───────────────────────────┴──────────────────────┴───────────────┘
```

---

## 30.4 Análise dos 115 Tons Hexadecimais Legados

A auditoria identificou aproximadamente 115 valores hexadecimais/RGB espalhados na base legada, agrupados em 8 famílias:

```text
GROUP A — BRAND PALETTE (8 tons):
- Exemplos: #f28c28, #bd5f06, #0e7bff, #0059FF, #14c8e8, #ff7a00, #d9b83f, #f2db78.
- Destino: Padronização nos 6 Primitivos Oficiais (#0059FF, #00BAFF, #00FFA2, #CCCF0A, #FF9A00, #F15C00).
- Risco: BAIXO.

GROUP B — NEUTRAL SCALE (26 tons):
- Exemplos: #16212d, #17212c, #202634, #3e4654, #52606c, #677381, #7a8491, #8a95a1, #95a2ad, #a6b1ba, #aeb9c2, #cdbfad, #dce5eb, #eaf0f3.
- Destino: Mapeamento estrito na Escala Neutra Contínua de 12 Níveis (neutral.0 a neutral.950).
- Risco: MÉDIO (exige revisão de contraste).

GROUP C — SURFACE & CANVAS (18 tons):
- Exemplos: #071226, #050e1f, #0d1a31, #12233e, #f7f4ef, #fffdfa, #fff7ec, #f0f4f8, #ffffff.
- Destino: Arquitetura de Superfícies Claras (Light) e Superfície Escura Institucional (#071226).
- Risco: BAIXO.

GROUP D — TEXT & CONTENT (14 tons):
- Exemplos: #e9eefb, #ffffff, #dce5eb, #aab6cf, #677381, #16212d.
- Destino: content.primary, content.secondary, content.tertiary, content.disabled.
- Risco: BAIXO.

GROUP E — BORDERS & DIVIDERS (16 tons):
- Exemplos: #e5dcd0, #dfbd96, #edc999, #f0cfaa, rgba(255,255,255,.08), rgba(210,180,74,.35).
- Destino: border.subtle, border.default, border.strong, divider.subtle, divider.default.
- Risco: MÉDIO (eliminação de bordas alaranjadas excessivas).

GROUP F — SEMANTIC STATUS (12 tons):
- Exemplos: #12845f, #087f62, #67e69b, #b53c3c, #ff6b6b, #fff1ef, #eef9f4, #f0f6ff, #fff3df.
- Destino: semantic.success, semantic.warning, semantic.danger, semantic.info e variantes .subtle.
- Risco: BAIXO.

GROUP G — DATA VISUALIZATION & CHARTS (9 tons):
- Exemplos: Cores de gráficos de performance e liquidez no protótipo.
- Destino: Tokens dedicados de visualização de dados baseados nas expressões brand.cool e brand.warm.
- Risco: MÉDIO.

GROUP H — LEGACY & UNKNOWN (12 tons):
- Exemplos: Sombras embutidas com alpha arbitrário, fundos de badges transitórios.
- Destino: Depreciação e remoção.
- Risco: BAIXO.
```

---

## 30.5 Análise de Conflitos de Tema (Data Room Dark vs. Prototype Light)

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ MATRIZ DE CONFLITOS DE TEMA E RESOLUÇÃO                                                         │
├─────────────────┬───────────────────┬──────────────────────┬────────────────────────────────────┤
│ Dimensão        │ Data Room (Dark)  │ Prototype (Light)    │ Estratégia de Resolução v2.0       │
├─────────────────┼───────────────────┼──────────────────────┼────────────────────────────────────┤
│ Fundo Geral     │ #071226 (Canvas)  │ #f7f4ef (Warm Beige) │ Padronizar em surface.canvas       │
│                 │                   │                      │ (#F7F8F9) no Light e manter        │
│                 │                   │                      │ #071226 no Dark Institucional.     │
├─────────────────┼───────────────────┼──────────────────────┼────────────────────────────────────┤
│ Acento Primário │ #0e7bff (Blue) &  │ #f28c28 (Orange)     │ Desacoplamento contextual:         │
│                 │ #d9b83f (Gold)    │                      │ Blue para B2B/Infraestrutura e     │
│                 │                   │                      │ Orange para Conversão B2C.         │
├─────────────────┼───────────────────┼──────────────────────┼────────────────────────────────────┤
│ Raio de Botões  │ 8px / 12px        │ 7px                  │ Unificar estritamente em           │
│                 │                   │                      │ geometry.radius.sm (8px).          │
├─────────────────┼───────────────────┼──────────────────────┼────────────────────────────────────┤
│ Cards e Sombras │ Sem sombras       │ Sombras pesadas      │ Adotar Card Level 0/1 como base e  │
│                 │ pesadas           │ 0 18px 50px rgba...  │ limitar sombras a elevation.1/2/3. │
└─────────────────┴───────────────────┴──────────────────────┴────────────────────────────────────┘
```

---

## 30.6 Migração Tipográfica e Política de Pesos

```text
MAPEAMENTO DE PESOS TIPOGRÁFICOS:
- 300 (Light)    → VALID  → Open Sans 300 (Manter exclusivamente em displays editoriais)
- 400 (Regular)  → VALID  → Open Sans 400 (Padrão para body e labels secundários)
- 500 (Medium)   → VALID  → Open Sans 500 (Padrão para subtítulos e dados tabulares)
- 600 (Semibold) → VALID  → Open Sans 600 (Padrão para botões, inputs, cabeçalhos de tabela)
- 700 (Bold)     → VALID  → Open Sans 700 (Headings primários e números mestres)
- 760            → MIGRATE→ Converter para 600 ou 700
- 800            → MIGRATE→ Converter para 700
- 850            → MIGRATE→ Converter para 700
- 900            → MIGRATE→ Converter para 700
- !important     → REVIEW → Eliminar das declarações tipográficas
```

---

## 30.7 Migração Geométrica (Radius, Borders e Elevation)

```text
PLANO DE CONSOLIDAÇÃO DE RADIUS:
- 0px          → VALID   → geometry.radius.none (Tabelas e divisores retos)
- 4px          → VALID   → geometry.radius.xs (Tooltips, tags micro)
- 5px / 6px / 7px → MIGRATE → geometry.radius.sm (8px) (Botões, Inputs, Selects, Tags)
- 8px          → VALID   → geometry.radius.sm (8px) (Padrão de controles)
- 10px / 12px  → MIGRATE → geometry.radius.md (12px) (Painéis, Modais, Drawers)
- 14px / 16px  → MIGRATE → geometry.radius.lg (16px) (Superfícies de destaque)
- 50% / 999px  → MIGRATE → geometry.radius.full (9999px) (Badges e Status pílula)
```

---

## 30.8 Mapeamento de Componentes Existentes

```
┌────────────────────────────────────────────────────────────────────────┐
│ CLASSIFICAÇÃO DE MIGRAÇÃO DE COMPONENTES                               │
├───────────────────────┬─────────────────┬──────────────────────────────┤
│ Componente Legado     │ Classificação   │ Ação Técnica Futura          │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ button, button.primary│ PARTIAL MATCH   │ Aplicar radius.sm, alturas   │
│ button.ghost, danger  │                 │ 32/40/48px e remover 760 wt  │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ input, select, text   │ PARTIAL MATCH   │ Padronizar alturas, foco 2px │
│                       │                 │ e desvincular de sombras     │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ .card, .panel         │ LEGACY          │ Reclassificar em Level 0–3,  │
│                       │                 │ remover sombras de 50px      │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ .chip, .badge, .dot   │ LEGACY          │ Segregar estritamente em     │
│                       │                 │ Badge, Status, Tag ou Label  │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ Table rows / headers  │ PARTIAL MATCH   │ Aplicar alinhamento à direita│
│                       │                 │ para números e tabular-nums  │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ Modal Dialogs         │ PARTIAL MATCH   │ Restringir a confirmações;   │
│                       │                 │ migrar detalhes para Drawer  │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ .help (Tooltip)       │ PARTIAL MATCH   │ Migrar fundo para Dark #0D1A31│
│                       │                 │ e vetar dados essenciais     │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ Language Toggle       │ DOMAIN          │ Manter funcionalidade,       │
│                       │                 │ atualizar geometria          │
├───────────────────────┼─────────────────┼──────────────────────────────┤
│ Asset Fact Sheet      │ DOMAIN COMPOSITE│ Refatorar nas 10 seções de IA│
└───────────────────────┴─────────────────┴──────────────────────────────┘
```

---

## 30.9 Estratégia de Migração de Cards (Redução da Cardite)

```text
DIAGNÓSTICO DA BASE ATUAL:
Atualmente, quase todo bloco de texto, métrica ou formulário está envolto em `.card` com borda e sombra pesada.

PLANO DE MIGRAÇÃO:
1. Mapear grids de KPIs de 4 a 6 colunas para LEVEL 0 (métricas diretas com separação tipográfica).
2. Manter LEVEL 2 apenas para painéis com tarefas autônomas (ex: formulário de alocação de ordem).
3. Eliminar sub-cards aninhados dentro de outros cards (Nested Cards).
```

---

## 30.10 Migração de Tabelas (Table vs. Card)

```text
DATASETS A SEREM MIGRADOS DE CARDS PARA TABLE:
- Lista de Transações Recentes (atualmente exibida em lista de cards no Portal).
- Fila de Casos de Compliance (atualmente cards soltos no Compliance Admin).
- Histórico de Cotações e Ordens (atualmente divs empilhadas).
- Tabela de Diligence Checklist (já tabular, manter com alinhamentos v2.0).
```

---

## 30.11 Migração de Modais para Drawers

```text
TELAS COM DETALHES EM MODAL A SEREM MIGRADAS PARA DRAWER:
- Dossiê Rápido do Ativo no Marketplace → Migrar para Asset Drawer (560px).
- Inspeção de Evidência e Laudo Técnico → Migrar para Evidence Drawer (720px).
- Detalhes de KYC / KYB do Vendedor → Migrar para Compliance Drawer (440px).
- Exibição de Logs de Transação no Ledger → Migrar para Ledger Drawer (560px).
```

---

## 30.12 Migração de Microindicadores

```text
RECLASSIFICAÇÃO DE OCORRÊNCIAS:
1. [ Senior Tranche ], [ Mezanino ], [ CRI ] → BADGE (radius.full / radius.sm, neutro/info).
2. [ Verified ], [ Active ], [ Standby ], [ Blocked ] → STATUS (Cor + Ícone + Texto).
3. [ 24 meses ], [ LTV 52% ], [ Base Rail ] → TAG (radius.sm 8px retangular suave).
4. "Origem:", "Taxa:", "Ticket Mínimo:" → LABEL (Level 0 sem caixa).
```

---

## 30.13 Matriz de Densidade Atual vs. Alvo (Telas Principais)

```
┌───────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ MATRIZ DE MIGRAÇÃO DE DENSIDADE                                                                       │
├───────────────────────────────┬──────────────────┬───────────────┬────────────────────┬───────────────┤
│ Tela / Módulo                 │ Densidade Atual  │ Densidade Alvo│ Problema Principal │ Complexidade  │
├───────────────────────────────┼──────────────────┼───────────────┼────────────────────┼───────────────┤
│ Data Room Index               │ D1 / D2 híbrido  │ D1            │ Excesso de links   │ BAIXA         │
│ Marketplace Discovery         │ D2 poluído       │ D1 / D2       │ Cards concorrentes │ MÉDIA         │
│ Asset Fact Sheet              │ D2 desestruturado│ D2            │ Dados desordenados │ ALTA          │
│ Asset Factory (6 etapas)      │ D1 plano extenso │ D2 / D3       │ Falta progressão   │ ALTA          │
│ Compliance & Cases            │ D2 espaçado      │ D3            │ Poucos dados/área  │ MÉDIA         │
│ Billing & Revenue Ops         │ D2               │ D3            │ Tabelas sem rigor  │ MÉDIA         │
│ Reconciliation & Ledger Queue │ D2               │ D4            │ Espaçamento excess.│ MÉDIA         │
└───────────────────────────────┴──────────────────┴───────────────┴────────────────────┴───────────────┘
```

---

## 30.14 Mapeamento de Papéis e Navegação

```text
INVESTIDOR (D0–D2)     → Marketplace, Asset Fact Sheet, Account Portfolio
ORIGINADOR (D2–D3)     → Asset Factory, Seller Admin, Distribution SaaS
INSTITUCIONAL (D2–D4)  → Institutional Portal, Data Room, Diligence Room
VALIDADOR (D3–D4)      → Validation Gate, Oracle Review Queue
COMPLIANCE (D3–D4)     → Compliance Cases, AML/KYC Investigation
OPERAÇÕES (D3–D4)      → Billing Ops, Rail Monitoring, Reconciliation Desk
```

---

## 30.15 Grafo de Dependências de Migração

```text
1. FOUNDATIONS (Typography, Spacing, Color, Geometry)
       ↓
2. CSS CUSTOM PROPERTIES (--color-*, --radius-*, --space-*)
       ↓
3. DESIGN TOKENS CORE (component.button.*, component.input.*)
       ↓
4. PRIMITIVE CORE COMPONENTS (Button, Input, Select, Badge, Status, Tag, Table)
       ↓
5. COMPOSITE PATTERNS (Drawer, Tabs, Dialog, Skeleton, Form Steps)
       ↓
6. DOMAIN MODULES (Asset Fact Sheet, Marketplace Card/Row, Data Room Index)
       ↓
7. FULL SCREEN REFACTORING (Marketplace → Asset Detail → Factory → Operations)
```

---

## 30.16 Classificação de Riscos de Migração

```
┌────────────────────────────────────────────────────────────────────────┐
│ MATRIZ DE RISCO TÉCNICO                                                │
├──────────┬─────────────────────────────────────┬───────────────────────┤
│ Nível    │ Escopo                              │ Ações Mitigatórias    │
├──────────┼─────────────────────────────────────┼───────────────────────┤
│ LOW      │ Tokens isolados de cor e raio       │ Substituição direta   │
│ MEDIUM   │ Controles compartilhados (Botão/Inp)│ Teste visual comparat.│
│ HIGH     │ Refatoração de Tabelas e Cards      │ Validação em D2/D3/D4 │
│ CRITICAL │ Estrutura de Temas e Layout Shell   │ Preservação dual-token│
└──────────┴─────────────────────────────────────┴───────────────────────┘
```

---

## 30.17 Fases de Implementação Futura (05A a 05I)

```text
PHASE 05A → Token Infrastructure (Inserção de variáveis CSS sem quebra)
PHASE 05B → Typography + Spacing Foundation (Open Sans e grade de 4px)
PHASE 05C → Color Migration (Substituição dos 115 hex pelos tokens oficiais)
PHASE 05D → Geometry Migration (Unificação de radius.sm 8px e elevações)
PHASE 05E → Core Components Refactoring (Buttons, Inputs, Selects, Badges)
PHASE 05F → Composite & Domain Modules (Drawers, Tables, Tabs, Skeletons)
PHASE 05G → Screen-by-Screen Migration (Marketplace, Dossiê, Esteira, Backoffice)
PHASE 05H → Theme Cleanup (Remoção de regras CSS legadas redundantes)
PHASE 05I → Legacy Removal & Code Freeze (Eliminação total de estilos legados)
```

---

## 30.18 Período de Coexistência (Dual-Token Period)

Durante a transição técnica, o sistema operará com aliases de compatibilidade:
```css
/* Exemplo de ponte de compatibilidade temporária */
--orange: var(--color-brand-orange);
--bg: var(--surface-dark-canvas);
--panel: var(--surface-dark-default);
```
- **Fonte da Verdade Única:** `GLEMO_DESIGN_SYSTEM_v2.0.md`.
- **Proibição:** Nenhum novo valor arbitrário pode ser adicionado à camada legada durante o período de coexistência.

---

## 30.19 Fonte Única da Verdade (Single Source of Truth)

- **`GLEMO_DESIGN_SYSTEM_v2.0.md`** é a fonte da verdade conceitual e normativa absoluta do projeto.
- O código-fonte (`CSS`, `TypeScript`, `HTML`) é derivado estrito desta especificação.
- Nenhuma alteração visual arbitrária deve ser feita diretamente no código sem prévia formalização no documento do Design System.

---

## 30.20 Política de Congelamento de Legado (Legacy Freeze)

A partir da aprovação desta fase:
1. **Veto a novos valores hexadecimais avulsos.**
2. **Veto a novos valores de border-radius fora da escala oficial.**
3. **Veto a novos estilos inline de espaçamento não múltiplos de 4px.**
4. **Veto a pesos de fonte fora de 300, 400, 500, 600 e 700.**

---

## 30.21 Estratégia de Regressão Visual e Garantia de Qualidade

1. **Screenshots Comparativos (Before/After):** Registro fotográfico de todas as telas antes e após a aplicação dos tokens.
2. **Auditoria de Responsividade:** Validação em viewports 360px, 768px, 1024px, 1440px e 1920px.
3. **Validação de Estados Interativos:** Hover, focus-visible, active, disabled e loading em todos os controles.
4. **Auditoria de Acessibilidade (WCAG AA):** Ratio de contraste >= 4.5:1 para textos e 3:1 para elementos de interface.

---

## 30.22 Riscos de Performance e Sanitização

- Eliminação de declarações `!important` redundantes.
- Redução de regras CSS duplicadas entre `style.css` e estilos embutidos no `app.html`.
- Eliminação de sombras custosas de renderização (`0 18px 50px rgba(...)`).

---

## 30.23 Migration Scorecard (Métricas de Acompanhamento)

```
┌────────────────────────────────────────────────────────┐
│ SCORECARD DE MIGRAÇÃO DO DESIGN SYSTEM                 │
├─────────────────────────────────────┬──────────────────┤
│ Métrica                             │ Meta Final       │
├─────────────────────────────────────┼──────────────────┤
│ Color Token Coverage                │ 100%             │
│ Typography Token Coverage           │ 100%             │
│ Geometry Token Coverage             │ 100%             │
│ Legacy Hex Count                    │ 0                │
│ Arbitrary Radius Count              │ 0                │
│ Arbitrary Shadow Count              │ 0                │
│ !important Declarations Count       │ 0                │
│ Carditis Reduction (Level 0 Adopt.) │ >= 60% dos dados │
│ Core Component Adoption             │ 100%             │
└─────────────────────────────────────┴──────────────────┘
```

---

## 30.24 Definition of Done (DoD)

A migração técnica será considerada oficialmente concluída quando:
- [ ] 100% das cores consumirem `--color-*` ou `--surface-*`.
- [ ] 100% dos raios de borda consumirem `--radius-*`.
- [ ] 100% das tipografias utilizarem `Open Sans` nos pesos 300, 400, 500, 600 ou 700.
- [ ] Todos os botões, inputs e microindicadores forem substituídos pelos Core Components.
- [ ] Todas as tabelas financeiras possuírem alinhamento numérico à direita e `tabular-nums`.
- [ ] Detalhes de investigação forem migrados para Drawers.
- [ ] Todos os contrastes atenderem a WCAG AA.
- [ ] Zero regressões visuais em mobile e desktop.

---

## 30.25 Ordem de Implementação Técnica Recomendada

```text
1. PASSO 01: Injetar o bloco completo de CSS Custom Properties (:root) no topo das folhas de estilo.
2. PASSO 02: Atualizar a tipografia global para Open Sans com normalização de pesos.
3. PASSO 03: Refatorar os controles interativos básicos (Buttons, Inputs, Badges, Status).
4. PASSO 04: Refatorar a estrutura do Marketplace e Asset Fact Sheet aplicando D1/D2 e Drawers.
5. PASSO 05: Refatorar esteiras operacionais (Asset Factory e Compliance) aplicando D3/D4 e Tabelas.
```

---

# 31 — CSS TOKEN SPECIFICATION (REFERÊNCIA DE NOMENCLATURA COMPLETA)

```css
/* ==========================================================================
   GLEMO DESIGN SYSTEM v2.0 — CSS CUSTOM PROPERTIES SPECIFICATION
   ========================================================================== */

:root {
  /* --- Brand Primitives --- */
  --color-brand-blue: #0059FF;
  --color-brand-light-blue: #00BAFF;
  --color-brand-green: #00FFA2;
  --color-brand-yellow: #CCCF0A;
  --color-brand-light-orange: #FF9A00;
  --color-brand-orange: #F15C00;

  /* --- Neutral Scale --- */
  --color-neutral-0: #FFFFFF;
  --color-neutral-50: #F7F8F9;
  --color-neutral-100: #E9EDEE;
  --color-neutral-200: #CCD1D7;
  --color-neutral-300: #AEB6C0;
  --color-neutral-400: #929EAC;
  --color-neutral-500: #7A8491;
  --color-neutral-600: #6F7685;
  --color-neutral-700: #5F657D;
  --color-neutral-800: #3E4654;
  --color-neutral-900: #202634;
  --color-neutral-950: #0D1624;

  /* --- Semantic Colors --- */
  --color-semantic-info: #0059FF;
  --color-semantic-info-subtle: #EEF5FF;
  --color-semantic-info-border: #BBD8FF;

  --color-semantic-success: #087F62;
  --color-semantic-success-subtle: #EAF8F1;
  --color-semantic-success-border: #B2E7D5;

  --color-semantic-warning: #B44400;
  --color-semantic-warning-subtle: #FFF4EC;
  --color-semantic-warning-border: #FCD5BC;

  --color-semantic-danger: #B53C3C;
  --color-semantic-danger-subtle: #FFF0EE;
  --color-semantic-danger-border: #F9C8C4;

  --color-semantic-neutral: #5F657D;
  --color-semantic-neutral-subtle: #F1F4F6;
  --color-semantic-neutral-border: #DCE2E4;

  /* --- Surface Architecture (Light) --- */
  --surface-canvas: var(--color-neutral-50);
  --surface-default: var(--color-neutral-0);
  --surface-subtle: #F1F4F6;
  --surface-elevated: var(--color-neutral-0);
  --surface-sunken: var(--color-neutral-100);
  --surface-overlay: rgba(7, 18, 38, 0.45);

  /* --- Surface Architecture (Dark Institutional) --- */
  --surface-dark-canvas: #071226;
  --surface-dark-default: #0D1A31;
  --surface-dark-subtle: #12233E;
  --surface-dark-elevated: #182C4D;
  --surface-dark-sunken: #050E1D;
  --surface-dark-border: rgba(255, 255, 255, 0.10);

  /* --- Geometry: Radius --- */
  --radius-none: 0px;
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* --- Geometry: Borders & Dividers --- */
  --border-subtle: 1px solid var(--color-neutral-100);
  --border-default: 1px solid var(--color-neutral-200);
  --border-strong: 1px solid var(--color-neutral-300);
  --border-focus: 2px solid var(--color-brand-blue);
  --divider-subtle: 1px solid var(--color-neutral-100);
  --divider-default: 1px solid var(--color-neutral-200);

  /* --- Geometry: Elevation & Shadows --- */
  --elevation-none: none;
  --elevation-1: 0 2px 8px rgba(31, 41, 55, 0.04);
  --elevation-2: 0 8px 24px rgba(31, 41, 55, 0.08);
  --elevation-3: 0 16px 48px rgba(7, 18, 38, 0.16);

  /* --- Geometry: Focus --- */
  --focus-ring: 2px solid var(--color-brand-blue);
  --focus-offset: 2px;

  /* --- Interaction & Action Tokens --- */
  --color-action-business: var(--color-brand-blue);
  --color-action-business-hover: #0A6BFF;
  --color-action-investor: var(--color-brand-orange);
  --color-action-investor-hover: #FA8501;
  --color-action-destructive: var(--color-semantic-danger);
  --color-action-destructive-hover: #9F2F2F;

  /* --- Typography: Family & Weights --- */
  --font-family-sans: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* --- Typography Scale: Display --- */
  --font-size-display-xl: 48px;
  --line-height-display-xl: 56px;
  --font-size-display-lg: 40px;
  --line-height-display-lg: 48px;
  --font-size-display-md: 36px;
  --line-height-display-md: 44px;

  /* --- Typography Scale: Headings --- */
  --font-size-heading-xl: 32px;
  --line-height-heading-xl: 40px;
  --font-size-heading-lg: 28px;
  --line-height-heading-lg: 36px;
  --font-size-heading-md: 24px;
  --line-height-heading-md: 32px;
  --font-size-heading-sm: 20px;
  --line-height-heading-sm: 28px;
  --font-size-heading-xs: 18px;
  --line-height-heading-xs: 24px;

  /* --- Typography Scale: Body --- */
  --font-size-body-lg: 16px;
  --line-height-body-lg: 24px;
  --font-size-body-md: 14px;
  --line-height-body-md: 20px;
  --font-size-body-sm: 13px;
  --line-height-body-sm: 18px;

  /* --- Typography Scale: Labels & Aux --- */
  --font-size-label-lg: 14px;
  --line-height-label-lg: 20px;
  --font-size-label-md: 12px;
  --line-height-label-md: 16px;
  --font-size-caption: 11px;
  --line-height-caption: 16px;
  --font-size-overline: 11px;
  --line-height-overline: 16px;
  --letter-spacing-overline: 0.06em;

  /* --- Typography Scale: Numeric --- */
  --font-size-numeric-xl: 36px;
  --line-height-numeric-xl: 44px;
  --font-size-numeric-lg: 28px;
  --line-height-numeric-lg: 36px;
  --font-size-numeric-md: 20px;
  --line-height-numeric-md: 28px;
  --font-size-numeric-sm: 14px;
  --line-height-numeric-sm: 20px;

  /* --- Spacing Scale (4px Base Grid) --- */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-7: 28px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* --- Component Aliases: Buttons --- */
  --component-button-radius: var(--radius-sm);
  --component-button-height-sm: 32px;
  --component-button-height-md: 40px;
  --component-button-height-lg: 48px;

  /* --- Component Aliases: Inputs & Selects --- */
  --component-input-radius: var(--radius-sm);
  --component-input-height-sm: 32px;
  --component-input-height-md: 40px;
  --component-input-height-lg: 48px;
  --component-input-border: var(--border-default);
  --component-input-border-focus: var(--border-focus);

  /* --- Component Aliases: Micro-Indicators --- */
  --component-badge-radius: var(--radius-full);
  --component-status-radius: var(--radius-full);
  --component-tag-radius: var(--radius-sm);

  /* --- Component Aliases: Containers & Overlays --- */
  --component-card-radius: var(--radius-md);
  --component-panel-radius: var(--radius-md);
  --component-drawer-radius: var(--radius-md);
  --component-dialog-radius: var(--radius-md);
  --component-tooltip-radius: var(--radius-xs);

  /* --- Component Aliases: Elevations --- */
  --component-card-elevation: var(--elevation-none);
  --component-card-hover-elevation: var(--elevation-1);
  --component-popover-elevation: var(--elevation-2);
  --component-drawer-elevation: var(--elevation-3);
  --component-dialog-elevation: var(--elevation-3);
}
```

---

# 32 — CORE RULES SUMMARY

> **GlemO is information-first, not component-first.**  
> **Structure with hierarchy before structure with borders.**  
> **Not every piece of information needs a container.**  
> **Reduce visual color density without reducing brand expression.**  
> **Do not reduce information capability. Reduce simultaneous cognitive demand.**  
> **Migration before replacement. Comprehension before deprecation.**  
> **Premium comes from precision, typography and spacing, not decoration.**  
> **Consistency is more important than originality.**  
> **The interface should expose complexity progressively, not hide it.**  
> **GlemO should feel dense with information, not dense with interface.**

---

## CHANGELOG

### v2.0 — Phase 05D.2: Card & Container Audit (Carditis Reduction) (16 de Setembro de 2026)
- **Status:** Auditado e Consolidado em Lote (*Carditis reduction completed*).
- **Auditoria Estrutural de Containers:** 402 containers auditados e classificados na hierarquia canônica de 4 níveis (Level 0 a Level 3).
- **Redução de Ruído Visual:** Eliminação de nested cards redundantes nas telas prioritárias (Marketplace, Asset Fact Sheet, Asset Factory, Compliance e Data Room).
- **Superfícies Canônicas (Level 2):** Preservação das unidades funcionais reais (`.asset-card`, `.panel`, `.form-grid`) com `var(--radius-md)` (12px), `var(--border-subtle)` e `var(--elevation-none)`.
- **Preservação de Integridade:** Zero remoção de informação, zero quebra de layout e zero regressão de rotas.

### v2.0 — Phase 05D.1: Micro-Indicators Normalization (16 de Setembro de 2026)
- **Status:** Especificado e Normalizado (*Micro-indicators taxonomy active*).
- **Segregação Canônica dos 4 Papéis:** `Badge` (Classificação / `radius.full`), `Status` (Estado / `radius.full` + Ícone + Texto + Cor Semântica), `Tag` (Atributo / `radius.sm` 8px), `Label` (Identificação / `radius.none`).

### v2.0 — Phase 05C: Core Controls & Radius Migration (16 de Setembro de 2026)
- **Status:** Implementado no Código (*Core Controls architecture completed*).
- **Core Controls Migrados:** 100% dos controles fundamentais (`Button`, `Input`, `Select`, `Textarea`, `Tabs`, `Segmented Controls`) migrados para a arquitetura do GlemO Design System v2.0 nos 3 contextos de tela.
- **Radius Semântico de Controles:** Migração de raios legados (`6px`, `7px`, `10px`, `12px`) para o padrão canônico `var(--radius-sm)` (8px) em botões, campos e seletores.
- **Alturas Padronizadas:** Normalização de alturas (`32px`, `40px`, `48px`) respeitando os níveis de densidade D1–D4.
- **Focus & Active States Acessíveis:** Adicionado `:focus-visible` com anel de 2px + 2px offset em todos os controles interativos; feedback físico `:active` (scale 0.98) restrito a botões de ação e CTAs.
- **Variantes e Contexto Cromático:** Segregação de `Primary B2B` (`--color-action-business`), `Primary Investor` (`--color-action-investor`), `Secondary` e `Destructive` (`--color-semantic-danger`).
- **Preservação de Escopo:** Badges, Status, Tags, Cards, Modais, Drawers e Tabelas preservados intactos para as Fases 05D e 05E.

### v2.0 — Phase 05B: Typography & Spacing Normalization (16 de Setembro de 2026)
- **Status:** Implementado no Código (*Production normalization completed*).
- **Normalização Tipográfica Global:** `Open Sans` (`var(--font-family-sans)`) estabelecida como a fonte oficial única da interface ativa nos 3 contextos (Data Room, Prototype, Auth). `JetBrains Mono` (`var(--font-family-mono)`) mapeada para dados técnicos e hashes.
- **Normalização de Pesos Tipográficos:** 100% dos pesos legados não-canônicos (`650`, `760`, `780`, `800`, `820`, `850`, `900`) migrados para a escala estrita de 5 níveis (`var(--font-weight-semibold)` / 600 e `var(--font-weight-bold)` / 700). Zero pesos inválidos remanescentes.
- **Escala Tipográfica & Alturas de Linha:** Mapeamento de títulos, subtítulos, corpo de texto, labels e caption para os tokens `--font-size-*` e `--line-height-*`.
- **Auditoria & Normalização de Spacing:** 100% dos 499 espaçamentos auditados. 257 espaçamentos mapeados diretamente para a grade modular de 4px (`--space-1` a `--space-24`); 242 ocorrências preservadas/classificadas com critério funcional (Class B: layout dinâmico/safe-area/sticky top/zero reset; Class C: micro-alinhamentos de componentes reservados para as Fases 05C/05D).
- **Preservação Visual e Estrutural:** Zero alterações de layout, dimensões de sidebar, rotas ou componentes complexos. 100% de integridade operacional mantida.

### v2.0 — Phase 05A.1: Foundation Token Layer Alignment (16 de Setembro de 2026)
- **Status:** Implementado e Saneado (*Normative token layer verified*).
- **Tokens Canônicos:** Brand Primitives fixados (`Blue #0059FF`, `Light Blue #00BAFF`, `Green #00FFA2`, `Yellow #CCCF0A`, `Light Orange #FF9A00`, `Orange #F15C00`). Semantic Status segregados (`Info #0059FF`, `Success #087F62`, `Warning #B44400`, `Danger #B53C3C`, `Neutral #5F657D`). Escala Neutral (0 a 950) e Radius (0, 4, 8, 12, 16, 24, 9999px).

### v2.0 — Phase 05A: Foundation Token Layer (16 de Setembro de 2026)
- **Status:** Implementado no Código (*Production tokens injected*).
- **Camada Global de Tokens:** Injeção das variáveis CSS oficiais (`:root`) contendo Brand Primitives, Neutral Scale (12 níveis), Semantic Status, Surface Light & Dark, Content Hierarchy, Geometry Radius (0–9999px), Borders & Dividers, Functional Elevations (0–3), Spacing Grid (4–96px), Typography Scale e Motion.
- **Dual-Token Compatibility Layer:** Implementada camada de compatibilidade preservando os 3 temas existentes (Data Room Dark, Prototype Warm Light e Auth) sem nenhuma alteração estrutural ou regressão visual.
- **Arquivos com Tokens:** `html/style.css`, `wireframe_package/app.html`, `login.css`, `glemo-tokens.css`, `html/glemo-tokens.css`, `wireframe_package/glemo-tokens.css`.

### v2.0 — Phase 05: Token Migration & Implementation Strategy (16 de Setembro de 2026)
- **Status:** Auditado e Planejado (*Ready for technical implementation*).
- **Princípio Central:** *"Migration before replacement. Comprehension before deprecation."*
- **Inventário Completo do Código:** Mapeamento de 3 camadas de interface (Data Room Dark, Prototype Light e Auth).
- **Auditoria dos 115 Tons Hexadecimais:** Classificação e direcionamento em 8 grupos semânticos (Brand, Neutral, Surface, Text, Border, Semantic, Data Viz, Legacy).
- **Resolução de Conflitos de Tema:** Mapeamento e reconciliação entre o tema escuro institucional e o protótipo claro.
- **Normalização de Pesos Tipográficos:** Veto e plano de conversão para pesos não canônicos (`760`, `800`, `850`, `900`).
- **Consolidação Geométrica:** Plano de transição de valores arbitrários (`5px`, `6px`, `7px`, `10px`, `14px`) para a escala padrão (`radius.sm 8px`, `radius.md 12px`).
- **Mapeamento de Componentes Legados:** Classificação de botões, inputs, cards, chips, tabelas e modais.
- **Estratégia de Redução de Cards:** Plano de transição para Level 0 e migração de datasets para `Table` e `Drawer`.
- **Governança Técnica:**
  - Grafo de dependências de 7 estágios.
  - Matriz de riscos técnicos (Low, Medium, High, Critical).
  - Roteiro de implementação em 9 fases (05A a 05I).
  - Política de coexistência (Dual-Token Period).
  - Política de congelamento de legado (*Legacy Freeze*).
  - Scorecard de migração e Definition of Done (DoD) com 8 critérios obrigatórios.

### v2.0 — Phase 04: Information Density & Information Architecture (16 de Setembro de 2026)
- **Status:** Especificado e Consolidado (*Ready for implementation*).
- **Princípio Central Formalizado:** *"Do not reduce information capability. Reduce simultaneous cognitive demand."*
- **Information-First Architecture:** Formalizada a progressão `Information → Hierarchy → Context → Interaction → Container`.
- **Hierarquia Global de 4 Níveis:** Mapeamento explícito de `LEVEL 0 SIGNAL`, `LEVEL 1 CONTEXT`, `LEVEL 2 EVIDENCE`, `LEVEL 3 SOURCE`.
- **Fluxo Estrutural de Dados:** Padronizado o encadeamento `Signal → Context → Evidence → Source`.
- **Progressive Disclosure:** 4 camadas formais (`Visible by Default`, `Available on Demand`, `Deep Detail`, `Source`).
- **Escala de Densidade D0–D4:** Formalização definitiva para Editorial (D0), Comfortable (D1), Standard (D2 Default), Operational (D3) e Compact (D4).

### v2.0 — Phase 03.2: Core Components Architecture (16 de Setembro de 2026)
- **Status:** Especificado e Consolidado (*Ready for implementation*).
- **Abordagem Information-First:** Componentes estruturam o dado e não competem com ele.
- **Taxonomia Global de Estados:** Padronizados 9 estados globais.
- **14 Core Components Especificados:** `Button`, `Input`, `Select`, `Textarea`, `Tabs`, `Badge`, `Status`, `Tag`, `Label`, `Table`, `Drawer`, `Dialog`, `Tooltip`, `Skeleton`.
- **CSS Token Specification Expansão:** Adicionados todos os aliases de componentes (`--component-*`).

### v2.0 — Phase 03.1: Geometry Foundation (16 de Setembro de 2026)
- **Status:** Especificado e Consolidado (*Ready for implementation*).
- **Radius Scale Consolidada:** Escala estrita formalizada (`radius.none` a `radius.full`).
- **Border & Divider Hierarchy:** Estabelecidos os 5 níveis de bordas e separadores lineares.
- **Card Strategy (4 Níveis):** Formalizados os 4 níveis de contenção (Level 0 a Level 3).
- **Functional Elevation Scale:** Definidos os 4 níveis de sombra funcional.

### v2.0 — Phase 02: Color Foundation (16 de Setembro de 2026)
- **Brand Palette Clarification:** Primitivos oficiais fixados com papéis operacionais explicitados.
- **Contextual Roles (B2B vs B2C):** Regra de aplicação contextual (`Blue` B2B / `Orange` B2C / `Neutral-first`).
- **Neutral Scale Completa:** Escala contínua de 12 níveis (`neutral.0` a `neutral.950`).
- **Surface Architecture:** Definida a hierarquia de superfícies claras e escuras institucionais.

### v2.0 — Phase 01: Typography + Spacing Foundation (16 de Setembro de 2026)
- **Typography Scale:** Definida a escala canônica completa.
- **Numeric System:** Formalizada a escala numérica para métricas financeiras.
- **Font Weight Policy:** Família única `Open Sans` com pesos permitidos exclusivamente em `300`, `400`, `500`, `600` e `700`.
- **4px Spacing Grid:** Consolidada a escala modular base 4px (`space.1 = 4px` a `space.24 = 96px`).
