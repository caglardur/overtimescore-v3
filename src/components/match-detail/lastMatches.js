import LastSixMatches from "./last-matches/lastSixMatches"

const LastMatches = ({ homeTeam, awayTeam, homeMatches, awayMatches }) => {
  return (
    <div className="col" style={{ fontSize: "12px" }}>
      {homeMatches && awayMatches ? (
        <div className="row">
          <LastSixMatches team={homeTeam} matches={homeMatches} />
          <LastSixMatches team={awayTeam} matches={awayMatches} />
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

export default LastMatches
