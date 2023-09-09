import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDS } from '../utils/constants'
import VideoCard from './VideoCard'

const SearchResults = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get("search_query")
    const [searchResults,setSearchResults] = useState([])
    useEffect(()=>{
        fetchResults()
    },[query])
    const fetchResults = async () => {
        console.log(query)
        const response = await fetch(YOUTUBE_SEARCH_VIDS + query)
        const data = await response.json()
        console.log("search res",data)
        setSearchResults(data.items)
    }
  return (
    <div className='flex flex-col items-center mt-24'>
        {
            searchResults.map((res)=>{
                return (
                    <VideoCard key={res.id.videoId} info={res}/>
                )
            })
        }
    </div>
  )
}

export default SearchResults