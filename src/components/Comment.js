import React, { useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useSelector } from "react-redux";


const Comment = ({ data,setComments,comments,root_id }) => {
  const username = useSelector((store)=>store.user.username)

  
  function getUpdatedComments(root_id,comments,text,id){
    const updatedComments = comments.map((rootComment)=>{
      if(root_id!==rootComment.root_id) return rootComment
      else{
        return handleCrudOperations(rootComment,id,text,[false])
      }
    })
    let filteredRootComments;
    if(status==='Delete') filteredRootComments = updatedComments.filter((comment)=>comment!==null)
    return filteredRootComments ?? updatedComments
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
      else if(status === 'Delete') return null
    }
    let filteredReplies;
    const updatedReplies = comment.replies.map((reply)=>handleCrudOperations(reply,id,text,foundFlag))
    if(status==='Delete') filteredReplies = updatedReplies.filter((reply)=>reply!==null)
    return {...comment , replies : filteredReplies ?? updatedReplies}
  }


  const [status,setStatus] = useState(null)
  const replyRef = useRef()
  return (
    <div className="flex flex-col gap-y-4 dark:text-white">
      <div className="flex flex-row just gap-x-4">
        <div className="flex flex-row gap-x-2 items-center"> 
          <FaUserCircle className="text-2xl"/>
          <p>{username ?? 'Guest'}</p>
        </div>
        <p>{data.text}</p>
        <p className="text-md text-blue-500 cursor-pointer" onClick={()=>setStatus('Add')}>Reply</p>
        <p className="text-md text-blue-500 cursor-pointer" onClick={()=>setStatus('Edit')}>Edit</p>
        <MdDeleteOutline className="text-xl text-red-600 cursor-pointer" onClick={()=>setStatus('Delete')}/>
      </div>
      { data.replies.length > 0 && <div className="flex flex-col gap-y-2 p-8 border-l-2 border-black">
        {data.replies.map((reply) => {
          return <Comment root_id={root_id} key={reply.id} data={reply} setComments={setComments} comments={comments} />;
        })}
      </div>}
      {(status==='Add' || status==='Edit') && <form className="flex flex-row gap-x-2" onSubmit={(e)=>{
        e.preventDefault()
        const text = replyRef.current.value
        if(text){
          console.log('this is text',text)
          const updatedComments = getUpdatedComments(root_id,comments,text,data.id)
          setComments(updatedComments)
        }
        setStatus(null)
      }}>
        <input 
          type="text" 
          className="w-[90%] dark:bg-slate-500 rounded-md p-1" 
          defaultValue={status==='Edit' ? data.text : null} 
          placeholder={status==='Add' ? 'Add Reply...' : null} 
          autoFocus ref={replyRef} 
          onBlur={()=>setStatus(null)}
        />
        <button className="w-[10%] bg-green-400 rounded-md" type="submit">{status==='Edit' ? 'Save' : 'Add'}</button>
      </form>}
      {
        status==='Delete' && <div className="flex gap-3 items-center">
          <button className="bg-green-500 rounded-lg pl-2 pr-2" onClick={()=>{
            const updatedComments = getUpdatedComments(root_id,comments,'',data.id)
            setComments(updatedComments)
            setStatus(null)
            }}>Yes</button>
          <button className="bg-gray-400 rounded-lg pl-2 pr-2" onClick={()=>setStatus(null)}>No</button>
        </div>
      }
    </div>
  );
};

export default Comment;
