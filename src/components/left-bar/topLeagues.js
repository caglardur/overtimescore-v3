import SingleTopLeague from "./singleTopLeague"

const TopLeagues = ({ topLeagues }) => {
  return (
    <div className="col bg-white mt-2 rounded-3 shadow-sm p-2">
      <div className="col fw-bold p-2" style={{ fontSize: "12px", color: "#2a2a48" }}>
        TOP LEAGUES
      </div>
      <div className="col p-2">
        {topLeagues &&
          topLeagues.map((league, index) => (
            <div key={index}>
              <SingleTopLeague league={league} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default TopLeagues
