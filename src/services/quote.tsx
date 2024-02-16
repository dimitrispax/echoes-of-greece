import axios from 'axios'

const baseUrl = '/api/'

/* Function that gets a Quote from the server */
const getQuote = async () => {
  const response = await axios.get(`${baseUrl}/quote`)
  return response.data
}

export default {getQuote}
