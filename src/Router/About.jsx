import React from "react";  
function About() {
    const queryParams  = new URLSearchParams(window.location.search);
    const topic= queryParams.get("opic");
    return (
        <h1>The topic is {topic}</h1>
    );
}

export default About;