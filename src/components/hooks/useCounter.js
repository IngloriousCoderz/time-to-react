import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { getTick } from 'store/reducers'

export function useCounter(speed, callback) {
  const tick = useSelector(getTick)
  const counter = useRef(0)

  useEffect(() => {
    counter.current++
    if (counter.current === speed) {
      counter.current = 0
      callback(tick)
    }
  }, [tick, speed, callback])
}
