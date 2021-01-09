export function createNodeReducer(reducers) {
  return function node(state = {}, action) {
    return Object.keys(reducers).reduce(
      (acc, sub) => {
        const subReducer = reducers[sub]
        const subState = state[sub]
        acc[sub] = subReducer(subState, action)
        return acc
      },
      { ...state }
    )
  }
}
