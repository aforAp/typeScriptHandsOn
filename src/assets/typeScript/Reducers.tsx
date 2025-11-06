import {ChangeEvent, ReactNode, useReducer} from 'react'

type StateType = {
    count: number;
    text: string;
}

const initialState = {count: 0, text: ""};

const enum REDUCER_ACTION_TYPE {
    INCREMENT,
    DECREMENT,
    NEW_INPUT,
}



type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: string,
}
const reducer = (state:StateType, action: ReducerAction):StateType => {
    switch(action.type) {
        case REDUCER_ACTION_TYPE.INCREMENT: 
          return {
            ...state, count: state.count + 1
          }
          case REDUCER_ACTION_TYPE.DECREMENT: 
          return {
            ...state, count: state.count - 1
          }
          case REDUCER_ACTION_TYPE.NEW_INPUT: 
          return {
            ...state, text: action.payload ?? ""
          }
        default: 
        throw new Error();
    }
}

type ChildrenType = {
    children: (num : number) => ReactNode
}

const Counters = ({children}: ChildrenType) => {
     const [state, dispatch] = useReducer(reducer, initialState);
    const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREMENT});
    const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT});
    const handleTextInput = (e : ChangeEvent<HTMLInputElement>) => {
      dispatch({type: REDUCER_ACTION_TYPE.NEW_INPUT, 
        payload: e.target.value
      })
    }
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
         <input type="text" onChange={handleTextInput} className='bg-red-500'/>
         <h2>{state.text ?? "hello"}</h2>
    </div>
  )
}

export default Counters;
