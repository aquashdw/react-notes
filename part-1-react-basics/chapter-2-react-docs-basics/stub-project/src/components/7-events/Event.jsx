export default function Event(){
    const handleClickCaptureOut = () => {
        console.log("handleClickCaptureOut");
    }

    const handleClickCaptureIn = () => {
        console.log("handleClickCaptureIn");
    }

    const handleButtonClick = () => {
        console.log("handleButtonClick");
    }

    const handleClickBubble = () => {
        console.log("handleClickBubble");
    }

    return <div onClickCapture={handleClickCaptureOut}>
        <div onClickCapture={handleClickCaptureIn} onClick={handleClickBubble}>
            <button onClick={handleButtonClick}>Button</button>
        </div>
    </div>;
}