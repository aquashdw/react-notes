import withLoading from "./withLoading";

function Button(){
    return <div><button>Button</button></div>;
}

export default withLoading(Button);