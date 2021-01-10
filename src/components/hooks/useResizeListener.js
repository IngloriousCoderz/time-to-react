import { useRef, useState } from 'react'

import { useCounter } from './useCounter'

export function useResizeListener(width, height) {
  const [transform, setTransform] = useState('')
  const ref = useRef()
  const handleUpdate = () => {
    const { clientWidth, clientHeight } = ref.current

    const clientAspectRatio = clientWidth / clientHeight
    const aspectRatio = width / height
    let scale = 1

    if (clientAspectRatio < aspectRatio) {
      scale = clientWidth / width
    } else if (clientAspectRatio > aspectRatio) {
      scale = clientHeight / height
    }

    const hOffset = (clientWidth - width * scale) / 2
    const vOffset = (clientHeight - height * scale) / 2

    const newTransform = `translate(${hOffset}px, ${vOffset}px) scale(${scale})`

    if (newTransform !== transform) {
      setTransform(newTransform)
    }
  }

  useCounter(60, handleUpdate)

  return { transform, ref }
}
