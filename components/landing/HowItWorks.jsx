'use client'

import Link from 'next/link'
import Button from '../ui/Button'

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      icon: '📝',
      title: 'Preencha o Formulário',
      description: 'Adicione informações sobre a criança: nome, idade, interesses e preferências.'
    },
    {
      number: 2,
      icon: '📸',
      title: 'Adicione uma Foto',
      description: 'Envie uma foto da criança para personalizar ainda mais as ilustrações (opcional).'
    },
    {
      number: 3,
      icon: '🎭',
      title: 'Escolha o Tema',
      description: 'Selecione entre aventura espacial, floresta mágica, fundo do mar e muito mais!'
    },
    {
      number: 4,
      icon: '📚',
      title: 'Receba seu Livro',
      description: 'Em minutos, seu livro personalizado estará pronto para ser lido e compartilhado!'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona?
          </h2>
          <p className="text-xl text-gray-600">
            Criar seu livro mágico é simples e rápido!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="relative inline-block mb-4">
                <div className="text-7xl">{step.icon}</div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para criar uma história mágica?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Comece agora e veja a alegria no rosto da criança!
          </p>
          <Link href="/login">
            <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
              Começar Agora
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
