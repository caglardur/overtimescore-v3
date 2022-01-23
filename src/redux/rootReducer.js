import { configureStore } from "@reduxjs/toolkit"

import DateReducer from "./dateReducer"
import MatchReducer from "./matchReducer"

export default configureStore({
  reducer: {
    date: DateReducer,
    match: MatchReducer
  }
})
