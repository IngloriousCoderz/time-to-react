import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getTick } from 'store/reducers'

export function useCounter(speed, callback, start = speed) {
  const tick = useSelector(getTick)
  const counter = useRef(start)

  useEffect(() => {
    if (counter.current === speed) {
      callback(tick)
      counter.current = 0
    }
    counter.current++
  }, [tick, speed, callback])
}
