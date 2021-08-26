import React from 'react'

function Button({color,text}) {
    return (
        <div className="btn">
           <button style={{backgroundColor:color}}>{text}</button>
            
        </div>
    );
}

export default Button
