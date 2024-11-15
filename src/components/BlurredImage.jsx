import React, { Component } from 'react'
import { useState, useEffect } from 'react'
import { decode } from 'blurhash'

const BlurredImage = ({ imageUrl, blurhash, className }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  useEffect(() => {
    const image = new Image()
    image.src = imageUrl

    image.onload = () => {
      setImageLoaded(true)
    }

    image.onerror = () => {
      setImageError(true)
    }

    return () => {
      image.onload = null
      image.onerror = null
    }
  }, [imageUrl])

  const handleClick = () => {
    document.querySelector('#ModalWindow').classList.toggle('U_Hide') // Или вызовите Element('#ModalWindow') здесь, если это функция
    document.querySelector('.ZoomPic').style.cursor = 'zoom-out'
  }

  const renderImage = () => {
    if (imageError) {
      return <div>Error loading image</div>
    }

    if (imageLoaded) {
      return <img src={imageUrl} alt="Loaded" className={className} />
    }

    if (blurhash) {
      const width = 32
      const height = 32
      const pixels = decode(blurhash, width, height)
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      const ctx = canvas.getContext('2d')
      const imageData = ctx.createImageData(width, height)
      imageData.data.set(pixels)
      ctx.putImageData(imageData, 0, 0)
      const blurredImageUrl = canvas.toDataURL()
      return <img src={blurredImageUrl} alt="Loading" className={className} />
    }

    return <div>Loading...</div>
  }

  return (
    <div className="ZoomPic" onClick={handleClick}>
      {renderImage()}
    </div>
  )
}

export default BlurredImage
