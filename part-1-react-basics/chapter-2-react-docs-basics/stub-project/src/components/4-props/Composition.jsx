const Welcome = (props) => {
    return <h1>Hello, {props.name}</h1>
}

export default function Composition(){
    return <div>
        <Welcome name="Jeeho" />
        <Welcome name="Park" />
    </div>
}