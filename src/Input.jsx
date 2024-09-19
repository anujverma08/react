import React, {useState} from 'react';


export default function Input() {
    const[form,submit]=useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const submitForm = () => {
            alert(`Name: ${name} Age: ${age}`);
    
    } ;  
  return (
    <>
        <form onSubmit={submitForm}>
            <label> Name </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <br/>
            <label> Age </label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        </form>
        <button type="submit" onClick={submitForm}>Submit</button>
    </>
    )     
}

