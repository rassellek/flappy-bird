import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  leaders: {
    user: [],
    points: [],
  },
  board: [],
}

export const leadersSlice = createSlice({
  name: 'leaders',
  initialState,
  reducers: {
    setLeaders: (state, { payload }) => {
      state.leaders = payload
    },
    setBoard: (state, { payload }) => {
      state.board = payload
    },
  },
})

export const { setLeaders, setBoard } = leadersSlice.actions

export default leadersSlice.reducer
