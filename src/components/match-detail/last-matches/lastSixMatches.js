import SingleLastMatch from "./singleLastMatch"

const LastSixMatches = ({ team, matches }) => {
  return (
    <div className="col">
      <div className="col text-center fw-bold">{team.name} Last Matches</div>
      {matches &&
        matches.map((match, index) => (
          <div key={index}>
            <SingleLastMatch team={team} match={match} />
          </div>
        ))}
    </div>
  )
}

export default LastSixMatches
