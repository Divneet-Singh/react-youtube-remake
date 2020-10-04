import axios from "axios";

const KEY = "AIzaSyDqSzb_r0d1Bxq5y5O0qihTZfCntuQqz9U"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})