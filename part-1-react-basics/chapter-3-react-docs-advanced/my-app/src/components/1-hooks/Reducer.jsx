import {useReducer} from "react";

export default function Reducer() {
    const initialState = { count: 0 };
    const reducer = (state, action) => {
        switch (action.type) {
            case "reset":
                return initialState;
            case "increment":
                return { count: state.count + 1 }
            case "decrement":
                return { count: state.count - 1 }
            default:
                throw new Error("Not Implemented");
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState, undefined);

    return <div>
        Count: {state.count}
        <div>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
        </div>
    </div>;
}