import { useDispatch, useSelector } from "react-redux"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons"
import SingleDay from "./singleDay"
import TopLeagues from "../left-bar/topLeagues"

const MobilHeader = ({ teamSearch, setTeamSearch }) => {
  const { selectedDate } = useSelector(state => state.date)
  const { topLeagues } = useSelector(state => state.topLeagues)
  const dispatch = useDispatch()

  const dayArray = []

  for (let i = 0; i < 5; i++) {
    dayArray.push({ i })
  }

  return (
    <div className="col bg-white rounded-3 shadow-sm p-2 pb-0 align-items-center">
      <div className="row align-items-center" style={{ fontSize: "22px" }}>
        <div className="col-auto m-2" data-bs-toggle="offcanvas" href="#offcanvasLeftMenu" role="button" aria-controls="offcanvasLeftMenu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className="col text-center fw-bold">Overtime Score</div>
        <div className="col-auto" data-bs-toggle="offcanvas" href="#offcanvasRightMenu" role="button" aria-controls="offcanvasRightMenu">
          <SingleDay i={selectedDate} />
        </div>
      </div>
      <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasLeftMenu" aria-labelledby="offcanvasLeftMenuLabel">
        <div className="col">
          <TopLeagues topLeagues={topLeagues} />
        </div>
      </div>
      <div className="offcanvas offcanvas-top p-3" tabIndex={-1} id="offcanvasRightMenu" aria-labelledby="offcanvasRightMenuLabel" style={{ height: "140px" }}>
        <div className="col">
          <div className="row my-2">
            {dayArray.map(day => (
              <div className="col" key={day.i} data-bs-dismiss="offcanvas">
                <SingleDay i={day.i} />
              </div>
            ))}
          </div>
        </div>
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

export default MobilHeader
