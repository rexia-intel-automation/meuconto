'use client'

import { useRouter } from 'next/navigation'
import Button from '../ui/Button'

export default function LivroToolbar({ titulo }) {
  const router = useRouter()

  return (
    <div className="bg-white shadow-md border-b border-gray-200 sticky top-0 z-10">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => router.push('/livros')}
          >
            ← Voltar para Biblioteca
          </Button>

          <h2 className="text-xl md:text-2xl font-bold text-secondary text-center flex-1 mx-4">
            {titulo}
          </h2>

          <div className="w-40"></div> {/* Espaçador para centralizar o título */}
        </div>
      </div>
    </div>
  )
}
