import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Header from "./left-bar/header"
import TopLeagues from "./left-bar/topLeagues"

import { GetTopLeagues } from "../redux/action/getTopLeaguesAction"

const LeftBar = () => {
  const dispatch = useDispatch()
  const { topLeagues } = useSelector(state => state.topLeagues)

  useEffect(() => {
    dispatch(GetTopLeagues())
  }, [dispatch])

  return (
    <div className="col">
      <div className="col sticky-top">
        <Header />
      </div>
      <div className="col">
        <TopLeagues topLeagues={topLeagues} />
      </div>
    </div>
  )
}

export default LeftBar
