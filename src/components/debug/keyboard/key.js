import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getAllowedKeys, getKeys } from 'store/reducers'

import classes from './keyboard.module.css'

function Key({ id, label, className }) {
  const allowedKeys = useSelector(getAllowedKeys)
  const keys = useSelector(getKeys)

  const targetClassName = `key ${className} ${keys[id] ? 'pressed' : ''}`
    .split(' ')
    .map((className) => classes[className])
    .join(' ')

  return allowedKeys.includes(id) ? (
    <div className={targetClassName}>{label}</div>
  ) : null
}

Key.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
}

Key.defaultValues = {
  className: '',
}

export default Key
