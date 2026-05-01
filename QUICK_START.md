# ⚡ QUICK START - COMANDO CLEAN

## 🚀 Iniciar em 30 segundos

### Windows PowerShell
```powershell
cd "C:\Users\Fullstark\Documents\VSCode\comando-clean\Nova pasta"
.\cmd-clean.ps1
# Escolha: 1. Iniciar Desenvolvimento
```

### Windows/Mac/Linux (Python)
```bash
cd "/caminho/para/comando-clean"
python cmd-clean.py
# Escolha: 1. Iniciar Desenvolvimento
```

---

## 📋 Menu Rápido

| Opção | Comando | O que faz |
|-------|---------|----------|
| 🚀 Iniciar | `npm run dev` | Servidor em localhost:3000 |
| 🛠️ Configurar | `.env.local` | Edita WhatsApp, URL, etc |
| ➕ Componente | `components/Novo.tsx` | Cria novo componente |
| 📄 Página | `app/novo/page.tsx` | Cria nova página |
| 🏗️ Build | `npm run build` | Compila para produção |
| ✅ Lint | `npm run lint` | Verifica código |
| 📊 Análise | `SITE_ANALYSIS.md` | Documentação completa |

---

## 🎯 Tarefas Comuns

### Adicionar WhatsApp customizado
```
Script → 2. Configurações → Configurar WhatsApp
ou
Edite em: components/WhatsAppButton.tsx (linha ~12)
```

### Criar nova página
```
Script → 4. Gerenciar Páginas → Criar nova página
ou
Crie: app/sua-pagina/page.tsx
```

### Criar novo componente
```
Script → 3. Gerenciar Componentes → Criar novo componente
ou
Crie: components/SeuComponente.tsx
```

### Atualizar número WhatsApp em tudo
```
Script → 5. Editar Conteúdo → Atualizar número WhatsApp
Insira novo número
✅ Atualizado em 3 arquivos automaticamente
```

---

## 📂 Arquivos Importantes

```
comando-clean/
├── 📊 SITE_ANALYSIS.md       ← Análise completa do projeto
├── 📖 SCRIPT_GUIDE.md        ← Guia detalhado dos scripts
├── ⚡ QUICK_START.md         ← Este arquivo
│
├── 🐍 cmd-clean.py           ← Script Python (multiplataforma)
├── 💻 cmd-clean.ps1          ← Script PowerShell (Windows)
│
├── app/
│   ├── page.tsx              ← HOME (landing page)
│   ├── orcamento/page.tsx    ← ORÇAMENTO (form)
│   ├── resumo/page.tsx       ← RESUMO (checkout)
│   └── layout.tsx            ← Layout geral
│
├── components/
│   ├── Header.tsx            ← Navbar
│   └── WhatsAppButton.tsx    ← Botão flutuante WhatsApp
│
├── .env.local               ← Configurações (não commitar!)
├── package.json             ← Dependências npm
├── tsconfig.json            ← Configuração TypeScript
├── tailwind.config.js       ← Configuração Tailwind CSS
└── next.config.js           ← Configuração Next.js
```

---

## 🔑 Números Importantes

| Item | Valor | Arquivo(s) |
|------|-------|-----------|
| WhatsApp | `5581999629352` | WhatsAppButton.tsx, orcamento/page.tsx, resumo/page.tsx |
| Porta Dev | `3000` ou `3001` | Automático (next dev) |
| Node Version | 18+ | package.json (via .nvmrc se necessário) |

---

## ✅ Checklist Primeira Vez

- [ ] Clonar/baixar projeto
- [ ] Abrir em VS Code
- [ ] Rodar `cmd-clean.py` ou `cmd-clean.ps1`
- [ ] Escolher: "1. Iniciar Desenvolvimento"
- [ ] Confirmar: "Instalar dependências?" → **Sim**
- [ ] Abrir browser: http://localhost:3000
- [ ] Ver página inicial carregando ✅
- [ ] Configurar WhatsApp (seu número)
- [ ] Começar a editar!

---

## 🎓 Estrutura de Dados (Localstorage)

