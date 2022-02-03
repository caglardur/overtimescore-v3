import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import Calendar from "./main/calendar"
import MatchList from "./main/matchList"

import { GetMatchAction } from "../redux/action/getMatchAction"
import MobilHeader from "./main/mobilHeader"

const Main = () => {
  const dispatch = useDispatch()
  const { selectedDate, nextMatches } = useSelector(state => state.date)
  const [teamSearch, setTeamSearch] = useState(false)

  useEffect(() => {
    dispatch(GetMatchAction({ selectedDate, nextMatches }))
  }, [dispatch, selectedDate, nextMatches])

  return (
    <div className="col">
      <div className="col sticky-top d-none d-lg-block">
        <Calendar teamSearch={teamSearch} setTeamSearch={setTeamSearch} />
      </div>
      <div className="col sticky-top d-block d-lg-none">
        <MobilHeader teamSearch={teamSearch} setTeamSearch={setTeamSearch} />
      </div>
      <div className="col">
        <MatchList teamSearch={teamSearch} />
      </div>
    </div>
  )
}

export default Main
