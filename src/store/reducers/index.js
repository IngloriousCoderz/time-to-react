import { combineReducers } from 'redux'

import input from './input'
import tick from './tick'

export const getDelta = ({ tick }) => tick
export const isKeyDown = (keyCode) => input[keyCode] || false

export default combineReducers({ tick, input })
