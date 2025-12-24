'use client'

import Link from 'next/link'
import { useAuth } from '../../hooks/useAuth'
import Button from '../ui/Button'

export default function Header({ variant = 'landing' }) {
  const { isAuthenticated, user, logout } = useAuth()

  if (variant === 'landing') {
    return (
      <header className="bg-white shadow-md">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-primary hover:text-orange-600 transition-colors">
              Meu Conto
            </Link>
            <Link href="/login">
              <Button variant="primary" size="sm">
                Entrar
              </Button>
            </Link>
          </div>
        </div>
      </header>
    )
  }

  // Header para páginas autenticadas
  return (
    <header className="bg-white shadow-md">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link href="/livros" className="text-2xl font-bold text-primary hover:text-orange-600 transition-colors">
            Meu Conto
          </Link>

          {isAuthenticated && (
            <div className="flex items-center gap-6">
              <span className="text-gray-700 font-medium">
                Olá, <span className="text-primary">{user?.name || 'Usuário'}</span>!
              </span>
              <Button variant="outline" size="sm" onClick={logout}>
                Sair
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
