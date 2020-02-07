import axios from 'axios'

export default ({url, start, limit}) => {
  return axios.get(`${url}`, {
    params: {
      _start: start,
      _limit: limit
    }
  })
  .then(response => {
    return response.data.map(({title, body}) => ({display: title, value: body}))
  })
}