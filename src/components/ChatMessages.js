import React from 'react'
import {BiUserCircle} from 'react-icons/bi'
import { useSelector } from 'react-redux'
const ChatMessages = ({message}) => {
  const username = useSelector((store)=>store.user.username)
  return (
    <div className='flex gap-x-1 items-center p-2 border border-b-slate-300'>
        <BiUserCircle className='text-2xl'/>
        <p className='font-bold text-md'>{message.name==='user' ? (username ?? 'Guest') : message.name}</p>
        <p>{message.text}</p>
    </div>
  )
}

export default ChatMessages