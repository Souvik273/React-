import React from 'react'
import { useReducer } from 'react'

const CountReducer = (state,action)=>{
    switch(action.type){
      case 'INCREMENT':
        return state+action.payload;
      case 'DECREMENT':
        return state-action.payload;
      default:
        throw error ('Error in action')
    }
  }

const CounterAppl = () => {

    const[state,dispatch] = useReducer(CountReducer,0)

  return (
    <div>
        <h1>Count: {state}</h1>
      <button onClick={()=>dispatch({type:'INCREMENT',payload:5})}>INC</button>
      <button onClick={()=>dispatch({type:'DECREMENT',payload:3})}>DEC</button>
    </div>
  )
}

export default CounterAppl