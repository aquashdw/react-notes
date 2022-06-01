import "./CommentItem.css";
import {memo, Profiler, useMemo, useState} from "react";

function CommentItem({ title, content, likes, onClick }){
    const [clickCount, setClickCount] = useState(0);

    function onRenderCallback(
        id, // the "id" prop of the Profiler tree that has just committed
        phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
        actualDuration, // time spent rendering the committed update
        baseDuration, // estimated time to render the entire subtree without memoization
        startTime, // when React began rendering this update
        commitTime, // when React committed this update
        interactions // the Set of interactions belonging to this update
    ) {
        console.log(`actualDuration(${title}: ${actualDuration})`);
    }

    const handleClick = () => {
        onClick();
        setClickCount(prev => prev + 1);
    }

    const rate = useMemo(() => {
        console.log(`rate check: ${title}`)
        return likes > 10 ? "Good" : "Bad";
    }, [likes])

    return <Profiler id="CommentItem" onRender={onRenderCallback}>
        <div className="CommentItem" onClick={handleClick}>
            <div>Title: {title}</div>
            <div>Content: {content}</div>
            <div>Likes: {likes}</div>
            <div>Rate: {rate}</div>
            <div>ClickCount: {clickCount}</div>
        </div>
    </Profiler>;
}

export default memo(CommentItem);