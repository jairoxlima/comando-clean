import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Comando Clean - Serviços de Limpeza',
  description: 'Serviços profissionais de limpeza e higienização para sua casa ou empresa.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
