import React from 'react'
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const vidId = searchParams.get("v")
  return (
    <div className='m-2 p-2 mt-24'>
        <iframe width="1200"
         height="600" 
         src={"https://www.youtube.com/embed/" + vidId }
         title="..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
         </iframe>
    </div>
  )
}

export default WatchPage