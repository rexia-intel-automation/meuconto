'use client'

export default function LivroViewer({ htmlContent }) {
  return (
    <div className="container-custom py-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <iframe
            srcDoc={htmlContent}
            sandbox="allow-same-origin"
            className="w-full border-0"
            style={{ minHeight: '800px', height: '100vh' }}
            title="Visualizador de Livro"
          />
        </div>
      </div>
    </div>
  )
}
