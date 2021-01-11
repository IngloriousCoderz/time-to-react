import Key from './key'
import classes from './keyboard.module.css'

function Keyboard() {
  return (
    <div className={classes.keys}>
      <div className={classes.row}>
        <Key id="Escape" label="Esc" className="top" />
        <Key id="F1" label="F1" className="top" />
        <Key id="F2" label="F2" className="top" />
        <Key id="F3" label="F3" className="top" />
        <Key id="F4" label="F4" className="top" />
        <Key id="F5" label="F5" className="top" />
        <Key id="F6" label="F6" className="top" />
        <Key id="F7" label="F7" className="top" />
        <Key id="F8" label="F8" className="top" />
        <Key id="F9" label="F9" className="top" />
        <Key id="F10" label="F10" className="top" />
        <Key id="F11" label="F11" className="top" />
        <Key id="F12" label="F12" className="top" />
        <Key id="Print" label="Print" className="top" />
        <Key id="Ins" label="Ins" className="top" />
        <Key id="Del" label="Del" className="top" />
      </div>

      <div className={classes.row}>
        <Key id="\" label="\" />
        <Key id="1" label="1" />
        <Key id="2" label="2" />
        <Key id="3" label="3" />
        <Key id="4" label="4" />
        <Key id="5" label="5" />
        <Key id="6" label="6" />
        <Key id="7" label="7" />
        <Key id="8" label="8" />
        <Key id="9" label="9" />
        <Key id="0" label="0" />
        <Key id="'" label="'" />
        <Key id="ì" label="ì" />
        <Key id="Backspace" label="←" className="backspace" />
      </div>

      <div className={classes.row}>
        {/* keyCode === 9 */}
        <Key id="Tab" label="↹" className="tab" />
        <Key id="q" label="Q" />
        <Key id="w" label="W" />
        <Key id="e" label="E" />
        <Key id="r" label="R" />
        <Key id="t" label="T" />
        <Key id="y" label="Y" />
        <Key id="u" label="U" />
        <Key id="i" label="I" />
        <Key id="o" label="O" />
        <Key id="p" label="P" />
        <Key id="è" label="è" />
        <Key id="+" label="+" />
        <Key id="⏎" label="⏎" />
      </div>

      <div className={classes.row}>
        <Key id="CapsLock" label="⇪" className="capsLock" />
        <Key id="a" label="A" />
        <Key id="s" label="S" />
        <Key id="d" label="D" />
        <Key id="f" label="F" />
        <Key id="g" label="G" />
        <Key id="h" label="H" />
        <Key id="j" label="J" />
        <Key id="k" label="K" />
        <Key id="l" label="L" />
        <Key id="ò" label="ò" />
        <Key id="à" label="à" />
        <Key id="ù" label="ù" />
        <Key id="" label="" className="empty" />
      </div>

      <div className={classes.row}>
        <Key id="Shift" label="⇧" className="leftShift" />
        <Key id="&lt;" label="&lt;" />
        <Key id="z" label="Z" />
        <Key id="x" label="X" />
        <Key id="c" label="C" />
        <Key id="v" label="V" />
        <Key id="b" label="B" />
        <Key id="n" label="N" />
        <Key id="m" label="M" />
        <Key id="," label="," />
        <Key id="." label="." />
        <Key id="-" label="-" />
        <Key id="Shift" label="⇧" className="rightShift" />
      </div>

      <div className={classes.row}>
        {/* event.ctrlKey &&  event.location == 1 */}
        <Key id="ctrlKey" label="Ctrl" className="leftCtrl" />
        {/* not detectable by itself */}
        <Key id="functionKey" label="Fn" />
        {/* event.metaKey === true */}
        <Key id="optKey" label="Opt" />
        {/* event.altKey === true */}
        <Key id="altKey" label="Alt" />

        <Key id=" " label="" className="spacebar" />
        {/* event.ctrlKey && event.altKey */}
        <Key id="altGraphKey" label="Alt Gr" />
        {/* event.ctrlKey &&  event.location == 2 */}
        <Key id="ctrlKey" label="Ctrl" />

        <div className={classes.arrowKeys}>
          <Key id="ArrowUp" label="▲" className="arrowKey up" />
          <Key id="ArrowLeft" label="◀" className="arrowKey left" />
          <Key id="ArrowDown" label="▼" className="arrowKey down" />
          <Key id="ArrowRight" label="▶" className="arrowKey right" />
        </div>
      </div>
    </div>
  )
}

export default Keyboard
