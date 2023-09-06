import React from 'react'
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
  const [searchParams] = useSearchParams()
  const vidId = searchParams.get("v")
  return (
    <div className='m-2 p-2'>
        <iframe width="1200"
         height="600" 
         src={"https://www.youtube.com/embed/" + vidId }
         title="First Day at Microsoft Bangalore 💯 | Day in the life working from Bangalore office" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
         </iframe>
    </div>
  )
}

export default WatchPage