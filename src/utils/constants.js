const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
console.log(GOOGLE_API_KEY)
export const YOUTUBE_VID_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" + GOOGLE_API_KEY