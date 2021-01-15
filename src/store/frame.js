import { createSlice } from '@reduxjs/toolkit'

const frameSlice = createSlice({
  name: 'frame',
  initialState: {},
  reducers: {
    tick: (state, action) => {
      state.delta = action.payload
      state.fps = 1 / state.delta
    },
  },
})

export const { tick } = frameSlice.actions

export default frameSlice.reducer
