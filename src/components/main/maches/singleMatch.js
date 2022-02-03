import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

import { setFavLeague } from "../../../redux/matchReducer"

const SingleMatch = ({ match, oldMatch, selectedDate, selectedLeague }) => {
  const dispatch = useDispatch()
  const sameLeague = oldMatch === false ? false : oldMatch.league.name === match.league.name
  const itsOver = match.fixture.status.short === "FT" ? true : false
  const timeString = new Date(match.fixture.date).toLocaleTimeString()
  const hourAndMin = timeString.slice(0, 5)
  const matchId = match.fixture.id.toString()

  return (
    <div className="col">
      {!sameLeague && (
        <div className="col p-2 my-3">
          <Link to={"/league/" + match.league.id}>
            <div className="row align-items-center">
              <div className="col-auto">
                <img src={match.league.flag ? match.league.flag : "/world.png"} alt={match.league.country} className="img-fluid rounded" style={{ height: "26px" }} />
              </div>
              <div type="button" className="col text-uppercase">
                <div className="col" style={{ fontSize: "11px" }}>
                  {match.league.country}
                </div>
                <div className="col fw-bold" style={{ fontSize: "14px" }}>
                  {match.league.name}
                </div>
              </div>
              <div className="col-auto">
                {match.league.id === selectedLeague && (
                  <div className="col" onClick={() => dispatch(setFavLeague({ date: selectedDate, selectedLeague: false }))}>
                    <button type="button" className="btn btn-outline-danger">
                      <FontAwesomeIcon type="button" icon={faTimes} />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Link>
        </div>
      )}
      <Link to={"match/" + matchId}>
        <div type="button" className="col mb-2" style={{ fontSize: "14px" }}>
          <div className="row align-items-center">
            <div className="col text-end">{match.teams.home.name}</div>
            {itsOver ? (
              <div className="col-auto text-center fw-bold">{match.score.fulltime.home + ":" + match.score.fulltime.away}</div>
            ) : (
              <div className="col-auto opacity-50 text-center" style={{ fontSize: "12px" }}>
                <FontAwesomeIcon icon={faClock} />
              </div>
            )}
            <div className="col">{match.teams.away.name}</div>
          </div>
          {itsOver ? (
            <div className="col text-center opacity-50" style={{ fontSize: "12px" }}>
              FULL TIME
            </div>
          ) : (
            <div className="col text-center opacity-50" style={{ fontSize: "12px" }}>
              {hourAndMin}
            </div>
          )}
        </div>
      </Link>
    </div>
  )
}

export default SingleMatch
