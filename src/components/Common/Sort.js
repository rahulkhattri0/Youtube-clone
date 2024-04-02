import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Sort = ({data,heading}) => {
    const [searchParams,setSearchParams] = useSearchParams()
    const searchParam = searchParams.get('sort')
  return (
    <div className='flex justify-center md:justify-end items-center gap-4'>
        <p className='dark:text-white text-lg'>Sort By <span className='text-red-500'>{heading}</span></p>
        <div 
            className='flex flex-row gap-x-2 items-center m-2 rounded-md border-2 border-red-500 dark:text-white p-2'
        >
            {
                data.map((item,idx)=> <p 
                    key={idx} 
                    className={`${searchParam===item.value ? 'bg-opacity-100' : 'bg-opacity-0'} transition-all duration-500 bg-red-500  rounded-md p-2 cursor-pointer`} 
                    onClick={()=>setSearchParams({sort:item.value})}
                >{item.label}</p>)
            }
        </div>
    </div>
    
  )
}

export default Sort