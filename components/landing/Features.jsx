'use client'

import Card from '../ui/Card'

export default function Features() {
  const features = [
    {
      icon: '✨',
      title: '100% Personalizado',
      description: 'O nome da criança como protagonista da aventura, criando uma conexão única com a história.'
    },
    {
      icon: '🎨',
      title: 'Ilustrações com IA',
      description: 'Imagens únicas e vibrantes geradas especialmente para cada história personalizada.'
    },
    {
      icon: '⚡',
      title: 'Rápido e Fácil',
      description: 'Seu livro personalizado pronto em minutos. Simples de criar, mágico de receber!'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher o <span className="text-primary">Meu Conto</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tecnologia de ponta para criar experiências únicas de leitura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} hover className="text-center">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
