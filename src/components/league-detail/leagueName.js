import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUndo } from "@fortawesome/free-solid-svg-icons"

const LeagueName = ({ leagueInfo, page, setPage }) => {
  const navigate = useNavigate()

  return (
    <div className="col pt-2 px-2 mt-3 pb-0">
      <div className="row align-items-center">
        <div className="col-auto">
          <img src={leagueInfo.flag ? leagueInfo.flag : "world.jpg"} alt={leagueInfo.country} className="img-fluid rounded" style={{ height: "26px" }} />
        </div>
        <div type="button" className="col text-uppercase">
          <div className="col" style={{ fontSize: "11px" }}>
            {leagueInfo.country}
          </div>
          <div className="col fw-bold" style={{ fontSize: "14px" }}>
            {leagueInfo.name}
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
      <div className="row justify-content-evenly text-center fw-bold mt-4" style={{ fontSize: "12px" }}>
        <div type="button" className={page === "next" ? "col-auto text-white rounded-pill bg-danger px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage("next")}>
          NEXT MATCHES
        </div>
        <div type="button" className={page === "result" ? "col-auto text-white rounded-pill bg-danger px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage("result")}>
          RESULTS
        </div>
        <div type="button" className={page === "stats" ? "col-auto text-white rounded-pill bg-danger px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage("stats")}>
          STATS
        </div>
      </div>
    </div>
  )
}

export default LeagueName
