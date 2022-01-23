import { useSelector } from "react-redux"

const MatchList = () => {
  const selectedMatch = useSelector(state => state.match)
  const { selectedDate } = useSelector(state => state.date)

  return (
    <div className="col bg-white mt-2 rounded-3 shadow-sm p-2">
      {selectedMatch[selectedDate].isLoading ? (
        <div className="col text-center py-5">
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        selectedMatch[selectedDate].match.map(match => (
          <div className="col" key={match.fixture.id}>
            {match.league.country + ":" + match.teams.home.name + " : " + match.teams.away.name}
          </div>
        ))
      )}
    </div>
  )
}

export default MatchList
