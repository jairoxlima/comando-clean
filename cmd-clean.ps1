# 🚀 COMANDO CLEAN - SCRIPT AUTOMATIZADO (PowerShell)
# ===================================================
# Automação completa de desenvolvimento com perguntas interativas
# Uso: .\cmd-clean.ps1

# Verificar permissão de execução
if ((Get-ExecutionPolicy) -eq "Restricted") {
    Write-Host "⚠️  Permissão restrita. Execute: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser" -ForegroundColor Yellow
    exit
}

# ============================================================================
# CORES E FORMATAÇÃO
# ============================================================================

function Write-Success {
    param([string]$Message)
    Write-Host "✅ $Message" -ForegroundColor Green
}

function Write-Error-Custom {
    param([string]$Message)
    Write-Host "❌ $Message" -ForegroundColor Red
}

function Write-Info {
    param([string]$Message)
    Write-Host "ℹ️  $Message" -ForegroundColor Cyan
}

function Write-Warning-Custom {
    param([string]$Message)
    Write-Host "⚠️  $Message" -ForegroundColor Yellow
}

function Write-Header {
    param([string]$Title)
    Write-Host "`n$('='*60)" -ForegroundColor Magenta
    Write-Host $Title.PadLeft(30 + [Math]::Floor($Title.Length / 2)) -ForegroundColor Magenta
    Write-Host "$('='*60)`n" -ForegroundColor Magenta
}

# ============================================================================
# UTILITÁRIOS
# ============================================================================

function Get-ProjectRoot {
    return Split-Path -Parent $PSCommandPath
}

function Invoke-Command-Custom {
    param(
        [string]$Command,
        [string]$WorkingDir = (Get-ProjectRoot)
    )
    
    try {
        Push-Location $WorkingDir
        $result = Invoke-Expression $Command 2>&1
        Pop-Location
        return @{ ExitCode = $LASTEXITCODE; Output = $result }
    }
    catch {
        Pop-Location
        return @{ ExitCode = 1; Output = $_.Exception.Message }
    }
}

function Show-Menu {
    param(
        [string]$Title,
        [string[]]$Options
    )
    
    Write-Host "`n$Title`n" -ForegroundColor Cyan
    for ($i = 0; $i -lt $Options.Count; $i++) {
        Write-Host "  $($i+1). $($Options[$i])" -ForegroundColor Cyan
    }
    
    while ($true) {
        $choice = Read-Host "`nEscolha [1-$($Options.Count)]"
        if ($choice -match '^\d+$' -and $choice -ge 1 -and $choice -le $Options.Count) {
            return $Options[$choice - 1]
        }
        Write-Error-Custom "Escolha inválida. Digite entre 1 e $($Options.Count)"
    }
}

function Get-UserInput {
    param(
        [string]$Prompt,
        [string]$Default = ""
    )
    
    if ($Default) {
        $input_text = Read-Host "$Prompt [$Default]"
        return if ($input_text) { $input_text } else { $Default }
    }
    else {
        return Read-Host $Prompt
    }
}

function Ask-YesNo {
    param([string]$Question)
    $response = Read-Host "$Question (s/n)"
    return $response -match '^(s|sim|y|yes)$'
}

# ============================================================================
# GERENCIAMENTO DE PROJETO
# ============================================================================

function Install-Dependencies {
    Write-Info "Instalando dependências..."
    $result = Invoke-Command-Custom "npm install"
    
    if ($result.ExitCode -eq 0) {
        Write-Success "Dependências instaladas com sucesso!"
    }
    else {
        Write-Error-Custom "Erro ao instalar: $($result.Output)"
        return $false
    }
    return $true
}

function Start-DevServer {
    Write-Info "Iniciando servidor de desenvolvimento..."
    Write-Warning-Custom "Servidor rodando. Pressione Ctrl+C para parar.`n"
    
    $projectRoot = Get-ProjectRoot
    Push-Location $projectRoot
    npm run dev
    Pop-Location
}

function Build-Production {
    Write-Info "Compilando para produção..."
    $result = Invoke-Command-Custom "npm run build"
    
    if ($result.ExitCode -eq 0) {
        Write-Success "Build concluído com sucesso!"
        $result.Output | Write-Host
    }
    else {
        Write-Error-Custom "Erro no build:`n$($result.Output)"
        return $false
    }
    return $true
}

