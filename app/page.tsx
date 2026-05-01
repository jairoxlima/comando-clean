'use client'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700 text-white py-24 px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_40%)] opacity-80 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-6">
            Sofá sujo, mancha difícil ou cheiro ruim? Chega de sofrer com isso.
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-2xl leading-8 mb-8 opacity-95">
            Higienização profissional de estofados em Recife com atendimento em domicílio, secagem rápida e produtos seguros para crianças e pets.
          </p>
          <a
            href="/orcamento"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-4 text-lg font-semibold text-slate-900 shadow-xl shadow-emerald-500/20 transition duration-300 ease-out hover:bg-emerald-300 hover:-translate-y-0.5"
          >
            AGENDAR AGORA VIA WHATSAPP
          </a>
          <p className="mt-4 text-sm text-emerald-100/90">Atendimento em domicílio • Secagem rápida • Seguro para pets e crianças</p>
        </div>
      </section>

      {/* SEÇÃO DE PROBLEMA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Você Sabe o Que Está no Seu Sofá?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4 text-lg">
                <li>❌ Manchas de comida e bebida que não saem</li>
                <li>❌ Cheiro ruim de suor, pets ou mofo</li>
                <li>❌ Ácaros e bactérias causando alergias</li>
                <li>❌ Pelo de animais grudado no tecido</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-4 text-lg">
                <li>❌ Crianças sujando tudo o tempo todo</li>
                <li>❌ Sofá velho e desgastado parecendo sujo</li>
                <li>❌ Ambiente da casa com cheiro desagradável</li>
                <li>❌ Riscos de problemas de saúde para a família</li>
              </ul>
            </div>
          </div>
          <p className="text-center mt-8 text-xl font-semibold">Isso afeta sua qualidade de vida e a saúde da sua família!</p>
        </div>
      </section>

      {/* SOLUÇÃO */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">A Solução Que Você Precisa</h2>
          <p className="text-xl mb-8">
            Nossa higienização profissional remove 99% das impurezas, odores e manchas do seu estofado.
            Usamos equipamentos de alta pressão e produtos seguros, deixando seu sofá renovado e saudável.
          </p>
          <p className="text-lg">
            Imagine: um ambiente limpo, cheiro agradável e proteção contra ácaros e bactérias.
            Tudo isso no conforto da sua casa, em Recife!
          </p>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Por Que Escolher Nossa Higienização?</h2>
          <ul className="space-y-4 text-lg">
            <li>✅ <strong>Atendimento em domicílio:</strong> Você não precisa levar o sofá a lugar nenhum</li>
            <li>✅ <strong>Secagem rápida:</strong> Seu estofado fica pronto para usar em poucas horas</li>
            <li>✅ <strong>Produtos seguros:</strong> Certificados para uso com crianças e pets</li>
            <li>✅ <strong>Remoção total:</strong> Manchas, odores, ácaros e bactérias vão embora</li>
            <li>✅ <strong>Equipe treinada:</strong> Profissionais experientes em Recife</li>
            <li>✅ <strong>Garantia de satisfação:</strong> Ou refazemos o serviço gratuitamente</li>
          </ul>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Veja a Transformação</h2>
          <p className="text-xl mb-8">
            Antes: Sofá sujo, manchado e com cheiro ruim.<br />
            Depois: Sofá impecável, cheiroso e protegido contra sujeiras futuras.
          </p>
          <p className="text-lg">Nossos clientes ficam impressionados com o resultado!</p>
          {/* Placeholder para imagens */}
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="bg-gray-200 p-8 rounded-lg">
              <p className="text-center">Imagem ANTES (placeholder)</p>
            </div>
            <div className="bg-gray-200 p-8 rounded-lg">
              <p className="text-center">Imagem DEPOIS (placeholder)</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-16 px-4 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">O Que Nossos Clientes Dizem</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_45px_90px_-60px_rgba(15,23,42,0.3)]">
              <p className="text-base leading-8 text-slate-700 mb-8">“Meu sofá estava horrível com manchas de vinho. Agora parece novo! Recomendo demais.”</p>
              <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-5 text-slate-500">
                <div>
                  <p className="font-semibold text-slate-900">Maria Silva</p>
                  <p className="text-sm">Recife</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">5 ★★★★★</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_45px_90px_-60px_rgba(15,23,42,0.3)]">
              <p className="text-base leading-8 text-slate-700 mb-8">“Tinha cheiro de cachorro por toda a casa. Depois da limpeza, sumiu completamente!”</p>
              <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-5 text-slate-500">
                <div>
                  <p className="font-semibold text-slate-900">João Pereira</p>
                  <p className="text-sm">Olinda</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">5 ★★★★★</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_40px_80px_-60px_rgba(15,23,42,0.25)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_45px_90px_-60px_rgba(15,23,42,0.3)]">
              <p className="text-base leading-8 text-slate-700 mb-8">“Minha filha tem alergia e agora respira melhor. Obrigada pela limpeza profissional!”</p>
              <div className="flex items-center justify-between gap-4 border-t border-slate-200 pt-5 text-slate-500">
                <div>
                  <p className="font-semibold text-slate-900">Ana Costa</p>
                  <p className="text-sm">Recife</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-800">5 ★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS / PLANOS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Escolha Seu Plano</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-slate-900">Higienização Única</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">Para quem quer testar o serviço</p>
              </div>
              <div className="mb-6 rounded-[1.5rem] bg-slate-50 p-5 text-center">
                <p className="text-base uppercase tracking-[0.18em] text-slate-500">Valor</p>
                <p className="mt-3 text-3xl font-bold text-sky-700">💰 Integral</p>
              </div>
              <ul className="mb-8 space-y-3 text-slate-700">
                <li className="rounded-2xl bg-slate-50 p-4">✅ 1 higienização completa</li>
                <li className="rounded-2xl bg-slate-50 p-4">✅ Remoção de odores</li>
                <li className="rounded-2xl bg-slate-50 p-4">✅ Secagem rápida</li>
              </ul>
              <a
                href="/orcamento?plan=higienizacao-unica"
                className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition duration-300 hover:bg-sky-600 hover:-translate-y-0.5"
              >
                Quero experimentar
              </a>
            </div>
            <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-slate-900">Plano Proteção Anual</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">Economia visível para manter seu sofá sempre limpo</p>
              </div>
              <div className="mb-6 rounded-[1.5rem] bg-slate-50 p-5 text-center">
                <p className="text-base uppercase tracking-[0.18em] text-slate-500">Desconto</p>
                <p className="mt-3 text-3xl font-bold text-sky-700">💰 10%</p>
              </div>
              <ul className="mb-8 space-y-3 text-slate-700">
                <li className="rounded-2xl bg-slate-50 p-4">✅ 2 higienizações no ano</li>
                <li className="rounded-2xl bg-slate-50 p-4">✅ Intervalo ideal para manter o sofá sempre limpo</li>
                <li className="rounded-2xl bg-slate-50 p-4">✅ Prioridade no agendamento</li>
                <li className="rounded-2xl bg-slate-50 p-4">✅ Desconto exclusivo</li>
              </ul>
              <a
                href="/orcamento?plan=protecao-anual"
                className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition duration-300 hover:bg-sky-600 hover:-translate-y-0.5"
              >
                Quero manter meu sofá sempre limpo
              </a>
            </div>
            <div className="flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-slate-900">Plano Saúde Total</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">Proteção premium para casas com pets e crianças</p>
              </div>
              <div className="mb-6 rounded-[1.5rem] bg-slate-50 p-5 text-center">
                <p className="text-base uppercase tracking-[0.18em] text-slate-500">Desconto</p>
                <p className="mt-3 text-3xl font-bold text-sky-700">💰 15%</p>
              </div>
              <ul className="mb-8 space-y-3 text-slate-700">
                <li className="rounded-2xl bg-slate-50 p-4">✅ 3 higienizações por ano</li>
                <li className="rounded-2xl bg-slate-50 p-4">✅ Ideal para casas com pets/crianças</li>
                <li className="rounded-2xl bg-slate-50 p-4">✅ Tratamento anti-ácaros incluso</li>
                <li className="rounded-2xl bg-slate-50 p-4">✅ Desconto em outros itens (colchão, tapete)</li>
              </ul>
              <a
                href="/orcamento?plan=saude-total"
                className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-700/20 transition duration-300 hover:bg-sky-600 hover:-translate-y-0.5"
              >
                Quero proteção total
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Como Funciona</h2>
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">1</div>
              <p className="text-lg">Você agenda pelo WhatsApp e informa o tipo de estofado</p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">2</div>
              <p className="text-lg">Nossa equipe vai até sua casa no dia e horário marcados</p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">3</div>
              <p className="text-lg">Fazemos a higienização profissional com equipamentos de ponta</p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">4</div>
              <p className="text-lg">Seu estofado seca rapidamente e fica pronto para uso</p>
            </div>
            <div className="flex items-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">5</div>
              <p className="text-lg">Pagamento na entrega - satisfação garantida!</p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Sua Segurança em Primeiro Lugar</h2>
          <p className="text-xl mb-8">
            Preocupado com danos? Não se preocupe! Oferecemos garantia total.
            Se não ficar satisfeito, refazemos o serviço gratuitamente ou devolvemos seu dinheiro.
          </p>
          <p className="text-lg">
            Trabalhamos com produtos certificados e equipe treinada. Mais de 500 famílias em Recife já confiaram em nós!
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto Para um Sofá Impecável?</h2>
          <p className="text-xl mb-8">
            Não espere mais! Agende agora sua higienização e transforme seu lar hoje mesmo.
          </p>
          <a
            href="/orcamento"
            className="bg-white text-green-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition duration-300"
          >
            CHAME NO WHATSAPP AGORA
          </a>
          <p className="mt-4 text-sm">Resposta imediata • Orçamento gratuito • Atendimento personalizado</p>
        </div>
      </section>
    </div>
  )
}
