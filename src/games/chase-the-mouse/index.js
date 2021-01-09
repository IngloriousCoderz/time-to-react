import config from './config.json'
import component from './neko/component'
import * as nekoReducers from './neko/reducers'

const game = {
  config,
  reducers: { neko: nekoReducers },
  components: { neko: component },
}

export default game
