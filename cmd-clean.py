#!/usr/bin/env python3
"""
🚀 COMANDO CLEAN - SCRIPT AUTOMATIZADO DE DESENVOLVIMENTO
=====================================================

Script interativo para automação completa do desenvolvimento.
Faz perguntas específicas e executa tarefas automaticamente.

Uso: python cmd-clean.py
"""

import os
import subprocess
import json
import sys
from pathlib import Path
from typing import Optional, List, Dict, Any
import shutil

# CORES PARA TERMINAL
class Colors:
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    ENDC = '\033[0m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'

def print_header(title: str):
    """Imprime header formatado"""
    print(f"\n{Colors.HEADER}{Colors.BOLD}{'='*60}{Colors.ENDC}")
    print(f"{Colors.HEADER}{Colors.BOLD}{title.center(60)}{Colors.ENDC}")
    print(f"{Colors.HEADER}{Colors.BOLD}{'='*60}{Colors.ENDC}\n")

def print_success(msg: str):
    print(f"{Colors.GREEN}✅ {msg}{Colors.ENDC}")

def print_error(msg: str):
    print(f"{Colors.RED}❌ {msg}{Colors.ENDC}")

def print_info(msg: str):
    print(f"{Colors.CYAN}ℹ️  {msg}{Colors.ENDC}")

def print_warning(msg: str):
    print(f"{Colors.YELLOW}⚠️  {msg}{Colors.ENDC}")

def run_command(cmd: str, cwd: Optional[str] = None, show_output: bool = False) -> tuple[int, str]:
    """Executa comando e retorna (exit_code, output)"""
    try:
        result = subprocess.run(
            cmd,
            shell=True,
            cwd=cwd,
            capture_output=not show_output,
            text=True
        )
        return result.returncode, result.stdout + result.stderr
    except Exception as e:
        return 1, str(e)

def get_project_root() -> Path:
    """Retorna caminho raiz do projeto"""
    return Path(__file__).parent.absolute()

def input_choice(prompt: str, options: List[str]) -> str:
    """Menu de escolha numerado"""
    print(f"\n{Colors.BOLD}{prompt}{Colors.ENDC}")
    for i, opt in enumerate(options, 1):
        print(f"  {Colors.CYAN}{i}{Colors.ENDC}. {opt}")
    
    while True:
        try:
            choice = int(input(f"\n{Colors.BOLD}Escolha [1-{len(options)}]: {Colors.ENDC}"))
            if 1 <= choice <= len(options):
                return options[choice - 1]
            print_error(f"Escolha inválida. Digite entre 1 e {len(options)}")
        except ValueError:
            print_error("Por favor, digite um número válido")

def input_text(prompt: str, default: str = "") -> str:
    """Input com valor padrão"""
    default_text = f" [{default}]" if default else ""
    result = input(f"{Colors.BOLD}{prompt}{default_text}: {Colors.ENDC}").strip()
    return result if result else default

def input_yes_no(prompt: str) -> bool:
    """Input sim/não"""
    response = input(f"{Colors.BOLD}{prompt} (s/n): {Colors.ENDC}").strip().lower()
    return response in ('s', 'sim', 'y', 'yes')

# ============================================================================
# GERENCIAMENTO DE PROJETO
# ============================================================================

class ProjectManager:
    def __init__(self, root: Path):
        self.root = root
        self.package_json = root / "package.json"
        self.env_file = root / ".env.local"

    def install_dependencies(self):
        """Instala dependências npm"""
        print_info("Instalando dependências...")
        code, output = run_command("npm install", cwd=str(self.root), show_output=True)
        if code == 0:
            print_success("Dependências instaladas com sucesso!")
        else:
            print_error(f"Erro ao instalar dependências: {output}")
            return False
        return True

    def start_dev_server(self):
        """Inicia servidor de desenvolvimento"""
        print_info("Iniciando servidor de desenvolvimento...")
        print_warning("Servidor rodando. Pressione Ctrl+C para parar.\n")
        run_command("npm run dev", cwd=str(self.root), show_output=True)

    def build_production(self):
        """Compila projeto para produção"""
        print_info("Compilando para produção...")
        code, output = run_command("npm run build", cwd=str(self.root), show_output=True)
        if code == 0:
            print_success("Build concluído com sucesso!")
        else:
            print_error(f"Erro no build: {output}")
            return False
        return True

    def lint_check(self):
        """Executa linter"""
        print_info("Verificando código com ESLint...")
        code, output = run_command("npm run lint", cwd=str(self.root))
        print(output)
        if code == 0:
            print_success("Nenhum erro de lint encontrado!")
        else:
            print_warning("Alguns problemas foram encontrados no código")
        return code == 0

    def git_status(self):
        """Mostra status do git"""
        print_info("Status do Git:")
        run_command("git status", cwd=str(self.root), show_output=True)

    def git_commit(self, message: str):
        """Faz commit"""
        print_info(f"Fazendo commit: {message}")
        run_command("git add .", cwd=str(self.root))
        code, output = run_command(f'git commit -m "{message}"', cwd=str(self.root))
        if code == 0:
            print_success("Commit realizado!")
        else:
            print_warning("Nenhuma mudança para commitar ou erro no commit")

