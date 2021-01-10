import config from './config.json'
import nekoComponent from './neko/component'
import * as nekoReducers from './neko/reducers'

const game = {
  config,
  reducers: { neko: nekoReducers },
  components: { neko: nekoComponent },
}

export default game
