import React from "react";
function Navigation(props){
    return ( <>
        <nav class='nav' >
            <span><a href= "#home">{props.title}</a></span>
            <span><a href= "#about">About Us</a></span>
            <span><a href= "#contact">Contact</a></span>
            <span><a href= "#service">Services</a></span>
            <div>
            <input type="search" placeholder="search here" />
            <button>Go</button>
            </div>

        </nav>
        </>
    );
}

Navigation.defaultProps = {
    title: "React notes" 
}

export default Navigation;
