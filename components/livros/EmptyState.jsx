'use client'

import Link from 'next/link'
import Button from '../ui/Button'

export default function EmptyState() {
  return (
    <div className="text-center py-20">
      <div className="text-9xl mb-6">📖</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-3">
        Você ainda não criou nenhum livro mágico
      </h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Que tal começar sua primeira aventura? Crie um livro personalizado agora mesmo!
      </p>
      <Link href="/livros/criar">
        <Button variant="primary" size="lg">
          Criar Meu Primeiro Livro
        </Button>
      </Link>
    </div>
  )
}
