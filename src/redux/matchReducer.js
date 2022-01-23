import { createSlice } from "@reduxjs/toolkit"

export const MatchReducer = createSlice({
  name: "match",
  initialState: [
    { match: [], isLoading: true, countryArray: [] },
    { match: [], isLoading: true, countryArray: [] },
    { match: [], isLoading: true, countryArray: [] },
    { match: [], isLoading: true, countryArray: [] },
    { match: [], isLoading: true, countryArray: [] }
  ],
  reducers: {
    setMatch: (state, action) => {
      state[action.payload.date].isLoading = true
      if (state[action.payload.date].match.length === 0) {
        state[action.payload.date].match = action.payload.matches
        state[action.payload.date].countryArray = action.payload.countryArray
        state[action.payload.date].isLoading = false
      } else {
        state[action.payload.date].isLoading = false
      }
    }
  }
})

export const { setMatch } = MatchReducer.actions

export default MatchReducer.reducer
