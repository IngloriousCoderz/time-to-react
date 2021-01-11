import * as characterReducers from './character'
import { config } from './config'

const game = {
  config,
  reducers: { character: characterReducers },
}

export default game
