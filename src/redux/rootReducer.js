import { configureStore } from "@reduxjs/toolkit"

import DateReducer from "./dateReducer"
import MatchReducer from "./matchReducer"
import TopLeaguesReducer from "./topLeaguesReducer"

export default configureStore({
  reducer: {
    date: DateReducer,
    match: MatchReducer,
    topLeagues: TopLeaguesReducer
  }
})
