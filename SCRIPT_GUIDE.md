# 🚀 SCRIPT AUTOMATIZADO - COMANDO CLEAN

> **Automatização completa de desenvolvimento com perguntas interativas**

---

## 📋 Índice

1. [Visão Geral](#-visão-geral)
2. [Instalação & Primeiros Passos](#-instalação--primeiros-passos)
3. [Scripts Disponíveis](#-scripts-disponíveis)
4. [Guia Interativo](#-guia-interativo)
5. [Casos de Uso](#-casos-de-uso)
6. [Troubleshooting](#-troubleshooting)

---

## 📖 Visão Geral

Este projeto contém **dois scripts automatizados** para gerenciar todo o desenvolvimento do Comando Clean:

- **`cmd-clean.py`** - Python 3 (multiplataforma)
- **`cmd-clean.ps1`** - PowerShell (Windows nativo)

### Por que usar?

✅ **Automatização** - Executa tarefas repetitivas com um clique  
✅ **Perguntas Interativas** - Guia o usuário através de opções  
✅ **Sem Erros** - Validação de entrada integrada  
✅ **Documentação** - Análise completa do projeto incluída  
✅ **Escalável** - Fácil adicionar novos componentes/páginas  

---

## 🔧 Instalação & Primeiros Passos

### Opção 1: Python (Recomendado para Multiplataforma)

#### Requisitos
- Python 3.8+
- npm instalado

#### Uso
```bash
# Navegar até o projeto
cd "caminho/para/comando-clean"

# Executar script
python cmd-clean.py
```

#### Primeira Execução
1. Escolha: **"🚀 Iniciar Desenvolvimento"**
2. Confirme: **"Instalar dependências primeiro?"** → **Sim**
3. Escolha: **"🔧 Configurações"** → **"Configurar WhatsApp"**
4. Insira seu número: `5581999629352`

---

### Opção 2: PowerShell (Windows Native)

#### Requisitos
- Windows 10/11
- PowerShell 5.1+
- npm instalado

#### Configuração Inicial (Uma Única Vez)

Se receber erro de permissão, execute:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

#### Uso
```powershell
# Navegar até o projeto
cd "C:\Users\Fullstark\Documents\VSCode\comando-clean\Nova pasta"

# Executar script
.\cmd-clean.ps1
```

---

## 🎮 Scripts Disponíveis

### Menu Principal

```
┌─────────────────────────────────────┐
│ O QUE VOCÊ QUER FAZER?              │
├─────────────────────────────────────┤
│ 1. 🚀 Iniciar Desenvolvimento       │
│ 2. 🔧 Configurações                 │
│ 3. 📦 Gerenciar Componentes         │
│ 4. 📄 Gerenciar Páginas             │
│ 5. ✏️  Editar Conteúdo              │
│ 6. 🔍 Verificar Projeto             │
│ 7. 🏗️  Build & Deploy               │
│ 8. 📊 Ver Análise Completa          │
│ 9. ❌ Sair                           │
└─────────────────────────────────────┘
```

---

## 📚 Guia Interativo

### 1️⃣ Iniciar Desenvolvimento

```
🚀 Iniciar Desenvolvimento
├─ Instalar dependências? [s/n]
└─ Inicia servidor em http://localhost:3000 ou 3001
```

**O que faz:**
- Instala/atualiza npm packages
- Inicia Next.js dev server
- Auto-reload ao salvar arquivos

---

### 2️⃣ Configurações

```
🔧 Configurações
├─ Configurar WhatsApp
│  └─ Atualiza número em: WhatsAppButton.tsx, orcamento/page.tsx, resumo/page.tsx
├─ Configurar URL do Site
│  └─ Salva em: .env.local (NEXT_PUBLIC_SITE_URL)
└─ Ver Variáveis de Ambiente
   └─ Exibe todas as env vars
```

**Arquivo gerado:** `.env.local`

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5581999629352
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

### 3️⃣ Gerenciar Componentes

```
📦 Gerenciar Componentes
├─ Criar novo componente
│  ├─ Nome: [Ex: MeuComponente]
│  └─ Cria em: components/MeuComponente.tsx
│     com template boilerplate
├─ [Listar componentes existentes]
└─ Abrir componente no editor
```

**Template Gerado:**
```tsx
'use client'

interface MeuComponenteProps {
  // Defina suas props aqui
}

export default function MeuComponente({ }: MeuComponenteProps) {
  return (
    <div className="p-4 rounded-lg border border-slate-200">
      MeuComponente
    </div>
  )
}
```

**Para usar em outra página:**
```tsx
import MeuComponente from '@/components/MeuComponente'

export default function Page() {
  return <MeuComponente />
}
```

---

### 4️⃣ Gerenciar Páginas

```
📄 Gerenciar Páginas
├─ Criar nova página
│  ├─ Rota: [Ex: servicos, sobre, admin/dashboard]
│  └─ Cria em: app/servicos/page.tsx
│     com template boilerplate
├─ [Listar páginas existentes]
└─ Acessível em: http://localhost:3000/servicos
```

**Template Gerado:**
```tsx
'use client'

export default function ServicoPage() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">
          Nova Página
        </h1>
        <p className="text-slate-600 mb-8">Conteúdo aqui...</p>
      </div>
    </main>
  )
}
```

---

### 5️⃣ Editar Conteúdo

```
✏️  Editar Conteúdo
├─ Atualizar número WhatsApp
│  └─ Busca e substitui em: components/WhatsAppButton.tsx, 
│     app/orcamento/page.tsx, app/resumo/page.tsx
└─ Editar Hero Section (Home)
   └─ Abre arquivo no editor padrão
```

**Exemplo: Atualizar WhatsApp**
```
Novo número WhatsApp: 5581987654321
✅ components/WhatsAppButton.tsx: 3 ocorrências atualizadas
✅ app/orcamento/page.tsx: 2 ocorrências atualizadas
✅ app/resumo/page.tsx: 2 ocorrências atualizadas
Total: 7 referências atualizadas
```

---

### 6️⃣ Verificar Projeto

```
🔍 Verificação do Projeto
├─ Estrutura
│  ├─ ✅ package.json
│  ├─ ✅ tsconfig.json
│  ├─ ✅ tailwind.config.js
│  └─ ✅ app/page.tsx
├─ Dependências instaladas
│  └─ npm list --depth=0
└─ Status do Git (opcional)
   └─ git status
```

---

### 7️⃣ Build & Deploy

```
🏗️  Build & Deploy
├─ Fazer Build para Produção
│  └─ npm run build → .next/ otimizado
├─ Executar Linter
│  └─ npm run lint → verifica código
├─ Limpar Cache Next.js
│  └─ Remove .next/ e reconstrói
└─ Ver Tamanho da Build
   └─ Exibe tamanho do .next/
```

---

### 8️⃣ Ver Análise Completa

```
📊 Ver Análise Completa
└─ Abre: SITE_ANALYSIS.md
   ├─ Arquitetura do projeto
   ├─ Estrutura de dados
   ├─ Fluxo de usuário
   ├─ Design system
   ├─ Integrações
   └─ Próximas melhorias
```

---

## 🎯 Casos de Uso

### Caso 1: Criar Nova Página de Serviços

```bash
$ python cmd-clean.py
# Menu → 4. Gerenciar Páginas
# → Criar nova página
# → Rota: servicos
# → OK: página criada em app/servicos/page.tsx
# → Abra e edite o conteúdo
```

### Caso 2: Adicionar Novo Componente de Depoimento

```bash
$ python cmd-clean.py
# Menu → 3. Gerenciar Componentes
# → Criar novo componente
# → Nome: TestimonialCard
# → OK: componente criado em components/TestimonialCard.tsx
# → Edite e importe em page.tsx
```

### Caso 3: Mudar Número WhatsApp

```bash
$ python cmd-clean.py
# Menu → 2. Configurações
# → Configurar WhatsApp
# → Novo número: 5581987654321
# → ✅ Atualizado em: WhatsAppButton.tsx, orcamento/page.tsx, resumo/page.tsx
```

### Caso 4: Fazer Build para Deploy

```bash
$ python cmd-clean.py
# Menu → 7. Build & Deploy
# → Fazer Build para Produção
# → ✅ Build concluído
# → Upload .next/ para servidor
```

### Caso 5: Iniciar Desenvolvimento

```bash
$ python cmd-clean.py
# Menu → 1. Iniciar Desenvolvimento
# → Instalar dependências? [s]
# → Servidor iniciado em http://localhost:3001
# → Abra navegador
```

---

## 🐛 Troubleshooting

### PowerShell: "cmd-clean.ps1 cannot be loaded"

**Solução:**
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

---

### Python: "python not found"

**Verificar instalação:**
```bash
python --version
# ou
python3 --version
```

**Se não aparecer**, [baixe Python](https://python.org/downloads/)

---

### npm: "command not found"

**Verificar instalação:**
```bash
npm --version
```

**Se não aparecer**, [instale Node.js](https://nodejs.org/)

---

### Porta 3000 em uso

**Automático:**
```
⚠️  Port 3000 is in use, trying 3001 instead.
✅ Acesse: http://localhost:3001
```

---

### Erro ao atualizar WhatsApp

**Verificar:**
- Número tem 11+ dígitos?
- Arquivo existe? (`components/WhatsAppButton.tsx`)

---

## 📝 Exemplo Completo: Do Zero ao Deploy

```bash
# 1. Instalar dependências
$ python cmd-clean.py
# → 1. Iniciar Desenvolvimento
# → Instalar? [s]
# ✅ npm install concluído

# 2. Configurar WhatsApp
$ python cmd-clean.py
# → 2. Configurações
# → Configurar WhatsApp
# → 5581987654321
# ✅ Configurado

# 3. Criar página de serviços
$ python cmd-clean.py
# → 4. Gerenciar Páginas
# → Criar nova página
# → servicos
# ✅ Página criada em app/servicos/page.tsx

# 4. Criar componente de card
$ python cmd-clean.py
# → 3. Gerenciar Componentes
# → Criar novo componente
# → ServicoCard
# ✅ Componente criado em components/ServicoCard.tsx

# 5. Editar conteúdo
# (Abra VS Code e edite os arquivos)

# 6. Testar
$ python cmd-clean.py
# → 1. Iniciar Desenvolvimento
# → npm run dev
# ✅ Acesse http://localhost:3000

# 7. Fazer build
$ python cmd-clean.py
# → 7. Build & Deploy
# → Fazer Build para Produção
# ✅ Arquivos em .next/

# 8. Deploy
# Upload .next/ + package.json + public/ para:
# - Vercel
# - Netlify
# - Heroku
# - Seu servidor
```

---

## 🎓 Dicas & Boas Práticas

### ✅ DO

- ✅ Use o script para tarefas repetitivas
- ✅ Mantenha `.env.local` seguro (adicione ao `.gitignore`)
- ✅ Teste localmente antes de fazer build
- ✅ Commit regularmente com mensagens descritivas
- ✅ Revise `SITE_ANALYSIS.md` para entender o projeto

### ❌ DON'T

- ❌ Não edite `.next/` diretamente (será regenerado)
- ❌ Não delete `node_modules/` (rode `npm install` se necessário)
- ❌ Não commite `.env.local` no git
- ❌ Não confie apenas no auto-reload (recarregue página se necessário)
- ❌ Não perca o número WhatsApp (está em 3 arquivos!)

---

## 📞 Suporte

Se encontrar problemas:

1. **Verifique** `SITE_ANALYSIS.md` - documentação completa
2. **Execute** "🔍 Verificar Projeto" - diagnóstico automático
3. **Limpe cache** - "🏗️  Build & Deploy" → "Limpar Cache Next.js"
4. **Reinstale deps** - `npm install`

---

## 🚀 Próximos Passos

Agora que você tem o script automatizado:

1. **Use regularmente** - torna desenvolvimento mais rápido
2. **Customize** - adicione seus próprios scripts
3. **Documente** - atualize comentários nos arquivos
4. **Automatize CI/CD** - use script em GitHub Actions/GitLab CI
5. **Escale** - adicione mais funções conforme necessário

---

**Versão:** 1.0.0  
**Última atualização:** 2026-05-01  
**Compatibilidade:** Python 3.8+ / PowerShell 5.1+ / Windows/Mac/Linux
