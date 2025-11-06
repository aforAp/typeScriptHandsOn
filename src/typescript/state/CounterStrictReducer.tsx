import { useReducer } from "react";

const initialState = {count : 0};
type CounterType = {
    count: number
}

type CounterAction = {
    type: 'increment'| 'decrement'| 'reset',
    payload?: number
}

function reducer(state: CounterType, action: CounterAction) {
    switch(action.type) {
        case 'increment':
        return {
            count: state.count + action.payload
        }
        case 'decrement':
            return {
                count: state.count - action.payload
            }
            case 'reset':
            return initialState
        default:
            return state;
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
        <h1>Count {state.count}</h1>
        <button onClick={() => dispatch({type: "increment", payload: 10})}>+</button>
        <button onClick={() => dispatch({type: "decrement", payload: 10})}>-</button>
        <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </>
    )
}