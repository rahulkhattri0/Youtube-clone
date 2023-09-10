import React from 'react'
import {BiUserCircle} from 'react-icons/bi'
const ChatMessages = ({message}) => {
  return (
    <div className='flex gap-x-1 items-center p-2 border border-b-slate-300'>
        <BiUserCircle className='text-2xl'/>
        <p className='font-bold text-md'>{message.name}</p>
        <p>{message.text}</p>
    </div>
  )
}

export default ChatMessages