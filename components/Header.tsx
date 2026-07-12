'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">CC</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Comando Clean</span>
          </Link>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`hidden md:flex items-center gap-8`}>
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition">
              Serviços
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">
              Sobre
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">
              Avaliações
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Contato
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <Link href="#services" className="text-gray-700 hover:text-blue-600">
              Serviços
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600">
              Sobre
            </Link>
            <Link href="#testimonials" className="text-gray-700 hover:text-blue-600">
              Avaliações
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full transition">
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
