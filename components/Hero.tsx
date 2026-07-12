export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Limpeza Profissional para seu Lar ou Empresa
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Serviços de limpeza confiáveis, rápidos e de excelente qualidade
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            Solicitar Orçamento
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Saiba Mais
          </button>
        </div>
      </div>
    </section>
  );
}
