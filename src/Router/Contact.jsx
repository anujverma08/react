import React from "react";
function Contact() {
    const queryParams  = new URLSearchParams(window.location.search);
    const method = queryParams.get("method");
    return (
        <h1>The contact method is {method}</h1>
    );
}

export default Contact;