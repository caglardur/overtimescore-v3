import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import SingleDay from "./singleDay"
import { setSelectedDate } from "../../redux/dateReducer"

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(2)
  const dayArray = []
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setSelectedDate(selectedDay))
  }, [dispatch, selectedDay])

  for (let i = 0; i < 5; i++) {
    dayArray.push({ i })
  }
  return (
    <div className="col bg-white rounded-3 shadow-sm p-2 pb-0 overflow-hidden">
      <div className="row">
        {dayArray.map(day => (
          <div className="col" key={day.i}>
            <SingleDay i={day.i} selectedDay={selectedDay} setSelectedDay={setSelectedDay} />
          </div>
        ))}
      </div>
      <div className="row border-top mt-3 justify-content-evenly align-items-center text-center p-2">
        <div className="col">All MATCHES</div>
        <div className="col">NEXT MATCHES</div>
        <div className="col">
          <div className="form-group position-relative rounded-3">
            <input type="text" className="form-control border-0 text-center p-0" placeholder="SEARCH" />
            <div className="position-absolute top-50 translate-middle-y" style={{ right: "5px" }}>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calendar
