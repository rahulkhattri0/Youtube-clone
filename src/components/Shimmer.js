import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        {/* can use index as key here - better than not having a key at all */}
        {
            Array(20).fill("").map((element,index)=><div key={index} className='card-style bg-gray-300'></div>)
        }
    </div>
  )
}

export default Shimmer