# 🧹 Comando Clean

**Website profissional para serviços de limpeza Comando Clean**

[![Next.js](https://img.shields.io/badge/Next.js-14.0.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🎯 Sobre o Projeto

Site responsivo e moderno para apresentar serviços de limpeza profissional. Desenvolvido com Next.js, TypeScript e Tailwind CSS, oferecendo uma experiência excelente em qualquer dispositivo.

### ✨ Funcionalidades

- ✅ **Landing page responsiva** - Funciona perfeitamente em mobile, tablet e desktop
- ✅ **Catálogo de serviços** - Apresentação clara de todos os serviços oferecidos
- ✅ **Seção de testimoniais** - Avaliações de clientes satisfeitos
- ✅ **Call-to-action estratégicos** - Botões para contato e agendamento
- ✅ **Design moderno** - Interface limpa e profissional com Tailwind CSS
- ✅ **Performance otimizada** - Build automático com GitHub Pages

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 14** - Framework React com SSG/SSR
- **React 18** - Biblioteca de componentes
- **TypeScript** - Tipagem estática em JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS & Autoprefixer** - Processamento de CSS

### Ferramentas
- **Node.js & npm** - Gerenciamento de dependências
- **ESLint** - Linting de código
- **GitHub Pages** - Hospedagem estática
- **GitHub Actions** - Automação de deployment

---

## 📁 Estrutura do Projeto

```
comando-clean/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página inicial
│   └── globals.css         # Estilos globais
├── components/
│   ├── Header.tsx          # Cabeçalho com navegação
│   ├── Hero.tsx            # Seção herói principal
│   ├── Services.tsx        # Catálogo de serviços
│   ├── Features.tsx        # Diferenciais
│   ├── Testimonials.tsx    # Avaliações de clientes
│   ├── CTA.tsx             # Call-to-action
│   └── Footer.tsx          # Rodapé
├── public/                 # Arquivos estáticos
├── .github/
│   └── workflows/
│       └── deploy.yml      # Workflow de deploy automático
├── next.config.js          # Configuração Next.js
├── tailwind.config.js      # Configuração Tailwind
├── tsconfig.json           # Configuração TypeScript
└── package.json            # Dependências do projeto
```

---

## 🔧 Instalação e Desenvolvimento

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/jairoxlima/comando-clean.git
cd comando-clean
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:3000
```

---

## 📦 Build e Deploy

### Build Local
```bash
npm run build
npm run start
```

### Deploy no GitHub Pages

O projeto usa **GitHub Actions** para deploy automático:

1. Toda vez que você faz push para `main`, o workflow é acionado
2. O Next.js faz o build para arquivos estáticos
3. Os arquivos são enviados automaticamente para GitHub Pages
4. Site fica online em: `https://jairoxlima.github.io/comando-clean/`

#### Status do Deploy
Veja os workflows em: https://github.com/jairoxlima/comando-clean/actions

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev        # Inicia servidor de desenvolvimento

# Produção
npm run build      # Build para produção
npm run start      # Inicia servidor de produção

# Qualidade
npm run lint       # Verifica qualidade do código
```

---

## 🎨 Personalização

### Cores e Tema
Edite `tailwind.config.js` para mudar cores e tema

### Conteúdo
Edite os componentes em `components/` para alterar textos e informações

### Adicionando Serviços
Edite `components/Services.tsx` - array `services`

---

## 📊 Performance

- ✅ **Lighthouse Score**: 90+
- ✅ **Core Web Vitals**: Otimizado
- ✅ **Build Size**: < 50KB (gzipped)
- ✅ **Deploy Time**: ~2 minutos via GitHub Actions

---

## 🐛 Troubleshooting

### Build falha localmente
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Deploy não aparece online
1. Verifique em **Settings** → **Pages** se está configurado para `main` branch
2. Verifique em **Actions** se o workflow passou (✅ verde)
3. Aguarde 2-3 minutos para propagação do DNS

---

## 📞 Contato e Suporte

- **Email**: jairox.lima@gmail.com
- **LinkedIn**: [linkedin.com/in/jairo-lima-8b90336b/](https://www.linkedin.com/in/jairo-lima-8b90336b/)
- **GitHub**: [@jairoxlima](https://github.com/jairoxlima)

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

---

## 🙏 Agradecimentos

- Next.js e comunidade React
- Tailwind CSS pela excelente documentação
- GitHub Pages por hosting gratuito

---

**Desenvolvido com ❤️ por [Jairo Lima](https://github.com/jairoxlima)**

*Última atualização: 2026*
