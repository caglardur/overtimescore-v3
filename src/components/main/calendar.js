import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import SingleDay from "./singleDay"
import { setSelectedDate } from "../../redux/dateReducer"

const Calendar = ({ teamSearch, setTeamSearch }) => {
  const { selectedDate } = useSelector(state => state.date)
  const dispatch = useDispatch()

  const dayArray = []

  useEffect(() => {
    dispatch(setSelectedDate(selectedDate))
  }, [dispatch, selectedDate])

  for (let i = 0; i < 5; i++) {
    dayArray.push({ i })
  }
  return (
    <div className="col bg-white rounded-3 shadow-sm p-2 pb-0">
      <div className="row">
        {dayArray.map(day => (
          <div className="col" key={day.i}>
            <SingleDay i={day.i} />
          </div>
        ))}
      </div>
      <div className="row border-top mt-3 justify-content-end align-items-center text-center p-2">
        <div className="col-auto">
          <div className="form-group position-relative rounded-3 overflow-hidden">
            <input type="text" className="form-control border-0 p-1 bg-light" value={teamSearch || ""} placeholder="team name..." onChange={e => setTeamSearch(e.target.value)} />
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
