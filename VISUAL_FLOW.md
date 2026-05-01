# 📊 VISUAL FLOW - COMANDO CLEAN

## 🎯 Arquitetura do Projeto

```
┌─────────────────────────────────────────────────────────────┐
│                   COMANDO CLEAN v0.1.0                      │
│          Next.js + TypeScript + Tailwind CSS                │
└─────────────────────────────────────────────────────────────┘

                         ┌─ Python 3
                    ┌────┤
                    │    └─ PowerShell 5.1
                    │
            ┌───────┴─────────┐
            │  SCRIPTS        │
            │  (Automação)    │
            └────────┬────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
    📦 Deps      ⚙️  Config  📱 Components
    npm i        .env.local  HTML/CSS/JS
        │            │            │
        └────────────┴────────────┘
                     │
            ┌────────▼────────┐
            │   NEXT.JS DEV   │
            │  3000/3001      │
            └────────┬────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
    📄 HOME      💰 BUDGET    📋 RESUME
    page.tsx    orcamento    resumo
        │            │            │
        └────────────┴────────────┘
                     │
                     ▼
            ┌────────────────┐
            │ LOCAL STORAGE  │
            │ Cart Items     │
            └────────┬───────┘
                     │
                     ▼
            ┌────────────────┐
            │   WHATSAPP     │
            │ API (wa.me)    │
            └────────────────┘
```

---

## 🔄 Fluxo de Dados do Usuário

```
┌─────────────────────────────────────────────────────────────┐
│                    USUÁRIO EXTERNO                          │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ▼ [Acessa site]
        ┌────────────────┐
        │  HOME PAGE     │
        │  /page.tsx     │
        ├────────────────┤
        │ • Hero Section │
        │ • Problemas    │
        │ • Solução      │
        │ • Depoimentos  │
        │ • Planos       │
        └────────┬───────┘
                 │
    ┌────────────┴────────────┐
    │ Clica em "Agendar Agora"│
    └────────────┬────────────┘
                 │
                 ▼
        ┌─────────────────────┐
        │  ORÇAMENTO PAGE     │
        │  /orcamento/page    │
        ├─────────────────────┤
        │ STEP 1: Plano       │
        │ ├─ Higienização     │
        │ ├─ Proteção Essencial│
        │ └─ Saúde Total      │
        └──────────┬──────────┘
                   │
    ┌──────────────▼────────────┐
    │ STEP 2: Seleciona Items   │
    │ ├─ Sofá, Tapete,         │
    │ ├─ Poltrona, Cadeira,    │
    │ ├─ Colchão, Automóvel    │
    │ ├─ Puff, Outros          │
    │ └─ [Clica item]          │
    └──────────┬───────────────┘
               │
    ┌──────────▼─────────────┐
    │ STEP 3: Personaliza    │
    │ ├─ Qtd/Modelo/Material │
    │ └─ [Adiciona ao Cart]  │
    └──────────┬─────────────┘
               │
    ┌──────────▼──────────────┐
    │  SIDEBAR SUMMARY        │
    │  (Sticky à direita)     │
    │ ├─ Lista itens          │
    │ ├─ Total de serviços    │
    │ └─ [Solicitar WhatsApp] │
    └──────────┬──────────────┘
               │ Salva
               ▼ LocalStorage
    ┌──────────────────────┐
    │ window.localStorage  │
    │ 'comandoCleanCartItems'│
    │ = [CartItems]        │
    └──────────┬───────────┘
               │
    ┌──────────▼──────────────┐
    │  RESUMO PAGE            │
    │  /resumo/page.tsx       │
    ├──────────────────────┤
    │ • Carrega LocalStorage │
    │ • Mostra itens        │
    │ • Permite editar qtd  │
    │ • Nome + Endereço     │
    │ • [Confirmar via WA]  │
    └──────────┬─────────────┘
               │
    ┌──────────▼──────────────────┐
    │ Monta Mensagem WhatsApp      │
    │ ├─ Plano selecionado        │
    │ ├─ Lista de itens           │
    │ ├─ Total de pedidos         │
    │ ├─ Nome/Endereço            │
    │ └─ "Desejo receber orcamento"│
    └──────────┬──────────────────┘
               │
    ┌──────────▼──────────────────┐
    │ URL Encoded + enviado para  │
    │ https://wa.me/5581999629352 │
    │ ?text={MESSAGE_ENCODED}     │
    └──────────┬──────────────────┘
               │
               ▼ [Clica no link]
        ┌─────────────────┐
        │   WHATSAPP      │
        │   MOBILE/WEB    │
        │ (Conversa pré-  │
        │  preenchida)    │
        └─────────────────┘
               │
               ▼ [Envia mensagem]
        ┌──────────────────┐
        │  ADMIN RECEBE    │
        │  ORÇAMENTO       │
        │  (Whatsapp)      │
        └──────────────────┘
```

