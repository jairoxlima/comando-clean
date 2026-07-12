export default function Features() {
  const features = [
    {
      title: 'Profissionais Treinados',
      description: 'Equipe com experiência e certificações',
    },
    {
      title: 'Produtos Eco-Friendly',
      description: 'Utilizamos produtos seguros e biodegradáveis',
    },
    {
      title: 'Garantia de Qualidade',
      description: 'Satisfação garantida ou reembolso total',
    },
    {
      title: 'Disponível 24/7',
      description: 'Agendamento flexível para sua conveniência',
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Por que nos escolher?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
