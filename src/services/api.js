import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.SERVICE_PRODUCTION_URL || `http://localhost:3000/`,
    headers: {
      Authorization: `Bearer token`
    }
  })
}
