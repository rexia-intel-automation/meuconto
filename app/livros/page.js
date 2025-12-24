'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../../hooks/useAuth'
import { useLivros } from '../../hooks/useLivros'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Button from '../../components/ui/Button'
import Loading from '../../components/ui/Loading'
import LivrosGrid from '../../components/livros/LivrosGrid'
import EmptyState from '../../components/livros/EmptyState'

export default function LivrosPage() {
  const { isAuthenticated, loading: authLoading } = useAuth()
  const { livros, loading: livrosLoading } = useLivros()
  const router = useRouter()

  // Proteção de rota
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, authLoading, router])

  if (authLoading || livrosLoading) {
    return <Loading text="Carregando sua biblioteca..." />
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header variant="auth" />

      <main className="container-custom py-12">
        {/* Título da página */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Minha Biblioteca <span className="text-primary">Mágica</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Todos os seus livros personalizados em um só lugar
          </p>
        </div>

        {/* Botão de criar novo livro */}
        <div className="flex justify-center mb-12">
          <Link href="/livros/criar">
            <Button variant="primary" size="lg" className="shadow-xl">
              <span className="text-2xl mr-2">✨</span>
              Criar Novo Livro
            </Button>
          </Link>
        </div>

        {/* Grid de livros ou estado vazio */}
        {livros.length > 0 ? (
          <LivrosGrid livros={livros} />
        ) : (
          <EmptyState />
        )}
      </main>

      <Footer />
    </div>
  )
}
