# Meu Conto - Livros Mágicos Personalizados

Plataforma de geração automatizada de livros ilustrados infantis personalizados usando inteligência artificial.

## Descrição

**Meu Conto** permite criar livros infantis personalizados onde a criança é o protagonista da história. O sistema gera automaticamente narrativas e ilustrações criadas por IA com base nas informações fornecidas pelo usuário.

## Tecnologias

- **Next.js 14+** (App Router)
- **React 18**
- **Tailwind CSS**
- **React Hook Form**
- **Context API**

## Instalação

```bash
# Instalar dependências
npm install

# Executar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar em produção
npm start
```

## Acesso

Após iniciar o servidor, acesse: `http://localhost:3000`

## Credenciais de Teste

- **Usuário:** `teste`
- **Senha:** `teste123`

## Estrutura do Projeto

```
meu-conto/
├── app/                    # Páginas (App Router)
│   ├── login/             # Página de login
│   ├── livros/            # Biblioteca de livros
│   │   ├── criar/         # Formulário de criação
│   │   └── [id]/          # Visualizador de livro
│   ├── layout.js          # Layout principal
│   └── page.js            # Landing page
├── components/            # Componentes React
│   ├── layout/           # Header, Footer
│   ├── landing/          # Hero, Features, HowItWorks
│   ├── auth/             # LoginForm
│   ├── livros/           # Componentes de livros
│   ├── visualizador/     # Visualizador
│   └── ui/               # Componentes UI base
├── context/              # Context API
├── hooks/                # Custom hooks
└── styles/               # Estilos globais
```

## Paleta de Cores

- **Laranja** (`#FF6B35`) - CTAs e destaques
- **Azul** (`#004E89`) - Elementos secundários
- **Roxo** (`#7B2CBF`) - Acentos
- **Branco** (`#FFFFFF`) - Backgrounds

## Funcionalidades

### 1. Landing Page (`/`)
- Apresentação do produto
- Seções: Hero, Features, Como Funciona
- Call-to-actions para criar livro

### 2. Autenticação (`/login`)
- Login simples com validação
- Credenciais hardcoded para MVP
- Redirecionamento automático

### 3. Biblioteca de Livros (`/livros`)
- Visualização de todos os livros criados
- Grid responsivo de cards
- Estado vazio para novos usuários
- Botão de criação de novo livro

### 4. Criar Livro (`/livros/criar`)
Formulário completo com:
- Informações do personagem (nome, idade, gênero)
- Upload de foto (opcional)
- Seleção de tema da aventura
- Personalização (cor favorita, animal preferido)
- Mensagem especial
- Número de páginas configurável

### 5. Visualizador (`/livros/[id]`)
- Renderização do HTML do livro
- Navegação de volta para biblioteca
- Design responsivo

## Dados Mockados

O projeto usa dados mockados armazenados no `localStorage` para simular:
- Autenticação de usuário
- Lista de livros
- HTML de livros gerados

## Componentes UI Reutilizáveis

- **Button** - Botões com variantes (primary, secondary, outline)
- **Input** - Campos de formulário com validação
- **Card** - Containers com hover effects
- **FileUpload** - Upload de imagens com preview
- **Loading** - Indicadores de carregamento

## Proteção de Rotas

As rotas `/livros`, `/livros/criar` e `/livros/[id]` estão protegidas e redirecionam usuários não autenticados para `/login`.

## Próximos Passos

Este é um MVP focado no frontend. Para produção, será necessário:
- Implementar API routes
- Integração com IA para geração de conteúdo
- Sistema de autenticação real
- Banco de dados
- Processamento de imagens
- Sistema de pagamento

## Desenvolvido com

Projeto criado seguindo as especificações do MVP Meu Conto.

---

**© 2025 Meu Conto - Todos os direitos reservados**
