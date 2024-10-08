import React,{useEffect, useState} from 'react';
const Hook=()=>{
    const[count,setCount]=useState(200);
    useEffect(()=>{
      console.log(`You clicked ${count} times`)
    },[count]);
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
        <input type="text" value={count} onChange={(e) => setCount(e.target.value)} />
        <br/>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
    </p>
    </>
  )
}
export default Hook;
