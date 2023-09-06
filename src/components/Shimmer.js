import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap justify-center'>
        {
            Array(20).fill("").map((element)=><div className='card-style bg-gray-300'></div>)
        }
    </div>
  )
}

export default Shimmer