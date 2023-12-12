import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom";
import LiveMessages from './LiveMessages';
import { useDispatch } from 'react-redux';
import { addMessages } from '../redux/slices/chatSlice';
import CommentBox from './CommentBox';
const WatchPage = () => {
  
  const [searchParams] = useSearchParams()
  const vidId = searchParams.get("v")
  const [liveMsg,setLiveMsg] = useState("")
  const dispatch = useDispatch()
  return (
    <>
      <div className='m-2 p-2 mt-24 lg:flex-row md:flex-row flex-col flex gap-x-1 gap-y-2'>
          <iframe width="1200"
          height="600" 
          src={"https://www.youtube.com/embed/" + vidId }
          className='lg:w-[70%] md:w-[60%] w-[100%]'
          title="..." allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
          </iframe>
          <div className='lg:w-[30%] md:w-[40%] w-[100%] bg-slate-200 rounded-lg flex flex-col gap-y-1 justify-between'>
              <p className='border bg-white border-black rounded-md p-1'>Live Chat</p>
              <div className='h-[530px] overflow-y-scroll flex flex-col-reverse'>
                <LiveMessages/>
              </div>
              <div className='flex rounded-md'>
                <form onSubmit={
                  (event)=>{
                    event.preventDefault()
                    liveMsg.length>0 &&
                    dispatch(addMessages({
                      name : "Rahul Khattri",
                      text : liveMsg
                    }))
                    setLiveMsg("")
                  }
                }
                className='w-full'>
                  <input type='text'
                  className='w-[80%] border border-black'
                  placeholder='chat...'
                  value={liveMsg}
                  onChange={(event)=>setLiveMsg(event.target.value)}
                  />
                  <button 
                  className='p-1 bg-green-300 text-white rounded-md w-[20%]'
                  type='submit'>Send</button>
                </form>
              </div>
          </div>
      </div>
      <CommentBox/>
    </>
  )
}

export default WatchPage

