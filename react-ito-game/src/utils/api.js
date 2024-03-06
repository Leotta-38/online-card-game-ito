import axios from 'axios'

async function checkWsConnect(username) {
  const result = await axios.get(`/api/room/${username}`)
  return result.data
}

export default checkWsConnect