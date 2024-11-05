import React, { useCallback,useState } from 'react';


const Usecallback = () => {
    const [count,setcount] = useState(0);

    const increment = () => {
        setcount(count + 1);
    }

    const decrement = () => {
        if(count > 0){
            setcount(count - 1);
        }
    }

}