# ============================================================================
# GERENCIAMENTO DE CONFIGURAÇÃO
# ============================================================================

class ConfigManager:
    def __init__(self, root: Path):
        self.root = root
        self.env_file = root / ".env.local"

    def read_env(self) -> Dict[str, str]:
        """Lê arquivo .env.local"""
        if not self.env_file.exists():
            return {}
        
        env_vars = {}
        with open(self.env_file, 'r') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#'):
                    if '=' in line:
                        key, value = line.split('=', 1)
                        env_vars[key] = value
        return env_vars

    def write_env(self, env_vars: Dict[str, str]):
        """Escreve arquivo .env.local"""
        with open(self.env_file, 'w') as f:
            f.write("# Variáveis de Ambiente - Comando Clean\n")
            f.write(f"# Gerado em: {__import__('datetime').datetime.now()}\n\n")
            for key, value in env_vars.items():
                f.write(f"{key}={value}\n")

    def configure_whatsapp(self):
        """Configura número WhatsApp"""
        print_header("⚙️  CONFIGURAR WHATSAPP")
        
        current_env = self.read_env()
        current_number = current_env.get('NEXT_PUBLIC_WHATSAPP_NUMBER', '5581999629352')
        
        print(f"Número atual: {Colors.CYAN}{current_number}{Colors.ENDC}")
        new_number = input_text("Novo número (sem formatação, apenas dígitos)", default=current_number)
        
        # Validar formato
        if not new_number.isdigit() or len(new_number) < 11:
            print_error("Número inválido. Use formato: 5581999629352")
            return False
        
        current_env['NEXT_PUBLIC_WHATSAPP_NUMBER'] = new_number
        self.write_env(current_env)
        print_success(f"WhatsApp configurado para: {new_number}")
        return True

    def configure_site_url(self):
        """Configura URL do site"""
        print_header("⚙️  CONFIGURAR URL DO SITE")
        
        current_env = self.read_env()
        current_url = current_env.get('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000')
        
        print(f"URL atual: {Colors.CYAN}{current_url}{Colors.ENDC}")
        new_url = input_text("Nova URL", default=current_url)
        
        current_env['NEXT_PUBLIC_SITE_URL'] = new_url
        self.write_env(current_env)
        print_success(f"URL configurada para: {new_url}")
        return True

# ============================================================================
# GERENCIAMENTO DE COMPONENTES
# ============================================================================

class ComponentManager:
    def __init__(self, root: Path):
        self.root = root
        self.components_dir = root / "components"

    def list_components(self) -> List[str]:
        """Lista componentes existentes"""
        if not self.components_dir.exists():
            return []
        return [f.stem for f in self.components_dir.glob("*.tsx") if f.is_file()]

    def create_component(self):
        """Cria novo componente"""
        print_header("➕ CRIAR NOVO COMPONENTE")
        
        name = input_text("Nome do componente (PascalCase)", "MyComponent")
        if not name or not name[0].isupper():
            print_error("Nome deve começar com maiúscula (PascalCase)")
            return False

        component_file = self.components_dir / f"{name}.tsx"
        if component_file.exists():
            print_error(f"Componente {name} já existe!")
            return False

        # Template básico
        template = f'''\'use client\'

import {{ FC }} from \'react\'

interface {name}Props {{
  // Defina suas props aqui
}}

const {name}: FC<{name}Props> = ({{  }}) => {{
  return (
    <div className="p-4 rounded-lg border border-slate-200">
      {name}
    </div>
  )
}}

export default {name}
'''

        self.components_dir.mkdir(exist_ok=True)
        with open(component_file, 'w') as f:
            f.write(template)

        print_success(f"Componente {name} criado em: components/{name}.tsx")
        return True

# ============================================================================
# GERENCIAMENTO DE PÁGINAS
# ============================================================================

