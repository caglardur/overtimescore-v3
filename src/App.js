import { Routes, Route, Navigate } from "react-router-dom"

import Footer from "./components/footer"
import LeagueDetail from "./components/leagueDetail"
import LeftBar from "./components/leftBar"
import Main from "./components/main"
import MatchDetail from "./components/matchDetail"
import ScrollToTop from "./scrollToTop"

const App = () => {
  return (
    <div className="App container" style={{ maxWidth: "960px" }}>
      <div className="row mt-3">
        <div className="col overflow-auto sticky-top d-none d-lg-block" style={{ maxWidth: "260px", maxHeight: "95vh" }}>
          <LeftBar />
        </div>
        <div className="col">
          <div className="col">
            <ScrollToTop>
              <Routes>
                <Route index exact path="/" element={<Main />} />
                <Route path="match/:matchId" element={<MatchDetail />} />
                <Route path="league/:leagueId" element={<LeagueDetail />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </ScrollToTop>
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
