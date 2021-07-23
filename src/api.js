import axios from 'axios'

 const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v/",
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export default request