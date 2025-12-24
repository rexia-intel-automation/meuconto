'use client'

import { useState, useEffect } from 'react'

// Dados mockados de livros
const livrosMock = [
  {
    id: 1,
    titulo: 'A Aventura de João no Espaço',
    created_at: '2025-01-15',
    thumbnail: null,
    personagem: 'João',
    tema: 'Aventura Espacial',
  },
  {
    id: 2,
    titulo: 'Maria e a Floresta Encantada',
    created_at: '2025-01-20',
    thumbnail: null,
    personagem: 'Maria',
    tema: 'Floresta Mágica',
  },
  {
    id: 3,
    titulo: 'Pedro no Fundo do Mar',
    created_at: '2025-01-22',
    thumbnail: null,
    personagem: 'Pedro',
    tema: 'Fundo do Mar',
  },
]

// HTML mockado de livro
const getLivroHtmlMock = (livro) => `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${livro.titulo}</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive;
      padding: 40px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      padding: 60px;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    h1 {
      color: #FF6B35;
      font-size: 42px;
      margin-bottom: 30px;
      text-align: center;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    .page {
      margin-bottom: 40px;
      padding: 30px;
      background: #f8f9fa;
      border-radius: 15px;
      border-left: 5px solid #FF6B35;
    }

    .page-number {
      color: #7B2CBF;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 15px;
    }

    p {
      font-size: 20px;
      line-height: 1.8;
      color: #333;
      margin-bottom: 15px;
    }

    .illustration {
      width: 100%;
      height: 200px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 10px;
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 80px;
    }

    .the-end {
      text-align: center;
      font-size: 32px;
      color: #7B2CBF;
      margin-top: 60px;
      padding: 30px;
      background: linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);
      border-radius: 15px;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${livro.titulo}</h1>

    <div class="page">
      <div class="page-number">Página 1</div>
      <p>Era uma vez ${livro.personagem}, uma criança muito especial que adorava aventuras mágicas...</p>
      <div class="illustration">🌟</div>
      <p>Todos os dias, ${livro.personagem} sonhava com lugares incríveis e histórias fantásticas.</p>
    </div>

    <div class="page">
      <div class="page-number">Página 2</div>
      <p>Um belo dia, algo extraordinário aconteceu! ${livro.personagem} encontrou um portal mágico brilhante.</p>
      <div class="illustration">✨</div>
      <p>"Uau! Será que eu devo entrar?" pensou ${livro.personagem}, com os olhos brilhando de curiosidade.</p>
    </div>

    <div class="page">
      <div class="page-number">Página 3</div>
      <p>Com coragem no coração, ${livro.personagem} atravessou o portal e chegou a um mundo incrível!</p>
      <div class="illustration">🚀</div>
      <p>Era exatamente como nos sonhos - cores vibrantes, criaturas amigáveis e muita magia no ar!</p>
    </div>

    <div class="page">
      <div class="page-number">Página 4</div>
      <p>Neste novo mundo, ${livro.personagem} fez amigos incríveis e viveu aventuras emocionantes.</p>
      <div class="illustration">🎨</div>
      <p>Cada dia era uma nova descoberta, repleta de alegria e aprendizado.</p>
    </div>

    <div class="page">
      <div class="page-number">Página 5</div>
      <p>Depois de muitas aventuras, ${livro.personagem} percebeu que a verdadeira magia estava dentro do próprio coração.</p>
      <div class="illustration">💖</div>
      <p>Com saudades de casa, mas feliz com tudo que viveu, ${livro.personagem} decidiu voltar.</p>
    </div>

    <div class="page">
      <div class="page-number">Página 6</div>
      <p>De volta ao lar, ${livro.personagem} sabia que poderia voltar ao mundo mágico sempre que quisesse.</p>
      <div class="illustration">🏠</div>
      <p>Porque a imaginação e a coragem sempre abrem portas para novas aventuras!</p>
    </div>

    <div class="the-end">
      <p>✨ FIM ✨</p>
      <p style="font-size: 18px; margin-top: 20px;">E ${livro.personagem} viveu feliz para sempre!</p>
    </div>
  </div>
</body>
</html>
`

export function useLivros() {
  const [livros, setLivros] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // Simular busca de livros
  const fetchLivros = async () => {
    setLoading(true)
    setError(null)

    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 500))

      // Carregar livros do localStorage ou usar mock
      const storedLivros = localStorage.getItem('livros')
      if (storedLivros) {
        setLivros(JSON.parse(storedLivros))
      } else {
        setLivros(livrosMock)
        localStorage.setItem('livros', JSON.stringify(livrosMock))
      }
    } catch (err) {
      setError('Erro ao carregar livros')
    } finally {
      setLoading(false)
    }
  }

  // Buscar livro específico por ID
  const getLivroById = (id) => {
    const storedLivros = localStorage.getItem('livros')
    const allLivros = storedLivros ? JSON.parse(storedLivros) : livrosMock
    const livro = allLivros.find(l => l.id === parseInt(id))

    if (livro) {
      return {
        ...livro,
        html: getLivroHtmlMock(livro)
      }
    }
    return null
  }

  // Criar novo livro
  const criarLivro = async (dadosLivro) => {
    setLoading(true)
    setError(null)

    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 2000))

      const storedLivros = localStorage.getItem('livros')
      const allLivros = storedLivros ? JSON.parse(storedLivros) : livrosMock

      const novoLivro = {
        id: Date.now(),
        titulo: `${dadosLivro.tema} de ${dadosLivro.nome}`,
        created_at: new Date().toISOString().split('T')[0],
        thumbnail: dadosLivro.foto || null,
        personagem: dadosLivro.nome,
        tema: dadosLivro.tema,
        ...dadosLivro
      }

      const novosLivros = [...allLivros, novoLivro]
      localStorage.setItem('livros', JSON.stringify(novosLivros))
      setLivros(novosLivros)

      return { success: true, livro: novoLivro }
    } catch (err) {
      setError('Erro ao criar livro')
      return { success: false, error: 'Erro ao criar livro' }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchLivros()
  }, [])

  return {
    livros,
    loading,
    error,
    fetchLivros,
    getLivroById,
    criarLivro
  }
}
