const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
export const YOUTUBE_VID_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=IN&key=" + GOOGLE_API_KEY
export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_SEARCH_VIDS = `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&type=video&key=${GOOGLE_API_KEY}&part=snippet&q=`
export const RANDOM_NAME_API = 'https://randommer.io/api/Name?nameType=firstname&quantity=1'
export const RANDOM_MESSAGE_API = 'https://random-word-api.herokuapp.com/word'
