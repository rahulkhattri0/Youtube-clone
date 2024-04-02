import { useRef, useState } from "react";
import Comment from "./Comment";
// import { comments } from "../data/commentData";
const CommentBox = () => {
  const [comments,setComments] = useState([])
  const inputRef = useRef(null)
  console.log('commentssss',comments)
  return (
    <div className="m-4 flex flex-col gap-y-2 dark:text-white">
        <p className="font-bold text-2xl">Comments:</p>
        { comments.length === 0 ? <p className="text-md">No Comments!</p> : <div className="p-2 flex flex-col gap-y-4 bg-slate-300 dark:bg-gray-700 rounded-lg">
            {comments.map((c) => {
             return <Comment  root_id={c.root_id} key={c.id} data={c} comments={comments} setComments={setComments}/>
            })}
        </div>}
        <form className="flex flex-row gap-x-2 p-4" onSubmit={(e)=>{
          e.preventDefault()
          const comment = inputRef.current.value
          if(comment){
            setComments([
              ...comments,
              {
                root_id : comments.length===0 ? 0 : comments[comments.length-1].root_id + 1,
                id : Date.now(),
                text : comment,
                replies : []
              }
            ])
          }
          inputRef.current.value = ""
        }}>
            <input type="text" placeholder="Add Comment..." className="p-1 w-[90%] bg-slate-200 dark:bg-gray-700 rounded-lg" ref={inputRef}/>
            <button className="rounded-md bg-red-700 text-white p-1 w-[10%]" type="submit">Add</button>
        </form>
    </div>
  );
};

export default CommentBox;
