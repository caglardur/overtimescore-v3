import { Link } from "react-router-dom"

const Header = () => {
  return (
    <Link to="/">
      <div type="button" className="col rounded-3 shadow-sm fs-4 text-center p-2 text-white bg-gradient" style={{ maxWidth: "960px", backgroundColor: "#2A2A48" }}>
        Overtime Score
      </div>
    </Link>
  )
}

export default Header
