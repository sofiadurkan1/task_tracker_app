import React from 'react';

const Button = ({ color, text, toggleShow }) => {
  return (
    <button
      className="btn"
      style={{ backgroundColor: color }}
      onClick={toggleShow}
    >
      {text}
    </button>
  );
};

export default Button;