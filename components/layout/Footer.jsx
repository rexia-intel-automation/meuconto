'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Meu Conto</h3>
            <p className="text-gray-400">
              Criando histórias mágicas e personalizadas para crianças com o poder da inteligência artificial.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-primary transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <a href="#sobre" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a href="#contato" className="text-gray-400 hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#privacidade" className="text-gray-400 hover:text-primary transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#termos" className="text-gray-400 hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Meu Conto. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
