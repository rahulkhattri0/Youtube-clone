import React, { useEffect, useRef } from 'react'
import whowatching from '../assets/whowatching.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosLogOut } from "react-icons/io";
import { addUserName, logout } from '../redux/slices/userSlice';
import tudum from '../assets/tudum.webm'
import useClickoutside from '../hooks/useClickOutside';

const WhosWatching = ({setWhosWatching}) => {
    const username = useSelector((store)=>store.user.username)
    const dispatch = useDispatch()
    const whosWatchingRef = useClickoutside(()=>setWhosWatching(false),true)
    useEffect(()=>{
        const audio = new Audio(tudum)
        audio.play()
        return () => audio.pause()
    },[])
    function handleWhosWatching(event){
        if(event.key==='Enter'){
            const value = event.target.value.trim()
            if(value){
                dispatch(addUserName(value))
                setWhosWatching(false)
            }
        }
    }
  return (
    <div className='fixed inset-0 z-30 bg-slate-400 bg-opacity-50 flex items-center justify-center'>
        <div ref={whosWatchingRef} className='bg-white text-black rounded-lg p-4 dark:bg-black dark:text-white flex flex-col gap-4 items-center'>
            <p className='text-lg font-bold'>Who's Watching?</p>
            <div className='flex flex-row items-center gap-4'>
                <div className='flex flex-col gap-4 items-center'>
                    <img src={whowatching} alt='who watching' width={100} height={100}/>
                    {username ? <p>{username}</p> : <input onKeyDown={handleWhosWatching} placeholder='Enter Name...' autoFocus className='p-1 bg-gray-200 dark:bg-gray-500 rounded-md'/>}
                </div>
                {
                    username && <div onClick={()=>{
                            dispatch(logout())
                            setWhosWatching(false)
                        }
                    } className='border-2 cursor-pointer h-[30%] mb-10 border-gray-500 aspect-square rounded-full p-4'>
                        <IoIosLogOut className='text-4xl'/>
                    </div>
                }
            </div>
            
        </div>
    </div>
  )
}

export default WhosWatching