function Run-Linter {
    Write-Info "Executando ESLint..."
    $result = Invoke-Command-Custom "npm run lint"
    
    Write-Host $result.Output
    if ($result.ExitCode -eq 0) {
        Write-Success "Nenhum erro de lint encontrado!"
    }
    else {
        Write-Warning-Custom "Alguns problemas foram encontrados"
    }
}

function Check-GitStatus {
    Write-Info "Status do Git:"
    Invoke-Command-Custom "git status"
}

# ============================================================================
# GERENCIAMENTO DE CONFIGURAÇÃO
# ============================================================================

function Get-EnvFile {
    $projectRoot = Get-ProjectRoot
    return Join-Path $projectRoot ".env.local"
}

function Read-EnvFile {
    $envFile = Get-EnvFile
    $env_vars = @{}
    
    if (Test-Path $envFile) {
        $content = Get-Content $envFile
        foreach ($line in $content) {
            if ($line -match '^\s*#' -or $line -match '^\s*$') { continue }
            if ($line -match '^(.+?)=(.*)$') {
                $key = $matches[1]
                $value = $matches[2]
                $env_vars[$key] = $value
            }
        }
    }
    
    return $env_vars
}

function Write-EnvFile {
    param([hashtable]$EnvVars)
    
    $envFile = Get-EnvFile
    $content = @()
    $content += "# Variáveis de Ambiente - Comando Clean"
    $content += "# Gerado em: $(Get-Date)"
    $content += ""
    
    foreach ($key in $EnvVars.Keys) {
        $content += "$key=$($EnvVars[$key])"
    }
    
    Set-Content -Path $envFile -Value $content
    Write-Success "Arquivo .env.local atualizado!"
}

function Configure-WhatsApp {
    Write-Header "⚙️  CONFIGURAR WHATSAPP"
    
    $current_env = Read-EnvFile
    $current_number = $current_env['NEXT_PUBLIC_WHATSAPP_NUMBER'] ?? '5581999629352'
    
    Write-Info "Número atual: $current_number"
    $new_number = Get-UserInput "Novo número (dígitos apenas)" $current_number
    
    if ($new_number -notmatch '^\d{11,}$') {
        Write-Error-Custom "Número inválido. Use: 5581999629352"
        return
    }
    
    $current_env['NEXT_PUBLIC_WHATSAPP_NUMBER'] = $new_number
    Write-EnvFile $current_env
    Write-Success "WhatsApp configurado: $new_number"
}

function Configure-SiteURL {
    Write-Header "⚙️  CONFIGURAR URL DO SITE"
    
    $current_env = Read-EnvFile
    $current_url = $current_env['NEXT_PUBLIC_SITE_URL'] ?? 'http://localhost:3000'
    
    Write-Info "URL atual: $current_url"
    $new_url = Get-UserInput "Nova URL" $current_url
    
    $current_env['NEXT_PUBLIC_SITE_URL'] = $new_url
    Write-EnvFile $current_env
    Write-Success "URL configurada: $new_url"
}

# ============================================================================
# GERENCIAMENTO DE COMPONENTES
# ============================================================================

function Get-Components {
    $projectRoot = Get-ProjectRoot
    $componentsDir = Join-Path $projectRoot "components"
    
    if (Test-Path $componentsDir) {
        return @(Get-ChildItem -Path $componentsDir -Filter "*.tsx" | ForEach-Object { $_.BaseName })
    }
    return @()
}

function Create-Component {
    Write-Header "➕ CRIAR NOVO COMPONENTE"
    
    $name = Get-UserInput "Nome do componente (PascalCase)" "MyComponent"
    
    if ($name -notmatch '^[A-Z]') {
        Write-Error-Custom "Nome deve começar com maiúscula (PascalCase)"
        return
    }
    
    $projectRoot = Get-ProjectRoot
    $componentsDir = Join-Path $projectRoot "components"
    $componentFile = Join-Path $componentsDir "$name.tsx"
    
    if (Test-Path $componentFile) {
        Write-Error-Custom "Componente $name já existe!"
        return
    }
    
    New-Item -ItemType Directory -Path $componentsDir -Force | Out-Null
    
    $template = @"
'use client'

interface ${name}Props {
  // Defina suas props aqui
}

export default function ${name}({ }: ${name}Props) {
  return (
    <div className="p-4 rounded-lg border border-slate-200">
      ${name}
    </div>
  )
}
"@

    Set-Content -Path $componentFile -Value $template
    Write-Success "Componente $name criado em: components/$name.tsx"
}

