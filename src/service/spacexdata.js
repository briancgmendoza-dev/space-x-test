import axios from 'axios'

export const getSpacexData = async () => {
  const URL = 'https://api.spacexdata.com/v3/launches'
  return await axios.get(URL)
}
