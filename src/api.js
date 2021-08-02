import axios from 'axios'

 const request = axios.create({
   baseURL: "https://youtube.googleapis.com/youtube/v3/",
   params: {
     key: "AIzaSyD0tTxvbx - UhZ61t2e6gyFvCWfdZtM9C3E",
   },
 });

export default request