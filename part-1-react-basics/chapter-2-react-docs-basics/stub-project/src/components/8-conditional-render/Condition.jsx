function UserGreeting(props) {
    return <h1>{props.username && `${props.username}, `}Welcome it's {props.count} times</h1>;
}

function GuestGreeting() {
    return <h1>Please sign up</h1>;
}

const Greeting = (props) =>
     props.isLoggedIn ? <UserGreeting username="Jeeho" count={0}></UserGreeting> : <GuestGreeting></GuestGreeting>;

export default function Condition() {
    return <div>
        <Greeting isLoggedIn={true}/>
    </div>;
}