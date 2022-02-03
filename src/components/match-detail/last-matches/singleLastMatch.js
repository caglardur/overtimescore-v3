import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faPlaneDeparture } from "@fortawesome/free-solid-svg-icons"

const SingleLastMatch = ({ team, match }) => {
  const homeOrAway = team.id === match.teams.home.id ? "home" : "away"
  const result = match.score.fulltime.home === match.score.fulltime.away ? "draw" : match.score.fulltime.home > match.score.fulltime.away ? (homeOrAway === "home" ? "win" : "lost") : homeOrAway === "home" ? "lost" : "win"
  const matchDay = parseInt(new Date(match.fixture.date).getDate()) > 9 ? new Date(match.fixture.date).getDate() : "0" + new Date(match.fixture.date).getDate()
  const matchMonth = parseInt(new Date(match.fixture.date).getMonth() + 1) > 9 ? parseInt(new Date(match.fixture.date).getMonth() + 1) : "0" + (new Date(match.fixture.date).getMonth() + 1)
  return (
    <div className="row align-items-center">
      <div className="col-auto text-white m-1 fw-bold fs-6">
        <div className={result === "draw" ? "col bg-warning rounded-3 p-2" : result === "win" ? "col bg-success rounded-3 p-2" : "col bg-danger rounded-3 p-2"}>{match.score.fulltime.home + ":" + match.score.fulltime.away}</div>
      </div>
      <div className="col-auto px-0 text-center">
        <div className="col">
          <FontAwesomeIcon icon={homeOrAway === "home" ? faHome : faPlaneDeparture} />
        </div>
        <div className="col">{matchDay + "." + matchMonth}</div>
      </div>
      <div className="col text-truncate">
        <div className="col fw-bold">{homeOrAway === "home" ? match.teams.away.name : match.teams.home.name}</div>
        <div className="col">{match.league.name}</div>
      </div>
    </div>
  )
}

export default SingleLastMatch
