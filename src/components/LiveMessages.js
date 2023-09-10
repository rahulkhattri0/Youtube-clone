import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChatMessages from './ChatMessages'
import { addMessages, resetMessages } from '../redux/slices/chatSlice'
import { RANDOM_MESSAGE_API, RANDOM_NAME_API } from '../utils/constants'
import { generateString } from '../utils/idGenerator'
const LiveMessages = () => {
    const chatMessages = useSelector((store)=>store.chat.messages)
    const dispatch = useDispatch()
    useEffect(()=>{
        //APi polling - basically mimicing waht youtube does - fetch chat messages after a interval of time
        const interval = setInterval(()=>{
            addToChat() 
        },1500)
        return () => {
            dispatch(resetMessages())
            clearInterval(interval)
        }
    },[])
    const addToChat = async () => {
        const key = process.env.REACT_APP_RANDOM_NAME_KEY
        const resName = await fetch(RANDOM_NAME_API,{
            headers : {
            "X-Api-Key" : key
            }
        })
        const dataName = await resName.json()
        const resText = await fetch(RANDOM_MESSAGE_API)
        const dataText = await resText.json()
        dispatch(addMessages({
            name : dataName[0],
            text : dataText[0]
        }))
    }
  return (
    <>
        {
            chatMessages.map((message) => {
                return <ChatMessages key={generateString(6)} message={message} />
            })
        }
    </>
  )
}

export default LiveMessages