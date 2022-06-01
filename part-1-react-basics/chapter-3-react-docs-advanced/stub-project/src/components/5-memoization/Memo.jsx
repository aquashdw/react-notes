import {useEffect, useState} from "react";
import Comments from "./Comments";

const commentList = [
    { title: "Comment1", content: "message 1", likes: 1 },
    { title: "Comment2", content: "message 2", likes: 1 },
    { title: "Comment3", content: "message 3", likes: 1 },
]

export default function Memo(){
    const [comments, setComments] = useState(commentList);
    // useEffect(() => {
    //      const interval = setInterval(() => {
    //          setComments(prev => [...prev,
    //              {
    //                  title: `Comment${prev.length + 1}`,
    //                  content: `message ${prev.length + 1}`,
    //                  likes: 0
    //              }])
    //      }, 1000);
    //
    //      return () => clearInterval(interval);
    // })
    
    return <div>
        <Comments commentList={comments} />
    </div>;
}