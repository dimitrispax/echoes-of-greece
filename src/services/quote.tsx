import axios from 'axios'

const baseUrl = import.meta.env.VITE_BASE_URL

/* Function that gets a Quote from the server */
const getQuote = async () => {
  const response = await axios.get(`${baseUrl}/quote`)
  return response.data
}

export default {getQuote}
