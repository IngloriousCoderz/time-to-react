import characterComponent from './character/component'
import * as characterReducers from './character/reducers'
import config from './config.json'

const game = {
  config,
  reducers: { character: characterReducers },
  components: { character: characterComponent },
}

export default game
