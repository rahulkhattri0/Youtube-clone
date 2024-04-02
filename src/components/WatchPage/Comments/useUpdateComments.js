import { useState } from "react"

export const useUpdateComments = () =>{

    const [status,setStatus] = useState(null)
  function getUpdatedComments(root_id,comments,text,id){
    const updatedComments = []
    for(const rootComment of comments){
      if(status==='Delete' && rootComment.id===id) return comments.filter((comment)=>comment.id!==id)
      else{
        if(rootComment.root_id===root_id){
          updatedComments.push(handleCrudOperations(rootComment,id,text,[false]))
        }
        else updatedComments.push(rootComment)
      }
    }
    return updatedComments
  }


  function handleCrudOperations(comment,id,text,foundFlag){
    if(foundFlag[0]) return comment;
    if(comment.id===id){
      foundFlag[0] = true
      if(status==='Add') return {
        ...comment,
        replies : [
          ...comment.replies,
          {
            id : Date.now(),
            text : text,
            replies : []
          }
        ]
      }
      else if(status === 'Edit') return {
        ...comment,
        text : text
      }
    }

    let updatedReplies = []

    for(const reply of comment.replies){
      if(reply.id===id && status==='Delete'){
        foundFlag[0] = true
        const filteredReplies = comment.replies.filter((reply)=>reply.id!==id)
        return {...comment , replies : filteredReplies}
      }
      else updatedReplies.push(handleCrudOperations(reply,id,text,foundFlag))
    }


    return {...comment , replies : updatedReplies}
  }

  return [status,setStatus,getUpdatedComments]
}