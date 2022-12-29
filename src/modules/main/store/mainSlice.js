import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [],
  birdId: [],
  scoreUser: [],
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload
    },
    setBirdId: (state, { payload }) => {
      state.birdId = payload
    },
    setScore: (state, { payload }) => {
      state.scoreUser = payload
    },
  },
})

export const { setUser, setBirdId, setScore } = mainSlice.actions

export default mainSlice.reducer
