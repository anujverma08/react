import React from 'react';

function Paragraph(props){
    return <p className="a">{props.title} </p>
};
function SecodPara(){
    return <h2 className="b">This is second para</h2>
}
function ThirdPara(){
    return <h3>This is third paragraph</h3>
}

export default Paragraph;
export {SecodPara, ThirdPara};

