import React from 'react';

export default function Addition() {
    const [number1, setNumber1] = React.useState('');
    const [number2, setNumber2] = React.useState('');
    const [sum, setSum] = React.useState(null);

    const handleAdd = (e) => {
        e.preventDefault();
        const result = parseFloat(number1) + parseFloat(number2);
        setSum(result);
    };

    return (
        <>
            <form onSubmit={handleAdd}>
                <label>
                    Number1: 
                    <input 
                        type="text" 
                        value={number1} 
                        onChange={(e) => setNumber1(e.target.value)} 
                    />
                </label>
                <br />
                <label>
                    Number2: 
                    <input 
                        type="text" 
                        value={number2} 
                        onChange={(e) => setNumber2(e.target.value)} 
                    />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
            {sum !== null && (
                <div>
                    <h4>Sum: {sum}</h4>
                </div>
            )}
        </>
    );
}
