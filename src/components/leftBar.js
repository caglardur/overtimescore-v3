import Filter from "./left-bar/filter"
import Header from "./left-bar/header"

const LeftBar = () => {
  return (
    <div className="col">
      <Header />
      <Filter />
    </div>
  )
}

export default LeftBar
