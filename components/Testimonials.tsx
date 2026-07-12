export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      text: 'Serviço excelente! A equipe foi muito profissional e deixou minha casa impecável.',
      rating: 5,
    },
    {
      name: 'João Santos',
      text: 'Recomendo muito. Chegaram no horário, fizeram um trabalho de qualidade e com preço justo.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      text: 'Primeira vez que contrato e estou muito satisfeita. Vou chamar novamente com certeza!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
