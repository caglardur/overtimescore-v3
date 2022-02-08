import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons"
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"

const SingleNextMatch = ({ match, beforeMatch }) => {
  const itsOver = match.fixture.status.short === "FT" ? true : false
  const timeString = new Date(match.fixture.date).toLocaleTimeString()
  const dateString = new Date(match.fixture.date).toLocaleDateString()
  let beforeDateString
  const monthsArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  if (beforeMatch) {
    beforeDateString = new Date(beforeMatch.fixture.date).toLocaleDateString()
  }
  const hourAndMin = timeString.slice(0, 5)
  const matchId = match.fixture.id.toString()

  return (
    <div className="col">
      {dateString !== beforeDateString && (
        <div className="row m-3 fw-bold">
          <div className="col-auto bg-light rounded-pill shadow-sm px-3 py-1">
            <FontAwesomeIcon icon={faCalendar} />
            {"  " + new Date(match.fixture.date).getDate().toString() + " " + monthsArray[new Date(match.fixture.date).getMonth()] + " " + new Date(match.fixture.date).getFullYear().toString()}
          </div>
          <div className="col"></div>
        </div>
      )}
      <Link to={"/match/" + matchId}>
        <div type="button" className="col mb-2 bg-light p-1 rounded shadow-sm" style={{ fontSize: "14px" }}>
          <div className="row align-items-center">
            <div className="col text-end">{match.teams.home.name}</div>
            {itsOver ? (
              <div className="col-auto text-center fw-bold">{match.score.fulltime.home + ":" + match.score.fulltime.away}</div>
            ) : (
              <div className="col-auto opacity-50 text-center" style={{ fontSize: "10px" }} data-bs-toggle="tooltip" data-bs-placement="top" title={match.fixture.status.long}>
                {match.fixture.status.short === "PST" ? <FontAwesomeIcon icon={faExclamationTriangle} /> : <FontAwesomeIcon icon={faClock} />}
              </div>
            )}
            <div className="col">{match.teams.away.name}</div>
          </div>
          <div className="col text-center opacity-50" style={{ fontSize: "10px" }}>
            {itsOver ? "FULL TIME" : hourAndMin}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SingleNextMatch
