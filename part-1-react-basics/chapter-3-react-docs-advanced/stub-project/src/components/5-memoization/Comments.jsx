import CommentItem from "./CommentItem";
import {useCallback} from "react";

export default function Comments(props){
    const handleClick = useCallback(() => {

    }, []);

    return <div>
        {props.commentList?.map(item => <CommentItem
            key={item.title}
            title={item.title}
            content={item.content}
            likes={item.likes}
            onClick={handleClick}
        />)}
    </div>
}