'use client'

import LivroCard from './LivroCard'

export default function LivrosGrid({ livros }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {livros.map((livro) => (
        <LivroCard key={livro.id} livro={livro} />
      ))}
    </div>
  )
}
