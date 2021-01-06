import 'assets/reset.css'

import Game from 'game'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { TICK } from 'store/actionTypes'
import rootReducer from 'store/reducers'
import { startListening } from 'store/thunks/input'
import { startLoop } from 'store/thunks/loop'
import { startPhysics } from 'store/thunks/physics'

import reportWebVitals from './reportWebVitals'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        actionsBlacklist: [TICK],
      })
    : compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

store.dispatch(startPhysics())
store.dispatch(startLoop())
store.dispatch(
  startListening(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', ' '])
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Game />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
