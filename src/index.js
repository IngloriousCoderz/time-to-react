import 'assets/style.css'

import { createGame } from 'components/game'
import React from 'react'
import ReactDOM from 'react-dom'

import reportWebVitals from './reportWebVitals'

const game = window.location.search
  ? window.location.search.split('=')[1]
  : process.env.REACT_APP_GAME

createGame(game).then((Game) =>
  ReactDOM.render(
    <React.StrictMode>
      <Game />
    </React.StrictMode>,
    document.getElementById('root')
  )
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
