
import axios from "axios"

const API_KEY = 'AIzaSyCEWC1Pw1or4TWobg0xRnpKBramw64bTTk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: API_KEY
    }
});