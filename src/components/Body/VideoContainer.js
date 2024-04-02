import React, { useEffect, useMemo, useState } from 'react'
import { YOUTUBE_VID_API } from '../../utils/constants'
import VideoCard from './VideoCard'
import { Link, useSearchParams } from 'react-router-dom'
import Shimmer from '../Common/Shimmer'

const VideoContainer = () => {
    const [videos,setVideos] = useState([])
    const [searchParams] = useSearchParams()
    const sortParam = searchParams.get('sort')

    useEffect(()=>{
        const getVideos = async () =>{
            const response = await fetch(YOUTUBE_VID_API)
            const data = await response.json()
            console.log(data)
            setVideos(data.items)
        }
        getVideos()
    },[])
    

    const finalVideos = useMemo(()=>{
        if(!sortParam) return videos
        else if(sortParam==='Asc') return [...videos].sort((a,b)=>Number(a.statistics.viewCount) - Number(b.statistics.viewCount))
        else if(sortParam==='Desc') return [...videos].sort((a,b)=>Number(b.statistics.viewCount) - Number(a.statistics.viewCount))     
    },[videos,sortParam])


  return (
    <div className='flex flex-wrap justify-center'>
        {
            videos.length === 0 ? <Shimmer/> : (
                finalVideos.map((video)=>
                <Link key={video.id} to={`/watch?v=${video.id}`}>
                    <VideoCard info={video}/>
                </Link>
            )
            )
        }
    </div>
  )
}

export default VideoContainer