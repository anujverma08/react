import React, {useReducer} from 'react'

export default function Reducer() {
    const initialState = 0;
    const reducer = (cstate, action) => {
        switch (action) {
            case 'increment':
                return cstate + 1;
            case 'decrement':
                return cstate > 0 ? cstate - 1 : 0;
            default:
                return cstate;
        }
    }

    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
    </div>
  )
}
