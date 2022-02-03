import { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStream, faPoll } from "@fortawesome/free-solid-svg-icons"

import { Chart } from "./chart"
import LastMatches from "./lastMatches"
import { overUnderFunction, bttsCalculator, goalAverageCalculator } from "./stats-calculate"

const Stats = ({ homeTeam, awayTeam, homeMatches, awayMatches }) => {
  const [page, setPage] = useState(1)
  let homeOverUnder, awayOverUnder, homeTeamBTTS, awayTeamBTTS, homeTeamGoalAverage, awayTeamGoalAverage

  if (homeMatches && awayMatches) {
    homeOverUnder = overUnderFunction(homeMatches)
    awayOverUnder = overUnderFunction(awayMatches)
    homeTeamBTTS = bttsCalculator(homeMatches)
    awayTeamBTTS = bttsCalculator(awayMatches)
    homeTeamGoalAverage = goalAverageCalculator(homeMatches, homeTeam.id)
    awayTeamGoalAverage = goalAverageCalculator(awayMatches, awayTeam.id)
  }

  return (
    <div className="col">
      <div className="col">
        {homeMatches && awayMatches ? (
          <div className="col">
            <div className="col">
              <div className="row justify-content-evenly text-center fw-bold my-2" style={{ fontSize: "11px" }}>
                <div type="button" className={page === 1 ? "col-auto text-white rounded-pill shadow bg-primary px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage(1)}>
                  <FontAwesomeIcon icon={faStream} style={{ marginRight: "5px" }} />
                  History
                </div>
                <div type="button" className={page === 2 ? "col-auto text-white rounded-pill shadow bg-primary px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage(2)}>
                  1.5 Goals
                </div>
                <div type="button" className={page === 3 ? "col-auto text-white rounded-pill shadow bg-primary px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage(3)}>
                  2.5 Goals
                </div>
                <div type="button" className={page === 4 ? "col-auto text-white rounded-pill shadow bg-primary px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage(4)}>
                  3.5 Goals
                </div>
                <div type="button" className={page === 5 ? "col-auto text-white rounded-pill shadow bg-primary px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage(5)}>
                  BTTS
                </div>
                <div type="button" className={page === 6 ? "col-auto text-white rounded-pill shadow bg-primary px-4 py-2" : "col-auto text-dark rounded-pill bg-light px-4 py-2"} onClick={() => setPage(6)}>
                  Average
                </div>
              </div>
            </div>
            {page === 1 ? (
              <div className="col my-4">
                <LastMatches homeTeam={homeTeam} awayTeam={awayTeam} homeMatches={homeMatches} awayMatches={awayMatches} />
              </div>
            ) : page === 2 ? (
              <div className="col my-2">
                <Chart title="Stats for 1.5 Goals" homeTeam={homeTeam} awayTeam={awayTeam} data1={{ label: "1.5 Over", data: [homeOverUnder.oneAndHalf.over, awayOverUnder.oneAndHalf.over, homeOverUnder.oneAndHalf.over + awayOverUnder.oneAndHalf.over], backgroundColor: "#198754" }} data2={{ label: "1.5 Under", data: [homeOverUnder.oneAndHalf.under, awayOverUnder.oneAndHalf.under, homeOverUnder.oneAndHalf.under + awayOverUnder.oneAndHalf.under], backgroundColor: "#dc3545" }} />
              </div>
            ) : page === 3 ? (
              <div className="col my-2">
                <Chart title="Stats for 2.5 Goals" homeTeam={homeTeam} awayTeam={awayTeam} data1={{ label: "2.5 Over", data: [homeOverUnder.twoAndHalf.over, awayOverUnder.twoAndHalf.over, homeOverUnder.twoAndHalf.over + awayOverUnder.twoAndHalf.over], backgroundColor: "#198754" }} data2={{ label: "2.5 Under", data: [homeOverUnder.twoAndHalf.under, awayOverUnder.twoAndHalf.under, homeOverUnder.twoAndHalf.under + awayOverUnder.twoAndHalf.under], backgroundColor: "#dc3545" }} />
              </div>
            ) : page === 4 ? (
              <div className="col my-2">
                <Chart title="Stats for 3.5 Goals" homeTeam={homeTeam} awayTeam={awayTeam} data1={{ label: "3.5 Over", data: [homeOverUnder.threeAndHalf.over, awayOverUnder.threeAndHalf.over, homeOverUnder.threeAndHalf.over + awayOverUnder.threeAndHalf.over], backgroundColor: "#198754" }} data2={{ label: "3.5 Under", data: [homeOverUnder.threeAndHalf.under, awayOverUnder.threeAndHalf.under, homeOverUnder.threeAndHalf.under + awayOverUnder.threeAndHalf.under], backgroundColor: "#dc3545" }} />
              </div>
            ) : page === 5 ? (
              <div className="col my-2">
                <Chart title="Both Teams to Score" homeTeam={homeTeam} awayTeam={awayTeam} data1={{ label: "BTTS Yes", data: [homeTeamBTTS.yes, awayTeamBTTS.yes, homeTeamBTTS.yes + awayTeamBTTS.yes], backgroundColor: "#198754" }} data2={{ label: "BTTS No", data: [homeTeamBTTS.no, awayTeamBTTS.no, homeTeamBTTS.no + awayTeamBTTS.no], backgroundColor: "#dc3545" }} />
              </div>
            ) : (
              <div className="col my-4">
                <Chart title="Goal Average per Match" homeTeam={homeTeam} awayTeam={awayTeam} data1={{ label: "Scored", data: [homeTeamGoalAverage.scored.toFixed(2), awayTeamGoalAverage.scored.toFixed(2), ((homeTeamGoalAverage.scored + awayTeamGoalAverage.conceded) / 2).toFixed(2)], backgroundColor: "#198754" }} data2={{ label: "Conceded", data: [homeTeamGoalAverage.conceded.toFixed(2), awayTeamGoalAverage.conceded.toFixed(2), ((homeTeamGoalAverage.conceded + awayTeamGoalAverage.scored) / 2).toFixed(2)], backgroundColor: "#dc3545" }} />
              </div>
            )}
          </div>
        ) : (
          <div className="col bg-white rounded-3 shadow-sm text-center py-5">
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Stats
