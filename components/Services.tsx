export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Limpeza Residencial',
      description: 'Limpeza completa de sua casa com profissionais treinados',
      icon: '🏠',
    },
    {
      id: 2,
      title: 'Limpeza Comercial',
      description: 'Manutenção profissional para sua empresa ou escritório',
      icon: '🏢',
    },
    {
      id: 3,
      title: 'Higienização Especial',
      description: 'Desinfecção e higienização com produtos certificados',
      icon: '✨',
    },
    {
      id: 4,
      title: 'Limpeza de Carpetes',
      description: 'Limpeza profunda e higienização de carpetes e tapetes',
      icon: '🧹',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
