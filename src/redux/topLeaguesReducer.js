import { createSlice } from "@reduxjs/toolkit"

export const TopLeaguesReducer = createSlice({
  name: "topLeagues",
  initialState: {
    topLeagues: []
  },
  reducers: {
    setTopLeagues: (state, action) => {
      state.topLeagues = action.payload
    }
  }
})

export const { setTopLeagues } = TopLeaguesReducer.actions

export default TopLeaguesReducer.reducer
