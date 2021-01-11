import * as level from '../tilemaps/level'
import * as character from './character'
import { config } from './config'

const game = {
  config,
  reducers: { scene: (state) => state, level, character },
}

export default game