---

## 🛠️ Estrutura de Componentes

```
┌─────────────────────────────────────────┐
│         RootLayout (layout.tsx)         │
│  ┌──────────────────────────────────┐  │
│  │  <header>                        │  │
│  │    Header Component              │  │
│  │    ├─ Logo                       │  │
│  │    ├─ Nav Links                  │  │
│  │    └─ Brand Info                 │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │  <main>                          │  │
│  │    ↓ Rotas Dinâmicas ↓           │  │
│  │                                  │  │
│  │  ┌─ / (Home)                     │  │
│  │  │  ├─ Hero Section              │  │
│  │  │  ├─ Problemas Section         │  │
│  │  │  ├─ Solução Section           │  │
│  │  │  ├─ Depoimentos Section       │  │
│  │  │  └─ Planos Section            │  │
│  │  │                               │  │
│  │  ├─ /orcamento (Budget)         │  │
│  │  │  ├─ Seletor Plano             │  │
│  │  │  ├─ Seletor Itens             │  │
│  │  │  ├─ Customização              │  │
│  │  │  └─ Sidebar Resumo            │  │
│  │  │                               │  │
│  │  └─ /resumo (Summary)           │  │
│  │     ├─ Lista Itens               │  │
│  │     ├─ Edição Qtd                │  │
│  │     ├─ Info Cliente              │  │
│  │     └─ Botão WhatsApp            │  │
│  │                                  │  │
│  └──────────────────────────────────┘  │
│                                         │
│  ┌──────────────────────────────────┐  │
│  │  <WhatsAppButton />              │  │
│  │  (Fixed bottom-right)            │  │
│  │  Botão flutuante WhatsApp        │  │
│  └──────────────────────────────────┘  │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📁 Árvore de Arquivos

```
comando-clean/
│
├─📄 README.md                 [Info geral]
├─📊 SITE_ANALYSIS.md          [Análise completa] ⭐
├─📖 SCRIPT_GUIDE.md           [Como usar scripts] ⭐
├─⚡ QUICK_START.md            [Quick reference] ⭐
├─📋 VISUAL_FLOW.md            [Este arquivo]
│
├─🐍 cmd-clean.py             [Script Python] ⭐
├─💻 cmd-clean.ps1            [Script PowerShell] ⭐
│
├─📦 package.json             [Deps]
├─📋 package-lock.json        [Lock file]
├─🔧 tsconfig.json            [TS Config]
├─🎨 tailwind.config.js       [Tailwind Config]
├─🔧 postcss.config.js        [PostCSS Config]
├─⚙️  next.config.js           [Next Config]
├─🔍 .eslintrc.json           [ESLint Config]
├─🚫 .gitignore               [Git ignore rules]
│
├─📂 app/                      [App directory]
│  ├─🎨 globals.css            [Global styles]
│  ├─📄 layout.tsx             [Root layout + Header + WA Button]
│  ├─🏠 page.tsx               [HOME - Landing page]
│  │
│  ├─💰 orcamento/
│  │  └─📄 page.tsx            [BUDGET form]
│  │
│  └─📋 resumo/
│     └─📄 page.tsx            [SUMMARY/Checkout]
│
├─📂 components/
│  ├─🎯 Header.tsx             [Navigation bar]
│  └─💬 WhatsAppButton.tsx     [Floating WA button]
│
├─📂 public/                   [Static assets]
│  └─🖼️  logo.png              [Logo image]
│
├─📂 .github/
│  └─📝 copilot-instructions.md [Copilot custom instructions]
│
├─📂 .next/                    [Build output] (generated)
│  ├─ .cache/
│  ├─ server/
│  └─ static/
│
└─📂 node_modules/            [Dependencies] (generated)
   └─ next/, react, tailwindcss, etc...

