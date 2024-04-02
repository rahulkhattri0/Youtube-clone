const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
export const YOUTUBE_VID_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + GOOGLE_API_KEY
export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://api.addsearch.com/v1/suggest/1bed1ffde465fddba2a53ad3ce69e6c2?term="
export const YOUTUBE_SEARCH_VIDS = `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&type=video&key=${GOOGLE_API_KEY}&part=snippet&q=`
export const RANDOM_NAME_API = 'https://randommer.io/api/Name?nameType=firstname&quantity=1'
export const RANDOM_MESSAGE_API = 'https://random-word-api.vercel.app/api?words=1'

export const sortBy = [
    {
        label : 'Descending',
        value : 'Desc'
    },
    {
        label : 'Ascending',
        value : 'Asc'
    }
]