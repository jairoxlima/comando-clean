# 📋 Análise Completa - Comando Clean

## 🏗️ Arquitetura do Projeto

### Stack Tecnológico
- **Framework**: Next.js 14.0.0
- **Linguagem**: TypeScript 5
- **Styling**: Tailwind CSS 3.3.0
- **React**: ^18
- **Build Tool**: Next.js (Webpack)

### Configuração
- **TypeScript**: Strict mode ativado
- **Aliases**: `@/*` aponta para raiz do projeto
- **HTML Lang**: pt-BR
- **Environment**: Windows (PowerShell)

---

## 📁 Estrutura de Diretórios

```
comando-clean/
├── app/
│   ├── globals.css              # Estilos globais Tailwind
│   ├── layout.tsx               # Layout raiz (Header + WhatsAppButton)
│   ├── page.tsx                 # Página inicial (HOME)
│   ├── orcamento/
│   │   └── page.tsx             # Configurador de serviços (BUDGET BUILDER)
│   └── resumo/
│       └── page.tsx             # Resumo do orçamento (SUMMARY)
├── components/
│   ├── Header.tsx               # Navbar com logo e navegação
│   └── WhatsAppButton.tsx       # Botão flutuante WhatsApp (fixo inferior direito)
├── public/                       # Assets estáticos (images, icons)
├── package.json                 # Dependências e scripts
├── tsconfig.json                # Configuração TypeScript
├── tailwind.config.js           # Configuração Tailwind
├── postcss.config.js            # PostCSS para Tailwind
├── next.config.js               # Configuração Next.js
├── .eslintrc.json               # ESLint config
├── .gitignore                   # Git ignore rules
└── .github/
    └── copilot-instructions.md  # Instruções para Copilot
```

---

## 🔄 Fluxo de Dados do Usuário

```
HOME (page.tsx)
  ↓
  ├─→ [SEÇÃO HERO] Botão "AGENDAR AGORA VIA WHATSAPP"
  ├─→ [SEÇÃO PROBLEMAS] Listagem de dores/problemas
  ├─→ [SEÇÃO SOLUÇÃO] Destacar diferencial
  ├─→ [SEÇÃO PROVA SOCIAL] Depoimentos clientes
  └─→ [SEÇÃO PLANOS] Cartões de planos com links para /orcamento?plan=X

↓

ORCAMENTO (orcamento/page.tsx)
  ├─ STEP 1: Escolher plano (unica, anual, saude)
  ├─ STEP 2: Selecionar item (sofa, tapete, poltrona, cadeira, colchao, automovel, puff, outros)
  ├─ STEP 3: Personalizar detalhes (quantidade, modelo, material, tamanho)
  └─ SIDEBAR: Resumo com "Adicionar ao Orçamento"
  
  → LocalStorage: Salva cartItems em 'comandoCleanCartItems'
  → Gera mensagem WhatsApp
  → Link: https://wa.me/5581999629352?text={ENCODED_MESSAGE}

↓

RESUMO (resumo/page.tsx)
  ├─ Carrega cartItems do LocalStorage
  ├─ Mostra lista de itens selecionados
  ├─ Permite editar quantidade e remover
  ├─ Campos: Nome e Endereço (opcionais)
  └─ Botão final: "Solicitar via WhatsApp"
  
  → Monta mensagem final
  → Limpa LocalStorage ou mantém histórico

↓

WHATSAPP (Contato Direto)
  WhatsApp Business recebe a solicitação
```

---

## 📊 Estrutura de Dados

### CartItem (LocalStorage)
```typescript
interface CartItem {
  key: string           // 'sofa', 'tapete', etc.
  label: string         // "Sofá", "Tapete", etc.
  quantity: number      // Quantidade de pedidos
  details: string       // Especificações técnicas
}

// Salvo em: window.localStorage.getItem('comandoCleanCartItems')
```

### ServiceItems (Constantes)
```typescript
{
  key: 'sofa',
  label: 'Sofá',
  options: ['Retrátil', 'Sofá Comum', 'Sofá de Canto', 'Sofá com Chaise', 'Sofá-cama'],
  materials: ['Tecido', 'Couro', 'Suede', 'Veludo'],
  quantity: 1-6 lugares
}
// Similar para: tapete, poltrona, cadeira, colchao, automovel, puff, outros
```

### Plans
```typescript
[
  { key: 'unica', label: 'Higienização Pontual', description: '...' },
  { key: 'anual', label: 'Proteção Essencial', description: '...' },
  { key: 'saude', label: 'Saúde Total', description: '...' }
]
```

