export interface CartItem {
  key: string
  label: string
  quantity: number
  details: string
}

export interface Pedido {
  id: string
  dataCriacao: string
  plano: string
  itens: CartItem[]
  nomeCliente?: string
  endereco?: string
}

const STORAGE_KEY = 'comandoCleanPedidos'
const WHATSAPP_NUMBER = '5581999629352'

export function savePedido(plano: string, itens: CartItem[]): string {
  const pedidos = loadPedidos()
  const id = Date.now().toString()

  const novoPedido: Pedido = {
    id,
    dataCriacao: new Date().toISOString(),
    plano,
    itens,
  }

  pedidos.push(novoPedido)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos))

  return id
}

export function loadPedidos(): Pedido[] {
  if (typeof window === 'undefined') return []

  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

export function getPedidoById(id: string): Pedido | undefined {
  const pedidos = loadPedidos()
  return pedidos.find(p => p.id === id)
}

export function updatePedido(id: string, updates: Partial<Pedido>): void {
  const pedidos = loadPedidos()
  const index = pedidos.findIndex(p => p.id === id)

  if (index !== -1) {
    pedidos[index] = { ...pedidos[index], ...updates }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(pedidos))
  }
}

export function deletePedido(id: string): void {
  const pedidos = loadPedidos()
  const filtered = pedidos.filter(p => p.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}

export function generateWhatsAppMessage(pedido: Pedido): string {
  let message = 'Solicitação de Orçamento - Comando Clean\n\n'

  message += `Plano: ${pedido.plano}\n`
  message += `Data: ${new Date(pedido.dataCriacao).toLocaleDateString('pt-BR')}\n\n`

  if (pedido.nomeCliente) {
    message += `Cliente: ${pedido.nomeCliente}\n`
  }

  if (pedido.endereco) {
    message += `Endereço: ${pedido.endereco}\n\n`
  } else {
    message += '\n'
  }

  message += 'Serviços Solicitados:\n\n'

  pedido.itens.forEach((item, index) => {
    message += `${index + 1}. ${item.label}\n`
    message += item.details.split('\n').map(line => `   ${line}`).join('\n')
    message += '\n\n'
  })

  message += 'Desejo receber confirmação de agendamento.'

  return message
}

export function openWhatsApp(pedido: Pedido): void {
  const message = generateWhatsAppMessage(pedido)
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank')
}
