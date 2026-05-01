'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-slate-950 border-b border-slate-800 sticky top-0 z-40 backdrop-blur-md bg-slate-950/90 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group" aria-label="Comando Clean - Início">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white italic transition-transform group-hover:scale-105" aria-hidden="true">
                CC
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white tracking-tight leading-none">Comando Clean</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-semibold mt-1">Excelência em Estofados</span>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação Principal">
            <Link
              href="/"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors py-2"
            >
              Início
            </Link>
            <Link
              href="/orcamento"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors py-2"
            >
              Orçamento
            </Link>
            <Link
              href="/resumo"
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors py-2"
            >
              Meus Pedidos
            </Link>
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 active:scale-95"
            >
              Agendar Agora
            </Link>
          </nav>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-400 hover:text-white p-2 transition-colors"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-900 border-b border-slate-800 ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col p-6 gap-4" aria-label="Navegação Mobile">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-300 hover:text-white text-base font-medium transition-colors py-2 border-b border-slate-800"
          >
            Início
          </Link>
          <Link
            href="/orcamento"
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-300 hover:text-white text-base font-medium transition-colors py-2 border-b border-slate-800"
          >
            Orçamento
          </Link>
          <Link
            href="/resumo"
            onClick={() => setIsMenuOpen(false)}
            className="text-slate-300 hover:text-white text-base font-medium transition-colors py-2 border-b border-slate-800"
          >
            Meus Pedidos
          </Link>
          <Link
            href="/orcamento"
            onClick={() => setIsMenuOpen(false)}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-base font-semibold text-white transition-all hover:bg-blue-500"
          >
            Agendar Agora
          </Link>
        </nav>
      </div>
    </header>
  )
}
