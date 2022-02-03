import { Link } from "react-router-dom"

const SingleTopLeague = ({ league }) => {
  return (
    <Link to={"league/" + league.id}>
      <div type="button" className="row align-items-center rounded-pill bg-light m-1 mb-2">
        <div className="col-auto d-flex justify-content-center bg-white shadow-sm rounded-circle p-2" style={{ width: "36px", height: "36px" }}>
          <img src={league.logo || "world.jpg"} className="img-fluid rounded" alt={league.name} />
        </div>
        <div className="col">{league.name}</div>
      </div>
    </Link>
  )
}

export default SingleTopLeague
