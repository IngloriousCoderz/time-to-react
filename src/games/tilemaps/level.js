import { createSlice } from '@reduxjs/toolkit'
import { move } from 'store/nodes'

const statusSlice = createSlice({
  name: 'status',
  initialState: {},
  extraReducers: {
    [move]: (state, action) => {
      state.position = action.payload.direction
    },
  },
})

export const status = statusSlice.reducer
