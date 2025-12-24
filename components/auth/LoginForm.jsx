'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '../../hooks/useAuth'
import Input from '../ui/Input'
import Button from '../ui/Button'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  const validate = () => {
    const newErrors = {}

    if (!username.trim()) {
      newErrors.username = 'Email ou usuário é obrigatório'
    }

    if (!password) {
      newErrors.password = 'Senha é obrigatória'
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
    setErrors({})

    try {
      const result = await login({ username, password })

      if (result.success) {
        router.push('/livros')
      } else {
        setErrors({ general: result.error || 'Credenciais inválidas' })
      }
    } catch (error) {
      setErrors({ general: 'Erro ao fazer login. Tente novamente.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          label="Email ou usuário"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Digite seu email ou usuário"
          error={errors.username}
          required
          disabled={loading}
        />
      </div>

      <div>
        <Input
          label="Senha"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Digite sua senha"
          error={errors.password}
          required
          disabled={loading}
        />
      </div>

      {errors.general && (
        <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg">
          {errors.general}
        </div>
      )}

      <div className="bg-blue-50 border-2 border-blue-300 text-blue-800 px-4 py-3 rounded-lg text-sm">
        <p className="font-semibold mb-1">Credenciais de teste:</p>
        <p>Usuário: <span className="font-mono font-bold">teste</span></p>
        <p>Senha: <span className="font-mono font-bold">teste123</span></p>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        loading={loading}
        className="w-full"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </Button>
    </form>
  )
}
