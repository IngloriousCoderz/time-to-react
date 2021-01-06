import { combineReducers } from 'redux'

import tick from './tick'

export const getDelta = ({ tick }) => tick

export default combineReducers({ tick })
