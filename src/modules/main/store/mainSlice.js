import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: [],
  birdId: [],
  scoreUser: [],
  gameIsRun: Boolean,
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
    setGame: (state, { payload }) => {
      state.gameIsRun = payload
    },
  },
})

export const { setUser, setBirdId, setScore, setGame } = mainSlice.actions

export default mainSlice.reducer
