'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const categories = [
  { key: 'casa', label: 'Para Casa' },
]

const serviceItems = [
  { key: 'sofa', label: 'Sofá', icon: '🛋️' },
  { key: 'tapete', label: 'Tapete', icon: '🧼' },
  { key: 'poltrona', label: 'Poltrona', icon: '💺' },
  { key: 'cadeira', label: 'Cadeira', icon: '🪑' },
  { key: 'colchao', label: 'Colchão', icon: '🛏️' },
  { key: 'automovel', label: 'Automóvel', icon: '🚗' },
  { key: 'puff', label: 'Puff', icon: '🪑' },
  { key: 'outros', label: 'Outros', icon: '+' },
]

const planOptions = [
  { key: 'higienizacao-unica', label: 'Higienização Única', description: 'Teste o serviço com uma higienização completa já.' },
  { key: 'protecao-anual', label: 'Plano Proteção Anual', description: '2 limpezas por ano com prioridade e desconto exclusivo.' },
  { key: 'saude-total', label: 'Plano Saúde Total', description: '3 limpezas por ano com proteção para pets e crianças.' },
]

const whatsappNumber = '5581999629352'

const quantityOptions = ['1', '2', '3', '4', '5', '6']
const sofaModelOptions = [
  { key: 'Retrátil', label: 'Sofá Retrátil', description: 'O sofá retrátil é um modelo que permite aumentar o espaço do assento ao esticar as pernas ou recolher parte do assento de acordo com a necessidade.' },
  { key: 'Sofá Comum', label: 'Sofá Comum', description: 'O sofá comum é um modelo clássico e confortável, ideal para salas de estar tradicionais e uso diário.' },
  { key: 'Sofá de Canto', label: 'Sofá de Canto', description: 'O sofá de canto aproveita melhor o espaço, oferecendo um formato em L perfeito para salas amplas.' },
  { key: 'Sofá com Chaise', label: 'Sofá com Chaise', description: 'O sofá com chaise tem uma extensão no assento que permite esticar as pernas, oferecendo relaxamento extra.' },
  { key: 'Sofá-cama', label: 'Sofá-cama', description: 'O sofá-cama se transforma em cama, ideal para receber visitas e economizar espaço em ambientes pequenos.' },
]
const poltronaModelOptions = [
  { key: 'Amamentação', label: 'Amamentação' },
  { key: 'Comum', label: 'Comum' },
  { key: 'Papai', label: 'Papai' },
  { key: 'Pé Palito', label: 'Pé Palito' },
  { key: 'Almofadas Soltas', label: 'Almofadas Soltas' },
]
const cadeiraModelOptions = [
  { key: 'Estofado no assento', label: 'Estofado no assento' },
  { key: 'Estofado no encosto', label: 'Estofado no encosto' },
  { key: 'Estofado no assento e encosto', label: 'Estofado no assento e encosto' },
  { key: 'Luis XV, XIV ou XVI', label: 'Luis XV, XIV ou XVI' },
]
const colchaoSizeOptions = [
  { key: 'Solteiro', label: 'Solteiro' },
  { key: 'Viúvo', label: 'Viúvo' },
  { key: 'Casal', label: 'Casal' },
  { key: 'Queen', label: 'Queen' },
  { key: 'King', label: 'King' },
  { key: 'Super King', label: 'Super King' },
  { key: 'Cama Auxiliar', label: 'Cama Auxiliar' },
  { key: 'Berço', label: 'Berço' },
]
const materialOptions = ['Tecido', 'Couro']
const automovelSizeOptions = ['Pequeno', 'Médio', 'Grande', 'Extra Grande']
const automovelOptionOptions = ['Só bancos', 'Só teto', 'Bancos e teto']
const puffSizeOptions = [
  { key: 'Pequeno', label: 'Pequeno', description: 'Até 40cm x 40cm' },
  { key: 'Médio', label: 'Médio', description: 'Até 60cm x 60cm' },
  { key: 'Grande', label: 'Grande', description: 'Acima de 60cm x 60cm' },
]

