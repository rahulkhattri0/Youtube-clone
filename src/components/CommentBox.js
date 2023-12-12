import { useRef, useState } from "react";
import Comment from "./Comment";
// import { comments } from "../data/commentData";
const CommentBox = () => {
  const [comments,setComments] = useState([])
  const inputRef = useRef(null)
  return (
    <div className="m-4 flex flex-col gap-y-2">
        <p className="text-black font-bold text-2xl">Comments:</p>
        { comments.length === 0 ? <p className="text-black text-md">No Comments!</p> : <div className="p-2 flex flex-col gap-y-4 bg-slate-300 rounded-lg">
            {comments.map((c) => (
                <Comment  root_id={c.root_id} key={c.id} data={c} comments={comments} setComments={setComments}/>
            ))}
        </div>}
        <form className="flex flex-row gap-x-2 p-4" onSubmit={(e)=>{
          e.preventDefault()
          const comment = inputRef.current.value
          if(comment){
            setComments([
              ...comments,
              {
                root_id : comments.length,
                id : Date.now(),
                name : "Rahul Khattri",
                text : comment,
                replies : []
              }
            ])
          }
          inputRef.current.value = ""
        }}>
            <input type="text" placeholder="Add Comment..." className="w-[90%]" ref={inputRef}/>
            <button className="rounded-md bg-green-400 text-white p-1 w-[10%]" type="submit">Add</button>
        </form>
    </div>
  );
};

export default CommentBox;
