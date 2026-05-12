'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { loadPedidos, deletePedido, updatePedido, openWhatsApp, type Pedido } from '@/lib/pedidos'

export default function MeusPedidos() {
  const [pedidos, setPedidos] = useState<Pedido[]>([])
  const [pedidoSelecionado, setPedidoSelecionado] = useState<string | null>(null)
  const [nome, setNome] = useState('')
  const [endereco, setEndereco] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const carregarPedidos = () => {
      const dados = loadPedidos()
      setPedidos(dados)
      setLoading(false)
    }

    carregarPedidos()
  }, [])

  const handleEliminar = (id: string) => {
    if (confirm('Tem certeza que quer deletar este pedido?')) {
      deletePedido(id)
      setPedidos(pedidos.filter(p => p.id !== id))
      setPedidoSelecionado(null)
    }
  }

  const handleEnviar = (pedido: Pedido) => {
    setPedidoSelecionado(pedido.id)
    setNome(pedido.nomeCliente || '')
    setEndereco(pedido.endereco || '')
  }

  const handleSubmitForm = () => {
    if (!nome.trim() || !endereco.trim()) {
      alert('Preencha todos os campos')
      return
    }

    const pedidoAtualizar = pedidos.find(p => p.id === pedidoSelecionado)
    if (pedidoAtualizar) {
      updatePedido(pedidoSelecionado!, { nomeCliente: nome, endereco })
      const pedidoAtualizado = { ...pedidoAtualizar, nomeCliente: nome, endereco }
      openWhatsApp(pedidoAtualizado)
      setPedidoSelecionado(null)
    }
  }

  const formatarData = (dataISO: string) => {
    return new Date(dataISO).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  const getNomePlano = (key: string) => {
    const planos: Record<string, string> = {
      unica: 'Higienização Pontual',
      anual: 'Proteção Essencial',
      saude: 'Saúde Total',
    }
    return planos[key] || key
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <p className="text-center text-slate-500">Carregando...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Meus Pedidos</h1>
          <p className="text-slate-500">Visualize, revise e envie seus orçamentos</p>
        </div>

        {pedidos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-slate-600 mb-6">Nenhum pedido ainda</p>
            <Link
              href="/orcamento"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20"
            >
              Criar Novo Orçamento
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {pedidos.map((pedido) => (
              <div key={pedido.id} className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {getNomePlano(pedido.plano)}
                    </h3>
                    <p className="text-sm text-slate-500">{formatarData(pedido.dataCriacao)}</p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold">
                    {pedido.itens.length} {pedido.itens.length === 1 ? 'item' : 'itens'}
                  </span>
                </div>

                <div className="mb-4 p-4 rounded-lg bg-slate-50">
                  <p className="text-sm text-slate-600 mb-2 font-semibold">Serviços:</p>
                  <ul className="space-y-1">
                    {pedido.itens.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-700">
                        • {item.label} {item.quantity > 1 ? `(${item.quantity})` : ''}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => handleEnviar(pedido)}
                    className="flex-1 py-2 px-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                  >
                    Enviar para WhatsApp
                  </button>
                  <button
                    onClick={() => handleEliminar(pedido.id)}
                    className="py-2 px-4 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-colors"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {pedidoSelecionado && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Informe seus dados</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Endereço</label>
                  <textarea
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    placeholder="Rua, número, bairro, cidade"
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white outline-none focus:border-blue-500 transition-colors min-h-[100px]"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setPedidoSelecionado(null)}
                  className="flex-1 py-3 px-4 bg-slate-100 text-slate-700 rounded-lg font-semibold hover:bg-slate-200 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSubmitForm}
                  className="flex-1 py-3 px-4 bg-emerald-500 text-white rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                >
                  Enviar para WhatsApp
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
