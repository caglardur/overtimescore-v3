import { useDispatch, useSelector } from "react-redux"

import { setSelectedDate } from "../../redux/dateReducer"

const SingleDay = ({ i }) => {
  const { selectedDate } = useSelector(state => state.date)
  const dispatch = useDispatch()
  const thisDateString = new Date(new Date().setDate(new Date().getDate() + i - 2)).toLocaleString()
  const thisDayNumber = new Date(new Date().setDate(new Date().getDate() + i - 2)).getDay()
  const thisDay = thisDateString.slice(0, 2)
  const weekDayName = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  return (
    <div type="button" className={i === selectedDate ? "px-3 rounded-pill bg-warning text-center shadow-sm text-white" : "px-3 rounded-pill bg-light text-center shadow-sm"} onClick={() => dispatch(setSelectedDate(i))}>
      <div className="col fs-5 fw-bold">{thisDay}</div>
      <div className="col" style={{ fontSize: "10px" }}>
        {weekDayName[thisDayNumber]}
      </div>
    </div>
  )
}

export default SingleDay
