import { useState } from "react"
import { produce } from 'immer'

export const useUpdateComments = () =>{

    const [status,setStatus] = useState(null)
  function getUpdatedComments(comments,text,id){
    
    const updatedComments = produce(comments,(draftComments)=>{

      const foundFlag = [false]
      for(const rootComment of draftComments){
        if(status==='Delete' && rootComment.id===id){
           handleDelete(draftComments,id)
           break
        }
        else if(!foundFlag[0]) handleCrudOperations(rootComment,id,text,foundFlag)
      }
    })
    return updatedComments
  }

  function handleDelete(comments,deleteId){
    let deleteIndex;
    for (let index = 0; index < comments.length; index++) {
      const comment = comments[index];
      if(comment.id===deleteId){
        deleteIndex = index
        break
      }
    }
    comments.splice(deleteIndex,1)
  }

  function handleCrudOperations(comment,id,text,foundFlag){
    
    if(foundFlag[0]) return ;
    if(comment.id===id){
      foundFlag[0] = true
      if(status==='Add') comment.replies.push({
        id : Date.now(),
        text,
        replies:[]
      })
      else if(status === 'Edit') comment.text = text
      return
    }

    for(const reply of comment.replies){
      if(reply.id===id && status==='Delete'){
        foundFlag[0] = true
        handleDelete(comment.replies,id)
        return
      }
      else handleCrudOperations(reply,id,text,foundFlag)
    }
  }

  return [status,setStatus,getUpdatedComments]
}