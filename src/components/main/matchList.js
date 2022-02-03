import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import SingleMatch from "./maches/singleMatch"

const MatchList = ({ teamSearch }) => {
  const [toDaysMatches, setToDaysMatches] = useState([])
  const selectedMatch = useSelector(state => state.match)
  const { selectedDate } = useSelector(state => state.date)
  const selectedLeague = useSelector(state => state.match[selectedDate].selectedLeague)

  useEffect(() => {
    if (selectedLeague) {
      setToDaysMatches(selectedMatch[selectedDate].match.filter(match => match.league.id === selectedLeague))
    } else if (teamSearch && teamSearch.length > 2) {
      setToDaysMatches(selectedMatch[selectedDate].match.filter(match => match.teams.home.name.toUpperCase().includes(teamSearch.toUpperCase()) || match.teams.away.name.toUpperCase().includes(teamSearch.toUpperCase())))
    } else {
      setToDaysMatches(selectedMatch[selectedDate].match)
    }
  }, [selectedLeague, selectedMatch, selectedDate, teamSearch])

  return (
    <div className="col bg-white mt-2 rounded-3 shadow-sm p-2">
      {selectedMatch[selectedDate].isLoading ? (
        <div className="col text-center py-5">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        toDaysMatches.map((match, index) => (
          <div key={index}>
            <SingleMatch match={match} oldMatch={index === 0 ? false : toDaysMatches[index - 1]} selectedDate={selectedDate} selectedLeague={selectedLeague} />
          </div>
        ))
      )}
    </div>
  )
}

export default MatchList
