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
      return {
        ...state,
        user: payload,
      }
    },
    setBirdId: (state, { payload }) => {
      return {
        ...state,
        birdId: payload,
      }
    },
    setScore: (state, { payload }) => {
      return {
        ...state,
        scoreUser: payload,
      }
    },
    setGame: (state, { payload }) => {
      return {
        ...state,
        gameIsRun: payload,
      }
    },
  },
})

export const { setUser, setBirdId, setScore, setGame } = mainSlice.actions

export default mainSlice.reducer
