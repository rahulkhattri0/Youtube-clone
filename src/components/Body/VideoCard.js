import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info
    const { channelTitle, title, thumbnails } = snippet
  return (
    <div className='card-style dark:text-white dark:bg-gray-800 rounded-md'>
        <img src= {thumbnails.medium.url} alt='thumnail' className='rounded-md'/>
        <div className='flex flex-col gap-y-1'>
            <p className='font-bold'>{title}</p>
            <p>{channelTitle}</p>
            <p className='text-sm'>{statistics?.viewCount + " views"}</p>
        </div>
    </div>
  )
}

export default VideoCard