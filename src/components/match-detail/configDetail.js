const ConfigDetail = ({ sameLeague, setSameLeague, homeAway, setHomeAway, matchCount, setMatchCount }) => {
  return (
    <div className="col p-3">
      <div className="col fw-bold mb-3" style={{ fontSize: "12px" }}>
        STATS CONFIG
      </div>
      <div className="row">
        <div className="col">
          <div className="col">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="Switch1" checked={sameLeague} onChange={e => setSameLeague(e.target.checked)} />
              <label className="form-check-label" htmlFor="Switch1">
                Same League
              </label>
            </div>
          </div>
          <div className="col">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="Switch2" checked={homeAway} onChange={e => setHomeAway(e.target.checked)} />
              <label className="form-check-label" htmlFor="Switch2">
                Home/Away stats
              </label>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="form-check form-switch">
            <label className="form-check-label" htmlFor="Switch2">
              Match Count: {matchCount}
            </label>
            <input type="range" className="form-range" min="4" max="10" id="customRange2" value={matchCount} onChange={e => setMatchCount(parseInt(e.target.value))} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfigDetail
