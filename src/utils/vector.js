export const ZERO = { x: 0, y: 0 }

export function clamp(value, min, max) {
  if (value < min) return min
  if (value > max) return max
  return value
}

export function round(vector) {
  return Object.keys(vector).reduce(
    (acc, key) => ({ ...acc, [key]: Math.round(vector[key]) }),
    {}
  )
}

export function length(vector) {
  return Math.sqrt(
    Object.keys(vector)
      .map((key) => vector[key] ** 2)
      .reduce((a, b) => a + b, 0)
  )
}

export function angle(vector) {
  return Math.atan2(vector.y, vector.x)
}

export function normalize(vector) {
  const magnitude = length(vector)
  if (!magnitude) return ZERO

  return Object.keys(vector).reduce(
    (acc, key) => ({ ...acc, [key]: vector[key] / magnitude }),
    {}
  )
}

export function sum(...vectors) {
  return Object.keys(vectors[0]).reduce(
    (acc, key) => ({
      ...acc,
      [key]: vectors.reduce((acc, vector) => acc + vector[key], 0),
    }),
    {}
  )
}

export function mult(vector, scalar) {
  return Object.keys(vector).reduce(
    (acc, key) => ({ ...acc, [key]: vector[key] * scalar }),
    {}
  )
}
