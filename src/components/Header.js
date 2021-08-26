import React from 'react';
import PropTypes from 'prop-types'
import Button from "./Button"

function Header(props) {
    return (
        <div className="header">
            <h1>{props.title} </h1>
            <Button color="purple" text = "Show Add Task Bar"/>
          
            
        </div>
    )
}

export default Header;


// Header.defaultProps = {
//     title: "Task Tracker"
// }

// Header.PropTypes = {
//     title: PropTypes.string.isRequired,
// }