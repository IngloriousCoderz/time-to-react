import * as custom from './custom'
import * as matter from './matter'

export function applyPhysics(type) {
  switch (type) {
    case 'matter-js':
      return matter

    default:
      return custom
  }
}
