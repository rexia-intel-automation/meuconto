'use client'

export default function Card({
  children,
  hover = false,
  onClick,
  className = ''
}) {
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer transition-all duration-300' : ''

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-lg p-6
        ${hoverStyles}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
