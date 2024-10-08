import React from 'react'
import { useEffect, useRef, useState } from "react";


// export default function Useeffect() {

//     const [myData,setMyData] = useState("");
//     const [count,setCount] = useState(0);

//     useEffect(()=> {
//         setCount(count+1 );
//     },[myData]);
//   return (
//     <>
//         <input 
//             type="text"
//             value={myData}
//             onChange={(e) => setMyData(e.target.value)}
//          />
//          <p> The number of times rendered. {count}</p>

//     </>
    
//   )
// }



export default function Useeffect() {
    const [myData, setMyData] = useState("");
    const count = useRef(100);
    const inputRef = useRef(null);

    useEffect(() => {
        count.current = count.current + 1;
    });

    const changeStyle = () => {
        if (inputRef.current) {
            inputRef.current.style.backgroundColor = "yellow";
        }
    };

    return (
        <>
            <input
                ref={inputRef}
                type="text"
                value={myData}
                onChange={(e) => setMyData(e.target.value)}
            />
            <p>The number of times rendered: {count.current}</p>
            <button onClick={changeStyle}>Submit</button>
        </>
    );
}

