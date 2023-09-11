import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { YOUTUBE_SEARCH_VIDS } from '../utils/constants'
import SearchVideoCard from './SearchVideoCard'

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
    <div className='flex flex-col mx-auto mt-24 w-[90%]'>
        {
            searchResults.map((res)=>{
                return (
                    <Link to={'/watch?v='+res.id.videoId} key={res.id.videoId}>
                        <SearchVideoCard info={res}/>
                    </Link>
                )
            })
        }
    </div>
  )
}

export default SearchResults