import * as Vector from './vector'

describe('Vector', () => {
  it('should sum two vectors together', () => {
    const v1 = { x: 0, y: 1 }
    const v2 = { x: 1, y: 1 }

    expect(Vector.sum(v1, v2)).toEqual({ x: 1, y: 2 })
  })

  it('should sum three vectors together', () => {
    const v1 = { x: 0, y: 1 }
    const v2 = { x: 1, y: 1 }
    const v3 = { x: 3, y: 18 }

    expect(Vector.sum(v1, v2, v3)).toEqual({ x: 4, y: 20 })
  })
})
