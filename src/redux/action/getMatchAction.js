import axios from "axios"

import { setMatch } from "../matchReducer"

export const GetMatchAction = ({ selectedDate, nextMatches }) => {
  return async dispatch => {
    const getMatches = async () => {
      const canceledMatchCode = ["SUSP", "INT", "PST", "CANC", "ABD", "AWD", "WO"]
      const date = new Date(new Date().setDate(new Date().getDate() + selectedDate - 2)).toLocaleString()

      const fetchYear = date.slice(6, 10)
      const fetchMonth = date.slice(3, 5)
      const fetchDay = date.slice(0, 2)
      const response = await axios(process.env.REACT_APP_DB_HOST + "matchesByDate/" + fetchYear + "-" + fetchMonth + "-" + fetchDay + "/m180")
      if (response.data.matches) {
        response.data.matches.sort((a, b) => {
          if (a.league.id < b.league.id) {
            return -1
          }
          if (a.league.id > b.league.id) {
            return +1
          }
          return 0
        })
        response.data.matches.sort((a, b) => {
          if (a.fixture.date < b.fixture.date) {
            return -1
          }
          if (a.fixture.date > b.fixture.date) {
            return +1
          }
          return 0
        })
      }
      const notCanceledMatches = response.data.matches.filter(match => !canceledMatchCode.includes(match.fixture.status.short))
      let countryArray = []
      if (notCanceledMatches) {
        notCanceledMatches.map(match => {
          const countryIndex = countryArray.findIndex(country => country.country === match.league.country)
          if (countryIndex < 0) {
            return countryArray.push({ country: match.league.country, flag: match.league.flag, leagues: [{ league: match.league.name, id: match.league.id, matchCount: 1, logo: match.league.logo }], id: countryArray.length })
          } else {
            const leagueIndex = countryArray[countryIndex].leagues.findIndex(league => league.id === match.league.id)
            if (leagueIndex < 0) {
              return countryArray[countryIndex].leagues.push({ league: match.league.name, id: match.league.id, matchCount: 1, logo: match.league.logo })
            } else {
              return (countryArray[countryIndex].leagues[leagueIndex].matchCount += 1)
            }
          }
        })
      }
      countryArray.map(country => country.leagues.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0)))
      countryArray.sort((a, b) => (a.country > b.country ? 1 : b.country > a.country ? -1 : 0))
      const topLeagues = []
      const topLeaguesIds = [40, 39, 61, 144, 135, 140]
      if (notCanceledMatches) {
        notCanceledMatches.forEach(match => {
          if (topLeaguesIds.includes(match.league.id)) {
            const leagueIndex = topLeagues.findIndex(league => league.id === match.league.id)
            if (leagueIndex === -1) {
              topLeagues.push(match.league)
            }
          }
        })
      }
      if (topLeagues.length > 1) {
        topLeagues.sort((a, b) => {
          if (a.id < b.id) {
            return -1
          }
          if (a.id > b.id) {
            return +1
          }
          return 0
        })
      }

      dispatch(setMatch({ matches: notCanceledMatches, date: selectedDate, countryArray: countryArray, topLeagues: topLeagues }))
    }
    try {
      await getMatches()
    } catch (err) {
      console.log(err)
    }
  }
}
