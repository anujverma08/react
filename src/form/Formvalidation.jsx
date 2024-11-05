import React, { useState } from 'react';

const Formvalidation = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors,setErrors] = useState({});    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,[name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // console.log(formData)
        const validationErrors = {};
        if(!formData.username.trim()) {
            validationErrors.username = "Username is required";
        }

        if(!formData.email.trim()) {
            validationErrors.email = "Email is required";
        }else if(!/\S+@\S+\.\S+/.test(formData.email)) {
            validationErrors .email = "Email is invalid";
        }

        if(!formData.password) {
            validationErrors.password = "Password is required";
        }else if(formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters";
        }

        if(!formData.confirmPassword) {
            validationErrors.confirmPassword = "Confirm Password is required";
        }

        setErrors(validationErrors);
        
        if(Object.keys(validationErrors).length === 0) {
            alert("Form Submitted Successfully");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Formvalidation;