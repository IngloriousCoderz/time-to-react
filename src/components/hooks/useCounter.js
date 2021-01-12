import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getFrame } from 'store'

export function useCounter(speed, callback, start = speed) {
  const frame = useSelector(getFrame)
  const counter = useRef(start)

  useEffect(() => {
    if (counter.current === speed) {
      callback(frame)
      counter.current = 0
    }
    counter.current++
  }, [frame, speed, callback])
}
