import 'assets/style.css'

import Game from 'components/game'
import React from 'react'
import ReactDOM from 'react-dom'
import { createGame } from 'utils/game'

import reportWebVitals from './reportWebVitals'

const name = window.location.search
  ? window.location.search.split('=')[1]
  : process.env.REACT_APP_DEFAULT_GAME

createGame(name).then((game) =>
  ReactDOM.render(
    <React.StrictMode>
      <Game game={game} />
    </React.StrictMode>,
    document.getElementById('root')
  )
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
