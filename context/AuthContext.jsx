'use client'

import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export const AuthContext = createContext({})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Carregar autenticação do localStorage ao iniciar
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')

    if (storedToken && storedUser) {
      setToken(storedToken)
      setUser(JSON.parse(storedUser))
    }

    setLoading(false)
  }, [])

  const login = async (credentials) => {
    try {
      // Validar credenciais (hardcoded para MVP)
      if (credentials.username === 'teste' && credentials.password === 'teste123') {
        const mockUser = {
          id: 1,
          name: 'Teste',
          email: 'teste@meuconto.com',
          username: 'teste'
        }
        const mockToken = 'mock-jwt-token-' + Date.now()

        // Salvar no state
        setUser(mockUser)
        setToken(mockToken)

        // Persistir no localStorage
        localStorage.setItem('token', mockToken)
        localStorage.setItem('user', JSON.stringify(mockUser))

        return { success: true, user: mockUser }
      } else {
        return { success: false, error: 'Credenciais inválidas' }
      }
    } catch (error) {
      return { success: false, error: 'Erro ao fazer login' }
    }
  }

  const logout = () => {
    setUser(null)
    setToken(null)
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  const isAuthenticated = !!user && !!token

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      logout,
      isAuthenticated,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  )
}
