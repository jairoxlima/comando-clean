'use client'

import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

const categories = [
  { key: 'casa', label: 'Residencial' },
]

const serviceItems = [
  { key: 'sofa', label: 'Sofá' },
  { key: 'tapete', label: 'Tapete' },
  { key: 'poltrona', label: 'Poltrona' },
  { key: 'cadeira', label: 'Cadeira' },
  { key: 'colchao', label: 'Colchão' },
  { key: 'automovel', label: 'Automóvel' },
  { key: 'puff', label: 'Puff' },
  { key: 'outros', label: 'Outros' },
]

const planOptions = [
  { key: 'unica', label: 'Higienização Pontual', description: 'Manutenção técnica completa para estofados com sujidade aparente.' },
  { key: 'anual', label: 'Proteção Essencial', description: 'Manutenção semestral programada para preservação total do tecido.' },
  { key: 'saude', label: 'Saúde Total', description: 'Tratamento intensivo anti-alérgico para casas com pets ou crianças.' },
]

const whatsappNumber = '5581999629352'

const quantityOptions = ['1', '2', '3', '4', '5', '6']
const sofaModelOptions = [
  { key: 'Retrátil', label: 'Sofá Retrátil', description: 'Modelo com assentos extensíveis, requer limpeza técnica em todas as articulações.' },
  { key: 'Sofá Comum', label: 'Sofá Comum', description: 'Modelo clássico fixo, foco em assentos, encostos e braços.' },
  { key: 'Sofá de Canto', label: 'Sofá de Canto', description: 'Formato em L, maior área de superfície e junções complexas.' },
  { key: 'Sofá com Chaise', label: 'Sofá com Chaise', description: 'Extensão fixa para relaxamento, exige atenção especial na base.' },
  { key: 'Sofá-cama', label: 'Sofá-cama', description: 'Funcionalidade dupla, higienização completa do estofado e estrutura interna.' },
]

const materialOptions = ['Tecido', 'Couro', 'Suede', 'Veludo']
const colchaoSizeOptions = [
  { key: 'Solteiro', label: 'Solteiro' },
  { key: 'Casal', label: 'Casal' },
  { key: 'Queen', label: 'Queen' },
  { key: 'King', label: 'King' },
]

