'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../../hooks/useAuth'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import Loading from '../../../components/ui/Loading'
import CriarLivroForm from '../../../components/livros/CriarLivroForm'

export default function CriarLivroPage() {
  const { isAuthenticated, loading: authLoading } = useAuth()
  const router = useRouter()

  // Proteção de rota
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, authLoading, router])

  if (authLoading) {
    return <Loading text="Carregando..." />
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50">
      <Header variant="auth" />

      <main className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Título */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-5xl mr-2">✨</span>
              Criar Novo Livro Personalizado
            </h1>
            <p className="text-gray-600 text-lg">
              Preencha os campos abaixo e crie uma história única
            </p>
          </div>

          {/* Formulário */}
          <CriarLivroForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
