'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface CartItem {
  key: string
  label: string
  quantity: number
  details: string
}

const whatsappNumber = '5581999629352'

const buildMessage = (cartItems: CartItem[], name: string, address: string) => {
  let message = 'Resumo da Solicitação - Comando Clean\n\n'
  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.label}\n`
    message += item.details
      .split('\n')
      .map((line) => `- ${line}`)
      .join('\n')
    message += `\nQuantidade: ${item.quantity}`
    message += '\n\n'
  })
  
  if (name) message += `Nome: ${name}\n`
  if (address) message += `Endereço: ${address}\n\n`
  message += 'Solicito orçamento para os serviços acima.'
  return message
}

export default function ResumoPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [hasLoadedCart, setHasLoadedCart] = useState(false)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')

  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = window.localStorage.getItem('comandoCleanCartItems')
    if (!saved) {
      setHasLoadedCart(true)
      return
    }
    try {
      setCartItems(JSON.parse(saved))
    } catch {
      window.localStorage.removeItem('comandoCleanCartItems')
    }
    setHasLoadedCart(true)
  }, [])

  const removeCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, currentIndex) => currentIndex !== index))
  }

  const message = buildMessage(cartItems, name, address)
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  return (
    <main className="min-h-screen bg-white text-slate-900 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
           <h1 className="text-3xl font-bold mb-2">Resumo da Solicitação</h1>
           <p className="text-slate-500">Revise seus itens antes de enviar para nossos especialistas.</p>
        </div>

        {cartItems.length === 0 ? (
          <div className="p-12 rounded-3xl bg-slate-50 border border-slate-100 text-center">
            <p className="text-slate-600 mb-8 font-medium">Seu carrinho de solicitações está vazio.</p>
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-white font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition active:scale-95"
            >
              Configurar Serviços
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="space-y-4" role="list" aria-label="Itens no seu orçamento">
              {cartItems.map((item, index) => (
                <div key={index} role="listitem" className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm flex justify-between items-start transition-all hover:shadow-md">
                  <div>
                    <h3 className="font-bold text-lg text-slate-900 mb-2">{item.label}</h3>
                    <p className="text-sm text-slate-500 whitespace-pre-line leading-relaxed">{item.details}</p>
                  </div>
                  <button
                    onClick={() => removeCartItem(index)}
                    className="text-slate-300 hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-red-50"
                    aria-label={`Remover ${item.label} do orçamento`}
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-3xl bg-slate-950 text-white space-y-6 shadow-xl">
              <h2 className="text-xl font-bold border-b border-slate-800 pb-4">Informações de Contato</h2>
              <div className="grid gap-6">
                <div>
                  <label htmlFor="client-name" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Seu Nome</label>
                  <input
                    id="client-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Nome Completo"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="client-address" className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Endereço de Atendimento</label>
                  <textarea
                    id="client-address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Rua, Número, Bairro e Cidade"
                    autoComplete="street-address"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                className="flex-grow inline-flex items-center justify-center rounded-xl bg-emerald-500 px-8 py-5 text-slate-950 font-bold shadow-lg shadow-emerald-500/10 hover:bg-emerald-400 transition active:scale-95"
              >
                Enviar Orçamento via WhatsApp
              </a>
              <button
                onClick={() => {
                  if (confirm('Tem certeza que deseja limpar todo o orçamento?')) {
                    window.localStorage.removeItem('comandoCleanCartItems')
                    setCartItems([])
                  }
                }}
                className="px-8 py-5 rounded-xl border border-slate-200 font-bold text-slate-400 hover:text-red-500 hover:border-red-200 transition-all active:scale-95"
              >
                Limpar Tudo
              </button>
            </div>
            
            <p className="text-center text-xs text-slate-400 uppercase tracking-[0.2em]">Atendimento Profissional em Recife e Região</p>
          </div>
        )}
      </div>
    </main>
  )
}