---

## 🎨 Design System

### Cores Principais
- **Primary**: `blue-600` (#2563eb)
- **Success**: `emerald-500` (#10b981)
- **Background**: `white`, `slate-50`, `slate-950`
- **Text**: `slate-900`, `slate-600`, `slate-400`
- **Accent**: `blue-400`, `emerald-400`

### Componentes Reutilizáveis
- **OptionButton**: Botão de seleção com estado ativo/inativo
- **Section**: Contenedores com padding e bordas padronizadas
- **Card**: Cartões com sombra e hover

### Tailwind Classes Customizadas
```css
/* globals.css */
.skip-link { ... }
.custom-scrollbar { ... }
```

---

## 🔌 Integrações Externas

### WhatsApp API
- **Endpoint**: https://wa.me/{phone}?text={message}
- **Phone**: 5581999629352 (Recife/PE)
- **Formato Mensagem**: URL encoded, suporta quebras de linha \n

### Metadados & SEO
```typescript
title: 'Comando Clean | Higienização Profissional de Estofados'
description: 'Especialistas em limpeza e higienização...'
lang: 'pt-BR'
charset: 'utf-8'
```

---

## ⚙️ Scripts NPM Disponíveis

```bash
npm run dev      # Inicia servidor dev (porta 3000 ou 3001 se ocupada)
npm run build    # Build para produção
npm start        # Inicia servidor de produção
npm run lint     # Verifica ESLint
```

---

## 📝 Variáveis de Ambiente

Atualmente **nenhuma** está configurada. Se necessário adicionar:

```bash
# .env.local
NEXT_PUBLIC_WHATSAPP_NUMBER=5581999629352
NEXT_PUBLIC_SITE_URL=https://comando-clean.com
```

---

## 🐛 Pontos de Configuração Crítica

| Arquivo | Item | Valor Atual | Uso |
|---------|------|------------|-----|
| WhatsAppButton.tsx | Link | `https://wa.me/5581999999999` | ⚠️ DESATUALIZADO |
| orcamento/page.tsx | whatsappNumber | `5581999629352` | ✅ Correto |
| resumo/page.tsx | whatsappNumber | `5581999629352` | ✅ Correto |

---

## 🚀 Fluxo de Desenvolvimento

1. **Editar componentes**: Arquivo auto-recarrega (Hot Reload)
2. **Adicionar páginas**: Criar pasta em `/app` com `page.tsx`
3. **Adicionar componentes**: Criar em `/components`, importar em `layout.tsx`
4. **Estilizar**: Usar classes Tailwind direto no JSX
5. **Build**: `npm run build` gera arquivos otimizados em `.next/`

---

## 📦 Dependências Principais

```json
{
  "next": "14.0.0",           // Framework
  "react": "^18",             // UI Library
  "react-dom": "^18",         // DOM bindings
  "tailwindcss": "^3.3.0",    // CSS Utility
  "typescript": "^5",         // Type checking
  "autoprefixer": "^10.0.1",  // CSS vendor prefixes
  "postcss": "^8"             // CSS processing
}
```

---

## 🔒 Segurança & Performance

- ✅ TypeScript strict mode
- ✅ Componentes lazy (Suspense available)
- ✅ LocalStorage para cart (client-side only)
- ✅ Skip link para acessibilidade
- ⚠️ Sem CORS headers configurados (considerar se API externa necessária)
- ⚠️ Sem rate limiting para WhatsApp

---

## 📱 Responsividade

Breakpoints Tailwind usados:
- `md:` para tablets (768px)
- `lg:` para desktops (1024px)
- Mobile-first approach

---

## 🎯 Próximas Melhorias Sugeridas

1. **Adicionar Backend**: API para salvar orçamentos em banco de dados
2. **Sistema de Autenticação**: Clientes acompanharem serviços
3. **Dashboard Admin**: Gerenciar solicitações de orçamento
4. **Notificações**: Email/SMS quando orçamento é enviado
5. **Formas de Pagamento**: Integrar Stripe/PagSeguro
6. **Analytics**: Google Analytics ou Mixpanel
7. **CMS**: Permitir edição de conteúdo sem código
8. **Multi-idioma**: i18n para Inglês/Espanhol

---

**Versão**: v0.1.0  
**Data**: 2026-05-01  
**Autor**: Análise Completa - GitHub Copilot
