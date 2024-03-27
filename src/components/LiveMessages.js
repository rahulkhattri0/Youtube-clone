import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChatMessages from './ChatMessages'
import { addMessages, resetMessages } from '../redux/slices/chatSlice'
import { RANDOM_MESSAGE_API, RANDOM_NAME_API } from '../utils/constants'


const LiveMessages = () => {
    const chatMessages = useSelector((store)=>store.chat.messages)
    const dispatch = useDispatch()
    useEffect(()=>{
        const addToChat = async () => {
            try {
                const key = process.env.REACT_APP_RANDOM_NAME_KEY
                const responses = await Promise.all([fetch(RANDOM_NAME_API,{
                    headers : {
                    "X-Api-Key" : key
                    }
                }),fetch(RANDOM_MESSAGE_API)])
                const data = await Promise.all([responses[0].json(),responses[1].json()])
                const dataName = data[0]
                const dataText = data[1]
                dispatch(addMessages({
                    name : dataName[0],
                    text : dataText[0]
                }))
            } catch (error) {
                console.log(error)   
            }
        }
        // APi polling - basically mimicing waht youtube does - fetch chat messages after a interval of time
        const interval = setInterval(()=>{
            addToChat() 
        },1500)
        return () => {
            dispatch(resetMessages())
            clearInterval(interval)
        }
    },[dispatch])
  return (
    <>
        {
            chatMessages.map((message) => {
                return <ChatMessages key={message.id} message={message.message} />
            })
        }
    </>
  )
}

export default LiveMessages