```typescript
// Carrinho de orçamento salvo no navegador
{
  "comandoCleanCartItems": [
    {
      "key": "sofa",
      "label": "Sofá",
      "quantity": 1,
      "details": "Lugares: 3\nModelo: Retrátil\nMaterial: Tecido"
    }
  ]
}
```

---

## 🔗 Fluxo do Usuário

```
HOME (/page.tsx)
  ↓ [Clica em "AGENDAR AGORA"]
ORÇAMENTO (/orcamento/page.tsx)
  ├─ Escolhe plano
  ├─ Seleciona itens
  ├─ Personaliza (quantidade, modelo, material)
  ├─ Clica "Adicionar ao Orçamento"
  └─ LocalStorage salva tudo
  ↓
RESUMO (/resumo/page.tsx)
  ├─ Carrega do LocalStorage
  ├─ Mostra itens selecionados
  ├─ Preenche nome e endereço
  └─ Clica "Solicitar via WhatsApp"
  ↓
WHATSAPP
  └─ Abre conversa pré-preenchida
```

---

## 🎨 Cores do Projeto

```css
/* Primary */
--blue: #2563eb        /* Botões, highlights */
--emerald: #10b981    /* WhatsApp, ações */

/* Background */
--white: #ffffff       /* Principal */
--slate-50: #f8fafc    /* Light bg */
--slate-950: #020617   /* Dark bg */

/* Text */
--slate-900: #0f172a   /* Headings */
--slate-600: #475569   /* Body text */
--slate-400: #94a3b8   /* Secondary */
```

---

## 🚢 Para Deploy

1. **Build**: `npm run build`
2. **Testar**: `npm start` (local)
3. **Upload**: Enviar pasta `.next/` + `package.json` + `public/`
4. **Plataformas recomendadas**:
   - ✅ **Vercel** (oficial Next.js)
   - ✅ **Netlify**
   - ✅ **Railway**
   - ✅ Seu servidor VPS

---

## 🔐 Variáveis de Ambiente (`.env.local`)

```env
# Não commitar este arquivo!
NEXT_PUBLIC_WHATSAPP_NUMBER=5581999629352
NEXT_PUBLIC_SITE_URL=https://comando-clean.com
```

---

## 📞 Suporte Rápido

| Problema | Solução |
|----------|---------|
| Porta 3000 em uso | Automático usa 3001 |
| npm install erro | `npm install --legacy-peer-deps` |
| Build lento | `npm run build` leva ~30s (normal) |
| Componente não aparece | Reinicie servidor: Ctrl+C → `npm run dev` |
| TypeScript error | Verifique tipos em interfaces |
| Tailwind não funciona | Reinicie servidor ou `npm run build` |

---

## 📚 Documentação Completa

**Para informações detalhadas, leia:**

1. [`SITE_ANALYSIS.md`](./SITE_ANALYSIS.md) - Análise arquitetura
2. [`SCRIPT_GUIDE.md`](./SCRIPT_GUIDE.md) - Como usar scripts
3. [`README.md`](./README.md) - Info geral projeto

---

## ⏰ Tempos Aproximados

| Tarefa | Tempo |
|--------|-------|
| `npm install` (primeira vez) | 2-3 min |
| `npm run dev` (iniciar) | 5-10 seg |
| `npm run build` | 30-60 seg |
| Hot reload (editar arquivo) | <1 seg |
| Criar componente (script) | 10 seg |
| Criar página (script) | 10 seg |

---

## 🎯 Próximas Ações

**Escolha uma:**

1. **Aprender**: Leia [`SITE_ANALYSIS.md`](./SITE_ANALYSIS.md)
2. **Experimentar**: Rodecrie sua primeira página com [`cmd-clean.py`](./cmd-clean.py)
3. **Editar**: Customize conteúdo em `app/page.tsx`
4. **Configurar**: Adicione seu WhatsApp
5. **Deploy**: Faça build e publique

---

**Última atualização**: 2026-05-01  
**Status**: ✅ Pronto para produção

Boa sorte! 🚀
