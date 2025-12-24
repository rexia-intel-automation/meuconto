'use client'

import { useRouter } from 'next/navigation'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function LivroCard({ livro }) {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/livros/${livro.id}`)
  }

  return (
    <Card hover onClick={handleClick}>
      <div className="space-y-4">
        {/* Thumbnail/Capa */}
        <div className="w-full h-48 rounded-lg overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
          {livro.thumbnail ? (
            <img
              src={livro.thumbnail}
              alt={livro.titulo}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-6xl text-white">📖</div>
          )}
        </div>

        {/* Informações */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
            {livro.titulo}
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Criado em {new Date(livro.created_at).toLocaleDateString('pt-BR')}
          </p>
        </div>

        {/* Botão */}
        <Button
          variant="secondary"
          size="sm"
          className="w-full"
          onClick={handleClick}
        >
          Ver Livro
        </Button>
      </div>
    </Card>
  )
}
