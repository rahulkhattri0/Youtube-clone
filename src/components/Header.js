import React, { useEffect, useState } from 'react'
import ytlogo from '../assets/ytlogo.jpg'
import user from '../assets/user.jpg'
import {ImSearch} from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from '../utils/constants'
import {BiSearchAlt} from 'react-icons/bi'
const Header = () => {
    const navigate = useNavigate()
    const [searchQuery,setSearchQuery] = useState("")
    const [suggestions,setSuggestions] = useState([])
    /*debouncing logic
    useEffect will we called after every re-render(basically when search query changes) 
    and the timer will be created but if the user presses a key
    in that 200ms time frame,
    the component will re-render and the cleanup function will be called,
    eventually clearing that previous timer and now when the component is re-rendered
    a new timer is created,which waits for 200ms and after 200ms makes the
    */
   useEffect(()=>{
    const timer = setTimeout(()=>getSuggestions(),200)
    return () => {
        clearTimeout(timer)
    }
   },[searchQuery])
   const getSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery)
    console.log("made the api call",response)
    const data = await response.json()
    console.log(data[1]) 
    setSuggestions(data[1])
   }
  return (
        <div className='flex flex-row justify-between items-center p-2 shadow-lg fixed top-0 w-full bg-white'>
            <Link to={"/"}>
                <img
                src={ytlogo}
                alt='yt-logo'
                className='h-14'
                />
            </Link>
            <div className='w-1/2 flex flex-row'>
                <input type='text' 
                className='w-full border rounded-l-full border-gray-200 p-2'
                value={searchQuery}
                onChange={(event)=>setSearchQuery(event.target.value)}
                placeholder='Enter what you want to search...'
                />
                <button className='p-2 border-gray-200 rounded-r-full bg-gray-200' onClick={()=>{
                    setSearchQuery("")
                    navigate(`results?search_query=${searchQuery}`)
                }}>
                    <ImSearch/>
                </button>
            </div>
            <img
                src={user}
                alt='user'
                className='h-10'
            />
            {
                suggestions.length>0 && (
                    <div className='bg-white z-10 absolute left-1/2 transform -translate-x-1/2 top-20 mx-auto w-1/2 rounded-md shadow-md'>
                        {
                            suggestions.map((suggestion,idx)=>{
                                return (
                                    <Link key={idx} to={`results?search_query=${suggestion}`}>
                                        <div className='flex gap-x-1 items-center hover:bg-slate-300 border-b-2 border-gray-200 m-2 p-1 rounded-md'>
                                            <BiSearchAlt/>
                                            <p onClick={()=>setSearchQuery("")}>{suggestion}</p>
                                        </div>
                                    </Link>     
                                )
                                
                            })
                        }
                    </div>
                )
            }
        </div>
       
  )
}

export default Header