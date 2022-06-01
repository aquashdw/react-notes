import CommentItem from "./CommentItem";
import {useCallback} from "react";

export default function Comments({ commentList }){
    const handleClick = useCallback(() => {

    }, []);

    return <div>
        {commentList?.map(item => <CommentItem
            key={item.title}
            title={item.title}
            content={item.content}
            likes={item.likes}
            onClick={handleClick}
        />)}
    </div>
}