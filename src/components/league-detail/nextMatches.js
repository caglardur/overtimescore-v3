import SingleNextMatch from "./singleNextMatch"

const NextMatches = ({ nextMatches }) => {
  return (
    <div className="col p-2">
      {nextMatches.length === 0 && <div className="col text-center my-4">not found</div>}
      {nextMatches.map((match, index) => (
        <div className="col" key={index}>
          <SingleNextMatch match={match} beforeMatch={index === 0 ? null : nextMatches[index - 1]} />
        </div>
      ))}
    </div>
  )
}

export default NextMatches
