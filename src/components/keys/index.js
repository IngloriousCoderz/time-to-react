import { useSelector } from 'react-redux'
import { getInput } from 'store/reducers'

import classes from './keys.module.css'

function Keys() {
  const { ArrowUp, ArrowLeft, ArrowDown, ArrowRight } = useSelector(getInput)

  return (
    <div className={classes.keys}>
      <div
        className={[classes.key, classes.up].join(' ')}
        style={{ filter: ArrowUp && 'brightness(100%)' }}
      >
        ↑
      </div>
      <div
        className={[classes.key, classes.left].join(' ')}
        style={{ filter: ArrowLeft && 'brightness(100%)' }}
      >
        ←
      </div>
      <div
        className={[classes.key, classes.down].join(' ')}
        style={{ filter: ArrowDown && 'brightness(100%)' }}
      >
        ↓
      </div>
      <div
        className={[classes.key, classes.right].join(' ')}
        style={{ filter: ArrowRight && 'brightness(100%)' }}
      >
        →
      </div>
    </div>
  )
}

export default Keys
