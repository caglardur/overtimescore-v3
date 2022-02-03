import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendar } from "@fortawesome/free-regular-svg-icons"

const TeamNames = ({ match }) => {
  const itsOver = match.fixture.status.short === "FT" ? true : false
  const matchHour = new Date(match.fixture.date).getHours() > 9 ? new Date(match.fixture.date).getHours() : "0" + new Date(match.fixture.date).getHours()
  const matchMinute = new Date(match.fixture.date).getMinutes() > 9 ? new Date(match.fixture.date).getMinutes() : "0" + new Date(match.fixture.date).getMinutes()
  const matchMonth = new Date(match.fixture.date).getMonth() + 1 > 9 ? new Date(match.fixture.date).getMonth() + 1 : "0" + (new Date(match.fixture.date).getMonth() + 1)
  const matchDay = new Date(match.fixture.date).getDate() > 9 ? new Date(match.fixture.date).getDate() : "0" + new Date(match.fixture.date).getDate()
  const matchYear = new Date(match.fixture.date).getFullYear()

  return (
    <div className="col mt-5">
      <div className="row">
        <div className="col text-center">
          <div className="col">
            <img src={match.teams.home.logo} alt={match.teams.home.name} style={{ maxHeight: "62px" }} />
          </div>
          <div className="col fw-bold text-uppercase">{match.teams.home.name}</div>
        </div>
        <div className="col-auto">
          {itsOver ? (
            <div className="col text-center">
              <div className="col">FULL TIME</div>
              <div className="col-auto text-center fw-bold fs-3">
                <div className="row text-white">
                  <div className="col m-1 rounded" style={{ backgroundColor: "#2a2a48" }}>
                    {match.score.fulltime.home}
                  </div>
                  <div className="col m-1 rounded" style={{ backgroundColor: "#2a2a48" }}>
                    {match.score.fulltime.away}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-auto opacity-50 text-center" style={{ fontSize: "16px" }}>
              <div className="col">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="col">{matchHour + ":" + matchMinute}</div>
            </div>
          )}
        </div>
        <div className="col text-center">
          <div className="col">
            <img src={match.teams.away.logo} alt={match.teams.away.name} style={{ maxHeight: "62px" }} />
          </div>
          <div className="col fw-bold text-uppercase">{match.teams.away.name}</div>
        </div>
      </div>
      <div className="col text-center opacity-50">
        <div className="col-auto">
          <FontAwesomeIcon icon={faCalendar} />
          {" " + matchDay + "." + matchMonth + "." + matchYear}
        </div>
      </div>
    </div>
  )
}

export default TeamNames
