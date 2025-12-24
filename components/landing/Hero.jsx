'use client'

import Link from 'next/link'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-orange-50 to-blue-50 py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Crie Livros <span className="text-primary">Mágicos</span> <br />
            Personalizados para Crianças
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
            Histórias únicas com o nome do seu filho, geradas por inteligência artificial em minutos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/login">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Criar Meu Primeiro Livro
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Ver Exemplo
            </Button>
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto">
            <div className="text-8xl mb-4">📚</div>
            <p className="text-gray-600 italic">
              &ldquo;Uma forma incrível de tornar a leitura ainda mais especial para as crianças!&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
