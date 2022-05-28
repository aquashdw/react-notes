import React from "react";

export default function UnControlledComponent() {
    const fileInputRef = React.useRef();

    const  handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `Selected file - ${fileInputRef.current.files[0].name}`
        );
    }
    return <form onSubmit={handleSubmit}>
        <label>
            Upload file:
            <input type="file" ref={fileInputRef} />
        </label>
        <br />
        <button type="submit">Submit</button>
    </form>
}