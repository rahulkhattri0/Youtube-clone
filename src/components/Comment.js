import React, { useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";


const Comment = ({ data,setComments,comments,root_id }) => {
  console.log(comments)
  function getUpdatedComments(root_id,comments,text,id){
    const updatedComments = comments.map((rootComment)=>{
      if(root_id!==rootComment.root_id) return rootComment
      else{
        return addReply(rootComment,id,text)
      }
    })
    return updatedComments
  }
  function addReply(comment,id,text){
    if(comment.id===id){
      return {
        ...comment,
        replies : [
          ...comment.replies,
          {
            id : Date.now(),
            name: "Rahul Khattri",
            text : text,
            replies : []
          }
        ]
      }
    }
    const updatedReplies = comment.replies.map((reply)=>addReply(reply,id,text))
    return {...comment , replies : updatedReplies}
  }
  const [showReplyInput,setShowReplyInput] = useState(false)
  const replyRef = useRef()
  return (
    <div className="flex flex-col gap-y-4 dark:text-white">
      <div className="flex flex-row items-center gap-x-4">
        <div className="flex flex-row gap-x-2 items-center"> 
          <FaUserCircle className="text-2xl"/>
          <p>{data.name}</p>
        </div>
        <p>{data.text}</p>
        <p className="text-md text-blue-500 ml-6 cursor-pointer" onClick={()=>setShowReplyInput(true)}>Reply</p>
      </div>
      { data.replies.length > 0 && <div className="flex flex-col gap-y-2 p-8 border-l-2 border-black">
        {data.replies.map((reply) => {
          return <Comment root_id={root_id} key={reply.id} data={reply} setComments={setComments} comments={comments} />;
        })}
      </div>}
      {showReplyInput && <form className="flex flex-row gap-x-2" onSubmit={(e)=>{
        e.preventDefault()
        const text = replyRef.current.value
        if(text){
          const updatedComments = getUpdatedComments(root_id,comments,text,data.id)
          setComments(updatedComments)
        }
        setShowReplyInput(false)
      }}>
        <input type="text" className="w-[90%] dark:bg-slate-500 rounded-md p-1" placeholder="Add Reply..." autoFocus ref={replyRef} onBlur={()=>setShowReplyInput(false)}/>
        <button className="w-[10%] bg-green-400 rounded-md" type="submit">Add</button>
      </form>}
    </div>
  );
};

export default Comment;
