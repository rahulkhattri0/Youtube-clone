import React, { useEffect, useState } from 'react'
import { YOUTUBE_VID_API } from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import Shimmer from './Shimmer'

const VideoContainer = () => {
    const [videos,setVideos] = useState([])
    useEffect(()=>{
        getVideos()
    },[])
    const getVideos = async () =>{
        const response = await fetch(YOUTUBE_VID_API)
        const data = await response.json()
        console.log(data)
        setVideos(data.items)
    }
  return (
    <div className='flex flex-wrap justify-center items-baseline mt-24'>
        {
            videos.length === 0 ? <Shimmer/> : (
                videos.map((video)=>
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