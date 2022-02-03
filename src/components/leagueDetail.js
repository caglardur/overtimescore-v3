import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import LeagueName from "./league-detail/leagueName"
import NextMatches from "./league-detail/nextMatches"
import OldMatches from "./league-detail/oldMatches"

const LeagueDetail = () => {
  const [nextMatches, setNextMatches] = useState(null)
  const [oldMatches, setOldMatches] = useState(null)
  const [page, setPage] = useState("next")
  let params = useParams()
  let leagueInfo
  if (nextMatches && nextMatches[0]) {
    leagueInfo = nextMatches[0].league
  } else if (oldMatches && oldMatches[0]) {
    leagueInfo = oldMatches[0].league
  }

  useEffect(() => {
    const nowDate = new Date()
    const getMatchDetail = async () => {
      const response = await axios(process.env.REACT_APP_DB_HOST + "matchesByLeague/" + params.leagueId)
      if (response.data) {
        response.data.sort((a, b) => {
          if (a.fixture.date > b.fixture.date) {
            return -1
          }
          if (a.fixture.date < b.fixture.date) {
            return +1
          }
          return 0
        })
      }
      let nextMatchesFilter = []
      let oldMatchesFilter = []
      response.data.map(match => {
        if (new Date(match.fixture.date) > new Date(nowDate)) {
          return nextMatchesFilter.push(match)
        } else {
          return oldMatchesFilter.push(match)
        }
      })

      nextMatchesFilter.sort((a, b) => {
        if (a.fixture.date < b.fixture.date) {
          return -1
        }
        if (a.fixture.date > b.fixture.date) {
          return +1
        }
        return 0
      })

      setNextMatches(nextMatchesFilter)
      setOldMatches(oldMatchesFilter)
    }
    try {
      getMatchDetail()
    } catch (err) {
      console.log(err)
    }
  }, [params.leagueId])

  return (
    <div className="col">
      {leagueInfo ? (
        <div className="col">
          <div className="col bg-white rounded-3 shadow-sm p-2 sticky-top">
            <LeagueName leagueInfo={leagueInfo} page={page} setPage={setPage} />
          </div>
          {page === "next" ? (
            <div className="col bg-white rounded-3 shadow-sm mt-3 overflow-hidden">
              <NextMatches nextMatches={nextMatches} />
            </div>
          ) : page === "result" ? (
            <div className="col bg-white rounded-3 shadow-sm mt-3 overflow-hidden">
              <OldMatches oldMatches={oldMatches} />
            </div>
          ) : (
            <div className="col bg-white rounded-3 shadow-sm mt-3 overflow-hidden">
              <OldMatches oldMatches={oldMatches} />
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
  )
}

export default LeagueDetail
