import React,{useState} from 'react';
const Hook=()=>{
    const[count,setCount]=useState(200);

const Increment = () => {
    setCount(count+1);
}

const Decrement = () => {
    setCount(count-1);
}

  return (
    <>
    <p> 
        <div>Counter using Functional Component  {count} </div> 
        <br/>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </p>
    </>
  )
}
export default Hook;
