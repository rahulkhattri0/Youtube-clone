import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info
    const { channelTitle, title, thumbnails } = snippet
  return (
    <div className='card-style'>
        <img src= {thumbnails.medium.url} alt='thumnail' className='rounded-md'/>
        <div className='flex flex-col gap-y-1'>
            <p className='font-bold'>{title}</p>
            <p>{channelTitle}</p>
            <p>{statistics.viewCount}</p>
        </div>
    </div>
  )
}

export default VideoCard