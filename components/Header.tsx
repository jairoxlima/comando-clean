'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                <Image src="/logo.png" alt="Comando Clean" width={32} height={32} className="h-8 w-8 object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Comando Clean</h1>
                <p className="text-xs text-gray-400">Serviços Profissionais</p>
              </div>
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Início
            </Link>
            <Link
              href="/resumo"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Resumo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}