'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLivros } from '../../hooks/useLivros'
import Input from '../ui/Input'
import Button from '../ui/Button'
import FileUpload from '../ui/FileUpload'

export default function CriarLivroForm() {
  const router = useRouter()
  const { criarLivro } = useLivros()

  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    genero: 'neutro',
    foto: null,
    fotoBase64: null,
    tema: '',
    corFavorita: 'azul',
    animalPreferido: '',
    mensagemEspecial: '',
    numeroPaginas: 10
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const temas = [
    { id: 'aventura-espacial', nome: 'Aventura Espacial', icon: '🚀' },
    { id: 'floresta-magica', nome: 'Floresta Mágica', icon: '🌳' },
    { id: 'fundo-do-mar', nome: 'Fundo do Mar', icon: '🌊' },
    { id: 'reino-encantado', nome: 'Reino Encantado', icon: '🏰' },
    { id: 'era-dinossauros', nome: 'Era dos Dinossauros', icon: '🦖' },
    { id: 'circo-fantastico', nome: 'Circo Fantástico', icon: '🎪' }
  ]

  const cores = [
    { id: 'vermelho', nome: 'Vermelho', hex: '#EF4444' },
    { id: 'azul', nome: 'Azul', hex: '#3B82F6' },
    { id: 'verde', nome: 'Verde', hex: '#10B981' },
    { id: 'rosa', nome: 'Rosa', hex: '#EC4899' },
    { id: 'amarelo', nome: 'Amarelo', hex: '#F59E0B' },
    { id: 'roxo', nome: 'Roxo', hex: '#8B5CF6' }
  ]

  const validate = () => {
    const newErrors = {}

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório'
    } else if (formData.nome.trim().length < 2) {
      newErrors.nome = 'Nome deve ter pelo menos 2 caracteres'
    }

    if (!formData.idade) {
      newErrors.idade = 'Idade é obrigatória'
    } else if (formData.idade < 3 || formData.idade > 12) {
      newErrors.idade = 'Idade deve estar entre 3 e 12 anos'
    }

    if (!formData.tema) {
      newErrors.tema = 'Selecione um tema'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setLoading(true)

    try {
      const result = await criarLivro(formData)

      if (result.success) {
        router.push('/livros')
      } else {
        setErrors({ general: result.error || 'Erro ao criar livro' })
      }
    } catch (error) {
      setErrors({ general: 'Erro ao criar livro. Tente novamente.' })
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    router.push('/livros')
  }

  const handleFileSelect = (file, base64) => {
    setFormData({ ...formData, foto: file, fotoBase64: base64 })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Seção 1: Informações do Personagem */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>👤</span>
          Sobre o Personagem Principal
        </h3>

        <div className="space-y-6">
          <Input
            label="Nome completo"
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            placeholder="Ex: Maria Silva"
            error={errors.nome}
            required
            disabled={loading}
          />

          <Input
            label="Idade"
            type="number"
            value={formData.idade}
            onChange={(e) => setFormData({ ...formData, idade: parseInt(e.target.value) })}
            placeholder="3-12"
            error={errors.idade}
            required
            disabled={loading}
            min="3"
            max="12"
          />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Gênero <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-4">
              {['masculino', 'feminino', 'neutro'].map((gen) => (
                <label key={gen} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="genero"
                    value={gen}
                    checked={formData.genero === gen}
                    onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                    disabled={loading}
                    className="w-5 h-5 text-primary"
                  />
                  <span className="text-gray-700 capitalize">{gen}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2: Foto do Personagem */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
          <span>📸</span>
          Foto do Personagem
        </h3>
        <p className="text-gray-600 mb-6">
          A foto ajuda a IA a personalizar as ilustrações! (Opcional)
        </p>

        <FileUpload
          onFileSelect={handleFileSelect}
          error={errors.foto}
        />
      </section>

      {/* Seção 3: Tema da Aventura */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>🎭</span>
          Escolha o Tema da Aventura
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {temas.map((tema) => (
            <button
              key={tema.id}
              type="button"
              onClick={() => setFormData({ ...formData, tema: tema.nome })}
              disabled={loading}
              className={`
                p-6 rounded-xl border-2 transition-all duration-200
                ${formData.tema === tema.nome
                  ? 'border-primary bg-orange-50 shadow-lg scale-105'
                  : 'border-gray-300 hover:border-primary hover:shadow-md'
                }
                disabled:opacity-50 disabled:cursor-not-allowed
              `}
            >
              <div className="text-5xl mb-3">{tema.icon}</div>
              <div className="text-sm font-semibold text-gray-900">{tema.nome}</div>
            </button>
          ))}
        </div>
        {errors.tema && (
          <p className="mt-2 text-sm text-red-500">{errors.tema}</p>
        )}
      </section>

      {/* Seção 4: Detalhes Personalizados */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>✨</span>
          Detalhes Personalizados
        </h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Cor favorita
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {cores.map((cor) => (
                <button
                  key={cor.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, corFavorita: cor.nome })}
                  disabled={loading}
                  className={`
                    p-4 rounded-lg border-2 transition-all duration-200
                    ${formData.corFavorita === cor.nome
                      ? 'border-gray-900 shadow-lg scale-110'
                      : 'border-gray-300 hover:border-gray-500'
                    }
                  `}
                  style={{ backgroundColor: cor.hex }}
                >
                  <div className="text-white text-xs font-bold drop-shadow">
                    {cor.nome}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <Input
            label="Animal preferido"
            type="text"
            value={formData.animalPreferido}
            onChange={(e) => setFormData({ ...formData, animalPreferido: e.target.value })}
            placeholder="Ex: Cachorro, Gato, Unicórnio..."
            disabled={loading}
          />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Mensagem especial (opcional)
            </label>
            <textarea
              value={formData.mensagemEspecial}
              onChange={(e) => setFormData({ ...formData, mensagemEspecial: e.target.value })}
              placeholder="Adicione uma dedicatória ou mensagem especial..."
              maxLength={200}
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary focus:outline-none transition-colors duration-200 resize-none"
              rows={3}
            />
            <p className="mt-1 text-sm text-gray-500 text-right">
              {formData.mensagemEspecial.length}/200
            </p>
          </div>
        </div>
      </section>

      {/* Seção 5: Configurações do Livro */}
      <section className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          <span>📖</span>
          Configurações do Livro
        </h3>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Número de Páginas: <span className="text-primary text-lg">{formData.numeroPaginas} páginas</span>
          </label>
          <input
            type="range"
            min="5"
            max="15"
            value={formData.numeroPaginas}
            onChange={(e) => setFormData({ ...formData, numeroPaginas: parseInt(e.target.value) })}
            disabled={loading}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>5 páginas</span>
            <span>15 páginas</span>
          </div>
        </div>
      </section>

      {/* Erro geral */}
      {errors.general && (
        <div className="bg-red-50 border-2 border-red-500 text-red-700 px-6 py-4 rounded-lg">
          {errors.general}
        </div>
      )}

      {/* Botões de ação */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          type="button"
          variant="outline"
          size="lg"
          onClick={handleCancel}
          disabled={loading}
          className="sm:w-auto w-full"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          loading={loading}
          className="sm:w-auto w-full"
        >
          <span className="text-2xl mr-2">🎨</span>
          {loading ? 'Criando seu livro mágico...' : 'Gerar Meu Livro'}
        </Button>
      </div>
    </form>
  )
}
