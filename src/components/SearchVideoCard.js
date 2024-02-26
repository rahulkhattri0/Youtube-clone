import React from 'react'

const SearchVideoCard = ({info}) => {
    console.log(info)
    const {snippet} = info
    const {channelTitle,title,description,thumbnails,publishTime} = snippet
    const date = publishTime.split("T")[0]
  return (
    <div className='border border-slate-300 rounded-md m-2 p-2 dark:text-white dark:bg-gray-800'>
        <div className='flex lg:flex-row md:flex-row flex-col gap-y-1 gap-x-1'>
            <img 
            src={thumbnails.medium.url}
            alt='Thumbnail img'
            className='rounded-md'
            />
            <div className='flex flex-col gap-y-2'>
                <p className='text-lg font-extrabold'>{title}</p>
                <p className='text-md'>{channelTitle}</p>
                <p className='text-sm'>{description}</p>
                <p className='mt-2 text-xs'>Uploaded on: {date}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchVideoCard