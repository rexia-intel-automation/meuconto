'use client'

import { useState } from 'react'

export default function FileUpload({
  onFileSelect,
  accept = 'image/jpeg,image/png,image/jpg',
  maxSize = 5 * 1024 * 1024, // 5MB
  error,
  className = ''
}) {
  const [preview, setPreview] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const validateFile = (file) => {
    if (!file) return false

    // Validar tipo
    const acceptedTypes = accept.split(',').map(t => t.trim())
    if (!acceptedTypes.includes(file.type)) {
      setUploadError('Tipo de arquivo não suportado. Use JPG, JPEG ou PNG.')
      return false
    }

    // Validar tamanho
    if (file.size > maxSize) {
      setUploadError(`Arquivo muito grande. Tamanho máximo: ${maxSize / 1024 / 1024}MB`)
      return false
    }

    setUploadError('')
    return true
  }

  const handleFile = (file) => {
    if (validateFile(file)) {
      // Criar preview
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
        if (onFileSelect) {
          onFileSelect(file, reader.result)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFile(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleRemove = () => {
    setPreview(null)
    setUploadError('')
    if (onFileSelect) {
      onFileSelect(null, null)
    }
  }

  return (
    <div className={`w-full ${className}`}>
      {!preview ? (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`
            relative border-2 border-dashed rounded-xl p-8
            transition-all duration-200 cursor-pointer
            ${isDragging ? 'border-primary bg-orange-50' : 'border-gray-300 hover:border-primary'}
            ${uploadError || error ? 'border-red-500 bg-red-50' : ''}
          `}
        >
          <input
            type="file"
            accept={accept}
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4">📸</div>
            <p className="text-lg font-semibold text-gray-700 mb-2">
              Arraste uma foto ou clique para selecionar
            </p>
            <p className="text-sm text-gray-500">
              JPG, JPEG ou PNG (máximo {maxSize / 1024 / 1024}MB)
            </p>
          </div>
        </div>
      ) : (
        <div className="relative rounded-xl overflow-hidden border-2 border-gray-300">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-64 object-cover"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Remover
          </button>
        </div>
      )}

      {(uploadError || error) && (
        <p className="mt-2 text-sm text-red-500">{uploadError || error}</p>
      )}
    </div>
  )
}
