import React from "react";
import Comment from "./Comment";
import { comments } from "../data/commentData";
const CommentBox = () => {
  return (
    <div className="m-4 flex flex-col gap-y-2">
        <p className="text-black font-bold text-2xl">Comments:</p>
        <div className="bg-slate-400 p-2 rounded-lg">
            {comments.map((c) => (
                <Comment data={c} />
            ))}
        </div>
      
    </div>
  );
};

export default CommentBox;
