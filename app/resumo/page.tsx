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
  let message = '🧹 *Resumo do Pedido - Comando Clean*\n\n'
  cartItems.forEach((item, index) => {
    message += `*${index + 1}. ${item.label}*\n`
    message += item.details
      .split('\n')
      .map((line) => `• ${line}`)
      .join('\n')
    if (item.quantity > 1) {
      message += `\n• Quantidade de pedidos: ${item.quantity}`
    }
    message += '\n\n'
  })
  message += `*Total de serviços:* ${cartItems.length}\n`
  message += `*Total de pedidos:* ${cartItems.reduce((sum, item) => sum + item.quantity, 0)}\n\n`
  if (name) message += `*Nome:* ${name}\n`
  if (address) message += `*Endereço:* ${address}\n\n`
  message += 'Gostaria de confirmar este orçamento.'
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

  useEffect(() => {
    if (typeof window === 'undefined' || !hasLoadedCart) return
    window.localStorage.setItem('comandoCleanCartItems', JSON.stringify(cartItems))
  }, [cartItems, hasLoadedCart])

  const updateCartItemQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prev) => prev.map((item, currentIndex) =>
      currentIndex === index ? { ...item, quantity } : item
    ))
  }

  const removeCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, currentIndex) => currentIndex !== index))
  }

  const message = buildMessage(cartItems, name, address)
  const encodedMessage = encodeURIComponent(message)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        {cartItems.length === 0 ? (
          <div className="rounded-3xl bg-slate-950/90 p-8 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.8)] border border-slate-800">
            <p className="text-slate-300">Nenhum serviço adicionado ainda. Volte para a página inicial e clique em "Adicionar ao carrinho" para começar.</p>
            <Link
              href="/"
              className="mt-6 inline-flex items-center justify-center rounded-3xl bg-emerald-700 px-5 py-3 text-white font-semibold shadow-lg shadow-emerald-700/20 hover:bg-emerald-600 transition"
            >
              Ir para seleção de serviços
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="rounded-3xl bg-slate-900/95 border border-slate-800 p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4">Serviços selecionados</h2>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={`${item.key}-${index}`} className="rounded-3xl border border-slate-700 bg-slate-950/80 p-5">
                    <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-lg font-semibold text-slate-100">{item.label}</p>
                        <p className="text-sm text-slate-400">Quantidade: {item.quantity}</p>
                      </div>
                      <span className="rounded-full bg-emerald-950/40 px-3 py-1 text-xs font-semibold text-emerald-300">Item {index + 1}</span>
                    </div>
                    <div className="whitespace-pre-line text-sm leading-6 text-slate-300">{item.details}</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          if (typeof window === 'undefined') return
                          window.localStorage.setItem('comandoCleanEditIndex', index.toString())
                          window.location.href = '/'
                        }}
                        className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => removeCartItem(index)}
                        className="rounded-2xl border border-rose-700 bg-rose-950/70 px-4 py-2 text-sm font-semibold text-rose-200 transition hover:bg-rose-900"
                      >
                        Remover
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateCartItemQuantity(index, Math.max(item.quantity - 1, 1))}
                          className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => updateCartItemQuantity(index, item.quantity + 1)}
                          className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-800"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900/95 border border-slate-800 p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4">Resumo final</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-4">
                  <p className="text-sm text-slate-400">Total de serviços</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">{cartItems.length}</p>
                </div>
                <div className="rounded-3xl border border-slate-700 bg-slate-950/80 p-4">
                  <p className="text-sm text-slate-400">Total de pedidos</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-100">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900/95 border border-slate-800 p-6 shadow-[0_20px_60px_-35px_rgba(0,0,0,0.8)]">
              <h2 className="text-2xl font-semibold text-slate-100 mb-4">Informações do cliente</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">Nome</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 block w-full rounded-2xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-slate-300">Endereço</label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={3}
                    className="mt-1 block w-full rounded-2xl border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    placeholder="Digite seu endereço completo"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-emerald-700 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-700/20 hover:bg-emerald-600 transition md:w-auto"
              >
                Enviar resumo por WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.localStorage.removeItem('comandoCleanCartItems')
                    setCartItems([])
                  }
                }}
                className="inline-flex w-full items-center justify-center rounded-3xl border border-slate-700 bg-slate-950 px-6 py-4 text-base font-semibold text-slate-100 shadow-sm hover:bg-slate-800 transition md:w-auto"
              >
                Limpar carrinho
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