⭐ = Arquivos mais importantes para você
```

---

## 🔐 Configuração & Secrets

```
┌──────────────────────────────────┐
│   .env.local (DO NOT COMMIT!)    │
├──────────────────────────────────┤
│ NEXT_PUBLIC_WHATSAPP_NUMBER      │
│ = 5581999629352                  │
│                                  │
│ NEXT_PUBLIC_SITE_URL             │
│ = http://localhost:3000          │
└──────────────────────────────────┘
         ↓ (Lido por)
┌──────────────────────────────────┐
│  next.config.js                  │
│  tailwind.config.js              │
│  app/**/*.tsx                    │
└──────────────────────────────────┘
```

---

## 🚀 Ciclo de Desenvolvimento

```
    ┌──────────────────┐
    │  Editar Arquivo  │
    │  (VSCode)        │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │  File Watcher    │
    │  (Next.js)       │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │  Recompila       │
    │  TypeScript      │
    │  (~1s)           │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │  Hot Reload      │
    │  Browser (~1s)   │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │  Ver Mudanças    │
    │  Browser         │
    └────────┬─────────┘
             │
             ▼ (Se OK)
    ┌──────────────────┐
    │  Commit Git      │
    │  (Opcional)      │
    └────────┬─────────┘
             │
             └─ Repete...
```

---

## 📱 Responsive Breakpoints

```
┌─────────────────────────────────────────────────┐
│  Mobile First Approach (Tailwind CSS)           │
├─────────────────────────────────────────────────┤
│ 0px       ▁▁▁▁▁▁▁▁▁▁ (default)                │
│           Mobile layout                         │
│                                                 │
│ 768px  ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ (md:)               │
│        Tablet layout                            │
│                                                 │
│ 1024px ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ (lg:)          │
│        Desktop layout                           │
│                                                 │
│ 1280px ▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁ (xl:)   │
│        Large Desktop                            │
└─────────────────────────────────────────────────┘
```

---

## 🎨 Design System

```
┌─────────────────────────────────┐
│      CORES PRINCIPAIS           │
├─────────────────────────────────┤
│ 🔵 Blue-600    Primária         │
│ 🟢 Emerald-500 WhatsApp/Ações  │
│ ⚪ White       Fundo principal │
│ ⬜ Slate-50    Light BG        │
│ ⬛ Slate-950   Dark BG         │
│ 🔤 Slate-900   Headings        │
│ 🔤 Slate-600   Body text       │
│ 🔤 Slate-400   Secondary text  │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│     COMPONENTES REUTILIZÁVEIS   │
├─────────────────────────────────┤
│ • OptionButton                  │
│ • Card / Section                │
│ • Badge                         │
│ • Button (primário/secundário)  │
│ • Form Input                    │
│ • List Items                    │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│     TIPOGRAFIA                  │
├─────────────────────────────────┤
│ Font: Inter (Google Fonts)      │
│ H1: text-4xl bold              │
│ H2: text-3xl bold              │
│ H3: text-2xl semibold          │
│ P:  text-base/lg regular       │
│ Label: text-sm uppercase       │
└─────────────────────────────────┘
```

---

## 🔄 Ciclo de Build

```
┌───────────────┐
│  npm run dev  │ (Desenvolvimento)
└───────┬───────┘
        │ Hot reload ativado
        │ Sem otimizações
        ▼
    Server rodando (3000/3001)
    ✅ Rápido para desenvolvimento


