import { createSlice } from "@reduxjs/toolkit"

export const DateReducer = createSlice({
  name: "selectedDate",
  initialState: {
    selectedDate: 2
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload
    }
  }
})

export const { setSelectedDate } = DateReducer.actions

export default DateReducer.reducer
