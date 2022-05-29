import withLoading from "./withLoading";

function Button(props){
    return <div><button>Button</button></div>;
}

export default withLoading(Button);