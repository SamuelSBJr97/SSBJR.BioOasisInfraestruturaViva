# Rede Oásis — Infraestrutura Biológica Descentralizada (Projeto em Desenvolvimento)

> **Nota de Transparência:** Este projeto encontra-se em **fase de desenvolvimento, modelagem conceitual e estruturação de pilotos**. Todos os dados operacionais partem de um baseline zerado (`0 polos ativos`, `0 espécies em campo`, `0 viveiros conectados`), e os números e locais indicados representam **metas geográficas de expansão** do plano de negócios.

Aplicação frontend moderna desenvolvida em **Angular (versão mais recente)** com arquitetura modular baseada em **Standalone Components**, **Signals** para reatividade de estado local/global, internacionalização completa (**`pt-BR`**, **`en-US`**, **`es-ES`**), nova sintaxe de **Control Flow (`@if`, `@for`)** e pipeline de estilos com **Tailwind CSS**.

---

## 🏛️ Arquitetura e Estrutura de Pastas (Padrão Enterprise)

```text
src/
├── app/
│   ├── core/                               # Serviços singleton, modelos de domínio e configurações globais
│   │   ├── models/
│   │   │   └── oasis.models.ts             # Interfaces tipadas (Polos Regionais, Módulos, Ativos, Contratos SaaS)
│   │   └── services/
│   │       ├── oasis-network.service.ts    # Estado reativo dos 5 polos e telemetria de ativos via Signals
│   │       └── theme.service.ts            # Navegação, âncoras e configurações de visualização
│   ├── shared/                             # Componentes reutilizáveis do Design System
│   │   └── components/
│   │       ├── cta-button/                 # Botão CTA responsivo com variantes (primary, secondary, ghost)
│   │       ├── glass-card/                 # Card com glassmorphism (backdrop-blur) e halo luminoso
│   │       └── section-heading/            # Cabeçalho padronizado com badges e gradientes Tech-Nature
│   ├── features/
│   │   └── landing/                        # Landing page modular dividida por seções de negócio
│   │       ├── hero/                       # Hero split-screen com mapa SVG do Brasil e marcadores pulsantes
│   │       ├── paradigm-shift/             # Comparativo contrastante: Exportação Ornamental vs. Missão Crítica
│   │       ├── regional-oasis/             # Abas interativas com Signals (3 Pilares e Viveiristas de Base)
│   │       ├── traceability/               # Scanner de QR/RFID com RFID e modelo SaaS
│   │       ├── navbar/                     # Barra fixa translúcida com navegação âncora e mobile drawer
│   │       ├── footer/                     # Links institucionais e captação de leads com seleção de perfil
│   │       └── landing.component.ts        # Orquestrador da landing page
│   ├── app.config.ts                       # Configurações do Angular Application
│   └── app.ts                              # Componente raiz minimalista
├── styles.css                              # Import do Tailwind CSS, design tokens e utilitários customizados
└── index.html                              # Meta tags e carregamento da tipografia Inter
```

---

## 🎨 Design System: "Tech-Nature"

- **Cores Primárias:** Verde Floresta (`#228B22`) e Verde Esmeralda (`#50C878` / `#7DDFAA`).
- **Superfícies:** Escuras e profundas (`#0f1a0f`, `#0d150d`), com efeitos de **glassmorphism** (`backdrop-blur-md` e bordas semitransparentes `rgba(80, 200, 120, 0.2)`).
- **Animações Customizadas Tailwind:**
  - `animate-pulse-marker`: Pulsação contínua para marcadores de polos regionais no mapa.
  - `animate-float`: Flutuação suave para o mapa geodésico do Brasil.
  - Utilitários `.glass` e `.glass-strong` para cards e navbar.

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v20+ ou v22+)
- npm (v10+)

### Instalação das Dependências
```bash
npm install
```

### Servidor de Desenvolvimento
```bash
npm start
# ou
npx ng serve
```
Acesse `http://localhost:4200` no seu navegador.

### Compilação para Produção
```bash
npm run build
```
Os arquivos otimizados serão gerados em `dist/rede-oasis/browser`.

---

## 🚢 Integração Contínua e Deploy (GitHub Pages)

O projeto inclui um fluxo automatizado via **GitHub Actions** em `.github/workflows/deploy.yml`.

### Como Funciona:
1. Ao realizar push nas branches `main` ou `master`, o workflow executa `npm install`.
2. Executa `npx ng build --configuration production --base-href /<NOME_DO_REPO>/`.
3. O diretório `dist/rede-oasis/browser` é publicado automaticamente na branch `gh-pages`.
4. No GitHub, acerte em **Settings > Pages** para servir a partir da branch `gh-pages` (pasta `/ root`).
