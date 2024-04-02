import React from 'react'
import VideoContainer from './VideoContainer'
import Sort from '../Common/Sort'
import { sortBy } from '../../utils/constants'



const Body = () => {
  return (
    <div className='flex flex-col gap-4 mt-24'>
        <Sort data={sortBy} heading={'Views'}/>
        <VideoContainer/>
    </div>
  )
}

export default Body