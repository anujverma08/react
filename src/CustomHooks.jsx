import {useState} from 'react';

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((prevCount) => prevCount + 1);
    const decrement = () => setCount((prevCount) => Math.max(prevCount - 1,0));
    const reset = () => setCount(initialValue);

    return { count,increment,decrement,reset };

}

export default useCounter;


