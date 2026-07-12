export default function CTA() {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para ter sua casa limpa?</h2>
        <p className="text-xl mb-8 text-blue-100">Entre em contato conosco e solicite seu orçamento gratuito</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
            📞 Ligar Agora
          </button>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition">
            📧 Enviar Mensagem
          </button>
        </div>
        <p className="text-blue-100 mt-6">Disponível para atendimento de segunda a domingo</p>
      </div>
    </section>
  );
}
