import React from 'react';
import Button from './Button';
// import PropTypes from "prop-types";

const Header = ({ title }) => {
    return (
        <div className="header">
            <h1>{title}</h1>
            <Button color="purple" text="Show Add Tak Bar"/>
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