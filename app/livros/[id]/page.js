'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useAuth } from '../../../hooks/useAuth'
import { useLivros } from '../../../hooks/useLivros'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import Loading from '../../../components/ui/Loading'
import LivroToolbar from '../../../components/visualizador/LivroToolbar'
import LivroViewer from '../../../components/visualizador/LivroViewer'

export default function LivroPage() {
  const { isAuthenticated, loading: authLoading } = useAuth()
  const { getLivroById } = useLivros()
  const router = useRouter()
  const params = useParams()
  const [livro, setLivro] = useState(null)
  const [loading, setLoading] = useState(true)

  // Proteção de rota
  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/login')
    }
  }, [isAuthenticated, authLoading, router])

  // Carregar livro
  useEffect(() => {
    if (params.id && isAuthenticated) {
      setLoading(true)

      // Simular delay de carregamento
      setTimeout(() => {
        const livroData = getLivroById(params.id)
        setLivro(livroData)
        setLoading(false)
      }, 500)
    }
  }, [params.id, isAuthenticated, getLivroById])

  if (authLoading || loading) {
    return <Loading text="Carregando livro..." />
  }

  if (!isAuthenticated) {
    return null
  }

  if (!livro) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header variant="auth" />
        <div className="container-custom py-20 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Livro não encontrado
          </h2>
          <p className="text-gray-600 mb-8">
            O livro que você está procurando não existe.
          </p>
          <button
            onClick={() => router.push('/livros')}
            className="text-primary hover:text-orange-600 font-semibold"
          >
            ← Voltar para Biblioteca
          </button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header variant="auth" />
      <LivroToolbar titulo={livro.titulo} />
      <LivroViewer htmlContent={livro.html} />
      <Footer />
    </div>
  )
}