# ============================================================================
# GERENCIAMENTO DE PÁGINAS
# ============================================================================

function Get-Pages {
    $projectRoot = Get-ProjectRoot
    $appDir = Join-Path $projectRoot "app"
    
    $pages = @()
    $pages += "/"
    
    Get-ChildItem -Path $appDir -Directory -Recurse | ForEach-Object {
        $pagePath = Join-Path $_.FullName "page.tsx"
        if (Test-Path $pagePath) {
            $route = $_.FullName.Substring($appDir.Length).Replace('\', '/')
            $pages += "/$route"
        }
    }
    
    return $pages | Sort-Object
}

function Create-Page {
    Write-Header "📄 CRIAR NOVA PÁGINA"
    
    $route = Get-UserInput "Rota da página (ex: servicos, sobre)" "nova-pagina"
    $route = $route.ToLower()
    
    $projectRoot = Get-ProjectRoot
    $pageDir = Join-Path $projectRoot "app" $route
    $pageFile = Join-Path $pageDir "page.tsx"
    
    if (Test-Path $pageFile) {
        Write-Error-Custom "Página /$route já existe!"
        return
    }
    
    New-Item -ItemType Directory -Path $pageDir -Force | Out-Null
    
    $pageName = $route.Replace('-', '_') | ForEach-Object { ($_ -split '_' | ForEach-Object { $_.Substring(0,1).ToUpper() + $_.Substring(1) }) -join '' }
    
    $template = @"
'use client'

export default function ${pageName}() {
  return (
    <main className="min-h-screen bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Nova Página</h1>
        <p className="text-slate-600 mb-8">Conteúdo aqui...</p>
      </div>
    </main>
  )
}
"@

    Set-Content -Path $pageFile -Value $template
    Write-Success "Página criada: app/$route/page.tsx"
    Write-Info "Acesse: http://localhost:3000/$route"
}

# ============================================================================
# VERIFICAÇÃO DO PROJETO
# ============================================================================

function Check-Project {
    Write-Header "🔍 VERIFICAÇÃO DO PROJETO"
    
    $projectRoot = Get-ProjectRoot
    $requiredFiles = @(
        "package.json",
        "tsconfig.json",
        "tailwind.config.js",
        "next.config.js",
        "app/page.tsx",
        "app/layout.tsx"
    )
    
    Write-Info "Verificando estrutura:"
    foreach ($file in $requiredFiles) {
        $filePath = Join-Path $projectRoot $file
        $status = if (Test-Path $filePath) { "✅" } else { "❌" }
        Write-Host "  $status $file"
    }
    
    Write-Info "`nDependências instaladas:"
    $result = Invoke-Command-Custom "npm list --depth=0"
    Write-Host $result.Output | Select-Object -First 10
    
    if (Ask-YesNo "`nMostrar status do Git?") {
        Check-GitStatus
    }
}

# ============================================================================
# MENU PRINCIPAL
# ============================================================================

function Show-MainMenu {
    return Show-Menu "O que você quer fazer?" @(
        "🚀 Iniciar Desenvolvimento",
        "🔧 Configurações",
        "📦 Gerenciar Componentes",
        "📄 Gerenciar Páginas",
        "✏️  Editar Conteúdo",
        "🔍 Verificar Projeto",
        "🏗️  Build & Deploy",
        "📊 Ver Análise Completa",
        "❌ Sair"
    )
}

function Show-ConfigMenu {
    while ($true) {
        $choice = Show-Menu "Configurações:" @(
            "Configurar WhatsApp",
            "Configurar URL do Site",
            "Ver Variáveis de Ambiente",
            "Voltar ao Menu Principal"
        )
        
        switch ($choice) {
            "Configurar WhatsApp" { Configure-WhatsApp }
            "Configurar URL do Site" { Configure-SiteURL }
            "Ver Variáveis de Ambiente" {
                Write-Info "Variáveis de Ambiente:"
                $env_vars = Read-EnvFile
                $env_vars.GetEnumerator() | ForEach-Object { Write-Host "  $($_.Key)=$($_.Value)" -ForegroundColor Cyan }
            }
            "Voltar ao Menu Principal" { break }
        }
    }
}

function Show-BuildMenu {
    while ($true) {
        $choice = Show-Menu "Build & Deploy:" @(
            "Fazer Build para Produção",
            "Executar Linter",
            "Limpar Cache Next.js",
            "Voltar ao Menu Principal"
        )
        
        switch ($choice) {
            "Fazer Build para Produção" { Build-Production }
            "Executar Linter" { Run-Linter }
            "Limpar Cache Next.js" {
                $projectRoot = Get-ProjectRoot
                $cacheDir = Join-Path $projectRoot ".next"
                if (Test-Path $cacheDir) {
                    Remove-Item -Path $cacheDir -Recurse -Force
                    Write-Success "Cache limpo!"
                }
                else {
                    Write-Warning-Custom "Cache não encontrado"
                }
            }
            "Voltar ao Menu Principal" { break }
        }
    }
}

# ============================================================================
# LOOP PRINCIPAL
# ============================================================================

function Main {
    $projectRoot = Get-ProjectRoot
    
    Write-Header "🎯 COMANDO CLEAN - SCRIPT AUTOMATIZADO"
    Write-Host "Projeto: $projectRoot`n" -ForegroundColor Yellow
    
    while ($true) {
        $choice = Show-MainMenu
        
        switch ($choice) {
            "🚀 Iniciar Desenvolvimento" {
                if (Ask-YesNo "Instalar dependências primeiro?") {
                    Install-Dependencies
                }
                Start-DevServer
            }
            
            "🔧 Configurações" {
                Show-ConfigMenu
            }
            
            "📦 Gerenciar Componentes" {
                while ($true) {
                    $components = Get-Components
                    $options = @("Criar novo componente") + $components + @("Voltar")
                    
                    $comp_choice = Show-Menu "Componentes:" $options
                    
                    if ($comp_choice -eq "Voltar") { break }
                    elseif ($comp_choice -eq "Criar novo componente") { Create-Component }
                    else {
                        $componentFile = Join-Path $projectRoot "components" "$comp_choice.tsx"
                        Invoke-Item $componentFile
                    }
                }
            }
            
            "📄 Gerenciar Páginas" {
                while ($true) {
                    $pages = Get-Pages
                    $options = @("Criar nova página") + $pages + @("Voltar")
                    
                    $page_choice = Show-Menu "Páginas:" $options
                    
                    if ($page_choice -eq "Voltar") { break }
                    elseif ($page_choice -eq "Criar nova página") { Create-Page }
                }
            }
            
            "✏️  Editar Conteúdo" {
                Write-Header "✏️  EDITAR CONTEÚDO"
                Write-Warning-Custom "Recursos disponíveis:"
                Write-Info "  • Atualizar número WhatsApp"
                Write-Info "  • Editar arquivos manualmente com: code ."
                
                if (Ask-YesNo "Atualizar número WhatsApp?") {
                    $new_number = Get-UserInput "Novo número" "5581999629352"
                    if ($new_number -match '^\d{11,}$') {
                        # Atualizar em todos os arquivos
                        $files = @(
                            "components/WhatsAppButton.tsx",
                            "app/orcamento/page.tsx",
                            "app/resumo/page.tsx"
                        )
                        
                        foreach ($file in $files) {
                            $filePath = Join-Path $projectRoot $file
                            if (Test-Path $filePath) {
                                $content = Get-Content -Path $filePath -Raw
                                $newContent = $content -replace '5581999629352', $new_number
                                Set-Content -Path $filePath -Value $newContent
                                Write-Success "  ✓ $file"
                            }
                        }
                    }
                }
            }
            
            "🔍 Verificar Projeto" {
                Check-Project
            }
            
            "🏗️  Build & Deploy" {
                Show-BuildMenu
            }
            
            "📊 Ver Análise Completa" {
                $analysisFile = Join-Path $projectRoot "SITE_ANALYSIS.md"
                if (Test-Path $analysisFile) {
                    Invoke-Item $analysisFile
                    Write-Success "Arquivo aberto"
                }
                else {
                    Write-Error-Custom "SITE_ANALYSIS.md não encontrado"
                }
            }
            
            "❌ Sair" {
                Write-Info "Até logo! 👋"
                break
            }
        }
        
        if ($choice -ne "❌ Sair") {
            Read-Host "`nPressione ENTER para continuar"
        }
    }
}

# Executar
Main
