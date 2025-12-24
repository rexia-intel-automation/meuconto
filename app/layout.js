import '../styles/globals.css'
import { Providers } from '../components/Providers'

export const metadata = {
  title: 'Meu Conto - Livros Mágicos Personalizados',
  description: 'Crie livros infantis personalizados com inteligência artificial',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
