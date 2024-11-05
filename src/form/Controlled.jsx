import React, {useState} from "react";

function Controlled() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
            // Update state on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUbmitted Value: ",inputValue);
    };
    
    const a = () => {
        alert("form successfully submitted");
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
                <input type="text" 
                value={inputValue} // Controlled by state
                onChange={handleChange} />
            </label>
            <button type="submit" onClick={a}>Submit</button>
        </form>
    );
}

export default Controlled;