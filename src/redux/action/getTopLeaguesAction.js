import axios from "axios"

import { setTopLeagues } from "../topLeaguesReducer"

export const GetTopLeagues = () => {
  return async dispatch => {
    const getLeagues = async () => {
      const response = await axios(process.env.REACT_APP_DB_HOST + "topLeaguesInfo/")
      dispatch(setTopLeagues(response.data))
    }
    try {
      await getLeagues()
    } catch (err) {
      console.log(err)
    }
  }
}
