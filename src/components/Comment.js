import React from "react";


const Comment = ({ data }) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center gap-x-1">
        <p>{data.name}</p>
        <p>{data.text}</p>
      </div>
      { data.replies.length > 0 && <div className="flex flex-col gap-y-2 p-8 border-l-2 border-black">
        {data.replies.map((reply) => {
          return <Comment data={reply} />;
        })}
      </div>}
    </div>
  );
};

export default Comment;
