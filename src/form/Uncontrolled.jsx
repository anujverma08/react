import React , {useRef} from "react";

function Uncontrolled() {
    const inputRef = useRef(null); // Create a ref


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Value: ",inputRef.current.value); // Access input value using ref
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="text"
                 ref={inputRef} // Uncontrolled , value manage by the DOM
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Uncontrolled;