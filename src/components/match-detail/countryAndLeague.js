import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUndo } from "@fortawesome/free-solid-svg-icons"

const CountryAndLeague = ({ match }) => {
  const navigate = useNavigate()

  return (
    <div className="col p-2 mt-2">
      <div className="row align-items-center">
        <div className="col-auto">
          <img src={match.league.flag ? match.league.flag : "/world.png"} alt={match.league.country} className="img-fluid rounded" style={{ height: "26px" }} />
        </div>
        <div className="col text-uppercase">
          <div className="col" style={{ fontSize: "11px" }}>
            {match.league.country}
          </div>
          <div className="col fw-bold" style={{ fontSize: "14px" }}>
            {match.league.name}
          </div>
        </div>
        <div className="col-auto">
          <div className="col">
            <button type="button" className="btn btn-outline-secondary" onClick={() => navigate(-1)}>
              <FontAwesomeIcon type="button" icon={faUndo} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CountryAndLeague
