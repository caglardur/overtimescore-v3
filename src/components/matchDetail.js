import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import CountryAndLeague from "./match-detail/countryAndLeague"
import TeamNames from "./match-detail/teamNames"
import ConfigDetail from "./match-detail/configDetail"
import Stats from "./match-detail/stats"

const MatchDetail = () => {
  const [selectedMatch, setSelectedMathc] = useState(null)
  const [homeMatches, setHomeMatches] = useState(null)
  const [awayMatches, setAwayMatches] = useState(null)
  const [confHomeMatches, setConfHomeMatches] = useState(null)
  const [confAwayMatches, setConfAwayMatches] = useState(null)
  const [sameLeague, setSameLeague] = useState(true)
  const [homeAway, setHomeAway] = useState(false)
  const [matchCount, setMatchCount] = useState(6)

  let params = useParams()

  useEffect(() => {
    const getMatchDetail = async () => {
      const response = await axios(process.env.REACT_APP_DB_HOST + "singleMatch/" + params.matchId)
      setSelectedMathc(response.data.singleMatch)
    }
    try {
      getMatchDetail()
    } catch (err) {
      console.log(err)
    }
  }, [params.matchId])

  useEffect(() => {
    const finisedArray = ["FT", "AET", "PEN"]
    const getLastMatches = async () => {
      const response = await axios(process.env.REACT_APP_DB_HOST + "matchesByTeams/" + selectedMatch.teams.home.id + "/" + selectedMatch.teams.away.id)
      if (response.data) {
        response.data.lastMatches.sort((a, b) => {
          if (a.fixture.date > b.fixture.date) {
            return -1
          }
          if (a.fixture.date < b.fixture.date) {
            return +1
          }
          return 0
        })
      }
      const oldMatches = response.data.lastMatches.filter(match => new Date(match.fixture.date) < new Date(selectedMatch.fixture.date))
      const finishedOldMatches = oldMatches.filter(match => finisedArray.includes(match.fixture.status.short))

      const homeTeamLastMatches = finishedOldMatches.filter(match => match.teams.home.id === selectedMatch.teams.home.id || match.teams.away.id === selectedMatch.teams.home.id)
      const awayTeamLastMatches = finishedOldMatches.filter(match => match.teams.home.id === selectedMatch.teams.away.id || match.teams.away.id === selectedMatch.teams.away.id)

      setHomeMatches(homeTeamLastMatches)
      setAwayMatches(awayTeamLastMatches)
    }
    if (selectedMatch) {
      try {
        getLastMatches()
      } catch (err) {
        console.log(err)
      }
    }
  }, [selectedMatch])

  useEffect(() => {
    if (homeMatches && awayMatches && selectedMatch) {
      let homeMatches2 = homeMatches
      let awayMatches2 = awayMatches
      if (sameLeague && homeAway) {
        const filterFunction = async () => {
          homeMatches2 = await homeMatches.filter(match => match.league.id === selectedMatch.league.id && match.teams.home.id === selectedMatch.teams.home.id)
          awayMatches2 = await awayMatches.filter(match => match.league.id === selectedMatch.league.id && match.teams.away.id === selectedMatch.teams.away.id)
          setConfHomeMatches(homeMatches2.slice(0, matchCount))
          setConfAwayMatches(awayMatches2.slice(0, matchCount))
        }
        filterFunction()
      } else if (sameLeague && !homeAway) {
        const filterFunction = async () => {
          homeMatches2 = await homeMatches.filter(match => match.league.id === selectedMatch.league.id)
          awayMatches2 = await awayMatches.filter(match => match.league.id === selectedMatch.league.id)
          setConfHomeMatches(homeMatches2.slice(0, matchCount))
          setConfAwayMatches(awayMatches2.slice(0, matchCount))
        }
        filterFunction()
      } else if (!sameLeague && homeAway) {
        const filterFunction = async () => {
          homeMatches2 = await homeMatches.filter(match => match.teams.home.id === selectedMatch.teams.home.id)
          awayMatches2 = await awayMatches.filter(match => match.teams.away.id === selectedMatch.teams.away.id)
          setConfHomeMatches(homeMatches2.slice(0, matchCount))
          setConfAwayMatches(awayMatches2.slice(0, matchCount))
        }
        filterFunction()
      } else {
        setConfHomeMatches(homeMatches2.slice(0, matchCount))
        setConfAwayMatches(awayMatches2.slice(0, matchCount))
      }
    }
  }, [matchCount, homeMatches, awayMatches, sameLeague, selectedMatch, homeAway])

  return (
    <div className="col">
      {selectedMatch === null ? (
        <div className="col text-center py-5">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="col">
          <div className="col bg-white rounded-3 shadow-sm p-2">
            <div className="col">
              <CountryAndLeague match={selectedMatch} />
            </div>
            <div className="col">
              <TeamNames match={selectedMatch} />
            </div>
          </div>
          <div className="col bg-white rounded-3 shadow-sm p-2 mt-2 sticky-top">
            <ConfigDetail sameLeague={sameLeague} setSameLeague={setSameLeague} homeAway={homeAway} setHomeAway={setHomeAway} matchCount={matchCount} setMatchCount={setMatchCount} />
          </div>
          <div className="col bg-white rounded-3 shadow-sm p-2 mt-2">
            <Stats homeTeam={selectedMatch.teams.home} awayTeam={selectedMatch.teams.away} homeMatches={confHomeMatches} awayMatches={confAwayMatches} />
          </div>
        </div>
      )}
    </div>
  )
}

export default MatchDetail
