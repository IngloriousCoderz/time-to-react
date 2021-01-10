import { useSelector } from 'react-redux'
import { getKeys } from 'store/reducers'

import classes from './keys.module.css'

function Keys() {
  const { ArrowUp, ArrowLeft, ArrowDown, ArrowRight, ...rest } = useSelector(
    getKeys
  )

  return (
    <div className={classes.keys}>
      <div className={classes.row}>
        <div className={[classes.key, classes.top].join(' ')}>Esc</div>
        <div className={[classes.key, classes.top].join(' ')}>F1</div>
        <div className={[classes.key, classes.top].join(' ')}>F2</div>
        <div className={[classes.key, classes.top].join(' ')}>F3</div>
        <div className={[classes.key, classes.top].join(' ')}>F4</div>
        <div className={[classes.key, classes.top].join(' ')}>F5</div>
        <div className={[classes.key, classes.top].join(' ')}>F6</div>
        <div className={[classes.key, classes.top].join(' ')}>F7</div>
        <div className={[classes.key, classes.top].join(' ')}>F8</div>
        <div className={[classes.key, classes.top].join(' ')}>F9</div>
        <div className={[classes.key, classes.top].join(' ')}>F10</div>
        <div className={[classes.key, classes.top].join(' ')}>F11</div>
        <div className={[classes.key, classes.top].join(' ')}>F12</div>
        <div className={[classes.key, classes.top].join(' ')}>Print</div>
        <div className={[classes.key, classes.top].join(' ')}>Ins</div>
        <div className={[classes.key, classes.top].join(' ')}>Del</div>
      </div>

      <div className={classes.row}>
        <div className={[classes.key].join(' ')}>\</div>
        <div className={[classes.key].join(' ')}>1</div>
        <div className={[classes.key].join(' ')}>2</div>
        <div className={[classes.key].join(' ')}>3</div>
        <div className={[classes.key].join(' ')}>4</div>
        <div className={[classes.key].join(' ')}>5</div>
        <div className={[classes.key].join(' ')}>6</div>
        <div className={[classes.key].join(' ')}>7</div>
        <div className={[classes.key].join(' ')}>8</div>
        <div className={[classes.key].join(' ')}>9</div>
        <div className={[classes.key].join(' ')}>0</div>
        <div className={[classes.key].join(' ')}>'</div>
        <div className={[classes.key].join(' ')}>ì</div>
        <div className={[classes.key, classes.backspace].join(' ')}>←</div>
      </div>

      <div className={classes.row}>
        <div className={[classes.key, classes.tab].join(' ')}>↹</div>
        <div className={[classes.key].join(' ')}>Q</div>
        <div className={[classes.key].join(' ')}>W</div>
        <div className={[classes.key].join(' ')}>E</div>
        <div className={[classes.key].join(' ')}>R</div>
        <div className={[classes.key].join(' ')}>T</div>
        <div className={[classes.key].join(' ')}>Y</div>
        <div className={[classes.key].join(' ')}>U</div>
        <div className={[classes.key].join(' ')}>I</div>
        <div className={[classes.key].join(' ')}>O</div>
        <div className={[classes.key].join(' ')}>P</div>
        <div className={[classes.key].join(' ')}>è</div>
        <div className={[classes.key].join(' ')}>+</div>
        <div className={[classes.key].join(' ')}>⏎</div>
      </div>

      <div className={classes.row}>
        <div className={[classes.key, classes.capsLock].join(' ')}>⇪</div>
        <div className={[classes.key].join(' ')}>A</div>
        <div className={[classes.key].join(' ')}>S</div>
        <div className={[classes.key].join(' ')}>D</div>
        <div className={[classes.key].join(' ')}>F</div>
        <div className={[classes.key].join(' ')}>G</div>
        <div className={[classes.key].join(' ')}>H</div>
        <div className={[classes.key].join(' ')}>J</div>
        <div className={[classes.key].join(' ')}>K</div>
        <div className={[classes.key].join(' ')}>L</div>
        <div className={[classes.key].join(' ')}>ò</div>
        <div className={[classes.key].join(' ')}>à</div>
        <div className={[classes.key].join(' ')}>ù</div>
        <div className={[classes.key, classes.empty].join(' ')}></div>
      </div>

      <div className={classes.row}>
        <div className={[classes.key, classes.leftShift].join(' ')}>⇧</div>
        <div className={[classes.key].join(' ')}>&lt;</div>
        <div className={[classes.key].join(' ')}>Z</div>
        <div className={[classes.key].join(' ')}>X</div>
        <div className={[classes.key].join(' ')}>C</div>
        <div className={[classes.key].join(' ')}>V</div>
        <div className={[classes.key].join(' ')}>B</div>
        <div className={[classes.key].join(' ')}>N</div>
        <div className={[classes.key].join(' ')}>M</div>
        <div className={[classes.key].join(' ')}>,</div>
        <div className={[classes.key].join(' ')}>.</div>
        <div className={[classes.key].join(' ')}>-</div>
        <div className={[classes.key, classes.rightShift].join(' ')}>⇧</div>
      </div>

      <div className={classes.row}>
        <div className={[classes.key, classes.leftCtrl].join(' ')}>Ctrl</div>
        <div className={[classes.key].join(' ')}>Fn</div>
        <div className={[classes.key].join(' ')}>Opt</div>
        <div className={[classes.key].join(' ')}>Alt</div>

        <div
          className={[classes.key, classes.spacebar].join(' ')}
          style={{ filter: rest[' '] && 'brightness(100%)' }}
        ></div>

        <div className={[classes.key].join(' ')}>Alt Gr</div>
        <div className={[classes.key].join(' ')}>Ctrl</div>

        <div className={classes.arrowKeys}>
          <div
            className={[classes.key, classes.arrowKey, classes.up].join(' ')}
            style={{ filter: ArrowUp && 'brightness(100%)' }}
          >
            ▲
          </div>
          <div
            className={[classes.key, classes.arrowKey, classes.left].join(' ')}
            style={{ filter: ArrowLeft && 'brightness(100%)' }}
          >
            ◀
          </div>
          <div
            className={[classes.key, classes.arrowKey, classes.down].join(' ')}
            style={{ filter: ArrowDown && 'brightness(100%)' }}
          >
            ▼
          </div>
          <div
            className={[classes.key, classes.arrowKey, classes.right].join(' ')}
            style={{ filter: ArrowRight && 'brightness(100%)' }}
          >
            ▶
          </div>
        </div>
      </div>
    </div>
  )
}

export default Keys
