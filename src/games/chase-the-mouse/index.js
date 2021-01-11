import { config } from './config'
import * as nekoReducers from './neko'

const game = {
  config,
  reducers: { neko: nekoReducers },
}

export default game