function OptionButton({ selected, label, onClick }: { selected: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-sm font-medium transition focus:outline-none ${
        selected
          ? 'bg-green-600 text-white border-green-600'
          : 'bg-white text-gray-700 border-gray-300 hover:border-green-500 hover:text-green-700'
      }`}
    >
      {label}
    </button>
  )
}

const colchaoSizeMap: Record<string, string> = {
  Solteiro: '0,88m x 1,88m',
  Viúvo: '1,18m x 1,88m',
  Casal: '1,38m x 1,88m',
  Queen: '1,58m x 1,98m',
  King: '1,93m x 2,03m',
  'Super King': '2,03m x 2,03m',
  'Cama Auxiliar': '0,85m x 1,80m',
  Berço: '0,70m x 1,40m',
}

export default function Orcamento() {
  const [activeCategory, setActiveCategory] = useState('casa')
  const [selectedItem, setSelectedItem] = useState('sofa')
  const [selectedQuantity, setSelectedQuantity] = useState('3')
  const [selectedModel, setSelectedModel] = useState('Retrátil')
  const [selectedMaterial, setSelectedMaterial] = useState('Tecido')
  const [tapeteWidth, setTapeteWidth] = useState('0,00')
  const [tapeteLength, setTapeteLength] = useState('0,00')
  const [colchaoSize, setColchaoSize] = useState('Solteiro')
  const [selectedAutomovelSize, setSelectedAutomovelSize] = useState('Médio')
  const [selectedAutomovelOption, setSelectedAutomovelOption] = useState('Só bancos')
  const [selectedPuffSize, setSelectedPuffSize] = useState('Médio')
  const [outrosDescription, setOutrosDescription] = useState('')
  const [cartItems, setCartItems] = useState<{ key: string; label: string; quantity: number; details: string }[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('higienizacao-unica')
  const searchParams = useSearchParams()

  const activeService = serviceItems.find((item) => item.key === selectedItem)

  useEffect(() => {
    const plan = searchParams.get('plan') ?? 'higienizacao-unica'
    if (planOptions.some((option) => option.key === plan)) {
      setSelectedPlan(plan)
      setSidebarOpen(true)
    }
  }, [searchParams])

  const generateWhatsAppMessage = () => {
    let message = '🧹 *Resumo do Pedido - Comando Clean*\n\n'
    const planLabel = planOptions.find((option) => option.key === selectedPlan)?.label || 'Plano personalizado'
    message += `*Plano escolhido:* ${planLabel}\n\n`
    
    cartItems.forEach((item, index) => {
      message += `*${index + 1}. ${item.label}*\n`
      message += item.details.split('\n').map(line => `• ${line}`).join('\n')
      if (item.quantity > 1) {
        message += `\n• Quantidade de pedidos: ${item.quantity}`
      }
      message += '\n\n'
    })
    
    message += '---\n'
    message += `*Total de serviços:* ${cartItems.length}\n`
    message += `*Total de pedidos:* ${cartItems.reduce((sum, item) => sum + item.quantity, 0)}\n\n`
    message += 'Gostaria de confirmar este orçamento.'
    
    return message
  }

  const getSelectedItemDetails = (itemKey: string) => {
    if (itemKey === 'sofa') {
      return `Número de lugares: ${selectedQuantity}\nModelo: ${selectedModel}\nMaterial: ${selectedMaterial}`
    }
    if (itemKey === 'tapete') {
      return `Largura: ${tapeteWidth} m\nComprimento: ${tapeteLength} m\nModelo: Comum`
    }
    if (itemKey === 'poltrona') {
      return `Material: ${selectedMaterial}\nModelo: ${selectedModel}`
    }
    if (itemKey === 'cadeira') {
      return `Modelo: ${selectedModel}\nMaterial: ${selectedMaterial}`
    }
    if (itemKey === 'colchao') {
      return `Tamanho: ${colchaoSize}`
    }
    if (itemKey === 'automovel') {
      return `Tamanho: ${selectedAutomovelSize}\nMaterial: ${selectedMaterial}\nOpção: ${selectedAutomovelOption}`
    }
    if (itemKey === 'puff') {
      return `Tamanho: ${selectedPuffSize}`
    }
    if (itemKey === 'outros') {
      return `${outrosDescription || 'Nenhuma descrição fornecida'}`
    }
    return ''
  }

  const parseCartItemDetails = (itemKey: string, details: string) => {
    const lines = details.split('\n').map((line) => line.trim())
    const parseValue = (label: string) => {
      const line = lines.find((current) => current.startsWith(label))
      return line ? line.split(':').slice(1).join(':').trim() : ''
    }

    if (itemKey === 'sofa') {
      setSelectedQuantity(parseValue('Número de lugares') || '3')
      setSelectedModel(parseValue('Modelo') || 'Retrátil')
      setSelectedMaterial(parseValue('Material') || 'Tecido')
    }
    if (itemKey === 'tapete') {
      setTapeteWidth(parseValue('Largura').replace(' m', '') || '0,00')
      setTapeteLength(parseValue('Comprimento').replace(' m', '') || '0,00')
      setSelectedModel('Comum')
    }
    if (itemKey === 'poltrona') {
      setSelectedMaterial(parseValue('Material') || 'Tecido')
      setSelectedModel(parseValue('Modelo') || 'Comum')
    }
    if (itemKey === 'cadeira') {
      setSelectedModel(parseValue('Modelo') || 'Estofado no assento')
      setSelectedMaterial(parseValue('Material') || 'Tecido')
    }
    if (itemKey === 'colchao') {
      setColchaoSize(parseValue('Tamanho') || 'Solteiro')
    }
    if (itemKey === 'automovel') {
      setSelectedAutomovelSize(parseValue('Tamanho') || 'Médio')
      setSelectedMaterial(parseValue('Material') || 'Tecido')
      setSelectedAutomovelOption(parseValue('Opção') || 'Só bancos')
    }
    if (itemKey === 'puff') {
      setSelectedPuffSize(parseValue('Tamanho') || 'Médio')
    }
    if (itemKey === 'outros') {
      setOutrosDescription(details || '')
    }
  }

  const editCartItem = (index: number) => {
    const item = cartItems[index]
    if (!item) return
    setSelectedItem(item.key)
    parseCartItemDetails(item.key, item.details)
    setSidebarOpen(true)
  }

  const updateCartItemQuantity = (index: number, quantity: number) => {
    if (quantity < 1) return
    setCartItems((prev) => prev.map((item, currentIndex) =>
      currentIndex === index ? { ...item, quantity } : item
    ))
  }

  const removeCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, currentIndex) => currentIndex !== index))
  }

  const addToCart = (itemKey: string, label: string) => {
    const details = getSelectedItemDetails(itemKey)
    setCartItems((prev) => {
      const existing = prev.find((item) => item.key === itemKey && item.details === details)
      if (existing) {
        return prev.map((item) =>
          item.key === itemKey && item.details === details
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { key: itemKey, label, quantity: 1, details }]
    })
    setSidebarOpen(true)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const saved = window.localStorage.getItem('comandoCleanCartItems')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        setCartItems(parsed)

        const editIndex = window.localStorage.getItem('comandoCleanEditIndex')
        if (editIndex !== null) {
          const index = Number(editIndex)
          if (!Number.isNaN(index) && index >= 0 && index < parsed.length) {
            const itemToEdit = parsed[index]
            setSelectedItem(itemToEdit.key)
            parseCartItemDetails(itemToEdit.key, itemToEdit.details)
            setSidebarOpen(true)
          }
          window.localStorage.removeItem('comandoCleanEditIndex')
        }
      } catch {
        window.localStorage.removeItem('comandoCleanCartItems')
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    window.localStorage.setItem('comandoCleanCartItems', JSON.stringify(cartItems))
  }, [cartItems])

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 rounded-3xl bg-white border border-slate-200 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.08)]">
          <div className="mb-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-white">Selecione seu plano</h2>
                <p className="mt-2 text-sm text-slate-400">O plano escolhido chega preenchido automaticamente quando você vem dos cards.</p>
              </div>
              <div className="rounded-full border border-slate-200 bg-slate-100 px-4 py-2 text-sm text-slate-700">
                Plano atual: {planOptions.find((plan) => plan.key === selectedPlan)?.label}
              </div>
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {planOptions.map((plan) => (
                <button
                  type="button"
                  key={plan.key}
                  onClick={() => setSelectedPlan(plan.key)}
                  className={`rounded-3xl border px-4 py-5 text-left transition ${
                    selectedPlan === plan.key
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-lg shadow-emerald-500/20'
                      : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-emerald-500 hover:bg-slate-100'
                  }`}
                >
                  <span className="font-semibold">{plan.label}</span>
                  <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-6">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-full px-6 py-3 font-semibold transition ${
                  activeCategory === category.key
                    ? 'bg-emerald-700 text-white border-emerald-700'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceItems.map((item) => (
              <div
                key={item.key}
                className={`rounded-3xl border bg-white shadow-lg shadow-slate-200 transition ${
                  selectedItem === item.key
                    ? 'border-emerald-600 bg-slate-100'
                    : 'border-slate-200 hover:border-emerald-500 hover:bg-slate-50'
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItem(item.key)
                    if (item.key === 'tapete') {
                      setSelectedModel('Comum')
                    }
                    if (item.key === 'poltrona') {
                      setSelectedModel('Comum')
                    }
                    if (item.key === 'cadeira') {
                      setSelectedModel('Estofado no assento')
                    }
                    if (item.key === 'sofa') {
                      setSelectedModel('Retrátil')
                    }
                    if (item.key === 'colchao') {
                      setColchaoSize('Solteiro')
                    }
                    if (item.key === 'automovel') {
                      setSelectedAutomovelSize('Médio')
                      setSelectedMaterial('Tecido')
                      setSelectedAutomovelOption('Só bancos')
                    }
                    if (item.key === 'puff') {
                      setSelectedPuffSize('Médio')
                    }
                    if (item.key === 'outros') {
                      setOutrosDescription('')
                    }
                  }}
                  className="flex w-full flex-col items-center justify-center gap-3 rounded-3xl px-4 py-6 text-center"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-sm font-medium text-slate-900">{item.label}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.08)]">
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Detalhes do serviço</h2>
            <p className="text-sm text-slate-500 mb-6">
              Item selecionado:{' '}
              <span className="font-semibold text-slate-900">{activeService?.label}</span>
            </p>

            <div className="space-y-6">
              {selectedItem === 'sofa' && (
                <>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Número de lugares</h3>
                    <div className="flex flex-wrap gap-2">
                      {quantityOptions.map((option) => (
                        <OptionButton
                          key={option}
                          label={option}
                          selected={selectedQuantity === option}
                          onClick={() => setSelectedQuantity(option)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Modelo</h3>
                    <div className="flex flex-wrap gap-2">
                      {sofaModelOptions.map((option) => (
                        <OptionButton
                          key={option.key}
                          label={option.label}
                          selected={selectedModel === option.key}
                          onClick={() => setSelectedModel(option.key)}
                        />
                      ))}
                    </div>
                    <p className="mt-4 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600 border border-slate-200">
                      {sofaModelOptions.find((option) => option.key === selectedModel)?.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Material</h3>
                    <div className="flex flex-wrap gap-2">
                      {materialOptions.map((option) => (
                        <OptionButton
                          key={option}
                          label={option}
                          selected={selectedMaterial === option}
                          onClick={() => setSelectedMaterial(option)}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {selectedItem === 'tapete' && (
                <>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Largura (m)</h3>
                    <input
                      type="text"
                      value={tapeteWidth}
                      onChange={(event) => setTapeteWidth(event.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                      placeholder="0,00"
                    />
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Comprimento (m)</h3>
                    <input
                      type="text"
                      value={tapeteLength}
                      onChange={(event) => setTapeteLength(event.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                      placeholder="0,00"
                    />
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Modelo</h3>
                    <div className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700">Comum</div>
                  </div>
                </>
              )}

              {selectedItem === 'poltrona' && (
                <>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Material</h3>
                    <div className="flex flex-wrap gap-2">
                      {materialOptions.map((option) => (
                        <OptionButton
                          key={option}
                          label={option}
                          selected={selectedMaterial === option}
                          onClick={() => setSelectedMaterial(option)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Modelo</h3>
                    <div className="flex flex-wrap gap-2">
                      {poltronaModelOptions.map((option) => (
                        <OptionButton
                          key={option.key}
                          label={option.label}
                          selected={selectedModel === option.key}
                          onClick={() => setSelectedModel(option.key)}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {selectedItem === 'cadeira' && (
                <>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Material</h3>
                    <div className="flex flex-wrap gap-2">
                      {materialOptions.map((option) => (
                        <OptionButton
                          key={option}
                          label={option}
                          selected={selectedMaterial === option}
                          onClick={() => setSelectedMaterial(option)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Modelo</h3>
                    <div className="flex flex-wrap gap-2">
                      {cadeiraModelOptions.map((option) => (
                        <OptionButton
                          key={option.key}
                          label={option.label}
                          selected={selectedModel === option.key}
                          onClick={() => setSelectedModel(option.key)}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {selectedItem === 'colchao' && (
                <>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Tamanho</h3>
                    <div className="flex flex-wrap gap-2">
                      {colchaoSizeOptions.map((option) => (
                        <OptionButton
                          key={option.key}
                          label={option.label}
                          selected={colchaoSize === option.key}
                          onClick={() => setColchaoSize(option.key)}
                        />
                      ))}
                    </div>
                    <p className="mt-4 rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-700 border border-gray-200">
                      Tamanho aproximado: {colchaoSizeMap[colchaoSize]}
                    </p>
                  </div>
                </>
              )}

              {selectedItem === 'automovel' && (
                <>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Tamanho</h3>
                    <div className="flex flex-wrap gap-2">
                      {automovelSizeOptions.map((option) => (
                        <OptionButton
                          key={option}
                          label={option}
                          selected={selectedAutomovelSize === option}
                          onClick={() => setSelectedAutomovelSize(option)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Material</h3>
                    <div className="flex flex-wrap gap-2">
                      {materialOptions.map((option) => (
                        <OptionButton
                          key={option}
                          label={option}
                          selected={selectedMaterial === option}
                          onClick={() => setSelectedMaterial(option)}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Opção</h3>
                    <div className="flex flex-wrap gap-2">
                      {automovelOptionOptions.map((option) => (
                        <OptionButton
                          key={option}
                          label={option}
                          selected={selectedAutomovelOption === option}
                          onClick={() => setSelectedAutomovelOption(option)}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}

              {selectedItem === 'puff' && (
                <>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Tamanho</h3>
                    <div className="flex flex-wrap gap-2">
                      {puffSizeOptions.map((option) => (
                        <OptionButton
                          key={option.key}
                          label={option.label}
                          selected={selectedPuffSize === option.key}
                          onClick={() => setSelectedPuffSize(option.key)}
                        />
                      ))}
                    </div>
                    <p className="mt-4 rounded-2xl bg-gray-50 px-4 py-3 text-sm text-gray-700 border border-gray-200">
                      {puffSizeOptions.find((option) => option.key === selectedPuffSize)?.description}
                    </p>
                  </div>
                </>
              )}

              {selectedItem === 'outros' && (
                <>
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">Descrição do serviço</h3>
                    <textarea
                      value={outrosDescription}
                      onChange={(event) => setOutrosDescription(event.target.value)}
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-500"
                      placeholder="Descreva com o maior detalhe possível o serviço que você gostaria de ter..."
                      rows={6}
                    />
                  </div>
                </>
              )}

              {selectedItem !== 'sofa' && selectedItem !== 'tapete' && selectedItem !== 'poltrona' && selectedItem !== 'cadeira' && selectedItem !== 'colchao' && selectedItem !== 'automovel' && selectedItem !== 'puff' && selectedItem !== 'outros' && (
                <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600 border border-slate-200">
                  Selecione um serviço para ver campos de personalização específicos.
                </div>
              )}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => addToCart(selectedItem, activeService?.label || 'Serviço')}
                className="inline-flex w-full items-center justify-center rounded-3xl bg-emerald-700 px-5 py-3 text-white font-semibold shadow-lg shadow-emerald-700/20 hover:bg-emerald-600 transition"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>

          <aside className={`rounded-3xl p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.08)] lg:sticky lg:top-8 ${sidebarOpen ? 'bg-white border border-slate-200' : 'bg-slate-50 border border-slate-200'}`}>
            {sidebarOpen ? (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Carrinho</h2>
                  <div className="rounded-3xl bg-gray-50 p-4 text-sm text-gray-700 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-gray-900">Itens</span>
                      <span className="text-green-700">{cartItems.reduce((sum, item) => sum + item.quantity, 0)} no carrinho</span>
                    </div>
                    <div className="space-y-3">
                      {cartItems.map((item, index) => (
                        <div key={`${item.key}-${index}`} className="rounded-2xl bg-white p-3 border border-gray-200">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-semibold text-gray-900">{item.label}</p>
                                <p className="text-xs text-gray-500">Quantidade: {item.quantity}</p>
                                <p className="mt-2 whitespace-pre-line text-xs text-gray-600">{item.details}</p>
                              </div>
                              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">{item.quantity}x</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <button
                                type="button"
                                onClick={() => editCartItem(index)}
                                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                              >
                                Editar
                              </button>
                              <button
                                type="button"
                                onClick={() => removeCartItem(index)}
                                className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-100"
                              >
                                Remover
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Resumo do serviço</h2>
                  <div className="space-y-4 text-gray-700">
                    <div>
                      <span className="block font-semibold text-gray-900">Categoria:</span>
                      Residencial
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-900">Plano selecionado:</span>
                      {planOptions.find((plan) => plan.key === selectedPlan)?.label}
                    </div>
                    <div>
                      <span className="block font-semibold text-gray-900">Serviço selecionado:</span>
                      {activeService?.label}
                    </div>
                    {selectedItem === 'sofa' && (
                      <>
                        <div>
                          <span className="block font-semibold text-gray-900">Lugares:</span>
                          {selectedQuantity}
                        </div>
                        <div>
                          <span className="block font-semibold text-gray-900">Modelo:</span>
                          {selectedModel}
                        </div>
                        <div>
                          <span className="block font-semibold text-gray-900">Material:</span>
                          {selectedMaterial}
                        </div>
                      </>
                    )}
                    {selectedItem === 'tapete' && (
                      <>
                        <div>
                          <span className="block font-semibold text-gray-900">Largura:</span>
                          {tapeteWidth} m
                        </div>
                        <div>
                          <span className="block font-semibold text-gray-900">Comprimento:</span>
                          {tapeteLength} m
                        </div>
                        <div>
                          <span className="block font-semibold text-gray-900">Modelo:</span>
                          Comum
                        </div>
                      </>
                    )}
                    {selectedItem === 'poltrona' && (
                      <>
                        <div>
                          <span className="block font-semibold text-gray-900">Material:</span>
                          {selectedMaterial}
                        </div>
                        <div>
                          <span className="block font-semibold text-gray-900">Modelo:</span>
                          {selectedModel}
                        </div>
                      </>
                    )}
                    {selectedItem === 'cadeira' && (
                      <>
                        <div>
                          <span className="block font-semibold text-gray-900">Modelo:</span>
                          {selectedModel}
                        </div>
                        <div>
                          <span className="block font-semibold text-gray-900">Material:</span>
                          {selectedMaterial}
                        </div>
                      </>
                    )}
                    {selectedItem === 'colchao' && (
                      <>
                        <div>
                          <span className="block font-semibold text-gray-900">Tamanho:</span>
                          {colchaoSize}
                        </div>
                      </>
                    )}
                    {selectedItem === 'automovel' && (
                      <>
                        <div>
                          <span className="block font-semibold text-gray-900">Tamanho:</span>
                          {selectedAutomovelSize}
                        </div>
                        <div>
                          <span className="block font-semibold text-gray-900">Material:</span>
                          {selectedMaterial}
                        </div>
                        <div>
                          <span className="block font-semibold text-gray-900">Opção:</span>
                          {selectedAutomovelOption}
                        </div>
                      </>
                    )}
                    {selectedItem === 'puff' && (
                      <>
                        <div>
                          <span className="block font-semibold text-gray-900">Tamanho:</span>
                          {selectedPuffSize}
                        </div>
                      </>
                    )}
                    {selectedItem === 'outros' && (
                      <>
                        <div>
                          <span className="block font-semibold text-gray-900">Descrição:</span>
                          {outrosDescription || 'Nenhuma descrição fornecida'}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <Link
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                  target="_blank"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-3xl bg-green-600 px-5 py-3 text-white font-semibold shadow hover:bg-green-700 transition"
                >
                  Agendar via WhatsApp
                </Link>
              </div>
            ) : (
              <div className="text-center text-gray-500">
                <p className="mb-3 font-semibold text-gray-900">Clique em "Adicionar ao carrinho" para abrir o resumo.</p>
                <p>O painel direito mostrará a descrição do serviço selecionado.</p>
              </div>
            )}
          </aside>
        </section>
      </div>
    </main>
  )
}