'use client'

import Link from 'next/link'
import Card from '../../components/ui/Card'
import LoginForm from '../../components/auth/LoginForm'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-4xl font-bold text-primary hover:text-orange-600 transition-colors mb-2">
              Meu Conto
            </h1>
          </Link>
          <p className="text-gray-600">Entre para criar livros mágicos</p>
        </div>

        <Card className="shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Entrar na sua conta
          </h2>

          <LoginForm />

          <div className="mt-6 text-center text-sm text-gray-600">
            <Link href="/" className="text-primary hover:text-orange-600 font-medium">
              ← Voltar para início
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
