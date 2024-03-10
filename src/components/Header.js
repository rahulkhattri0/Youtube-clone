import React, { useEffect, useReducer, useState } from 'react'
import ytlogo_dark from '../assets/ytlogo-dark.png'
import ytlogo_light from '../assets/ytlogo-light.png'
import {ImSearch} from 'react-icons/im'
import { Link, useNavigate } from 'react-router-dom'
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from '../utils/constants'
import {BiSearchAlt} from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { addEntry } from '../redux/slices/cacheResults'
import { MdOutlineDarkMode } from "react-icons/md";
import { toggleDarkTheme } from '../redux/slices/darkModeSlice'
import { FaRegUserCircle } from "react-icons/fa";
import { suggestionsReducer } from '../reducers/suggestionsReducer'
import { CiLight } from "react-icons/ci";
import WhosWatching from './WhosWatching'
const Header = () => {
    const navigate = useNavigate()
    const [searchQuery,setSearchQuery] = useState("")
    const [suggestions,setSuggestions] = useState([])
    const [activeSuggestion,activeSuggestionDispatch] = useReducer(suggestionsReducer,-1)
    const [whosWatching,setwhosWatching] = useState(false)
    const cacheResults = useSelector((store)=>store.cacheResults)
    const dispatch = useDispatch()
    const theme = useSelector((store)=>store.darkMode.theme)
    /*debouncing logic
    useEffect will we called after every re-render(basically when search query changes) 
    and the timer will be created but if the user presses a key
    in that 200ms time frame,
    the component will re-render and the cleanup function will be called,
    eventually clearing that previous timer and then calling the useEffect function to create a timer,
    now if the user does not press any key in that 200ms time,the API CALL IS MADE.
    */
   useEffect(()=>{
    const timer = setTimeout(()=>{
            activeSuggestionDispatch({type:'reset'})
            if(!searchQuery){
                setSuggestions([])
            }
            else{
                if(cacheResults[searchQuery]){
                    setSuggestions(cacheResults[searchQuery])
                }
                else{
                    getSuggestions()
                }
            }        
        },200)
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
    dispatch(addEntry({
        [searchQuery] : data[1]
    }))
   }
   function handleKeyDown(event){
    if(suggestions.length>0){
        if(event.key==='ArrowUp'){
            activeSuggestionDispatch({type:'prev',payload:suggestions.length})
        }
        else if(event.key==='ArrowDown'){
            activeSuggestionDispatch({type:'next',payload:suggestions.length})
        }
    }
    if(event.key==='Enter'){
        handleNavigateToSearchPage(activeSuggestionDispatch,navigate,setSearchQuery,activeSuggestion>=0 ? suggestions[activeSuggestion] : searchQuery)        
    }
   }
   function handleNavigateToSearchPage(activeSuggestionDispatch,navigate,setSearchQuery,searchQuery){
        if(searchQuery){
            activeSuggestionDispatch({type:'reset'})
            setSearchQuery('')
            navigate(`results?search_query=${searchQuery}`)
        }
   }
  return (
        <div className='flex flex-row justify-between items-center p-2 shadow-lg fixed z-10 top-0 w-full bg-white dark:bg-gray-700'>
            <Link to={"/"}>
                <img
                src={theme==='dark' ? ytlogo_dark : ytlogo_light}
                alt='yt-logo'
                className='h-14'
                />
            </Link>
            <div className='w-1/2 flex flex-row'>
                <input type='text' 
                className='w-full border rounded-l-full border-gray-200 dark:bg-gray-500 dark:text-white p-2'
                value={searchQuery}
                onChange={(event)=>setSearchQuery(event.target.value)}
                placeholder='Enter what you want to search...'
                onKeyDown={handleKeyDown}
                onBlur={()=>{
                    activeSuggestionDispatch({type:'reset'})
                }}
                />
                <button className='p-2 border-gray-200 rounded-r-full bg-gray-200' onClick={()=>{
                    handleNavigateToSearchPage(activeSuggestionDispatch,navigate,setSearchQuery,searchQuery)
                }}>
                    <ImSearch/>
                </button>
            </div>
            <div className='flex flex-row gap-x-2 items-center text-3xl'>
                <div onClick={()=>dispatch(toggleDarkTheme())} className='cursor-pointer font-bold dark:text-white'>
                    {theme==='dark' ? <MdOutlineDarkMode/> : <CiLight/>}
                </div>
                <FaRegUserCircle className='dark:text-white text-3xl cursor-pointer' onClick={()=>setwhosWatching(true)}/>
            </div>
            
            {
                suggestions.length>0 && (
                    <div className='bg-white z-10 absolute left-1/2 transform -translate-x-1/2 top-20 mx-auto w-1/2 rounded-md shadow-md dark:bg-gray-700 dark:text-white'>
                        {
                            suggestions.map((suggestion,idx)=>{
                                return (
                                    <div key={idx} 
                                    className={`cursor-pointer flex gap-x-1 items-center hover:bg-slate-300 border-b-2 border-gray-200 m-2 p-1 rounded-md ${activeSuggestion===idx ? 'bg-slate-400' : ''}`}
                                    onClick={()=>{
                                            handleNavigateToSearchPage(activeSuggestionDispatch,navigate,setSearchQuery,suggestion)
                                    }}>
                                        <BiSearchAlt/>
                                        <p>{suggestion}</p>
                                    </div>  
                                )
                                
                            })
                        }
                    </div>
                )
            }
            {whosWatching && <WhosWatching setWhosWatching={setwhosWatching}/>}
        </div>
       
  )
}

export default Header