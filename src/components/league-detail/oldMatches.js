import SingleNextMatch from "./singleNextMatch"

const OldMatches = ({ oldMatches }) => {
  return (
    <div className="col p-2">
      {oldMatches && oldMatches.length === 0 && <div className="col text-center">not found</div>}
      {oldMatches &&
        oldMatches.map((match, index) => (
          <div className="col" key={index}>
            <SingleNextMatch match={match} beforeMatch={index === 0 ? null : oldMatches[index - 1]} />
          </div>
        ))}
    </div>
  )
}

export default OldMatches
