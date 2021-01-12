import { createSlice } from '@reduxjs/toolkit'

const input = createSlice({
  name: 'input',
  initialState: {},
  reducers: {
    keyPressed(state, action) {
      state.keys = { ...state.keys, ...action.payload.keys }
    },
  },
})

export const { keyPressed } = input.actions

export default input.reducer
