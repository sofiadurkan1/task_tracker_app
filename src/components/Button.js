import React from 'react'

export const Button = ({color, text}) => {
    const handleClick = () => {
        console.log("click");
    }
    return (
        <button className="btn" style={{backgroundColor: color}} onClick={handleClick}>{text}</button>
    )
}

export default Button;