class PageManager:
    def __init__(self, root: Path):
        self.root = root
        self.app_dir = root / "app"

    def list_pages(self) -> List[str]:
        """Lista páginas existentes"""
        pages = []
        for item in self.app_dir.rglob("page.tsx"):
            if item.parent != self.app_dir:  # Exclui page.tsx raiz
                route = str(item.parent.relative_to(self.app_dir))
                pages.append(f"/{route}")
            else:
                pages.append("/")
        return sorted(pages)

    def create_page(self):
        """Cria nova página"""
        print_header("📄 CRIAR NOVA PÁGINA")
        
        route = input_text("Rota da página (ex: servicos, sobre, admin/dashboard)", "nova-pagina")
        route = route.strip('/').lower()

        page_dir = self.app_dir / route
        page_file = page_dir / "page.tsx"

        if page_file.exists():
            print_error(f"Página /{route} já existe!")
            return False

        # Template
        template = f'''\'use client\'

import Link from \'next/link\'

export default function {route.replace('-', ' ').title().replace(' ', '')}Page() {{
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Nova Página</h1>
        <p className="text-slate-600 mb-8">Conteúdo aqui...</p>
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
        >
          ← Voltar
        </Link>
      </div>
    </main>
  )
}}
'''

        page_dir.mkdir(parents=True, exist_ok=True)
        with open(page_file, 'w') as f:
            f.write(template)

        print_success(f"Página criada em: app/{route}/page.tsx")
        print_info(f"Acesse em: http://localhost:3000/{route}")
        return True

# ============================================================================
# GERENCIAMENTO DE CONTEÚDO
# ============================================================================

class ContentManager:
    def __init__(self, root: Path):
        self.root = root

    def update_whatsapp_link_in_files(self, new_number: str):
        """Atualiza número WhatsApp em todos os arquivos"""
        print_info(f"Atualizando número WhatsApp para: {new_number}")
        
        files_to_update = [
            self.root / "components" / "WhatsAppButton.tsx",
            self.root / "app" / "orcamento" / "page.tsx",
            self.root / "app" / "resumo" / "page.tsx",
        ]

        count = 0
        for file_path in files_to_update:
            if not file_path.exists():
                continue

            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Padrão para encontrar número WhatsApp
            original_count = content.count('5581999629352')
            if original_count > 0:
                new_content = content.replace('5581999629352', new_number)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print_success(f"  → {file_path.name}: {original_count} ocorrência(s) atualizadas")
                count += original_count

        if count > 0:
            print_success(f"Total: {count} referência(s) atualizadas")
        else:
            print_warning("Nenhuma referência encontrada")

    def edit_hero_section(self):
        """Edita seção hero da página inicial"""
        print_header("✏️  EDITAR HERO SECTION (Página Inicial)")
        
        page_file = self.root / "app" / "page.tsx"
        print_info(f"Arquivo: {page_file}")
        print_warning("Este é um arquivo grande. Recomenda-se editar manualmente ou via VS Code")
        
        if input_yes_no("Abrir arquivo no editor padrão?"):
            os.startfile(str(page_file)) if sys.platform == 'win32' else os.system(f"open {page_file}")

# ============================================================================
# MENU PRINCIPAL
# ============================================================================

def show_main_menu():
    """Menu principal"""
    options = [
        "🚀 Iniciar Desenvolvimento",
        "🔧 Configurações",
        "📦 Gerenciar Componentes",
        "📄 Gerenciar Páginas",
        "✏️  Editar Conteúdo",
        "🔍 Verificar Projeto",
        "🏗️  Build & Deploy",
        "📊 Ver Análise Completa",
        "❌ Sair"
    ]
    return input_choice("O que você quer fazer?", options)

def show_config_menu(config_mgr: ConfigManager):
    """Menu de configurações"""
    while True:
        options = [
            "Configurar WhatsApp",
            "Configurar URL do Site",
            "Ver Variáveis de Ambiente",
            "Voltar ao Menu Principal"
        ]
        choice = input_choice("Escolha uma configuração:", options)

        if choice == "Configurar WhatsApp":
            config_mgr.configure_whatsapp()
        elif choice == "Configurar URL do Site":
            config_mgr.configure_site_url()
        elif choice == "Ver Variáveis de Ambiente":
            env = config_mgr.read_env()
            print_info("Variáveis de Ambiente:")
            for key, value in env.items():
                print(f"  {Colors.CYAN}{key}{Colors.ENDC}={value}")
        else:
            break

def show_project_menu(proj_mgr: ProjectManager, config_mgr: ConfigManager):
    """Menu de verificação do projeto"""
    print_header("🔍 VERIFICAÇÃO DO PROJETO")
    
    print_info("Executando verificações...")
    
    # Verificar estrutura
    required_files = [
        "package.json",
        "tsconfig.json",
        "tailwind.config.js",
        "next.config.js",
        "app/page.tsx",
        "app/layout.tsx"
    ]
    
    for file in required_files:
        file_path = proj_mgr.root / file
        status = "✅" if file_path.exists() else "❌"
        print(f"  {status} {file}")

    # Verificar dependências
    print_info("\nDependências instaladas:")
    code, output = run_command("npm list --depth=0", cwd=str(proj_mgr.root))
    print(output[:500] + "..." if len(output) > 500 else output)

    # Git status
    if input_yes_no("\nMostrar status do Git?"):
        proj_mgr.git_status()

