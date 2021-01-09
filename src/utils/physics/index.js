import * as matter from './matter'
import * as simple from './simple'

export function applyPhysics(type) {
  switch (type) {
    case 'matter-js':
      return matter

    default:
      return simple
  }
}
