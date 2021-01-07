import { useEffect, useState } from 'react'

export default function useWindowSize(width, height) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      const vwidth = window.innerWidth
      const vheight = window.innerHeight

      let targetWidth, targetHeight, targetScale

      if (height / width > vheight / vwidth) {
        targetHeight = vheight
        targetWidth = (targetHeight * width) / height
        targetScale = vheight / height
      } else {
        targetWidth = vwidth
        targetHeight = (targetWidth * height) / width
        targetScale = vwidth / width
      }

      setScale(targetScale)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [width, height])

  return scale
}