def show_build_menu(proj_mgr: ProjectManager):
    """Menu de build e deploy"""
    while True:
        options = [
            "Fazer Build para Produção",
            "Executar Linter",
            "Limpar Cache Next.js",
            "Ver Tamanho da Build",
            "Voltar ao Menu Principal"
        ]
        choice = input_choice("Build & Deploy:", options)

        if choice == "Fazer Build para Produção":
            proj_mgr.build_production()
        elif choice == "Executar Linter":
            proj_mgr.lint_check()
        elif choice == "Limpar Cache Next.js":
            cache_dir = proj_mgr.root / ".next"
            if cache_dir.exists():
                shutil.rmtree(cache_dir)
                print_success("Cache limpo!")
            else:
                print_warning("Cache não encontrado")
        elif choice == "Ver Tamanho da Build":
            build_dir = proj_mgr.root / ".next"
            if build_dir.exists():
                code, output = run_command(f"du -sh {build_dir}", cwd=str(proj_mgr.root))
                if code == 0:
                    print_info(f"Tamanho do build: {output}")
            else:
                print_warning("Execute build primeiro: npm run build")
        else:
            break

def main():
    """Loop principal"""
    project_root = get_project_root()
    proj_mgr = ProjectManager(project_root)
    config_mgr = ConfigManager(project_root)
    comp_mgr = ComponentManager(project_root)
    page_mgr = PageManager(project_root)
    content_mgr = ContentManager(project_root)

    print_header("🎯 COMANDO CLEAN - SCRIPT AUTOMATIZADO")
    print(f"{Colors.BOLD}Projeto: {project_root}{Colors.ENDC}\n")

    while True:
        choice = show_main_menu()

        if choice == "🚀 Iniciar Desenvolvimento":
            if input_yes_no("Instalar dependências primeiro?"):
                proj_mgr.install_dependencies()
            proj_mgr.start_dev_server()

        elif choice == "🔧 Configurações":
            show_config_menu(config_mgr)

        elif choice == "📦 Gerenciar Componentes":
            while True:
                comps = comp_mgr.list_components()
                options = ["Criar novo componente"]
                options.extend(comps)
                options.append("Voltar")
                
                comp_choice = input_choice("Componentes:", options)
                if comp_choice == "Voltar":
                    break
                elif comp_choice == "Criar novo componente":
                    comp_mgr.create_component()
                else:
                    # Abrir componente no editor
                    comp_file = comp_mgr.components_dir / f"{comp_choice}.tsx"
                    if sys.platform == 'win32':
                        os.startfile(str(comp_file))
                    else:
                        os.system(f"open {comp_file}")

        elif choice == "📄 Gerenciar Páginas":
            while True:
                pages = page_mgr.list_pages()
                options = ["Criar nova página"]
                options.extend(pages)
                options.append("Voltar")
                
                page_choice = input_choice("Páginas:", options)
                if page_choice == "Voltar":
                    break
                elif page_choice == "Criar nova página":
                    page_mgr.create_page()

        elif choice == "✏️  Editar Conteúdo":
            while True:
                options = [
                    "Atualizar número WhatsApp",
                    "Editar Hero Section (Home)",
                    "Voltar"
                ]
                edit_choice = input_choice("Editar Conteúdo:", options)
                
                if edit_choice == "Atualizar número WhatsApp":
                    new_number = input_text("Novo número WhatsApp", "5581999629352")
                    if new_number.isdigit() and len(new_number) >= 11:
                        content_mgr.update_whatsapp_link_in_files(new_number)
                    else:
                        print_error("Número inválido")
                elif edit_choice == "Editar Hero Section (Home)":
                    content_mgr.edit_hero_section()
                else:
                    break

        elif choice == "🔍 Verificar Projeto":
            show_project_menu(proj_mgr, config_mgr)

        elif choice == "🏗️  Build & Deploy":
            show_build_menu(proj_mgr)

        elif choice == "📊 Ver Análise Completa":
            analysis_file = project_root / "SITE_ANALYSIS.md"
            if analysis_file.exists():
                if sys.platform == 'win32':
                    os.startfile(str(analysis_file))
                else:
                    os.system(f"open {analysis_file}")
                print_success(f"Arquivo aberto: {analysis_file}")
            else:
                print_error("Arquivo SITE_ANALYSIS.md não encontrado")

        elif choice == "❌ Sair":
            print_info("Até logo! 👋")
            break

        input(f"\n{Colors.BOLD}Pressione ENTER para continuar...{Colors.ENDC}")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print(f"\n\n{Colors.YELLOW}Interrompido pelo usuário{Colors.ENDC}")
        sys.exit(0)
    except Exception as e:
        print_error(f"Erro: {e}")
        sys.exit(1)
