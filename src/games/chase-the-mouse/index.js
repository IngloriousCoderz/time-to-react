import config from './config.json'
import component from './neko/component'
import reducer from './neko/reducer'

const game = {
  config,
  reducers: { neko: reducer },
  components: { neko: component },
}

export default game
