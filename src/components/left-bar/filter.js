import { useSelector } from "react-redux"
import SingleCountry from "./country-filter/singleCountry"

const Filter = () => {
  const selectedMatch = useSelector(state => state.match)
  const { selectedDate } = useSelector(state => state.date)

  console.log(selectedMatch[selectedDate].countryArray)

  return (
    <div className="col bg-white mt-2 rounded-3 shadow-sm p-2">
      {selectedMatch[selectedDate].countryArray.map((country, index) => (
        <div className="col" key={index}>
          <SingleCountry country={country} />
        </div>
      ))}
    </div>
  )
}

export default Filter