function OptionButton({ selected, label, onClick }: { selected: boolean; label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      role="radio"
      aria-checked={selected}
      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition focus:outline-none ${
        selected
          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20'
          : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600'
      }`}
    >
      {label}
    </button>
  )
}

function OrcamentoContent() {
  const [activeCategory, setActiveCategory] = useState('casa')
  const [selectedItem, setSelectedItem] = useState('sofa')
  const [selectedQuantity, setSelectedQuantity] = useState('3')
  const [selectedModel, setSelectedModel] = useState('Retrátil')
  const [selectedMaterial, setSelectedMaterial] = useState('Tecido')
  const [colchaoSize, setColchaoSize] = useState('Solteiro')
  const [outrosDescription, setOutrosDescription] = useState('')
  const [cartItems, setCartItems] = useState<{ key: string; label: string; quantity: number; details: string }[]>([])
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('unica')
  const searchParams = useSearchParams()

  const activeService = serviceItems.find((item) => item.key === selectedItem)

  useEffect(() => {
    const plan = searchParams.get('plan') ?? 'unica'
    if (planOptions.some((option) => option.key === plan)) {
      setSelectedPlan(plan)
    }
  }, [searchParams])

  const generateWhatsAppMessage = () => {
    let message = 'Solicitação de Orçamento - Comando Clean\n\n'
    const planLabel = planOptions.find((option) => option.key === selectedPlan)?.label || 'Plano personalizado'
    message += `Plano: ${planLabel}\n\n`
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.label}\n`
      message += item.details.split('\n').map(line => `- ${line}`).join('\n')
      message += `\nQuantidade: ${item.quantity}`
      message += '\n\n'
    })
    
    message += 'Desejo receber um orçamento formal para estes itens.'
    return message
  }

  const getSelectedItemDetails = (itemKey: string) => {
    if (itemKey === 'sofa') {
      return `Lugares: ${selectedQuantity}\nModelo: ${selectedModel}\nMaterial: ${selectedMaterial}`
    }
    if (itemKey === 'colchao') {
      return `Tamanho: ${colchaoSize}`
    }
    if (itemKey === 'outros') {
      return `${outrosDescription || 'Consultar especialista'}`
    }
    return `Material: ${selectedMaterial}`
  }

  const addToCart = (itemKey: string, label: string) => {
    const details = getSelectedItemDetails(itemKey)
    setCartItems((prev) => [...prev, { key: itemKey, label, quantity: 1, details }])
    setSidebarOpen(true)
  }

  const removeCartItem = (index: number) => {
    setCartItems((prev) => prev.filter((_, currentIndex) => currentIndex !== index))
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Configurador de Serviço</h1>
        <p className="text-slate-500">Selecione os itens e personalize os detalhes para seu orçamento.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
        <div className="space-y-12">
          {/* STEP 1: PLAN */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-900">01</span>
              Escolha seu Plano
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {planOptions.map((plan) => (
                <button
                  key={plan.key}
                  onClick={() => setSelectedPlan(plan.key)}
                  className={`p-6 rounded-2xl text-left border-2 transition-all ${
                    selectedPlan === plan.key
                      ? 'border-blue-600 bg-blue-50/50 ring-4 ring-blue-600/5'
                      : 'border-slate-100 bg-white hover:border-slate-200 shadow-sm'
                  }`}
                >
                  <p className={`font-bold mb-2 ${selectedPlan === plan.key ? 'text-blue-700' : 'text-slate-900'}`}>{plan.label}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{plan.description}</p>
                </button>
              ))}
            </div>
          </section>

          {/* STEP 2: ITEMS */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[10px] text-slate-900">02</span>
              Selecione os Itens
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => setSelectedItem(item.key)}
                  className={`p-6 rounded-2xl border-2 transition-all text-center ${
                    selectedItem === item.key
                      ? 'border-blue-600 bg-white shadow-lg ring-4 ring-blue-600/5'
                      : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                >
                  <span className={`block font-bold ${selectedItem === item.key ? 'text-blue-600' : 'text-slate-700'}`}>{item.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* STEP 3: DETAILS */}
          <section className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
             <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Personalização Técnica</h2>
             
             <div className="space-y-8">
               {selectedItem === 'sofa' && (
                 <>
                   <div>
                     <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-tighter">Número de Lugares</h3>
                     <div className="flex flex-wrap gap-2">
                       {quantityOptions.map((q) => (
                         <OptionButton key={q} label={q} selected={selectedQuantity === q} onClick={() => setSelectedQuantity(q)} />
                       ))}
                     </div>
                   </div>
                   <div>
                     <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-tighter">Modelo do Estofado</h3>
                     <div className="grid md:grid-cols-2 gap-3">
                       {sofaModelOptions.map((m) => (
                         <button
                           key={m.key}
                           onClick={() => setSelectedModel(m.key)}
                           className={`p-4 rounded-xl border text-left transition-all ${
                             selectedModel === m.key ? 'border-blue-600 bg-white shadow-sm' : 'border-slate-200 bg-transparent hover:border-slate-300'
                           }`}
                         >
                           <p className="font-bold text-sm mb-1">{m.label}</p>
                           <p className="text-xs text-slate-500">{m.description}</p>
                         </button>
                       ))}
                     </div>
                   </div>
                 </>
               )}

               {selectedItem === 'colchao' && (
                 <div>
                   <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-tighter">Dimensões</h3>
                   <div className="flex flex-wrap gap-2">
                     {colchaoSizeOptions.map((s) => (
                       <OptionButton key={s.key} label={s.label} selected={colchaoSize === s.key} onClick={() => setColchaoSize(s.key)} />
                     ))}
                   </div>
                 </div>
               )}

               {selectedItem !== 'outros' && (
                 <div>
                   <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-tighter">Tipo de Material</h3>
                   <div className="flex flex-wrap gap-2">
                     {materialOptions.map((m) => (
                       <OptionButton key={m} label={m} selected={selectedMaterial === m} onClick={() => setSelectedMaterial(m)} />
                     ))}
                   </div>
                 </div>
               )}

               {selectedItem === 'outros' && (
                 <div>
                   <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-tighter">Descrição do Serviço</h3>
                   <textarea
                     value={outrosDescription}
                     onChange={(e) => setOutrosDescription(e.target.value)}
                     className="w-full p-4 rounded-xl border border-slate-200 bg-white min-h-[150px] outline-none focus:border-blue-500 transition-colors"
                     placeholder="Ex: Tapete persa 2x3m, cadeiras de jantar com encosto em palhinha, etc."
                   />
                 </div>
               )}

               <button
                 onClick={() => addToCart(selectedItem, activeService?.label || 'Item')}
                 className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all uppercase tracking-widest text-sm"
               >
                 Adicionar ao Orçamento
               </button>
             </div>
          </section>
        </div>

        {/* SIDEBAR SUMMARY */}
        <aside className="sticky top-32">
          <div className="p-8 rounded-3xl bg-slate-950 text-white shadow-2xl">
            <h2 className="text-xl font-bold mb-6">Resumo da Solicitação</h2>
            
            {cartItems.length === 0 ? (
              <div className="py-12 text-center text-slate-500">
                <p>Nenhum item selecionado.</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cartItems.map((item, index) => (
                    <div key={index} className="pb-4 border-b border-slate-800 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-bold text-blue-400">{item.label}</p>
                        <button onClick={() => removeCartItem(index)} className="text-slate-600 hover:text-red-400">
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                      </div>
                      <p className="text-xs text-slate-400 whitespace-pre-line leading-relaxed">{item.details}</p>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-slate-800">
                   <div className="flex justify-between text-sm mb-4">
                     <span className="text-slate-400">Plano Selecionado:</span>
                     <span className="font-bold">{planOptions.find(p => p.key === selectedPlan)?.label}</span>
                   </div>
                   <a
                     href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                     target="_blank"
                     className="block w-full py-4 bg-emerald-500 text-slate-950 text-center rounded-xl font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/10"
                   >
                     Solicitar via WhatsApp
                   </a>
                   <p className="text-[10px] text-center text-slate-500 mt-4 uppercase tracking-widest">Atendimento Profissional em Recife</p>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  )
}

export default function Orcamento() {
  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<div className="p-12 text-center">Carregando...</div>}>
        <OrcamentoContent />
      </Suspense>
    </main>
  )
}
