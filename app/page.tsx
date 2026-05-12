'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      {/* HERO SECTION */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950" />
        
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
              Líder em Higienização em Recife
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-8">
              Recupere o conforto e a saúde do seu lar.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              Especialistas em limpeza técnica profunda para sofás, colchões e tapetes. Tecnologia de ponta para eliminar 99,9% de ácaros e bactérias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/orcamento"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold transition-all hover:bg-blue-500 shadow-lg shadow-blue-600/20"
              >
                Solicitar Orçamento Gratuito
              </Link>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-8 py-4 text-lg font-semibold transition-all hover:bg-slate-800"
              >
                Ver Nossos Serviços
              </a>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
               <img 
                 src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&q=80" 
                 alt="Limpeza de sofá profissional"
                 className="w-full h-full object-cover"
               />
            </div>
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-12 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">500+</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Clientes Satisfeitos</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">100%</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Produtos Certificados</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">5 Estrelas</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Avaliação Google</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">Secagem</p>
              <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Ultra Rápida</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="py-24 px-6 bg-white" id="servicos">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6">Mais que uma limpeza, um cuidado com a sua saúde.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Estofados acumulam muito mais que sujeira aparente. Ácaros, fungos e bactérias são responsáveis por crises alérgicas e problemas respiratórios em toda a família.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Limpeza Profunda</h3>
              <p className="text-slate-600 leading-relaxed">Extração por sucção de alta potência que remove resíduos das camadas mais profundas do tecido.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sanitização de Tecidos</h3>
              <p className="text-slate-600 leading-relaxed">Aplicação de produtos fungicidas e bactericidas de uso profissional, seguros para crianças e pets.</p>
            </div>
            <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-200 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Secagem Otimizada</h3>
              <p className="text-slate-600 leading-relaxed">Equipamentos de extração que permitem a utilização do estofado poucas horas após o serviço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section className="py-24 px-6 bg-slate-950 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">Por que confiar na Comando Clean?</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 border border-slate-800 rounded-full flex items-center justify-center font-bold text-blue-500">01</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Compromisso com o Prazo</h4>
                    <p className="text-slate-400">Pontualidade rigorosa e atendimento organizado em toda a região metropolitana de Recife.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 border border-slate-800 rounded-full flex items-center justify-center font-bold text-blue-500">02</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Excelência em Atendimento</h4>
                    <p className="text-slate-400">Profissionais treinados, uniformizados e equipados com o que há de mais moderno no mercado.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 border border-slate-800 rounded-full flex items-center justify-center font-bold text-blue-500">03</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Garantia de Satisfação</h4>
                    <p className="text-slate-400">Nossa prioridade é o resultado impecável. Revisamos o serviço caso você não esteja 100% satisfeito.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-600/10 border border-blue-500/20 p-8 lg:p-12 rounded-3xl">
                <p className="text-2xl font-medium leading-relaxed italic mb-8">
                  "O serviço da Comando Clean transformou meu sofá. O atendimento foi impecável e a secagem foi muito mais rápida do que eu esperava."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-slate-800 rounded-full" />
                  <div>
                    <p className="font-bold">Roberta Albuquerque</p>
                    <p className="text-slate-500 text-sm">Empresária | Recife</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / PLANS */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Nossas Soluções</h2>
            <p className="text-slate-600">Planos personalizados para manter sua casa sempre protegida.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* PLAN 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col h-full shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Higienização Pontual</h3>
              <p className="text-slate-500 text-sm mb-6">Ideal para limpezas de manutenção ou urgências.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Limpeza profunda completa
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Remoção de odores
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Secagem rápida
                </li>
              </ul>
              <Link href="/orcamento?plan=unica" className="block w-full text-center py-3 px-6 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Agendar Agora
              </Link>
            </div>

            {/* PLAN 2 */}
            <div className="bg-white p-8 rounded-2xl border-2 border-blue-600 flex flex-col h-full shadow-xl relative scale-105 z-10">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Mais Vendido
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Proteção Essencial</h3>
              <p className="text-slate-500 text-sm mb-6">Manutenção semestral para durabilidade máxima.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  2 Higienizações anuais
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Check-up preventivo de ácaros
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Prioridade no agendamento
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  10% de desconto adicional
                </li>
              </ul>
              <Link href="/orcamento?plan=anual" className="block w-full text-center py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg shadow-blue-600/20">
                Garantir Proteção
              </Link>
            </div>

            {/* PLAN 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 flex flex-col h-full shadow-sm hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Saúde Total</h3>
              <p className="text-slate-500 text-sm mb-6">Ideal para casas com recém-nascidos e pets.</p>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  3 Higienizações anuais
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Tratamento anti-alérgico premium
                </li>
              </ul>
              <Link href="/orcamento?plan=saude" className="block w-full text-center py-3 px-6 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Escolher Plano Saúde
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-blue-600 relative overflow-hidden text-white">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">Experimente a sensação de um sofá novo outra vez.</h2>
          <p className="text-xl opacity-90 mb-12">
            Não comprometa a saúde da sua família com estofados sujos. Solicite agora seu orçamento sem compromisso e receba atendimento imediato.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/orcamento" className="px-10 py-5 bg-white text-blue-600 rounded-xl font-bold text-xl hover:bg-slate-100 transition-all shadow-xl">
              Falar com Especialista
            </Link>
          </div>
          <p className="mt-8 text-sm opacity-80 uppercase tracking-widest font-semibold">
            Resposta imediata via WhatsApp
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center font-bold text-white italic">CC</div>
             <span className="font-bold text-xl">Comando Clean</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Comando Clean. Todos os direitos reservados. Atendimento em Recife e Região Metropolitana.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors uppercase text-xs font-bold tracking-widest">Instagram</a>
            <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors uppercase text-xs font-bold tracking-widest">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
