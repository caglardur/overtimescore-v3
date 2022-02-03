import { createSlice } from "@reduxjs/toolkit"

export const MatchReducer = createSlice({
  name: "match",
  initialState: [
    { match: [], isLoading: true, countryArray: [], topLeagues: [], selectedLeague: false },
    { match: [], isLoading: true, countryArray: [], topLeagues: [], selectedLeague: false },
    { match: [], isLoading: true, countryArray: [], topLeagues: [], selectedLeague: false },
    { match: [], isLoading: true, countryArray: [], topLeagues: [], selectedLeague: false },
    { match: [], isLoading: true, countryArray: [], topLeagues: [], selectedLeague: false }
  ],
  reducers: {
    setMatch: (state, action) => {
      state[action.payload.date].isLoading = true
      if (state[action.payload.date].match.length === 0) {
        state[action.payload.date].match = action.payload.matches
        state[action.payload.date].countryArray = action.payload.countryArray
        state[action.payload.date].topLeagues = action.payload.topLeagues
        state[action.payload.date].isLoading = false
        state[action.payload.date].selectedLeague = false
      } else {
        state[action.payload.date].isLoading = false
      }
    },
    setFavLeague: (state, action) => {
      state[action.payload.date].selectedLeague = action.payload.selectedLeague
    }
  }
})

export const { setMatch, setFavLeague } = MatchReducer.actions

export default MatchReducer.reducer
