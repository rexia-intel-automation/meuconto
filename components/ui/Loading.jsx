'use client'

export default function Loading({ text = 'Carregando...', centered = true }) {
  const containerClass = centered ? 'flex flex-col items-center justify-center min-h-screen' : 'flex flex-col items-center justify-center py-12'

  return (
    <div className={containerClass}>
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
      </div>
      {text && (
        <p className="mt-4 text-gray-600 font-medium">{text}</p>
      )}
    </div>
  )
}
