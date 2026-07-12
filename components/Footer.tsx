import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4">Comando Clean</h3>
            <p className="text-sm">Serviços profissionais de limpeza para sua família.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Residencial</Link></li>
              <li><Link href="#" className="hover:text-white transition">Comercial</Link></li>
              <li><Link href="#" className="hover:text-white transition">Higienização</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 (11) 9999-9999</li>
              <li>📧 contato@comandoclean.com</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition">Facebook</Link></li>
              <li><Link href="#" className="hover:text-white transition">Instagram</Link></li>
              <li><Link href="#" className="hover:text-white transition">WhatsApp</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Comando Clean. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
