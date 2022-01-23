import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import Footer from "./components/footer"
import LeftBar from "./components/leftBar"
import Main from "./components/main"

import { GetMatchAction } from "./redux/action/getMatchAction"

const App = () => {
  const dispatch = useDispatch()
  const selectedDate = useSelector(state => state.date)

  useEffect(() => {
    dispatch(GetMatchAction(selectedDate))
  }, [dispatch, selectedDate])

  return (
    <div className="App container mt-3" style={{ maxWidth: "960px" }}>
      <div className="row">
        <div className="col" style={{ maxWidth: "260px" }}>
          <LeftBar />
        </div>
        <div className="col">
          <div className="col">
            <Main />
          </div>
          <div className="col">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