┌────────────────┐
│ npm run build  │ (Produção)
└───────┬────────┘
        │
        ▼ Transpila TypeScript
        ▼ Minifica código
        ▼ Tree shaking
        ▼ Otimiza imagens
        ▼ Cria sourcemaps
        │
        ▼
    .next/ folder gerado
    ✅ Otimizado para produção


┌────────────────┐
│  npm start     │ (Produção - Rodando)
└───────┬────────┘
        │ Usa .next/ pré-compilado
        │ Máxima velocidade
        ▼
    Server standalone (3000)
    ✅ Pronto para deploy
```

---

## 📊 Dados em LocalStorage

```
┌────────────────────────────────────┐
│  window.localStorage               │
├────────────────────────────────────┤
│                                    │
│ Key: 'comandoCleanCartItems'      │
│                                    │
│ Value: JSON.stringify([            │
│   {                                │
│     key: 'sofa',                  │
│     label: 'Sofá',                │
│     quantity: 2,                  │
│     details: 'Lugares: 3\n'       │
│              'Modelo: Retrátil\n' │
│              'Material: Tecido'   │
│   },                              │
│   { ... mais itens ... }          │
│ ])                                │
│                                    │
└────────────────────────────────────┘

     ↓ Persiste no navegador mesmo depois de fechar
     ↓ Específico por domínio
     ↓ ~5-10MB limite
     ↓ Só leitura para HTTPS (no ambiente prod)
```

---

## 🔗 Integração WhatsApp

```
┌─────────────────────────────────────┐
│  Fluxo WhatsApp API                 │
├─────────────────────────────────────┤
│                                     │
│  1. Usuário preenche orçamento      │
│  2. Clica "Solicitar via WhatsApp"  │
│  3. URL montada:                    │
│     https://wa.me/5581999629352     │
│     ?text={ENCODED_MESSAGE}         │
│  4. Browser abre WhatsApp           │
│  5. Conversa pré-preenchida         │
│  6. Usuário envia                   │
│                                     │
└─────────────────────────────────────┘

Mensagem Exemplo:
───────────────────────────────────
Solicitação de Orçamento - Comando Clean

Plano: Higienização Pontual

1. Sofá
- Lugares: 3
- Modelo: Retrátil
- Material: Tecido
Quantidade: 1

Total de serviços: 1
Total de pedidos: 1

Desejo receber um orçamento formal
───────────────────────────────────
```

---

## 🎯 Métricas Importantes

```
┌──────────────────────────────────┐
│  PERFORMANCE                     │
├──────────────────────────────────┤
│ Build Time:      30-60 seg       │
│ Hot Reload:      <1 seg          │
│ Page Load:       <2 seg (dev)    │
│ Production Size: ~50-100 KB JS   │
│ LCP (Largest):   <2.5s           │
│ FID (Interaction): <100ms        │
│ CLS (Stability):  <0.1           │
└──────────────────────────────────┘

┌──────────────────────────────────┐
│  SEO BASICS                      │
├──────────────────────────────────┤
│ Title:       ✅ Dinâmico         │
│ Description: ✅ Dinâmico         │
│ Meta Tags:   ✅ layout.tsx       │
│ Mobile:      ✅ Responsive       │
│ Speed:       ✅ Next.js otimizado│
│ Sitemap:     ⏳ Futura           │
│ Robots.txt:  ⏳ Futura           │
└──────────────────────────────────┘
```

---

## 🔒 Segurança

```
┌──────────────────────────────────┐
│  MEDIDAS DE SEGURANÇA            │
├──────────────────────────────────┤
│ ✅ No credentials no código      │
│ ✅ .env.local no .gitignore      │
│ ✅ TypeScript previne erros      │
│ ✅ Sanitização de inputs         │
│ ⏳ HTTPS em produção             │
│ ⏳ CSP headers                   │
│ ⏳ Rate limiting WhatsApp        │
│ ⏳ Validação backend (futura)    │
└──────────────────────────────────┘
```

---

**Versão**: 1.0.0  
**Última atualização**: 2026-05-01  
**Compatibilidade**: Todos os sistemas operacionais
